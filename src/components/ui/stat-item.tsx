"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatItemProps {
  icon: LucideIcon;
  label: string;
  value?: string | number;
}

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
