import type { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Size variants for the icon container.
 */
type IconSize = "sm" | "md" | "lg" | "xl";

/**
 * Shape variants for the icon container.
 */
type IconShape = "circle" | "rounded" | "square";

/**
 * Props for the IconContainer component.
 *
 * @property children - The icon element to be displayed
 * @property size - Size variant (sm: 10, md: 12, lg: 16, xl: 20)
 * @property shape - Container shape (circle: full rounded, rounded: rounded-lg, square: no rounding)
 * @property gradient - Whether to apply gradient background
 * @property className - Optional additional CSS classes
 */
interface IconContainerProps {
  children: ReactNode;
  size?: IconSize;
  shape?: IconShape;
  gradient?: boolean;
  className?: string;
}

/**
 * Reusable icon container with consistent sizing and styling.
 *
 * Eliminates duplicate patterns like:
 * - `flex h-10 w-10 items-center justify-center rounded-full`
 * - `flex h-12 w-12 shrink-0 items-center justify-center rounded-lg gradient-tecno-diagonal`
 * - `mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-tecno-purple-500 to-tecno-blue-500`
 *
 * Provides consistent icon wrapper styling across the application for:
 * - Social media links
 * - Feature cards
 * - Stat items
 * - Contact info
 * - Section headers
 *
 * @example
 * // Small circular icon for social links
 * <IconContainer size="sm" shape="circle">
 *   <TwitterIcon className="h-5 w-5" />
 * </IconContainer>
 *
 * @example
 * // Medium rounded icon with gradient
 * <IconContainer size="md" shape="rounded" gradient>
 *   <ChartIcon className="h-6 w-6 text-white" />
 * </IconContainer>
 *
 * @example
 * // Large icon for hero sections
 * <IconContainer size="xl" shape="rounded" className="mb-6 shadow-lg shadow-tecno-purple-500/25">
 *   <MessageIcon className="h-10 w-10 text-white" />
 * </IconContainer>
 *
 * @example
 * // Custom styled container
 * <IconContainer size="lg" className="bg-brand-primary/20 border border-brand-primary/30">
 *   <CustomIcon />
 * </IconContainer>
 */
export function IconContainer({
  children,
  size = "md",
  shape = "circle",
  gradient = false,
  className,
}: IconContainerProps) {
  const sizeClasses: Record<IconSize, string> = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-20 w-20",
  };

  const shapeClasses: Record<IconShape, string> = {
    circle: "rounded-full",
    rounded: size === "lg" || size === "xl" ? "rounded-2xl" : "rounded-lg",
    square: "rounded-none",
  };

  const gradientClass = gradient
    ? "bg-linear-to-br from-tecno-purple-500 to-tecno-blue-500"
    : "";

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        sizeClasses[size],
        shapeClasses[shape],
        gradientClass,
        className,
      )}
    >
      {children}
    </div>
  );
}
