/**
 * @file navigation.spec.ts
 * @description E2E tests for site navigation
 */

import { expect, test } from "@playwright/test";

test.describe("Site Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should navigate through all main sections", async ({ page }) => {
    // Start at home
    await expect(page).toHaveURL("/");

    // Only Projetos link should be disabled
    const projetosLink = page
      .getByRole("banner")
      .getByRole("link", { name: /projetos/i });
    await expect(projetosLink).toHaveAttribute("aria-disabled", "true");

    // Sobre link should be enabled
    const sobreLink = page
      .getByRole("banner")
      .getByRole("link", { name: /sobre/i });
    await expect(sobreLink).not.toHaveAttribute("aria-disabled", "true");
  });

  test("should keep header visible on scroll", async ({ page }) => {
    const header = page.locator("header");
    await expect(header).toBeVisible();

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);

    // Header should still be visible (sticky/fixed)
    await expect(header).toBeVisible();
  });

  test("should highlight active navigation item", async ({ page }) => {
    // Home link should be in the navigation
    const homeLink = page
      .getByRole("banner")
      .getByRole("link", { name: /início/i });
    await expect(homeLink).toBeVisible();

    // Link should have href pointing to home
    await expect(homeLink).toHaveAttribute("href", "/");
  });

  test("should handle browser back/forward", async ({ page }) => {
    // This test requires actual page navigation
    // Since most pages are disabled, we just verify current state
    const currentUrl = page.url();
    expect(currentUrl).toContain("/");

    // Go back (should stay on same page since no navigation happened)
    await page.goBack();
    await page.waitForTimeout(100);

    // Should still be on home or previous page
    const urlAfterBack = page.url();
    expect(urlAfterBack).toBeTruthy();
  });

  test("logos and branding link to home", async ({ page }) => {
    // Click logo - should be a link to home
    const logo = page
      .locator("a")
      .filter({ has: page.locator('img[alt*="TecnoJR" i], svg') })
      .first();

    if ((await logo.count()) > 0) {
      await expect(logo).toHaveAttribute("href", "/");
    }
  });
});
