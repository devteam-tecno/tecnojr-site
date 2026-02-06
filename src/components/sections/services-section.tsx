"use client";

import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/lib/services";
import { SectionTitle } from "./section-title";

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
