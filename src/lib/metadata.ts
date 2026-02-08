/**
 * Centralized metadata generation utilities
 *
 * This module provides helpers to generate consistent metadata across all pages
 * using centralized company information, keywords, and social links.
 *
 * @module lib/metadata
 */

import type { Metadata } from "next";
import { COMPANY_INFO, getFullCompanyTitle } from "./config/company";
import { SEO_CONTENT } from "./config/content";
import { SOCIAL_METADATA } from "./config/social";

/**
 * Metadata parameters for page-specific customization
 */
interface MetadataParams {
  /** Page title (will be appended to template) */
  title?: string;
  /** Page description */
  description?: string;
  /** OpenGraph image URL */
  image?: string;
  /** Canonical URL */
  url?: string;
  /** Additional keywords for the page */
  keywords?: string[];
  /** Page type (article, website, etc) */
  type?: "website" | "article" | "profile";
}

/**
 * Default metadata configuration
 */
const defaultMetadata = {
  title: getFullCompanyTitle(),
  description: COMPANY_INFO.description.medium,
  image: "/assets/logo/tecnojr-logo.png",
  url: "https://tecnojr.com.br",
  keywords: SEO_CONTENT.keywords,
};

/**
 * Generate metadata object for a page
 *
 * @param params - Metadata customization parameters
 * @returns Next.js Metadata object
 *
 * @example
 * ```tsx
 * export const metadata = generateMetadata({
 *   title: "Sobre",
 *   description: "Conheça a história da TecnoJr",
 * });
 * ```
 */
export function generateMetadata({
  title,
  description,
  image,
  url,
  keywords = [],
  type = "website",
}: MetadataParams = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${COMPANY_INFO.name}`
    : defaultMetadata.title;
  const metaDescription = description || defaultMetadata.description;
  const metaImage = image || defaultMetadata.image;
  const metaUrl = url || defaultMetadata.url;
  const metaKeywords = [...defaultMetadata.keywords, ...keywords];

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: COMPANY_INFO.name }],
    creator: COMPANY_INFO.name,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      url: metaUrl,
      type,
      siteName: COMPANY_INFO.name,
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      site: SOCIAL_METADATA.twitter ? `@${SOCIAL_METADATA.twitter}` : undefined,
    },
  };
}

/**
 * Generate root layout metadata with template
 *
 * @returns Metadata object with title template for child pages
 */
export function generateRootMetadata(): Metadata {
  return {
    metadataBase: new URL(defaultMetadata.url),
    title: {
      default: defaultMetadata.title,
      template: `%s | ${COMPANY_INFO.name}`,
    },
    description: defaultMetadata.description,
    keywords: defaultMetadata.keywords,
    authors: [{ name: COMPANY_INFO.name }],
    creator: COMPANY_INFO.name,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: defaultMetadata.url,
      title: defaultMetadata.title,
      description: defaultMetadata.description,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: defaultMetadata.image,
          width: 1200,
          height: 630,
          alt: `${COMPANY_INFO.name} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultMetadata.title,
      description: defaultMetadata.description,
      images: [defaultMetadata.image],
      site: SOCIAL_METADATA.twitter ? `@${SOCIAL_METADATA.twitter}` : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Page-specific metadata generators
 */
export const pageMetadata = {
  /** Home page metadata */
  home: () =>
    generateMetadata({
      description: COMPANY_INFO.description.extended,
    }),

  /** About/Sobre page metadata */
  about: () =>
    generateMetadata({
      title: "Sobre",
      description: COMPANY_INFO.description.long,
      keywords: ["História", "Equipe", "Missão", "Visão", "Valores"],
    }),

  /** Projects/Projetos page metadata */
  projects: () =>
    generateMetadata({
      title: "Projetos",
      description:
        "Conheça os projetos desenvolvidos pela TecnoJr. Transformamos ideias em soluções tecnológicas de qualidade.",
      keywords: ["Portfólio", "Projetos", "Cases", "Clientes"],
    }),

  /** Press Kit page metadata */
  pressKit: () =>
    generateMetadata({
      title: "Press Kit",
      description:
        "Materiais de imprensa da TecnoJr. Logos, cores, tipografias e recursos visuais para download.",
      keywords: ["Press Kit", "Logo", "Marca", "Identidade Visual"],
    }),

  /** Contact page metadata */
  contact: () =>
    generateMetadata({
      title: "Contato",
      description:
        "Entre em contato com a TecnoJr. Solicite um orçamento ou tire suas dúvidas sobre nossos serviços.",
      keywords: ["Contato", "Orçamento", "Atendimento"],
    }),
};
