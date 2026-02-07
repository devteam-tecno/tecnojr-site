import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message...",
  },
};

export const WithValue: Story = {
  args: {
    value:
      "This is a sample message with some text. The textarea will automatically expand as you type more content.",
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Enter your message...",
    "aria-invalid": true,
    value: "This message has an error",
  },
};

export const CustomHeight: Story = {
  args: {
    placeholder: "This textarea has a custom minimum height",
    className: "min-h-32",
  },
};

export const InForm: Story = {
  render: () => (
    <form className="w-100 space-y-4">
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <Textarea id="message" placeholder="Enter your message..." />
      </div>
      <div>
        <label htmlFor="feedback" className="mb-2 block text-sm font-medium">
          Feedback
        </label>
        <Textarea
          id="feedback"
          placeholder="Share your thoughts..."
          className="min-h-24"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Submit
      </button>
    </form>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <div className="w-100 space-y-4">
      <div>
        <label
          htmlFor="valid-message"
          className="mb-2 block text-sm font-medium"
        >
          Valid Message
        </label>
        <Textarea
          id="valid-message"
          placeholder="This is valid..."
          value="This message is valid and meets all requirements."
        />
        <p className="mt-1 text-sm text-muted-foreground">Looks good!</p>
      </div>
      <div>
        <label
          htmlFor="invalid-message"
          className="mb-2 block text-sm font-medium"
        >
          Invalid Message
        </label>
        <Textarea
          id="invalid-message"
          placeholder="This is invalid..."
          aria-invalid={true}
          value="Too short"
        />
        <p className="mt-1 text-sm text-destructive">
          Message must be at least 10 characters
        </p>
      </div>
    </div>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <form className="w-125 space-y-6 rounded-lg border p-6">
      <h3 className="text-xl font-semibold">Contact Us</h3>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          className="w-full rounded-md border bg-transparent px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          className="w-full rounded-md border bg-transparent px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          className="min-h-32"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-linear-primary px-4 py-2 font-medium text-white"
      >
        Send Message
      </button>
    </form>
  ),
};
