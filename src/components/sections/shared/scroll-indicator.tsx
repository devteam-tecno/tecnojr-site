"use client";

import { motion } from "framer-motion";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils/utils";

interface ScrollIndicatorProps {
  text?: string;
  targetId?: string;
  delay?: number;
  className?: string;
}

/**
 * Animated scroll indicator for hero sections
 * Guides users to scroll down for more content
 */
export function ScrollIndicator({
  text = "Explore mais",
  targetId,
  delay = 1.4,
  className,
}: ScrollIndicatorProps) {
  const handleClick = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      className={cn("hidden pt-20 lg:block", className)}
    >
      <motion.button
        type="button"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="group flex flex-col items-center border-none bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-tecno-black-800 rounded-lg m-auto cursor-pointer"
        onClick={handleClick}
        aria-label={targetId ? `Rolar para ${targetId}` : "Rolar para baixo"}
      >
        <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-brand-primary/20 transition-colors duration-300 group-hover:border-brand-secondary/40">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="gradient-tecno-vertical h-3 w-1 rounded-full"
          />
        </div>
        <Text
          variant="muted"
          size="sm"
          className="mt-3 transition-colors duration-300 group-hover:text-white"
        >
          {text}
        </Text>
      </motion.button>
    </motion.div>
  );
}
