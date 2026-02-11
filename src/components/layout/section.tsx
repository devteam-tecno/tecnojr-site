import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Section background gradient variants.
 */
type SectionVariant = "default" | "reversed" | "dark" | "brand";

/**
 * Section vertical spacing variants.
 */
type SectionSpacing = "normal" | "large" | "compact";

/**
 * Props for the Section component.
 *
 * @property children - The content to be rendered inside the section
 * @property variant - Background gradient style (default: 'default')
 * @property spacing - Vertical padding size (default: 'normal')
 * @property className - Optional additional CSS classes
 */
interface SectionProps
  extends Omit<ComponentPropsWithoutRef<"section">, "children"> {
  children: ReactNode;
  variant?: SectionVariant;
  spacing?: SectionSpacing;
}

/**
 * Reusable outer section wrapper with background gradients and consistent spacing.
 *
 * Eliminates the duplicate pattern of:
 * `relative overflow-hidden bg-linear-to-b from-{color} to-{color} py-32`
 *
 * Provides standardized gradient backgrounds and spacing for major page sections.
 * Should typically wrap a SectionContainer component.
 *
 * @example
 * // Default gradient (gray-900/50 to tecno-black-800)
 * <Section>
 *   <SectionContainer>
 *     <SectionTitle>Features</SectionTitle>
 *   </SectionContainer>
 * </Section>
 *
 * @example
 * // Reversed gradient
 * <Section variant="reversed">
 *   <SectionContainer>
 *     <Content />
 *   </SectionContainer>
 * </Section>
 *
 * @example
 * // Brand gradient for hero sections
 * <Section variant="brand" spacing="large">
 *   <SectionContainer maxWidth="5xl">
 *     <HeroContent />
 *   </SectionContainer>
 * </Section>
 *
 * @example
 * // Compact spacing for press-kit sections
 * <Section spacing="compact">
 *   <SectionContainer>
 *     <Content />
 *   </SectionContainer>
 * </Section>
 */
export function Section({
  children,
  variant = "default",
  spacing = "normal",
  className,
  ...props
}: SectionProps) {
  const variantClasses: Record<SectionVariant, string> = {
    default: "bg-linear-to-b from-gray-900/50 to-tecno-black-800",
    reversed: "bg-linear-to-b from-tecno-black-800 to-gray-900/50",
    dark: "bg-linear-to-b from-tecno-black-900 to-tecno-black-800",
    brand: "bg-linear-to-b from-brand-dark to-tecno-black-900",
  };

  const spacingClasses: Record<SectionSpacing, string> = {
    normal: "py-16 lg:py-32",
    large: "py-24 lg:py-32",
    compact: "py-12 lg:py-24",
  };

  return (
    <section
      {...props}
      className={cn(
        "relative overflow-hidden",
        variantClasses[variant],
        spacingClasses[spacing],
        className,
      )}
    >
      {children}
    </section>
  );
}
