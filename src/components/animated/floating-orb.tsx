"use client";

import { motion } from "framer-motion";

interface FloatingOrbProps {
  size?: number;
  color?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

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
