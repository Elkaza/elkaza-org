import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const repositoryRoot = process.cwd();
const publishableRoots = ["app", "public"];
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mjs",
  ".svg",
  ".ts",
  ".tsx",
  ".txt",
  ".xml",
]);

const forbiddenFiles = [
  {
    test: (relativePath) => relativePath.toLowerCase() === "public/images/me.jpg",
    reason: "the public portfolio intentionally excludes the personal portrait",
  },
  {
    test: (relativePath) => /(^|\/)(?:\.env|id_rsa|id_ed25519|backup[-_ ]?codes?|recovery[-_ ]?codes?)$/iu.test(relativePath),
    reason: "sensitive configuration or recovery material must not be publishable",
  },
  {
    test: (relativePath) => /\.(?:key|p12|pfx|ovpn)$/iu.test(relativePath),
    reason: "private-key or access-configuration files must not be publishable",
  },
];

const forbiddenContent = [
  {
    pattern: /\b10(?:\.\d{1,3}){3}\b/gu,
    reason: "private RFC1918 address",
  },
  {
    pattern: /\b172\.(?:1[6-9]|2\d|3[01])(?:\.\d{1,3}){2}\b/gu,
    reason: "private RFC1918 address",
  },
  {
    pattern: /\b192\.168(?:\.\d{1,3}){2}\b/gu,
    reason: "private RFC1918 address",
  },
  {
    pattern: /\b100\.(?:6[4-9]|[7-9]\d|1[01]\d|12[0-7])(?:\.\d{1,3}){2}\b/gu,
    reason: "carrier-grade NAT or overlay-network address",
  },
  {
    pattern: /\b169\.254(?:\.\d{1,3}){2}\b/gu,
    reason: "link-local address",
  },
  {
    pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/gu,
    reason: "private-key material",
  },
  {
    pattern: /\bAKIA[0-9A-Z]{16}\b/gu,
    reason: "AWS access-key signature",
  },
  {
    pattern: /\bghp_[A-Za-z0-9]{30,}\b/gu,
    reason: "GitHub token signature",
  },
  {
    pattern: /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/gu,
    reason: "Slack token signature",
  },
  {
    pattern: /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/gu,
    reason: "API-key signature",
  },
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(absolutePath));
    } else if (entry.isFile()) {
      files.push(absolutePath);
    }
  }

  return files;
}

const files = (
  await Promise.all(
    publishableRoots.map((root) => collectFiles(path.join(repositoryRoot, root))),
  )
).flat();

const failures = [];
let scannedTextFiles = 0;

for (const absolutePath of files) {
  const relativePath = path.relative(repositoryRoot, absolutePath).replaceAll("\\", "/");

  for (const rule of forbiddenFiles) {
    if (rule.test(relativePath)) {
      failures.push(`${relativePath}: ${rule.reason}`);
    }
  }

  if (!textExtensions.has(path.extname(absolutePath).toLowerCase())) continue;
  scannedTextFiles += 1;
  const content = await readFile(absolutePath, "utf8");

  for (const rule of forbiddenContent) {
    rule.pattern.lastIndex = 0;
    const match = rule.pattern.exec(content);
    if (!match) continue;

    const line = content.slice(0, match.index).split(/\r?\n/u).length;
    failures.push(`${relativePath}:${line}: ${rule.reason}`);
  }
}

if (failures.length > 0) {
  console.error("Public-content privacy verification failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Public-content privacy verification passed (${scannedTextFiles} text files inspected).`);
