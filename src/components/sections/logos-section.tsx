/**
 * @file logos-section.tsx
 * @description Section displaying full TecnoJr logos with download links
 */

"use client";

import { motion } from "framer-motion";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { SectionTitle } from "@/components/sections/section-title";
import { AssetCard } from "@/components/ui/cards/asset-card";
import { fadeVariants } from "@/lib/animations";
import { fullLogos } from "@/lib/press-kit";

/**
 * LogosSection - Displays all full logo variations
 *
 * Shows 6 logo options (white, black, white-blue, black-blue, white-purple, black-purple)
 * in a responsive grid with download capabilities.
 *
 * Features:
 * - Responsive grid (1/2/3 columns)
 * - Dark and light logo variants with inverted backgrounds
 * - SVG and PNG download links for each logo
 * - Fade-up animations on scroll
 *
 * @example
 * ```tsx
 * import { LogosSection } from '@/components/sections/logos-section';
 *
 * export default function PressKitPage() {
 *   return (
 *     <>
 *       <HeroPressKitSection />
 *       <LogosSection />
 *     </>
 *   );
 * }
 * ```
 *
 * @see {@link AssetCard} for individual logo cards
 * @see {@link ../../lib/press-kit.ts} for logo data
 */
export function LogosSection() {
  return (
    <section
      id="logos"
      className="relative overflow-hidden bg-linear-to-b from-tecno-black-800 to-gray-900/50 py-24 lg:py-32"
    >
      <MaxWidthWrapper>
        {/* Section Title */}
        <SectionTitle
          firstLine="Nossa"
          secondLine="Logo!"
          subtitle="Não edite ou distorça a logo. Use sempre uma das variações oficiais."
        />

        {/* Logos Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {fullLogos.map((logo) => (
            <motion.div key={logo.name} variants={fadeVariants.fadeUp}>
              <AssetCard
                name={logo.name}
                path={logo.path}
                inverted={logo.inverted}
              />
            </motion.div>
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
