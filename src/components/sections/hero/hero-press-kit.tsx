"use client";

import Link from "next/link";
import { memo } from "react";
import {
  FadeFromLeft,
  FadeFromRight,
  FadeUp,
  ScaleFadeIn,
} from "@/components/animated";
import { Button } from "@/components/ui/button";
import { LeadParagraph } from "@/components/ui/typography/lead-paragraph";
import { HeroBase } from "./hero-base";
import { HeroHeading } from "./hero-heading";

const mainBg = "/assets/images/backgroundPressKit.webp";

/**
 * Hero section for Press Kit page
 * Refactored using composition pattern
 */
export const HeroPressKit = memo(function HeroPressKit() {
  return (
    <HeroBase
      backgroundImage={mainBg}
      gradientEndColor="brand-secondary/20"
      ariaLabel="Seção principal do press kit"
    >
      <HeroBase.Content centered>
        {/* Main Heading */}
        <HeroHeading size="xl">
          <FadeFromLeft delay={0.6}>
            <HeroHeading.Line className="pt-16">Press</HeroHeading.Line>
          </FadeFromLeft>
          <FadeFromRight delay={0.8}>
            <HeroHeading.GradientLine>Kit</HeroHeading.GradientLine>
          </FadeFromRight>
        </HeroHeading>

        {/* Description */}
        <FadeUp delay={1}>
          <LeadParagraph responsive maxWidth="3xl">
            Kit de impressão com todos os recursos visuais da marca TecnoJr.
            <br />
            Logos, ícones, tipografia e cores para utilização em materiais
            institucionais e de comunicação.
          </LeadParagraph>
        </FadeUp>

        {/* CTA Button */}
        <ScaleFadeIn delay={1.2}>
          <Button asChild variant="gradient-primary" size="xl">
            <Link href="#logos">Explorar Assets</Link>
          </Button>
        </ScaleFadeIn>
      </HeroBase.Content>
    </HeroBase>
  );
});
