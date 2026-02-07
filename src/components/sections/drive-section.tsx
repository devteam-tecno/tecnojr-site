/**
 * @file drive-section.tsx
 * @description Section with CTA to access additional materials on Google Drive
 */

"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { SectionTitle } from "@/components/sections/section-title";
import { Button } from "@/components/ui/button";
import { infiniteAnimations } from "@/lib/animations";
import { DRIVE_URL } from "@/lib/press-kit";

/**
 * DriveSection - CTA section for additional materials
 *
 * Directs users to Google Drive folder with more partner materials,
 * presentations, and brand resources.
 *
 * Features:
 * - Centered CTA layout
 * - External link to Google Drive
 * - Floating orb background animation
 * - Gradient button with icon
 *
 * @example
 * ```tsx
 * import { DriveSection } from '@/components/sections/drive-section';
 *
 * export default function PressKitPage() {
 *   return (
 *     <>
 *       <ColorsSection />
 *       <DriveSection />
 *     </>
 *   );
 * }
 * ```
 *
 * @see {@link ../../lib/press-kit.ts} for Drive URL
 */
export function DriveSection() {
  return (
    <section
      id="drive"
      className="relative overflow-hidden bg-linear-to-b from-gray-900/50 to-tecno-black-800 py-24 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          {...infiniteAnimations.floatingOrb}
          transition={{
            ...infiniteAnimations.floatingOrb.transition,
            duration: 20,
          }}
          className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-linear-to-br from-tecno-purple-500/10 to-tecno-blue-500/10 blur-3xl"
        />
      </div>

      <MaxWidthWrapper>
        <div className="relative z-10">
          {/* Section Title */}
          <SectionTitle
            firstLine="Procurando por"
            secondLine="mais?"
            subtitle="Acesse nossa pasta no Google Drive para encontrar materiais adicionais, apresentações e recursos para parceiros."
          />

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <Button asChild variant="gradient-primary" size="lg">
              <Link
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                Acessar o Drive
                <ExternalLink className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
