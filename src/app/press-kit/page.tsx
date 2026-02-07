import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroPressKitSection } from "@/components/sections/hero-press-kit-section";

// Dynamic imports for below-the-fold sections to reduce initial bundle size
const LogosSection = dynamic(
  () =>
    import("@/components/sections/logos-section").then((m) => ({
      default: m.LogosSection,
    })),
  { ssr: true },
);

const AlternativesSection = dynamic(
  () =>
    import("@/components/sections/alternatives-section").then((m) => ({
      default: m.AlternativesSection,
    })),
  { ssr: true },
);

const ColorsSection = dynamic(
  () =>
    import("@/components/sections/colors-section").then((m) => ({
      default: m.ColorsSection,
    })),
  { ssr: true },
);

const DriveSection = dynamic(
  () =>
    import("@/components/sections/drive-section").then((m) => ({
      default: m.DriveSection,
    })),
  { ssr: true },
);

// Metadata for SEO
export const metadata: Metadata = {
  title: "Press Kit | TecnoJr",
  description:
    "Kit de imprensa da TecnoJr com logos, ícones, tipografia e cores da marca. Recursos oficiais para materiais institucionais e de comunicação.",
  keywords: [
    "TecnoJr",
    "Press Kit",
    "Logo",
    "Brand Assets",
    "Identidade Visual",
    "Marca",
    "Download",
    "Assets",
    "Cores",
    "Tipografia",
  ],
  openGraph: {
    title: "Press Kit | TecnoJr",
    description:
      "Acesse todos os recursos visuais da marca TecnoJr: logos, ícones, tipografia e paleta de cores oficial.",
    type: "website",
  },
};

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
    <main>
      <HeroPressKitSection />
      <LogosSection />
      <AlternativesSection />
      <ColorsSection />
      <DriveSection />
    </main>
  );
}
