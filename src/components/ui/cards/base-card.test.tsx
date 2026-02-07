/**
 * @file base-card.test.tsx
 * @description Tests for BaseCard component
 * Note: Uses real lucide-react icons. Tree-shaking is handled by Next.js optimizePackageImports.
 */

import { render, screen } from "@tests/test-utils";
import { Zap } from "lucide-react";
import { describe, expect, it } from "vitest";
import { BaseCard } from "./base-card";

describe("BaseCard Component", () => {
  // ============================================================================
  // RENDERING TESTS
  // ============================================================================

  describe("Rendering", () => {
    it("renders with required props", () => {
      render(
        <BaseCard
          icon={Zap}
          title="Test Card"
          description="Test description"
        />,
      );

      expect(screen.getByText("Test Card")).toBeInTheDocument();
      expect(screen.getByText("Test description")).toBeInTheDocument();
    });

    it("renders icon as SVG element", () => {
      const { container } = render(
        <BaseCard icon={Zap} title="Icon Test" description="Testing icon" />,
      );

      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("renders children when provided", () => {
      render(
        <BaseCard icon={Zap} title="With Children" description="Description">
          <div data-testid="extra-content">Extra Content</div>
        </BaseCard>,
      );

      expect(screen.getByTestId("extra-content")).toBeInTheDocument();
      expect(screen.getByText("Extra Content")).toBeInTheDocument();
    });
  });

  // ============================================================================
  // VARIANT TESTS
  // ============================================================================

  describe("Variants", () => {
    it("renders default variant", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Default Variant"
          description="Description"
          variant="default"
        />,
      );

      // Default variant should not have text-center on header
      const header = container.querySelector('[class*="space-y-4"]');
      expect(header).not.toHaveClass("text-center");
    });

    it("renders centered variant", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Centered Variant"
          description="Description"
          variant="centered"
        />,
      );

      // Centered variant should have text-center
      const header = container.querySelector('[class*="items-center"]');
      expect(header).toBeInTheDocument();
    });

    it("defaults to default variant when not specified", () => {
      const { container } = render(
        <BaseCard icon={Zap} title="No Variant" description="Description" />,
      );

      const header = container.querySelector('[class*="space-y-4"]');
      expect(header).toBeInTheDocument();
    });
  });

  // ============================================================================
  // ICON SIZE TESTS
  // ============================================================================

  describe("Icon Sizes", () => {
    it("renders small icon size", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Small Icon"
          description="Description"
          iconSize="sm"
        />,
      );

      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("h-5", "w-5");
    });

    it("renders medium icon size", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Medium Icon"
          description="Description"
          iconSize="md"
        />,
      );

      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("h-7", "w-7");
    });

    it("renders large icon size", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Large Icon"
          description="Description"
          iconSize="lg"
        />,
      );

      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("h-10", "w-10");
    });

    it("renders extra large icon size", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="XL Icon"
          description="Description"
          iconSize="xl"
        />,
      );

      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("h-12", "w-12");
    });

    it("defaults to medium icon size", () => {
      const { container } = render(
        <BaseCard icon={Zap} title="No Size" description="Description" />,
      );

      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("h-7", "w-7");
    });
  });

  // ============================================================================
  // GLOW EFFECT TESTS
  // ============================================================================

  describe("Glow Effect", () => {
    it("renders without glow effect by default", () => {
      const { container } = render(
        <BaseCard icon={Zap} title="No Glow" description="Description" />,
      );

      // No glow border (only icon gradient should exist)
      const glowBorder = container.querySelector(
        ".absolute.-inset-\\[0\\.5px\\]",
      );
      expect(glowBorder).not.toBeInTheDocument();
    });

    it("renders with glow effect when enabled", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="With Glow"
          description="Description"
          glowEffect={true}
        />,
      );

      const glowElement = container.querySelector(
        '[class*="gradient-tecno-primary"]',
      );
      expect(glowElement).toBeInTheDocument();
    });

    it("renders primary glow variant", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Primary Glow"
          description="Description"
          glowEffect={true}
          glowVariant="primary"
        />,
      );

      const glowElement = container.querySelector(
        '[class*="gradient-tecno-primary"]',
      );
      expect(glowElement).toBeInTheDocument();
    });

    it("renders secondary glow variant", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Secondary Glow"
          description="Description"
          glowEffect={true}
          glowVariant="secondary"
        />,
      );

      const glowElement = container.querySelector(
        '[class*="gradient-tecno-secondary"]',
      );
      expect(glowElement).toBeInTheDocument();
    });

    it("renders accent glow variant", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Accent Glow"
          description="Description"
          glowEffect={true}
          glowVariant="accent"
        />,
      );

      const glowElement = container.querySelector(
        '[class*="gradient-tecno-accent"]',
      );
      expect(glowElement).toBeInTheDocument();
    });

    it("renders success glow variant", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Success Glow"
          description="Description"
          glowEffect={true}
          glowVariant="success"
        />,
      );

      const glowElement = container.querySelector(
        '[class*="gradient-tecno-success"]',
      );
      expect(glowElement).toBeInTheDocument();
    });
  });

  // ============================================================================
  // GRADIENT TESTS
  // ============================================================================

  describe("Icon Gradients", () => {
    it("renders diagonal gradient (default)", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Diagonal"
          description="Description"
          iconGradient="diagonal"
        />,
      );

      const iconWrapper = container.querySelector(
        '[class*="gradient-tecno-diagonal"]',
      );
      expect(iconWrapper).toBeInTheDocument();
    });

    it("renders animated gradient", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Animated"
          description="Description"
          iconGradient="animated"
        />,
      );

      const iconWrapper = container.querySelector(
        '[class*="gradient-tecno-animated"]',
      );
      expect(iconWrapper).toBeInTheDocument();
    });

    it("renders primary gradient", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Primary"
          description="Description"
          iconGradient="primary"
        />,
      );

      const iconWrapper = container.querySelector(
        '[class*="gradient-tecno-primary"]',
      );
      expect(iconWrapper).toBeInTheDocument();
    });
  });

  // ============================================================================
  // ICON ROTATION TESTS
  // ============================================================================

  describe("Icon Rotation", () => {
    it("does not rotate icon by default", () => {
      const { container } = render(
        <BaseCard icon={Zap} title="No Rotate" description="Description" />,
      );

      const iconWrapper = container.querySelector('[class*="rounded-lg"]');
      expect(iconWrapper).not.toHaveClass("group-hover:rotate-6");
    });

    it("rotates icon on hover when enabled", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Rotate"
          description="Description"
          iconRotate={true}
        />,
      );

      const iconWrapper = container.querySelector(
        '[class*="group-hover:rotate-6"]',
      );
      expect(iconWrapper).toBeInTheDocument();
    });
  });

  // ============================================================================
  // CUSTOM CLASSNAME TESTS
  // ============================================================================

  describe("Custom ClassNames", () => {
    it("applies container className", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Custom Class"
          description="Description"
          className="custom-container"
        />,
      );

      const wrapper = container.querySelector(".custom-container");
      expect(wrapper).toBeInTheDocument();
    });

    it("applies card className", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Custom Card"
          description="Description"
          cardClassName="custom-card"
        />,
      );

      const card = container.querySelector(".custom-card");
      expect(card).toBeInTheDocument();
    });

    it("applies icon className", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Custom Icon"
          description="Description"
          iconClassName="custom-icon"
        />,
      );

      const iconWrapper = container.querySelector(".custom-icon");
      expect(iconWrapper).toBeInTheDocument();
    });

    it("combines multiple custom classNames", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Multiple Classes"
          description="Description"
          className="container-class"
          cardClassName="card-class"
          iconClassName="icon-class"
        />,
      );

      expect(container.querySelector(".container-class")).toBeInTheDocument();
      expect(container.querySelector(".card-class")).toBeInTheDocument();
      expect(container.querySelector(".icon-class")).toBeInTheDocument();
    });
  });

  // ============================================================================
  // ACCESSIBILITY TESTS
  // ============================================================================

  describe("Accessibility", () => {
    it("renders title with semantic markup", () => {
      render(
        <BaseCard
          icon={Zap}
          title="Accessible Title"
          description="Description"
        />,
      );

      const title = screen.getByText("Accessible Title");
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass("font-semibold");
    });

    it("renders description as text content", () => {
      render(
        <BaseCard
          icon={Zap}
          title="Title"
          description="This is an accessible description"
        />,
      );

      expect(
        screen.getByText("This is an accessible description"),
      ).toBeInTheDocument();
    });

    it("icon is decorative (no alt text required)", () => {
      const { container } = render(
        <BaseCard icon={Zap} title="Title" description="Description" />,
      );

      const svg = container.querySelector("svg");
      expect(svg).not.toHaveAttribute("role", "img");
    });
  });

  // ============================================================================
  // COMBINATION TESTS
  // ============================================================================

  describe("Prop Combinations", () => {
    it("renders with all features enabled", () => {
      const { container } = render(
        <BaseCard
          icon={Zap}
          title="Full Featured Card"
          description="All options enabled"
          variant="centered"
          iconSize="xl"
          iconGradient="animated"
          glowEffect={true}
          glowVariant="accent"
          iconRotate={true}
          className="custom-wrapper"
        >
          <p>Additional content</p>
        </BaseCard>,
      );

      // Verify all features
      expect(screen.getByText("Full Featured Card")).toBeInTheDocument();
      expect(screen.getByText("All options enabled")).toBeInTheDocument();
      expect(screen.getByText("Additional content")).toBeInTheDocument();
      expect(container.querySelector(".custom-wrapper")).toBeInTheDocument();
      expect(
        container.querySelector('[class*="gradient-tecno-accent"]'),
      ).toBeInTheDocument();
      expect(container.querySelector("svg")).toHaveClass("h-12", "w-12");
    });

    it("renders minimal configuration", () => {
      render(<BaseCard icon={Zap} title="Minimal" description="Basic card" />);

      expect(screen.getByText("Minimal")).toBeInTheDocument();
      expect(screen.getByText("Basic card")).toBeInTheDocument();
    });
  });
});
