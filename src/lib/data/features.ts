/**
 * Features data and types
 * Represents the key differentiators and benefits of TecnoJr
 */

import type { LucideIcon } from "lucide-react";
import { DollarSign, GraduationCap, Handshake, Users } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: GraduationCap,
    title: "Experiência Acadêmica e Inovação",
    description:
      "Alinhamento constante com as mais recentes tendências tecnológicas através da base acadêmica sólida da UESC.",
  },
  {
    icon: Users,
    title: "Equipe Atualizada",
    description:
      "Formada por estudantes de Computação sempre atualizados com as últimas tendências e tecnologias do mercado.",
  },
  {
    icon: DollarSign,
    title: "Preços Flexíveis",
    description:
      "Como empresa júnior, oferecemos soluções de alta qualidade com preços acessíveis e condições flexíveis de pagamento.",
  },
  {
    icon: Handshake,
    title: "Compromisso com Qualidade",
    description:
      "Dedicação total a cada projeto, promovendo aprendizado mútuo e resultados excepcionais para ambas as partes.",
  },
];

// Helper function to get feature by title
export function getFeatureByTitle(title: string): Feature | undefined {
  return features.find((feature) => feature.title === title);
}

// Get total number of features
export function getFeaturesCount(): number {
  return features.length;
}
