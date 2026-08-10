import { execFileSync } from "node:child_process";

const productionBaseUrl = "https://elkaza.org";

const projectSlugs = [
  "enterprise-self-hosted-infrastructure",
  "edgeguardian-edge-ai-safety-bubble",
  "tinyml-vibration-anomaly-detection",
];

const routePairs = [
  {
    name: "homepage",
    de: "/",
    en: "/en",
    deText: ["Deutsch", "Englisch", "B2", "C1"],
    enText: ["German", "English", "B2", "C1"],
  },
  {
    name: "about",
    de: "/about",
    en: "/en/about",
    deText: ["Mohamed Elkaza"],
    enText: ["Mohamed Elkaza"],
  },
  {
    name: "projects",
    de: "/projects",
    en: "/en/projects",
    deText: ["EdgeGuardian"],
    enText: ["EdgeGuardian"],
  },
  {
    name: "cv",
    de: "/cv",
    en: "/en/cv",
    deText: ["Lebenslauf", "Uneingeschränkter Arbeitsmarktzugang in Österreich"],
    enText: ["CV", "Unrestricted access to the Austrian labour market"],
  },
  {
    name: "contact",
    de: "/kontakt",
    en: "/en/contact",
    deText: ["Kontaktformular derzeit nicht aktiv", "contact@elkaza.org"],
    enText: ["Contact form currently inactive", "contact@elkaza.org"],
  },
  {
    name: "certifications",
    de: "/zertifikate",
    en: "/en/certifications",
    deText: ["Alle Zertifikate"],
    enText: ["All Certifications"],
  },
  {
    name: "security",
    de: "/security",
    en: "/en/security",
    deText: ["Security &amp; Plattformbetrieb"],
    enText: ["Security &amp; Platform Operations"],
  },
  ...projectSlugs.map((slug) => ({
    name: `project ${slug}`,
    de: `/projects/${slug}`,
    en: `/en/projects/${slug}`,
    deText: ["Architekturdiagramme"],
    enText: ["Architecture diagrams"],
  })),
];

const legacyRedirects = [
  { source: "/contact", target: "/en/contact" },
  { source: "/certifications", target: "/en/certifications" },
];

const failures = [];
const htmlCache = new Map();

function getExpectedCommit() {
  if (process.env.EXPECTED_COMMIT_SHA) return process.env.EXPECTED_COMMIT_SHA;

  return execFileSync("git", ["rev-parse", "HEAD"], {
    encoding: "utf8",
  }).trim();
}

function absolute(path) {
  return path === "/" ? productionBaseUrl : `${productionBaseUrl}${path}`;
}

function cacheBust(url) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}verify=${Date.now()}`;
}

async function fetchResponse(url, options = {}) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": "elkaza-org-production-verifier/2.0",
      "cache-control": "no-cache",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response;
}

async function fetchText(url) {
  if (htmlCache.has(url)) return htmlCache.get(url);
  const text = await (await fetchResponse(cacheBust(url))).text();
  htmlCache.set(url, text);
  return text;
}

async function fetchJson(url) {
  return (await fetchResponse(cacheBust(url))).json();
}

function includesAll(html, values) {
  return values.filter((value) => !html.includes(value));
}

function hasHtmlLang(html, lang) {
  return new RegExp(`<html[^>]*\\slang=["']${lang}["']`, "i").test(html);
}

function hasCanonical(html, href) {
  return new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']${escapeRegex(href)}["']`, "i").test(html);
}

function hasHreflang(html, lang, href) {
  return new RegExp(`<link[^>]+rel=["']alternate["'][^>]+hreflang=["']${lang}["'][^>]+href=["']${escapeRegex(href)}["']`, "i").test(html);
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function reportOk(message) {
  console.log(`OK   ${message}`);
}

function reportFail(name, details) {
  failures.push({ name, details });
  console.error(`FAIL ${name}`);
  for (const detail of details) console.error(`  ${detail}`);
}

const expectedCommit = getExpectedCommit();

try {
  const version = await fetchJson(`${productionBaseUrl}/api/version`);
  const deployedCommit = typeof version.commit === "string" ? version.commit : "";

  if (!deployedCommit || deployedCommit === "development") {
    reportFail("deployed revision", [`expected: ${expectedCommit}`, `deployed: ${deployedCommit || "missing"}`]);
  } else if (deployedCommit !== expectedCommit) {
    reportFail("deployed revision", [`expected: ${expectedCommit}`, `deployed: ${deployedCommit}`]);
  } else {
    reportOk(`deployed revision ${deployedCommit}`);
  }
} catch (error) {
  reportFail("deployed revision", [error instanceof Error ? error.message : String(error)]);
}

for (const pair of routePairs) {
  const deUrl = absolute(pair.de);
  const enUrl = absolute(pair.en);

  try {
    const deHtml = await fetchText(deUrl);
    const enHtml = await fetchText(enUrl);
    const deMissing = [
      ...includesAll(deHtml, pair.deText),
      ...(!hasHtmlLang(deHtml, "de") ? ['<html lang="de">'] : []),
      ...(!hasCanonical(deHtml, deUrl) ? [`canonical ${deUrl}`] : []),
      ...(!hasHreflang(deHtml, "de", deUrl) ? [`hreflang de ${deUrl}`] : []),
      ...(!hasHreflang(deHtml, "en", enUrl) ? [`hreflang en ${enUrl}`] : []),
    ];
    const enMissing = [
      ...includesAll(enHtml, pair.enText),
      ...(!hasHtmlLang(enHtml, "en") ? ['<html lang="en">'] : []),
      ...(!hasCanonical(enHtml, enUrl) ? [`canonical ${enUrl}`] : []),
      ...(!hasHreflang(enHtml, "de", deUrl) ? [`hreflang de ${deUrl}`] : []),
      ...(!hasHreflang(enHtml, "en", enUrl) ? [`hreflang en ${enUrl}`] : []),
    ];

    if (deMissing.length || enMissing.length) {
      reportFail(`route pair ${pair.name}`, [
        ...(deMissing.length ? [`${pair.de} missing: ${deMissing.join(", ")}`] : []),
        ...(enMissing.length ? [`${pair.en} missing: ${enMissing.join(", ")}`] : []),
      ]);
    } else {
      reportOk(`route pair ${pair.name}`);
    }
  } catch (error) {
    reportFail(`route pair ${pair.name}`, [error instanceof Error ? error.message : String(error)]);
  }
}

for (const redirect of legacyRedirects) {
  try {
    const response = await fetch(absolute(redirect.source), {
      redirect: "manual",
      headers: {
        "user-agent": "elkaza-org-production-verifier/2.0",
        "cache-control": "no-cache",
      },
    });
    const location = response.headers.get("location") ?? "";
    const expectedLocation = absolute(redirect.target);

    if (![301, 308].includes(response.status) || location !== expectedLocation) {
      reportFail(`redirect ${redirect.source}`, [
        `status: ${response.status}`,
        `location: ${location || "missing"}`,
        `expected: ${expectedLocation}`,
      ]);
    } else {
      reportOk(`redirect ${redirect.source} -> ${redirect.target}`);
    }
  } catch (error) {
    reportFail(`redirect ${redirect.source}`, [error instanceof Error ? error.message : String(error)]);
  }
}

try {
  const robots = await fetchText(`${productionBaseUrl}/robots.txt`);
  const missing = includesAll(robots, ["User-Agent: *", "Allow: /", "Sitemap: https://elkaza.org/sitemap.xml"]);
  if (robots.includes("Disallow: /en") || missing.length) {
    reportFail("robots.txt", [
      ...(missing.length ? [`missing: ${missing.join(", ")}`] : []),
      ...(robots.includes("Disallow: /en") ? ["blocks /en"] : []),
    ]);
  } else {
    reportOk("robots.txt");
  }
} catch (error) {
  reportFail("robots.txt", [error instanceof Error ? error.message : String(error)]);
}

try {
  const sitemap = await fetchText(`${productionBaseUrl}/sitemap.xml`);
  const requiredUrls = routePairs.flatMap((pair) => [absolute(pair.de), absolute(pair.en)]);
  const forbiddenUrls = [absolute("/contact"), absolute("/certifications")];
  const missing = requiredUrls.filter((url) => !sitemap.includes(url));
  const forbidden = forbiddenUrls.filter((url) => sitemap.includes(url));

  if (missing.length || forbidden.length) {
    reportFail("sitemap.xml", [
      ...(missing.length ? [`missing: ${missing.join(", ")}`] : []),
      ...(forbidden.length ? [`forbidden redirect URLs: ${forbidden.join(", ")}`] : []),
    ]);
  } else {
    reportOk("sitemap.xml canonical URL set");
  }
} catch (error) {
  reportFail("sitemap.xml", [error instanceof Error ? error.message : String(error)]);
}

try {
  const visited = new Set();
  const links = new Set();

  for (const pair of routePairs) {
    for (const path of [pair.de, pair.en]) {
      const url = absolute(path);
      const html = await fetchText(url);
      for (const match of html.matchAll(/\shref=["']([^"']+)["']/gi)) {
        const href = match[1];
        if (
          href.startsWith("/") &&
          !href.startsWith("/api/") &&
          !href.startsWith("/_next/") &&
          !href.includes("#")
        ) {
          links.add(absolute(href));
        }
      }
    }
  }

  for (const link of links) {
    if (visited.has(link)) continue;
    visited.add(link);
    const response = await fetch(link, {
      redirect: "follow",
      method: "GET",
      headers: {
        "user-agent": "elkaza-org-production-verifier/2.0",
        "cache-control": "no-cache",
      },
    });
    if (!response.ok) {
      reportFail("internal link", [`${link} returned ${response.status}`]);
    }
  }

  if (!failures.some((failure) => failure.name === "internal link")) {
    reportOk(`internal links (${visited.size} checked)`);
  }
} catch (error) {
  reportFail("internal links", [error instanceof Error ? error.message : String(error)]);
}

if (failures.length > 0) {
  process.exitCode = 1;
}
