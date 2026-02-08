import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Gradient text variants.
 */
type GradientVariant = "tecno" | "primary" | "secondary";

/**
 * Props for the GradientText component.
 */
interface GradientTextProps {
  children: ReactNode;
  variant?: GradientVariant;
  as?: ElementType;
  className?: string;
}

/**
 * Gradient text wrapper component.
 *
 * Semantic wrapper around `text-gradient-tecno` utility (10+ occurrences).
 * Provides brand gradient text styling with improved semantics and
 * easy rebranding capabilities.
 *
 * Used for:
 * - Hero section accents
 * - Section titles
 * - Emphasized headings
 * - Brand highlights
 *
 * @example
 * // Default tecno gradient
 * <h1>
 *   Quem é a <GradientText>TecnoJr</GradientText>?
 * </h1>
 *
 * @example
 * // As heading element
 * <GradientText as="h2" variant="primary">
 *   Featured Section
 * </GradientText>
 *
 * @example
 * // Within paragraph
 * <p>
 *   Somos especializados em{" "}
 *   <GradientText as="span">desenvolvimento de software</GradientText>
 * </p>
 */
export function GradientText({
  children,
  variant = "tecno",
  as: Component = "span",
  className,
}: GradientTextProps) {
  const variantClasses: Record<GradientVariant, string> = {
    tecno: "text-gradient-tecno",
    primary:
      "bg-linear-to-r from-brand-primary to-brand-primary bg-clip-text text-transparent",
    secondary:
      "bg-linear-to-r from-brand-secondary to-brand-secondary bg-clip-text text-transparent",
  };

  return (
    <Component className={cn(variantClasses[variant], className)}>
      {children}
    </Component>
  );
}
