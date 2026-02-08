/**
 * Centralized company information and organizational data
 *
 * This file serves as the single source of truth for all TecnoJr company information.
 * Update this file to change company details across the entire website.
 *
 * @module lib/config/company
 */

/**
 * Company organizational information
 */
export const COMPANY_INFO = {
  /** Company short name / brand name */
  name: "TecnoJr",

  /** Full legal/formal name */
  fullName: "Associação Empresa Júnior de Computação - TecnoJr",

  /** University affiliation */
  university: {
    acronym: "UESC",
    fullName: "Universidade Estadual de Santa Cruz",
  },

  /** Academic department */
  department: "Ciência da Computação",

  /** Year the company was founded */
  foundedYear: 2002,

  /** Main tagline/slogan */
  tagline: "Transformando ideias em projetos de qualidade",

  /** Alternative slogans for different contexts */
  slogans: {
    hero: "Sites e Sistemas que transformam Ideias em Realidade",
    footer: "Transformando ideias em projetos de qualidade",
  },

  /** Company descriptions in various lengths */
  description: {
    /** Short one-liner (for headers, cards, etc) */
    short: "Empresa Júnior de Computação da UESC",

    /** Medium description (for metadata, intros) */
    medium:
      "A TecnoJr é a empresa júnior do curso de Ciência da Computação da UESC. Desenvolvemos soluções tecnológicas inovadoras com qualidade e profissionalismo.",

    /** Long description (for about page, detailed sections) */
    long: "Fundada em 2002, a Associação Empresa Júnior de Computação - TecnoJr foi criada como um projeto de extensão do curso de Ciência da Computação da UESC. Desde então, vem atuando na área de desenvolvimento de sistemas e aproximando o mundo acadêmico do empresarial.",

    /** Extended description with mission context */
    extended:
      "Fundada em 2002, a TecnoJr é a Empresa Júnior de Computação da UESC que transforma ideias em soluções tecnológicas. Desenvolvemos sistemas web, aplicativos mobile e projetos personalizados com qualidade e profissionalismo. Nossa missão é aproximar o mundo acadêmico do empresarial, proporcionando experiência prática aos nossos membros enquanto entregamos valor real aos nossos clientes.",
  },
} as const;

/**
 * Calculate company age dynamically
 * @returns Number of years since founding
 */
export function getCompanyAge(): number {
  return new Date().getFullYear() - COMPANY_INFO.foundedYear;
}

/**
 * Get formatted company age string
 * @returns Formatted string like "24+ Anos"
 */
export function getCompanyAgeFormatted(): string {
  return `${getCompanyAge()}+ Anos`;
}

/**
 * Get full company name with university
 * @returns Formatted string like "TecnoJr - Empresa Júnior de Computação da UESC"
 */
export function getFullCompanyTitle(): string {
  return `${COMPANY_INFO.name} - Empresa Júnior de ${COMPANY_INFO.department} da ${COMPANY_INFO.university.acronym}`;
}
