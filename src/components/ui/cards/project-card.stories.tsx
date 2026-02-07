import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProjectCard } from "./project-card";

/**
 * ProjectCard displays portfolio projects with image, title, description, and type badge.
 *
 * Used in the Projects section to showcase TecnoJR's work.
 * Differentiates between client projects (external) and internal projects.
 * External projects with links open in new tabs.
 */
const meta: Meta<typeof ProjectCard> = {
  title: "UI/Cards/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Project name",
    },
    description: {
      control: "text",
      description: "Project description",
    },
    imageSrc: {
      control: "text",
      description: "Image path in /public/assets/img/projects/",
    },
    link: {
      control: "text",
      description: "Project URL (optional)",
    },
    isInternal: {
      control: "boolean",
      description: "Is this an internal TecnoJR project?",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

/**
 * External client project with link.
 */
export const ExternalProject: Story = {
  args: {
    title: "NASA Space Apps",
    description: "Website for NASA Space Apps Challenge hackathon event.",
    imageSrc: "/assets/img/projects/nasaapps.png",
    link: "https://nasa.spaceterra.org/",
    isInternal: false,
  },
};

/**
 * Internal TecnoJR member project.
 */
export const InternalProject: Story = {
  args: {
    title: "COLCIC UESC",
    description:
      "Internal management tool for university computer science department.",
    imageSrc: "/assets/img/projects/colcic.png",
    link: "https://colcic.vercel.app",
    isInternal: true,
  },
};

/**
 * Project without link.
 */
export const WithoutLink: Story = {
  args: {
    title: "Corporate Website",
    description: "Modern corporate website with custom CMS and analytics.",
    imageSrc: "/assets/img/projects/simmbra.png",
    isInternal: false,
  },
};

/**
 * Project with long description.
 */
export const LongDescription: Story = {
  args: {
    title: "E-commerce Platform",
    description:
      "Complete e-commerce solution with product catalog, shopping cart, payment integration with Stripe and PayPal, inventory management system, customer reviews and ratings, real-time order tracking, and admin dashboard with analytics.",
    imageSrc: "/assets/img/projects/guiaserve.png",
    link: "https://guiaserve.com.br",
    isInternal: false,
  },
};

/**
 * Multiple project cards in a grid layout.
 * Shows mix of external and internal projects.
 */
export const ProjectGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
      <ProjectCard
        title="NASA Space Apps"
        description="Website for NASA Space Apps Challenge hackathon event."
        imageSrc="/assets/img/projects/nasaapps.png"
        link="https://nasa.spaceterra.org/"
        isInternal={false}
      />
      <ProjectCard
        title="COLCIC UESC"
        description="Internal management tool for university."
        imageSrc="/assets/img/projects/colcic.png"
        link="https://colcic.vercel.app"
        isInternal={true}
      />
      <ProjectCard
        title="SIMMBRA"
        description="Corporate website for agricultural company."
        imageSrc="/assets/img/projects/simmbra.png"
        link="https://simmbra.com.br"
        isInternal={false}
      />
      <ProjectCard
        title="GuiaServe"
        description="Web platform and mobile app for local services."
        imageSrc="/assets/img/projects/guiaserve.png"
        link="https://guiaserve.com.br"
        isInternal={false}
      />
      <ProjectCard
        title="Ferramentas UESC"
        description="Internal productivity tools for students."
        imageSrc="/assets/img/projects/ferramentasuesc.png"
        link="https://uesc.ilrocha.com/"
        isInternal={true}
      />
      <ProjectCard
        title="Space Terra"
        description="Platform for space-themed hackathon events."
        imageSrc="/assets/img/projects/spaceterra.jpg"
        link="https://spaceterra.org/"
        isInternal={false}
      />
    </div>
  ),
};
