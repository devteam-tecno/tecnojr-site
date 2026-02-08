"use client";

import type { LucideIcon } from "lucide-react";
import { FadeFromLeft } from "@/components/animated/motion-wrappers";
import { StatItem } from "@/components/ui/feedback/stat-item";

interface Benefit {
  icon: LucideIcon;
  label: string;
}

interface BenefitsListProps {
  benefits: readonly Benefit[];
}

/**
 * Benefits list component with animated items
 * Used in budget section to showcase value propositions
 */
export function BenefitsList({ benefits }: BenefitsListProps) {
  return (
    <div className="mb-10 space-y-6">
      {benefits.map((benefit, index) => (
        <FadeFromLeft key={benefit.label} delay={0.7 + index * 0.1}>
          <StatItem icon={benefit.icon} label={benefit.label} />
        </FadeFromLeft>
      ))}
    </div>
  );
}
