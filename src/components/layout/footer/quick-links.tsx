"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navigationLinks } from "@/lib/navigation";

export function QuickLinks() {
  // Filter out right-aligned links (like Processo Seletivo) for footer
  const footerLinks = navigationLinks.filter((link) => link.align !== "right");

  return (
    <div className="hidden lg:col-span-1 lg:block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h4 className="mb-6 text-lg font-semibold text-white">Links Rápidos</h4>
        <ul className="space-y-3">
          {footerLinks.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                onClick={(e) => link.disabled && e.preventDefault()}
                className="text-gray-300 transition-colors duration-300 hover:text-purple-500 aria-disabled:cursor-not-allowed aria-disabled:text-gray-500 aria-disabled:hover:text-gray-500"
                aria-disabled={link.disabled}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
