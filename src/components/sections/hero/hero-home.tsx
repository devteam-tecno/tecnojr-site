"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import { Interactive } from "@/components/animated";
import {
  FadeFromLeft,
  FadeFromRight,
  FadeUp,
} from "@/components/animated/motion-wrappers";
import { ScrollIndicator } from "@/components/sections/shared/scroll-indicator";
import { Button } from "@/components/ui/buttons/button";
import { CTA_TEXTS, HERO_CONTENT } from "@/lib/config/content";
import { HeroBase } from "./hero-base";

const mainBg = "/assets/images/backgroundHome.webp";

/**
 * Hero section component for homepage
 * Refactored using composition pattern
 */
export const HeroHome = memo(function HeroHome() {
  return (
    <HeroBase
      backgroundImage={mainBg}
      gradientEndColor="brand-primary/20"
      ariaLabel="Seção principal da página inicial"
    >
      <HeroBase.Content>
        {/* Main Heading */}
        <h1 className="text-4xl font-bold leading-tight! sm:text-5xl lg:text-7xl xl:text-7xl">
          <FadeFromLeft delay={0.6} className="block text-white">
            {HERO_CONTENT.home.title.line1}
          </FadeFromLeft>
          <FadeFromLeft delay={0.6} className="block text-white">
            {HERO_CONTENT.home.title.line2}
          </FadeFromLeft>
          <FadeFromRight delay={0.8} className="block text-gradient-tecno">
            {HERO_CONTENT.home.title.line3}
          </FadeFromRight>
        </h1>

        {/* Subtitle */}
        <FadeUp
          delay={1}
          className="text-lg font-medium leading-relaxed text-gray-300 sm:text-lg lg:text-lg"
        >
          {HERO_CONTENT.home.subtitle}
        </FadeUp>

        {/* CTA Button */}
        <FadeUp delay={1.2} className="flex pt-8">
          <Interactive.Button className="group">
            <Button asChild variant="gradient-primary" size="xl">
              <Link href="/contato">
                <span className="relative z-10">{CTA_TEXTS.contact}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </Interactive.Button>
        </FadeUp>

        {/* Scroll Indicator */}
        <ScrollIndicator
          text={HERO_CONTENT.home.scrollIndicator}
          targetId="about"
        />
      </HeroBase.Content>
    </HeroBase>
  );
});
