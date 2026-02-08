import type { LucideIcon } from "lucide-react";
import type { ROLE_ID, SocialIconType } from "../constants";

// ============================================================================
// COMMON COMPONENT PROPS
// ============================================================================

/**
 * Standard props for components that display an icon with title and description
 * Consolidates 3 identical interfaces: FeatureCardProps, ServiceCardProps, StatItemProps
 */
export interface IconComponentProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Extended version with optional additional fields
 */
export interface ExtendedIconComponentProps extends IconComponentProps {
  className?: string;
  gradient?: "diagonal" | "animated" | "primary";
}

// ============================================================================
// MEMBER & SOCIAL TYPES
// ============================================================================

// Member social link type
export interface SocialLink {
  icon: SocialIconType;
  url: string;
}

// Team member type
export interface Member {
  name: string;
  roleId: ROLE_ID;
  role: string;
  img: string;
  links: SocialLink[];
}

// ============================================================================
// PROJECT TYPES
// ============================================================================

// Project types
export interface ExternalProject {
  title: string;
  description: string;
  link: string;
  img: string;
}

export interface InternalProject {
  title: string;
  author: string;
  link: string;
  img: string;
}

// ============================================================================
// GENERIC DATA HELPERS
// ============================================================================

/**
 * Base interface for data entities with title
 */
export interface DataEntity {
  title: string;
}

/**
 * Generic helper functions for data arrays
 * Consolidates duplicate getByTitle and getCount functions from features.ts, services.ts, projects.ts
 */
export interface DataHelpers<T extends DataEntity> {
  getByTitle: (title: string) => T | undefined;
  getCount: () => number;
  getAll: () => readonly T[];
}

/**
 * Factory function to create data helpers
 * Usage: const helpers = createDataHelpers(myDataArray);
 */
export function createDataHelpers<T extends DataEntity>(
  data: readonly T[],
): DataHelpers<T> {
  return {
    getByTitle: (title: string) => data.find((item) => item.title === title),
    getCount: () => data.length,
    getAll: () => data,
  };
}
