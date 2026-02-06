import { describe, expect, it, vi } from "vitest";
import { render, screen, userEvent } from "../../../tests/test-utils";
import { Button } from "./button";

describe("Button Component", () => {
  describe("Rendering", () => {
    it("renders with children text", () => {
      render(<Button>Click me</Button>);
      expect(
        screen.getByRole("button", { name: "Click me" }),
      ).toBeInTheDocument();
    });

    it("renders with default variant", () => {
      render(<Button>Default</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-primary");
    });

    it("applies custom className", () => {
      render(<Button className="custom-class">Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });
  });

  describe("Gradient Variants", () => {
    it("renders gradient-primary variant", () => {
      render(<Button variant="gradient-primary">Primary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("gradient-tecno-animated");
      expect(button).toHaveClass("rounded-full");
    });

    it("renders gradient-whatsapp variant", () => {
      render(<Button variant="gradient-whatsapp">WhatsApp</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("from-green-500");
      expect(button).toHaveClass("to-green-600");
    });

    it("renders gradient-secondary variant", () => {
      render(<Button variant="gradient-secondary">Secondary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("from-brand-secondary");
    });

    it("renders outline-gradient variant", () => {
      render(<Button variant="outline-gradient">Outline</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("border-2");
      expect(button).toHaveClass("rounded-full");
    });

    it("renders ghost-gradient variant", () => {
      render(<Button variant="ghost-gradient">Ghost</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("text-gray-300");
    });
  });

  describe("Standard Variants", () => {
    it("renders destructive variant", () => {
      render(<Button variant="destructive">Delete</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-destructive");
    });

    it("renders outline variant", () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("border");
    });

    it("renders secondary variant", () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-secondary");
    });

    it("renders ghost variant", () => {
      render(<Button variant="ghost">Ghost</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("hover:bg-accent");
    });

    it("renders link variant", () => {
      render(<Button variant="link">Link</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("underline-offset-4");
    });
  });

  describe("Size Variants", () => {
    it("renders default size", () => {
      render(<Button size="default">Default Size</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-9");
      expect(button).toHaveClass("px-4");
    });

    it("renders xs size", () => {
      render(<Button size="xs">Extra Small</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-6");
      expect(button).toHaveClass("text-xs");
    });

    it("renders sm size", () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-8");
    });

    it("renders lg size", () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-10");
      expect(button).toHaveClass("px-6");
    });

    it("renders xl size", () => {
      render(<Button size="xl">Extra Large</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-12");
      expect(button).toHaveClass("px-8");
    });

    it("renders icon size", () => {
      render(
        <Button size="icon" aria-label="icon button">
          <span>Icon</span>
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("size-9");
    });

    it("renders icon-xs size", () => {
      render(
        <Button size="icon-xs" aria-label="tiny icon button">
          <span>I</span>
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("size-6");
    });

    it("renders icon-sm size", () => {
      render(
        <Button size="icon-sm" aria-label="small icon button">
          <span>I</span>
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("size-8");
    });

    it("renders icon-lg size", () => {
      render(
        <Button size="icon-lg" aria-label="large icon button">
          <span>I</span>
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("size-10");
    });
  });

  describe("Disabled State", () => {
    it("renders disabled button", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });

    it("applies disabled opacity", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("disabled:opacity-50");
    });

    it("applies pointer-events-none when disabled", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("disabled:pointer-events-none");
    });
  });

  describe("Interaction", () => {
    it("calls onClick handler when clicked", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);

      const button = screen.getByRole("button");
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>,
      );

      const button = screen.getByRole("button");
      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it("can receive focus", async () => {
      const user = userEvent.setup();
      render(<Button>Focusable</Button>);

      const button = screen.getByRole("button");
      await user.tab();

      expect(button).toHaveFocus();
    });

    it("cannot receive focus when disabled", () => {
      render(<Button disabled>Not Focusable</Button>);
      const button = screen.getByRole("button");

      button.focus();

      expect(button).not.toHaveFocus();
    });
  });

  describe("asChild prop (Slot component)", () => {
    it("renders as child component when asChild is true", () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>,
      );

      const link = screen.getByRole("link", { name: "Link Button" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/test");
    });

    it("applies button classes to child element", () => {
      render(
        <Button asChild variant="gradient-primary">
          <a href="/test">Link with gradient</a>
        </Button>,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveClass("gradient-tecno-animated");
    });
  });

  describe("Accessibility", () => {
    it("has button role", () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("can have aria-label", () => {
      render(<Button aria-label="Custom label">Icon</Button>);
      expect(
        screen.getByRole("button", { name: "Custom label" }),
      ).toBeInTheDocument();
    });

    it("has focus-visible styles", () => {
      render(<Button>Focusable</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("focus-visible:ring-ring/50");
    });

    it("can be a submit button", () => {
      render(<Button type="submit">Submit</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "submit");
    });

    it("can be a reset button", () => {
      render(<Button type="reset">Reset</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "reset");
    });
  });

  describe("Combination of props", () => {
    it("combines variant and size", () => {
      render(
        <Button variant="gradient-primary" size="lg">
          Large Primary
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("gradient-tecno-animated");
      expect(button).toHaveClass("h-10");
      expect(button).toHaveClass("px-6");
    });

    it("combines variant, size, and custom className", () => {
      render(
        <Button
          variant="outline-gradient"
          size="sm"
          className="my-custom-class"
        >
          Custom Button
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("border-2");
      expect(button).toHaveClass("h-8");
      expect(button).toHaveClass("my-custom-class");
    });
  });

  describe("SVG icon handling", () => {
    it("applies correct classes to SVG children", () => {
      render(
        <Button>
          <svg data-testid="icon" />
          Button with icon
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("[&_svg]:pointer-events-none");
    });
  });
});
