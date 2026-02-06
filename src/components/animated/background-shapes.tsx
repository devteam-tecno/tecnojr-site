"use client";

import { motion } from "framer-motion";
import { FloatingOrb } from "./floating-orb";

export function BackgroundShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Purple orbs */}
      <FloatingOrb
        size={100}
        color="rgba(145, 85, 235, 0.15)"
        duration={10}
        className="left-[-10%] top-[10%]"
      />
      <FloatingOrb
        size={100}
        color="rgba(145, 85, 235, 0.2)"
        duration={12}
        delay={2}
        className="right-[10%] top-[30%]"
      />

      {/* Blue orbs */}
      <FloatingOrb
        size={100}
        color="rgba(66, 117, 249, 0.15)"
        duration={11}
        delay={1}
        className="left-[20%] bottom-[20%]"
      />
      <FloatingOrb
        size={200}
        color="rgba(66, 117, 249, 0.2)"
        duration={9}
        delay={3}
        className="right-[-5%] bottom-[10%]"
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute left-[15%] top-[20%] h-32 w-32 rounded-lg border-2 border-tecno-purple-500/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  );
}
