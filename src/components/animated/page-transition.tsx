"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Props for the PageTransition component.
 *
 * @property children - Page content to animate
 * @property className - Optional CSS classes for the wrapper
 */
interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Page variants for fade + slide animation.
 * - initial: Opacity 0, slight downward offset (y: 20)
 * - animate: Fully visible, centered position
 * - exit: Fade out with slight upward offset (y: -20)
 */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween" as const,
  duration: 0.3,
  ease: "easeInOut" as const,
};

/**
 * Page transition wrapper with fade and slide animation.
 *
 * Provides smooth enter/exit animations for page changes. Uses Framer Motion's
 * initial/animate/exit pattern for page transitions. Typically used with Next.js
 * app router page components for consistent transition effects.
 *
 * Animation: Fade in from below (y: 20 → 0), fade out upward (y: 0 → -20).
 * Duration: 300ms with easeInOut easing.
 *
 * @example
 * // Wrap page content
 * export default function AboutPage() {
 *   return (
 *     <PageTransition>
 *       <h1>About Us</h1>
 *       {/* page content *\/}
 *     </PageTransition>
 *   );
 * }
 *
 * @example
 * // With custom className
 * <PageTransition className="min-h-screen">
 *   <ContactPage />
 * </PageTransition>
 *
 * @see {@link slideVariants} - Alternative slide-from-right transition
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Alternative: Slide from right
export const slideVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

// Alternative: Scale up
export const scaleVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.05,
  },
};
