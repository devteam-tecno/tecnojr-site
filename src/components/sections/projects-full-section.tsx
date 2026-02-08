/**
 * @file projects-full-section.tsx
 * @description Full projects section for dedicated Projects page with CTA
 * Refactored to use shared components (Badge, GradientOrbs, ProjectTabs)
 */

"use client";

import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import { FadeUp } from "@/components/animated";
import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/section-container";
import { GradientOrbs } from "@/components/sections/shared/gradient-orbs";
import { ProjectTabs } from "@/components/sections/shared/project-tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/buttons/button";
import { externalProjects, internalProjects } from "@/lib/data/projects";
import { SectionTitle } from "./section-title";

/**
 * ProjectsFullSection - Full-page projects section with tabs and CTA
 */
export const ProjectsFullSection = memo(function ProjectsFullSection() {
  const totalProjects = externalProjects.length + internalProjects.length;

  return (
    <Section id="projetos" variant="dark">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Gradient Orbs */}
      <GradientOrbs
        orbs={[
          { position: "top-left", size: "md", intensity: "low" },
          { position: "bottom-right", size: "lg", intensity: "medium" },
        ]}
      />

      <SectionContainer>
        {/* Section Header */}
        <div className="mb-20 text-center">
          <Badge variant="primary">
            <Rocket className="mr-2 h-4 w-4 text-brand-primary" />
            Nosso Portfolio
          </Badge>

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
        <ProjectTabs
          externalProjects={externalProjects}
          internalProjects={internalProjects}
        />

        {/* CTA Section */}
        <FadeUp delay={0.2} className="mt-20 text-center">
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
        </FadeUp>
      </SectionContainer>
    </Section>
  );
});
