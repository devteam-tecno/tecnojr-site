"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/utils";

/**
 * AssetCard component for displaying downloadable brand assets
 *
 * Used to showcase logos, icons, and typography with pattern backgrounds
 * and direct download links for SVG and PNG formats.
 *
 * @param name - Asset display name (e.g., "Logo branca")
 * @param path - Asset path without extension (e.g., "/assets/logo/tecnojr-logo-white")
 * @param inverted - Use white pattern background for dark logos (default: false)
 *
 * @returns Rendered asset card with image preview and download links
 *
 * @example
 * ```tsx
 * import { AssetCard } from '@/components/ui/cards/asset-card';
 *
 * <AssetCard
 *   name="Logo branca"
 *   path="/assets/logo/tecnojr-logo-white"
 * />
 *
 * <AssetCard
 *   name="Logo preta"
 *   path="/assets/logo/tecnojr-logo-black"
 *   inverted
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Using with data from lib/press-kit.ts
 * import { fullLogos } from '@/lib/press-kit';
 *
 * {fullLogos.map((logo) => (
 *   <AssetCard
 *     key={logo.name}
 *     name={logo.name}
 *     path={logo.path}
 *     inverted={logo.inverted}
 *   />
 * ))}
 * ```
 *
 * @see {@link ../../../lib/press-kit.ts} for asset data
 */
export interface AssetCardProps {
  name: string;
  path: string;
  inverted?: boolean;
}

export function AssetCard({ name, path, inverted = false }: AssetCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-w-75 flex-1 items-center justify-center",
        "h-40 rounded-2xl border border-gray-700/30 p-4",
        "transition-all duration-300 hover:border-gray-600/50",
        inverted
          ? "bg-[url('/assets/images/pattern_white.webp')]"
          : "bg-[url('/assets/images/pattern_black.webp')]",
        "bg-size-[30px_30px]",
      )}
    >
      {/* Asset Image */}
      <Image
        src={`${path}.png`}
        alt={name}
        width={280}
        height={120}
        className="max-h-30 max-w-70 object-contain"
        loading="lazy"
      />

      {/* Download Links */}
      <div className="absolute bottom-4 right-4 flex gap-4 text-sm">
        <a
          href={`${path}.svg`}
          download
          className={cn(
            "font-semibold opacity-80 transition-opacity hover:opacity-100",
            inverted ? "text-tecno-blue-500" : "text-white",
          )}
          aria-label={`Download ${name} em formato SVG`}
        >
          .svg
        </a>
        <a
          href={`${path}.png`}
          download
          className={cn(
            "font-semibold opacity-80 transition-opacity hover:opacity-100",
            inverted ? "text-tecno-blue-500" : "text-white",
          )}
          aria-label={`Download ${name} em formato PNG`}
        >
          .png
        </a>
      </div>
    </div>
  );
}
