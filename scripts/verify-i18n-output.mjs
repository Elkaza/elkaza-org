import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const outputRoot = path.join(process.cwd(), ".next", "server", "app");
const exactForbiddenKeys = [
  "exp1_title",
  "exp1_desc",
  "exp2_title",
  "exp2_desc",
  "exp3_title",
  "exp3_desc",
  "exp4_title",
  "exp4_desc",
];
const visibleTranslationKey = />\s*((?:(?:nav|cv|about|research|cert|blog|skill|tech|contact|footer|legal)_[a-z0-9_]+)|(?:(?:[a-z][a-z0-9]*_)+(?:title|desc)))\s*</giu;

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtmlFiles(entryPath));
    if (entry.isFile() && entry.name.endsWith(".html")) files.push(entryPath);
  }

  return files;
}

const htmlFiles = await collectHtmlFiles(outputRoot);
const failures = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const matches = new Set(exactForbiddenKeys.filter((key) => html.includes(key)));

  for (const match of html.matchAll(visibleTranslationKey)) matches.add(match[1]);
  if (matches.size > 0) failures.push(`${path.relative(process.cwd(), file)}: ${[...matches].join(", ")}`);
}

if (failures.length > 0) {
  console.error("Raw localization keys found in generated HTML:");
  for (const failure of failures) console.error(`  ${failure}`);
  process.exit(1);
}

console.log(`Localization output check passed (${htmlFiles.length} HTML files scanned).`);
