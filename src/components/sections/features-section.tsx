"use client";

import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { FeatureCard } from "@/components/ui/cards/feature-card";
import { features } from "@/lib/features";
import { SectionTitle } from "./section-title";

/**
 * Features section showcasing company differentiators.
 *
 * Displays a 2-column responsive grid of FeatureCards with staggered fade-up animations.
 * Features data from @/lib/features (icon, title, description).
 *
 * Design:
 * - Background: Gradient from gray-900/50 to tecno-black-800
 * - Pattern overlay: Radial gradient dots (purple/blue) at 5% opacity
 * - Section padding: py-32
 * - Grid: 1 column mobile, 2 columns tablet+
 *
 * @example
 * // Used in homepage
 * export default function HomePage() {
 *   return (
 *     <>
 *       <HeroSection />
 *       <FeaturesSection />
 *       <ServicesSection />
 *     </>
 *   );
 * }
 *
 * @see {@link features} - Centralized features data from @/lib/features
 * @see {@link FeatureCard} - Individual feature card component
 * @see {@link SectionTitle} - Reusable section heading with two-line text
 */
export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-900/50 to-tecno-black-800 py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 75%, #9155EB 1px, transparent 1px), radial-gradient(circle at 75% 25%, #4275F9 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Refactored */}
        <SectionTitle firstLine="Por que escolher" secondLine="a gente?" />

        {/* Features Grid - Refactored */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <StaggerFadeUp key={feature.title} index={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </StaggerFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
