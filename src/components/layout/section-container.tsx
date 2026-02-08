import type { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Maximum width variants for the section container.
 */
type MaxWidthVariant = "2xl" | "4xl" | "5xl" | "7xl";

/**
 * Props for the SectionContainer component.
 *
 * @property children - The content to be wrapped in the container
 * @property className - Optional additional CSS classes
 * @property maxWidth - Maximum width variant (default: '7xl')
 */
interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: MaxWidthVariant;
}

/**
 * Reusable inner container for section content with responsive padding.
 *
 * Provides consistent max-width, centering, and horizontal padding across
 * sections. This component eliminates the duplicate pattern:
 * `relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
 *
 * Used within Section components or standalone for content containment.
 *
 * @example
 * // Default 7xl width
 * <SectionContainer>
 *   <h1>Content here</h1>
 * </SectionContainer>
 *
 * @example
 * // Narrower content (e.g., forms, text-heavy content)
 * <SectionContainer maxWidth="4xl">
 *   <ContactForm />
 * </SectionContainer>
 *
 * @example
 * // With additional classes
 * <SectionContainer className="space-y-8">
 *   <SectionTitle>Title</SectionTitle>
 *   <Content />
 * </SectionContainer>
 */
export function SectionContainer({
  children,
  className,
  maxWidth = "7xl",
}: SectionContainerProps) {
  const maxWidthClasses: Record<MaxWidthVariant, string> = {
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "7xl": "max-w-7xl",
  };

  return (
    <div
      className={cn(
        "relative z-10 mx-auto px-4 sm:px-6 lg:px-8",
        maxWidthClasses[maxWidth],
        className,
      )}
    >
      {children}
    </div>
  );
}
