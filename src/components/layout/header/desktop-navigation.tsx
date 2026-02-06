import { motion } from "framer-motion";
import Link from "next/link";
import type { NavigationLink } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface DesktopNavigationProps {
  navigationLinks: readonly NavigationLink[];
  pathname: string;
}

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
        <nav className="flex items-center space-x-8">
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
        <nav className="flex items-center space-x-6">
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
