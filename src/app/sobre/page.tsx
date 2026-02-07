import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroAboutSection } from "@/components/sections/hero-about-section";
import { MembersSectionWrapper } from "@/components/sections/members-section-wrapper";

// Dynamic imports for below-the-fold sections to reduce initial bundle size
const IdealsSection = dynamic(
  () =>
    import("@/components/sections/ideals-section").then((m) => ({
      default: m.IdealsSection,
    })),
  { ssr: true },
);

// Metadata for SEO
export const metadata: Metadata = {
  title: "Sobre | TecnoJr",
  description:
    "Conheça a TecnoJr - Empresa Júnior de Computação da UESC. Fundada em 2002, formamos jovens empreendedores e desenvolvemos projetos de tecnologia de qualidade.",
  keywords: [
    "TecnoJr",
    "Empresa Júnior",
    "UESC",
    "Computação",
    "Tecnologia",
    "Sobre",
    "Missão",
    "Visão",
    "Valores",
    "Equipe",
  ],
  openGraph: {
    title: "Sobre | TecnoJr",
    description:
      "Conheça nossa história, missão, visão, valores e equipe. A TecnoJr é a Empresa Júnior de Computação da UESC desde 2002.",
    type: "website",
  },
};

/**
 * About page showcasing company history, ideals, and team members
 *
 * Sections:
 * 1. Hero - Company introduction with stats
 * 2. Ideals - Mission, vision, and values cards
 * 3. Members - Team grid with role-based filtering
 *
 * Features:
 * - Dynamic imports for code splitting
 * - URL params for shareable member filters
 * - Smooth scroll navigation between sections
 * - Responsive design for all screen sizes
 *
 * @example
 * // Navigate to about page
 * <Link href="/sobre">Sobre</Link>
 *
 * @example
 * // Navigate to about page with Diretor filter
 * <Link href="/sobre?role=3">Ver Diretores</Link>
 */
export default function AboutPage() {
  return (
    <main>
      <HeroAboutSection />
      <IdealsSection />
      <MembersSectionWrapper />
    </main>
  );
}
