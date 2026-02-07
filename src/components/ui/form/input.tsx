import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Input component with consistent styling and validation states.
 *
 * Form input field with focus rings, validation states (aria-invalid),
 * file upload support, and accessibility features. Follows shadcn/ui patterns
 * with TecnoJR's design system integration.
 *
 * @param type - Input type (text, email, password, file, etc.)
 * @param className - Additional classes
 * @param props - Standard HTML input attributes
 *
 * @returns Styled input element
 *
 * @example
 * ```tsx
 * import { Input } from '@/components/ui/form/input';
 *
 * // Basic text input
 * <Input type="text" placeholder="Enter your name" />
 *
 * // Email input with validation
 * <Input
 *   type="email"
 *   placeholder="email@example.com"
 *   aria-invalid={errors.email ? true : false}
 * />
 *
 * // Disabled input
 * <Input type="text" disabled value="Read only" />
 * ```
 *
 * @example
 * ```tsx
 * // With React Hook Form
 * import { useForm } from 'react-hook-form';
 * import { Input } from '@/components/ui/input';
 *
 * const { register, formState: { errors } } = useForm();
 *
 * <Input
 *   {...register('email', { required: true })}
 *   type="email"
 *   placeholder="Email"
 *   aria-invalid={errors.email ? true : false}
 * />
 * ```
 *
 * @see {@link https://react-hook-form.com/|React Hook Form docs}
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
