import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Multi-line text input component with consistent styling and validation states.
 *
 * Features auto-expanding behavior with `field-sizing-content`, focus rings,
 * aria-invalid styling for form validation, and disabled state support.
 *
 * @example
 * // Basic usage
 * <Textarea placeholder="Enter your message..." />
 *
 * @example
 * // With React Hook Form and validation
 * <form>
 *   <Textarea
 *     {...register("message", { required: true })}
 *     aria-invalid={!!errors.message}
 *   />
 * </form>
 *
 * @example
 * // Controlled with minimum height
 * <Textarea
 *   value={value}
 *   onChange={(e) => setValue(e.target.value)}
 *   className="min-h-32"
 * />
 *
 * @see https://react-hook-form.com/ - For form integration
 */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
