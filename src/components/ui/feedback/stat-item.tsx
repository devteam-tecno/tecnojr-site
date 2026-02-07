"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

/**
 * Props for the StatItem component.
 *
 * @property icon - Lucide icon component to display in the gradient circle
 * @property label - Primary text label describing the stat or benefit
 * @property value - Optional secondary text (e.g., numerical value, additional info)
 */
interface StatItemProps {
  icon: LucideIcon;
  label: string;
  value?: string | number;
}

/**
 * Animated stat or benefit display item with icon and label.
 *
 * Features a gradient circular icon container, slide-in animation on scroll,
 * and optional secondary value text. Commonly used in About section for
 * showcasing company stats, benefits, or key features.
 *
 * @example
 * // Basic stat with icon and label
 * import { Users } from "lucide-react";
 * <StatItem icon={Users} label="Active Clients" />
 *
 * @example
 * // With numerical value
 * import { Award } from "lucide-react";
 * <StatItem icon={Award} label="Projects Delivered" value="50+" />
 *
 * @example
 * // Grid of stats in About section
 * import { Users, Award, Clock, Star } from "lucide-react";
 * <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 *   <StatItem icon={Users} label="Active Clients" value="30+" />
 *   <StatItem icon={Award} label="Projects Delivered" value="50+" />
 *   <StatItem icon={Clock} label="Years of Experience" value="10+" />
 *   <StatItem icon={Star} label="Client Satisfaction" value="98%" />
 * </div>
 */
export function StatItem({ icon: Icon, label, value }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg gradient-tecno-diagonal text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <p className="text-lg font-semibold text-foreground">{label}</p>
        {value && <p className="text-sm text-muted-foreground">{value}</p>}
      </div>
    </motion.div>
  );
}
