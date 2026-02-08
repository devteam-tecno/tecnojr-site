/**
 * Centralized company statistics and benefits
 *
 * This file serves as the single source of truth for all TecnoJr statistics,
 * metrics, and benefits displayed across the website.
 *
 * @module lib/config/stats
 */

import type { LucideIcon } from "lucide-react";
import { Clock, Handshake, Rocket } from "lucide-react";
import { roles } from "@/lib/data/members";
import { externalProjects, internalProjects } from "@/lib/data/projects";
import { getCompanyAge } from "./company";

/**
 * Company statistics and metrics
 */
export const COMPANY_STATS = {
  /** Years of experience (calculated dynamically from founding year) */
  get yearsOfExperience() {
    return getCompanyAge();
  },

  /** Formatted years string for display (e.g., "24+") */
  get yearsOfExperienceFormatted() {
    return `${getCompanyAge()}+`;
  },

  /** Total number of projects delivered */
  projectsDelivered: 200,

  /** Formatted projects string for display */
  get projectsDeliveredFormatted() {
    return `${COMPANY_STATS.projectsDelivered}+`;
  },

  /** Client satisfaction percentage */
  clientSatisfaction: 100,

  /** Formatted satisfaction string for display */
  get clientSatisfactionFormatted() {
    return `${COMPANY_STATS.clientSatisfaction}%`;
  },

  /** Quality percentage */
  quality: 100,

  /** Formatted quality string for display */
  get qualityFormatted() {
    return `${COMPANY_STATS.quality}%`;
  },

  /** Total active members (from members.ts) */
  get activeMembersCount() {
    return roles.total;
  },

  /** Formatted active members string for display */
  get activeMembersFormatted() {
    return `${roles.total}`;
  },

  /** Total external projects (calculated from projects.ts) */
  get externalProjectsCount() {
    return externalProjects.length;
  },

  /** Formatted external projects string for display */
  get externalProjectsFormatted() {
    return `${externalProjects.length}+`;
  },

  /** Total internal projects (calculated from projects.ts) */
  get internalProjectsCount() {
    return internalProjects.length;
  },

  /** Formatted internal projects string for display */
  get internalProjectsFormatted() {
    return `${internalProjects.length}+`;
  },

  /** Total projects (external + internal) */
  get totalProjectsCount() {
    return externalProjects.length + internalProjects.length;
  },

  /** Formatted total projects string for display */
  get totalProjectsFormatted() {
    return `${externalProjects.length + internalProjects.length}`;
  },
} as const;

/**
 * Stat item structure for hero sections
 */
export interface StatItem {
  number: string;
  label: string;
}

/**
 * Get stats for About page hero
 * @returns Array of stat items for About hero section
 */
export function getAboutHeroStats(): StatItem[] {
  return [
    {
      number: COMPANY_STATS.yearsOfExperienceFormatted,
      label: "Anos de Experiência",
    },
    {
      number: COMPANY_STATS.activeMembersFormatted,
      label: "Membros Ativos",
    },
    {
      number: COMPANY_STATS.projectsDeliveredFormatted,
      label: "Projetos Entregues",
    },
    {
      number: COMPANY_STATS.qualityFormatted,
      label: "Qualidade",
    },
  ];
}

/**
 * Get stats for Projects page hero
 * @returns Array of stat items for Projects hero section
 */
export function getProjectsHeroStats(): StatItem[] {
  return [
    {
      number: COMPANY_STATS.externalProjectsFormatted,
      label: "Projetos Externos",
    },
    {
      number: COMPANY_STATS.internalProjectsFormatted,
      label: "Projetos Internos",
    },
    {
      number: COMPANY_STATS.totalProjectsFormatted,
      label: "Total de Projetos",
    },
    {
      number: COMPANY_STATS.clientSatisfactionFormatted,
      label: "Satisfação",
    },
  ];
}

/**
 * Benefit item structure
 */
export interface BenefitItem {
  icon: LucideIcon;
  label: string;
}

/**
 * Budget/contact benefits for value propositions
 */
export const BUDGET_BENEFITS: BenefitItem[] = [
  {
    icon: Rocket,
    label: "Orçamento 100% Gratuito",
  },
  {
    icon: Clock,
    label: "Resposta em até 24h",
  },
  {
    icon: Handshake,
    label: "Consultoria Especializada",
  },
] as const;

/**
 * Get all budget benefits
 * @returns Array of benefit items
 */
export function getBudgetBenefits(): BenefitItem[] {
  return BUDGET_BENEFITS as unknown as BenefitItem[];
}
