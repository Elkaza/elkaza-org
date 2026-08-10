import { execFileSync } from "node:child_process";

const productionBaseUrl = "https://elkaza.org";

const checks = [
  {
    name: "homepage",
    url: `${productionBaseUrl}/`,
    mustInclude: ["Mohamed Elkaza", "IT Infrastructure &amp; Application Engineer", "TypeScript"],
    mustNotInclude: ["Start Here"],
  },
  {
    name: "about page",
    url: `${productionBaseUrl}/about`,
    mustInclude: ["About | Mohamed Elkaza", "Professional profile", "Application Engineering"],
    mustNotInclude: ["Good Fit"],
  },
  {
    name: "projects page",
    url: `${productionBaseUrl}/projects`,
    mustInclude: ["Engineering Case Studies", "EdgeGuardian"],
    mustNotInclude: [],
  },
  {
    name: "security page",
    url: `${productionBaseUrl}/security`,
    mustInclude: ["Security &amp; Platform Operations", "reduzierter Exponierung", "nachvollziehbare Erkennung"],
    mustNotInclude: [],
  },
  {
    name: "CV page",
    url: `${productionBaseUrl}/cv`,
    mustInclude: ["CV | Mohamed Elkaza", "Application Engineering", "Infrastructure"],
    mustNotInclude: ["Download PDF"],
  },
  {
    name: "contact page",
    url: `${productionBaseUrl}/contact`,
    mustInclude: ["Contact | Mohamed Elkaza", "Contact form currently inactive", "contact@elkaza.org"],
    mustNotInclude: ["Message received successfully"],
  },
];

const metadataChecks = [
  {
    name: "robots.txt",
    url: `${productionBaseUrl}/robots.txt`,
    mustInclude: ["User-Agent: *", "Allow: /", "Sitemap: https://elkaza.org/sitemap.xml"],
  },
  {
    name: "sitemap.xml",
    url: `${productionBaseUrl}/sitemap.xml`,
    mustInclude: [
      "https://elkaza.org/",
      "https://elkaza.org/about",
      "https://elkaza.org/projects",
      "https://elkaza.org/security",
    ],
  },
];

const failures = [];

function getExpectedCommit() {
  if (process.env.EXPECTED_COMMIT_SHA) return process.env.EXPECTED_COMMIT_SHA;

  return execFileSync("git", ["rev-parse", "HEAD"], {
    encoding: "utf8",
  }).trim();
}

async function fetchResponse(url) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": "elkaza-org-production-verifier/1.0",
      "cache-control": "no-cache",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response;
}

async function fetchText(url) {
  return (await fetchResponse(url)).text();
}

async function fetchJson(url) {
  return (await fetchResponse(url)).json();
}

const expectedCommit = getExpectedCommit();

try {
  const version = await fetchJson(`${productionBaseUrl}/api/version?verify=${Date.now()}`);
  const deployedCommit = typeof version.commit === "string" ? version.commit : "";

  if (!deployedCommit || deployedCommit === "development") {
    failures.push({ name: "deployed revision", missing: ["commit"] });
    console.error("FAIL elkaza.org deployed revision");
    console.error(`  expected: ${expectedCommit}`);
    console.error(`  deployed: ${deployedCommit || "missing"}`);
  } else if (deployedCommit !== expectedCommit) {
    failures.push({ name: "deployed revision", expectedCommit, deployedCommit });
    console.error("FAIL elkaza.org deployed revision");
    console.error(`  expected: ${expectedCommit}`);
    console.error(`  deployed: ${deployedCommit}`);
  } else {
    console.log(`OK   elkaza.org deployed revision ${deployedCommit}`);
  }
} catch (error) {
  failures.push({ name: "deployed revision", error });
  console.error(`FAIL elkaza.org deployed revision: ${error instanceof Error ? error.message : String(error)}`);
}

for (const check of checks) {
  try {
    const separator = check.url.includes("?") ? "&" : "?";
    const html = await fetchText(`${check.url}${separator}verify=${Date.now()}`);
    const missing = check.mustInclude.filter((text) => !html.includes(text));
    const forbidden = check.mustNotInclude.filter((text) => html.includes(text));

    if (missing.length > 0 || forbidden.length > 0) {
      failures.push({ ...check, missing, forbidden });
      console.error(`FAIL elkaza.org ${check.name}`);
      if (missing.length > 0) console.error(`  missing: ${missing.join(", ")}`);
      if (forbidden.length > 0) console.error(`  forbidden: ${forbidden.join(", ")}`);
    } else {
      console.log(`OK   elkaza.org ${check.name}`);
    }
  } catch (error) {
    failures.push({ ...check, error });
    console.error(`FAIL elkaza.org ${check.name}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

for (const check of metadataChecks) {
  try {
    const text = await fetchText(check.url);
    const missing = check.mustInclude.filter((value) => !text.includes(value));

    if (missing.length > 0) {
      failures.push({ ...check, missing });
      console.error(`FAIL elkaza.org ${check.name}`);
      console.error(`  missing: ${missing.join(", ")}`);
    } else {
      console.log(`OK   elkaza.org ${check.name}`);
    }
  } catch (error) {
    failures.push({ ...check, error });
    console.error(`FAIL elkaza.org ${check.name}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures.length > 0) {
  process.exitCode = 1;
}
