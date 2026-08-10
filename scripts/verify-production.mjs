const checks = [
  {
    name: "homepage",
    url: "https://elkaza.org/",
    mustInclude: ["Mohamed Elkaza", "IT Infrastructure &amp; Application Engineer", "TypeScript"],
    mustNotInclude: ["Start Here"],
  },
  {
    name: "about page",
    url: "https://elkaza.org/about",
    mustInclude: ["About | Mohamed Elkaza", "Professional profile", "Application Engineering"],
    mustNotInclude: ["Good Fit"],
  },
  {
    name: "projects page",
    url: "https://elkaza.org/projects",
    mustInclude: ["Engineering Case Studies", "EdgeGuardian"],
    mustNotInclude: [],
  },
  {
    name: "security page",
    url: "https://elkaza.org/security",
    mustInclude: ["Security &amp; Platform Operations", "private access paths", "controlled exposure"],
    mustNotInclude: [],
  },
  {
    name: "CV page",
    url: "https://elkaza.org/cv",
    mustInclude: ["CV | Mohamed Elkaza", "Application Engineering", "Infrastructure"],
    mustNotInclude: ["Download PDF"],
  },
];

const metadataChecks = [
  {
    name: "robots.txt",
    url: "https://elkaza.org/robots.txt",
    mustInclude: ["User-Agent: *", "Allow: /", "Sitemap: https://elkaza.org/sitemap.xml"],
  },
  {
    name: "sitemap.xml",
    url: "https://elkaza.org/sitemap.xml",
    mustInclude: [
      "https://elkaza.org/",
      "https://elkaza.org/about",
      "https://elkaza.org/projects",
      "https://elkaza.org/security",
    ],
  },
];

const failures = [];

async function fetchText(url) {
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

  return response.text();
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
