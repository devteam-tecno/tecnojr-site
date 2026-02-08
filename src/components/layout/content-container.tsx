import type { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Maximum width variants.
 */
type ContentMaxWidth = "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

/**
 * Spacing variants.
 */
type ContentSpacing = "none" | "sm" | "md" | "lg" | "xl";

/**
 * Props for the ContentContainer component.
 */
interface ContentContainerProps {
  children: ReactNode;
  maxWidth?: ContentMaxWidth;
  spacing?: ContentSpacing;
  centered?: boolean;
  className?: string;
}

/**
 * Content width container with consistent max-width and spacing.
 *
 * Consolidates the duplicate pattern:
 * `mx-auto max-w-{width} space-y-{spacing}`
 *
 * Used for constraining content width and providing vertical rhythm
 * in hero sections, section descriptions, and content blocks.
 *
 * Complements SectionContainer (which handles page-level padding).
 * Use ContentContainer for inner content width constraints.
 *
 * @example
 * // Standard hero content
 * <ContentContainer maxWidth="5xl" spacing="md">
 *   <LeadParagraph>First paragraph</LeadParagraph>
 *   <LeadParagraph>Second paragraph</LeadParagraph>
 * </ContentContainer>
 *
 * @example
 * // Centered form content
 * <ContentContainer maxWidth="2xl" spacing="lg" centered>
 *   <ContactForm />
 * </ContentContainer>
 *
 * @example
 * // No spacing (manual control)
 * <ContentContainer maxWidth="4xl" spacing="none">
 *   <CustomLayout />
 * </ContentContainer>
 */
export function ContentContainer({
  children,
  maxWidth = "5xl",
  spacing = "md",
  centered = true,
  className,
}: ContentContainerProps) {
  const maxWidthClasses: Record<ContentMaxWidth, string> = {
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
  };

  const spacingClasses: Record<ContentSpacing, string> = {
    none: "",
    sm: "space-y-4",
    md: "space-y-6",
    lg: "space-y-8",
    xl: "space-y-12",
  };

  return (
    <div
      className={cn(
        maxWidthClasses[maxWidth],
        spacingClasses[spacing],
        centered && "mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
