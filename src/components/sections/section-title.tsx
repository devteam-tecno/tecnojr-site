/**
 * @file section-title.tsx
 * @description Unified section title component with split-text animation
 * Consolidates 100+ lines of duplicate code from 6 section files
 * Used in: hero, features, projects, services, budget, about sections
 */

"use client";

import { motion } from "framer-motion";
import { DEFAULT_VIEWPORT, sectionTitleVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

// ============================================================================
// TYPES
// ============================================================================

export interface SectionTitleProps {
  /** First line of the title (usually in white) */
  firstLine: string;
  /** Second line of the title (usually with gradient) */
  secondLine: string;
  /** Optional subtitle/description below the title */
  subtitle?: string;
  /** Additional className for the container */
  className?: string;
  /** Align text - default is center */
  align?: "left" | "center" | "right";
  /** Custom class for first line */
  firstLineClassName?: string;
  /** Custom class for second line (gradient applied by default) */
  secondLineClassName?: string;
  /** Custom class for subtitle */
  subtitleClassName?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Animated section title with split-text reveal effect
 *
 * @example
 * ```tsx
 * <SectionTitle
 *   firstLine="Nossos"
 *   secondLine="Projetos"
 *   subtitle="Conheça alguns dos projetos que desenvolvemos"
 * />
 * ```
 */
export function SectionTitle({
  firstLine,
  secondLine,
  subtitle,
  className,
  align = "center",
  firstLineClassName,
  secondLineClassName,
  subtitleClassName,
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={DEFAULT_VIEWPORT}
      className={cn("mb-20", alignClass, className)}
    >
      <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
        <motion.span
          initial={sectionTitleVariants.firstLine.initial}
          whileInView={sectionTitleVariants.firstLine.animate}
          transition={sectionTitleVariants.firstLine.transition}
          viewport={DEFAULT_VIEWPORT}
          className={cn("block text-white", firstLineClassName)}
        >
          {firstLine}
        </motion.span>
        <motion.span
          initial={sectionTitleVariants.secondLine.initial}
          whileInView={sectionTitleVariants.secondLine.animate}
          transition={sectionTitleVariants.secondLine.transition}
          viewport={DEFAULT_VIEWPORT}
          className={cn("block text-gradient-tecno", secondLineClassName)}
        >
          {secondLine}
        </motion.span>
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={DEFAULT_VIEWPORT}
          className={cn(
            "mx-auto max-w-2xl text-lg text-gray-300",
            subtitleClassName,
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

// ============================================================================
// VARIANT: Simple Section Title (without animation)
// ============================================================================

export interface SimpleSectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

/**
 * Simple section title without split-text animation
 * Use when you need a basic title without the fancy animation
 */
export function SimpleSectionTitle({
  title,
  subtitle,
  className,
  align = "center",
}: SimpleSectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={cn("mb-12", alignClass, className)}>
      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-gray-300">{subtitle}</p>
      )}
    </div>
  );
}
