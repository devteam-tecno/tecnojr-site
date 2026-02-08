/**
 * @file styles.ts
 * @description Centralized style utility functions for consistent theming
 * Consolidates 60+ duplicate className patterns across components
 */

import { cn } from "@/lib/utils/utils";

// ============================================================================
// GRADIENT VARIANTS
// ============================================================================

export type GradientVariant = "diagonal" | "animated" | "primary" | "text";

/**
 * Returns gradient class based on variant (15+ usages consolidated).
 *
 * Provides consistent gradient styling across the TecnoJR design system.
 * All gradients use OKLCH color space for superior perceptual uniformity.
 *
 * @param variant - Gradient style variant
 *   - `diagonal`: Purple-to-blue diagonal gradient (feature cards, icons)
 *   - `animated`: Animated moving gradient (primary CTAs, hero elements)
 *   - `primary`: Primary brand gradient (buttons, highlights)
 *   - `text`: Text gradient for headings and emphasis
 *
 * @returns Tailwind utility class for the gradient
 *
 * @example
 * ```tsx
 * // Icon wrapper with diagonal gradient
 * <div className={getGradientClass('diagonal')}>
 *   <Icon />
 * </div>
 *
 * // Animated button background
 * <button className={getGradientClass('animated')}>
 *   Get Started
 * </button>
 *
 * // Gradient text heading
 * <h1 className={getGradientClass('text')}>
 *   TecnoJR
 * </h1>
 * ```
 *
 * @see {@link ../../app/globals.css|globals.css} for gradient class definitions
 * @see {@link ../../STYLE_GUIDE.md|STYLE_GUIDE.md} for design system documentation
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
 * Returns standard card background classes with consistent styling.
 *
 * Creates glassmorphic card backgrounds with gradient overlays,
 * blur effects, and interactive hover states. Ensures visual
 * consistency across feature cards, project cards, and sections.
 *
 * @param options - Configuration options for card styling
 * @param options.hoverScale - Enable scale-up on hover (default: true)
 * @param options.blur - Backdrop blur strength: 'sm'|'md'|'xl' (default: 'xl')
 * @param options.borderOpacity - Border opacity 0-100 (default: 50)
 *
 * @returns Combined class string for card background
 *
 * @example
 * ```tsx
 * // Standard card with all defaults
 * <div className={getCardBackgroundClass()}>
 *   Content
 * </div>
 *
 * // Card with custom blur and no hover scale
 * <div className={getCardBackgroundClass({
 *   blur: 'md',
 *   hoverScale: false
 * })}>
 *   Static content
 * </div>
 *
 * // Subtle card with low border opacity
 * <div className={getCardBackgroundClass({
 *   borderOpacity: 30
 * })}>
 *   Less prominent
 * </div>
 * ```
 */
export function getCardBackgroundClass(options: CardStyleOptions = {}): string {
  const { hoverScale = true, blur = "xl", borderOpacity = 50 } = options;

  return cn(
    `border-gray-700/${borderOpacity}`,
    "!bg-linear-to-br !from-gray-900/90 !via-gray-800/80 !to-gray-900/90",
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
 * Returns glow effect classes for premium card aesthetics.
 *
 * Creates an animated gradient glow effect that appears on hover.
 * Uses absolute positioning to create an inset border glow.
 * Works best when applied to a wrapper with `position: relative`.
 *
 * @param options - Glow effect configuration
 * @param options.variant - Color scheme: 'primary'|'secondary'|'accent'|'success'
 * @param options.hoverOpacity - Glow opacity on hover, 0-100 (default: 50)
 * @param options.blur - Apply blur filter for softer glow (default: true)
 * @param options.rounded - Border radius: 'lg'|'xl'|'2xl'|'3xl' (default: '2xl')
 *
 * @returns Class string for glow effect element
 *
 * @example
 * Wrap card with relative positioning and add glow effect layer.
 * Use 'group' class on wrapper for hover interaction.
 */
export function getGlowEffectClass(options: GlowEffectOptions): string {
  const { variant, hoverOpacity = 50, blur = true, rounded = "2xl" } = options;

  const gradientMap = {
    primary: "gradient-tecno-primary",
    secondary: "gradient-tecno-secondary",
    accent: "gradient-tecno-accent",
    success: "gradient-tecno-success",
  };

  const roundedMap = {
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  };

  const opacityClasses: Record<number, string> = {
    25: "group-hover:opacity-25",
    50: "group-hover:opacity-50",
    75: "group-hover:opacity-75",
    100: "group-hover:opacity-100",
  };

  return cn(
    "absolute -inset-[0.5px]",
    roundedMap[rounded],
    gradientMap[variant],
    "opacity-0",
    blur && "blur",
    "transition duration-300",
    opacityClasses[hoverOpacity] || "group-hover:opacity-50",
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
 * Returns styled pill/badge classes for labels and tags.
 *
 * Creates consistent badge styling for technology tags, project labels,
 * status indicators, and filter pills throughout the site.
 *
 * @param options - Badge styling options
 * @param options.color - Color scheme (default: 'gray')
 * @param options.size - Size variant: 'sm'|'md'|'lg' (default: 'md')
 *
 * @returns Class string for pill badge
 *
 * @example
 * Technology badge: span with color 'blue' for React label.
 *
 * @example
 * Small status: span with color 'green' and size 'sm' for Active indicator.
 *
 * @example
 * Filter pills: Use in map function with button elements for interactive filters.
 */
export function getPillBadgeClass(options: PillBadgeOptions = {}): string {
  const { color = "gray", size = "md" } = options;

  const colorClasses = {
    gray: "border-gray-400/20 bg-linear-to-r from-gray-500/10 to-gray-600/10 text-gray-300",
    blue: "border-blue-400/20 bg-linear-to-r from-blue-500/10 to-blue-600/10 text-blue-300",
    purple:
      "border-purple-400/20 bg-linear-to-r from-purple-500/10 to-purple-600/10 text-purple-300",
    green:
      "border-green-400/20 bg-linear-to-r from-green-500/10 to-green-600/10 text-green-300",
    orange:
      "border-orange-400/20 bg-linear-to-r from-orange-500/10 to-orange-600/10 text-orange-300",
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
 * Returns animated icon wrapper classes with gradient backgrounds.
 *
 * Creates consistent icon containers with gradient backgrounds,
 * interactive hover effects, and size variants. Used across
 * feature cards, service cards, and benefit items.
 *
 * @param options - Icon wrapper configuration
 * @param options.size - Container size: 'sm'|'md'|'lg'|'xl' (default: 'md')
 * @param options.hoverScale - Scale up on hover (default: true)
 * @param options.hoverRotate - Rotate on hover (default: false)
 * @param options.gradient - Gradient variant (default: 'diagonal')
 *
 * @returns Class string for icon container
 *
 * @example
 * Standard icon wrapper: Use with group class on parent for hover effects.
 *
 * @example
 * Large icon with rotation: size 'lg', hoverRotate true, gradient 'primary'.
 *
 * @example
 * Small static icon: size 'sm', hoverScale false.
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
  const classMap = {
    sm: "backdrop-blur-sm bg-gray-900/50",
    md: "backdrop-blur-md bg-gray-900/70",
    xl: "backdrop-blur-xl bg-gray-900/90",
  };

  return classMap[strength];
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
  const transitionMap = {
    all: {
      fast: "transition-all duration-300",
      normal: "transition-all duration-500",
      slow: "transition-all duration-700",
    },
    colors: {
      fast: "transition-colors duration-300",
      normal: "transition-colors duration-500",
      slow: "transition-colors duration-700",
    },
    transform: {
      fast: "transition-transform duration-300",
      normal: "transition-transform duration-500",
      slow: "transition-transform duration-700",
    },
    opacity: {
      fast: "transition-opacity duration-300",
      normal: "transition-opacity duration-500",
      slow: "transition-opacity duration-700",
    },
  };

  return transitionMap[properties][speed];
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
