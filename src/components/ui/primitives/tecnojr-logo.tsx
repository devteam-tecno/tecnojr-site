import Image from "next/image";
import Link from "next/link";

/**
 * Props for the TecnoJrLogo component.
 *
 * @property size - Logo size variant with responsive scaling (sm: 6→8, md: 8→10, lg: 10→12)
 */
interface TecnoJrLogoProps {
  size?: "sm" | "md" | "lg";
}

/**
 * TecnoJr brand logo component with automatic Next.js Link and responsive sizing.
 *
 * Always displays the white-blue logo variant from /assets/logo/ and links to homepage.
 * Uses Next.js Image component with priority loading for above-the-fold placement.
 * Responsive sizing automatically increases on lg breakpoint.
 *
 * @example
 * // Default size in header
 * <TecnoJrLogo />
 *
 * @example
 * // Small logo in footer
 * <TecnoJrLogo size="sm" />
 *
 * @example
 * // Large logo for landing page hero
 * <TecnoJrLogo size="lg" />
 */
const logoSrc = "/assets/logo/tecnojr-logo-white-blue.png";

const sizeClasses = {
  sm: "h-6 w-auto lg:h-8",
  md: "h-8 w-auto lg:h-10",
  lg: "h-10 w-auto lg:h-12",
} as const;

export function TecnoJrLogo({ size = "md" }: TecnoJrLogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logoSrc}
        alt="Logo TecnoJr"
        width={200}
        height={48}
        className={sizeClasses[size]}
        priority
      />
    </Link>
  );
}
