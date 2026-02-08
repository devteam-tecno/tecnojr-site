/**
 * @file base-card.tsx
 * @description Reusable card component with consistent styling and animations
 * Consolidates shared logic from feature-card, service-card, project-card
 */

"use client";

import type { LucideIcon } from "lucide-react";
import {
  type GradientVariant,
  getCardBackgroundClass,
  getGlowEffectClass,
  getIconWrapperClass,
} from "@/lib/utils/styles";
import { cn } from "@/lib/utils/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

// ============================================================================
// TYPES
// ============================================================================

export interface BaseCardProps {
  /** Semantic HTML element to render as (default: 'article') */
  as?: React.ElementType;
  /** Icon component from lucide-react */
  icon: LucideIcon;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Layout variant */
  variant?: "default" | "centered";
  /** Icon size */
  iconSize?: "sm" | "md" | "lg" | "xl";
  /** Gradient variant for icon */
  iconGradient?: GradientVariant;
  /** Enable glow effect on hover */
  glowEffect?: boolean;
  /** Glow color variant */
  glowVariant?: "primary" | "secondary" | "accent" | "success";
  /** Enable icon hover rotation */
  iconRotate?: boolean;
  /** Additional className for the container */
  className?: string;
  /** Additional className for the card */
  cardClassName?: string;
  /** Additional className for icon wrapper */
  iconClassName?: string;
  /** Additional content below description */
  children?: React.ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Base card component with icon, title, and description
 *
 * @example
 * ```tsx
 * <BaseCard
 *   icon={Zap}
 *   title="Fast Performance"
 *   description="Lightning-fast load times"
 *   variant="centered"
 *   glowEffect
 * />
 * ```
 */
export function BaseCard({
  as: Component = "article",
  icon: Icon,
  title,
  description,
  variant = "default",
  iconSize = "md",
  iconGradient = "diagonal",
  glowEffect = false,
  glowVariant = "primary",
  iconRotate = false,
  className,
  cardClassName,
  iconClassName,
  children,
}: BaseCardProps) {
  const isCentered = variant === "centered";

  return (
    <Component className={cn("group relative h-full", className)}>
      {/* Gradient Glow Border Effect on Hover */}
      {glowEffect && (
        <div
          className={getGlowEffectClass({
            variant: glowVariant,
            hoverOpacity: 50,
            blur: true,
            rounded: "2xl",
          })}
        />
      )}

      <Card
        className={cn(
          "relative h-full overflow-hidden",
          getCardBackgroundClass({ hoverScale: true, blur: "xl" }),
          cardClassName,
        )}
      >
        <CardHeader
          className={cn("space-y-4", isCentered && "items-center text-center")}
        >
          {/* Icon */}
          <div
            className={cn(
              getIconWrapperClass({
                size: iconSize,
                hoverScale: true,
                hoverRotate: iconRotate,
                gradient: iconGradient,
              }),
              "shadow-lg shadow-brand-primary/25 transition-shadow duration-300 group-hover:shadow-brand-primary/40",
              isCentered && "mx-auto",
              iconClassName,
            )}
          >
            <Icon
              className={cn(
                iconSize === "sm" && "h-5 w-5",
                iconSize === "md" && "h-7 w-7",
                iconSize === "lg" && "h-10 w-10",
                iconSize === "xl" && "h-12 w-12",
              )}
            />
          </div>

          {/* Title */}
          <CardTitle
            className={cn("text-xl text-white", isCentered && "text-2xl")}
          >
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className={cn(isCentered && "text-center")}>
          {/* Description */}
          <CardDescription className="text-base leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
            {description}
          </CardDescription>

          {/* Additional content */}
          {children}
        </CardContent>

        {/* Hover Gradient Overlay */}
        {glowEffect && (
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}
      </Card>
    </Component>
  );
}

// ============================================================================
// ICON WRAPPER COMPONENT (extracted for reuse)
// ============================================================================

export interface AnimatedIconWrapperProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
  gradient?: GradientVariant;
  hoverScale?: boolean;
  hoverRotate?: boolean;
  className?: string;
}

/**
 * Animated icon wrapper that can be used independently
 * Extracted from cards for reuse in other components
 */
export function AnimatedIconWrapper({
  icon: Icon,
  size = "md",
  gradient = "diagonal",
  hoverScale = true,
  hoverRotate = false,
  className,
}: AnimatedIconWrapperProps) {
  return (
    <div
      className={cn(
        getIconWrapperClass({ size, hoverScale, hoverRotate, gradient }),
        className,
      )}
    >
      <Icon
        className={cn(
          size === "sm" && "h-5 w-5",
          size === "md" && "h-7 w-7",
          size === "lg" && "h-10 w-10",
          size === "xl" && "h-12 w-12",
        )}
      />
    </div>
  );
}
