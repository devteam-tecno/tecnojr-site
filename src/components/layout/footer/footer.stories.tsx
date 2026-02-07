import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./index";

const meta = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-zinc-900 flex flex-col">
      <div className="flex-1 px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Page Content</h1>
        <p className="text-gray-300">
          Scroll down to see the footer at the bottom of the page.
        </p>
      </div>
      <Footer />
    </div>
  ),
};

export const FooterOnly: Story = {
  render: () => <Footer />,
};

export const MobileFooter: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: () => (
    <div className="bg-zinc-900">
      <Footer />
    </div>
  ),
};

export const TabletFooter: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  render: () => (
    <div className="bg-zinc-900">
      <Footer />
    </div>
  ),
};

export const DesktopFooter: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  render: () => (
    <div className="bg-zinc-900">
      <Footer />
    </div>
  ),
};

export const WithPageContent: Story = {
  render: () => (
    <div className="min-h-screen bg-zinc-900 flex flex-col">
      <div className="flex-1 px-8 py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-bold text-white">TecnoJr Website</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A comprehensive digital presence for UESC's Computer Science Junior
            Enterprise. This page demonstrates how the footer integrates with
            page content.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Footer Features
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Company logo and description</li>
                <li>Social media links</li>
                <li>Quick navigation links</li>
                <li>Contact information (email, address, phone)</li>
                <li>Copyright notice with dynamic year</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Responsive Layout
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Mobile: Single column, stacked sections</li>
                <li>Tablet: 2-column grid</li>
                <li>Desktop: 4-column grid layout</li>
                <li>Gradient background with purple accent</li>
                <li>Fade-in animations on scroll</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 p-8 border border-purple-500/20 rounded-xl bg-zinc-800/50">
            <h3 className="text-xl font-semibold text-white mb-4">
              Footer Structure
            </h3>
            <div className="text-gray-300 space-y-2 text-sm font-mono">
              <p>
                &lt;Footer&gt; (4-column grid on desktop, responsive stacking)
              </p>
              <p className="ml-4">├─ Description (Logo + Mission + Social)</p>
              <p className="ml-4">├─ QuickLinks (Navigation links)</p>
              <p className="ml-4">
                ├─ ContactInfo (Email + Address + Phone, spans 2 cols)
              </p>
              <p className="ml-4">└─ Copyright (Full width, top border)</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ),
};
