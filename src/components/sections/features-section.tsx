"use client";

import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { ResponsiveGrid } from "@/components/layout/responsive-grid";
import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/section-container";
import { BackgroundPattern } from "@/components/sections/shared/background-pattern";
import { FeatureCard } from "@/components/ui/cards/feature-card";
import { features } from "@/lib/data/features";
import { SectionTitle } from "./section-title";

/**
 * Features section showcasing company differentiators.
 * Refactored to use shared BackgroundPattern component
 */
export function FeaturesSection() {
  return (
    <Section variant="default">
      {/* Background Pattern */}
      <BackgroundPattern />

      <SectionContainer>
        <SectionTitle firstLine="Por que escolher" secondLine="a gente?" />

        <ResponsiveGrid cols={{ base: 1, md: 2 }} gap="lg">
          {features.map((feature, index) => (
            <StaggerFadeUp key={feature.title} index={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </StaggerFadeUp>
          ))}
        </ResponsiveGrid>
      </SectionContainer>
    </Section>
  );
}
