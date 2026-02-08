/**
 * useReducedMotion Hook
 *
 * Detects user's motion preferences via CSS media query.
 * Returns true if user prefers reduced motion.
 *
 * WCAG 2.3.3 (Animation from Interactions) - Level AAA
 * WCAG 2.2.2 (Pause, Stop, Hide) - Level A
 *
 * Usage: Use this hook to conditionally disable or simplify animations
 * for users with vestibular disorders or motion sensitivity.
 *
 * @example
 * const reducedMotion = useReducedMotion();
 *
 * <motion.div
 *   animate={reducedMotion ? {} : { opacity: [0, 1] }}
 * />
 */

"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") {
      return;
    }

    // Create media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
