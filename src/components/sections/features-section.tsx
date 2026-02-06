"use client";

import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { FeatureCard } from "@/components/ui/feature-card";
import { features } from "@/lib/features";
import { SectionTitle } from "./section-title";

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
