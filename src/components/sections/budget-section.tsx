"use client";

import { memo } from "react";
import { FadeFromLeft, FadeUp, ScaleFadeIn } from "@/components/animated";
import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/section-container";
import { GradientOrbs } from "@/components/sections/shared/gradient-orbs";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/typography";
import { getBudgetBenefits } from "@/lib/config/stats";
import { BenefitsList } from "./budget/benefits-list";
import { ContactFormCard } from "./budget/contact-form-card";

/**
 * Budget/Contact CTA section with benefits showcase.
 * Refactored to use modular components (GradientOrbs, BenefitsList, ContactFormCard)
 */
export const BudgetSection = memo(function BudgetSection() {
  const benefits = getBudgetBenefits();
  return (
    <Section variant="brand">
      {/* Animated Background Orbs */}
      <GradientOrbs
        animated
        orbs={[
          { position: "top-right", size: "md", intensity: "high" },
          { position: "bottom-left", size: "lg", intensity: "high" },
        ]}
      />

      <SectionContainer>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <FadeFromLeft>
            <ScaleFadeIn delay={0.2}>
              <Badge variant="info" animated>
                Contato
              </Badge>
            </ScaleFadeIn>

            <h2 className="mb-6 flex text-3xl font-bold leading-tight sm:text-3xl lg:text-3xl xl:text-3xl">
              <FadeUp delay={0.3} className="text-white">
                Seja nosso&nbsp;
              </FadeUp>
              <FadeUp delay={0.5} className="text-gradient-tecno">
                cliente!
              </FadeUp>
            </h2>

            <BenefitsList benefits={benefits} />

            {/* Social Proof */}
            <FadeUp delay={1.2} className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-gray-900 bg-linear-to-br from-tecno-purple-500 to-tecno-blue-500"
                  />
                ))}
              </div>
              <Text variant="muted" size="sm">
                <div className="font-semibold text-white">
                  50+ Clientes Satisfeitos
                </div>
              </Text>
            </FadeUp>
          </FadeFromLeft>

          {/* Right Content - Contact Card */}
          <ContactFormCard />
        </div>
      </SectionContainer>
    </Section>
  );
});
