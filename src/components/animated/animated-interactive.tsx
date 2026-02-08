/**
 * @file animated-interactive.tsx
 * @description Animated wrappers for interactive elements (links, buttons)
 *
 * Provides consistent hover and tap animations for links and buttons
 * throughout the application. Replaces 8+ inline motion patterns.
 */

"use client";

import { type HTMLMotionProps, motion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type LinkHoverVariant = "slide" | "scale" | "lift" | "glow" | "none";
export type ButtonHoverVariant = "lift" | "scale" | "glow" | "none";

export interface AnimatedLinkProps
  extends Omit<
    HTMLMotionProps<"a">,
    "whileHover" | "whileTap" | "initial" | "animate"
  > {
  children: ReactNode;

  /**
   * Hover animation effect
   * @default 'slide'
   */
  hoverEffect?: LinkHoverVariant;

  /**
   * Enable tap animation
   * @default false
   */
  tapEffect?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface AnimatedButtonProps
  extends Omit<
    HTMLMotionProps<"button">,
    "whileHover" | "whileTap" | "initial" | "animate"
  > {
  children: ReactNode;

  /**
   * Hover animation effect
   * @default 'lift'
   */
  hoverEffect?: ButtonHoverVariant;

  /**
   * Enable tap animation (scale down on press)
   * @default true
   */
  tapEffect?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface AnimatedDivProps
  extends Omit<
    HTMLMotionProps<"div">,
    "whileHover" | "whileTap" | "initial" | "animate"
  > {
  children: ReactNode;

  /**
   * Hover animation effect
   */
  hoverEffect?: "scale" | "lift" | "none";

  /**
   * Enable tap animation
   * @default false
   */
  tapEffect?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

// ============================================================================
// HOVER VARIANTS
// ============================================================================

const linkHoverVariants = {
  slide: { x: 5 },
  scale: { scale: 1.05 },
  lift: { y: -2 },
  glow: { scale: 1.02 },
  none: {},
} as const;

const buttonHoverVariants = {
  lift: { scale: 1.05, y: -2 },
  scale: { scale: 1.1 },
  glow: { scale: 1.02 },
  none: {},
} as const;

const divHoverVariants = {
  scale: { scale: 1.02 },
  lift: { scale: 1.05, y: -2 },
  none: {},
} as const;

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Animated link with hover effects
 *
 * Provides consistent link animations throughout the application.
 * Default behavior is a subtle slide to the right on hover.
 *
 * @example Basic usage
 * ```tsx
 * <AnimatedLink href="/about">
 *   Learn More
 * </AnimatedLink>
 * ```
 *
 * @example With custom hover effect
 * ```tsx
 * <AnimatedLink
 *   href="/contact"
 *   hoverEffect="scale"
 *   className="text-brand-primary"
 * >
 *   Contact Us
 * </AnimatedLink>
 * ```
 *
 * @example With tap effect
 * ```tsx
 * <AnimatedLink
 *   href="https://example.com"
 *   hoverEffect="lift"
 *   tapEffect
 *   target="_blank"
 * >
 *   External Link
 * </AnimatedLink>
 * ```
 */
export function AnimatedLink({
  children,
  hoverEffect = "slide",
  tapEffect = false,
  className,
  ...props
}: AnimatedLinkProps): ReactElement {
  const hoverVariant = linkHoverVariants[hoverEffect];

  return (
    <motion.a
      whileHover={hoverEffect !== "none" ? hoverVariant : undefined}
      whileTap={tapEffect ? { scale: 0.95 } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}

/**
 * Animated button with hover and tap effects
 *
 * Provides consistent button animations with lift on hover and
 * scale down on tap by default.
 *
 * @example Basic usage
 * ```tsx
 * <AnimatedButton onClick={handleClick}>
 *   Click Me
 * </AnimatedButton>
 * ```
 *
 * @example With custom hover effect
 * ```tsx
 * <AnimatedButton
 *   hoverEffect="scale"
 *   className="btn-primary"
 *   onClick={handleSubmit}
 * >
 *   Submit
 * </AnimatedButton>
 * ```
 *
 * @example Without tap effect
 * ```tsx
 * <AnimatedButton
 *   hoverEffect="glow"
 *   tapEffect={false}
 * >
 *   No Tap Effect
 * </AnimatedButton>
 * ```
 */
export function AnimatedButton({
  children,
  hoverEffect = "lift",
  tapEffect = true,
  className,
  ...props
}: AnimatedButtonProps): ReactElement {
  const hoverVariant = buttonHoverVariants[hoverEffect];

  return (
    <motion.button
      whileHover={hoverEffect !== "none" ? hoverVariant : undefined}
      whileTap={tapEffect ? { scale: 0.95 } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/**
 * Animated div wrapper for interactive containers
 *
 * Use for wrapping interactive elements like cards or buttons
 * that aren't semantically links or buttons themselves.
 *
 * @example Button wrapper
 * ```tsx
 * <AnimatedDiv hoverEffect="scale">
 *   <Button variant="gradient">
 *     Click Me
 *   </Button>
 * </AnimatedDiv>
 * ```
 *
 * @example Card wrapper
 * ```tsx
 * <AnimatedDiv hoverEffect="lift" tapEffect>
 *   <Card>
 *     Interactive Card Content
 *   </Card>
 * </AnimatedDiv>
 * ```
 */
export function AnimatedDiv({
  children,
  hoverEffect = "scale",
  tapEffect = false,
  className,
  ...props
}: AnimatedDivProps): ReactElement {
  const hoverVariant = divHoverVariants[hoverEffect];

  return (
    <motion.div
      whileHover={hoverEffect !== "none" ? hoverVariant : undefined}
      whileTap={tapEffect ? { scale: 0.95 } : undefined}
      className={className}
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
 * Link with slide hover effect (most common)
 */
export function AnimatedLinkSlide(
  props: Omit<AnimatedLinkProps, "hoverEffect">,
): ReactElement {
  return <AnimatedLink hoverEffect="slide" {...props} />;
}

/**
 * Link with scale hover effect
 */
export function AnimatedLinkScale(
  props: Omit<AnimatedLinkProps, "hoverEffect">,
): ReactElement {
  return <AnimatedLink hoverEffect="scale" {...props} />;
}

/**
 * Button with lift hover effect (most common)
 */
export function AnimatedButtonLift(
  props: Omit<AnimatedButtonProps, "hoverEffect">,
): ReactElement {
  return <AnimatedButton hoverEffect="lift" {...props} />;
}

/**
 * Button with scale hover effect
 */
export function AnimatedButtonScale(
  props: Omit<AnimatedButtonProps, "hoverEffect">,
): ReactElement {
  return <AnimatedButton hoverEffect="scale" {...props} />;
}

// ============================================================================
// SPECIALIZED COMPONENTS
// ============================================================================

/**
 * Animated icon wrapper with scale on hover
 *
 * Commonly used in social links and icon buttons.
 *
 * @example Social icon
 * ```tsx
 * <AnimatedIcon className="h-6 w-6 text-brand-primary">
 *   <Github />
 * </AnimatedIcon>
 * ```
 */
export interface AnimatedIconProps
  extends Omit<HTMLMotionProps<"div">, "whileHover"> {
  children: ReactNode;
  /**
   * Scale factor on hover
   * @default 1.1
   */
  hoverScale?: number;
  className?: string;
}

export function AnimatedIcon({
  children,
  hoverScale = 1.1,
  className,
  ...props
}: AnimatedIconProps): ReactElement {
  return (
    <motion.div
      whileHover={{ scale: hoverScale, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// COMPOSITION NAMESPACE
// ============================================================================

/**
 * Namespace for interactive animations
 * Provides organized access to all interactive components
 *
 * @example
 * ```tsx
 * <Interactive.Link href="/about" hoverEffect="slide">
 *   About Us
 * </Interactive.Link>
 *
 * <Interactive.Button onClick={handleClick}>
 *   Submit
 * </Interactive.Button>
 *
 * <Interactive.Icon>
 *   <GithubIcon />
 * </Interactive.Icon>
 * ```
 */
export const Interactive = {
  Link: AnimatedLink,
  LinkSlide: AnimatedLinkSlide,
  LinkScale: AnimatedLinkScale,
  Button: AnimatedButton,
  ButtonLift: AnimatedButtonLift,
  ButtonScale: AnimatedButtonScale,
  Div: AnimatedDiv,
  Icon: AnimatedIcon,
};
