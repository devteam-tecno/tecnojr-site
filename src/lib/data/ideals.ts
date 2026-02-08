import type { LucideIcon } from "lucide-react";
import { Eye, GraduationCap, Scale } from "lucide-react";

/**
 * Interface for company ideals (Mission, Vision, Values)
 */
export interface Ideal {
  /** Display title of the ideal */
  title: string;
  /** Lucide icon component to represent the ideal */
  icon: LucideIcon;
  /** Short description text */
  description: string;
  /** Tailwind gradient classes for icon background */
  color: string;
}

/**
 * Company ideals: mission, vision, and values
 * Used in the About page ideals section
 *
 * @example
 * ```tsx
 * import { ideals } from '@/lib/ideals';
 *
 * ideals.map((ideal) => (
 *   <BaseCard
 *     key={ideal.title}
 *     icon={ideal.icon}
 *     title={ideal.title}
 *     description={ideal.description}
 *   />
 * ));
 * ```
 */
export const ideals: Ideal[] = [
  {
    title: "Missão",
    icon: GraduationCap,
    description:
      "Formar jovens empreendedores capazes de entregar projetos de qualidade, unindo o mercado de trabalho ao ambiente acadêmico, e impactando a sociedade.",
    color: "from-tecno-purple-500 to-tecno-blue-500",
  },
  {
    title: "Visão",
    icon: Eye,
    description:
      "Figurar entre as melhores empresas juniores da Bahia, sendo referência em inovação tecnológica e excelência em prestação de serviços.",
    color: "from-tecno-blue-500 to-tecno-purple-500",
  },
  {
    title: "Valores",
    icon: Scale,
    description:
      "Empreendedorismo, Inovação, Sinergia, Transparência, Pertencimento, Resiliência.",
    color: "from-tecno-purple-500 via-tecno-blue-500 to-tecno-purple-500",
  },
];
