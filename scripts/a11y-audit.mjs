import { promises as fs } from 'node:fs';
import path from 'node:path';
import axe from 'axe-core';
import { chromium } from 'playwright';
import { activeContactContent, PUBLIC_BUSINESS_EMAIL, publicContactHref } from '../lib/launchContact.ts';

const policy = JSON.parse(await fs.readFile(new URL('../config/site-policy.json', import.meta.url), 'utf8'));
const routes = policy.localizedPathPairs.flatMap(({ dePath, enPath }) => [dePath, enPath]);
const representativeRoutes = ['/', '/kontakt', '/en/contact', '/leistungen/security-baseline', '/en/services/security-baseline'];
const viewports = {
  mobile: { width: 360, height: 800 },
  tablet: { width: 768, height: 900 },
  desktop: { width: 1440, height: 1000 },
};
const port = process.env.PORT || 3002;
const base = `http://localhost:${port}`;
const browser = await chromium.launch(process.env.PLAYWRIGHT_USE_EDGE === '1' ? { channel: 'msedge' } : undefined);
const results = [];
let failed = false;

async function auditPage({ name, url, viewport, prepare }) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(String(error)));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    if (prepare) await prepare(page);
    await page.addScriptTag({ content: axe.source });
    const audit = await page.evaluate(async () => axe.run(document));
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    const record = {
      name,
      url,
      viewport,
      violations: audit.violations,
      incomplete: audit.incomplete,
      pageErrors: errors,
      horizontalOverflow: overflow,
    };
    results.push(record);

    if (audit.violations.length > 0 || errors.length > 0 || overflow) {
      failed = true;
      console.error(`FAIL ${name}: ${audit.violations.length} Axe violations, ${errors.length} page errors, overflow=${overflow}`);
      for (const violation of audit.violations) console.error(`  ${violation.id}: ${violation.help}`);
    } else {
      console.log(`OK   ${name}`);
    }
  } catch (error) {
    failed = true;
    results.push({ name, url, viewport, error: String(error) });
    console.error(`FAIL ${name}: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    await context.close();
  }
}

for (const route of routes) {
  await auditPage({
    name: `${route} desktop`,
    url: `${base}${route}`,
    viewport: viewports.desktop,
  });
}

for (const route of representativeRoutes) {
  for (const viewportName of ['mobile', 'tablet']) {
    await auditPage({
      name: `${route} ${viewportName}`,
      url: `${base}${route}`,
      viewport: viewports[viewportName],
    });
  }
}

function activationPreviewMarkup(locale) {
  const content = activeContactContent[locale];
  const list = content.guidance.map((item) => `<li>${item}</li>`).join('');
  return `<main><section class="hero-gradient-enhanced py-16 md:py-24"><div class="mx-auto max-w-2xl px-6">
    <p class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">${content.eyebrow}</p>
    <h1 class="mt-4 text-[2.25rem] font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl">${content.title}</h1>
    <p class="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">${content.intro}</p>
    <p class="mt-3 leading-relaxed text-[var(--text-secondary)]">${content.prompt}</p>
    <div class="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <p class="break-all font-semibold text-[var(--text)]">${PUBLIC_BUSINESS_EMAIL}</p>
      <a href="${publicContactHref()}" style="color:var(--primary-foreground)" class="mt-4 inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-5 py-3 font-medium text-[var(--primary-foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]">${content.action}</a>
    </div>
    <h2 class="mt-10 text-xl font-semibold text-[var(--text)]">${content.guidanceTitle}</h2>
    <ul class="mt-4 list-disc space-y-2 pl-6 text-[var(--text-secondary)]">${list}</ul>
    <p class="mt-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-relaxed text-[var(--text-secondary)]">${content.security}</p>
    <p class="mt-5 text-sm leading-relaxed text-[var(--muted)]">${content.boundary}</p>
  </div></section></main>`;
}

for (const locale of ['de', 'en']) {
  for (const [viewportName, viewport] of Object.entries(viewports)) {
    await auditPage({
      name: `inactive contact ${locale} ${viewportName}`,
      url: `${base}${locale === 'de' ? '/' : '/en'}`,
      viewport,
      prepare: async (page) => {
        await page.locator('body').evaluate((body, markup) => { body.innerHTML = markup; }, activationPreviewMarkup(locale));
        const mailLink = page.getByRole('link', { name: activeContactContent[locale].action });
        if (await mailLink.getAttribute('href') !== publicContactHref()) throw new Error('inactive contact mail link mismatch');
        await mailLink.focus();
        if (!await mailLink.evaluate((element) => element === document.activeElement)) throw new Error('inactive contact mail link is not keyboard focusable');
      },
    });
  }
}

await browser.close();
await fs.mkdir(path.join(process.cwd(), 'screenshots'), { recursive: true });
await fs.writeFile(
  path.join(process.cwd(), 'screenshots', 'a11y-report.json'),
  `${JSON.stringify({ results, failed }, null, 2)}\n`,
  'utf8',
);

if (failed) process.exitCode = 1;
else console.log(`Axe passed with 0 violations across ${results.length} audits.`);
