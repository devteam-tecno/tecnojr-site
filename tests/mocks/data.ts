import { Award, Code, Palette, Zap } from "lucide-react";
import type { Feature, Service } from "@/lib/data";
import type { ExternalProject, InternalProject, Member } from "@/lib/types";
import { ROLE_ID } from "@/lib/types";

// Mock member data for testing
export const mockMembers: Member[] = [
  {
    name: "João Silva",
    roleId: ROLE_ID.Membro,
    role: "Desenvolvedor",
    img: "/test-image.jpg",
    links: [
      { icon: "linkedin", url: "https://linkedin.com/in/joaosilva" },
      { icon: "github", url: "https://github.com/joaosilva" },
    ],
  },
  {
    name: "Maria Santos",
    roleId: ROLE_ID.Membro,
    role: "Designer",
    img: "/test-image-2.jpg",
    links: [{ icon: "linkedin", url: "https://linkedin.com/in/mariasantos" }],
  },
];

// Mock external projects for testing
export const mockExternalProjects: ExternalProject[] = [
  {
    title: "Projeto Externo 1",
    description: "Website para cliente",
    link: "https://cliente1.com",
    img: "/external-1.jpg",
  },
  {
    title: "Projeto Externo 2",
    description: "E-commerce completo",
    link: "https://projeto2.com",
    img: "/external-2.jpg",
  },
];

// Mock internal projects for testing
export const mockInternalProjects: InternalProject[] = [
  {
    title: "Projeto Interno 1",
    author: "TecnoJr",
    link: "#",
    img: "/internal-1.jpg",
  },
  {
    title: "Dashboard Analytics",
    author: "Equipe TecnoJr",
    link: "#",
    img: "/internal-2.jpg",
  },
];

// Mock service data for testing
export const mockServices: Service[] = [
  {
    title: "Desenvolvimento Web",
    description: "Criamos websites modernos e responsivos",
    icon: Code,
  },
  {
    title: "Design UI/UX",
    description: "Interfaces intuitivas e atraentes",
    icon: Palette,
  },
];

// Mock feature data for testing
export const mockFeatures: Feature[] = [
  {
    title: "Qualidade",
    description: "Código limpo e bem documentado",
    icon: Award,
  },
  {
    title: "Agilidade",
    description: "Entregas rápidas e eficientes",
    icon: Zap,
  },
];
