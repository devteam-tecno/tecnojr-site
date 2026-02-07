import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes intelligently, resolving conflicts.
 *
 * Combines `clsx` for conditional class handling with `tailwind-merge`
 * to handle Tailwind class conflicts (e.g., "px-2 px-4" → "px-4").
 *
 * @param inputs - Class values to merge (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class string
 *
 * @example
 * ```tsx
 * // Simple merge
 * cn('px-2 py-1', 'px-4') // => 'py-1 px-4'
 *
 * // Conditional classes
 * cn('base-class', {
 *   'text-red': isError,
 *   'text-green': isSuccess
 * })
 *
 * // Component usage
 * <div className={cn(
 *   'border rounded',
 *   variant === 'primary' && 'bg-purple-500',
 *   className // Allow prop overrides
 * )} />
 * ```
 *
 * @see {@link https://github.com/dcastil/tailwind-merge|tailwind-merge docs}
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
