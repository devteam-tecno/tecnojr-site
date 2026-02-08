import dynamic from "next/dynamic";
import { HeroHome } from "@/components/sections/hero";

// Dynamic imports for below-the-fold sections to reduce initial bundle size
const AboutSection = dynamic(
  () =>
    import("@/components/sections/about-section").then((m) => ({
      default: m.AboutSection,
    })),
  { ssr: true },
);

const FeaturesSection = dynamic(
  () =>
    import("@/components/sections/features-section").then((m) => ({
      default: m.FeaturesSection,
    })),
  { ssr: true },
);

const ServicesSection = dynamic(
  () =>
    import("@/components/sections/services-section").then((m) => ({
      default: m.ServicesSection,
    })),
  { ssr: true },
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects-section").then((m) => ({
      default: m.ProjectsSection,
    })),
  { ssr: true },
);

const BudgetSection = dynamic(
  () =>
    import("@/components/sections/budget-section").then((m) => ({
      default: m.BudgetSection,
    })),
  { ssr: true },
);

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroHome />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <ProjectsSection />
      <BudgetSection />
    </main>
  );
}
