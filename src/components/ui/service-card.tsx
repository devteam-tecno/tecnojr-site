"use client";

import type { IconComponentProps } from "@/lib/types";
import { BaseCard } from "./cards/base-card";

/**
 * Service card component displaying TecnoJR's service offerings.
 *
 * Refactored to use BaseCard with centered layout and icon rotation
 * on hover. Optimized for services section showcasing what TecnoJR provides.
 *
 * @param icon - Lucide React icon component
 * @param title - Service name (e.g., "Web Development")
 * @param description - Service description
 *
 * @returns Rendered service card with centered layout
 *
 * @example
 * ```tsx
 * import { Code } from 'lucide-react';
 * import { ServiceCard } from '@/components/ui/service-card';
 *
 * <ServiceCard
 *   icon={Code}
 *   title="Web Development"
 *   description="Custom websites and web applications"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Using with data from lib/services.ts
 * import { services } from '@/lib/services';
 *
 * <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 *   {services.map((service) => (
 *     <ServiceCard
 *       key={service.title}
 *       icon={service.icon}
 *       title={service.title}
 *       description={service.description}
 *     />
 *   ))}
 * </div>
 * ```
 *
 * @see {@link BaseCard} for underlying component
 * @see {@link ../../../lib/services.ts} for service data
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
