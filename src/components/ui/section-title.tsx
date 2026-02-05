import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const sectionTitleVariants = cva("font-bold tracking-tight text-balance", {
  variants: {
    size: {
      sm: "text-2xl sm:text-3xl",
      md: "text-3xl sm:text-4xl lg:text-5xl",
      lg: "text-4xl sm:text-5xl lg:text-6xl",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "md",
    align: "center",
  },
});

interface SectionTitleProps extends VariantProps<typeof sectionTitleVariants> {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export function SectionTitle({
  children,
  className,
  size,
  align,
  as: Component = "h2",
}: SectionTitleProps) {
  return (
    <Component className={cn(sectionTitleVariants({ size, align }), className)}>
      {children}
    </Component>
  );
}
