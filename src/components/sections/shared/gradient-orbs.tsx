"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/utils";

interface OrbConfig {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size: "sm" | "md" | "lg";
  intensity?: "low" | "medium" | "high";
}

interface GradientOrbsProps {
  animated?: boolean;
  orbs?: OrbConfig[];
  className?: string;
}

const defaultOrbs: OrbConfig[] = [
  { position: "top-left", size: "md", intensity: "low" },
  { position: "bottom-right", size: "lg", intensity: "medium" },
];

const positionClasses = {
  "top-left": "top-32 left-10",
  "top-right": "top-32 right-10",
  "bottom-left": "bottom-32 left-10",
  "bottom-right": "bottom-32 right-10",
};

const sizeClasses = {
  sm: "h-64 w-64",
  md: "h-72 w-72",
  lg: "h-96 w-96",
};

const intensityClasses = {
  low: "from-brand-primary/5 to-brand-secondary/5",
  medium: "from-brand-secondary/8 to-brand-primary/8",
  high: "from-brand-primary/20 to-brand-secondary/20",
};

/**
 * Gradient orbs for visual depth
 * Supports static and animated versions
 */
export function GradientOrbs({
  animated = false,
  orbs = defaultOrbs,
  className,
}: GradientOrbsProps) {
  if (animated) {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        {orbs.map((orb, index) => (
          <motion.div
            key={`${orb.position}-${orb.size}-${index}`}
            animate={{
              scale: index % 2 === 0 ? [1, 1.2, 1] : [1.2, 1, 1.2],
              rotate: index % 2 === 0 ? [0, 180, 360] : [360, 180, 0],
              opacity:
                orb.intensity === "high"
                  ? [0.2, 0.3, 0.2]
                  : orb.intensity === "medium"
                    ? [0.15, 0.25, 0.15]
                    : [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 3,
            }}
            style={{ willChange: "transform, opacity" }}
            className={cn(
              "absolute rounded-full bg-linear-to-br blur-3xl",
              positionClasses[orb.position],
              sizeClasses[orb.size],
              intensityClasses[orb.intensity || "low"],
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0", className)}>
      {orbs.map((orb, index) => (
        <div
          key={`${orb.position}-${orb.size}-${index}`}
          className={cn(
            "absolute rounded-full bg-linear-to-br blur-3xl",
            positionClasses[orb.position],
            sizeClasses[orb.size],
            intensityClasses[orb.intensity || "low"],
          )}
        />
      ))}
    </div>
  );
}
