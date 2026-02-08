/**
 * @file animated-underline.tsx
 * @description Animated underline component with customizable origin and timing
 *
 * Replaces 5+ inline motion.span patterns for underline effects across hero sections.
 * Provides a clean, reusable way to add animated underlines to text.
 */

"use client";

import { type HTMLMotionProps, motion } from "framer-motion";
import type { ReactElement } from "react";
import { DURATIONS } from "@/lib/animation/animations";
import { cn } from "@/lib/utils/utils";

// ============================================================================
// TYPES
// ============================================================================

export interface AnimatedUnderlineProps
  extends Omit<HTMLMotionProps<"span">, "initial" | "animate" | "transition"> {
  /**
   * Animation delay in seconds
   * @default 0
   */
  delay?: number;

  /**
   * Animation duration in seconds
   * @default 0.8
   */
  duration?: number;

  /**
   * Transform origin for the scale animation
   * - 'left': Animates from left to right (default)
   * - 'center': Animates from center outwards
   * - 'right': Animates from right to left
   * @default 'left'
   */
  origin?: "left" | "center" | "right";

  /**
   * Additional CSS classes for customization
   * Useful for setting height, position, color, gradients
   */
  className?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Animated underline component with scale effect
 *
 * Creates an animated underline that expands from a specified origin point.
 * Commonly used to emphasize text in hero sections and headings.
 *
 * @example
 * ```tsx
 * <span className="relative">
 *   TecnoJr
 *   <AnimatedUnderline
 *     delay={1.5}
 *     className="gradient-tecno-primary"
 *   />
 * </span>
 * ```
 *
 * @example With custom origin and duration
 * ```tsx
 * <span className="relative">
 *   Featured
 *   <AnimatedUnderline
 *     delay={0.5}
 *     duration={1.2}
 *     origin="center"
 *     className="h-1 bg-brand-secondary"
 *   />
 * </span>
 * ```
 */
export function AnimatedUnderline({
  delay = 0,
  duration = DURATIONS.standard,
  origin = "left",
  className,
  ...props
}: AnimatedUnderlineProps): ReactElement {
  const originClass = {
    left: "origin-left",
    center: "origin-center",
    right: "origin-right",
  }[origin];

  return (
    <motion.span
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration, delay }}
      className={cn(
        // Base positioning and dimensions
        "absolute bottom-0 left-0 h-0.5 w-full",
        // Transform origin
        originClass,
        // Custom classes (gradients, colors, heights, etc.)
        className,
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

// ============================================================================
// PRESET VARIANTS (for common use cases)
// ============================================================================

/**
 * Primary gradient underline (TecnoJr brand primary)
 */
export function AnimatedUnderlinePrimary(
  props: Omit<AnimatedUnderlineProps, "className">,
): React.ReactElement {
  return <AnimatedUnderline className="gradient-tecno-primary" {...props} />;
}

/**
 * Secondary gradient underline (TecnoJr brand secondary)
 */
export function AnimatedUnderlineSecondary(
  props: Omit<AnimatedUnderlineProps, "className">,
): React.ReactElement {
  return <AnimatedUnderline className="gradient-tecno-secondary" {...props} />;
}

/**
 * Simple white underline
 */
export function AnimatedUnderlineWhite(
  props: Omit<AnimatedUnderlineProps, "className">,
): React.ReactElement {
  return <AnimatedUnderline className="bg-white" {...props} />;
}

/**
 * Thicker underline variant (h-1 instead of h-0.5)
 */
export function AnimatedUnderlineThick({
  className,
  ...props
}: AnimatedUnderlineProps): React.ReactElement {
  return <AnimatedUnderline className={cn("h-1", className)} {...props} />;
}
