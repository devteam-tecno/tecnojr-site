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

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
  isInternal?: boolean;
}

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

      <Card className="relative pt-0 h-full overflow-hidden border-gray-800/50 !bg-gradient-to-b !from-gray-900/80 !to-gray-900/60 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-brand-primary/30">
        {/* Project Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

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
          <CardTitle className="flex items-center justify-between text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:bg-clip-text group-hover:text-transparent">
            <span>{title}</span>
            {link && !isInternal && (
              <ExternalLink className="h-4 w-4 flex-shrink-0 text-gray-400 transition-colors group-hover:text-brand-primary" />
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
