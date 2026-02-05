"use client";

import { motion } from "framer-motion";
import { TecnoJrLogo } from "@/components/ui/tecnojr-logo";
import { SocialLinks } from "./social-links";

export function Description() {
  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-6">
          <TecnoJrLogo size="lg" />
        </div>
        <p className="mb-6 text-sm leading-relaxed text-gray-300">
          Transformando ideias em projetos de qualidade. Nossa missão é oferecer
          soluções tecnológicas seguras e práticas.
        </p>
        <SocialLinks />
      </motion.div>
    </div>
  );
}
