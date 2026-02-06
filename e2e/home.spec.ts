/**
 * @file home.spec.ts
 * @description E2E tests for home page
 */

import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load successfully", async ({ page }) => {
    // Check page loads
    await expect(page).toHaveTitle(/TecnoJR/i);
  });

  test("should display main sections", async ({ page }) => {
    // Hero section should be visible
    await expect(page.getByText(/sites e sistemas/i)).toBeVisible();

    // Should have navigation - use .first() since there are multiple nav elements
    const nav = page.locator("nav").first();
    await expect(nav).toBeVisible();

    // Footer should be present
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("should have functional navigation links", async ({ page }) => {
    // Navigation links for unimplemented pages should be disabled
    const sobreLink = page
      .getByRole("banner")
      .getByRole("link", { name: /sobre/i });
    await expect(sobreLink).toHaveAttribute("aria-disabled", "true");

    const projetosLink = page
      .getByRole("banner")
      .getByRole("link", { name: /projetos/i });
    await expect(projetosLink).toHaveAttribute("aria-disabled", "true");
  });

  test("should have working CTA button", async ({ page }) => {
    // Find main CTA button in hero section - CTA is "Contate-nos"
    const ctaButton = page.getByRole("link", { name: /contate-nos/i });

    // CTA should be visible
    await expect(ctaButton).toBeVisible();
  });

  test("should display logo", async ({ page }) => {
    // TecnoJR logo should be visible
    const logo = page
      .locator('img[alt*="TecnoJR" i], svg[aria-label*="TecnoJR" i]')
      .first();
    await expect(logo).toBeVisible();
  });

  test("should render projects section", async ({ page }) => {
    // Wait for page to be fully loaded and scrollable
    await page.waitForLoadState("networkidle");

    // Projects section should be present in the page
    const projectsHeading = page.getByRole("heading", {
      name: /projetos/i,
      level: 2,
    });

    // Scroll to projects section
    await projectsHeading.scrollIntoViewIfNeeded();

    // Projects heading should be visible
    await expect(projectsHeading).toBeVisible();
  });

  test("should have responsive navigation on mobile", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Mobile menu button should be visible
    const menuButton = page.getByRole("button", { name: /menu/i });
    await expect(menuButton).toBeVisible();

    // Click to open menu
    await menuButton.click();

    // Navigation links should appear
    await expect(page.getByRole("link", { name: /sobre/i })).toBeVisible();
  });
});
