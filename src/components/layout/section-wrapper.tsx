import type { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Props for the SectionWrapper component.
 *
 * @property children - Section content
 * @property className - Optional additional CSS classes
 * @property id - Optional ID for anchor navigation (e.g., "about", "services")
 * @property as - HTML element to render ("section" for semantic sections, "div" for layout-only)
 */
interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

/**
 * Semantic section wrapper with responsive vertical spacing.
 *
 * Provides consistent vertical padding across breakpoints (py-16 on mobile, py-20 on tablet,
 * py-24 on desktop). Use to wrap major page sections for consistent spacing between sections.
 * Defaults to `<section>` for semantic HTML but can render as `<div>` when nesting sections.
 *
 * @example
 * Basic section with ID: SectionWrapper with id="services"
 *
 * @example
 * Reduced padding: SectionWrapper with className="py-12"
 *
 * @example
 * As div for nested sections: SectionWrapper with as="div"
 *
 * @example
 * Full-screen hero: SectionWrapper with className="min-h-screen py-0"
 */
export function SectionWrapper({
  children,
  className,
  id,
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      {children}
    </Component>
  );
}
