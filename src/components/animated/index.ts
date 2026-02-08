/**
 * @file index.ts
 * @description Centralized exports for all animated components
 *
 * Barrel export for easy importing of animation components throughout the app.
 *
 * @example
 * ```tsx
 * import {
 *   FadeUp,
 *   AnimatedCard,
 *   AnimatedUnderline,
 *   AnimatedBadge,
 *   Interactive
 * } from '@/components/animated'
 * ```
 */

// ============================================================================
// MOTION WRAPPERS (Base animations)
// ============================================================================

export {
  AnimatedSpan,
  type AnimatedSpanProps,
  AnimatedWrapper,
  type AnimatedWrapperProps,
  FadeFromLeft,
  FadeFromRight,
  FadeIn,
  FadeUp,
  type MotionWrapperProps,
  ScaleFadeIn,
  type StaggeredMotionProps,
  StaggerFadeUp,
} from "./motion-wrappers";

// ============================================================================
// ANIMATED UNDERLINE
// ============================================================================

export {
  AnimatedUnderline,
  AnimatedUnderlinePrimary,
  type AnimatedUnderlineProps,
  AnimatedUnderlineSecondary,
  AnimatedUnderlineThick,
  AnimatedUnderlineWhite,
} from "./animated-underline";

// ============================================================================
// ANIMATED CARD
// ============================================================================

export {
  AnimatedCard,
  AnimatedCardFadeUp,
  AnimatedCardGlow,
  AnimatedCardInteractive,
  AnimatedCardLift,
  type AnimatedCardProps,
  AnimatedCardScale,
  AnimatedCardStagger,
  type AnimatedCardStaggerProps,
  Card,
  type CardEntranceVariant,
  type CardHoverVariant,
} from "./animated-card";

// ============================================================================
// ANIMATED INTERACTIVE (Links & Buttons)
// ============================================================================

export {
  AnimatedButton,
  AnimatedButtonLift,
  type AnimatedButtonProps,
  AnimatedButtonScale,
  AnimatedDiv,
  type AnimatedDivProps,
  AnimatedIcon,
  type AnimatedIconProps,
  AnimatedLink,
  type AnimatedLinkProps,
  AnimatedLinkScale,
  AnimatedLinkSlide,
  type ButtonHoverVariant,
  Interactive,
  type LinkHoverVariant,
} from "./animated-interactive";

// ============================================================================
// ANIMATED BADGE
// ============================================================================

export {
  AnimatedBadge,
  AnimatedBadgeGradient,
  AnimatedBadgePrimary,
  AnimatedBadgeProjectType,
  type AnimatedBadgeProjectTypeProps,
  type AnimatedBadgeProps,
  AnimatedBadgeSecondary,
  AnimatedBadgeStatus,
  type AnimatedBadgeStatusProps,
  AnimatedBadgeSuccess,
  AnimatedBadgeWarning,
  Badge,
} from "./animated-badge";

// ============================================================================
// SPECIALIZED COMPONENTS (from other files)
// ============================================================================

export { BackgroundShapes } from "./background-shapes";
// Re-export specialized components if they exist
export { FloatingOrb } from "./floating-orb";
export { PageTransition } from "./page-transition";
export { ScrollIndicator } from "./scroll-indicator";

// ============================================================================
// USAGE GUIDE
// ============================================================================

/**
 * ## Quick Reference
 *
 * ### Basic Animations
 * - `<FadeUp>` - Fade in while moving up (most common)
 * - `<FadeFromLeft>` - Slide in from left
 * - `<FadeFromRight>` - Slide in from right
 * - `<ScaleFadeIn>` - Scale up with fade (for cards)
 * - `<StaggerFadeUp index={i}>` - Staggered list animations
 *
 * ### Cards
 * - `<AnimatedCard>` - Full control over entrance/hover
 * - `<AnimatedCardLift>` - Lift on hover (default)
 * - `<AnimatedCardStagger index={i}>` - For lists
 * - `<Card.Animated.Lift>` - Namespace pattern
 *
 * ### Interactive Elements
 * - `<AnimatedLink>` - Links with hover effects
 * - `<AnimatedButton>` - Buttons with lift/tap
 * - `<AnimatedIcon>` - Icons with scale on hover
 * - `<Interactive.Link>` - Namespace pattern
 *
 * ### Decorative
 * - `<AnimatedUnderline>` - Expanding underlines
 * - `<AnimatedBadge>` - Tags with spring entrance
 * - `<Badge.ProjectType isInternal={true}>` - Preset badges
 *
 * ### When to Use What
 *
 * **Section Content**: Use `<FadeUp>` for most content blocks
 *
 * **Section Titles**: Use `<FadeFromLeft>` and `<FadeFromRight>` for split animations
 *
 * **Card Grids**: Use `<AnimatedCardStagger>` or `<StaggerFadeUp>`
 *
 * **Links in Footer**: Use `<AnimatedLink hoverEffect="slide">`
 *
 * **CTA Buttons**: Use `<AnimatedButton hoverEffect="lift">`
 *
 * **Emphasized Text**: Wrap in `<AnimatedUnderline>`
 *
 * **Status/Tags**: Use `<AnimatedBadge>` with appropriate variant
 */
