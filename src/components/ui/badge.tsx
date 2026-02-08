import type { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Badge style variants.
 */
type BadgeVariant =
  | "default"
  | "info"
  | "status"
  | "role"
  | "primary"
  | "secondary";

/**
 * Badge size variants.
 */
type BadgeSize = "sm" | "md" | "lg";

/**
 * Props for the Badge component.
 *
 * @property children - The badge content (text or elements)
 * @property variant - Visual style variant
 * @property size - Size variant
 * @property className - Optional additional CSS classes
 * @property animated - Whether to show animated pulse indicator
 */
interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  animated?: boolean;
}

/**
 * Reusable badge/pill component for labels, tags, and status indicators.
 *
 * Consolidates duplicate badge patterns like:
 * - Info badges: `inline-flex items-center rounded-full border border-brand-primary/20 bg-linear-to-r from-brand-secondary/10 to-brand-secondary/10 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm`
 * - Role badges: `inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20`
 * - Status badges: `absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm`
 *
 * Used for:
 * - Section headers (Portfolio, Contact badges)
 * - Member role tags
 * - Project status indicators
 * - Feature highlights
 *
 * @example
 * // Info badge with icon
 * <Badge variant="info" animated>
 *   <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-brand-secondary" />
 *   Contato
 * </Badge>
 *
 * @example
 * // Role badge
 * <Badge variant="role" size="sm">
 *   Desenvolvedor
 * </Badge>
 *
 * @example
 * // Status badge
 * <Badge variant="status" size="sm">
 *   Em Desenvolvimento
 * </Badge>
 *
 * @example
 * // Primary badge for section headers
 * <Badge variant="primary">
 *   <Rocket className="mr-2 h-4 w-4" />
 *   Nosso Portfolio
 * </Badge>
 */
export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  animated = false,
}: BadgeProps) {
  const variantClasses: Record<BadgeVariant, string> = {
    default: "border-gray-700/30 bg-gray-800/50 text-gray-300",
    info: "border-brand-primary/20 bg-linear-to-r from-brand-secondary/10 to-brand-secondary/10 text-gray-300 backdrop-blur-sm",
    status: "border-gray-700/50 bg-gray-900/80 text-gray-300 backdrop-blur-sm",
    role: "bg-brand-primary/10 border-brand-primary/20 text-brand-primary",
    primary:
      "border-brand-primary/30 bg-brand-primary/10 text-brand-primary backdrop-blur-sm",
    secondary:
      "border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary backdrop-blur-sm",
  };

  const sizeClasses: Record<BadgeSize, string> = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {animated && (
        <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-brand-secondary" />
      )}
      {children}
    </span>
  );
}
