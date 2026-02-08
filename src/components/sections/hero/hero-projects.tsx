"use client";

import { ArrowDown } from "lucide-react";
import { memo } from "react";
import {
  FadeFromLeft,
  FadeFromRight,
  FadeUp,
  ScaleFadeIn,
} from "@/components/animated";
import { ScrollIndicator } from "@/components/sections/shared/scroll-indicator";
import { Button } from "@/components/ui/buttons/button";
import { InlineHighlight } from "@/components/ui/typography/inline-highlight";
import { LeadParagraph } from "@/components/ui/typography/lead-paragraph";
import { HERO_CONTENT } from "@/lib/config/content";
import { getProjectsHeroStats } from "@/lib/config/stats";
import { HeroBase } from "./hero-base";
import { HeroHeading } from "./hero-heading";
import { HeroStats } from "./hero-stats";

const mainBg = "/assets/images/backgroundHome.webp";

/**
 * Hero section for Projects page
 * Refactored using composition pattern
 */
export const HeroProjects = memo(function HeroProjects() {
  const stats = getProjectsHeroStats();

  return (
    <HeroBase
      backgroundImage={mainBg}
      gradientEndColor="brand-secondary/20"
      ariaLabel="Seção principal de projetos"
    >
      <HeroBase.Content centered>
        {/* Main Heading */}
        <HeroHeading size="xl">
          <FadeFromLeft delay={0.6}>
            <HeroHeading.Line className="pt-16">
              Conheça nossos
            </HeroHeading.Line>
          </FadeFromLeft>
          <FadeFromRight delay={0.8}>
            <HeroHeading.GradientLine>
              {HERO_CONTENT.projects.title.line2}
            </HeroHeading.GradientLine>
          </FadeFromRight>
        </HeroHeading>

        {/* Description */}
        <FadeUp delay={1}>
          <LeadParagraph responsive maxWidth="5xl" className="mx-auto">
            A{" "}
            <InlineHighlight color="primary" underline underlineDelay={1.5}>
              TecnoJr
            </InlineHighlight>{" "}
            investe fundo em{" "}
            <InlineHighlight color="secondary" underline underlineDelay={1.7}>
              capacitações
            </InlineHighlight>{" "}
            de nossos desenvolvedores para oferecer aos nossos clientes a{" "}
            <LeadParagraph.Highlight color="white">
              qualidade e confiança
            </LeadParagraph.Highlight>{" "}
            inerentes à um{" "}
            <LeadParagraph.Highlight color="white">
              projeto robusto
            </LeadParagraph.Highlight>
            .
          </LeadParagraph>
        </FadeUp>

        {/* Stats Grid */}
        <HeroStats stats={stats} delay={1.2} />

        {/* CTA Button */}
        <ScaleFadeIn delay={2} className="flex justify-center pt-8">
          <Button
            variant="gradient-secondary"
            size="xl"
            onClick={() =>
              document.getElementById("portfolio")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore o Portfólio
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </ScaleFadeIn>

        {/* Scroll Indicator */}
        <ScrollIndicator
          text={HERO_CONTENT.projects.scrollIndicator}
          targetId="portfolio"
          delay={2.2}
        />
      </HeroBase.Content>
    </HeroBase>
  );
});
