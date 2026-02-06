"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationLinks, ROUTES_WITHOUT_HEADER } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { TecnoJrLogo } from "../../ui/tecnojr-logo";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

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
    window.addEventListener("scroll", handleScroll);
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
