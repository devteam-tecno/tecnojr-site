/**
 * @file alternatives-section.tsx
 * @description Section displaying alternative brand assets (icons and typography)
 */

"use client";

import { StaggerFadeUp } from "@/components/animated";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { ResponsiveGrid } from "@/components/layout/responsive-grid";
import { SectionTitle } from "@/components/sections/section-title";
import { AssetCard } from "@/components/ui/cards/asset-card";
import { icons, typos } from "@/lib/data/press-kit";

/**
 * AlternativesSection - Displays alternative logo options
 *
 * Shows icons (4 variations) and typography (4 variations) that can be used
 * when the TecnoJr brand is clearly visible elsewhere or space is limited.
 *
 * Features:
 * - Two subsections: Icons and Typography
 * - Responsive grid (1/2/4 columns)
 * - Usage guidelines for each subsection
 * - SVG and PNG download links
 * - Staggered fade-up animations
 *
 * @example
 * ```tsx
 * import { AlternativesSection } from '@/components/sections/alternatives-section';
 *
 * export default function PressKitPage() {
 *   return (
 *     <>
 *       <LogosSection />
 *       <AlternativesSection />
 *     </>
 *   );
 * }
 * ```
 *
 * @see {@link AssetCard} for asset display
 * @see {@link ../../lib/press-kit.ts} for icons and typography data
 */
export function AlternativesSection() {
  return (
    <section
      id="alternativas"
      className="relative overflow-hidden bg-linear-to-b from-gray-900/50 to-tecno-black-800 py-24 lg:py-32"
    >
      <MaxWidthWrapper>
        {/* Section Title */}
        <SectionTitle
          firstLine="Logos"
          secondLine="Alternativas"
          subtitle="Utilize apenas quando a marca TecnoJr já estiver claramente visível no contexto."
        />

        <div className="mt-16 space-y-24">
          {/* Icons Subsection */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-white lg:text-4xl">
                Ícones
              </h3>
              <p className="text-lg text-gray-300 lg:text-xl">
                Versões compactas da logo, ideais para favicons, app icons e
                contextos com espaço limitado.
              </p>
            </div>

            <ResponsiveGrid cols={{ base: 1, sm: 2, lg: 4 }} gap="md">
              {icons.map((icon, i) => (
                <StaggerFadeUp key={icon.name} index={i}>
                  <AssetCard
                    name={icon.name}
                    path={icon.path}
                    inverted={icon.inverted}
                  />
                </StaggerFadeUp>
              ))}
            </ResponsiveGrid>
          </div>

          {/* Typography Subsection */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-white lg:text-4xl">
                Tipografia
              </h3>
              <p className="text-lg text-gray-300 lg:text-xl">
                Logo textual em Montserrat, escolhida por representar
                modernidade, legibilidade e força da marca.
              </p>
            </div>

            <ResponsiveGrid cols={{ base: 1, sm: 2, lg: 4 }} gap="md">
              {typos.map((typo, i) => (
                <StaggerFadeUp key={typo.name} index={i}>
                  <AssetCard
                    name={typo.name}
                    path={typo.path}
                    inverted={typo.inverted}
                  />
                </StaggerFadeUp>
              ))}
            </ResponsiveGrid>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
