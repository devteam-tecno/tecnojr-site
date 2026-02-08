import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Text style variants.
 */
type TextVariant = "body" | "muted" | "lead" | "small" | "xs";

/**
 * Text size variants.
 */
type TextSize = "xs" | "sm" | "base" | "lg" | "xl";

/**
 * Props for the Text component.
 */
interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  as?: ElementType;
  className?: string;
}

/**
 * Universal text component with semantic variants.
 *
 * Consolidates duplicate text patterns like:
 * - `text-sm text-gray-400` (muted - 50+ occurrences)
 * - `text-base text-gray-300` (body)
 * - `text-lg text-gray-300` (lead)
 *
 * Provides consistent typography scale across the application.
 * Use for body text, labels, descriptions, and secondary content.
 *
 * @example
 * // Muted text (most common use case)
 * <Text variant="muted" size="sm">
 *   Last updated: 2 hours ago
 * </Text>
 *
 * @example
 * // Body text with custom element
 * <Text variant="body" as="span">
 *   Standard body text content
 * </Text>
 *
 * @example
 * // Lead text (larger, prominent)
 * <Text variant="lead" size="lg">
 *   Important introductory text
 * </Text>
 *
 * @example
 * // Small labels
 * <Text variant="small">
 *   Form helper text or metadata
 * </Text>
 */
export function Text({
  children,
  variant = "body",
  size,
  as: Component = "p",
  className,
}: TextProps) {
  // Variant-specific base styles
  const variantClasses: Record<TextVariant, string> = {
    body: "text-gray-300",
    muted: "text-gray-400",
    lead: "text-gray-300",
    small: "text-gray-400",
    xs: "text-gray-400",
  };

  // Size overrides (if not specified, uses variant default)
  const sizeClasses: Record<TextSize, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  // Default sizes per variant
  const defaultSizes: Record<TextVariant, TextSize> = {
    body: "base",
    muted: "sm",
    lead: "lg",
    small: "sm",
    xs: "xs",
  };

  const finalSize = size ?? defaultSizes[variant];

  return (
    <Component
      className={cn(variantClasses[variant], sizeClasses[finalSize], className)}
    >
      {children}
    </Component>
  );
}
