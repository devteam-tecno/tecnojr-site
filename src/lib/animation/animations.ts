/**
 * @file animations.ts
 * @description Centralized animation configurations and constants for Framer Motion
 * Consolidates 41+ duplicate animation patterns found across components
 */

import type { Transition } from "framer-motion";

// ============================================================================
// TYPES
// ============================================================================

export interface ViewportOptions {
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
}

// ============================================================================
// STANDARD DURATIONS
// ============================================================================

/**
 * Standard animation duration constants in seconds.
 *
 * Provides consistent timing across all Framer Motion animations.
 * Used for transitions, fades, scales, and interactive elements.
 *
 * @example
 * ```tsx
 * import { DURATIONS } from '@/lib/animations';
 *
 * <motion.div
 *   animate={{ opacity: 1 }}
 *   transition={{ duration: DURATIONS.standard }}
 * />
 * ```
 */
export const DURATIONS = {
  /** Fast animations for micro-interactions (0.3s) */
  fast: 0.3,
  /** Standard animations for most UI elements (0.8s) */
  standard: 0.8,
  /** Slow animations for emphasis (1.2s) */
  slow: 1.2,
  /** Infinite loops for ambient effects (15s) */
  infinite: 15,
} as const;

/**
 * Standard animation delay constants in seconds.
 *
 * Use for staggered animations and sequential reveals.
 *
 * @example
 * ```tsx
 * import { DELAYS } from '@/lib/animations';
 *
 * <motion.div
 *   initial={{ opacity: 0 }}
 *   animate={{ opacity: 1 }}
 *   transition={{ delay: DELAYS.medium }}
 * />
 * ```
 */
export const DELAYS = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  standard: 0.3,
  long: 0.5,
} as const;

// ============================================================================
// VIEWPORT CONFIGURATION
// ============================================================================

export const DEFAULT_VIEWPORT: ViewportOptions = {
  once: true,
} as const;

// ============================================================================
// STANDARD TRANSITIONS
// ============================================================================

export const TRANSITIONS = {
  standard: {
    duration: DURATIONS.standard,
  },
  fast: {
    duration: DURATIONS.fast,
  },
  slow: {
    duration: DURATIONS.slow,
  },
  spring: {
    type: "spring" as const,
    stiffness: 100,
    damping: 10,
  },
  springBouncy: {
    type: "spring" as const,
    stiffness: 260,
    damping: 20,
  },
} satisfies Record<string, Transition>;

// ============================================================================
// FADE ANIMATIONS
// ============================================================================

/**
 * Fade animation variants for enter/exit effects.
 *
 * Collection of directional fade animations with opacity and position changes.
 * All variants include initial state, animate state, and transition timing.
 *
 * @example
 * ```tsx
 * import { fadeVariants } from '@/lib/animations';
 *
 * // Fade up from bottom
 * <motion.div
 *   initial={fadeVariants.fadeUp.initial}
 *   animate={fadeVariants.fadeUp.animate}
 *   transition={fadeVariants.fadeUp.transition}
 * >
 *   Content
 * </motion.div>
 *
 * // Or use with whileInView
 * <motion.section
 *   initial="initial"
 *   whileInView="animate"
 *   viewport={{ once: true }}
 *   variants={{
 *     initial: fadeVariants.fadeUp.initial,
 *     animate: fadeVariants.fadeUp.animate
 *   }}
 * />
 * ```
 *
 * @see {@link DURATIONS} for timing constants
 * @see {@link TRANSITIONS} for transition presets
 */
export const fadeVariants = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: TRANSITIONS.standard,
  },
  fadeDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: TRANSITIONS.standard,
  },
  fadeLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: TRANSITIONS.standard,
  },
  fadeRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: TRANSITIONS.standard,
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: TRANSITIONS.standard,
  },
} as const;

// ============================================================================
// SCALE ANIMATIONS
// ============================================================================

export const scaleVariants = {
  scaleFadeIn: {
    initial: { opacity: 0, scale: 0.9, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: TRANSITIONS.spring,
  },
  scaleUp: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: TRANSITIONS.spring,
  },
  pulse: {
    initial: { scale: 1 },
    animate: { scale: [1, 1.05, 1] },
    transition: {
      duration: DURATIONS.standard,
      repeat: 0,
    },
  },
} as const;

// ============================================================================
// INFINITE LOOP ANIMATIONS
// ============================================================================

export const infiniteAnimations = {
  floatingOrb: {
    animate: {
      scale: [1, 1.2, 1] as number[],
      rotate: [0, 180, 360] as number[],
      opacity: [0.1, 0.3, 0.1] as number[],
    },
    transition: {
      duration: DURATIONS.infinite,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const,
    },
  },
  floatingGlow: {
    animate: {
      scale: [1, 1.3, 1] as number[],
      opacity: [0.2, 0.4, 0.2] as number[],
    },
    transition: {
      duration: DURATIONS.infinite,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const,
    },
  },
  rotate360: {
    animate: {
      rotate: [0, 360] as number[],
    },
    transition: {
      duration: DURATIONS.infinite,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear" as const,
    },
  },
  bounce: {
    animate: {
      y: [0, -20, 0] as number[],
    },
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const,
    },
  },
};

// ============================================================================
// STAGGER ANIMATIONS (for lists)
// ============================================================================

export const getStaggerTransition = (index: number, baseDelay = 0) => ({
  ...TRANSITIONS.spring,
  delay: baseDelay + index * DELAYS.short,
});

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: DELAYS.short,
    },
  },
};

// ============================================================================
// SECTION TITLE ANIMATIONS (split text pattern)
// ============================================================================

export const sectionTitleVariants = {
  firstLine: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { ...TRANSITIONS.standard, delay: DELAYS.standard },
  },
  secondLine: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { ...TRANSITIONS.standard, delay: DELAYS.long },
  },
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Creates a standard fade up animation with customizable delay.
 *
 * Helper function for creating fade-up animations with timing control.
 * Useful for staggered reveals of multiple elements.
 *
 * @param delay - Animation delay in seconds (default: 0)
 * @returns Framer Motion animation configuration
 *
 * @example
 * ```tsx
 * import { createFadeUp } from '@/lib/animations';
 *
 * // Immediate fade up
 * <motion.div {...createFadeUp()} />
 *
 * // Delayed fade up
 * <motion.div {...createFadeUp(0.5)} />
 *
 * // Staggered list items
 * {items.map((item, i) => (
 *   <motion.div key={i} {...createFadeUp(i * 0.1)}>
 *     {item}
 *   </motion.div>
 * ))}
 * ```
 */
export const createFadeUp = (delay = 0) => ({
  ...fadeVariants.fadeUp,
  transition: {
    ...fadeVariants.fadeUp.transition,
    delay,
  } as Transition,
});

/**
 * Creates a staggered fade-up animation for list items.
 *
 * Calculates progressive delays for list animations based on item index.
 * Creates smooth sequential reveals for grids and lists.
 *
 * @param index - Item index in the list (0-based)
 * @param baseDelay - Initial delay before stagger starts (default: 0)
 * @returns Animation configuration with calculated delay
 *
 * @example
 * ```tsx
 * import { createStaggeredFadeUp } from '@/lib/animations';
 *
 * // Project cards grid with stagger
 * {projects.map((project, index) => (
 *   <motion.div
 *     key={project.id}
 *     {...createStaggeredFadeUp(index)}
 *   >
 *     <ProjectCard {...project} />
 *   </motion.div>
 * ))}
 *
 * // With base delay (wait 0.5s before starting stagger)
 * {features.map((feature, i) => (
 *   <motion.div {...createStaggeredFadeUp(i, 0.5)}>
 *     <FeatureCard {...feature} />
 *   </motion.div>
 * ))}
 * ```
 */
export const createStaggeredFadeUp = (index: number, baseDelay = 0) => ({
  ...fadeVariants.fadeUp,
  transition: getStaggerTransition(index, baseDelay) as Transition,
});

/**
 * Creates viewport configuration for scroll-triggered animations.
 *
 * Configures IntersectionObserver options for Framer Motion's `whileInView`.
 * Controls when animations trigger based on element visibility.
 *
 * @param options - Partial viewport options to override defaults
 * @param options.once - Animate only once (default: true)
 * @param options.amount - How much of element must be visible: number, 'some', 'all'
 * @param options.margin - Margin around viewport for early/late triggering
 *
 * @returns Complete viewport configuration object
 *
 * @example
 * ```tsx
 * import { createViewport } from '@/lib/animations';
 *
 * // Default - animate once when 1px is visible
 * <motion.div
 *   whileInView={{ opacity: 1 }}
 *   viewport={createViewport()}
 * />
 *
 * // Animate every time (not just once)
 * <motion.div
 *   whileInView={{ opacity: 1 }}
 *   viewport={createViewport({ once: false })}
 * />
 *
 * // Trigger when 50% visible
 * <motion.div
 *   whileInView={{ opacity: 1 }}
 *   viewport={createViewport({ amount: 0.5 })}
 * />
 *
 * // Start animation 100px before entering viewport
 * <motion.div
 *   whileInView={{ opacity: 1 }}
 *   viewport={createViewport({ margin: '-100px' })}
 * />
 * ```
 */
export const createViewport = (
  options: Partial<ViewportOptions> = {},
): ViewportOptions => ({
  ...DEFAULT_VIEWPORT,
  ...options,
});
