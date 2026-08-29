import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { activeContactContent, publicContactHref, PUBLIC_BUSINESS_EMAIL } from '../lib/launchContact.ts';
import { launchCtas } from '../lib/launchCtas.ts';
import { providerFacts, validateProviderFactsForActivation } from '../lib/providerFacts.ts';
import { resolveSiteControls, shouldIndexRoute } from '../lib/siteStatus.ts';

const policy = JSON.parse(await readFile(new URL('../config/site-policy.json', import.meta.url), 'utf8'));
const validRoutes = policy.localizedPathPairs.flatMap(({ dePath, enPath }) => [dePath, enPath]);
const indexable = new Set(policy.launchIndexablePaths);
const scenarioDetails = validRoutes.filter((path) => !indexable.has(path));

assert.equal(validRoutes.length, 30, 'the public route contract must contain 30 routes');
assert.equal(new Set(validRoutes).size, 30, 'public routes must be unique');
assert.equal(indexable.size, 20, 'the activation allowlist must contain exactly 20 routes');
assert.equal(scenarioDetails.length, 10, 'exactly 10 scenario-detail routes must remain noindex');
assert(policy.launchIndexablePaths.every((path) => validRoutes.includes(path)), 'allowlisted routes must exist');
assert(scenarioDetails.every((path) => path.includes('/referenzen/') || path.includes('/case-studies/')));

const prelaunchOverride = resolveSiteControls({
  siteIsPrelaunch: true,
  commercialContent: true,
  publicContact: true,
  indexing: true,
  analytics: true,
  providerSchema: true,
  environment: 'production',
});
assert.equal(prelaunchOverride.showPrelaunchUi, true);
for (const capability of ['commercialContent', 'publicContact', 'indexing', 'analytics', 'providerSchema']) {
  assert.equal(prelaunchOverride[capability], false, `pre-launch must force ${capability} off`);
}

assert.throws(() => resolveSiteControls({
  siteIsPrelaunch: false,
  commercialContent: false,
  publicContact: false,
  indexing: false,
  analytics: false,
  providerSchema: false,
  environment: 'production',
}), /Incomplete activation configuration/);

const minimalActivation = resolveSiteControls({
  siteIsPrelaunch: false,
  commercialContent: true,
  publicContact: true,
  indexing: true,
  analytics: false,
  providerSchema: false,
  environment: 'production',
});
assert.equal(minimalActivation.showPrelaunchUi, false);
assert.equal(minimalActivation.analytics, false, 'analytics must not be required for activation');
assert.equal(minimalActivation.providerSchema, false, 'provider schema must not be required for activation');
assert.equal(validRoutes.filter((path) => shouldIndexRoute(path, policy.launchIndexablePaths, minimalActivation)).length, 20);
assert(scenarioDetails.every((path) => !shouldIndexRoute(path, policy.launchIndexablePaths, minimalActivation)));
assert(validRoutes.every((path) => !shouldIndexRoute(path, policy.launchIndexablePaths, prelaunchOverride)));

const nonProductionAnalytics = resolveSiteControls({
  siteIsPrelaunch: false,
  commercialContent: true,
  publicContact: true,
  indexing: true,
  analytics: true,
  providerSchema: false,
  environment: 'development',
});
assert.equal(nonProductionAnalytics.analytics, false, 'analytics must remain production-only when later approved');

assert.match(PUBLIC_BUSINESS_EMAIL, /^[^@\s]+@elkaza\.at$/);
assert.equal(publicContactHref(), `mailto:${PUBLIC_BUSINESS_EMAIL}`);
assert.equal(activeContactContent.de.title, 'IT-Thema besprechen');
assert.equal(activeContactContent.en.title, 'Discuss an IT topic');
assert.equal(launchCtas.de.homepagePrimary.href, '/kontakt');
assert.equal(launchCtas.en.homepagePrimary.href, '/en/contact');
assert.equal(launchCtas.de.homepageSecondary.href, '/leistungen/security-baseline');
assert.equal(launchCtas.en.homepageSecondary.href, '/en/services/security-baseline');

const providerErrors = validateProviderFactsForActivation(providerFacts);
assert(providerErrors.length > 0, 'unverified provider facts must block a future activation');

const activeContactSource = await readFile(new URL('../app/components/ActiveContactPage.tsx', import.meta.url), 'utf8');
assert.match(activeContactSource, /activeContactContent/);
assert.match(activeContactSource, /publicContactHref/);
assert.match(activeContactSource, /SITE_CONTROLS\.publicContact/);

console.log('OK site policy: 30 valid routes, 20 launch-indexable, 10 scenario-detail noindex routes');
console.log('OK control policy: pre-launch overrides all capabilities and incomplete activation fails closed');
console.log('OK future contact/CTA policy and provider-fact activation gate');
