import { execFileSync } from "node:child_process";

const canonicalBaseUrl = "https://elkaza.org";
const productionBaseUrl = process.env.PRODUCTION_FETCH_BASE_URL ?? "https://elkaza.org";
const redirectBaseUrl = "https://www.elkaza.org";

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
    deText: ["Lebenslauf", "Application Engineer", "Masterstudium Wirtschaftsinformatik", "Diplom-Ingenieur"],
    enText: ["CV", "Application Engineer", "Programme in Business Informatics", "Diplom-Ingenieur"],
    forbiddenText: ["exp1_title", "exp1_desc", "exp2_title", "exp2_desc", "exp3_title", "exp3_desc", "exp4_title", "exp4_desc", "MSc Wirtschaftsinformatik", "MSc Business Informatics"],
  },
  {
    name: "research",
    de: "/research",
    en: "/en/research",
    deText: ["Enterprise Coherence Governance", "In Arbeit", "Henderik A. Proper"],
    enText: ["Enterprise Coherence Governance", "In progress", "Henderik A. Proper"],
    forbiddenText: ["Full text on request", "Volltext auf Anfrage"],
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
  {
    name: "project enterprise-self-hosted-infrastructure",
    de: "/projects/enterprise-self-hosted-infrastructure",
    en: "/en/projects/enterprise-self-hosted-infrastructure",
    deText: ["Self-Hosted Infrastructure"],
    enText: ["Self-Hosted Infrastructure"],
  },
  {
    name: "project edgeguardian-edge-ai-safety-bubble",
    de: "/projects/edgeguardian-edge-ai-safety-bubble",
    en: "/en/projects/edgeguardian-edge-ai-safety-bubble",
    deText: ["EdgeGuardian"],
    enText: ["EdgeGuardian"],
  },
  {
    name: "project tinyml-vibration-anomaly-detection",
    de: "/projects/tinyml-vibration-anomaly-detection",
    en: "/en/projects/tinyml-vibration-anomaly-detection",
    deText: ["TinyML"],
    enText: ["TinyML"],
  },
];

const legacyRedirects = [
  { source: "/contact", target: "/en/contact" },
  { source: "/certifications", target: "/en/certifications" },
];

const hostRedirects = [
  { source: "/", target: "/" },
  { source: "/projects", target: "/projects" },
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
  return path === "/" ? canonicalBaseUrl : `${canonicalBaseUrl}${path}`;
}

function requestUrl(path) {
  return path === "/" ? productionBaseUrl : `${productionBaseUrl}${path}`;
}

function redirectUrl(path) {
  return path === "/" ? redirectBaseUrl : `${redirectBaseUrl}${path}`;
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

for (const redirect of hostRedirects) {
  try {
    const response = await fetch(redirectUrl(redirect.source), {
      redirect: "manual",
      headers: {
        "user-agent": "elkaza-org-production-verifier/2.0",
        "cache-control": "no-cache",
      },
    });
    const location = response.headers.get("location") ?? "";
    const expectedLocation = requestUrl(redirect.target);
    const validLocations = redirect.target === "/"
      ? [expectedLocation, `${productionBaseUrl}/`]
      : [expectedLocation];

    if (response.status !== 308 || !validLocations.includes(location)) {
      reportFail(`host redirect ${redirect.source}`, [
        `status: ${response.status}`,
        `location: ${location || "missing"}`,
        `expected: ${validLocations.join(" or ")}`,
      ]);
    } else {
      reportOk(`host redirect ${redirectUrl(redirect.source)} -> ${expectedLocation}`);
    }
  } catch (error) {
    reportFail(`host redirect ${redirect.source}`, [error instanceof Error ? error.message : String(error)]);
  }
}

try {
  const response = await fetch(productionBaseUrl, {
    redirect: "manual",
    headers: {
      "user-agent": "elkaza-org-production-verifier/2.0",
      "cache-control": "no-cache",
    },
  });

  if (response.status !== 200) {
    reportFail("canonical host", [`${productionBaseUrl}/ returned ${response.status}`]);
  } else {
    reportOk(`canonical host ${productionBaseUrl}/ -> 200`);
  }
} catch (error) {
  reportFail("canonical host", [error instanceof Error ? error.message : String(error)]);
}

for (const pair of routePairs) {
  const deUrl = absolute(pair.de);
  const enUrl = absolute(pair.en);
  const deRequestUrl = requestUrl(pair.de);
  const enRequestUrl = requestUrl(pair.en);

  try {
    const deHtml = await fetchText(deRequestUrl);
    const enHtml = await fetchText(enRequestUrl);
    const deMissing = [
      ...includesAll(deHtml, pair.deText),
      ...(pair.forbiddenText ?? []).filter((value) => deHtml.includes(value)).map((value) => `forbidden ${value}`),
      ...(!hasHtmlLang(deHtml, "de") ? ['<html lang="de">'] : []),
      ...(!hasCanonical(deHtml, deUrl) ? [`canonical ${deUrl}`] : []),
      ...(!hasHreflang(deHtml, "de", deUrl) ? [`hreflang de ${deUrl}`] : []),
      ...(!hasHreflang(deHtml, "en", enUrl) ? [`hreflang en ${enUrl}`] : []),
    ];
    const enMissing = [
      ...includesAll(enHtml, pair.enText),
      ...(pair.forbiddenText ?? []).filter((value) => enHtml.includes(value)).map((value) => `forbidden ${value}`),
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
    const response = await fetch(requestUrl(redirect.source), {
      redirect: "manual",
      headers: {
        "user-agent": "elkaza-org-production-verifier/2.0",
        "cache-control": "no-cache",
      },
    });
    const location = response.headers.get("location") ?? "";
    const expectedLocation = requestUrl(redirect.target);

    const validLocations = [expectedLocation, redirect.target];

    if (![301, 308].includes(response.status) || !validLocations.includes(location)) {
      reportFail(`redirect ${redirect.source}`, [
        `status: ${response.status}`,
        `location: ${location || "missing"}`,
        `expected: ${validLocations.join(" or ")}`,
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
  const forbiddenUrls = [
    absolute("/contact"),
    absolute("/certifications"),
    absolute("/blog"),
    absolute("/en/blog"),
    absolute("/blog/ea-and-ai"),
    absolute("/en/blog/ea-and-ai"),
    absolute("/blog/self-hosted-infrastructure"),
    absolute("/en/blog/self-hosted-infrastructure"),
  ];
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
      const url = requestUrl(path);
      const html = await fetchText(url);
      for (const match of html.matchAll(/\shref=["']([^"']+)["']/gi)) {
        const href = match[1];
        if (
          href.startsWith("/") &&
          !href.startsWith("/api/") &&
          !href.startsWith("/_next/") &&
          !href.includes("#")
        ) {
          links.add(requestUrl(href));
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
