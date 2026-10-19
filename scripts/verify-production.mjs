import { execFileSync } from "node:child_process";

const canonicalBaseUrl = "https://elkaza.org";
const productionBaseUrl = process.env.PRODUCTION_FETCH_BASE_URL ?? "https://elkaza.org";
const redirectBaseUrl = "https://www.elkaza.org";

const routePairs = [
  {
    name: "homepage",
    de: "/",
    en: "/en",
    deText: ["Deutsch", "Englisch", "Arabisch", "B2", "C1", "Ab sofort verfügbar", "Ich verbinde Berufserfahrung in Application Engineering", "Aktuelle akademische Arbeit", "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers", "in Arbeit seit 10/2026", "Integritätsmanipulation authentifizierter IoT-Sensorknoten am Edge Gateway"],
    enText: ["German", "English", "Arabic", "B2", "C1", "Available immediately", "I combine professional experience in application engineering", "Current Academic Work", "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers", "in progress since 10/2026", "Detecting Integrity Manipulation by Authenticated IoT Sensor Nodes at a Resource-Constrained Edge Gateway"],
    forbiddenText: ["Henderik", "Proper", "Topic and supervision under clarification", "Themen- und Betreuungsabstimmung", "Enterprise Coherence Governance", "Dr. Vincenzo De Maio", "Prof. Ivona Brandić"],
  },
  {
    name: "about",
    de: "/about",
    en: "/en/about",
    deText: ["Mohamed Elkaza", "Berufserfahrung", "08/2023–11/2023", "12/2013–12/2015", "Vorstudienlehrgang der Wiener Universitäten", "Aktuelle akademische Arbeit", "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers"],
    enText: ["Mohamed Elkaza", "Professional experience", "08/2023–11/2023", "12/2013–12/2015", "University Preparation Programme of the Vienna Universities", "Current Academic Work", "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers"],
    forbiddenText: ["Henderik", "Proper", "Topic and supervision under clarification", "Themen- und Betreuungsabstimmung", "2013–2016", "Dr. Vincenzo De Maio", "Prof. Ivona Brandić", "ENIC NARIC"],
  },
  {
    name: "projects",
    de: "/projects",
    en: "/en/projects",
    deText: ["EdgeGuardian", "Software Engineering", "Hybrides Linux- und Windows-Infrastrukturlabor mit getrenntem öffentlichem Ingress", "privater Tailscale-Administration", "Azure-Arc-Governance", "Öffentliche und private Pfade sind getrennt, Konfigurationen sind wiederholbar, und die Wiederherstellung von Anwendungen und Daten wurde gegen ein isoliertes Ziel geprobt."],
    enText: ["EdgeGuardian", "software engineering", "Hybrid Linux and Windows infrastructure lab with separated public ingress", "private Tailscale administration", "Azure Arc governance", "Public and private paths are separated, configuration is repeatable, and application/data recovery has been rehearsed against an isolated target."],
  },
  {
    name: "cv",
    de: "/cv",
    en: "/en/cv",
    deText: ["Lebenslauf", "Application Engineer", "12/2013–12/2015", "MSc Wirtschaftsinformatik", "90 ECTS Lehrveranstaltungen", "Masterarbeit in Arbeit", "Berufliche Praxis", "Eigene Projekte", "Learning Lab", "Studium", "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers", "Forschung ansehen"],
    enText: ["CV", "Application Engineer", "12/2013–12/2015", "MSc Business Informatics", "90 ECTS coursework", "Master&#x27;s thesis in progress", "Professional", "Own projects", "Learning lab", "Studies", "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers", "View research"],
    forbiddenText: ["exp1_title", "exp1_desc", "exp2_title", "exp2_desc", "exp3_title", "exp3_desc", "exp4_title", "exp4_desc", "Topic and supervision under clarification", "Themen- und Betreuungsabstimmung", "Enterprise Coherence Governance", "2013–2016", "verified VM backup", "verifiziertem VM-Backup", "private ingress", "Dr. Vincenzo De Maio", "Prof. Ivona Brandić", "ENIC NARIC"],
  },
  {
    name: "research",
    de: "/research",
    en: "/en/research",
    deText: ["Aktuelle akademische Arbeit", "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers", "Masterarbeit · TU Wien", "In Arbeit seit 10/2026", "90 ECTS Lehrveranstaltungen", "Integritätsmanipulation durch authentifizierte IoT-Sensorknoten am Edge Gateway"],
    enText: ["Current Academic Work", "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers", "Master&#x27;s thesis · TU Wien", "In progress since 10/2026", "90 ECTS of coursework", "Detecting Integrity Manipulation by Authenticated IoT Sensor Nodes at a Resource-Constrained Edge Gateway"],
    forbiddenText: ["Full text on request", "Volltext auf Anfrage", "final framework", "final research question", "prototype already exists", "Henderik", "Proper", "Topic and supervision under clarification", "Themen- und Betreuungsabstimmung", "Enterprise Coherence Governance", "Ongoing TU Wien diploma thesis", "Laufende TU-Wien-Diplomarbeit", "Dr. Vincenzo De Maio", "Prof. Ivona Brandić"],
  },
  {
    name: "contact",
    de: "/kontakt",
    en: "/en/contact",
    deText: ["Kontakt aufnehmen", "contact@elkaza.org"],
    enText: ["Get in touch", "contact@elkaza.org"],
  },
  {
    name: "certifications",
    de: "/zertifikate",
    en: "/en/certifications",
    deText: ["Zertifikate &amp; Weiterbildung", "Aptis English Business C1", "ÖSD Zertifikat B2", "Junior Cybersecurity Analyst Path"],
    enText: ["Certifications &amp; Training", "Aptis English Business C1", "ÖSD Zertifikat B2", "Junior Cybersecurity Analyst Path"],
    forbiddenText: ["ENIC NARIC"],
  },
  {
    name: "security",
    de: "/security",
    en: "/en/security",
    deText: ["Security &amp; Plattformbetrieb", "Anwendungs- und Datenbackups mit isolierter Restore-Probe"],
    enText: ["Security &amp; Platform Operations", "application/data backups with an isolated restore rehearsal"],
  },
  {
    name: "project enterprise-self-hosted-infrastructure",
    de: "/projects/enterprise-self-hosted-infrastructure",
    en: "/en/projects/enterprise-self-hosted-infrastructure",
    deText: ["Hybride Self-Hosted-Infrastruktur &amp; Betrieb", "hybrides Infrastrukturlabor", "Architekturüberblick", "Designentscheidungen", "Architektur und Vertrauensgrenzen", "Umsetzung und Automatisierung", "Sicherheitsmodell", "Hybrid Windows Lab und Azure-Arc-Governance", "Verifikationsnachweise", "Monitoring und Betrieb", "Backup und Recovery", "Technische Erkenntnisse", "Aktuelle Grenzen", "Abbildung 1 — Hybride Infrastruktur im Überblick", "Abbildung 2 — Architektur und Vertrauensgrenzen", "Abbildung 3 — Betrieb, Automatisierung und Recovery", "Abbildung 4 — Bereinigtes Betriebsdashboard", "Bereinigte Betriebsübersicht mit dokumentiertem Service-Management", "hybrid-infrastructure-overview.png", "hybrid-infrastructure-architecture.png", "infrastructure-operations-recovery-workflow.png", "infrastructure-operations-dashboard.png"],
    enText: ["Hybrid Self-Hosted Infrastructure &amp; Operations", "hybrid infrastructure lab", "Architecture overview", "Design decisions", "Architecture and trust boundaries", "Implementation and automation", "Security model", "Hybrid Windows Lab and Azure Arc Governance", "Verification evidence", "Monitoring and operations", "Backup and recovery", "Engineering takeaways", "Current limitations", "Figure 1 — High-level Hybrid Infrastructure", "Figure 2 — Architecture and Trust Boundaries", "Figure 3 — Operations, Automation and Recovery", "Figure 4 — Sanitized Operations Dashboard", "Sanitized operational overview showing documented service management", "hybrid-infrastructure-overview.png", "hybrid-infrastructure-architecture.png", "infrastructure-operations-recovery-workflow.png", "infrastructure-operations-dashboard.png"],
    forbiddenText: ["verified VM backup", "verifiziertes VM-Backup", "weekly VM backup", "wöchentliches VM-Backup", "keep-last-three", "automated recovery", "automatisierte Wiederherstellung", "encrypted off-site", "verschlüsselte Offsite", "full isolated restore test remain", "private ingress", "Private ingress", "privacy-first analytics platform", "enterprise-self-hosted-operations.svg", "enterprise-self-hosted-system-context.png", "enterprise-self-hosted-container-deployment.png", "enterprise-self-hosted-data-flow.png", "fully automated", "disaster recovery", "enterprise-grade", "production-ready", "zero-trust architecture"],
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
