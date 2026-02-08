"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { BackgroundShapes } from "@/components/animated/background-shapes";
import { cn } from "@/lib/utils/utils";

interface HeroBaseProps {
  backgroundImage: string;
  gradientEndColor?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

interface HeroContentProps {
  children: ReactNode;
  centered?: boolean;
  className?: string;
}

/**
 * Base hero section component using composition pattern
 * Provides common structure and background for all hero sections
 *
 * @example
 * <HeroBase backgroundImage="/bg.webp" gradientEndColor="brand-primary/20">
 *   <HeroBase.Content>
 *     <HeroHeading firstLine="Welcome" secondLine="to Tecno Jr" />
 *     <HeroStats stats={statsData} />
 *   </HeroBase.Content>
 * </HeroBase>
 */
export function HeroBase({
  backgroundImage,
  gradientEndColor = "brand-primary/20",
  children,
  className,
  ariaLabel,
}: HeroBaseProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-screen items-center justify-center overflow-hidden pt-20 lg:pt-0",
        className,
      )}
      aria-label={ariaLabel}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          aria-hidden="true"
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 z-10 bg-linear-to-br from-brand-dark via-tecno-black-800 to-${gradientEndColor}`}
        />
      </div>

      {/* Animated Background Elements */}
      <BackgroundShapes />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

/**
 * Content wrapper for hero section with motion animations
 */
function HeroContent({
  children,
  centered = false,
  className,
}: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={cn("space-y-8", centered && "text-center", className)}
    >
      {children}
    </motion.div>
  );
}

HeroBase.Content = HeroContent;
