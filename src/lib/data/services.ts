/**
 * Services data and types
 * Represents the services offered by TecnoJr
 */

import type { LucideIcon } from "lucide-react";
import { Code, Palette, Smartphone } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description:
      "Criamos sites modernos, responsivos e otimizados para oferecer a melhor experiência aos seus usuários.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Desenvolvemos aplicações móveis nativas e híbridas para iOS e Android com foco na usabilidade.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Criamos interfaces intuitivas e experiências memoráveis que conectam sua marca aos usuários.",
  },
];

// Helper function to get service by title
export function getServiceByTitle(title: string): Service | undefined {
  return services.find((service) => service.title === title);
}

// Get total number of services
export function getServicesCount(): number {
  return services.length;
}
