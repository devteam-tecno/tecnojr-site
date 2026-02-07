/**
 * @file hero-projects-section.tsx
 * @description Hero section for the Projects page with stats and smooth scroll CTA
 */

"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { memo } from "react";
import { BackgroundShapes } from "@/components/animated/background-shapes";
import { Button } from "@/components/ui/buttons/button";
import { externalProjects, internalProjects } from "@/lib/projects";

const mainBg = "/assets/images/backgroundHome.webp";

/**
 * Stats displayed in the hero section
 */
const stats = [
  {
    number: `${externalProjects.length}+`,
    label: "Projetos Externos",
    color: "brand-secondary",
  },
  {
    number: `${internalProjects.length}+`,
    label: "Projetos Internos",
    color: "brand-primary",
  },
  {
    number: `${externalProjects.length + internalProjects.length}`,
    label: "Total de Projetos",
    color: "brand-secondary",
  },
  { number: "100%", label: "Qualidade", color: "brand-primary" },
];

/**
 * HeroProjectsSection - Hero section for Projects page
 *
 * Features:
 * - Full viewport height with centered content
 * - Layered background: gradient overlay + image + animated shapes
 * - Project introduction text with highlighted keywords
 * - Stats grid (2x2 on mobile, 4 columns on desktop)
 * - CTA button with smooth scroll to projects section
 * - Scroll indicator animation (desktop only)
 *
 * Stats:
 * - Dynamically calculated from lib/projects data
 * - External projects count
 * - Internal projects count
 * - Total projects
 * - 100% quality guarantee
 *
 * @example
 * ```tsx
 * import { HeroProjectsSection } from '@/components/sections/hero-projects-section';
 *
 * export default function ProjectsPage() {
 *   return (
 *     <>
 *       <HeroProjectsSection />
 *       <ProjectsFullSection />
 *     </>
 *   );
 * }
 * ```
 *
 * @see {@link BackgroundShapes} - Animated background decoration
 * @see {@link externalProjects} - External client projects data
 * @see {@link internalProjects} - Internal team projects data
 */
export const HeroProjectsSection = memo(function HeroProjectsSection() {
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
          className="space-y-8 text-center"
        >
          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-tight! sm:text-5xl lg:text-7xl xl:text-8xl">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block pt-16 text-white"
            >
              Conheça nossos
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block text-gradient-tecno"
            >
              Sonhos Realizados
            </motion.span>
          </h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto max-w-5xl space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
              A{" "}
              <span className="relative font-semibold text-brand-primary">
                TecnoJr
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left gradient-tecno-primary"
                />
              </span>{" "}
              investe fundo em{" "}
              <span className="relative font-semibold text-brand-secondary">
                capacitações
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left gradient-tecno-secondary"
                />
              </span>{" "}
              de nossos desenvolvedores para oferecer aos nossos clientes a{" "}
              <span className="font-semibold text-white">
                qualidade e confiança
              </span>{" "}
              que eles precisam.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              Confira quem já confiou em nossas soluções e os projetos pessoais
              de nossos membros.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mx-auto grid max-w-4xl grid-cols-2 gap-8 pt-12 sm:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="group text-center"
              >
                <div
                  className={`mb-1 text-3xl font-bold text-${stat.color} transition-transform duration-300 group-hover:scale-110 sm:text-4xl`}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-block"
            >
              <Button
                variant="gradient-primary"
                size="xl"
                onClick={() =>
                  document
                    .getElementById("projetos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10">Explorar Projetos</span>
                <ArrowDown className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator - Desktop Only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="hidden pt-16 lg:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="group flex cursor-pointer flex-col items-center"
              onClick={() =>
                document
                  .getElementById("projetos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-brand-primary/20 transition-colors duration-300 group-hover:border-brand-secondary/40">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                  className="gradient-tecno-vertical h-3 w-1 rounded-full"
                />
              </div>
              <p className="mt-3 text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">
                Veja nossos projetos
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
