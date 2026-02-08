/**
 * @file animated-badge.tsx
 * @description Animated badge/pill component with scale entrance
 *
 * Provides badge animations with spring effects for tags, labels, and status indicators.
 * Replaces inline motion patterns for badge entrance animations.
 */

"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLMotionProps, motion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import { createViewport } from "@/lib/animation/animations";
import { cn } from "@/lib/utils/utils";

// ============================================================================
// BADGE VARIANTS (CVA)
// ============================================================================

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm border transition-colors",
  {
    variants: {
      variant: {
        primary:
          "border-brand-primary/20 bg-brand-primary/10 text-brand-primary",
        secondary:
          "border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary",
        accent: "border-purple-500/20 bg-purple-500/10 text-purple-400",
        success: "border-green-500/20 bg-green-500/10 text-green-400",
        warning: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
        danger: "border-red-500/20 bg-red-500/10 text-red-400",
        neutral: "border-gray-500/20 bg-gray-500/10 text-gray-300",
        gradient:
          "border-transparent bg-gradient-to-r from-brand-primary to-brand-secondary text-white",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

// ============================================================================
// TYPES
// ============================================================================

export interface AnimatedBadgeProps
  extends Omit<
      HTMLMotionProps<"div">,
      "initial" | "whileInView" | "viewport" | "animate"
    >,
    VariantProps<typeof badgeVariants> {
  children: ReactNode;

  /**
   * Animation delay in seconds
   * @default 0
   */
  delay?: number;

  /**
   * Animation duration in seconds
   * @default 0.5
   */
  duration?: number;

  /**
   * Use spring animation (bouncy effect)
   * @default true
   */
  spring?: boolean;

  /**
   * Only animate once on scroll
   * @default true
   */
  once?: boolean;

  /**
   * Disable entrance animation
   * @default false
   */
  noAnimation?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Animated badge with scale entrance effect
 *
 * Perfect for tags, labels, status indicators, and category badges.
 * Features spring animation by default for a playful entrance.
 *
 * @example Basic usage
 * ```tsx
 * <AnimatedBadge>New</AnimatedBadge>
 * ```
 *
 * @example With variant and delay
 * ```tsx
 * <AnimatedBadge variant="success" delay={0.3}>
 *   Completed
 * </AnimatedBadge>
 * ```
 *
 * @example Without spring (smooth scale)
 * ```tsx
 * <AnimatedBadge variant="accent" spring={false}>
 *   Featured
 * </AnimatedBadge>
 * ```
 *
 * @example Large size with gradient
 * ```tsx
 * <AnimatedBadge variant="gradient" size="lg" delay={0.5}>
 *   Premium
 * </AnimatedBadge>
 * ```
 *
 * @example Static (no animation)
 * ```tsx
 * <AnimatedBadge noAnimation variant="neutral">
 *   Static Badge
 * </AnimatedBadge>
 * ```
 */
export function AnimatedBadge({
  children,
  variant = "primary",
  size = "md",
  delay = 0,
  duration = 0.5,
  spring = true,
  once = true,
  noAnimation = false,
  className,
  ...props
}: AnimatedBadgeProps): ReactElement {
  const transition = spring
    ? {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
        delay,
      }
    : {
        duration,
        delay,
        ease: "easeOut" as const,
      };

  if (noAnimation) {
    return (
      <div className={cn(badgeVariants({ variant, size }), className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={createViewport({ once })}
      transition={transition}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// PRESET VARIANTS
// ============================================================================

/**
 * Primary badge (TecnoJr brand primary color)
 */
export function AnimatedBadgePrimary(
  props: Omit<AnimatedBadgeProps, "variant">,
): ReactElement {
  return <AnimatedBadge variant="primary" {...props} />;
}

/**
 * Secondary badge (TecnoJr brand secondary color)
 */
export function AnimatedBadgeSecondary(
  props: Omit<AnimatedBadgeProps, "variant">,
): ReactElement {
  return <AnimatedBadge variant="secondary" {...props} />;
}

/**
 * Success badge (green)
 */
export function AnimatedBadgeSuccess(
  props: Omit<AnimatedBadgeProps, "variant">,
): ReactElement {
  return <AnimatedBadge variant="success" {...props} />;
}

/**
 * Warning badge (yellow)
 */
export function AnimatedBadgeWarning(
  props: Omit<AnimatedBadgeProps, "variant">,
): ReactElement {
  return <AnimatedBadge variant="warning" {...props} />;
}

/**
 * Gradient badge (primary to secondary)
 */
export function AnimatedBadgeGradient(
  props: Omit<AnimatedBadgeProps, "variant">,
): ReactElement {
  return <AnimatedBadge variant="gradient" {...props} />;
}

// ============================================================================
// SPECIALIZED COMPONENTS
// ============================================================================

/**
 * Project type badge (internal/client)
 *
 * @example
 * ```tsx
 * <AnimatedBadgeProjectType isInternal={true} delay={0.5} />
 * // Renders: Interno (primary color)
 *
 * <AnimatedBadgeProjectType isInternal={false} />
 * // Renders: Cliente (secondary color)
 * ```
 */
export interface AnimatedBadgeProjectTypeProps
  extends Omit<AnimatedBadgeProps, "variant" | "children"> {
  /**
   * Whether the project is internal
   */
  isInternal: boolean;
}

export function AnimatedBadgeProjectType({
  isInternal,
  ...props
}: AnimatedBadgeProjectTypeProps): ReactElement {
  return (
    <AnimatedBadge variant={isInternal ? "primary" : "secondary"} {...props}>
      {isInternal ? "Interno" : "Cliente"}
    </AnimatedBadge>
  );
}

/**
 * Status badge with predefined states
 *
 * @example
 * ```tsx
 * <AnimatedBadgeStatus status="active" />
 * <AnimatedBadgeStatus status="pending" />
 * <AnimatedBadgeStatus status="completed" />
 * <AnimatedBadgeStatus status="error" />
 * ```
 */
export interface AnimatedBadgeStatusProps
  extends Omit<AnimatedBadgeProps, "variant" | "children"> {
  /**
   * Status type
   */
  status: "active" | "pending" | "completed" | "error";
}

export function AnimatedBadgeStatus({
  status,
  ...props
}: AnimatedBadgeStatusProps): ReactElement {
  const statusConfig = {
    active: { variant: "success" as const, label: "Ativo" },
    pending: { variant: "warning" as const, label: "Pendente" },
    completed: { variant: "primary" as const, label: "Concluído" },
    error: { variant: "danger" as const, label: "Erro" },
  };

  const config = statusConfig[status];

  return (
    <AnimatedBadge variant={config.variant} {...props}>
      {config.label}
    </AnimatedBadge>
  );
}

// ============================================================================
// COMPOSITION NAMESPACE
// ============================================================================

/**
 * Namespace for badge components
 *
 * @example
 * ```tsx
 * <Badge.Animated variant="primary" delay={0.2}>
 *   New Feature
 * </Badge.Animated>
 *
 * <Badge.Primary>Featured</Badge.Primary>
 *
 * <Badge.ProjectType isInternal={true} />
 *
 * <Badge.Status status="active" />
 * ```
 */
export const Badge = {
  Animated: AnimatedBadge,
  Primary: AnimatedBadgePrimary,
  Secondary: AnimatedBadgeSecondary,
  Success: AnimatedBadgeSuccess,
  Warning: AnimatedBadgeWarning,
  Gradient: AnimatedBadgeGradient,
  ProjectType: AnimatedBadgeProjectType,
  Status: AnimatedBadgeStatus,
};
