"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationLinks, ROUTES_WITHOUT_HEADER } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { TecnoJrLogo } from "../../ui/primitives/tecnojr-logo";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

/**
 * Main header component with sticky positioning and scroll-based styling.
 *
 * Features:
 * - Slide-down animation on mount
 * - Scroll detection (background blur/border after 50px scroll)
 * - Mobile menu toggle state management
 * - Desktop navigation (hidden on mobile)
 * - Mobile navigation drawer (hamburger menu)
 * - Auto-hide on specific routes (ROUTES_WITHOUT_HEADER)
 * - Auto-close mobile menu on route change
 * - Logo with scale animation on hover
 *
 * The header becomes more opaque with a border when scrolled past 50px for
 * better readability. On mobile, it always has a background; on desktop (lg+),
 * it starts transparent.
 *
 * @example
 * // Usage in root layout
 * <Header />
 * <main>{children}</main>
 * <Footer />
 *
 * @see {@link @/lib/navigation} - For navigation links and route configuration
 * @see {@link DesktopNavigation} - Desktop nav implementation
 * @see {@link MobileNavigation} - Mobile drawer nav implementation
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  // Don't show header on specific pages
  const shouldHideHeader = ROUTES_WITHOUT_HEADER.includes(
    pathname as (typeof ROUTES_WITHOUT_HEADER)[number],
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is intentionally used as a trigger
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (shouldHideHeader) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrollY > 50
          ? "border-b border-brand-primary/20 bg-zinc-900/95 backdrop-blur-md"
          : "bg-zinc-900/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <TecnoJrLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <DesktopNavigation
            navigationLinks={navigationLinks}
            pathname={pathname}
          />

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "rounded-lg p-2 transition-all duration-200 lg:hidden",
              scrollY > 50
                ? "text-white hover:bg-brand-primary/10 hover:text-brand-primary"
                : "bg-zinc-900/40 text-white backdrop-blur-sm hover:bg-brand-primary/20 hover:text-brand-primary",
            )}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        pathname={pathname}
      />
    </motion.header>
  );
}
