/**
 * @file service-card.test.tsx
 * @description Tests for ServiceCard component (wrapper of BaseCard)
 * Note: Uses real lucide-react icons. Tree-shaking is handled by Next.js optimizePackageImports.
 */

import { render, screen } from "@tests/test-utils";
import { Code, Palette, Smartphone } from "lucide-react";
import { describe, expect, it } from "vitest";
import { ServiceCard } from "./service-card";

describe("ServiceCard Component", () => {
  // ============================================================================
  // RENDERING TESTS
  // ============================================================================

  describe("Rendering", () => {
    it("renders with all required props", () => {
      render(
        <ServiceCard
          icon={Code}
          title="Web Development"
          description="Modern web applications"
        />,
      );

      expect(screen.getByText("Web Development")).toBeInTheDocument();
      expect(screen.getByText("Modern web applications")).toBeInTheDocument();
    });

    it("renders icon as SVG element", () => {
      const { container } = render(
        <ServiceCard
          icon={Code}
          title="Design"
          description="Beautiful interfaces"
        />,
      );

      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("renders title text", () => {
      render(
        <ServiceCard
          icon={Code}
          title="Mobile Apps"
          description="iOS and Android"
        />,
      );

      const title = screen.getByText("Mobile Apps");
      expect(title).toBeInTheDocument();
    });
  });

  // ============================================================================
  // BASECARD INTEGRATION TESTS
  // ============================================================================

  describe("BaseCard Integration", () => {
    it("uses centered variant", () => {
      const { container } = render(
        <ServiceCard icon={Code} title="Service" description="Description" />,
      );

      // Centered variant should have items-center class
      const header = container.querySelector('[class*="items-center"]');
      expect(header).toBeInTheDocument();
    });

    it("does not render glow effect", () => {
      const { container } = render(
        <ServiceCard
          icon={Code}
          title="No Glow Service"
          description="Without glow"
        />,
      );

      // ServiceCard disables glow effect (just icon gradient, no border glow)
      const glowBorder = container.querySelector(".absolute.-inset-px");
      expect(glowBorder).not.toBeInTheDocument();
    });

    it("uses large icon size", () => {
      const { container } = render(
        <ServiceCard icon={Code} title="Large Icon" description="Big size" />,
      );

      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("h-10", "w-10"); // lg size
    });

    it("uses diagonal gradient for icon", () => {
      const { container } = render(
        <ServiceCard
          icon={Code}
          title="Gradient Icon"
          description="Diagonal gradient"
        />,
      );

      const iconWrapper = container.querySelector(
        '[class*="gradient-tecno-diagonal"]',
      );
      expect(iconWrapper).toBeInTheDocument();
    });

    it("rotates icon on hover", () => {
      const { container } = render(
        <ServiceCard
          icon={Code}
          title="Rotating Icon"
          description="With rotation"
        />,
      );

      const iconWrapper = container.querySelector(
        '[class*="group-hover:rotate-6"]',
      );
      expect(iconWrapper).toBeInTheDocument();
    });
  });

  // ============================================================================
  // CONTENT TESTS
  // ============================================================================

  describe("Content", () => {
    it("handles long titles", () => {
      render(
        <ServiceCard
          icon={Code}
          title="Very Long Service Title That Might Need Multiple Lines"
          description="Description"
        />,
      );

      expect(
        screen.getByText(
          "Very Long Service Title That Might Need Multiple Lines",
        ),
      ).toBeInTheDocument();
    });

    it("handles long descriptions", () => {
      const longDesc =
        "Comprehensive service description with detailed information about what we offer and how it benefits our clients.";

      render(
        <ServiceCard icon={Code} title="Service" description={longDesc} />,
      );

      expect(screen.getByText(longDesc)).toBeInTheDocument();
    });

    it("handles special characters", () => {
      render(
        <ServiceCard
          icon={Code}
          title="UI/UX Design"
          description="Beautiful & functional ✨"
        />,
      );

      expect(screen.getByText("UI/UX Design")).toBeInTheDocument();
      expect(screen.getByText("Beautiful & functional ✨")).toBeInTheDocument();
    });
  });

  // ============================================================================
  // DIFFERENT ICONS
  // ============================================================================

  describe("Icon Variations", () => {
    it("renders Code icon", () => {
      render(
        <ServiceCard
          icon={Code}
          title="Development"
          description="Coding services"
        />,
      );

      expect(screen.getByText("Development")).toBeInTheDocument();
    });

    it("renders Palette icon", () => {
      render(
        <ServiceCard
          icon={Palette}
          title="Design"
          description="Creative work"
        />,
      );

      expect(screen.getByText("Design")).toBeInTheDocument();
    });

    it("renders Smartphone icon", () => {
      render(
        <ServiceCard
          icon={Smartphone}
          title="Mobile"
          description="App development"
        />,
      );

      expect(screen.getByText("Mobile")).toBeInTheDocument();
    });
  });

  // ============================================================================
  // CENTERED LAYOUT TESTS
  // ============================================================================

  describe("Centered Layout", () => {
    it("centers content horizontally", () => {
      const { container } = render(
        <ServiceCard
          icon={Code}
          title="Centered Service"
          description="Centered text"
        />,
      );

      const header = container.querySelector('[class*="text-center"]');
      expect(header).toBeInTheDocument();
    });

    it("centers icon above text", () => {
      const { container } = render(
        <ServiceCard
          icon={Code}
          title="Icon Above"
          description="Vertical layout"
        />,
      );

      const header = container.querySelector('[class*="items-center"]');
      expect(header).toBeInTheDocument();
    });
  });

  // ============================================================================
  // ACCESSIBILITY TESTS
  // ============================================================================

  describe("Accessibility", () => {
    it("title is accessible text", () => {
      render(
        <ServiceCard
          icon={Code}
          title="Accessible Service"
          description="Description"
        />,
      );

      const title = screen.getByText("Accessible Service");
      expect(title).toBeInTheDocument();
    });

    it("description is readable text", () => {
      render(
        <ServiceCard
          icon={Code}
          title="Title"
          description="Accessible service description"
        />,
      );

      expect(
        screen.getByText("Accessible service description"),
      ).toBeInTheDocument();
    });

    it("icon is decorative", () => {
      const { container } = render(
        <ServiceCard icon={Code} title="Title" description="Description" />,
      );

      const svg = container.querySelector("svg");
      expect(svg).not.toHaveAttribute("role", "img");
    });
  });

  // ============================================================================
  // MULTIPLE INSTANCES
  // ============================================================================

  describe("Multiple Cards", () => {
    it("renders multiple service cards", () => {
      render(
        <>
          <ServiceCard
            icon={Code}
            title="Service 1"
            description="First service"
          />
          <ServiceCard
            icon={Code}
            title="Service 2"
            description="Second service"
          />
          <ServiceCard
            icon={Code}
            title="Service 3"
            description="Third service"
          />
        </>,
      );

      expect(screen.getByText("Service 1")).toBeInTheDocument();
      expect(screen.getByText("Service 2")).toBeInTheDocument();
      expect(screen.getByText("Service 3")).toBeInTheDocument();
    });

    it("all cards have centered layout", () => {
      const { container } = render(
        <>
          <ServiceCard icon={Code} title="S1" description="D1" />
          <ServiceCard icon={Code} title="S2" description="D2" />
        </>,
      );

      const centeredElements = container.querySelectorAll(
        '[class*="items-center"]',
      );
      expect(centeredElements.length).toBeGreaterThanOrEqual(2);
    });
  });

  // ============================================================================
  // COMPARISON WITH FEATURECARD
  // ============================================================================

  describe("Differences from FeatureCard", () => {
    it("uses centered layout unlike FeatureCard default", () => {
      const { container } = render(
        <ServiceCard
          icon={Code}
          title="Centered"
          description="Center aligned"
        />,
      );

      const centered = container.querySelector('[class*="items-center"]');
      expect(centered).toBeInTheDocument();
    });

    it("has icon rotation unlike FeatureCard", () => {
      const { container } = render(
        <ServiceCard icon={Code} title="Rotates" description="On hover" />,
      );

      const iconWrapper = container.querySelector(
        '[class*="group-hover:rotate-6"]',
      );
      expect(iconWrapper).toBeInTheDocument();
    });
  });
});
