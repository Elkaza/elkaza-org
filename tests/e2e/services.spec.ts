import { test, expect } from 'playwright/test';

test.describe('Service Pages', () => {
  const servicePages = [
    { path: '/leistungen/security-baseline', name: 'Baseline Assessment' },
    { path: '/leistungen/networking', name: 'Infrastructure Review' },
    { path: '/leistungen/automation', name: 'Automation Sprint' },
  ];

  servicePages.forEach(({ path, name }) => {
    test(`${name} page loads and displays content`, async ({ page }) => {
      await page.goto(path);

      const heading = page.getByRole('heading', { level: 1 });
      await expect(heading).toBeVisible();

      const cta = page.locator('a[href*="/kontakt"], a[href*="/contact"]');
      await expect(cta.first()).toBeVisible();
    });

    test(`${name} page CTA leads to contact`, async ({ page }) => {
      await page.goto(path);

      const cta = page.locator('a[href*="/kontakt"], a[href*="/contact"]');
      await cta.first().click();

      await expect(page).toHaveURL(/\/(kontakt|contact)\/?/);
    });

    test(`${name} page has proper metadata`, async ({ page }) => {
      await page.goto(path);

      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(10);

      const metaDesc = page.locator('meta[name="description"]');
      await expect(metaDesc).toHaveAttribute('content');
    });
  });

  test('service pages remain noindex during pre-launch', async ({ page }) => {
    await page.goto('/leistungen/security-baseline');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/i);
  });
});

test.describe('Service Navigation', () => {
  test('can navigate between service pages', async ({ page }) => {
    await page.goto('/leistungen/security-baseline');

    const navLinks = page.locator('a[href*="/leistungen/"]');
    const count = await navLinks.count();

    expect(count).toBeGreaterThan(0);

    const firstLink = navLinks.first();
    await firstLink.click();

    expect(page.url()).toContain('/leistungen/');
  });
});

test.describe('Initial service architecture', () => {
  test('overview presents only the three planned service areas', async ({ page }) => {
    await page.goto('/leistungen');

    const serviceLinks = page.locator('main a[href^="/leistungen/"]');
    await expect(serviceLinks).toHaveCount(3);
    await expect(page.getByText('Assessieren → stabilisieren → dokumentieren oder automatisieren')).toBeVisible();
  });

  test('baseline separates assessment from implementation', async ({ page }) => {
    await page.goto('/leistungen/security-baseline');

    await expect(page.getByText('Das Assessment prüft und dokumentiert.', { exact: false })).toBeVisible();
    await expect(page.getByText('Technischer Nachweis')).toBeVisible();
    await expect(page.getByRole('link', { name: /Persönliches Infrastrukturprojekt/ })).toHaveAttribute(
      'href',
      'https://elkaza.org/projects/enterprise-self-hosted-infrastructure',
    );
  });

  test('German and English overviews expose matching service slugs', async ({ page }) => {
    await page.goto('/leistungen');
    const de = await page.locator('main a[href^="/leistungen/"]').evaluateAll((links) => links.map((link) => link.getAttribute('href')));

    await page.goto('/en/services');
    const en = await page.locator('main a[href^="/en/services/"]').evaluateAll((links) => links.map((link) => link.getAttribute('href')));

    expect(de).toEqual(['/leistungen/security-baseline/', '/leistungen/networking/', '/leistungen/automation/']);
    expect(en).toEqual(['/en/services/security-baseline/', '/en/services/networking/', '/en/services/automation/']);
  });
});

test.describe('Removed service routes', () => {
  const removed = [
    '/leistungen/managed-ops',
    '/leistungen/nis2-compliance',
    '/leistungen/zero-trust',
    '/leistungen/endpoint-security',
    '/leistungen/cloud-saas-security',
    '/leistungen/ransomware-resilience',
    '/leistungen/ai-adoption',
    '/en/services/managed-ops',
    '/en/services/nis2-compliance',
    '/en/services/zero-trust',
    '/en/services/endpoint-security',
    '/en/services/cloud-saas-security',
    '/en/services/ransomware-resilience',
    '/en/services/ai-adoption',
  ];

  for (const path of removed) {
    test(`${path} returns a real 404`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(404);
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
    });
  }
});
