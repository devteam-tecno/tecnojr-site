import type { ReactNode } from "react";
import { cn } from "@/lib/utils/utils";

/**
 * Props for the CodeText component.
 *
 * @property children - Text content to display in monospace font
 * @property className - Optional additional CSS classes for customization
 */
interface CodeTextProps {
  children: ReactNode;
  className?: string;
}

/**
 * Inline code snippet display component with monospace font and background.
 *
 * Styled with muted background, rounded corners, and semantic font-mono.
 * Use for inline code references, command snippets, or technical terms.
 *
 * @example
 * // Basic inline code
 * <p>Run <CodeText>npm install</CodeText> to install dependencies.</p>
 *
 * @example
 * // Variable or function name
 * <p>The <CodeText>useState</CodeText> hook manages component state.</p>
 *
 * @example
 * // With custom styling
 * <CodeText className="text-tecno-purple-500">@/lib/utils</CodeText>
 *
 * @example
 * // In documentation or error messages
 * <div>
 *   <p>Import the utility:</p>
 *   <CodeText>import {{ cn }} from "@/lib/utils"</CodeText>
 * </div>
 */
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
