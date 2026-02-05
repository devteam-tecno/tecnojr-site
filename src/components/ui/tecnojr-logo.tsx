import Image from "next/image";
import Link from "next/link";

interface TecnoJrLogoProps {
  size?: "sm" | "md" | "lg";
}

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
