/**
 * @file styles.ts
 * @description Centralized style utility functions for consistent theming
 * Consolidates 60+ duplicate className patterns across components
 */

import { cn } from "@/lib/utils";

// ============================================================================
// GRADIENT VARIANTS
// ============================================================================

export type GradientVariant = "diagonal" | "animated" | "primary" | "text";

/**
 * Returns gradient class based on variant (15+ usages consolidated)
 * Used in: feature-card, service-card, stat-item, project-card, buttons, tabs
 */
export function getGradientClass(variant: GradientVariant): string {
  const gradients = {
    diagonal: "gradient-tecno-diagonal",
    animated: "gradient-tecno-animated",
    primary: "gradient-tecno-primary",
    text: "text-gradient-tecno",
  };

  return gradients[variant];
}

// ============================================================================
// CARD STYLES
// ============================================================================

export interface CardStyleOptions {
  /** Enable hover scale effect */
  hoverScale?: boolean;
  /** Backdrop blur strength */
  blur?: "sm" | "md" | "xl";
  /** Border opacity */
  borderOpacity?: number;
}

/**
 * Returns standard card background classes (4+ usages consolidated)
 * Used in: feature-card, project-card, budget-section, about-section
 */
export function getCardBackgroundClass(options: CardStyleOptions = {}): string {
  const { hoverScale = true, blur = "xl", borderOpacity = 50 } = options;

  return cn(
    `border-gray-700/${borderOpacity}`,
    "!bg-gradient-to-br !from-gray-900/90 !via-gray-800/80 !to-gray-900/90",
    `backdrop-blur-${blur}`,
    "transition-all duration-500",
    hoverScale && "hover:scale-[1.02]",
    "hover:border-gray-600/70",
    `border-gray-700/${borderOpacity}`,
  );
}

/**
 * Returns card border style with optional custom opacity
 */
export function getCardBorderClass(opacity = 50): string {
  return `border border-gray-700/${opacity}`;
}

// ============================================================================
// GLOW EFFECTS
// ============================================================================

export interface GlowEffectOptions {
  /** Gradient variant for the glow */
  variant: "primary" | "secondary" | "accent" | "success";
  /** Opacity when hovering (0-100) */
  hoverOpacity?: number;
  /** Blur amount */
  blur?: boolean;
  /** Border radius size */
  rounded?: "lg" | "xl" | "2xl" | "3xl";
}

/**
 * Returns glow effect classes (3+ usages consolidated)
 * Used in: feature-card, project-card, budget-section cards
 */
export function getGlowEffectClass(options: GlowEffectOptions): string {
  const { variant, hoverOpacity = 50, blur = true, rounded = "2xl" } = options;

  const gradientMap = {
    primary: "gradient-tecno-primary",
    secondary: "gradient-tecno-secondary",
    accent: "gradient-tecno-accent",
    success: "gradient-tecno-success",
  };

  return cn(
    "absolute -inset-[0.5px]",
    `rounded-${rounded}`,
    gradientMap[variant],
    "opacity-0",
    blur && "blur",
    "transition duration-300",
    `group-hover:opacity-${hoverOpacity}`,
  );
}

// ============================================================================
// PILL/BADGE STYLES
// ============================================================================

export interface PillBadgeOptions {
  /** Color variant */
  color?: "gray" | "blue" | "purple" | "green" | "orange";
  /** Size variant */
  size?: "sm" | "md" | "lg";
}

/**
 * Returns pill/badge classes (8+ usages consolidated)
 * Used in: project badges, filters, section tags, status indicators
 */
export function getPillBadgeClass(options: PillBadgeOptions = {}): string {
  const { color = "gray", size = "md" } = options;

  const colorClasses = {
    gray: "border-gray-400/20 bg-gradient-to-r from-gray-500/10 to-gray-600/10 text-gray-300",
    blue: "border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-300",
    purple:
      "border-purple-400/20 bg-gradient-to-r from-purple-500/10 to-purple-600/10 text-purple-300",
    green:
      "border-green-400/20 bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-300",
    orange:
      "border-orange-400/20 bg-gradient-to-r from-orange-500/10 to-orange-600/10 text-orange-300",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return cn(
    "rounded-full",
    "border",
    "backdrop-blur-sm",
    "transition-all duration-300",
    colorClasses[color],
    sizeClasses[size],
  );
}

// ============================================================================
// ICON WRAPPER STYLES
// ============================================================================

export interface IconWrapperOptions {
  /** Size of the icon container */
  size?: "sm" | "md" | "lg" | "xl";
  /** Enable hover scale effect */
  hoverScale?: boolean;
  /** Enable hover rotation */
  hoverRotate?: boolean;
  /** Gradient variant */
  gradient?: GradientVariant;
}

/**
 * Returns animated icon wrapper classes (5+ usages consolidated)
 * Used in: feature-card, service-card, stat-item, benefit items
 */
export function getIconWrapperClass(options: IconWrapperOptions = {}): string {
  const {
    size = "md",
    hoverScale = true,
    hoverRotate = false,
    gradient = "diagonal",
  } = options;

  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-20 w-20",
  };

  return cn(
    "flex items-center justify-center",
    "rounded-lg",
    getGradientClass(gradient),
    "text-white",
    "transition-all duration-300",
    sizeClasses[size],
    hoverScale && "group-hover:scale-110",
    hoverRotate && "group-hover:rotate-6",
  );
}

// ============================================================================
// BACKDROP & OVERLAY STYLES
// ============================================================================

/**
 * Returns backdrop blur classes with consistent opacity patterns (17+ usages)
 */
export function getBackdropBlurClass(
  strength: "sm" | "md" | "xl" = "md",
): string {
  const opacityMap = {
    sm: "bg-gray-900/50",
    md: "bg-gray-900/70",
    xl: "bg-gray-900/90",
  };

  return cn(`backdrop-blur-${strength}`, opacityMap[strength]);
}

// ============================================================================
// TRANSITION CLASSES
// ============================================================================

export type TransitionSpeed = "fast" | "normal" | "slow";

/**
 * Returns standard transition classes (20+ usages consolidated)
 */
export function getTransitionClass(
  speed: TransitionSpeed = "normal",
  properties: "all" | "colors" | "transform" | "opacity" = "all",
): string {
  const durationMap = {
    fast: "duration-300",
    normal: "duration-500",
    slow: "duration-700",
  };

  return cn(`transition-${properties}`, durationMap[speed]);
}

// ============================================================================
// GROUP HOVER UTILITIES
// ============================================================================

/**
 * Common group-hover class combinations
 */
export const groupHoverEffects = {
  scale: "group-hover:scale-105",
  scaleSmall: "group-hover:scale-110",
  colorShift: "group-hover:text-blue-400",
  borderGlow: "group-hover:border-blue-500/50",
  shadowGlow: "group-hover:shadow-lg group-hover:shadow-blue-500/20",
} as const;

// ============================================================================
// SECTION CONTAINER STYLES
// ============================================================================

/**
 * Standard section container padding and spacing
 */
export function getSectionContainerClass(): string {
  return cn(
    "relative",
    "px-4 sm:px-6 lg:px-8",
    "py-16 sm:py-20 lg:py-24",
    "overflow-hidden",
  );
}

/**
 * Standard content wrapper with max-width
 */
export function getContentWrapperClass(): string {
  return cn("mx-auto", "max-w-7xl");
}
