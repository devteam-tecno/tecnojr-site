import type { ReactNode } from "react";
import {
  AnimatedUnderlinePrimary,
  AnimatedUnderlineSecondary,
} from "@/components/animated";
import { cn } from "@/lib/utils/utils";

/**
 * Color variants for inline highlights.
 */
type InlineHighlightColor = "primary" | "secondary" | "white";

/**
 * Underline animation variant (matches color unless specified).
 */
type InlineHighlightUnderline = "primary" | "secondary" | "none";

/**
 * Props for the InlineHighlight component.
 */
interface InlineHighlightProps {
  children: ReactNode;
  color?: InlineHighlightColor;
  underline?: InlineHighlightUnderline | boolean;
  underlineDelay?: number;
  className?: string;
}

/**
 * Inline text highlight component with optional animated underline.
 *
 * Consolidates the duplicate pattern:
 * `relative font-semibold text-brand-{color}` + optional animated underline
 *
 * Used for emphasizing key terms, names, and important phrases within
 * paragraphs, particularly in hero sections and marketing copy.
 *
 * @example
 * // Basic highlight with primary color
 * <p>
 *   Fundada em <InlineHighlight color="secondary">2002</InlineHighlight>, a{" "}
 *   <InlineHighlight color="primary">Empresa TecnoJr</InlineHighlight> foi criada...
 * </p>
 *
 * @example
 * // With animated underline (auto-matches color)
 * <LeadParagraph>
 *   A <InlineHighlight color="primary" underline underlineDelay={1.5}>
 *     Empresa TecnoJr
 *   </InlineHighlight> é especializada em tecnologia.
 * </LeadParagraph>
 *
 * @example
 * // Custom underline color
 * <p>
 *   <InlineHighlight color="white" underline="secondary">
 *     Ciência da Computação da UESC
 *   </InlineHighlight>
 * </p>
 */
export function InlineHighlight({
  children,
  color = "primary",
  underline = false,
  underlineDelay = 0,
  className,
}: InlineHighlightProps) {
  const colorClasses: Record<InlineHighlightColor, string> = {
    primary: "text-brand-primary",
    secondary: "text-brand-secondary",
    white: "text-white",
  };

  // Determine underline variant
  const hasUnderline = underline !== false && underline !== "none";
  const underlineVariant =
    typeof underline === "string" && underline !== "none"
      ? underline
      : color === "secondary"
        ? "secondary"
        : "primary";

  return (
    <span
      className={cn(
        "font-semibold",
        colorClasses[color],
        hasUnderline && "relative",
        className,
      )}
    >
      {children}
      {hasUnderline &&
        (underlineVariant === "secondary" ? (
          <AnimatedUnderlineSecondary delay={underlineDelay} />
        ) : (
          <AnimatedUnderlinePrimary delay={underlineDelay} />
        ))}
    </span>
  );
}
