/**
 * @file ideals-section.tsx
 * @description Section displaying company mission, vision, and values
 * Refactored to use shared components (BackgroundPattern, GradientOrbs, CTASection)
 */

"use client";

import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { ResponsiveGrid } from "@/components/layout/responsive-grid";
import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/section-container";
import { BackgroundPattern } from "@/components/sections/shared/background-pattern";
import { CTASection } from "@/components/sections/shared/cta-section";
import { GradientOrbs } from "@/components/sections/shared/gradient-orbs";
import { BaseCard } from "@/components/ui/cards/base-card";
import { ideals } from "@/lib/data/ideals";
import { SectionTitle } from "./section-title";

/**
 * IdealsSection - Displays company ideals (mission, vision, values)
 */
export function IdealsSection() {
  return (
    <Section id="ideais" variant="reversed">
      {/* Background Pattern */}
      <BackgroundPattern
        dotColor1="rgba(145, 85, 235, 0.3)"
        dotColor2="rgba(66, 117, 249, 0.3)"
        spacing="50px"
      />

      {/* Gradient Orbs */}
      <GradientOrbs
        orbs={[
          { position: "top-left", size: "md", intensity: "low" },
          { position: "bottom-right", size: "lg", intensity: "medium" },
        ]}
      />

      <SectionContainer>
        {/* Section Header */}
        <SectionTitle
          firstLine="Nossos"
          secondLine="Ideais"
          subtitle="Os princípios que nos guiam e definem nossa essência como empresa júnior"
        />

        {/* Ideals Grid */}
        <ResponsiveGrid cols={{ base: 1, md: 2, lg: 3 }} gap="lg">
          {ideals.map((ideal, index) => (
            <StaggerFadeUp key={ideal.title} index={index}>
              <BaseCard
                icon={ideal.icon}
                title={ideal.title}
                description={ideal.description}
                variant="centered"
                iconSize="xl"
                iconGradient="diagonal"
                glowEffect={true}
                glowVariant="primary"
              />
            </StaggerFadeUp>
          ))}
        </ResponsiveGrid>

        {/* CTA */}
        <CTASection title="Quer fazer parte da nossa história?" />
      </SectionContainer>
    </Section>
  );
}
