import { test, expect } from 'playwright/test';

test.describe('Routing integrity', () => {
  for (const path of ['/szenarien/', '/en/scenarios/', '/concepts/', '/en/concepts/']) {
    test(`${path} returns a real 404 without a canonical`, async ({ page }) => {
      const response = await page.goto(path);

      expect(response?.status()).toBe(404);
      await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute('content', /noindex/);
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    });
  }
});
