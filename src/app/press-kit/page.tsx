import dynamic from "next/dynamic";
import { HeroPressKit } from "@/components/sections/hero";
import { pageMetadata } from "@/lib/utils/metadata";

// Dynamic imports for below-the-fold sections to reduce initial bundle size
const LogosSection = dynamic(
  () =>
    import("@/components/sections/press-kit").then((m) => ({
      default: m.LogosSection,
    })),
  { ssr: true },
);

const AlternativesSection = dynamic(
  () =>
    import("@/components/sections/press-kit").then((m) => ({
      default: m.AlternativesSection,
    })),
  { ssr: true },
);

const ColorsSection = dynamic(
  () =>
    import("@/components/sections/press-kit").then((m) => ({
      default: m.ColorsSection,
    })),
  { ssr: true },
);

const DriveSection = dynamic(
  () =>
    import("@/components/sections/press-kit").then((m) => ({
      default: m.DriveSection,
    })),
  { ssr: true },
);

// Metadata for SEO
export const metadata = pageMetadata.pressKit();

/**
 * Press Kit page with brand assets and resources
 *
 * Sections:
 * 1. Hero - Introduction to press kit
 * 2. Logos - Full logo variations (6 options)
 * 3. Alternatives - Icons and typography (4 each)
 * 4. Colors - Brand color palette (4 colors)
 * 5. Drive - External link to additional materials
 *
 * Features:
 * - Dynamic imports for code splitting
 * - Downloadable SVG and PNG assets
 * - Smooth scroll navigation between sections
 * - Responsive grid layouts
 * - Animated section transitions
 *
 * @example
 * // Accessed via /press-kit route
 * // Navigation: Header → Press Kit link
 */
export default function PressKitPage() {
  return (
    <main id="main-content">
      <HeroPressKit />
      <LogosSection />
      <AlternativesSection />
      <ColorsSection />
      <DriveSection />
    </main>
  );
}
