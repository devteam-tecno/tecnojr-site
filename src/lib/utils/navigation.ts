/**
 * Navigation links and routing constants
 * Centralized navigation configuration for the entire application
 */

export interface NavigationLink {
  url: string;
  text: string;
  align?: "left" | "center" | "right";
  disabled?: boolean;
}

export const navigationLinks = [
  { url: "/", text: "Início" },
  { url: "/sobre", text: "Sobre" },
  { url: "/projetos", text: "Projetos" },
  { url: "/press-kit", text: "Press Kit" },
  { url: "/prosel", text: "Processo Seletivo", align: "right", disabled: true },
] as const satisfies readonly NavigationLink[];

// Extract route paths as a union type for type-safe routing
export type AppRoute = (typeof navigationLinks)[number]["url"];

// Helper to check if a route exists
export function isValidRoute(route: string): route is AppRoute {
  return navigationLinks.some((link) => link.url === route);
}

// Get navigation link by URL
export function getNavigationLink(url: AppRoute): NavigationLink | undefined {
  return navigationLinks.find((link) => link.url === url);
}

// Routes that should hide the header
export const ROUTES_WITHOUT_HEADER = ["/links", "/login", "/wp-admin"] as const;

export type RouteWithoutHeader = (typeof ROUTES_WITHOUT_HEADER)[number];
