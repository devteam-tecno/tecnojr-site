"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationLinks, ROUTES_WITHOUT_HEADER } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { TecnoJrLogo } from "../../ui/tecnojr-logo";
import { DesktopNavigation } from "./desktop-navigation";

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
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 h-screen bg-black/50 backdrop-blur-md lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-screen w-80 max-w-[90vw] border-l border-brand-primary/20 bg-zinc-900/95 backdrop-blur-md lg:hidden"
            >
              <div className="flex h-screen flex-col bg-zinc-900">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b border-brand-primary/20 bg-zinc-900 p-6">
                  <Image
                    src="/assets/logo/tecnojr-logo-white.png"
                    alt="Logo TecnoJr"
                    width={150}
                    height={30}
                    className="h-8"
                  />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white transition-colors hover:text-brand-primary"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="flex-1 bg-zinc-900 px-6 py-8">
                  <div className="space-y-6">
                    {navigationLinks.map((link, index) => {
                      const isDisabled = "disabled" in link && link.disabled;
                      return (
                        <motion.div
                          key={link.url}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.url}
                            onClick={(e) => {
                              if (isDisabled) {
                                e.preventDefault();
                              }
                              setMobileMenuOpen(false);
                            }}
                            className={cn(
                              "block text-lg font-medium transition-all duration-300",
                              isDisabled
                                ? "cursor-not-allowed text-gray-500"
                                : pathname === link.url
                                  ? "text-brand-primary"
                                  : "text-gray-300 hover:text-white",
                            )}
                          >
                            {link.text}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
