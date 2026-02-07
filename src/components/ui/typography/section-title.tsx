import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Responsive section heading component with semantic HTML and size variants.
 *
 * Uses the `text-balance` utility for optimal line breaking and includes
 * responsive font sizes that adapt across breakpoints (mobile → desktop).
 * Defaults to `<h2>` but can be customized with the `as` prop for proper heading hierarchy.
 *
 * @example
 * // Default centered section title (h2, md size)
 * <SectionTitle>Our Services</SectionTitle>
 *
 * @example
 * // Large hero title with h1 semantics
 * <SectionTitle as="h1" size="lg" align="center">
 *   Transform Your Digital Presence
 * </SectionTitle>
 *
 * @example
 * // Small left-aligned subsection title
 * <SectionTitle as="h3" size="sm" align="left">
 *   Recent Work
 * </SectionTitle>
 *
 * @example
 * // With custom gradient styling
 * <SectionTitle className="bg-linear-primary bg-clip-text text-transparent">
 *   Innovation First
 * </SectionTitle>
 */
const sectionTitleVariants = cva("font-bold tracking-tight text-balance", {
  variants: {
    size: {
      sm: "text-2xl sm:text-3xl",
      md: "text-3xl sm:text-4xl lg:text-5xl",
      lg: "text-4xl sm:text-5xl lg:text-6xl",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "md",
    align: "center",
  },
});

interface SectionTitleProps extends VariantProps<typeof sectionTitleVariants> {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export function SectionTitle({
  children,
  className,
  size,
  align,
  as: Component = "h2",
}: SectionTitleProps) {
  return (
    <Component className={cn(sectionTitleVariants({ size, align }), className)}>
      {children}
    </Component>
  );
}
