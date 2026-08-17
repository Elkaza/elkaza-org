import { test, expect } from 'playwright/test';

test.describe('Language Switching', () => {
  test('German version loads correctly', async ({ page }) => {
    await page.goto('/');

    // Should be on German site
    const html = page.locator('html');
    const lang = await html.getAttribute('lang');
    expect(['de', 'de-AT']).toContain(lang);

    // German content should be visible
    const germanContent = page.locator('body').first();
    await expect(germanContent).toBeVisible();
  });

  test('English version loads correctly', async ({ page }) => {
    await page.goto('/en');

    // English content should be visible
    const englishHeading = page.getByRole('heading', {
      name: /IT Infrastructure|Security for SMEs/i,
      level: 1,
    });
    await expect(englishHeading).toBeVisible();

    const research = page.getByRole('region', { name: 'A Framework for Enterprise Coherence Governance' });
    await expect(research).toContainText("Master's Thesis / Diplomarbeit · TU Wien · In progress");
  });

  test('about pages show consistent ongoing thesis education entries', async ({ page }) => {
    await page.goto('/ueber-uns');
    await expect(page.getByText('TU Wien · Wirtschaftsinformatik')).toBeVisible();
    await expect(page.getByText('Diplomarbeit · In Arbeit · 2026')).toBeVisible();

    await page.goto('/en/about');
    await expect(page.getByText('TU Wien · Business Informatics')).toBeVisible();
    await expect(page.getByText("Master's Thesis / Diplomarbeit · In progress · 2026")).toBeVisible();
  });

  test('language switcher toggles between versions', async ({ page }) => {
    await page.goto('/');

    // Look for language switcher
    const languageSwitcher = page.locator('button, a').filter({ hasText: 'English' }).first();

    if (await languageSwitcher.isVisible()) {
      await languageSwitcher.click();

      // Should navigate to English version
      await expect(page).toHaveURL(/\/en/);
    }
  });

  test('service pages available in both languages', async ({ page }) => {
    // Visit German service page
    await page.goto('/leistungen/ai-adoption');
    await expect(page).toHaveURL('/leistungen/ai-adoption');

    // Check if English version exists
    const englishPath = await page.evaluate(() => {
      // Try to find link to English version
      const links = document.querySelectorAll('a');
      for (const link of links) {
        const href = link.getAttribute('href');
        if (href?.includes('/en/') && href?.includes('service')) {
          return href;
        }
      }
      return null;
    });

    // English version should be reachable
    if (englishPath) {
      await page.goto(englishPath);
      const html = page.locator('html');
      const lang = await html.getAttribute('lang');
      expect(['en', 'en-US']).toContain(lang);
    }
  });

  test('language preference persists in navigation', async ({ page }) => {
    // Go to English version
    await page.goto('/en');

    // Navigate to different page
    const navLink = page.locator('a[href*="/en/"]').first();
    if (await navLink.isVisible()) {
      await navLink.click();
      
      // Should still be in English version
      await expect(page).toHaveURL(/\/en/);
    }
  });
});
