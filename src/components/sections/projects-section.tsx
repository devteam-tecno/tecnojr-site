"use client";

import { memo } from "react";
import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/section-container";
import { ProjectTabs } from "@/components/sections/shared/project-tabs";
import { Badge } from "@/components/ui/badge";
import { externalProjects, internalProjects } from "@/lib/data/projects";
import { SectionTitle } from "./section-title";

/**
 * Projects section with tabs for External/Internal project categories.
 * Refactored to use shared components (Badge, ProjectTabs)
 *
 * @see {@link Badge} - Reusable badge component
 * @see {@link ProjectTabs} - Shared tabs component for projects
 */
export const ProjectsSection = memo(function ProjectsSection() {
  return (
    <Section id="projetos" variant="dark">
      <SectionContainer>
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 mb-10 lg:mb-20 text-center">
          <Badge variant="primary">
            <svg
              aria-hidden="true"
              className="mr-2 h-4 w-4 text-brand-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            Portfolio
          </Badge>

          <SectionTitle
            firstLine="Projetos que fazem"
            secondLine="a diferença"
            className="mb-6"
          />
        </div>

        {/* Projects Tabs */}
        <ProjectTabs
          externalProjects={externalProjects}
          internalProjects={internalProjects}
        />
      </SectionContainer>
    </Section>
  );
});
