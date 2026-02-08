/**
 * @file logos-section.tsx
 * @description Section displaying full TecnoJr logos with download links
 */

"use client";

import { StaggerFadeUp } from "@/components/animated";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { ResponsiveGrid } from "@/components/layout/responsive-grid";
import { SectionTitle } from "@/components/sections/section-title";
import { AssetCard } from "@/components/ui/cards/asset-card";
import { fullLogos } from "@/lib/data/press-kit";

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
        <ResponsiveGrid
          cols={{ base: 1, md: 2, lg: 3 }}
          gap="md"
          className="mt-16"
        >
          {fullLogos.map((logo, i) => (
            <StaggerFadeUp key={logo.name} index={i}>
              <AssetCard
                name={logo.name}
                path={logo.path}
                inverted={logo.inverted}
              />
            </StaggerFadeUp>
          ))}
        </ResponsiveGrid>
      </MaxWidthWrapper>
    </section>
  );
}
