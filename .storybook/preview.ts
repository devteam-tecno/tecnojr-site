import type { Preview } from "@storybook/nextjs-vite";

// Import global styles (Tailwind CSS + custom styles)
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#0A0A0A", // tecno-black-950
        },
        {
          name: "light",
          value: "#F5F5F5", // tecno-black-50
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
        wide: {
          name: "Wide",
          styles: {
            width: "1920px",
            height: "1080px",
          },
        },
      },
    },
  },
};

export default preview;
