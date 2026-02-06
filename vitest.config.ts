import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom environment for React component testing
    environment: "jsdom",

    // Global setup file
    setupFiles: ["./tests/setup.ts"],

    // Enable global test APIs (describe, it, expect, etc)
    globals: true,

    // Enable CSS processing in tests
    css: true,

    // Coverage configuration
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      exclude: [
        "node_modules/",
        ".next/",
        "dist/",
        "**/*.config.*",
        "**/*.d.ts",
        "**/test-utils.tsx",
        "**/setup.ts",
        "**/mocks/**",
        "tests/**",
        "public/**",
        "src/app/layout.tsx", // Root layout, hard to test in isolation
        "src/app/page.tsx", // Will be tested via E2E
        "src/components/ui/button-showcase.tsx", // Dev-only showcase
      ],
      // Thresholds for coverage
      thresholds: {
        lines: 85,
        functions: 85,
        branches: 80,
        statements: 85,
      },
    },

    // Exclude patterns
    exclude: [
      "node_modules",
      ".next",
      "dist",
      ".turbo",
      "coverage",
      "e2e/**",
      "**/*.spec.ts",
      "playwright-report",
    ],
  },

  resolve: {
    // Path alias matching tsconfig.json
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
