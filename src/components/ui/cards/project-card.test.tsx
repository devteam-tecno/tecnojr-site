/**
 * @file project-card.test.tsx
 * @description Tests for ProjectCard component
 */

import { render, screen } from "@tests/test-utils";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "./project-card";

describe("ProjectCard Component", () => {
  const defaultProps = {
    title: "Test Project",
    description: "Test project description",
    imageSrc: "/test-image.jpg",
  };

  // ============================================================================
  // RENDERING TESTS
  // ============================================================================

  describe("Rendering", () => {
    it("renders with required props", () => {
      render(<ProjectCard {...defaultProps} />);

      expect(screen.getByText("Test Project")).toBeInTheDocument();
      expect(screen.getByText("Test project description")).toBeInTheDocument();
    });

    it("renders project image", () => {
      render(<ProjectCard {...defaultProps} />);

      const image = screen.getByAltText("Test Project");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src");
    });

    it("renders without link as static card", () => {
      render(<ProjectCard {...defaultProps} />);

      // Should not render as anchor tag
      const links = screen.queryAllByRole("link");
      expect(links).toHaveLength(0);
    });

    it("renders with external link", () => {
      render(
        <ProjectCard
          {...defaultProps}
          link="https://example.com"
          isInternal={false}
        />,
      );

      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "https://example.com");
    });

    it("renders with internal link (no Link wrapper)", () => {
      render(
        <ProjectCard
          {...defaultProps}
          link="/internal-project"
          isInternal={true}
        />,
      );

      // Internal projects don't render as links in current implementation
      const links = screen.queryAllByRole("link");
      expect(links).toHaveLength(0);
    });
  });

  // ============================================================================
  // BADGE TESTS
  // ============================================================================

  describe("Project Type Badges", () => {
    it("does not render badge when no link provided", () => {
      render(<ProjectCard {...defaultProps} />);

      expect(screen.queryByText("Interno")).not.toBeInTheDocument();
      expect(screen.queryByText("Cliente")).not.toBeInTheDocument();
    });

    it("renders 'Cliente' badge for external projects", () => {
      render(
        <ProjectCard
          {...defaultProps}
          link="https://example.com"
          isInternal={false}
        />,
      );

      expect(screen.getByText("Cliente")).toBeInTheDocument();
      expect(screen.queryByText("Interno")).not.toBeInTheDocument();
    });

    it("renders 'Interno' badge for internal projects", () => {
      render(
        <ProjectCard {...defaultProps} link="/internal" isInternal={true} />,
      );

      expect(screen.getByText("Interno")).toBeInTheDocument();
      expect(screen.queryByText("Cliente")).not.toBeInTheDocument();
    });

    it("defaults to external project (Cliente) when link provided", () => {
      render(<ProjectCard {...defaultProps} link="https://example.com" />);

      expect(screen.getByText("Cliente")).toBeInTheDocument();
    });
  });

  // ============================================================================
  // LINK ICON TESTS
  // ============================================================================

  describe("External Link Icon", () => {
    it("renders external link icon for external projects", () => {
      const { container } = render(
        <ProjectCard
          {...defaultProps}
          link="https://example.com"
          isInternal={false}
        />,
      );

      const externalIcon = container.querySelector("svg");
      expect(externalIcon).toBeInTheDocument();
    });

    it("does not render link icon for static cards", () => {
      render(<ProjectCard {...defaultProps} />);

      // Only decorative SVG elements if any, no external link icon in title
      const title = screen.getByText("Test Project");
      const titleParent = title.closest("h3");
      const icons = titleParent?.querySelectorAll("svg");

      // Should not have external link icon
      expect(icons?.length || 0).toBe(0);
    });
  });

  // ============================================================================
  // CONTENT TESTS
  // ============================================================================

  describe("Content", () => {
    it("renders title text", () => {
      render(<ProjectCard {...defaultProps} />);

      const title = screen.getByText("Test Project");
      expect(title).toBeInTheDocument();
    });

    it("renders description text", () => {
      render(
        <ProjectCard {...defaultProps} description="Detailed project info" />,
      );

      expect(screen.getByText("Detailed project info")).toBeInTheDocument();
    });

    it("handles long titles", () => {
      render(
        <ProjectCard
          {...defaultProps}
          title="Very Long Project Title That Should Still Render Correctly"
        />,
      );

      expect(
        screen.getByText(
          "Very Long Project Title That Should Still Render Correctly",
        ),
      ).toBeInTheDocument();
    });

    it("handles long descriptions", () => {
      const longDescription =
        "This is a very long description that contains multiple sentences and should render properly within the card component without breaking the layout or causing any issues.";

      render(<ProjectCard {...defaultProps} description={longDescription} />);

      expect(screen.getByText(longDescription)).toBeInTheDocument();
    });

    it("handles special characters in title", () => {
      render(
        <ProjectCard {...defaultProps} title="Project & Test #1 (2024)" />,
      );

      expect(screen.getByText("Project & Test #1 (2024)")).toBeInTheDocument();
    });

    it("handles special characters in description", () => {
      render(
        <ProjectCard
          {...defaultProps}
          description="Description with <special> & 'characters' ✨"
        />,
      );

      expect(
        screen.getByText("Description with <special> & 'characters' ✨"),
      ).toBeInTheDocument();
    });
  });

  // ============================================================================
  // IMAGE TESTS
  // ============================================================================

  describe("Image", () => {
    it("renders image with correct alt text", () => {
      render(<ProjectCard {...defaultProps} title="My Project" />);

      const image = screen.getByAltText("My Project");
      expect(image).toBeInTheDocument();
    });

    it("renders image with provided src", () => {
      render(
        <ProjectCard {...defaultProps} imageSrc="/projects/awesome.jpg" />,
      );

      const image = screen.getByAltText("Test Project");
      // Next Image processes src, just check it exists
      expect(image).toHaveAttribute("src");
    });

    it("handles different image formats", () => {
      render(<ProjectCard {...defaultProps} imageSrc="/image.webp" />);

      const image = screen.getByAltText("Test Project");
      expect(image).toBeInTheDocument();
    });
  });

  // ============================================================================
  // INTERACTION TESTS
  // ============================================================================

  describe("Interactions", () => {
    it("link is clickable when provided", () => {
      render(<ProjectCard {...defaultProps} link="https://example.com" />);

      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
    });

    it("external links open in new tab", () => {
      render(
        <ProjectCard
          {...defaultProps}
          link="https://example.com"
          isInternal={false}
        />,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("internal links are rendered as static cards", () => {
      render(
        <ProjectCard {...defaultProps} link="/project" isInternal={true} />,
      );

      // Internal projects don't render as clickable links
      const links = screen.queryAllByRole("link");
      expect(links).toHaveLength(0);
    });
  });

  // ============================================================================
  // STYLING TESTS
  // ============================================================================

  describe("Styling", () => {
    it("applies group hover classes", () => {
      const { container } = render(<ProjectCard {...defaultProps} />);

      const groupElement = container.querySelector(".group");
      expect(groupElement).toBeInTheDocument();
    });

    it("has gradient border on hover", () => {
      const { container } = render(<ProjectCard {...defaultProps} />);

      const gradientBorder = container.querySelector(
        '[class*="gradient-tecno-primary"]',
      );
      expect(gradientBorder).toBeInTheDocument();
    });

    it("has backdrop blur effect", () => {
      const { container } = render(<ProjectCard {...defaultProps} />);

      const cardElement = container.querySelector('[class*="backdrop-blur"]');
      expect(cardElement).toBeInTheDocument();
    });
  });

  // ============================================================================
  // ACCESSIBILITY TESTS
  // ============================================================================

  describe("Accessibility", () => {
    it("has accessible image alt text", () => {
      render(<ProjectCard {...defaultProps} title="Accessible Project" />);

      const image = screen.getByAltText("Accessible Project");
      expect(image).toBeInTheDocument();
    });

    it("title is accessible text", () => {
      render(<ProjectCard {...defaultProps} title="Heading Test" />);

      const title = screen.getByText("Heading Test");
      expect(title).toBeInTheDocument();
    });

    it("external links have proper rel attributes", () => {
      render(
        <ProjectCard
          {...defaultProps}
          link="https://external.com"
          isInternal={false}
        />,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("badge has semantic meaning", () => {
      render(
        <ProjectCard
          {...defaultProps}
          link="https://example.com"
          isInternal={false}
        />,
      );

      const badge = screen.getByText("Cliente");
      expect(badge).toBeInTheDocument();
    });
  });

  // ============================================================================
  // EDGE CASES
  // ============================================================================

  describe("Edge Cases", () => {
    it("handles empty link gracefully", () => {
      render(<ProjectCard {...defaultProps} link="" />);

      // Empty link should not break rendering
      expect(screen.getByText("Test Project")).toBeInTheDocument();
    });

    it("handles missing image gracefully", () => {
      render(<ProjectCard {...defaultProps} imageSrc="" />);

      // Should still render (Next Image handles broken images)
      expect(screen.getByText("Test Project")).toBeInTheDocument();
    });

    it("works with all props combined", () => {
      render(
        <ProjectCard
          title="Full Featured Project"
          description="Complete description"
          imageSrc="/complete.jpg"
          link="https://complete.com"
          isInternal={false}
        />,
      );

      expect(screen.getByText("Full Featured Project")).toBeInTheDocument();
      expect(screen.getByText("Complete description")).toBeInTheDocument();
      expect(screen.getByText("Cliente")).toBeInTheDocument();
      expect(screen.getByRole("link")).toHaveAttribute(
        "href",
        "https://complete.com",
      );
    });
  });
});
