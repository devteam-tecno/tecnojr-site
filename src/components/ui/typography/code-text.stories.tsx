import type { Meta, StoryObj } from "@storybook/react";
import { CodeText } from "./code-text";

const meta = {
  title: "UI/CodeText",
  component: CodeText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CodeText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "npm install",
  },
};

export const FunctionName: Story = {
  args: {
    children: "useState",
  },
};

export const FilePath: Story = {
  args: {
    children: "@/lib/utils",
  },
};

export const Command: Story = {
  args: {
    children: "git commit -m 'Initial commit'",
  },
};

export const WithCustomColor: Story = {
  args: {
    children: "const result = await fetch()",
    className: "text-tecno-purple-500",
  },
};

export const InParagraph: Story = {
  args: {
    children: "npm install",
  },
  render: () => (
    <p className="max-w-md text-balance">
      Run <CodeText>npm install</CodeText> to install all dependencies, then
      start the development server with <CodeText>npm run dev</CodeText>.
    </p>
  ),
};

export const InDocumentation: Story = {
  args: {
    children: "npm install",
  },
  render: () => (
    <div className="max-w-2xl space-y-4">
      <h3 className="text-xl font-semibold">Installation</h3>
      <p>
        To get started, clone the repository and run{" "}
        <CodeText>npm install</CodeText>:
      </p>
      <div className="rounded-lg bg-muted p-4">
        <CodeText>git clone https://github.com/tecnojr/website.git</CodeText>
        <br />
        <CodeText>cd website</CodeText>
        <br />
        <CodeText>npm install</CodeText>
      </div>
      <h3 className="text-xl font-semibold">Usage</h3>
      <p>
        Import the utility function from <CodeText>@/lib/utils</CodeText>:
      </p>
      <div className="rounded-lg bg-muted p-4">
        <CodeText>{`import { cn } from "@/lib/utils"`}</CodeText>
      </div>
    </div>
  ),
};

export const ErrorMessage: Story = {
  args: {
    children: "next",
  },
  render: () => (
    <div className="max-w-md rounded-lg border border-destructive/50 bg-destructive/10 p-4">
      <p className="font-semibold text-destructive">Error</p>
      <p className="mt-2 text-sm">
        Cannot find module{" "}
        <CodeText className="text-destructive">next</CodeText>. Did you run{" "}
        <CodeText className="text-destructive">npm install</CodeText>?
      </p>
    </div>
  ),
};

export const TechnologyStack: Story = {
  args: {
    children: "Next.js 16",
  },
  render: () => (
    <div className="max-w-md space-y-4">
      <h3 className="text-xl font-semibold">Technology Stack</h3>
      <ul className="space-y-2">
        <li>
          <CodeText>Next.js 16</CodeText> - React framework
        </li>
        <li>
          <CodeText>TypeScript</CodeText> - Type-safe JavaScript
        </li>
        <li>
          <CodeText>Tailwind CSS v4</CodeText> - Utility-first CSS
        </li>
        <li>
          <CodeText>Framer Motion</CodeText> - Animation library
        </li>
        <li>
          <CodeText>Radix UI</CodeText> - Accessible components
        </li>
      </ul>
    </div>
  ),
};
