"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Interactive pill-shaped button component for filtering or categorization.
 *
 * Automatically applies the "active" variant when the `active` prop is true,
 * overriding the `variant` prop. Commonly used in project filters, tag groups,
 * or category selectors.
 *
 * @example
 * // Basic filter pill
 * <FilterPill onClick={() => setFilter('web')}>Web</FilterPill>
 *
 * @example
 * // Active state (shows primary colors with shadow)
 * <FilterPill active onClick={() => setFilter('all')}>All Projects</FilterPill>
 *
 * @example
 * // Filter group with state management
 * const [activeFilter, setActiveFilter] = useState('all');
 * <div className="flex gap-2">
 *   {['all', 'web', 'mobile', 'design'].map((filter) => (
 *     <FilterPill
 *       key={filter}
 *       active={activeFilter === filter}
 *       onClick={() => setActiveFilter(filter)}
 *     >
 *       {filter}
 *     </FilterPill>
 *   ))}
 * </div>
 *
 * @example
 * // Outline variant for secondary actions
 * <FilterPill variant="outline">Reset Filters</FilterPill>
 */
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
