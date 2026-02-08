/**
 * Centralized social media links and configuration
 *
 * This file serves as the single source of truth for all TecnoJr social media links.
 * Update this file to change social media URLs across the entire website.
 *
 * @module lib/config/social
 */

import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { CONTACT_INFO } from "./contact";

/**
 * Social media platform links
 */
export const SOCIAL_LINKS = {
  /** Instagram profile URL */
  instagram: "https://instagram.com/tecnojr",

  /** Facebook page URL */
  facebook: "https://facebook.com/tecnojr",

  /** GitHub organization URL */
  github: "https://github.com/tecnojr-uesc",

  /** LinkedIn company page URL */
  linkedin: "https://linkedin.com/company/tecnojr",

  /** WhatsApp contact link (from contact config) */
  get whatsapp() {
    return CONTACT_INFO.whatsapp.getLink();
  },
} as const;

/**
 * Social link item structure for components
 */
export interface SocialLinkItem {
  url: string;
  icon: IconType;
  label: string;
  platform: keyof typeof SOCIAL_LINKS;
}

/**
 * Get structured social links array for components
 * @returns Array of social link items with URLs, icons, labels, and platform identifiers
 */
export function getSocialLinks(): SocialLinkItem[] {
  return [
    {
      url: SOCIAL_LINKS.instagram,
      icon: FaInstagram,
      label: "Instagram",
      platform: "instagram" as const,
    },
    {
      url: SOCIAL_LINKS.facebook,
      icon: FaFacebookF,
      label: "Facebook",
      platform: "facebook" as const,
    },
    {
      url: SOCIAL_LINKS.github,
      icon: FaGithub,
      label: "GitHub",
      platform: "github" as const,
    },
    {
      url: SOCIAL_LINKS.linkedin,
      icon: FaLinkedinIn,
      label: "LinkedIn",
      platform: "linkedin" as const,
    },
    {
      url: SOCIAL_LINKS.whatsapp,
      icon: FaWhatsapp,
      label: "WhatsApp",
      platform: "whatsapp" as const,
    },
  ];
}

/**
 * Get social link by platform
 * @param platform - Social media platform name
 * @returns Social link item or undefined if not found
 */
export function getSocialLinkByPlatform(
  platform: keyof typeof SOCIAL_LINKS,
): SocialLinkItem | undefined {
  return getSocialLinks().find((link) => link.platform === platform);
}

/**
 * Social media metadata for Open Graph / Twitter cards
 */
export const SOCIAL_METADATA = {
  /** Twitter/X handle (without @) */
  twitter: "tecnojr",

  /** Facebook App ID (if applicable) */
  facebookAppId: undefined,

  /** Instagram handle (without @) */
  instagram: "tecnojr",
} as const;
