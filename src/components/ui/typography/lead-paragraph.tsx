import type { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Maximum width variants for lead paragraphs.
 */
type LeadMaxWidth = "2xl" | "3xl" | "4xl" | "5xl";

/**
 * Props for the LeadParagraph component.
 */
interface LeadParagraphProps {
  children: ReactNode;
  responsive?: boolean;
  maxWidth?: LeadMaxWidth;
  className?: string;
}

/**
 * Props for LeadParagraph.Highlight subcomponent.
 */
interface LeadParagraphHighlightProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "white";
  className?: string;
}

/**
 * Lead paragraph component for hero sections and major content blocks.
 *
 * Consolidates the duplicate pattern:
 * `text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl`
 *
 * Provides larger, more prominent text for introductory content.
 * Use in hero sections, section introductions, and key messaging.
 *
 * @example
 * // Basic responsive lead paragraph
 * <LeadParagraph responsive maxWidth="5xl">
 *   Fundada em 2002, a TecnoJr foi criada como um projeto de extensão...
 * </LeadParagraph>
 *
 * @example
 * // With inline highlights
 * <LeadParagraph responsive maxWidth="4xl">
 *   A TecnoJr é especializada em{" "}
 *   <LeadParagraph.Highlight color="primary">
 *     desenvolvimento de sistemas
 *   </LeadParagraph.Highlight>{" "}
 *   e soluções tecnológicas.
 * </LeadParagraph>
 *
 * @example
 * // Non-responsive for smaller sections
 * <LeadParagraph maxWidth="3xl">
 *   Simple lead text without responsive scaling.
 * </LeadParagraph>
 */
export function LeadParagraph({
  children,
  responsive = true,
  maxWidth = "5xl",
  className,
}: LeadParagraphProps) {
  const maxWidthClasses: Record<LeadMaxWidth, string> = {
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
  };

  const sizeClasses = responsive ? "text-lg sm:text-xl lg:text-2xl" : "text-lg";

  return (
    <p
      className={cn(
        "leading-relaxed text-gray-300",
        sizeClasses,
        maxWidthClasses[maxWidth],
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * Inline highlight for emphasis within lead paragraphs.
 * Adds semantic emphasis with brand colors.
 */
LeadParagraph.Highlight = function LeadParagraphHighlight({
  children,
  color = "primary",
  className,
}: LeadParagraphHighlightProps) {
  const colorClasses: Record<typeof color, string> = {
    primary: "text-brand-primary",
    secondary: "text-brand-secondary",
    white: "text-white",
  };

  return (
    <span className={cn("font-semibold", colorClasses[color], className)}>
      {children}
    </span>
  );
};
