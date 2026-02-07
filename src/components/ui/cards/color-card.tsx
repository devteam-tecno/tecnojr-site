"use client";

/**
 * ColorCard component for displaying brand colors
 *
 * Shows color name with hex and RGB values on a background
 * of the color itself. Used in Press Kit color showcase section.
 *
 * @param name - Color name (e.g., "Azul", "Roxo")
 * @param hex - Hexadecimal color value (e.g., "#4275F9")
 * @param rgb - RGB color value (e.g., "rgb(66, 117, 249)")
 * @param textColor - Text color for readability (default: "#fff")
 *
 * @returns Rendered color card with color swatch and values
 *
 * @example
 * ```tsx
 * import { ColorCard } from '@/components/ui/cards/color-card';
 *
 * <ColorCard
 *   name="Azul"
 *   hex="#4275F9"
 *   rgb="rgb(66, 117, 249)"
 * />
 *
 * <ColorCard
 *   name="Branco"
 *   hex="#FFFFFF"
 *   rgb="rgb(255, 255, 255)"
 *   textColor="#232323"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Using with data from lib/press-kit.ts
 * import { colors } from '@/lib/press-kit';
 *
 * {colors.map((color) => (
 *   <ColorCard
 *     key={color.name}
 *     name={color.name}
 *     hex={color.hex}
 *     rgb={color.rgb}
 *     textColor={color.textColor}
 *   />
 * ))}
 * ```
 *
 * @see {@link ../../../lib/press-kit.ts} for color data
 */
export interface ColorCardProps {
  name: string;
  hex: string;
  rgb: string;
  textColor?: string;
}

export function ColorCard({
  name,
  hex,
  rgb,
  textColor = "#fff",
}: ColorCardProps) {
  return (
    <div
      className="flex min-w-75 flex-1 flex-col justify-between rounded-2xl border border-gray-700/30 p-6 h-40 transition-transform duration-300 hover:scale-105"
      style={{ backgroundColor: hex, color: textColor }}
    >
      {/* Color Name */}
      <div className="text-3xl font-semibold">{name}</div>

      {/* Color Values */}
      <div className="flex flex-col gap-1">
        <p className="text-xl font-normal opacity-80">{hex}</p>
        <p className="text-xl font-normal opacity-80">{rgb}</p>
      </div>
    </div>
  );
}
