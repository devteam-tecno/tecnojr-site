import type { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Breakpoint-based column configuration.
 */
interface GridCols {
  base?: 1 | 2 | 3 | 4;
  sm?: 1 | 2 | 3 | 4;
  md?: 1 | 2 | 3 | 4;
  lg?: 1 | 2 | 3 | 4;
  xl?: 1 | 2 | 3 | 4;
}

/**
 * Gap size variants.
 */
type GridGap = "sm" | "md" | "lg" | "xl";

/**
 * Props for the ResponsiveGrid component.
 */
interface ResponsiveGridProps {
  children: ReactNode;
  cols?: GridCols;
  gap?: GridGap;
  className?: string;
}

// Column classes mapping (base breakpoint)
const baseColClasses: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const smColClasses: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

const mdColClasses: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

const lgColClasses: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

const xlColClasses: Record<number, string> = {
  1: "xl:grid-cols-1",
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
};

const gapClasses: Record<GridGap, string> = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

/**
 * Responsive grid layout component.
 *
 * Consolidates duplicate grid patterns like:
 * - `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`
 * - `grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3`
 * - `grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4`
 *
 * @example
 * // 3-column grid (most common pattern)
 * <ResponsiveGrid cols={{ base: 1, md: 2, lg: 3 }} gap="md">
 *   {items.map(item => <Card key={item.id} {...item} />)}
 * </ResponsiveGrid>
 *
 * @example
 * // 4-column grid for press-kit
 * <ResponsiveGrid cols={{ base: 1, sm: 2, lg: 4 }} gap="md">
 *   {colors.map(c => <ColorCard key={c.name} {...c} />)}
 * </ResponsiveGrid>
 *
 * @example
 * // 2-column grid for features
 * <ResponsiveGrid cols={{ base: 1, md: 2 }} gap="lg">
 *   {features.map(f => <FeatureCard key={f.title} {...f} />)}
 * </ResponsiveGrid>
 */
export function ResponsiveGrid({
  children,
  cols = { base: 1, md: 2, lg: 3 },
  gap = "md",
  className,
}: ResponsiveGridProps) {
  return (
    <div
      className={cn(
        "grid",
        cols.base && baseColClasses[cols.base],
        cols.sm && smColClasses[cols.sm],
        cols.md && mdColClasses[cols.md],
        cols.lg && lgColClasses[cols.lg],
        cols.xl && xlColClasses[cols.xl],
        gapClasses[gap],
        className,
      )}
    >
      {children}
    </div>
  );
}
