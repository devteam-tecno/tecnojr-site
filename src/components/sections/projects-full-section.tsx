/**
 * @file projects-full-section.tsx
 * @description Full projects section for dedicated Projects page with CTA
 */

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Heart, Rocket } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import { Button } from "@/components/ui/buttons/button";
import { ProjectCard } from "@/components/ui/cards/project-card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/navigation/tabs";
import { externalProjects, internalProjects } from "@/lib/projects";
import { SectionTitle } from "./section-title";

/**
 * ProjectsFullSection - Full-page projects section with tabs and CTA
 *
 * Features:
 * - Badge with "Portfolio" label and rocket icon
 * - Section title with gradient styling
 * - Project count display (total projects)
 * - Two-tab interface (External Projects / Internal Projects)
 * - 3-column responsive grid of ProjectCards
 * - Staggered fade-in animations on tab change
 * - Call-to-action section with link to contact page
 * - Section ID: #projetos for anchor navigation
 *
 * Tab specifics:
 * - External: Briefcase icon, secondary gradient, client projects (7 items)
 * - Internal: Heart icon, primary gradient, TecnoJr internal projects (5 items)
 * - Custom styled TabsTriggers with rounded-full borders and gradients on active
 *
 * Grid layout:
 * - 1 column on mobile
 * - 2 columns on tablet (md:)
 * - 3 columns on desktop (lg:)
 *
 * CTA Section:
 * - Card with gradient background
 * - Encouraging message for potential clients
 * - Button linking to /contato page
 *
 * @example
 * ```tsx
 * import { ProjectsFullSection } from '@/components/sections/projects-full-section';
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
 * @see {@link externalProjects} - External client projects from @/lib/projects
 * @see {@link internalProjects} - TecnoJr internal projects from @/lib/projects
 * @see {@link ProjectCard} - Individual project card with image and link
 * @see {@link SectionTitle} - Gradient section title component
 */
export const ProjectsFullSection = memo(function ProjectsFullSection() {
  const totalProjects = externalProjects.length + internalProjects.length;

  return (
    <section
      id="projetos"
      className="relative overflow-hidden bg-tecno-black-800 py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(145, 85, 235, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(66, 117, 249, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Gradient Orbs */}
        <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-linear-to-br from-brand-primary/5 to-brand-secondary/5 blur-3xl" />
        <div className="absolute bottom-32 right-10 h-96 w-96 rounded-full bg-linear-to-br from-brand-secondary/8 to-brand-primary/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-brand-primary/20 bg-linear-to-r from-brand-primary/10 to-brand-secondary/10 px-6 py-3 text-sm text-gray-300 backdrop-blur-sm">
            <Rocket className="mr-2 h-4 w-4 text-brand-primary" />
            Nosso Portfolio
          </div>

          <SectionTitle
            firstLine="Projetos que fazem"
            secondLine="a diferença"
            className="mb-8"
          />

          {/* Description */}
          <div className="mb-12 space-y-4">
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              <span className="text-2xl font-bold text-white">
                {totalProjects} projetos
              </span>{" "}
              desenvolvidos com paixão e inovação
            </p>
            <p className="mx-auto max-w-2xl text-gray-400">
              Descubra os sonhos que transformamos em realidade
            </p>
          </div>
        </div>

        {/* Projects Tabs */}
        <Tabs defaultValue="external" className="w-full">
          <TabsList className="mx-auto mb-12 grid w-full max-w-2xl grid-cols-2 gap-4 bg-transparent p-0">
            <TabsTrigger
              value="external"
              className="rounded-full border border-gray-700/50 bg-gray-900/50 px-6 py-3 font-medium text-gray-300 backdrop-blur-sm transition-all data-[state=active]:border-transparent data-[state=active]:gradient-tecno-secondary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-brand-secondary/20 hover:border-brand-secondary/40 hover:bg-gray-800/60 hover:text-white"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Projetos Externos
            </TabsTrigger>
            <TabsTrigger
              value="internal"
              className="rounded-full border border-gray-700/50 bg-gray-900/50 px-6 py-3 font-medium text-gray-300 backdrop-blur-sm transition-all data-[state=active]:border-transparent data-[state=active]:gradient-tecno-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-brand-primary/20 hover:border-brand-primary/40 hover:bg-gray-800/60 hover:text-white"
            >
              <Heart className="mr-2 h-4 w-4" />
              Projetos Internos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="external" className="mt-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {externalProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageSrc={`/assets/img/projects/${project.img || "placeholder.png"}`}
                    link={project.link}
                    isInternal={false}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="internal" className="mt-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {internalProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={`Desenvolvido por: ${project.author}`}
                    imageSrc={`/assets/img/projects/${project.img || "placeholder.png"}`}
                    link={project.link}
                    isInternal={true}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-3xl border border-gray-700/50 bg-linear-to-r from-gray-900/50 to-gray-800/50 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Tem um sonho para realizar?
            </h3>
            <p className="mb-6 text-gray-400">
              Vamos transformar sua ideia em realidade com qualidade e inovação
            </p>
            <Button asChild variant="gradient-primary" size="lg">
              <Link href="/contato" className="group">
                <Rocket className="mr-2 h-4 w-4" />
                <span>Iniciar Projeto</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
