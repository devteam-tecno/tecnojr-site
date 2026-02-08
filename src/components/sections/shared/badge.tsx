import type { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  showPulse?: boolean;
  className?: string;
}

/**
 * Badge component for section headers
 * Used across multiple sections for consistent branding
 */
export function Badge({
  children,
  icon,
  variant = "primary",
  showPulse = false,
  className,
}: BadgeProps) {
  const gradientClass =
    variant === "primary"
      ? "from-brand-primary/10 to-brand-secondary/10 border-brand-primary/20"
      : "from-brand-secondary/10 to-brand-primary/10 border-brand-secondary/20";

  return (
    <div
      className={cn(
        "mb-8 inline-flex items-center rounded-full border bg-linear-to-r px-6 py-3 text-sm text-gray-300 backdrop-blur-sm",
        gradientClass,
        className,
      )}
    >
      {showPulse && (
        <span className="relative mr-2 flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
        </span>
      )}
      {icon && <span className="mr-2 h-4 w-4 shrink-0">{icon}</span>}
      {children}
    </div>
  );
}
