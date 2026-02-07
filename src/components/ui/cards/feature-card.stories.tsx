import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Rocket, Target, Users, Zap } from "lucide-react";
import { FeatureCard } from "./feature-card";

/**
 * FeatureCard displays company features/differentiators with icon, title, and description.
 *
 * Used in the Features section to showcase what makes TecnoJR unique.
 * Features gradient glow effect on hover and smooth animations.
 */
const meta: Meta<typeof FeatureCard> = {
  title: "UI/Cards/FeatureCard",
  component: FeatureCard,
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
      description: "Feature title",
    },
    description: {
      control: "text",
      description: "Feature description",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

/**
 * Default feature card with lightning icon.
 */
export const Default: Story = {
  args: {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed and performance with cutting-edge technology.",
  },
};

/**
 * Feature card with rocket icon - innovation theme.
 */
export const Innovation: Story = {
  args: {
    icon: Rocket,
    title: "Innovation First",
    description: "Always using the latest technologies and best practices.",
  },
};

/**
 * Feature card with target icon - precision theme.
 */
export const Precision: Story = {
  args: {
    icon: Target,
    title: "Pixel Perfect",
    description:
      "Attention to detail in every aspect of design and development.",
  },
};

/**
 * Feature card with users icon - collaboration theme.
 */
export const Collaboration: Story = {
  args: {
    icon: Users,
    title: "Team Collaboration",
    description: "Working together to deliver exceptional results.",
  },
};

/**
 * Multiple feature cards in a grid layout.
 * Shows how cards look when displayed together.
 */
export const FeatureGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      <FeatureCard
        icon={Zap}
        title="Lightning Fast"
        description="Optimized for speed and performance with cutting-edge technology."
      />
      <FeatureCard
        icon={Rocket}
        title="Innovation First"
        description="Always using the latest technologies and best practices."
      />
      <FeatureCard
        icon={Target}
        title="Pixel Perfect"
        description="Attention to detail in every aspect of design and development."
      />
      <FeatureCard
        icon={Users}
        title="Team Collaboration"
        description="Working together to deliver exceptional results."
      />
    </div>
  ),
};

/**
 * Feature card with longer description text.
 * Tests how the component handles more content.
 */
export const LongDescription: Story = {
  args: {
    icon: Zap,
    title: "Advanced Technology Stack",
    description:
      "We utilize the most modern and efficient technology stack available, including Next.js, React, TypeScript, and Tailwind CSS. Our development process ensures scalability, maintainability, and exceptional performance across all devices and platforms.",
  },
};

/**
 * Feature card with short title and description.
 */
export const Minimal: Story = {
  args: {
    icon: Target,
    title: "Focus",
    description: "Quality over quantity.",
  },
};
