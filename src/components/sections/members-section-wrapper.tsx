/**
 * @file members-section-wrapper.tsx
 * @description Client component wrapper for MembersSection with Suspense boundary
 * Needed because useSearchParams requires client-side rendering
 */

"use client";

import { Suspense } from "react";
import { MembersSection } from "./members-section";

/**
 * Wrapper component that provides Suspense boundary for MembersSection
 * This is necessary because MembersSection uses useSearchParams which requires
 * a Suspense boundary in Next.js App Router
 */
export function MembersSectionWrapper() {
  return (
    <Suspense>
      <MembersSection />
    </Suspense>
  );
}
