"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * Animated scroll indicator with bouncing chevron icon.
 *
 * Features:
 * - "Role para baixo" (Scroll down) label text
 * - ChevronDown icon in circular border (tecno-purple)
 * - Bouncing animation (y: 0 → 10 → 0, 1.5s loop)
 * - Fade in after 1s delay
 * - Centered at bottom of viewport (absolute bottom-8 left-1/2)
 * - Hidden on mobile, visible on tablet+ (md:flex)
 *
 * Animation timing:
 * - Initial fade in: 1s delay, 0.5s duration
 * - Bounce loop: 1.5s infinite with easeInOut
 *
 * @example
 * Used in HeroSection at the bottom to indicate scroll action.
 */
export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <span className="text-sm text-muted-foreground">Role para baixo</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-tecno-purple-500/50"
      >
        <ChevronDown className="h-5 w-5 text-tecno-purple-500" />
      </motion.div>
    </motion.div>
  );
}
