"use client";

import type { IconComponentProps } from "@/lib/types";
import { BaseCard } from "./cards/base-card";

/**
 * Feature card component displaying company features/differentiators.
 *
 * Refactored to use BaseCard with predefined styling optimized for
 * feature showcases. Shows icon, title, and description with hover
 * glow effect and smooth animations.
 *
 * @param icon - Lucide React icon component
 * @param title - Feature title (e.g., "Fast Performance")
 * @param description - Feature description
 *
 * @returns Rendered feature card with glassmorphic styling
 *
 * @example
 * ```tsx
 * import { Zap } from 'lucide-react';
 * import { FeatureCard } from '@/components/ui/feature-card';
 *
 * <FeatureCard
 *   icon={Zap}
 *   title="Lightning Fast"
 *   description="Optimized for speed and performance"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Using with data from lib/features.ts
 * import { features } from '@/lib/features';
 *
 * {features.map((feature) => (
 *   <FeatureCard
 *     key={feature.title}
 *     icon={feature.icon}
 *     title={feature.title}
 *     description={feature.description}
 *   />
 * ))}
 * ```
 *
 * @see {@link BaseCard} for underlying component
 * @see {@link ../../../lib/features.ts} for feature data
 */
export function FeatureCard({ icon, title, description }: IconComponentProps) {
  return (
    <BaseCard
      icon={icon}
      title={title}
      description={description}
      variant="default"
      iconSize="md"
      iconGradient="diagonal"
      glowEffect={true}
      glowVariant="primary"
      iconRotate={false}
    />
  );
}
