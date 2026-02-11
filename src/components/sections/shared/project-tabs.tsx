"use client";

import { Briefcase, Heart } from "lucide-react";
import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { ResponsiveGrid } from "@/components/layout/responsive-grid";
import { ProjectCard } from "@/components/ui/cards/project-card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/navigation/tabs";
import type { ExternalProject, InternalProject } from "@/lib/types";

interface ProjectTabsProps {
  externalProjects: ExternalProject[];
  internalProjects: InternalProject[];
}

/**
 * Reusable project tabs component
 * Displays external and internal projects in separate tabs with animations
 */
export function ProjectTabs({
  externalProjects,
  internalProjects,
}: ProjectTabsProps) {
  return (
    <Tabs defaultValue="external" className="w-full">
      <TabsList className="flex flex-col mx-auto mb-12 sm:grid w-full max-w-2xl sm:grid-cols-2 gap-4 bg-transparent p-0">
        <TabsTrigger
          value="external"
          className="w-full rounded-full border border-gray-700/50 bg-gray-900/50 px-6 py-3 font-medium text-gray-300 backdrop-blur-sm transition-all data-[state=active]:border-transparent data-[state=active]:gradient-tecno-secondary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-brand-secondary/20 hover:border-brand-secondary/40 hover:bg-gray-800/60 hover:text-white"
        >
          <Briefcase className="mr-2 h-4 w-4" />
          Projetos Externos
        </TabsTrigger>
        <TabsTrigger
          value="internal"
          className="w-full rounded-full border border-gray-700/50 bg-gray-900/50 px-6 py-3 font-medium text-gray-300 backdrop-blur-sm transition-all data-[state=active]:border-transparent data-[state=active]:gradient-tecno-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-brand-primary/20 hover:border-brand-primary/40 hover:bg-gray-800/60 hover:text-white"
        >
          <Heart className="mr-2 h-4 w-4" />
          Projetos Internos
        </TabsTrigger>
      </TabsList>

      <TabsContent value="external" className="mt-0">
        <ResponsiveGrid cols={{ base: 1, md: 2, lg: 3 }} gap="md">
          {externalProjects.map((project, index) => (
            <StaggerFadeUp key={project.title} index={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageSrc={`/assets/img/projects/${project.img || "placeholder.png"}`}
                link={project.link}
                isInternal={false}
              />
            </StaggerFadeUp>
          ))}
        </ResponsiveGrid>
      </TabsContent>

      <TabsContent value="internal" className="mt-0">
        <ResponsiveGrid cols={{ base: 1, md: 2, lg: 3 }} gap="md">
          {internalProjects.map((project, index) => (
            <StaggerFadeUp key={project.title} index={index}>
              <ProjectCard
                title={project.title}
                description={`Desenvolvido por: ${project.author}`}
                imageSrc={`/assets/img/projects/${project.img || "placeholder.png"}`}
                link={project.link}
                isInternal={true}
              />
            </StaggerFadeUp>
          ))}
        </ResponsiveGrid>
      </TabsContent>
    </Tabs>
  );
}
