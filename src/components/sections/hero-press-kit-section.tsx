/**
 * @file hero-press-kit-section.tsx
 * @description Hero section for the Press Kit page with brand assets introduction
 */

"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import { BackgroundShapes } from "@/components/animated/background-shapes";
import { Button } from "@/components/ui/button";

const mainBg = "/assets/images/backgroundPressKit.webp";

/**
 * HeroPressKitSection - Hero section for Press Kit page
 *
 * Features:
 * - Full viewport height with centered content
 * - Layered background: gradient overlay + image + animated shapes
 * - Press Kit introduction text
 * - CTA button with smooth scroll to logos section
 * - Scroll indicator animation (desktop only)
 *
 * @example
 * ```tsx
 * import { HeroPressKitSection } from '@/components/sections/hero-press-kit-section';
 *
 * export default function PressKitPage() {
 *   return (
 *     <>
 *       <HeroPressKitSection />
 *       <LogosSection />
 *       <AlternativesSection />
 *     </>
 *   );
 * }
 * ```
 */
export const HeroPressKitSection = memo(function HeroPressKitSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-linear-to-br from-brand-dark via-tecno-black-800 to-brand-secondary/20" />
        <div
          className="h-full w-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${mainBg})`,
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <BackgroundShapes />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-center"
        >
          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-tight! sm:text-5xl lg:text-7xl xl:text-8xl">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-white pt-16"
            >
              Press
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block text-gradient-tecno"
            >
              Kit
            </motion.span>
          </h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto max-w-3xl space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
              Kit de imprensa com todos os recursos visuais da marca TecnoJr.
              <br />
              Logos, ícones, tipografia e cores para utilização em materiais
              institucionais e de comunicação.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button asChild variant="gradient-primary" size="xl">
              <Link href="#logos">Explorar Assets</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <Link
          href="#logos"
          className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
          aria-label="Rolar para logos"
        >
          <span className="text-sm font-medium">Role para baixo</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
});
