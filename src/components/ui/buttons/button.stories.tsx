import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FaCode, FaRocket, FaWhatsapp } from "react-icons/fa";
import { Button } from "./button";

/**
 * Button component with 8 variants and multiple sizes.
 *
 * The TecnoJR button system provides comprehensive styling options from
 * animated gradients to subtle ghost buttons. All variants support icons,
 * loading states, and accessibility features.
 *
 * ## When to use each variant:
 *
 * - **gradient-primary**: Primary CTAs (hero sections, main actions)
 * - **gradient-whatsapp**: WhatsApp contact links only
 * - **gradient-secondary**: Secondary important actions (email, subm forms)
 * - **outline-gradient**: Filters, tabs, navigation options
 * - **ghost-gradient**: Subtle secondary navigation
 * - **default**: Standard buttons
 * - **outline**: Outlined buttons for less emphasis
 * - **destructive**: Critical/dangerous actions
 *
 * @see BUTTON_SYSTEM.md for complete documentation
 */
const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "gradient-primary",
        "gradient-whatsapp",
        "gradient-secondary",
        "outline-gradient",
        "ghost-gradient",
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
      description: "Button style variant",
    },
    size: {
      control: "select",
      options: [
        "xs",
        "sm",
        "default",
        "lg",
        "xl",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    children: {
      control: "text",
      description: "Button content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Primary gradient button with animated background.
 * Use for hero CTAs and most important actions.
 */
export const GradientPrimary: Story = {
  args: {
    variant: "gradient-primary",
    children: "Get Started",
    size: "lg",
  },
};

/**
 * WhatsApp-specific button with green gradient.
 * Only use for WhatsApp contact links.
 */
export const GradientWhatsApp: Story = {
  args: {
    variant: "gradient-whatsapp",
    children: (
      <>
        <FaWhatsapp />
        Contact on WhatsApp
      </>
    ),
  },
};

/**
 * Secondary gradient button with blue tones.
 * Use for email, form submissions, and secondary important actions.
 */
export const GradientSecondary: Story = {
  args: {
    variant: "gradient-secondary",
    children: "Submit Form",
  },
};

/**
 * Outline button with glassmorphism effect.
 * Perfect for filters, tabs, and navigation options.
 */
export const OutlineGradient: Story = {
  args: {
    variant: "outline-gradient",
    children: "All Projects",
    size: "sm",
  },
};

/**
 * Ghost button with subtle gradient hover.
 * Use for less prominent secondary actions.
 */
export const GhostGradient: Story = {
  args: {
    variant: "ghost-gradient",
    children: "Learn More",
  },
};

/**
 * Standard default button.
 * General purpose button for regular actions.
 */
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default Button",
  },
};

/**
 * Outlined button variant.
 * Lower emphasis than filled buttons.
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

/**
 * Destructive button for dangerous actions.
 * Use for delete, cancel, or critical operations.
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

/**
 * Link-styled button.
 * Looks like a link but with button semantics.
 */
export const Link: Story = {
  args: {
    variant: "link",
    children: "Read More",
  },
};

// ============================================================================
// SIZE VARIANTS
// ============================================================================

/**
 * Extra small button.
 */
export const SizeXS: Story = {
  args: {
    variant: "gradient-primary",
    size: "xs",
    children: "Extra Small",
  },
};

/**
 * Small button.
 */
export const SizeSmall: Story = {
  args: {
    variant: "gradient-primary",
    size: "sm",
    children: "Small",
  },
};

/**
 * Default size button.
 */
export const SizeDefault: Story = {
  args: {
    variant: "gradient-primary",
    size: "default",
    children: "Default Size",
  },
};

/**
 * Large button.
 */
export const SizeLarge: Story = {
  args: {
    variant: "gradient-primary",
    size: "lg",
    children: "Large",
  },
};

/**
 * Extra large button for hero CTAs.
 */
export const SizeXL: Story = {
  args: {
    variant: "gradient-primary",
    size: "xl",
    children: "Extra Large",
  },
};

// ============================================================================
// ICON BUTTONS
// ============================================================================

/**
 * Icon-only button (default size).
 */
export const IconButton: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <FaRocket />,
  },
};

/**
 * Small icon button.
 */
export const IconButtonSmall: Story = {
  args: {
    variant: "ghost",
    size: "icon-sm",
    children: <FaCode />,
  },
};

/**
 * Large icon button.
 */
export const IconButtonLarge: Story = {
  args: {
    variant: "gradient-primary",
    size: "icon-lg",
    children: <FaRocket />,
  },
};

// ============================================================================
// WITH ICONS
// ============================================================================

/**
 * Button with leading icon.
 */
export const WithLeadingIcon: Story = {
  args: {
    variant: "gradient-primary",
    children: (
      <>
        <FaRocket />
        Launch Project
      </>
    ),
  },
};

/**
 * Button with trailing icon.
 */
export const WithTrailingIcon: Story = {
  args: {
    variant: "outline-gradient",
    children: (
      <>
        View Code
        <FaCode />
      </>
    ),
  },
};

// ============================================================================
// STATES
// ============================================================================

/**
 * Disabled button state.
 */
export const Disabled: Story = {
  args: {
    variant: "gradient-primary",
    children: "Disabled Button",
    disabled: true,
  },
};

/**
 * Loading button state (with custom implementation).
 */
export const Loading: Story = {
  args: {
    variant: "gradient-primary",
    children: "Loading...",
    disabled: true,
  },
};

// ============================================================================
// SHOWCASE
// ============================================================================

/**
 * All gradient variants showcase.
 */
export const AllGradientVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Button variant="gradient-primary">Gradient Primary</Button>
      <Button variant="gradient-whatsapp">
        <FaWhatsapp />
        Gradient WhatsApp
      </Button>
      <Button variant="gradient-secondary">Gradient Secondary</Button>
      <Button variant="outline-gradient">Outline Gradient</Button>
      <Button variant="ghost-gradient">Ghost Gradient</Button>
    </div>
  ),
};

/**
 * All sizes showcase with gradient-primary variant.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="gradient-primary" size="xs">
        XS
      </Button>
      <Button variant="gradient-primary" size="sm">
        Small
      </Button>
      <Button variant="gradient-primary" size="default">
        Default
      </Button>
      <Button variant="gradient-primary" size="lg">
        Large
      </Button>
      <Button variant="gradient-primary" size="xl">
        Extra Large
      </Button>
    </div>
  ),
};

/**
 * Interactive button group example.
 * Shows how buttons work together in a UI.
 */
export const ButtonGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="gradient-primary">Save</Button>
      <Button variant="outline-gradient">Cancel</Button>
      <Button variant="ghost-gradient">Preview</Button>
    </div>
  ),
};
