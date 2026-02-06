/**
 * @file motion-wrappers.tsx
 * @description Reusable Framer Motion wrapper components
 * Consolidates 41+ duplicate animation patterns from across sections/components
 * Usage: <FadeUp><YourContent /></FadeUp> instead of repetitive motion.div configs
 */

"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import {
  createStaggeredFadeUp,
  createViewport,
  fadeVariants,
  scaleVariants,
} from "@/lib/animations";

// ============================================================================
// BASE TYPES
// ============================================================================

interface MotionWrapperProps
  extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport"> {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  className?: string;
}

interface StaggeredMotionProps extends MotionWrapperProps {
  index: number;
  baseDelay?: number;
}

// ============================================================================
// FADE ANIMATIONS
// ============================================================================

/**
 * Fade up animation (most common - 15+ usages)
 * Used in: hero, features, projects, services, budget, about sections
 */
export function FadeUp({
  children,
  delay = 0,
  once = true,
  className,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={fadeVariants.fadeUp.initial}
      whileInView={fadeVariants.fadeUp.animate}
      transition={{ ...fadeVariants.fadeUp.transition, delay }}
      viewport={createViewport({ once })}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Fade from left animation (10+ usages)
 * Used in: section titles first line, image reveals
 */
export function FadeFromLeft({
  children,
  delay = 0,
  once = true,
  className,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={fadeVariants.fadeLeft.initial}
      whileInView={fadeVariants.fadeLeft.animate}
      transition={{ ...fadeVariants.fadeLeft.transition, delay }}
      viewport={createViewport({ once })}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Fade from right animation (8+ usages)
 * Used in: section titles second line, alternate content reveals
 */
export function FadeFromRight({
  children,
  delay = 0,
  once = true,
  className,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={fadeVariants.fadeRight.initial}
      whileInView={fadeVariants.fadeRight.animate}
      transition={{ ...fadeVariants.fadeRight.transition, delay }}
      viewport={createViewport({ once })}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Simple fade in animation
 * Used in: overlays, modals, subtle reveals
 */
export function FadeIn({
  children,
  delay = 0,
  once = true,
  className,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={fadeVariants.fadeIn.initial}
      whileInView={fadeVariants.fadeIn.animate}
      transition={{ ...fadeVariants.fadeIn.transition, delay }}
      viewport={createViewport({ once })}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// SCALE ANIMATIONS
// ============================================================================

/**
 * Scale fade in with spring (6+ usages)
 * Used in: cards, feature items, project items with stagger
 */
export function ScaleFadeIn({
  children,
  delay = 0,
  once = true,
  className,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={scaleVariants.scaleFadeIn.initial}
      whileInView={scaleVariants.scaleFadeIn.animate}
      transition={{ ...scaleVariants.scaleFadeIn.transition, delay }}
      viewport={createViewport({ once })}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// STAGGERED ANIMATIONS (for lists)
// ============================================================================

/**
 * Fade up with automatic stagger delay based on index
 * Used in: feature grids, project grids, service lists
 * @param index - Item index in the list (0-based)
 * @param baseDelay - Optional base delay before stagger starts
 */
export function StaggerFadeUp({
  children,
  index,
  baseDelay = 0,
  once = true,
  className,
  ...props
}: StaggeredMotionProps) {
  const animation = createStaggeredFadeUp(index, baseDelay);

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      transition={animation.transition}
      viewport={createViewport({ once })}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// UTILITY WRAPPERS
// ============================================================================

/**
 * Generic animated wrapper for custom animation variants
 * Use when you need specific animation not covered by presets
 */
interface AnimatedWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function AnimatedWrapper({ children, ...props }: AnimatedWrapperProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

/**
 * Wrapper for span elements (used in section titles)
 */
interface AnimatedSpanProps
  extends Omit<
    HTMLMotionProps<"span">,
    "initial" | "whileInView" | "viewport"
  > {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
}

export function AnimatedSpan({ children, ...props }: AnimatedSpanProps) {
  return <motion.span {...props}>{children}</motion.span>;
}
