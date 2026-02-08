import { cn } from "@/lib/utils/utils";

interface BackgroundPatternProps {
  dotColor1?: string;
  dotColor2?: string;
  dotSize?: string;
  spacing?: string;
  opacity?: number;
  className?: string;
}

/**
 * Reusable background dot pattern component
 * Creates radial gradient dots for visual texture
 */
export function BackgroundPattern({
  dotColor1 = "#9155EB",
  dotColor2 = "#4275F9",
  dotSize = "1px",
  spacing = "60px",
  opacity = 0.05,
  className,
}: BackgroundPatternProps) {
  const backgroundImage = `radial-gradient(circle at 25% 75%, ${dotColor1} ${dotSize}, transparent ${dotSize}), radial-gradient(circle at 75% 25%, ${dotColor2} ${dotSize}, transparent ${dotSize})`;

  return (
    <div className={cn("absolute inset-0", className)} style={{ opacity }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage,
          backgroundSize: `${spacing} ${spacing}`,
        }}
      />
    </div>
  );
}
