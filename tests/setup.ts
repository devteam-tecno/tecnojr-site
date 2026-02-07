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
  default: ({ src, alt, ...props }: Record<string, unknown>) => ({
    type: "img",
    props: { src, alt, ...props },
  }),
}));

// Mock Framer Motion with reduced motion (React 19+ compatible - no forwardRef needed)
vi.mock("framer-motion", () => {
  const mockComponent = (props: Record<string, unknown>) => ({
    type: "div",
    props,
  });

  return {
    motion: new Proxy(
      {},
      {
        get: (_, prop) => mockComponent,
      },
    ),
    AnimatePresence: ({ children }: { children: unknown }) => children,
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
    LazyMotion: ({ children }: { children: unknown }) => children,
    domAnimation: {},
    m: new Proxy(
      {},
      {
        get: (_, prop) => mockComponent,
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
globalThis.IntersectionObserver = class IntersectionObserver {
  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  unobserve() {}
} as unknown as typeof IntersectionObserver;

// Mock ResizeObserver (with proper typing instead of 'any')
globalThis.ResizeObserver = class ResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
} as unknown as typeof ResizeObserver;
