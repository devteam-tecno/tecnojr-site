import { type RenderOptions, render } from "@testing-library/react";
import type { ReactElement } from "react";
import { vi } from "vitest";

// Custom render function that wraps components with providers if needed
export function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, { ...options });
}

// Mock router state type
export interface MockRouterState {
  pathname?: string;
  searchParams?: Record<string, string>;
  push?: ReturnType<typeof vi.fn>;
  replace?: ReturnType<typeof vi.fn>;
  back?: ReturnType<typeof vi.fn>;
  forward?: ReturnType<typeof vi.fn>;
  refresh?: ReturnType<typeof vi.fn>;
  prefetch?: ReturnType<typeof vi.fn>;
}

// Helper to render with mocked router
export function renderWithRouter(
  ui: ReactElement,
  routerState: MockRouterState = {},
  options?: Omit<RenderOptions, "wrapper">,
) {
  const {
    pathname = "/",
    searchParams = {},
    push = vi.fn(),
    replace = vi.fn(),
    back = vi.fn(),
    forward = vi.fn(),
    refresh = vi.fn(),
    prefetch = vi.fn(),
  } = routerState;

  // Mock useRouter
  const mockRouter = {
    push,
    replace,
    back,
    forward,
    refresh,
    prefetch,
  };

  // Mock usePathname
  const usePathnameModule = require("next/navigation");
  vi.mocked(usePathnameModule.usePathname).mockReturnValue(pathname);

  // Mock useRouter
  vi.mocked(usePathnameModule.useRouter).mockReturnValue(mockRouter);

  // Mock useSearchParams
  const mockSearchParams = new URLSearchParams(searchParams);
  vi.mocked(usePathnameModule.useSearchParams).mockReturnValue(
    mockSearchParams,
  );

  return {
    ...render(ui, { ...options }),
    mockRouter,
  };
}

// Helper to mock window scroll position
export function mockScrollPosition(scrollY: number = 0) {
  Object.defineProperty(window, "scrollY", {
    writable: true,
    configurable: true,
    value: scrollY,
  });

  Object.defineProperty(window, "pageYOffset", {
    writable: true,
    configurable: true,
    value: scrollY,
  });
}

// Helper to trigger scroll event
export function triggerScrollEvent(scrollY: number = 0) {
  mockScrollPosition(scrollY);
  window.dispatchEvent(new Event("scroll"));
}

// Re-export everything from React Testing Library
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
