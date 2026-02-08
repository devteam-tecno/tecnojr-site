/**
 * Centralized contact information
 *
 * This file serves as the single source of truth for all TecnoJr contact details.
 * Update this file to change contact information across the entire website.
 *
 * @module lib/config/contact
 */

import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";

/**
 * Contact information structure
 */
export const CONTACT_INFO = {
  /** Email addresses */
  email: {
    /** Primary institutional email (displayed on website) */
    primary: "tecnojr@uesc.br",

    /** Alternative contact email (used in forms/API) */
    contact: "contato@tecnojr.com.br",

    /** Get mailto link for primary email */
    getPrimaryLink: () => `mailto:${CONTACT_INFO.email.primary}`,

    /** Get mailto link for contact email */
    getContactLink: () => `mailto:${CONTACT_INFO.email.contact}`,
  },

  /** Phone contact */
  phone: {
    /** Display format with country code */
    display: "+55 (73) 3680-5389",

    /** Raw number for tel: links (no spaces or special chars) */
    raw: "557336805389",

    /** Get tel: link */
    getLink: () => `tel:${CONTACT_INFO.phone.raw}`,
  },

  /** WhatsApp contact */
  whatsapp: {
    /** Number in international format (country code + number) */
    number: "5573999321323",

    /** Default message for WhatsApp link */
    defaultMessage:
      "Olá! Estou entrando em contato pelo site da *Tecno*, gostaria de pedir um orçamento para ",

    /** Get WhatsApp link with default message */
    getLink: (customMessage?: string) => {
      const message = customMessage || CONTACT_INFO.whatsapp.defaultMessage;
      return `https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${encodeURIComponent(message)}`;
    },
  },

  /** Physical address */
  address: {
    /** Full address text */
    full: "Campus Soane Nazaré de Andrade Rodovia Jorge Amado, km 16 S/N Bairro Salobrinho, Ilhéus",

    /** Formatted address for display */
    display:
      "Campus Soane Nazaré de Andrade Rodovia Jorge Amado, km 16 S/N Bairro Salobrinho, Ilhéus",

    /** Google Maps share link */
    mapUrl: "https://goo.gl/maps/ivriShW6tUBzJNVa6",

    /** City */
    city: "Ilhéus",

    /** State */
    state: "Bahia",

    /** State abbreviation */
    stateAbbr: "BA",

    /** Country */
    country: "Brasil",
  },
} as const;

/**
 * Contact info items for display in components
 * Compatible with footer contact-info component structure
 */
export interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  content: string;
  link: string;
}

/**
 * Get structured contact info array for components
 * @returns Array of contact info items with icons, titles, content, and links
 */
export function getContactInfoItems(): ContactInfoItem[] {
  return [
    {
      icon: Mail,
      title: "EMAIL",
      content: CONTACT_INFO.email.primary,
      link: CONTACT_INFO.email.getPrimaryLink(),
    },
    {
      icon: MapPin,
      title: "LOCAL",
      content: CONTACT_INFO.address.display,
      link: CONTACT_INFO.address.mapUrl,
    },
    {
      icon: Phone,
      title: "TELEFONE",
      content: CONTACT_INFO.phone.display,
      link: CONTACT_INFO.phone.getLink(),
    },
  ];
}
