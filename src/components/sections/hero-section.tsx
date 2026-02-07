"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BackgroundShapes } from "@/components/animated/background-shapes";
import { Button } from "@/components/ui/buttons/button";

const mainBg = "/assets/images/backgroundHome.webp";

/**
 * Hero section component for homepage with full-screen layout and animations.
 *
 * Features:
 * - Full viewport height (min-h-screen) with centered content
 * - Layered background: gradient overlay + image + animated shapes
 * - Staggered text animations (fade + slide from left/right)
 * - Gradient-styled heading text with tecno colors
 * - CTA button with hover scale animation
 * - Responsive typography (4xl → 7xl on large screens)
 *
 * Background layers (bottom to top):
 * 1. Background image (backgroundHome.webp) at 40% opacity
 * 2. Gradient overlay (brand-dark → tecno-black-800 → brand-primary/20)
 * 3. Animated background shapes (BackgroundShapes component)
 * 4. Content (z-20)
 *
 * @example
 * // Usage in homepage
 * export default function HomePage() {
 *   return (
 *     <>
 *       <HeroSection />
 *       <FeaturesSection />
 *       {/* other sections *\/}
 *     </>
 *   );
 * }
 *
 * @see {@link BackgroundShapes} - Animated background decoration
 * @see {@link Button} - CTA button with gradient-primary variant
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-linear-to-br from-brand-dark via-tecno-black-800 to-brand-primary/20" />
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
          className="space-y-8"
        >
          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-tight! sm:text-5xl lg:text-7xl xl:text-7xl">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-white"
            >
              Sites e Sistemas
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-white"
            >
              que transformam
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block text-gradient-tecno"
            >
              Ideias em Realidade
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg font-medium leading-relaxed text-gray-300 sm:text-lg lg:text-lg"
          >
            A TecnoJr é a Empresa Júnior de Computação da UESC.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Button asChild variant="gradient-primary" size="xl">
                <Link href="/contato">
                  <span className="relative z-10">Contate-nos</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator - Desktop Only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="pt-20 hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="w-6 h-10 border-2 border-brand-primary/20 rounded-full flex items-center justify-center group-hover:border-brand-secondary/40 transition-colors duration-300">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1 h-3 gradient-tecno-vertical rounded-full"
                />
              </div>
              <p className="text-sm text-gray-400 mt-3 group-hover:text-white transition-colors duration-300">
                Explore nossos serviços
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
