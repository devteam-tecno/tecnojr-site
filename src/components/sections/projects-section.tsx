"use client";

import { motion } from "framer-motion";
import { Briefcase, Heart } from "lucide-react";
import { memo } from "react";
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
 * Projects section with tabs for External/Internal project categories.
 *
 * Features:
 * - Two-tab interface (External Projects / Internal Projects)
 * - 3-column responsive grid of ProjectCards
 * - Staggered fade-in animations on tab change
 * - Badge icon with "Portfolio" label
 * - Section ID: #projects for anchor navigation
 *
 * Tab specifics:
 * - External: Briefcase icon, secondary gradient, external client projects
 * - Internal: Heart icon, primary gradient, TecnoJr internal projects
 * - Custom styled TabsTriggers with rounded-full borders and gradients on active
 *
 * Grid layout:
 * - 1 column on mobile
 * - 2 columns on tablet (md:)
 * - 3 columns on desktop (lg:)
 *
 * @example
 * // Used in homepage
 * export default function HomePage() {
 *   return (
 *     <>
 *       <AboutSection />
 *       <ProjectsSection />
 *       <BudgetSection />
 *     </>
 *   );
 * }
 *
 * @see {@link externalProjects} - External client projects from @/lib/projects
 * @see {@link internalProjects} - TecnoJr internal projects from @/lib/projects
 * @see {@link ProjectCard} - Individual project card with image and link
 */
export const ProjectsSection = memo(function ProjectsSection() {
  return (
    <section id="projects" className="py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Refactored */}
        <div className="mb-20 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-brand-primary/20 bg-linear-to-r from-brand-primary/10 to-brand-secondary/10 px-6 py-3 text-sm text-gray-300 backdrop-blur-sm">
            <svg
              role="img"
              aria-label="Portfolio icon"
              className="mr-2 h-4 w-4 text-brand-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            Portfolio
          </div>

          <SectionTitle
            firstLine="Projetos que fazem"
            secondLine="a diferença"
            className="mb-6"
          />
        </div>

        {/* Projects Tabs */}
        <Tabs defaultValue="external" className="w-full">
          <TabsList className="mb-12 grid w-full max-w-2xl mx-auto grid-cols-2 gap-4 bg-transparent p-0">
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
      </div>
    </section>
  );
});
