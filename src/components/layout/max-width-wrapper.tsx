import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the MaxWidthWrapper component.
 *
 * @property children - Content to be wrapped with max-width constraints
 * @property className - Optional additional CSS classes
 * @property maxWidth - Maximum width constraint (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px, full: 100%)
 */
interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

/**
 * Responsive container component that centers content with maximum width constraints.
 *
 * Provides consistent horizontal padding (px-4 on mobile, px-6 on tablet, px-8 on desktop)
 * and horizontal centering with `mx-auto`. Use to constrain content width on large screens
 * while maintaining full width on smaller devices.
 *
 * @example
 * // Default xl max-width (1280px)
 * <MaxWidthWrapper>
 *   <h1>Page Content</h1>
 * </MaxWidthWrapper>
 *
 * @example
 * // Smaller max-width for text-heavy content
 * <MaxWidthWrapper maxWidth="lg">
 *   <article>Long-form article...</article>
 * </MaxWidthWrapper>
 *
 * @example
 * // Full-width for hero sections
 * <MaxWidthWrapper maxWidth="2xl" className="py-20">
 *   <HeroSection />
 * </MaxWidthWrapper>
 *
 * @example
 * // No max-width constraint
 * <MaxWidthWrapper maxWidth="full">
 *   <FullWidthCarousel />
 * </MaxWidthWrapper>
 */
const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
};

export function MaxWidthWrapper({
  children,
  className,
  maxWidth = "xl",
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidthClasses[maxWidth],
        className,
      )}
    >
      {children}
    </div>
  );
}
