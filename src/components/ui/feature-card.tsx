"use client";

import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative h-full">
      {/* Gradient Glow Border Effect on Hover */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-tecno-purple via-tecno-blue to-tecno-purple opacity-0 blur transition duration-500 group-hover:opacity-50" />

      <Card className="relative h-full overflow-hidden border-gray-700/50 !bg-gradient-to-br !from-gray-900/90 !via-gray-800/80 !to-gray-900/90 backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:border-transparent">
        <CardHeader className="space-y-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-tecno-purple to-tecno-blue text-white shadow-lg shadow-tecno-purple/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-tecno-purple/40">
            <Icon className="h-7 w-7" />
          </div>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
            {description}
          </CardDescription>
        </CardContent>

        {/* Hover Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-tecno-purple/5 to-tecno-blue/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </Card>
    </div>
  );
}
