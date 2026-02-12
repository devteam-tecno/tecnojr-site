import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../.storybook/docs/**/*.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  docs: {
    defaultName: "Documentation",
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal: async (config) => {
    // Fix: Externalize Storybook blocks for build
    if (config.build) {
      config.build.rollupOptions = config.build.rollupOptions || {};

      const existingExternal = config.build.rollupOptions.external;
      const externalArray: (string | RegExp)[] = [];

      if (Array.isArray(existingExternal)) {
        externalArray.push(
          ...existingExternal.filter(
            (item): item is string | RegExp =>
              typeof item === "string" || item instanceof RegExp,
          ),
        );
      } else if (
        typeof existingExternal === "string" ||
        existingExternal instanceof RegExp
      ) {
        externalArray.push(existingExternal);
      }

      externalArray.push("@storybook/blocks");
      config.build.rollupOptions.external = externalArray;
    }
    return config;
  },
};

export default config;
