import type { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from "./section-title";

const meta = {
  title: "UI/SectionTitle",
  component: SectionTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4"],
    },
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Our Services",
  },
};

export const Small: Story = {
  args: {
    children: "Recent Work",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Transform Your Digital Presence",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Innovation First",
    size: "lg",
  },
};

export const LeftAligned: Story = {
  args: {
    children: "About Our Company",
    align: "left",
    size: "md",
  },
};

export const CenterAligned: Story = {
  args: {
    children: "Featured Projects",
    align: "center",
    size: "md",
  },
};

export const RightAligned: Story = {
  args: {
    children: "Get In Touch",
    align: "right",
    size: "md",
  },
};

export const WithGradient: Story = {
  args: {
    children: "Discover Our Solutions",
    size: "lg",
    className: "bg-linear-primary bg-clip-text text-transparent",
  },
};

export const AsH1: Story = {
  args: {
    children: "Main Page Heading",
    as: "h1",
    size: "lg",
  },
};

export const AsH3: Story = {
  args: {
    children: "Subsection Title",
    as: "h3",
    size: "sm",
    align: "left",
  },
};

export const SectionShowcase: Story = {
  args: {
    children: "Section Showcase",
  },
  render: () => (
    <div className="max-w-4xl space-y-16">
      <section>
        <SectionTitle as="h1" size="lg" align="center">
          Welcome to TecnoJr
        </SectionTitle>
        <p className="mt-4 text-center text-muted-foreground">
          Your technology partner for digital innovation
        </p>
      </section>

      <section>
        <SectionTitle as="h2" size="md" align="left">
          Our Services
        </SectionTitle>
        <p className="mt-4 text-muted-foreground">
          We offer a wide range of services to help you succeed
        </p>
      </section>

      <section>
        <SectionTitle
          as="h2"
          size="md"
          align="center"
          className="bg-linear-primary bg-clip-text text-transparent"
        >
          Featured Projects
        </SectionTitle>
        <p className="mt-4 text-center text-muted-foreground">
          Check out some of our best work
        </p>
      </section>

      <section>
        <SectionTitle as="h3" size="sm" align="left">
          Latest News
        </SectionTitle>
        <p className="mt-4 text-muted-foreground">
          Stay updated with our latest announcements
        </p>
      </section>
    </div>
  ),
};
