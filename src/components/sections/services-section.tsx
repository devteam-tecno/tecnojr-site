"use client";

import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { ServiceCard } from "@/components/ui/cards/service-card";
import { services } from "@/lib/services";
import { SectionTitle } from "./section-title";

/**
 * Services section showcasing company offerings.
 *
 * Displays a 3-column responsive grid of ServiceCards with staggered fade-up animations.
 * Services data from @/lib/services (icon, title, description).
 * Includes section ID for anchor navigation (#services).
 *
 * Design:
 * - Background: Gradient from brand-dark to tecno-black-900
 * - Pattern overlay: Radial gradient dots (OKLCH purple/blue) at 5% opacity
 * - Section padding: py-32
 * - Grid: 1 column mobile, 2 columns tablet, 3 columns desktop (xl:grid-cols-3)
 *
 * @example
 * // Used in homepage
 * export default function HomePage() {
 *   return (
 *     <>
 *       <FeaturesSection />
 *       <ServicesSection />
 *       <ProjectsSection />
 *     </>
 *   );
 * }
 *
 * @see {@link services} - Centralized services data from @/lib/services
 * @see {@link ServiceCard} - Individual service card component with centered layout
 * @see {@link SectionTitle} - Reusable section heading with optional subtitle
 */
export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-linear-to-b from-brand-dark to-tecno-black-900 py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, oklch(0.6 0.26 295) 1px, transparent 1px), radial-gradient(circle at 75% 75%, oklch(0.6 0.23 260) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Refactored */}
        <SectionTitle
          firstLine="Nossos"
          secondLine="Serviços"
          subtitle="Oferecemos uma gama completa de serviços tecnológicos para transformar sua visão em realidade digital"
        />

        {/* Services Grid - Refactored */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <StaggerFadeUp key={service.title} index={index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </StaggerFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
