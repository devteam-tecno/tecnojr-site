import dynamic from "next/dynamic";
import { HeroProjects } from "@/components/sections/hero";
import { pageMetadata } from "@/lib/utils/metadata";

// Dynamic imports for below-the-fold sections to reduce initial bundle size
const ProjectsFullSection = dynamic(
  () =>
    import("@/components/sections/projects-full-section").then((m) => ({
      default: m.ProjectsFullSection,
    })),
  { ssr: true },
);

// Metadata for SEO
export const metadata = pageMetadata.projects();

/**
 * Projects page showcasing all external and internal projects
 *
 * Sections:
 * 1. Hero - Introduction with stats and smooth scroll CTA
 * 2. Projects Full - Complete portfolio with tabs (External/Internal) and CTA
 *
 * Features:
 * - Dynamic imports for code splitting
 * - Tab-based filtering (External vs Internal projects)
 * - Responsive grid layout (1/2/3 columns)
 * - Smooth scroll navigation between sections
 * - Call-to-action linking to contact page
 * - SEO optimized with metadata
 *
 * External Projects:
 * - Client projects delivered by TecnoJr
 * - NASA Space Terra, Space Apps, SIMMBRA, GuiaServe, etc.
 *
 * Internal Projects:
 * - Personal projects by TecnoJr members
 * - COLCIC UESC, Ferramentas UESC, Wiki LOL, etc.
 *
 * @example
 * // Navigate to projects page
 * <Link href="/projetos">Projetos</Link>
 *
 * @example
 * // Navigate to projects page with smooth scroll to section
 * <Link href="/projetos#projetos">Ver Projetos</Link>
 *
 * @see {@link HeroProjectsSection} - Hero section with stats
 * @see {@link ProjectsFullSection} - Full projects section with tabs
 * @see {@link ../lib/projects.ts} - Projects data source
 */
export default function ProjectsPage() {
  return (
    <main id="main-content">
      <HeroProjects />
      <ProjectsFullSection />
    </main>
  );
}
