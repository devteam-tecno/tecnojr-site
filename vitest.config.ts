import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
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
        "src/app/layout.tsx",
        // Root layout, hard to test in isolation
        "src/app/page.tsx",
        // Will be tested via E2E
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
    projects: [
      // Unit tests project (jsdom environment)
      {
        extends: true,
        test: {
          name: "unit",
          include: ["src/**/*.test.{ts,tsx}"],
          environment: "jsdom",
          setupFiles: ["./tests/setup.ts"],
        },
      },
      // Storybook tests project (browser environment)
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
  resolve: {
    // Path alias matching tsconfig.json
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@tests": path.resolve(__dirname, "./tests"),
    },
  },
});
