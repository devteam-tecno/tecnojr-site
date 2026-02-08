/**
 * @file colors-section.tsx
 * @description Section displaying TecnoJr brand colors with hex and RGB values
 */

"use client";

import { StaggerFadeUp } from "@/components/animated";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { ResponsiveGrid } from "@/components/layout/responsive-grid";
import { SectionTitle } from "@/components/sections/section-title";
import { ColorCard } from "@/components/ui/cards/color-card";
import { colors } from "@/lib/data/press-kit";

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
        <ResponsiveGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          gap="md"
          className="mt-16"
        >
          {colors.map((color, i) => (
            <StaggerFadeUp key={color.name} index={i}>
              <ColorCard
                name={color.name}
                hex={color.hex}
                rgb={color.rgb}
                textColor={color.textColor}
              />
            </StaggerFadeUp>
          ))}
        </ResponsiveGrid>
      </MaxWidthWrapper>
    </section>
  );
}
