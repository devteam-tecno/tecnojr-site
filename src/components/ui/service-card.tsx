"use client";

import type { IconComponentProps } from "@/lib/types";
import { BaseCard } from "./base-card";

/**
 * Service card component - refactored to use BaseCard
 * Displays a service with icon, title, and description in centered layout
 */
export function ServiceCard({ icon, title, description }: IconComponentProps) {
  return (
    <BaseCard
      icon={icon}
      title={title}
      description={description}
      variant="centered"
      iconSize="lg"
      iconGradient="diagonal"
      glowEffect={false}
      iconRotate={true}
    />
  );
}
