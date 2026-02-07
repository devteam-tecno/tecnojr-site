import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <div className="pt-32 px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Page Content</h1>
        <p className="text-gray-300">
          The header is fixed at the top with transparent background initially.
          Scroll down to see the background change.
        </p>
        <div className="h-[200vh] mt-8 space-y-4">
          {Array.from({ length: 20 }, (_, i) => ({
            id: `scroll-demo-${i}`,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scroll down to see the header background change with blur effect.",
          })).map((item) => (
            <p key={item.id} className="text-gray-400">
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithScrollEffect: Story = {
  render: () => {
    // Simulate scrolled state
    if (typeof window !== "undefined") {
      window.scrollY = 100;
    }
    return (
      <div className="min-h-screen bg-zinc-900">
        <Header />
        <div className="pt-32 px-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Scrolled State (simulated)
          </h1>
          <p className="text-gray-300">
            Header shows background with border and backdrop-blur when scrolled.
          </p>
        </div>
      </div>
    );
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: () => (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <div className="pt-32 px-4">
        <h1 className="text-2xl font-bold text-white mb-4">Mobile Header</h1>
        <p className="text-gray-300">
          On mobile, the header shows a hamburger menu. Click it to open the
          mobile navigation drawer.
        </p>
        <div className="h-screen mt-8 space-y-4">
          {Array.from({ length: 10 }, (_, i) => ({
            id: `mobile-demo-${i}`,
            text: "Mobile content. Tap the menu icon to see the navigation drawer slide in from the right.",
          })).map((item) => (
            <p key={item.id} className="text-gray-400 text-sm">
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  render: () => (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <div className="pt-32 px-8">
        <h1 className="text-3xl font-bold text-white mb-4">Tablet Header</h1>
        <p className="text-gray-300">
          Tablet view still uses mobile navigation. Desktop navigation appears
          at lg breakpoint (1024px+).
        </p>
      </div>
    </div>
  ),
};

export const DesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  render: () => (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <div className="pt-32 px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Desktop Header</h1>
        <p className="text-gray-300 mb-8">
          Desktop view shows full navigation with center-aligned links and
          right-aligned CTA buttons. Hover over links to see transitions.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Features:</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Logo with hover scale animation</li>
            <li>Center-aligned navigation links</li>
            <li>Active link indicator with gradient underline</li>
            <li>Right-aligned "Processo Seletivo" link</li>
            <li>Smooth transitions on scroll</li>
            <li>Backdrop blur effect when scrolled</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};
