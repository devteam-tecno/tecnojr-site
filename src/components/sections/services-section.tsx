"use client";

import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { ResponsiveGrid } from "@/components/layout/responsive-grid";
import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/section-container";
import { BackgroundPattern } from "@/components/sections/shared/background-pattern";
import { ServiceCard } from "@/components/ui/cards/service-card";
import { services } from "@/lib/data/services";
import { SectionTitle } from "./section-title";

/**
 * Services section showcasing company offerings.
 * Refactored to use shared BackgroundPattern component
 */
export function ServicesSection() {
  return (
    <Section id="services" variant="brand">
      {/* Background Pattern */}
      <BackgroundPattern
        dotColor1="oklch(0.6 0.26 295)"
        dotColor2="oklch(0.6 0.23 260)"
        spacing="50px"
      />

      <SectionContainer>
        <SectionTitle
          firstLine="Nossos"
          secondLine="Serviços"
          subtitle="Oferecemos uma gama completa de serviços tecnológicos para transformar sua visão em realidade digital"
        />

        <ResponsiveGrid cols={{ base: 1, md: 2, xl: 3 }} gap="lg">
          {services.map((service, index) => (
            <StaggerFadeUp key={service.title} index={index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </StaggerFadeUp>
          ))}
        </ResponsiveGrid>
      </SectionContainer>
    </Section>
  );
}
