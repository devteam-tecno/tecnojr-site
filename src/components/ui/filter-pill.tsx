"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const filterPillVariants = cva(
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        active:
          "bg-primary text-primary-foreground shadow-md hover:bg-primary/90",
        outline:
          "border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface FilterPillProps extends VariantProps<typeof filterPillVariants> {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function FilterPill({
  children,
  active = false,
  onClick,
  className,
  variant,
}: FilterPillProps) {
  const appliedVariant = active ? "active" : variant;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(filterPillVariants({ variant: appliedVariant }), className)}
    >
      {children}
    </button>
  );
}
