import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Cleanup after each test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Mock Next.js navigation hooks
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  })),
  usePathname: vi.fn(() => "/"),
  useSearchParams: vi.fn(() => ({
    get: vi.fn(),
    getAll: vi.fn(),
    has: vi.fn(),
    entries: vi.fn(),
    keys: vi.fn(),
    values: vi.fn(),
    forEach: vi.fn(),
    toString: vi.fn(() => ""),
  })),
  useParams: vi.fn(() => ({})),
  notFound: vi.fn(),
  redirect: vi.fn(),
}));

// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: vi.fn((props: React.ComponentProps<"img">) => {
    const React = require("react");
    return React.createElement("img", props);
  }),
}));

// Mock Framer Motion with reduced motion (React 19+ compatible - no forwardRef needed)
vi.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: new Proxy(
      {},
      {
        get: (_, prop) => {
          // React 19+ automatically forwards refs - no need for forwardRef
          return (props: Record<string, unknown>) =>
            React.createElement(prop as string, props);
        },
      },
    ),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useInView: () => true,
    useAnimation: () => ({
      start: vi.fn(),
      stop: vi.fn(),
      set: vi.fn(),
    }),
    useScroll: () => ({
      scrollY: { current: 0 },
      scrollYProgress: { current: 0 },
    }),
    useTransform: (value: unknown) => value,
    LazyMotion: ({ children }: { children: React.ReactNode }) => children,
    domAnimation: {},
    m: new Proxy(
      {},
      {
        get: (_, prop) => {
          // React 19+ automatically forwards refs - no need for forwardRef
          return (props: Record<string, unknown>) =>
            React.createElement(prop as string, props);
        },
      },
    ),
  };
});

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver (with proper typing instead of 'any')
global.IntersectionObserver = class IntersectionObserver {
  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  unobserve() {}
} as unknown as typeof IntersectionObserver;

// Mock ResizeObserver (with proper typing instead of 'any')
global.ResizeObserver = class ResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
} as unknown as typeof ResizeObserver;
