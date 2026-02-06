"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  pathname: string;
}

export function MobileNavigation({
  mobileMenuOpen,
  setMobileMenuOpen,
  pathname,
}: MobileNavigationProps) {
  return (
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
  );
}
