"use client";

import { motion } from "framer-motion";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils/utils";

export interface Stat {
  number: string;
  label: string;
}

interface HeroStatsProps {
  stats: Stat[];
  accentColor?: "alternating" | "primary" | "secondary";
  delay?: number;
  className?: string;
}

/**
 * Stats grid component for hero sections
 * Displays metrics with staggered animations
 *
 * @example
 * <HeroStats
 *   stats={[
 *     { number: "22+", label: "Anos" },
 *     { number: "200+", label: "Projetos" }
 *   ]}
 *   accentColor="alternating"
 * />
 */
export function HeroStats({
  stats,
  accentColor = "alternating",
  delay = 1.2,
  className,
}: HeroStatsProps) {
  const getStatColor = (index: number) => {
    if (accentColor === "primary") return "text-brand-primary";
    if (accentColor === "secondary") return "text-brand-secondary";
    return index % 2 === 0 ? "text-brand-primary" : "text-brand-secondary";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={cn(
        "mx-auto grid max-w-3xl grid-cols-2 gap-8 pt-12 sm:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.2 + index * 0.1 }}
          className="group text-center"
        >
          <div
            className={cn(
              "mb-1 text-3xl font-bold transition-transform duration-300 group-hover:scale-110 sm:text-4xl",
              getStatColor(index),
            )}
          >
            {stat.number}
          </div>
          <Text
            variant="muted"
            size="sm"
            className="transition-colors duration-300 group-hover:text-gray-300"
          >
            {stat.label}
          </Text>
        </motion.div>
      ))}
    </motion.div>
  );
}
