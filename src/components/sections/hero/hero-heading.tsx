"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Hero heading size variants.
 */
type HeroHeadingSize = "lg" | "xl" | "2xl";

/**
 * Props for the HeroHeading root component.
 */
interface HeroHeadingProps {
  children: ReactNode;
  size?: HeroHeadingSize;
  centered?: boolean;
  className?: string;
}

/**
 * Props for HeroHeading.Line subcomponent.
 */
interface HeroHeadingLineProps {
  children: ReactNode;
  className?: string;
}

/**
 * Props for HeroHeading.GradientLine subcomponent.
 */
interface HeroHeadingGradientLineProps {
  children: ReactNode;
  variant?: "tecno" | "primary" | "secondary";
  className?: string;
}

/**
 * Reusable hero heading component with responsive sizing.
 *
 * Consolidates the duplicate pattern:
 * `text-4xl font-bold leading-tight! sm:text-5xl lg:text-7xl xl:text-8xl`
 *
 * Provides composable API for flexible line arrangements with animations.
 * Use with FadeFromLeft/FadeFromRight wrappers for animated entrance.
 *
 * @example
 * // Basic usage with gradient accent
 * <HeroHeading size="xl">
 *   <FadeFromLeft delay={0.6}>
 *     <HeroHeading.Line>Quem é a</HeroHeading.Line>
 *   </FadeFromLeft>
 *   <FadeFromRight delay={0.8}>
 *     <HeroHeading.GradientLine>TecnoJr?</HeroHeading.GradientLine>
 *   </FadeFromRight>
 * </HeroHeading>
 *
 * @example
 * // Three-line heading with custom colors
 * <HeroHeading size="lg" centered>
 *   <HeroHeading.Line>Sites e Sistemas</HeroHeading.Line>
 *   <HeroHeading.GradientLine variant="primary">que Transformam</HeroHeading.GradientLine>
 *   <HeroHeading.Line>Negócios</HeroHeading.Line>
 * </HeroHeading>
 */
export function HeroHeading({
  children,
  size = "xl",
  centered = false,
  className,
}: HeroHeadingProps) {
  const sizeClasses: Record<HeroHeadingSize, string> = {
    lg: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
    xl: "text-4xl sm:text-5xl lg:text-7xl xl:text-8xl",
    "2xl": "text-5xl sm:text-6xl lg:text-8xl xl:text-9xl",
  };

  return (
    <h1
      className={cn(
        "font-bold leading-tight!",
        sizeClasses[size],
        centered && "text-center",
        className,
      )}
    >
      {children}
    </h1>
  );
}

/**
 * Regular line of hero heading (white text).
 */
HeroHeading.Line = function HeroHeadingLine({
  children,
  className,
}: HeroHeadingLineProps) {
  return <span className={cn("block text-white", className)}>{children}</span>;
};

/**
 * Gradient-accented line of hero heading.
 */
HeroHeading.GradientLine = function HeroHeadingGradientLine({
  children,
  variant = "tecno",
  className,
}: HeroHeadingGradientLineProps) {
  const variantClasses: Record<typeof variant, string> = {
    tecno: "text-gradient-tecno",
    primary: "text-brand-primary",
    secondary: "text-brand-secondary",
  };

  return (
    <span className={cn("block", variantClasses[variant], className)}>
      {children}
    </span>
  );
};
