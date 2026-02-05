import type { ROLE_ID, SocialIconType } from "./constants";

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
