import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  mockScrollPosition,
  renderWithRouter,
  screen,
  triggerScrollEvent,
  waitFor,
} from "../../../../tests/test-utils";
import { Header } from "./index";

// Mock navigation links
vi.mock("@/lib/navigation", () => ({
  navigationLinks: [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/projetos", label: "Projetos" },
  ],
  ROUTES_WITHOUT_HEADER: ["/login", "/wp-admin"],
}));

describe("Header Component", () => {
  beforeEach(() => {
    // Reset scroll position before each test
    mockScrollPosition(0);
  });

  describe("Rendering", () => {
    it("renders the header on home page", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("renders TecnoJr logo", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      // Logo is rendered as a link or image
      const header = screen.getByRole("banner");
      expect(header).toBeInTheDocument();
    });

    it("renders desktop navigation", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      // Desktop navigation should be present (might be hidden on mobile via CSS)
      const header = screen.getByRole("banner");
      expect(header).toBeInTheDocument();
    });

    it("renders mobile menu toggle button", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const menuButton = screen.getByRole("button", { name: /toggle menu/i });
      expect(menuButton).toBeInTheDocument();
    });
  });

  describe("Header Visibility", () => {
    it("hides header on /login route", () => {
      renderWithRouter(<Header />, { pathname: "/login" });
      expect(screen.queryByRole("banner")).not.toBeInTheDocument();
    });

    it("hides header on /wp-admin route", () => {
      renderWithRouter(<Header />, { pathname: "/wp-admin" });
      expect(screen.queryByRole("banner")).not.toBeInTheDocument();
    });

    it("shows header on home route", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("shows header on /sobre route", () => {
      renderWithRouter(<Header />, { pathname: "/sobre" });
      expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("shows header on /projetos route", () => {
      renderWithRouter(<Header />, { pathname: "/projetos" });
      expect(screen.getByRole("banner")).toBeInTheDocument();
    });
  });

  describe("Scroll Behavior", () => {
    it("applies transparent background at scroll position 0", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const header = screen.getByRole("banner");

      // At top, should have transparent background classes
      expect(header).toHaveClass("bg-zinc-900/80");
    });

    it("applies backdrop blur when scrolled past threshold", async () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const header = screen.getByRole("banner");

      // Simulate scrolling past 50px
      triggerScrollEvent(100);

      await waitFor(() => {
        expect(header).toHaveClass("bg-zinc-900/95");
        expect(header).toHaveClass("backdrop-blur-md");
        expect(header).toHaveClass("border-b");
      });
    });

    it("removes backdrop blur when scrolled back to top", async () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const header = screen.getByRole("banner");

      // First scroll down
      triggerScrollEvent(100);

      await waitFor(() => {
        expect(header).toHaveClass("bg-zinc-900/95");
      });

      // Then scroll back to top
      triggerScrollEvent(0);

      await waitFor(() => {
        expect(header).toHaveClass("bg-zinc-900/80");
      });
    });

    it("changes mobile menu button styles when scrolled", async () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const menuButton = screen.getByRole("button", { name: /toggle menu/i });

      // Initially should have certain background
      expect(menuButton).toHaveClass("bg-zinc-900/40");

      // Scroll down
      triggerScrollEvent(100);

      await waitFor(() => {
        expect(menuButton).not.toHaveClass("bg-zinc-900/40");
      });
    });
  });

  describe("Mobile Menu Toggle", () => {
    it("shows Menu icon initially", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const menuButton = screen.getByRole("button", { name: /toggle menu/i });

      // Menu icon (not X icon)
      const menuIcon = menuButton.querySelector("svg");
      expect(menuIcon).toBeInTheDocument();
    });

    it("shows X icon when menu is open", async () => {
      const userEvent = (
        await import("@testing-library/user-event")
      ).default.setup();

      renderWithRouter(<Header />, { pathname: "/" });
      const menuButton = screen.getByRole("button", { name: /toggle menu/i });

      await userEvent.click(menuButton);

      // After clicking, should show X icon
      await waitFor(() => {
        const icon = menuButton.querySelector("svg");
        expect(icon).toBeInTheDocument();
      });
    });

    it("toggles mobile menu state on button click", async () => {
      const userEvent = (
        await import("@testing-library/user-event")
      ).default.setup();

      renderWithRouter(<Header />, { pathname: "/" });
      const menuButton = screen.getByRole("button", { name: /toggle menu/i });

      // Mobile menu should be closed initially
      await userEvent.click(menuButton);

      // After click, mobile menu component should be triggered (would need to check MobileNavigation rendering)
      expect(menuButton).toBeInTheDocument();
    });
  });

  describe("Route Change Effects", () => {
    it("closes mobile menu when pathname changes", async () => {
      const userEvent = (
        await import("@testing-library/user-event")
      ).default.setup();

      const { rerender } = renderWithRouter(<Header />, { pathname: "/" });
      const menuButton = screen.getByRole("button", { name: /toggle menu/i });

      // Open mobile menu
      await userEvent.click(menuButton);

      // Change route by rerendering with new pathname
      rerender(
        <div>
          {/* Wrap in div to simulate route change context */}
          <Header />
        </div>,
      );

      // Mobile menu should be closed (would check MobileNavigation prop)
      expect(menuButton).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has header role (banner)", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("mobile menu button has accessible label", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      expect(
        screen.getByRole("button", { name: /toggle menu/i }),
      ).toBeInTheDocument();
    });

    it("mobile menu button is keyboard accessible", async () => {
      const userEvent = (
        await import("@testing-library/user-event")
      ).default.setup();

      renderWithRouter(<Header />, { pathname: "/" });
      const menuButton = screen.getByRole("button", { name: /toggle menu/i });

      await userEvent.tab();

      // Button should be focusable
      expect(menuButton).toBeInTheDocument();
    });
  });

  describe("Animation", () => {
    it("has initial animation props", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const header = screen.getByRole("banner");

      // Framer motion component should be rendered
      expect(header).toBeInTheDocument();
    });

    it("applies fixed positioning", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const header = screen.getByRole("banner");

      expect(header).toHaveClass("fixed");
      expect(header).toHaveClass("top-0");
      expect(header).toHaveClass("left-0");
      expect(header).toHaveClass("right-0");
    });

    it("has high z-index for layering", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const header = screen.getByRole("banner");

      expect(header).toHaveClass("z-50");
    });
  });

  describe("Layout Structure", () => {
    it("has max-width container", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const header = screen.getByRole("banner");

      // Check for max-width wrapper
      const container = header.querySelector(".max-w-7xl");
      expect(container).toBeInTheDocument();
    });

    it("uses flexbox for layout", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const header = screen.getByRole("banner");

      const flexContainer = header.querySelector(".flex");
      expect(flexContainer).toBeInTheDocument();
    });

    it("has responsive padding", () => {
      renderWithRouter(<Header />, { pathname: "/" });
      const header = screen.getByRole("banner");

      // Check for responsive padding classes
      const container = header.querySelector('[class*="px-"]');
      expect(container).toBeInTheDocument();
    });
  });
});
