import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Code, Megaphone, Smartphone } from "lucide-react";
import { ServiceCard } from "./service-card";

/**
 * ServiceCard displays TecnoJR's service offerings with centered layout.
 *
 * Used in the Services section to showcase what TecnoJR provides.
 * Features icon rotation on hover and glassmorphic styling.
 */
const meta: Meta<typeof ServiceCard> = {
  title: "UI/Cards/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      description: "Lucide React icon component",
      control: false,
    },
    title: {
      control: "text",
      description: "Service name",
    },
    description: {
      control: "text",
      description: "Service description",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

/**
 * Default service card - Web Development.
 */
export const Default: Story = {
  args: {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies.",
  },
};

/**
 * Mobile development service card.
 */
export const MobileDevelopment: Story = {
  args: {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
  },
};

/**
 * Digital marketing service card.
 */
export const DigitalMarketing: Story = {
  args: {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "SEO, social media management, and content marketing strategies.",
  },
};

/**
 * Multiple service cards in a grid layout.
 * Shows centered alignment and spacing.
 */
export const ServiceGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
      <ServiceCard
        icon={Code}
        title="Web Development"
        description="Custom websites and web applications built with modern technologies."
      />
      <ServiceCard
        icon={Smartphone}
        title="Mobile Development"
        description="Native and cross-platform mobile applications for iOS and Android."
      />
      <ServiceCard
        icon={Megaphone}
        title="Digital Marketing"
        description="SEO, social media management, and content marketing strategies."
      />
    </div>
  ),
};

/**
 * Service card with long description.
 */
export const LongDescription: Story = {
  args: {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "We provide end-to-end web development services including frontend interfaces with React and Next.js, backend APIs with Node.js and Python, database design and optimization, cloud deployment on AWS and Vercel, and ongoing maintenance and support.",
  },
};

/**
 * Service card with minimal content.
 */
export const Minimal: Story = {
  args: {
    icon: Code,
    title: "Consulting",
    description: "Expert technical advice.",
  },
};
