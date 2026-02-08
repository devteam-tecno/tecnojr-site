"use client";

import { motion } from "framer-motion";
import { TecnoJrLogo } from "@/components/ui/primitives/tecnojr-logo";
import { Text } from "@/components/ui/typography";
import { FOOTER_CONTENT } from "@/lib/config/content";
import { SocialLinks } from "./social-links";

/**
 * Footer description section with logo, mission statement, and social links.
 *
 * First column (lg:col-span-1) of footer containing:
 * - Large TecnoJr logo
 * - Company mission/description text
 * - Social media links component
 *
 * Animation: Fade up on scroll into view.
 *
 * @example
 * // Used in Footer component
 * <Description />
 *
 * @see {@link TecnoJrLogo} - Logo component with size variants
 * @see {@link SocialLinks} - Social media icons with links
 */
export function Description() {
  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-6">
          <TecnoJrLogo size="lg" />
        </div>
        <Text variant="body" size="sm" className="mb-6 leading-relaxed">
          {FOOTER_CONTENT.description}
        </Text>
        <SocialLinks />
      </motion.div>
    </div>
  );
}
