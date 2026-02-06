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

export const DURATIONS = {
  fast: 0.3,
  standard: 0.8,
  slow: 1.2,
  infinite: 15,
} as const;

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
 * Creates a standard fade up animation with optional delay
 */
export const createFadeUp = (delay = 0) => ({
  ...fadeVariants.fadeUp,
  transition: {
    ...fadeVariants.fadeUp.transition,
    delay,
  } as Transition,
});

/**
 * Creates a staggered animation for list items
 */
export const createStaggeredFadeUp = (index: number, baseDelay = 0) => ({
  ...fadeVariants.fadeUp,
  transition: getStaggerTransition(index, baseDelay) as Transition,
});

/**
 * Creates viewport config with optional settings
 */
export const createViewport = (
  options: Partial<ViewportOptions> = {},
): ViewportOptions => ({
  ...DEFAULT_VIEWPORT,
  ...options,
});
