import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",

        "gradient-primary":
          "relative overflow-hidden rounded-full gradient-tecno-animated text-white font-semibold shadow-lg shadow-brand-primary/25 hover:shadow-brand-secondary/25 transition-all duration-500 hover:scale-[1.02] hover:bg-pos-100 [&>*]:relative [&>*]:z-10",

        "gradient-whatsapp":
          "rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 shadow-md hover:shadow-lg transition-all duration-300",

        "gradient-secondary":
          "rounded-lg bg-gradient-to-r from-brand-secondary to-tecno-blue-600 text-white font-medium hover:from-tecno-blue-600 hover:to-tecno-blue-700 shadow-md hover:shadow-lg transition-all duration-300",

        "outline-gradient":
          "rounded-full border-2 border-gray-700/50 bg-gray-900/50 text-gray-300 font-medium backdrop-blur-sm hover:border-brand-primary/40 hover:bg-gray-800/60 hover:text-white transition-all duration-300",

        "ghost-gradient":
          "rounded-md text-gray-300 hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-brand-secondary/10 hover:text-white transition-all duration-300",

        destructive:
          "rounded-md bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "rounded-md border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        xl: "h-12 px-8 text-base has-[>svg]:px-6",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
