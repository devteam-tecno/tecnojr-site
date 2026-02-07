import { create } from "storybook/theming";

export default create({
  base: "dark",

  // Brand
  brandTitle: "TecnoJR Components",
  brandUrl: "https://tecnojr.com.br",
  brandTarget: "_self",

  // Colors (OKLCH from STYLE_GUIDE.md)
  colorPrimary: "#9155EB", // tecno-purple-500
  colorSecondary: "#4A90E2", // tecno-blue-500

  // UI
  appBg: "#0A0A0A", // tecno-black-950
  appContentBg: "#141414", // tecno-black-900
  appPreviewBg: "#0A0A0A",
  appBorderColor: "rgba(145, 85, 235, 0.2)", // purple with transparency
  appBorderRadius: 8,

  // Text colors
  textColor: "#E5E5E5", // tecno-black-100
  textInverseColor: "#0A0A0A",
  textMutedColor: "#A3A3A3", // tecno-black-400

  // Toolbar
  barTextColor: "#E5E5E5",
  barSelectedColor: "#9155EB",
  barHoverColor: "#B185F3",
  barBg: "#141414",

  // Form
  inputBg: "#1F1F1F",
  inputBorder: "rgba(145, 85, 235, 0.3)",
  inputTextColor: "#E5E5E5",
  inputBorderRadius: 6,

  // Typography
  fontBase:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"Fira Code", "Courier New", monospace',
});
