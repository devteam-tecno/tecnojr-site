/**
 * @file animated-card.tsx
 * @description Framer Motion wrappers for card animations
 *
 * Provides animated card containers with entrance and hover effects.
 * Works with existing BaseCard or custom card components for consistent motion patterns.
 */

"use client";

import { type HTMLMotionProps, motion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import { createViewport, TRANSITIONS } from "@/lib/animation/animations";

// ============================================================================
// TYPES
// ============================================================================

export type CardEntranceVariant = "fade" | "scaleFade" | "fadeUp" | "none";
export type CardHoverVariant = "lift" | "scale" | "scaleDown" | "glow" | "none";

export interface AnimatedCardProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "whileInView" | "whileHover"
  > {
  children: ReactNode;

  /**
   * Entrance animation when card scrolls into view
   * @default 'scaleFade'
   */
  entrance?: CardEntranceVariant;

  /**
   * Hover animation effect
   * @default 'lift'
   */
  hover?: CardHoverVariant;

  /**
   * Animation delay in seconds
   * @default 0
   */
  delay?: number;

  /**
   * Only animate once on scroll
   * @default true
   */
  once?: boolean;

  /**
   * Enable tap animation (scale down on press)
   * @default false
   */
  tapEffect?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

// ============================================================================
// ENTRANCE VARIANTS
// ============================================================================

const entranceVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scaleFade: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  none: {
    initial: {},
    animate: {},
  },
} as const;

// ============================================================================
// HOVER VARIANTS
// ============================================================================

const hoverVariants = {
  lift: { scale: 1.02, y: -4 },
  scale: { scale: 1.05 },
  scaleDown: { scale: 0.98 },
  glow: { scale: 1.01 },
  none: {},
} as const;

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * Animated card container with entrance and hover effects
 *
 * Wraps card content with Framer Motion animations. Use this to add
 * consistent motion patterns to any card component.
 *
 * @example Basic usage
 * ```tsx
 * <AnimatedCard>
 *   <BaseCard icon={Zap} title="Feature" description="Description" />
 * </AnimatedCard>
 * ```
 *
 * @example With custom entrance and hover
 * ```tsx
 * <AnimatedCard entrance="fadeUp" hover="scale" delay={0.2}>
 *   <div className="p-6 bg-white rounded-lg">
 *     Custom Card Content
 *   </div>
 * </AnimatedCard>
 * ```
 *
 * @example Staggered list
 * ```tsx
 * {cards.map((card, i) => (
 *   <AnimatedCard key={card.id} delay={i * 0.1}>
 *     <CardContent {...card} />
 *   </AnimatedCard>
 * ))}
 * ```
 */
export function AnimatedCard({
  children,
  entrance = "scaleFade",
  hover = "lift",
  delay = 0,
  once = true,
  tapEffect = false,
  className,
  ...props
}: AnimatedCardProps): ReactElement {
  const entranceVariant = entranceVariants[entrance];
  const hoverVariant = hoverVariants[hover];

  return (
    <motion.div
      initial={entranceVariant.initial}
      whileInView={entranceVariant.animate}
      whileHover={hover !== "none" ? hoverVariant : undefined}
      whileTap={tapEffect ? { scale: 0.95 } : undefined}
      viewport={createViewport({ once })}
      transition={{
        ...TRANSITIONS.standard,
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// PRESET VARIANTS (Composition Pattern)
// ============================================================================

/**
 * Card with lift hover effect (most common pattern)
 * Slightly scales up and lifts on hover
 */
export function AnimatedCardLift(
  props: Omit<AnimatedCardProps, "hover">,
): ReactElement {
  return <AnimatedCard hover="lift" {...props} />;
}

/**
 * Card with scale hover effect
 * Scales up more prominently on hover
 */
export function AnimatedCardScale(
  props: Omit<AnimatedCardProps, "hover">,
): ReactElement {
  return <AnimatedCard hover="scale" {...props} />;
}

/**
 * Card with glow emphasis
 * Subtle scale for cards with glow borders
 */
export function AnimatedCardGlow(
  props: Omit<AnimatedCardProps, "hover">,
): ReactElement {
  return <AnimatedCard hover="glow" {...props} />;
}

/**
 * Card with fade-up entrance
 * Slides up while fading in
 */
export function AnimatedCardFadeUp(
  props: Omit<AnimatedCardProps, "entrance">,
): ReactElement {
  return <AnimatedCard entrance="fadeUp" {...props} />;
}

/**
 * Interactive card with tap effect
 * Includes scale-down on press
 */
export function AnimatedCardInteractive(
  props: Omit<AnimatedCardProps, "tapEffect">,
): ReactElement {
  return <AnimatedCard tapEffect {...props} />;
}

// ============================================================================
// SPECIALIZED COMPONENTS
// ============================================================================

/**
 * Card wrapper for staggered lists
 * Automatically calculates delay based on index
 *
 * @example
 * ```tsx
 * {features.map((feature, i) => (
 *   <AnimatedCardStagger key={feature.id} index={i}>
 *     <FeatureCard {...feature} />
 *   </AnimatedCardStagger>
 * ))}
 * ```
 */
export interface AnimatedCardStaggerProps
  extends Omit<AnimatedCardProps, "delay"> {
  /**
   * Index in the list (zero-based)
   */
  index: number;

  /**
   * Base delay before stagger starts
   * @default 0
   */
  baseDelay?: number;

  /**
   * Delay between each item
   * @default 0.1
   */
  staggerDelay?: number;
}

export function AnimatedCardStagger({
  index,
  baseDelay = 0,
  staggerDelay = 0.1,
  ...props
}: AnimatedCardStaggerProps): ReactElement {
  const calculatedDelay = baseDelay + index * staggerDelay;

  return <AnimatedCard delay={calculatedDelay} {...props} />;
}

// ============================================================================
// COMPOSITION COMPONENTS (Namespace Pattern)
// ============================================================================

/**
 * Namespace for composed card animations
 * Allows for cleaner composition: <Card.Animated.Lift>
 *
 * @example
 * ```tsx
 * <Card.Animated.Lift entrance="fadeUp" delay={0.2}>
 *   <BaseCard {...props} />
 * </Card.Animated.Lift>
 * ```
 */
export const Card = {
  /**
   * Animated card variants
   */
  Animated: {
    Container: AnimatedCard,
    Lift: AnimatedCardLift,
    Scale: AnimatedCardScale,
    Glow: AnimatedCardGlow,
    FadeUp: AnimatedCardFadeUp,
    Interactive: AnimatedCardInteractive,
    Stagger: AnimatedCardStagger,
  },
};
