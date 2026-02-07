/**
 * @file hero-about-section.tsx
 * @description Hero section for the About page with company introduction and stats
 */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { BackgroundShapes } from "@/components/animated/background-shapes";
import { roles } from "@/lib/members";

const mainBg = "/assets/images/backgroundAbout.webp";

/**
 * Stats displayed in the hero section
 */
const stats = [
  { number: "22+", label: "Anos de Experiência" },
  { number: `${roles.total}`, label: "Membros Ativos" },
  { number: "200+", label: "Projetos Entregues" },
  { number: "100%", label: "Qualidade" },
];

/**
 * HeroAboutSection - Hero section for About page
 *
 * Features:
 * - Full viewport height with centered content
 * - Layered background: gradient overlay + image + animated shapes
 * - Company introduction text with highlighted keywords
 * - Stats grid (2x2 on mobile, 4 columns on desktop)
 * - CTA button with smooth scroll to members section
 * - Scroll indicator animation (desktop only)
 *
 * @example
 * ```tsx
 * import { HeroAboutSection } from '@/components/sections/hero-about-section';
 *
 * export default function AboutPage() {
 *   return (
 *     <>
 *       <HeroAboutSection />
 *       <IdealsSection />
 *       <MembersSection />
 *     </>
 *   );
 * }
 * ```
 */
export const HeroAboutSection = memo(function HeroAboutSection() {
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
              className="block text-white pt-16"
            >
              Quem é a
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block text-gradient-tecno"
            >
              TecnoJr?
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
              Fundada em{" "}
              <span className="relative font-semibold text-brand-secondary">
                2002
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left gradient-tecno-primary"
                />
              </span>
              , a{" "}
              <span className="relative font-semibold text-brand-primary">
                Empresa TecnoJr
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left gradient-tecno-secondary"
                />
              </span>{" "}
              foi criada como um projeto de extensão do curso de{" "}
              <span className="font-semibold text-white">
                Ciência da Computação da UESC
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              Desde então, vem atuando na área de{" "}
              <span className="font-semibold text-brand-primary">
                desenvolvimento de sistemas
              </span>{" "}
              e aproximando o{" "}
              <span className="font-semibold text-brand-secondary">
                mundo acadêmico do empresarial
              </span>
              . Atualmente é constituída por{" "}
              <span className="text-xl font-semibold text-white">
                {roles.total} membros
              </span>{" "}
              apaixonados por tecnologia e inovação.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mx-auto grid max-w-3xl grid-cols-2 gap-8 pt-12 sm:grid-cols-4"
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
                  className={`mb-1 text-3xl font-bold transition-transform duration-300 group-hover:scale-110 sm:text-4xl ${
                    index % 2 === 0
                      ? "text-brand-primary"
                      : "text-brand-secondary"
                  }`}
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
            className="flex justify-center pt-8"
          >
            <Link
              href="#membros"
              className="group inline-flex items-center rounded-full bg-linear-to-r from-brand-primary to-brand-secondary px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-brand-primary/50"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("membros")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Conheça nosso time</span>
              <motion.span
                className="ml-2 inline-block"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↓
              </motion.span>
            </Link>
          </motion.div>

          {/* Enhanced Scroll Indicator - Desktop Only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="hidden pt-20 lg:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="group flex cursor-pointer flex-col items-center"
              onClick={() =>
                document
                  .getElementById("ideais")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-brand-primary/20 transition-colors duration-300 group-hover:border-brand-secondary/40">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="h-3 w-1 rounded-full gradient-tecno-vertical"
                />
              </div>
              <p className="mt-3 text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">
                Conheça nossos ideais
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
