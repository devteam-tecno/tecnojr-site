/**
 * @file colors-section.tsx
 * @description Section displaying TecnoJr brand colors with hex and RGB values
 */

"use client";

import { motion } from "framer-motion";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { SectionTitle } from "@/components/sections/section-title";
import { ColorCard } from "@/components/ui/cards/color-card";
import { fadeVariants } from "@/lib/animations";
import { colors } from "@/lib/press-kit";

/**
 * ColorsSection - Displays TecnoJr brand color palette
 *
 * Shows 4 brand colors (Azul, Roxo, Branco, Preto) with their
 * hex and RGB values for accurate reproduction.
 *
 * Features:
 * - Responsive grid (1/2/4 columns)
 * - Color swatches with live background color
 * - Hex and RGB values displayed
 * - Adaptive text color for readability
 * - Hover scale effect
 *
 * @example
 * ```tsx
 * import { ColorsSection } from '@/components/sections/colors-section';
 *
 * export default function PressKitPage() {
 *   return (
 *     <>
 *       <AlternativesSection />
 *       <ColorsSection />
 *     </>
 *   );
 * }
 * ```
 *
 * @see {@link ColorCard} for color display
 * @see {@link ../../lib/press-kit.ts} for color data
 */
export function ColorsSection() {
  return (
    <section
      id="cores"
      className="relative overflow-hidden bg-linear-to-b from-tecno-black-800 to-gray-900/50 py-24 lg:py-32"
    >
      <MaxWidthWrapper>
        {/* Section Title */}
        <SectionTitle
          firstLine="Nossas"
          secondLine="Cores"
          subtitle="Paleta de cores oficial da marca TecnoJr. Utilize estes valores exatos para garantir consistência visual."
        />

        {/* Colors Grid */}
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
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {colors.map((color) => (
            <motion.div key={color.name} variants={fadeVariants.fadeUp}>
              <ColorCard
                name={color.name}
                hex={color.hex}
                rgb={color.rgb}
                textColor={color.textColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
