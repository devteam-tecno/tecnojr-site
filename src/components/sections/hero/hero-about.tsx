"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { FadeFromLeft, FadeFromRight, FadeUp } from "@/components/animated";
import { ContentContainer } from "@/components/layout/content-container";
import { ScrollIndicator } from "@/components/sections/shared/scroll-indicator";
import { Button } from "@/components/ui/buttons/button";
import { InlineHighlight } from "@/components/ui/typography/inline-highlight";
import { LeadParagraph } from "@/components/ui/typography/lead-paragraph";
import { COMPANY_INFO } from "@/lib/config/company";
import { HERO_CONTENT } from "@/lib/config/content";
import { getAboutHeroStats } from "@/lib/config/stats";
import { roles } from "@/lib/data/members";
import { HeroBase } from "./hero-base";
import { HeroHeading } from "./hero-heading";
import { HeroStats } from "./hero-stats";

const mainBg = "/assets/images/backgroundAbout.webp";

/**
 * Hero section for About page
 * Refactored using composition pattern
 */
export const HeroAbout = memo(function HeroAbout() {
  const stats = getAboutHeroStats();

  return (
    <HeroBase
      backgroundImage={mainBg}
      gradientEndColor="brand-primary/20"
      ariaLabel="Seção principal sobre a empresa"
    >
      <HeroBase.Content centered>
        {/* Main Heading */}
        <HeroHeading size="xl">
          <FadeFromLeft delay={0.6}>
            <HeroHeading.Line className="pt-16">
              {HERO_CONTENT.about.title.line1}
            </HeroHeading.Line>
          </FadeFromLeft>
          <FadeFromRight delay={0.8}>
            <HeroHeading.GradientLine>
              {HERO_CONTENT.about.title.line2}
            </HeroHeading.GradientLine>
          </FadeFromRight>
        </HeroHeading>

        {/* Description */}
        <FadeUp delay={1}>
          <ContentContainer maxWidth="5xl" spacing="md">
            <LeadParagraph responsive>
              Fundada em{" "}
              <InlineHighlight color="secondary" underline underlineDelay={1.5}>
                {COMPANY_INFO.foundedYear}
              </InlineHighlight>
              , a{" "}
              <InlineHighlight color="primary" underline underlineDelay={1.7}>
                Empresa TecnoJr
              </InlineHighlight>{" "}
              foi criada como um projeto de extensão do curso de{" "}
              <InlineHighlight color="white">
                {COMPANY_INFO.department} da {COMPANY_INFO.university.acronym}
              </InlineHighlight>
              .
            </LeadParagraph>

            <LeadParagraph responsive={false}>
              Desde então, vem atuando na área de{" "}
              <LeadParagraph.Highlight color="primary">
                desenvolvimento de sistemas
              </LeadParagraph.Highlight>{" "}
              e aproximando o{" "}
              <LeadParagraph.Highlight color="secondary">
                mundo acadêmico do empresarial
              </LeadParagraph.Highlight>
              . Atualmente é constituída por{" "}
              <span className="text-xl font-semibold text-white">
                {roles.total} membros
              </span>{" "}
              apaixonados por tecnologia e inovação.
            </LeadParagraph>
          </ContentContainer>
        </FadeUp>

        {/* Stats Grid */}
        <HeroStats stats={stats} delay={1.2} />

        {/* CTA Button */}
        <FadeUp delay={1.8} className="flex justify-center pt-8">
          <Button variant="gradient-primary" size="xl" asChild>
            <Link
              href="#membros"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("membros")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>{HERO_CONTENT.about.cta}</span>
              <motion.span
                className="ml-2 inline-block"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↓
              </motion.span>
            </Link>
          </Button>
        </FadeUp>

        {/* Scroll Indicator */}
        <ScrollIndicator
          text={HERO_CONTENT.about.scrollIndicator}
          targetId="ideais"
          delay={2}
        />
      </HeroBase.Content>
    </HeroBase>
  );
});
