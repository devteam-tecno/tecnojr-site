"use client";

import Link from "next/link";
import { FadeUp } from "@/components/animated/motion-wrappers";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/utils";

interface CTASectionProps {
  title: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

/**
 * Reusable CTA section component
 * Consistent call-to-action pattern across multiple sections
 */
export function CTASection({
  title,
  buttonText = "Entre em contato",
  buttonHref = "/contato",
  className,
}: CTASectionProps) {
  return (
    <FadeUp className={cn("mt-16 text-center", className)}>
      <p className="mb-6 text-xl text-gray-300">{title}</p>
      <Button asChild variant="gradient-primary" size="lg">
        <Link href={buttonHref}>{buttonText}</Link>
      </Button>
    </FadeUp>
  );
}
