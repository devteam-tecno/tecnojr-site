"use client";

import { motion } from "framer-motion";

/**
 * Props for the FloatingOrb component.
 *
 * @property size - Diameter of the orb in pixels (default: 300)
 * @property color - CSS color with alpha transparency (default: tecno-purple with 0.2 opacity)
 * @property duration - Animation cycle duration in seconds (default: 8)
 * @property delay - Animation start delay in seconds (default: 0)
 * @property className - Additional CSS classes (e.g., positioning)
 */
interface FloatingOrbProps {
  size?: number;
  color?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * Animated floating orb with blur effect for background decoration.
 *
 * Creates a smooth looping animation with vertical/horizontal movement and scale.
 * Non-interactive (pointer-events-none) background element with blur-3xl.
 * Commonly used in hero sections and backgrounds for visual interest.
 *
 * @example
 * // Default purple orb
 * <FloatingOrb />
 *
 * @example
 * // Blue orb positioned in top-right
 * <FloatingOrb
 *   size={400}
 *   color="rgba(59, 130, 246, 0.15)"
 *   className="top-20 right-10"
 * />
 *
 * @example
 * // Multiple orbs with staggered delays
 * <div className="relative">
 *   <FloatingOrb delay={0} className="top-0 left-0" />
 *   <FloatingOrb delay={2} className="bottom-0 right-0" color="rgba(139, 92, 246, 0.2)" />
 * </div>
 *
 * @example
 * // Faster animation for more active effect
 * <FloatingOrb duration={5} size={250} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
 */
export function FloatingOrb({
  size = 300,
  color = "rgba(145, 85, 235, 0.2)",
  duration = 8,
  delay = 0,
  className = "",
}: FloatingOrbProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
