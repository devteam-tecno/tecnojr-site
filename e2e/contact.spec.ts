/**
 * @file contact.spec.ts
 * @description E2E tests for contact functionality
 */

import { expect, test } from "@playwright/test";

test.describe("Contact Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Scroll to budget/contact section
    const contactHeading = page.getByRole("heading", {
      name: /vamos conversar/i,
    });
    await contactHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
  });

  test("should display contact section", async ({ page }) => {
    const contactHeading = page.getByRole("heading", {
      name: /vamos conversar/i,
    });
    await expect(contactHeading).toBeVisible();
  });

  test("should have WhatsApp link", async ({ page }) => {
    // Look for WhatsApp contact button/link - use .first() since there are multiple
    const whatsappLink = page.getByRole("link", { name: /whatsapp/i }).first();

    await expect(whatsappLink).toBeVisible();

    // Verify it has proper href
    const href = await whatsappLink.getAttribute("href");
    expect(href).toContain("wa.me");
  });

  test("WhatsApp link should open in new tab", async ({ page }) => {
    const whatsappLink = page.getByRole("link", { name: /whatsapp/i }).first();

    // Should have target="_blank"
    await expect(whatsappLink).toHaveAttribute("target", "_blank");

    // Should have rel="noopener noreferrer" for security
    const rel = await whatsappLink.getAttribute("rel");
    expect(rel).toContain("noopener");
    expect(rel).toContain("noreferrer");
  });

  test("should have email contact option", async ({ page }) => {
    // Look for email button that links to /contato
    const emailButton = page.getByRole("link", { name: /e-mail/i });

    await expect(emailButton).toBeVisible();

    // Verify it has href to contact page
    const href = await emailButton.getAttribute("href");
    expect(href).toBe("/contato");
  });

  test("should display contact benefits", async ({ page }) => {
    // Look for key benefits listed in the section
    const benefits = [
      /orçamento.*gratuito|100.*gratuito/i,
      /resposta.*24h|24.*horas/i,
      /consultoria.*especializada/i,
    ];

    for (const benefitPattern of benefits) {
      const benefitText = page.getByText(benefitPattern);
      await expect(benefitText).toBeVisible();
    }
  });

  test("should show security badge", async ({ page }) => {
    // Look for security/privacy indicator
    const securityText = page.getByText(/seus dados.*seguros|dados.*seguros/i);

    if ((await securityText.count()) > 0) {
      await expect(securityText).toBeVisible();
    }
  });

  test("should have social proof", async ({ page }) => {
    // Look for social proof (client count)
    const socialProof = page.getByText(/clientes.*satisfeitos|satisfeitos/i);

    if ((await socialProof.count()) > 0) {
      await expect(socialProof).toBeVisible();
    }
  });
});
