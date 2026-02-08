"use client";

import { AnimatedLink } from "@/components/animated";
import { getSocialLinks } from "@/lib/config/social";

export function SocialLinks() {
  const socialLinks = getSocialLinks();
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <AnimatedLink
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            hoverEffect="lift"
            tapEffect
            className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/20 bg-linear-to-br from-zinc-800 to-zinc-900 text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:text-white"
          >
            <IconComponent className="h-4 w-4" />
          </AnimatedLink>
        );
      })}
    </div>
  );
}
