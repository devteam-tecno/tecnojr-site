"use client";

import type { IconComponentProps } from "@/lib/types";
import { BaseCard } from "./base-card";

/**
 * Feature card component - refactored to use BaseCard
 * Displays a feature with icon, title, and description
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
