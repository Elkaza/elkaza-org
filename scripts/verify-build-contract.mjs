import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PUBLIC_BUSINESS_EMAIL, publicContactHref } from '../lib/launchContact.ts';
import { providerFacts, validateProviderFactsForActivation } from '../lib/providerFacts.ts';
import { SITE_CONTROLS, SITE_IS_PRELAUNCH } from '../lib/siteStatus.ts';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(projectRoot, 'out');
const policy = JSON.parse(await readFile(path.join(projectRoot, 'config', 'site-policy.json'), 'utf8'));
const routePairs = policy.localizedPathPairs;
const validRoutes = routePairs.flatMap(({ dePath, enPath }) => [dePath, enPath]);
const indexableRoutes = new Set(policy.launchIndexablePaths);
const scenarioDetails = validRoutes.filter((route) => !indexableRoutes.has(route));
const baseUrl = 'https://elkaza.at';

function routeFile(route) {
  return route === '/' ? path.join(outDir, 'index.html') : path.join(outDir, route.slice(1), 'index.html');
}

function absoluteUrl(route) {
  return route === '/' ? `${baseUrl}/` : `${baseUrl}${route}/`;
}

async function collectTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectTextFiles(fullPath));
    else if (/\.(?:html|js|mjs|ts|tsx|json|txt|xml|css|svg|md|yml|yaml|sh)$/i.test(entry.name)) files.push(fullPath);
  }
  return files;
}

function hrefsFromHtml(html) {
  return [...html.matchAll(/\shref=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function normalizeInternalHref(href) {
  if (!href.startsWith('/') || href.startsWith('//')) return null;
  const normalized = href.split(/[?#]/, 1)[0].replace(/\/+$/, '');
  return normalized || '/';
}

function findAlternate(route) {
  return routePairs.find(({ dePath, enPath }) => dePath === route || enPath === route);
}

function linkAttributes(html) {
  return [...html.matchAll(/<link\b([^>]*)>/gi)].map((match) => {
    const attributes = {};
    for (const attribute of match[1].matchAll(/([\w-]+)=["']([^"']*)["']/g)) {
      attributes[attribute[1].toLowerCase()] = attribute[2];
    }
    return attributes;
  });
}

function normalizeAbsoluteUrl(value) {
  const url = new URL(value, baseUrl);
  url.pathname = url.pathname.replace(/\/+$/, '') || '/';
  return url.href.replace(/\/$/, url.pathname === '/' ? '/' : '');
}

assert.equal(SITE_IS_PRELAUNCH, SITE_CONTROLS.prelaunch);
assert.equal(validRoutes.length, 30);
assert.equal(indexableRoutes.size, 20);
assert.equal(scenarioDetails.length, 10);

const htmlByRoute = new Map();
for (const route of validRoutes) {
  const html = await readFile(routeFile(route), 'utf8');
  htmlByRoute.set(route, html);

  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["'][^>]*>/i)?.[1]
    ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']robots["'][^>]*>/i)?.[1];
  assert(robots, `${route} must emit a robots directive`);
  const shouldIndex = SITE_CONTROLS.indexing && indexableRoutes.has(route);
  assert.match(robots, shouldIndex ? /(?:^|,\s*)index(?:,|$)/i : /noindex/i, `${route} robots mismatch`);
  assert.match(robots, SITE_CONTROLS.indexing ? /follow/i : /nofollow/i, `${route} follow policy mismatch`);

  const pair = findAlternate(route);
  assert(pair, `${route} must have a localization pair`);
  const links = linkAttributes(html);
  const canonical = links.find((link) => link.rel === 'canonical');
  assert(canonical?.href, `${route} has no canonical`);
  assert.equal(normalizeAbsoluteUrl(canonical.href), normalizeAbsoluteUrl(absoluteUrl(route)), `${route} canonical mismatch`);
  for (const [language, target] of [['de-AT', pair.dePath], ['en', pair.enPath], ['x-default', pair.dePath]]) {
    const alternate = links.find((link) => link.rel === 'alternate' && link.hreflang === language);
    assert(alternate?.href, `${route} has no ${language} alternate`);
    assert.equal(normalizeAbsoluteUrl(alternate.href), normalizeAbsoluteUrl(absoluteUrl(target)), `${route} ${language} alternate mismatch`);
  }

  assert.match(html, route === '/en' || route.startsWith('/en/') ? /<html[^>]+lang="en"/i : /<html[^>]+lang="de-AT"/i);
}

const textFiles = await collectTextFiles(outDir);
const generatedText = (await Promise.all(textFiles.map((file) => readFile(file, 'utf8')))).join('\n');
const forbiddenCommercialTypes = ['Organization', 'LocalBusiness', 'Service', 'Offer', 'ReserveAction'];
const retiredEmail = ['office', 'elkaza.at'].join('@');
const retiredOpeningHoursKey = ['opening', 'Hours'].join('');
const retiredPriceRangeKey = ['price', 'Range'].join('');

assert(!generatedText.includes(retiredEmail), 'generated output contains the retired email');
for (const type of forbiddenCommercialTypes) {
  assert(!generatedText.includes(`"@type":"${type}"`) && !generatedText.includes(`"@type": "${type}"`), `generated output contains ${type} schema`);
}

const sourceRoots = ['app', 'lib', 'scripts', 'config'];
const sourceFiles = (await Promise.all(sourceRoots.map((root) => collectTextFiles(path.join(projectRoot, root))))).flat();
const sourceText = (await Promise.all(sourceFiles.map((file) => readFile(file, 'utf8')))).join('\n');
assert(!sourceText.includes(retiredEmail), 'source contains the retired email');
assert(!sourceText.includes(retiredOpeningHoursKey), 'source contains retired opening-hours schema');
assert(!sourceText.includes(retiredPriceRangeKey), 'source contains retired price-range schema');

for (const [route, html] of htmlByRoute) {
  const schemas = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  assert.equal(schemas.length, 1, `${route} must emit exactly one JSON-LD block`);
  const schema = JSON.parse(schemas[0][1].replaceAll('&quot;', '"'));
  assert.equal(schema['@type'], 'WebSite', `${route} may only emit WebSite schema`);
  assert.equal(schema.url, baseUrl);
  assert.equal(schema.name, 'Elkaza');
  assert.deepEqual(schema.inLanguage, ['de-AT', 'en']);
}

const sitemap = await readFile(path.join(outDir, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedSitemap = SITE_CONTROLS.indexing ? [...indexableRoutes].map(absoluteUrl) : [];
assert.deepEqual(sitemapUrls.sort(), expectedSitemap.sort(), 'sitemap does not match the launch allowlist');

const inboundLinks = new Map(validRoutes.map((route) => [route, 0]));
for (const [route, html] of htmlByRoute) {
  for (const href of hrefsFromHtml(html)) {
    const target = normalizeInternalHref(href);
    if (!target) continue;
    if (validRoutes.includes(target)) {
      if (target !== route) inboundLinks.set(target, inboundLinks.get(target) + 1);
      continue;
    }
    const publicPath = path.join(outDir, target.replace(/^\//, ''));
    let exists = false;
    try {
      const info = await stat(publicPath);
      exists = info.isFile() || info.isDirectory();
    } catch {}
    assert(exists, `${route} contains broken internal link ${href}`);
  }
}
for (const route of validRoutes.filter((candidate) => candidate !== '/')) {
  assert(inboundLinks.get(route) > 0, `${route} is orphaned`);
}

const version = JSON.parse(await readFile(path.join(outDir, 'version.json'), 'utf8'));
assert.match(version.gitSha, /^[0-9a-f]{40}$/);
assert.deepEqual(Object.keys(version), ['gitSha']);

const analyticsMarkers = ['analytics.elkaza.at/js/script.js', 'plausible.io/js/script.js', 'data-domain="elkaza.at"'];
if (!SITE_CONTROLS.analytics) {
  for (const marker of analyticsMarkers) assert(!generatedText.includes(marker), `analytics marker emitted: ${marker}`);
}

if (SITE_CONTROLS.prelaunch) {
  assert.equal(SITE_IS_PRELAUNCH, true);
  assert.equal(sitemapUrls.length, 0);
  assert(!generatedText.includes(PUBLIC_BUSINESS_EMAIL), 'pre-launch output exposes the future mailbox');
  assert(!generatedText.toLowerCase().includes('mailto:'), 'pre-launch output contains a mail link');
  for (const [route, html] of htmlByRoute) {
    assert.match(html, /Projekt in Vorbereitung|Project in preparation/, `${route} lacks the pre-launch notice`);
  }
  assert.match(htmlByRoute.get('/kontakt'), /Kontakt ist noch nicht geöffnet/);
  assert.match(htmlByRoute.get('/en/contact'), /Contact is not open yet/);
} else {
  assert.equal(sitemapUrls.length, 20);
  for (const route of ['/kontakt', '/en/contact']) {
    assert(htmlByRoute.get(route).includes(PUBLIC_BUSINESS_EMAIL), `${route} lacks the public mailbox`);
    assert(htmlByRoute.get(route).includes(publicContactHref()), `${route} lacks the public mail link`);
  }
  assert(!/Project in preparation|Projekt in Vorbereitung|not accepting inquiries or orders|keine Anfragen oder Aufträge/.test(generatedText));
  assert.equal(validateProviderFactsForActivation(providerFacts).length, 0, 'provider facts are incomplete');
  for (const route of ['/impressum', '/en/imprint']) {
    assert(!/ADDRESS_LINE|PLACEHOLDER|TBD/.test(htmlByRoute.get(route)), `${route} contains a placeholder`);
  }
  assert.match(htmlByRoute.get('/datenschutz'), /Kontaktanfragen/);
  assert.match(htmlByRoute.get('/en/privacy'), /contact inquiries/i);
}

console.log(`OK build contract: ${validRoutes.length} localized routes and ${inboundLinks.size} route-link targets`);
console.log(`OK indexing contract: ${SITE_CONTROLS.prelaunch ? '30 noindex routes, empty sitemap' : '20 index routes, 10 scenario noindex routes'}`);
console.log('OK localization, internal links, orphan detection, canonical/hreflang, schema, analytics, contact, and version contract');
