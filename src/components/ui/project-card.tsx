"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

/**
 * Project card component properties.
 */
interface ProjectCardProps {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** Path to project image in /public/assets/img/projects/ */
  imageSrc: string;
  /** Optional link to project (external URL or internal route) */
  link?: string;
  /** Whether project is internal (TecnoJR member project) or external (client project) */
  isInternal?: boolean;
}

/**
 * Project card component displaying portfolio projects.
 *
 * Shows project thumbnail, title, description, and type badge (Client/Internal).
 * For external projects with links, renders as clickable link opening in new tab.
 * Features gradient glow on hover and smooth scale animation.
 *
 * @param title - Project name
 * @param description - Brief project description
 * @param imageSrc - Image filename (loads from /public/assets/img/projects/)
 * @param link - Project URL (optional)
 * @param isInternal - True for internal projects, false for client projects (default: false)
 *
 * @returns Rendered project card, wrapped in Link if external project
 *
 * @example
 * ```tsx
 * import { ProjectCard } from '@/components/ui/project-card';
 *
 * // External client project
 * <ProjectCard
 *   title="NASA Space Apps"
 *   description="Website for NASA Space Apps Challenge"
 *   imageSrc="/assets/img/projects/nasaapps.png"
 *   link="https://nasa.spaceterra.org/"
 *   isInternal={false}
 * />
 *
 * // Internal project (no external link)
 * <ProjectCard
 *   title="COLCIC UESC"
 *   description="Internal tool for university"
 *   imageSrc="/assets/img/projects/colcic.png"
 *   link="https://colcic.vercel.app"
 *   isInternal={true}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Using with data from lib/projects.ts
 * import { externalProjects } from '@/lib/projects';
 *
 * <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 *   {externalProjects.map((project) => (
 *     <ProjectCard
 *       key={project.title}
 *       title={project.title}
 *       description={project.description}
 *       imageSrc={`/assets/img/projects/${project.img}`}
 *       link={project.link}
 *       isInternal={false}
 *     />
 *   ))}
 * </div>
 * ```
 *
 * @see {@link ../../../lib/projects.ts} for project data
 * @see {@link ../../../lib/types.ts} for ExternalProject and InternalProject types
 */
export function ProjectCard({
  title,
  description,
  imageSrc,
  link,
  isInternal = false,
}: ProjectCardProps) {
  const cardContent = (
    <div className="group relative h-full">
      {/* Gradient Glow Border Effect on Hover */}
      <div className="absolute -inset-px rounded-2xl gradient-tecno-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <Card className="relative pt-0 h-full overflow-hidden border-gray-800/50 bg-linear-to-b! from-gray-900/80! to-gray-900/60! backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-brand-primary/30">
        {/* Project Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent" />

          {/* Project Type Badge */}
          {link && (
            <div
              className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${
                isInternal
                  ? "border-brand-primary/20 bg-brand-primary/10 text-brand-primary"
                  : "border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary"
              }`}
            >
              {isInternal ? "Interno" : "Cliente"}
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="flex items-center justify-between text-white transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:bg-clip-text group-hover:text-transparent">
            <span>{title}</span>
            {link && !isInternal && (
              <ExternalLink className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-brand-primary" />
            )}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription className="line-clamp-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );

  if (link && !isInternal) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
