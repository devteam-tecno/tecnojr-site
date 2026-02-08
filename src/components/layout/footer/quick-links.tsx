"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navigationLinks } from "@/lib/utils/navigation";

/**
 * Footer quick links section with site navigation.
 *
 * Displays vertical list of navigation links (filtered to exclude right-aligned links
 * like "Processo Seletivo"). Includes hover effects and disabled link support.
 *
 * Hidden on mobile, visible on large screens (lg:col-span-1 lg:block).
 * Animation: Fade up on scroll with 0.1s delay.
 *
 * @example
 * // Used in Footer component
 * <QuickLinks />
 *
 * @see {@link navigationLinks} - Centralized navigation data from @/lib/navigation
 */
export function QuickLinks() {
  // Filter out right-aligned links (like Processo Seletivo) for footer
  const footerLinks = navigationLinks.filter(
    (link) => !("align" in link && link.align === "right"),
  );

  return (
    <nav
      className="hidden lg:col-span-1 lg:block"
      aria-label="Links rápidos do rodapé"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h4 className="mb-6 text-lg font-semibold text-white">Links Rápidos</h4>
        <ul className="space-y-3">
          {footerLinks.map((link) => {
            const isDisabled = "disabled" in link && link.disabled === true;
            return (
              <li key={link.url}>
                <Link
                  href={link.url}
                  onClick={(e) => isDisabled && e.preventDefault()}
                  className="text-gray-300 transition-colors duration-300 hover:text-purple-500 aria-disabled:cursor-not-allowed aria-disabled:text-gray-500 aria-disabled:hover:text-gray-500"
                  aria-disabled={isDisabled}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
}
