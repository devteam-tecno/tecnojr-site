import { motion } from "framer-motion";
import Link from "next/link";
import type { NavigationLink } from "@/lib/utils/navigation";
import { cn } from "@/lib/utils/utils";

/**
 * Props for the DesktopNavigation component.
 *
 * @property navigationLinks - Array of navigation links from @/lib/navigation
 * @property pathname - Current page pathname from usePathname()
 */
interface DesktopNavigationProps {
  navigationLinks: readonly NavigationLink[];
  pathname: string;
}

/**
 * Desktop navigation component with center/right aligned links and active indicators.
 *
 * Features:
 * - Filters links by alignment (center, right)
 * - Active link indicator with animated underline
 * - Disabled link support (cursor-not-allowed, greyed out)
 * - Smooth transitions and hover states
 * - Hidden on mobile (lg:flex)
 *
 * Active indicator: Purple gradient underline with scale animation on active link.
 *
 * @example
 * // Used in Header component
 * <DesktopNavigation
 *   navigationLinks={navigationLinks}
 *   pathname={pathname}
 * />
 */
export function DesktopNavigation({
  navigationLinks,
  pathname,
}: DesktopNavigationProps) {
  // Filter links by alignment
  const links = {
    left: [] as NavigationLink[],
    center: [] as NavigationLink[],
    right: [] as NavigationLink[],
  };
  navigationLinks.forEach((link) => {
    const align = link.align || "center";
    links[align].push(link);
  });
  const { center: centerLinks, right: rightLinks } = links;

  return (
    <div className="ml-8 hidden flex-1 items-center justify-between lg:flex">
      {/* Center Navigation */}
      <div className="flex flex-1 justify-center">
        <nav
          className="flex items-center space-x-8"
          aria-label="Navegação principal"
        >
          {centerLinks.map((link) => {
            const isDisabled = link.disabled;
            return (
              <Link
                key={link.url}
                href={link.url}
                onClick={(e) => isDisabled && e.preventDefault()}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-all duration-300",
                  isDisabled
                    ? "cursor-not-allowed text-gray-500"
                    : pathname === link.url
                      ? "text-white"
                      : "text-gray-300 hover:text-white",
                )}
                aria-disabled={isDisabled}
                aria-current={
                  pathname === link.url && !isDisabled ? "page" : undefined
                }
              >
                {link.text}
                {pathname === link.url && !isDisabled && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 gradient-tecno-primary"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right Navigation */}
      {rightLinks.length > 0 && (
        <nav
          className="flex items-center space-x-6"
          aria-label="Navegação secundária"
        >
          {rightLinks.map((link) => {
            const isDisabled = link.disabled;
            return (
              <Link
                key={link.url}
                href={link.url}
                onClick={(e) => isDisabled && e.preventDefault()}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-all duration-300",
                  isDisabled
                    ? "cursor-not-allowed text-gray-500"
                    : pathname === link.url
                      ? "text-white"
                      : "text-gray-300 hover:text-white",
                )}
                aria-disabled={isDisabled}
                aria-current={
                  pathname === link.url && !isDisabled ? "page" : undefined
                }
              >
                {link.text}
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
