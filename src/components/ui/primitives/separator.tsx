"use client";

import { Separator as SeparatorPrimitive } from "radix-ui";

import { cn } from "@/lib/utils/utils";

/**
 * Accessible separator component built on Radix UI.
 *
 * Provides visual or semantic separation between content sections.
 * Supports horizontal (default) and vertical orientation, and can be
 * decorative (no semantic meaning) or semantic (announced to screen readers).
 *
 * @example
 * // Basic horizontal separator
 * <div>
 *   <p>Section 1</p>
 *   <Separator />
 *   <p>Section 2</p>
 * </div>
 *
 * @example
 * // Vertical separator in flexbox
 * <div className="flex items-center gap-4">
 *   <span>Option A</span>
 *   <Separator orientation="vertical" className="h-6" />
 *   <span>Option B</span>
 * </div>
 *
 * @example
 * // Semantic separator (announced to screen readers)
 * <Separator decorative={false} />
 *
 * @example
 * // With custom styling
 * <Separator className="bg-tecno-purple-500/20" />
 *
 * @see https://www.radix-ui.com/primitives/docs/components/separator - Radix Separator docs
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
