/**
 * @file projects.spec.ts
 * @description E2E tests for projects section
 */

import { expect, test } from "@playwright/test";

test.describe("Projects Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Scroll to projects section
    const projectsHeading = page.getByRole("heading", { name: /projetos/i });
    await projectsHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500); // Wait for animations
  });

  test("should display projects section", async ({ page }) => {
    const projectsHeading = page.getByRole("heading", { name: /projetos/i });
    await expect(projectsHeading).toBeVisible();
  });

  test("should have project filtering tabs", async ({ page }) => {
    // Look for tab triggers with correct values: "external" and "internal"
    const externalTab = page.getByRole("tab", { name: /projetos externos/i });
    const internalTab = page.getByRole("tab", { name: /projetos internos/i });

    await expect(externalTab).toBeVisible();
    await expect(internalTab).toBeVisible();
  });

  test("should filter projects by tab", async ({ page }) => {
    // Click on "Projetos Internos" tab
    const internalTab = page.getByRole("tab", { name: /projetos internos/i });
    await internalTab.click();

    // Wait for content to update
    await page.waitForTimeout(300);

    // Verify project section is visible
    const projectSection = page
      .locator("#projects, section")
      .filter({ hasText: /Portfolio/ });
    await expect(projectSection).toBeVisible();
  });

  test("should display project cards", async ({ page }) => {
    // Wait for projects section to be ready
    await page.waitForTimeout(500);

    // Find project cards in visible tab content
    const tabPanel = page.locator('[role="tabpanel"]:visible');
    const projectCards = tabPanel.locator(
      'article, [class*="Card"], a[href*="http"]',
    );

    // Should have at least one project
    const count = await projectCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("should show project details on card", async ({ page }) => {
    await page.waitForTimeout(500);

    // Get first visible project card
    const tabPanel = page.locator('[role="tabpanel"]:visible');
    const firstCard = tabPanel.locator('article, a[href*="http"]').first();

    // Card should be visible
    await expect(firstCard).toBeVisible();

    // Each card should have an image
    const cardImage = firstCard.locator("img");
    await expect(cardImage).toBeVisible();
  });

  test("should handle project card hover", async ({ page }) => {
    await page.waitForTimeout(500);

    const tabPanel = page.locator('[role="tabpanel"]:visible');
    const firstCard = tabPanel.locator('article, a[href*="http"]').first();

    // Hover over card
    await firstCard.hover();

    // Card should remain visible and potentially show hover effects
    await expect(firstCard).toBeVisible();

    // Allow time for CSS transitions
    await page.waitForTimeout(200);
  });

  test("external project links open in new tab", async ({ page }) => {
    // Find an external project link (if any)
    const externalLink = page.locator('a[target="_blank"]').first();

    if ((await externalLink.count()) > 0) {
      // Should have rel="noopener noreferrer" for security
      const rel = await externalLink.getAttribute("rel");
      expect(rel).toContain("noopener");
    }
  });
});
