import dynamic from "next/dynamic";
import { HeroAbout } from "@/components/sections/hero";
import { MembersSectionWrapper } from "@/components/sections/members-section-wrapper";
import { pageMetadata } from "@/lib/utils/metadata";

// Dynamic imports for below-the-fold sections to reduce initial bundle size
const IdealsSection = dynamic(
  () =>
    import("@/components/sections/ideals-section").then((m) => ({
      default: m.IdealsSection,
    })),
  { ssr: true },
);

// Metadata for SEO
export const metadata = pageMetadata.about();

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
    <main id="main-content">
      <HeroAbout />
      <IdealsSection />
      <MembersSectionWrapper />
    </main>
  );
}
