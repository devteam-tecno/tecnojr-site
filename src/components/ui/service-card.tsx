"use client";

import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden border-2 border-transparent hover:border-gradient hover-glow transition-all duration-300 bg-card/80 backdrop-blur-sm h-full">
      <CardHeader className="space-y-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full gradient-tecno-diagonal text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-10 w-10" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
