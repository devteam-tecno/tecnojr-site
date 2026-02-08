import type { Variants } from "framer-motion";
import {
  ANIMATION_DURATION_DEFAULT,
  ANIMATION_STAGGER_DELAY,
} from "../constants";

/**
 * Reusable animation variants for Framer Motion
 * Promotes consistency and reduces code duplication
 */

/**
 * Fade in from bottom with upward motion
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Fade in from left with rightward motion
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

/**
 * Fade in from right with leftward motion
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

/**
 * Scale up with fade in
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

/**
 * Container for staggered children animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_STAGGER_DELAY,
      delayChildren: 0.1,
    },
  },
};

/**
 * Helper to create custom fade-in with configurable direction
 */
export function createFadeIn(
  direction: "up" | "down" | "left" | "right",
  distance = 20,
): Variants {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const value =
    direction === "down" || direction === "right" ? distance : -distance;

  return {
    hidden: { opacity: 0, [axis]: value },
    visible: { opacity: 1, [axis]: 0 },
  };
}

/**
 * Helper to create staggered animation with custom delay
 */
export function createStaggerContainer(
  staggerDelay = ANIMATION_STAGGER_DELAY,
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };
}

/**
 * Default transition configuration
 */
export const defaultTransition = {
  duration: ANIMATION_DURATION_DEFAULT,
  ease: "easeOut",
};
