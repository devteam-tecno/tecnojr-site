/**
 * @file motion-wrappers.tsx
 * @description Reusable Framer Motion wrapper components
 * Consolidates 41+ duplicate animation patterns from across sections/components
 * Usage: <FadeUp><YourContent /></FadeUp> instead of repetitive motion.div configs
 *
 * Accessibility: All animations respect prefers-reduced-motion
 */

"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import {
  createStaggeredFadeUp,
  createViewport,
  fadeVariants,
  scaleVariants,
} from "@/lib/animation/animations";
import { useReducedMotion } from "@/lib/hooks";

// ============================================================================
// BASE TYPES
// ============================================================================

/**
 * Base props for all motion wrapper components
 * @property children - Content to animate
 * @property delay - Animation start delay in seconds
 * @property once - Whether animation should only play once on scroll
 * @property className - Additional CSS classes to apply
 */
export interface MotionWrapperProps
  extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport"> {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  className?: string;
}

/**
 * Props for staggered animations (list items)
 * @property index - Zero-based index of the item in the list
 * @property baseDelay - Base delay before stagger sequence starts (default: 0)
 */
export interface StaggeredMotionProps extends MotionWrapperProps {
  index: number;
  baseDelay?: number;
}

// ============================================================================
// FADE ANIMATIONS
// ============================================================================

/**
 * Fade up animation - most common motion pattern (15+ usages)
 *
 * Animates content by fading in while moving up from below.
 * Used extensively across hero sections, features, projects, services, and budget sections.
 * Respects prefers-reduced-motion by disabling animation.
 *
 * @example
 * ```tsx
 * <FadeUp delay={0.2}>
 *   <h2>Your Content</h2>
 * </FadeUp>
 * ```
 *
 * @param delay - Animation start delay in seconds (default: 0)
 * @param once - Only animate on first scroll (default: true)
 */
export function FadeUp({
  children,
  delay = 0,
  once = true,
  className,
  ...props
}: MotionWrapperProps): ReactElement {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? undefined : fadeVariants.fadeUp.initial}
      whileInView={reducedMotion ? undefined : fadeVariants.fadeUp.animate}
      transition={
        reducedMotion ? undefined : { ...fadeVariants.fadeUp.transition, delay }
      }
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
 *
 * Animates content by fading in while sliding from the left.
 * Commonly used for section title first lines and image reveals.
 *
 * @example
 * ```tsx
 * <FadeFromLeft delay={0.3}>
 *   <h2>First Line</h2>
 * </FadeFromLeft>
 * ```
 */
export function FadeFromLeft({
  children,
  delay = 0,
  once = true,
  className,
  ...props
}: MotionWrapperProps): ReactElement {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? undefined : fadeVariants.fadeLeft.initial}
      whileInView={reducedMotion ? undefined : fadeVariants.fadeLeft.animate}
      transition={
        reducedMotion
          ? undefined
          : { ...fadeVariants.fadeLeft.transition, delay }
      }
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
 *
 * Animates content by fading in while sliding from the right.
 * Commonly used for section title second lines and alternate content reveals.
 *
 * @example
 * ```tsx
 * <FadeFromRight delay={0.5}>
 *   <h2>Second Line</h2>
 * </FadeFromRight>
 * ```
 */
export function FadeFromRight({
  children,
  delay = 0,
  once = true,
  className,
  ...props
}: MotionWrapperProps): ReactElement {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? undefined : fadeVariants.fadeRight.initial}
      whileInView={reducedMotion ? undefined : fadeVariants.fadeRight.animate}
      transition={
        reducedMotion
          ? undefined
          : { ...fadeVariants.fadeRight.transition, delay }
      }
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
 *
 * Animates content by gradually increasing opacity without movement.
 * Used for overlays, modals, and subtle reveals.
 *
 * @example
 * ```tsx
 * <FadeIn delay={0.1}>
 *   <div>Modal Content</div>
 * </FadeIn>
 * ```
 */
export function FadeIn({
  children,
  delay = 0,
  once = true,
  className,
  ...props
}: MotionWrapperProps): ReactElement {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? undefined : fadeVariants.fadeIn.initial}
      whileInView={reducedMotion ? undefined : fadeVariants.fadeIn.animate}
      transition={
        reducedMotion ? undefined : { ...fadeVariants.fadeIn.transition, delay }
      }
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
 * Scale fade in with spring animation (6+ usages)
 *
 * Animates content by fading in while scaling up with a spring effect.
 * Perfect for cards, feature items, and project items that need emphasis.
 *
 * @example
 * ```tsx
 * <ScaleFadeIn delay={0.2}>
 *   <Card>Feature</Card>
 * </ScaleFadeIn>
 * ```
 */
export function ScaleFadeIn({
  children,
  delay = 0,
  once = true,
  className,
  ...props
}: MotionWrapperProps): ReactElement {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? undefined : scaleVariants.scaleFadeIn.initial}
      whileInView={
        reducedMotion ? undefined : scaleVariants.scaleFadeIn.animate
      }
      transition={
        reducedMotion
          ? undefined
          : { ...scaleVariants.scaleFadeIn.transition, delay }
      }
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
 *
 * Animates list items sequentially with calculated delays.
 * Used extensively in feature grids, project grids, and service lists.
 *
 * @example
 * ```tsx
 * {items.map((item, i) => (
 *   <StaggerFadeUp key={item.id} index={i} baseDelay={0.2}>
 *     <Card>{item.content}</Card>
 *   </StaggerFadeUp>
 * ))}
 * ```
 *
 * @param index - Zero-based index of the item in the list
 * @param baseDelay - Base delay before stagger sequence starts (default: 0)
 */
export function StaggerFadeUp({
  children,
  index,
  baseDelay = 0,
  once = true,
  className,
  ...props
}: StaggeredMotionProps): ReactElement {
  const reducedMotion = useReducedMotion();
  const animation = createStaggeredFadeUp(index, baseDelay);

  return (
    <motion.div
      initial={reducedMotion ? undefined : animation.initial}
      whileInView={reducedMotion ? undefined : animation.animate}
      transition={reducedMotion ? undefined : animation.transition}
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
 *
 * Use when you need specific animations not covered by presets.
 * Provides direct access to all Framer Motion props.
 *
 * @example
 * ```tsx
 * <AnimatedWrapper
 *   initial={{ opacity: 0, rotate: -10 }}
 *   whileInView={{ opacity: 1, rotate: 0 }}
 *   transition={{ duration: 1 }}
 * >
 *   <CustomContent />
 * </AnimatedWrapper>
 * ```
 */
export interface AnimatedWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function AnimatedWrapper({
  children,
  ...props
}: AnimatedWrapperProps): ReactElement {
  return <motion.div {...props}>{children}</motion.div>;
}

/**
 * Wrapper for inline span animations
 *
 * Used for animating inline text elements like section title parts.
 * Provides direct access to motion.span props.
 *
 * @example
 * ```tsx
 * <AnimatedSpan
 *   initial={{ scaleX: 0 }}
 *   animate={{ scaleX: 1 }}
 *   className="underline"
 * >
 *   Animated Text
 * </AnimatedSpan>
 * ```
 */
export interface AnimatedSpanProps
  extends Omit<
    HTMLMotionProps<"span">,
    "initial" | "whileInView" | "viewport"
  > {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
}

export function AnimatedSpan({
  children,
  ...props
}: AnimatedSpanProps): ReactElement {
  return <motion.span {...props}>{children}</motion.span>;
}
