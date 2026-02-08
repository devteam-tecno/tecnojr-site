"use client";

import { motion } from "framer-motion";
import {
  FadeFromLeft,
  FadeFromRight,
  FadeUp,
} from "@/components/animated/motion-wrappers";
import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/section-container";
import { infiniteAnimations } from "@/lib/animation/animations";

/**
 * About section with two-column layout and overlapping card design.
 *
 * Layout:
 * - Left: Image placeholder with gradient background and overlay
 * - Right: Text content card with negative margin (-ml-16) for overlap effect
 * - Responsive: Stacked on mobile, side-by-side on large screens
 * - Section ID: #about for anchor navigation
 *
 * Design features:
 * - Background gradient: tecno-black-800 to gray-900/50
 * - Floating orb animation (20s duration, right side)
 * - Glow effect on text card hover
 * - Staggered animations: Left fades from left, right fades from right
 *
 * Content:
 * - Company founding (2002)
 * - Mission statement
 * - Services overview
 * - UESC connection
 *
 * @example
 * // Used in homepage
 * export default function HomePage() {
 *   return (
 *     <>
 *       <ServicesSection />
 *       <AboutSection />
 *       <ProjectsSection />
 *     </>
 *   );
 * }
 *
 * @see {@link infiniteAnimations} - Floating orb animation from @/lib/animations
 */
export function AboutSection() {
  return (
    <Section id="about" variant="reversed">
      {/* Background Effects - Refactored */}
      <div className="absolute inset-0">
        <motion.div
          {...infiniteAnimations.floatingOrb}
          transition={{
            ...infiniteAnimations.floatingOrb.transition,
            duration: 20,
          }}
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-linear-to-br from-tecno-purple-500/10 to-tecno-blue-500/10 blur-3xl"
        />
      </div>

      <SectionContainer>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content - Image Area - Refactored */}
          <FadeFromLeft className="relative">
            {/* Placeholder for image */}
            <div className="relative aspect-4/3 flex items-center justify-center overflow-hidden rounded-3xl border border-gray-700/30 bg-linear-to-br from-tecno-purple-500/20 via-gray-800/40 to-tecno-blue-500/20 backdrop-blur-sm">
              <div className="p-8 text-center">
                <p className="text-lg text-gray-400">Imagem da TecnoJr</p>
              </div>

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-tecno-purple-500/5 via-transparent to-tecno-blue-500/5" />
            </div>
          </FadeFromLeft>

          {/* Right Content - Text overlapping - Refactored */}
          <FadeFromRight delay={0.2} className="relative z-20 lg:-ml-16">
            {/* Card Background */}
            <div className="relative rounded-3xl p-8 transition-all duration-500 hover:border-tecno-purple-500/30 lg:p-12">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-tecno-purple-500/20 via-tecno-blue-500/20 to-tecno-purple-500/20 opacity-0 blur transition duration-500 group-hover:opacity-50" />

              <div className="relative">
                <h2 className="text-3xl font-bold leading-tight! sm:text-3xl lg:text-3xl xl:text-3xl">
                  <FadeFromLeft delay={0.3} className="block text-white">
                    Quem somos?
                  </FadeFromLeft>
                </h2>

                {/* Main Text - Refactored */}
                <FadeUp delay={0.4} className="mt-6 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-300">
                    <span className="font-semibold text-white">
                      Fundada em 2002, a Associação Empresa Júnior de Computação
                      - TecnoJr
                    </span>{" "}
                    foi criada como um projeto de extensão do curso de Ciência
                    da Computação da UESC.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-300">
                    Desde então, vem atuando na área de{" "}
                    <span className="font-semibold text-white">
                      desenvolvimento de sistemas
                    </span>{" "}
                    e aproximando o mundo acadêmico do empresarial.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-300">
                    Constituída por estudantes e professores universitários
                    apaixonados por tecnologia e inovação.
                  </p>
                </FadeUp>
              </div>
            </div>
          </FadeFromRight>
        </div>
      </SectionContainer>
    </Section>
  );
}
