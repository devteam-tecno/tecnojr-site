import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

export function SectionWrapper({
  children,
  className,
  id,
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      {children}
    </Component>
  );
}
