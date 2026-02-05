import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CodeTextProps {
  children: ReactNode;
  className?: string;
}

export function CodeText({ children, className }: CodeTextProps) {
  return (
    <code
      className={cn(
        "rounded bg-muted px-2 py-1 font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
}
