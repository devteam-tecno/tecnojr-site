/**
 * @file ideals-section.test.tsx
 * @description Unit tests for IdealsSection component
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IdealsSection } from "./ideals-section";

describe("IdealsSection", () => {
  it("renders section title", () => {
    render(<IdealsSection />);
    expect(screen.getByText("Nossos")).toBeInTheDocument();
    expect(screen.getByText("Ideais")).toBeInTheDocument();
  });

  it("renders section subtitle", () => {
    render(<IdealsSection />);
    expect(
      screen.getByText(/Os princípios que nos guiam e definem nossa essência/i),
    ).toBeInTheDocument();
  });

  it("renders all three ideals", () => {
    render(<IdealsSection />);

    // Check for Mission
    expect(screen.getByText("Missão")).toBeInTheDocument();
    expect(
      screen.getByText(/Formar jovens empreendedores capazes/i),
    ).toBeInTheDocument();

    // Check for Vision
    expect(screen.getByText("Visão")).toBeInTheDocument();
    expect(
      screen.getByText(/Figurar entre as melhores empresas juniores/i),
    ).toBeInTheDocument();

    // Check for Values
    expect(screen.getByText("Valores")).toBeInTheDocument();
    expect(
      screen.getByText(/Empreendedorismo, Inovação, Sinergia/i),
    ).toBeInTheDocument();
  });

  it("renders CTA text and button", () => {
    render(<IdealsSection />);

    expect(
      screen.getByText(/Quer fazer parte da nossa história?/i),
    ).toBeInTheDocument();

    const ctaButton = screen.getByRole("link", { name: /Entre em contato/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", "/contato");
  });

  it("has correct section id for scroll navigation", () => {
    const { container } = render(<IdealsSection />);
    const section = container.querySelector("#ideais");
    expect(section).toBeInTheDocument();
  });

  it("renders three BaseCard components", () => {
    const { container } = render(<IdealsSection />);

    // BaseCard uses Card component which has specific classes
    const cards = container.querySelectorAll('[class*="card"]');
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });
});
