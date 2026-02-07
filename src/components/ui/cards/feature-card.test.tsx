/**
 * @file feature-card.test.tsx
 * @description Tests for FeatureCard component (wrapper of BaseCard)
 * Note: Uses real lucide-react icons. Tree-shaking is handled by Next.js optimizePackageImports.
 */

import { render, screen } from "@tests/test-utils";
import { Rocket, Shield, Zap } from "lucide-react";
import { describe, expect, it } from "vitest";
import { FeatureCard } from "./feature-card";

describe("FeatureCard Component", () => {
  // ============================================================================
  // RENDERING TESTS
  // ============================================================================

  describe("Rendering", () => {
    it("renders with all required props", () => {
      render(
        <FeatureCard
          icon={Zap}
          title="Fast Performance"
          description="Lightning-fast load times"
        />,
      );

      expect(screen.getByText("Fast Performance")).toBeInTheDocument();
      expect(screen.getByText("Lightning-fast load times")).toBeInTheDocument();
    });

    it("renders icon as SVG element", () => {
      const { container } = render(
        <FeatureCard
          icon={Zap}
          title="Scalable"
          description="Grows with your needs"
        />,
      );

      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("renders title text", () => {
      render(
        <FeatureCard
          icon={Zap}
          title="Secure"
          description="Built with security in mind"
        />,
      );

      const title = screen.getByText("Secure");
      expect(title).toBeInTheDocument();
    });
  });

  // ============================================================================
  // BASECARD INTEGRATION TESTS
  // ============================================================================

  describe("BaseCard Integration", () => {
    it("uses default variant (left-aligned)", () => {
      const { container } = render(
        <FeatureCard icon={Zap} title="Feature" description="Description" />,
      );

      // Default variant should not have centered text
      const header = container.querySelector('[class*="space-y-4"]');
      expect(header).not.toHaveClass("text-center");
    });

    it("renders with primary glow effect", () => {
      const { container } = render(
        <FeatureCard
          icon={Zap}
          title="Glowing Feature"
          description="With glow"
        />,
      );

      // FeatureCard enables glow effect with primary variant
      const glowElement = container.querySelector(
        '[class*="gradient-tecno-primary"]',
      );
      expect(glowElement).toBeInTheDocument();
    });

    it("uses medium icon size", () => {
      const { container } = render(
        <FeatureCard
          icon={Zap}
          title="Medium Icon"
          description="Default size"
        />,
      );

      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("h-7", "w-7"); // md size
    });

    it("uses diagonal gradient for icon", () => {
      const { container } = render(
        <FeatureCard
          icon={Zap}
          title="Gradient Icon"
          description="Diagonal gradient"
        />,
      );

      const iconWrapper = container.querySelector(
        '[class*="gradient-tecno-diagonal"]',
      );
      expect(iconWrapper).toBeInTheDocument();
    });

    it("does not rotate icon on hover", () => {
      const { container } = render(
        <FeatureCard
          icon={Zap}
          title="Static Icon"
          description="No rotation"
        />,
      );

      const iconWrapper = container.querySelector('[class*="rounded-lg"]');
      expect(iconWrapper).not.toHaveClass("group-hover:rotate-6");
    });
  });

  // ============================================================================
  // CONTENT TESTS
  // ============================================================================

  describe("Content", () => {
    it("handles long titles", () => {
      render(
        <FeatureCard
          icon={Zap}
          title="Very Long Feature Title That Should Wrap Properly"
          description="Description"
        />,
      );

      expect(
        screen.getByText("Very Long Feature Title That Should Wrap Properly"),
      ).toBeInTheDocument();
    });

    it("handles long descriptions", () => {
      const longDesc =
        "This is a very detailed description that explains the feature thoroughly with multiple sentences and technical details.";

      render(<FeatureCard icon={Zap} title="Feature" description={longDesc} />);

      expect(screen.getByText(longDesc)).toBeInTheDocument();
    });

    it("handles special characters", () => {
      render(
        <FeatureCard
          icon={Zap}
          title="Fast & Secure"
          description="100% guaranteed ✨"
        />,
      );

      expect(screen.getByText("Fast & Secure")).toBeInTheDocument();
      expect(screen.getByText("100% guaranteed ✨")).toBeInTheDocument();
    });
  });

  // ============================================================================
  // DIFFERENT ICONS
  // ============================================================================

  describe("Icon Variations", () => {
    it("renders Zap icon", () => {
      render(
        <FeatureCard icon={Zap} title="Speed" description="Fast loading" />,
      );

      expect(screen.getByText("Speed")).toBeInTheDocument();
    });

    it("renders Rocket icon", () => {
      render(
        <FeatureCard
          icon={Rocket}
          title="Launch"
          description="Quick deployment"
        />,
      );

      expect(screen.getByText("Launch")).toBeInTheDocument();
    });

    it("renders Shield icon", () => {
      render(
        <FeatureCard icon={Shield} title="Security" description="Protected" />,
      );

      expect(screen.getByText("Security")).toBeInTheDocument();
    });
  });

  // ============================================================================
  // ACCESSIBILITY TESTS
  // ============================================================================

  describe("Accessibility", () => {
    it("title is accessible text", () => {
      render(
        <FeatureCard
          icon={Zap}
          title="Accessible Feature"
          description="Description"
        />,
      );

      const title = screen.getByText("Accessible Feature");
      expect(title).toBeInTheDocument();
    });

    it("description is readable text", () => {
      render(
        <FeatureCard
          icon={Zap}
          title="Title"
          description="Accessible description text"
        />,
      );

      expect(
        screen.getByText("Accessible description text"),
      ).toBeInTheDocument();
    });

    it("icon is decorative", () => {
      const { container } = render(
        <FeatureCard icon={Zap} title="Title" description="Description" />,
      );

      const svg = container.querySelector("svg");
      expect(svg).not.toHaveAttribute("role", "img");
    });
  });

  // ============================================================================
  // MULTIPLE INSTANCES
  // ============================================================================

  describe("Multiple Cards", () => {
    it("renders multiple feature cards", () => {
      render(
        <>
          <FeatureCard
            icon={Zap}
            title="Feature 1"
            description="First feature"
          />
          <FeatureCard
            icon={Zap}
            title="Feature 2"
            description="Second feature"
          />
          <FeatureCard
            icon={Zap}
            title="Feature 3"
            description="Third feature"
          />
        </>,
      );

      expect(screen.getByText("Feature 1")).toBeInTheDocument();
      expect(screen.getByText("Feature 2")).toBeInTheDocument();
      expect(screen.getByText("Feature 3")).toBeInTheDocument();
    });
  });
});
