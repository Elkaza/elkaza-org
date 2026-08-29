import { promises as fs } from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const outDir = path.resolve(process.cwd(), 'out');
const englishDir = path.join(outDir, 'en');
const execFileAsync = promisify(execFile);

async function collectHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await collectHtmlFiles(entryPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(entryPath);
    }
  }

  return files;
}

async function collectFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(entryPath));
    else if (entry.isFile()) files.push(entryPath);
  }

  return files;
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

if (await pathExists(englishDir)) {
  const htmlFiles = await collectHtmlFiles(englishDir);

  for (const filePath of htmlFiles) {
    const html = await fs.readFile(filePath, 'utf8');
    const updated = html.replace('<html lang="de-AT"', '<html lang="en"');

    if (updated !== html) {
      await fs.writeFile(filePath, updated, 'utf8');
    }
  }

  console.log(`Postprocessed ${htmlFiles.length} English HTML files.`);
}

const exportFiles = await collectFiles(outDir);
let aliasesCreated = 0;

for (const filePath of exportFiles) {
  if (path.extname(filePath) !== '.txt') continue;

  const relativeParts = path.relative(outDir, filePath).split(path.sep);
  const rscStart = relativeParts.findIndex((part) => part.startsWith('__next.'));
  if (rscStart === -1 || rscStart === relativeParts.length - 1) continue;

  const targetPath = path.join(
    outDir,
    ...relativeParts.slice(0, rscStart),
    relativeParts.slice(rscStart).join('.'),
  );

  await fs.copyFile(filePath, targetPath);
  aliasesCreated += 1;
}

console.log(`Created ${aliasesCreated} static RSC aliases.`);

async function resolveGitSha() {
  const configuredSha = process.env.BUILD_GIT_SHA;
  if (configuredSha) return configuredSha;

  const { stdout } = await execFileAsync('git', ['rev-parse', 'HEAD'], {
    cwd: process.cwd(),
    encoding: 'utf8',
  });
  return stdout.trim();
}

const gitSha = await resolveGitSha();
if (!/^[0-9a-f]{40}$/i.test(gitSha)) {
  throw new Error(`Invalid build Git SHA: ${gitSha}`);
}

await fs.writeFile(
  path.join(outDir, 'version.json'),
  `${JSON.stringify({ gitSha: gitSha.toLowerCase() }, null, 2)}\n`,
  'utf8',
);
console.log(`Wrote version.json for ${gitSha.toLowerCase()}.`);
