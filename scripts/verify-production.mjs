import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile } from 'node:fs/promises';
import { PUBLIC_BUSINESS_EMAIL } from '../lib/launchContact.ts';
import { SITE_CONTROLS } from '../lib/siteStatus.ts';

const execFileAsync = promisify(execFile);
const baseUrl = process.env.SITE_URL || 'https://elkaza.at';
const policy = JSON.parse(await readFile(new URL('../config/site-policy.json', import.meta.url), 'utf8'));
const routes = policy.localizedPathPairs.flatMap(({ dePath, enPath }) => [dePath, enPath]);
const indexable = new Set(policy.launchIndexablePaths);
const retiredEmail = ['office', 'elkaza.at'].join('@');

async function expectedGitSha() {
  if (process.env.EXPECTED_GIT_SHA) return process.env.EXPECTED_GIT_SHA;
  const { stdout } = await execFileAsync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' });
  return stdout.trim();
}

async function fetchResponse(path, options = {}) {
  return fetch(`${baseUrl}${path}`, {
    redirect: options.redirect || 'follow',
    headers: {
      'user-agent': 'elkaza-production-verifier/2.0',
      'cache-control': 'no-cache',
    },
  });
}

const intendedSha = await expectedGitSha();
const versionResponse = await fetchResponse('/version.json');
assert.equal(versionResponse.status, 200, 'version.json must be public');
const version = await versionResponse.json();
assert.equal(version.gitSha, intendedSha, 'deployed Git SHA does not match the intended release');

for (const route of routes) {
  const response = await fetchResponse(route === '/' ? '/' : `${route}/`);
  assert.equal(response.status, 200, `${route} must return 200`);
  const html = await response.text();
  const shouldIndex = SITE_CONTROLS.indexing && indexable.has(route);
  assert.match(
    html,
    shouldIndex
      ? /<meta[^>]+name="robots"[^>]+content="[^"]*\bindex\b/i
      : /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i,
    `${route} robots mismatch`,
  );
  assert(!html.includes(retiredEmail), `${route} contains the retired mailbox`);
  assert(!html.includes('analytics.elkaza.at/js/script.js'), `${route} unexpectedly contains analytics`);

  if (SITE_CONTROLS.prelaunch) {
    assert.match(html, /Projekt in Vorbereitung|Project in preparation/, `${route} lacks pre-launch notice`);
    assert(!html.includes(PUBLIC_BUSINESS_EMAIL), `${route} exposes public contact during pre-launch`);
    assert(!html.toLowerCase().includes('mailto:'), `${route} exposes mailto during pre-launch`);
  }
}

const sitemapResponse = await fetchResponse('/sitemap.xml');
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const sitemapCount = [...sitemap.matchAll(/<loc>/g)].length;
assert.equal(sitemapCount, SITE_CONTROLS.indexing ? 20 : 0, 'production sitemap count mismatch');

const missingResponse = await fetchResponse('/__elkaza_missing_route__/');
assert.equal(missingResponse.status, 404, 'public ingress must preserve a real 404');

const wwwResponse = await fetch('https://www.elkaza.at/', { redirect: 'manual' });
assert([301, 302, 307, 308].includes(wwwResponse.status), 'www host must redirect');
assert.equal(wwwResponse.headers.get('location'), `${baseUrl}/`, 'www redirect target mismatch');

console.log(`Production verified at ${intendedSha}: ${routes.length} routes, sitemap=${sitemapCount}, real 404, canonical host`);
