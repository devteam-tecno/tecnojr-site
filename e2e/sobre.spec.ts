/**
 * @file sobre.spec.ts
 * @description E2E tests for About page
 */

import { expect, test } from "@playwright/test";

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/sobre");
  });

  test("should load successfully", async ({ page }) => {
    // Check page loads with correct title
    await expect(page).toHaveTitle(/Sobre.*TecnoJr/i);
  });

  test("should display hero section with company introduction", async ({
    page,
  }) => {
    // Main heading should be visible
    await expect(page.getByText(/Quem é a/i)).toBeVisible();
    await expect(page.getByText(/TecnoJr\?/i)).toBeVisible();

    // Company description should be present
    await expect(page.getByText(/Fundada em 2002/i)).toBeVisible();
    await expect(page.getByText(/UESC/i)).toBeVisible();
  });

  test("should display stats in hero section", async ({ page }) => {
    // Stats should be visible
    await expect(page.getByText(/22\+/i)).toBeVisible(); // Years of experience
    await expect(page.getByText(/Anos de Experiência/i)).toBeVisible();

    await expect(page.getByText(/Membros Ativos/i)).toBeVisible();
    await expect(page.getByText(/200\+/i)).toBeVisible(); // Projects delivered
    await expect(page.getByText(/Projetos Entregues/i)).toBeVisible();
    await expect(page.getByText(/100%/i)).toBeVisible(); // Quality
    await expect(page.getByText(/Qualidade/i)).toBeVisible();
  });

  test("should have CTA button to scroll to members", async ({ page }) => {
    // Find "Conheça nosso time" button
    const ctaButton = page.getByRole("link", {
      name: /Conheça nosso time/i,
    });

    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute("href", "#membros");
  });

  test("should display ideals section", async ({ page }) => {
    // Wait for page to be fully loaded
    await page.waitForLoadState("networkidle");

    // Scroll to ideals section
    const idealsHeading = page.getByRole("heading", {
      name: /Ideais/i,
      level: 2,
    });
    await idealsHeading.scrollIntoViewIfNeeded();

    // Ideals heading should be visible
    await expect(idealsHeading).toBeVisible();

    // All three ideals should be present
    await expect(page.getByText(/Missão/i)).toBeVisible();
    await expect(page.getByText(/Visão/i)).toBeVisible();
    await expect(page.getByText(/Valores/i)).toBeVisible();

    // Check for ideal descriptions
    await expect(page.getByText(/Formar jovens empreendedores/i)).toBeVisible();
    await expect(page.getByText(/melhores empresas juniores/i)).toBeVisible();
    await expect(page.getByText(/Empreendedorismo.*Inovação/i)).toBeVisible();
  });

  test("should display members section", async ({ page }) => {
    // Wait for page to be fully loaded
    await page.waitForLoadState("networkidle");

    // Scroll to members section
    const membersHeading = page.getByRole("heading", {
      name: /Time/i,
      level: 2,
    });
    await membersHeading.scrollIntoViewIfNeeded();

    // Members heading should be visible
    await expect(membersHeading).toBeVisible();

    // Filter pills should be present
    await expect(page.getByRole("button", { name: /Todos/i })).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Coordenador/i }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: /Diretor/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Trainee/i })).toBeVisible();

    // Member count text should be visible
    await expect(page.getByText(/Mostrando.*membros?/i)).toBeVisible();
  });

  test("should filter members by role", async ({ page }) => {
    // Wait for page to load
    await page.waitForLoadState("networkidle");

    // Scroll to members section
    await page.getByRole("heading", { name: /Time/i }).scrollIntoViewIfNeeded();

    // Get initial member count
    const _initialCount = await page
      .getByText(/Mostrando.*membros?/i)
      .textContent();

    // Click on "Diretor" filter
    await page.getByRole("button", { name: /^Diretor$/i }).click();

    // Wait for filter to apply
    await page.waitForTimeout(500);

    // URL should have role parameter
    expect(page.url()).toContain("role=");

    // Member count should potentially change (unless all are Diretores)
    const filteredCount = await page
      .getByText(/Mostrando.*membros?/i)
      .textContent();

    // At minimum, the count text should still be visible
    expect(filteredCount).toBeTruthy();
  });

  test("should reset filter when clicking 'Todos'", async ({ page }) => {
    // Wait for page to load
    await page.waitForLoadState("networkidle");

    // Scroll to members section
    await page.getByRole("heading", { name: /Time/i }).scrollIntoViewIfNeeded();

    // Click on a specific role filter first
    await page.getByRole("button", { name: /^Trainee$/i }).click();
    await page.waitForTimeout(300);

    // URL should have role parameter
    expect(page.url()).toContain("role=");

    // Click "Todos" to reset
    await page.getByRole("button", { name: /Todos/i }).click();
    await page.waitForTimeout(300);

    // URL should not have role parameter
    expect(page.url()).not.toContain("role=");
  });

  test("should display member cards with photos", async ({ page }) => {
    // Wait for page to load
    await page.waitForLoadState("networkidle");

    // Scroll to members section
    await page.getByRole("heading", { name: /Time/i }).scrollIntoViewIfNeeded();

    // Wait for member cards to render
    await page.waitForTimeout(500);

    // At least one member card should have an image
    const memberImages = page.locator('img[alt*="Foto de"]');
    await expect(memberImages.first()).toBeVisible();
  });

  test("should have CTA to contact page in members section", async ({
    page,
  }) => {
    // Wait for page to load
    await page.waitForLoadState("networkidle");

    // Scroll to members section
    await page.getByRole("heading", { name: /Time/i }).scrollIntoViewIfNeeded();

    // CTA text should be visible
    await expect(
      page.getByText(/Quer fazer parte do nosso time\?/i),
    ).toBeVisible();

    // CTA button should link to contact page
    const ctaButton = page
      .getByRole("link", { name: /Entre em contato/i })
      .last();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute("href", "/contato");
  });

  test("should have functional navigation", async ({ page }) => {
    // Header navigation should be visible
    const nav = page.locator("nav").first();
    await expect(nav).toBeVisible();

    // "Sobre" link should be active (not disabled)
    const sobreLink = page
      .getByRole("banner")
      .getByRole("link", { name: /sobre/i });
    await expect(sobreLink).not.toHaveAttribute("aria-disabled", "true");
  });

  test("should be responsive on mobile", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Hero section should still be visible
    await expect(page.getByText(/Quem é a/i)).toBeVisible();

    // Should have mobile menu
    const menuButton = page.getByRole("button", { name: /menu/i });
    await expect(menuButton).toBeVisible();

    // Stats should be in 2-column grid on mobile (visual check via presence)
    await expect(page.getByText(/22\+/i)).toBeVisible();
    await expect(page.getByText(/200\+/i)).toBeVisible();
  });

  test("should have smooth scroll functionality", async ({ page }) => {
    // Wait for page to load
    await page.waitForLoadState("networkidle");

    // Get initial Y position (should be near top)
    const initialY = await page.evaluate(() => window.scrollY);

    // Click the scroll indicator or CTA
    const scrollButton = page.getByRole("link", {
      name: /Conheça nosso time/i,
    });
    await scrollButton.click();

    // Wait for scroll animation
    await page.waitForTimeout(1000);

    // Y position should have changed (scrolled down)
    const newY = await page.evaluate(() => window.scrollY);
    expect(newY).toBeGreaterThan(initialY);
  });

  test("should have footer visible", async ({ page }) => {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Footer should be visible
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });
});
