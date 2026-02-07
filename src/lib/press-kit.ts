/**
 * Press Kit data configuration
 * Centralized data for logos, icons, typography, and colors
 */

export interface Logo {
  name: string;
  path: string;
  inverted?: boolean;
}

export interface ColorInfo {
  name: string;
  hex: string;
  rgb: string;
  textColor?: string;
}

/**
 * Full TecnoJr logos with color variations
 * Available in SVG and PNG formats
 */
export const fullLogos: Logo[] = [
  { name: "Logo branca", path: "/assets/logo/tecnojr-logo-white" },
  {
    name: "Logo preta",
    path: "/assets/logo/tecnojr-logo-black",
    inverted: true,
  },
  {
    name: "Logo branca e azul",
    path: "/assets/logo/tecnojr-logo-white-blue",
  },
  {
    name: "Logo preta e azul",
    path: "/assets/logo/tecnojr-logo-black-blue",
    inverted: true,
  },
  {
    name: "Logo branca e roxa",
    path: "/assets/logo/tecnojr-logo-white-purple",
  },
  {
    name: "Logo preta e roxa",
    path: "/assets/logo/tecnojr-logo-black-purple",
    inverted: true,
  },
];

/**
 * TecnoJr icon variations
 * Compact logo without typography
 */
export const icons: Logo[] = [
  { name: "Ícone branco", path: "/assets/icon/IconWhite" },
  { name: "Ícone preto", path: "/assets/icon/IconBlack", inverted: true },
  { name: "Ícone azul", path: "/assets/icon/IconBlue" },
  { name: "Ícone roxo", path: "/assets/icon/IconPurple" },
];

/**
 * TecnoJr typography variations
 * Text-only logo in Montserrat font
 */
export const typos: Logo[] = [
  { name: "Tipografia branca", path: "/assets/typo/TypoWhite" },
  { name: "Tipografia preta", path: "/assets/typo/TypoBlack", inverted: true },
  { name: "Tipografia azul", path: "/assets/typo/TypoBlue" },
  { name: "Tipografia roxa", path: "/assets/typo/TypoPurple" },
];

/**
 * TecnoJr brand colors with hex and RGB values
 */
export const colors: ColorInfo[] = [
  { name: "Azul", hex: "#4275F9", rgb: "rgb(66, 117, 249)" },
  { name: "Roxo", hex: "#9155EB", rgb: "rgb(145, 85, 235)" },
  {
    name: "Branco",
    hex: "#FFFFFF",
    rgb: "rgb(255, 255, 255)",
    textColor: "#232323",
  },
  { name: "Preto", hex: "#232323", rgb: "rgb(35, 35, 35)" },
];

/**
 * Google Drive folder URL with additional press kit materials
 */
export const DRIVE_URL =
  "https://drive.google.com/drive/u/0/folders/1kflzXM9GdUJEbBSpNXmpTQn7Yr5pQJ_z";
