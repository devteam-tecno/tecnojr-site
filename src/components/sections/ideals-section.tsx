/**
 * @file ideals-section.tsx
 * @description Section displaying company mission, vision, and values
 * Used in the About page
 */

"use client";

import Link from "next/link";
import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { Button } from "@/components/ui/buttons/button";
import { BaseCard } from "@/components/ui/cards/base-card";
import { ideals } from "@/lib/ideals";
import { SectionTitle } from "./section-title";

/**
 * IdealsSection - Displays company ideals (mission, vision, values)
 *
 * Features:
 * - 3-column responsive grid of ideal cards
 * - Staggered fade-up animations
 * - Gradient icon backgrounds
 * - CTA button linking to contact page
 * - Background pattern overlay
 *
 * Layout:
 * - Mobile: 1 column
 * - Tablet: 2 columns (md:grid-cols-2)
 * - Desktop: 3 columns (lg:grid-cols-3)
 *
 * @example
 * ```tsx
 * import { IdealsSection } from '@/components/sections/ideals-section';
 *
 * export default function AboutPage() {
 *   return (
 *     <>
 *       <HeroAboutSection />
 *       <IdealsSection />
 *       <MembersSection />
 *     </>
 *   );
 * }
 * ```
 */
export function IdealsSection() {
  return (
    <section
      id="ideais"
      className="relative overflow-hidden bg-linear-to-b from-tecno-black-800 to-gray-900/50 py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(145, 85, 235, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(66, 117, 249, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 h-72 w-72 rounded-full bg-linear-to-br from-brand-primary/5 to-brand-secondary/5 blur-3xl" />
        <div className="absolute bottom-32 right-10 h-96 w-96 rounded-full bg-linear-to-br from-brand-secondary/8 to-brand-primary/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          firstLine="Nossos"
          secondLine="Ideais"
          subtitle="Os princípios que nos guiam e definem nossa essência como empresa júnior"
        />

        {/* Ideals Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-xl text-gray-300">
            Quer fazer parte da nossa história?
          </p>
          <Button asChild variant="gradient-primary" size="lg">
            <Link href="/contato">Entre em contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
