/**
 * Centralized marketing content and copy
 *
 * This file serves as the single source of truth for all marketing copy,
 * hero section content, CTAs, and repeated text patterns across the website.
 *
 * @module lib/config/content
 */

/**
 * Hero section content for different pages
 */
export const HERO_CONTENT = {
  home: {
    title: {
      line1: "Sites e Sistemas",
      line2: "que transformam",
      line3: "Ideias em Realidade",
    },
    subtitle: "A TecnoJr é a Empresa Júnior de Computação da UESC.",
    cta: "Contate-nos",
    scrollIndicator: "Explore nossos serviços",
  },

  about: {
    title: {
      line1: "Quem é a",
      line2: "TecnoJr?",
    },
    description: {
      paragraph1:
        "Fundada em 2002, a Empresa TecnoJr foi criada como um projeto de extensão do curso de Ciência da Computação da UESC.",
      paragraph2:
        "Desde então, vem atuando na área de desenvolvimento de sistemas e aproximando o mundo acadêmico do empresarial. Atualmente é constituída por membros apaixonados por tecnologia e inovação.",
    },
    cta: "Conheça nosso time",
    scrollIndicator: "Conheça nossos ideais",
  },

  projects: {
    title: {
      line1: "Conheça nossos",
      line2: "Sonhos Realizados",
    },
    description:
      "Cada projeto é uma jornada única de transformação digital. Explore nosso portfólio e veja como transformamos ideias em soluções tecnológicas de qualidade.",
    cta: "Ver todos os projetos",
    scrollIndicator: "Explore nossos projetos",
  },
} as const;

/**
 * Footer content
 */
export const FOOTER_CONTENT = {
  description:
    "Transformando ideias em projetos de qualidade. Nossa missão é oferecer soluções tecnológicas seguras e práticas.",
  copyright: "© 2024 TecnoJr. Todos os direitos reservados.",
  sections: {
    contact: "Contato",
    quickLinks: "Links Rápidos",
    social: "Redes Sociais",
  },
} as const;

/**
 * Call-to-action texts
 */
export const CTA_TEXTS = {
  contact: "Contate-nos",
  budget: "Solicitar Orçamento",
  learnMore: "Saiba Mais",
  viewProjects: "Ver Projetos",
  viewMembers: "Conheça o Time",
  viewServices: "Nossos Serviços",
  schedule: "Agendar Conversa",
  startProject: "Começar Projeto",
} as const;

/**
 * Section headings and descriptions
 */
export const SECTION_CONTENT = {
  services: {
    badge: "O QUE FAZEMOS",
    title: "Nossos Serviços",
    description:
      "Soluções tecnológicas completas para transformar a presença digital do seu negócio.",
  },

  features: {
    badge: "NOSSOS DIFERENCIAIS",
    title: "Por que escolher a TecnoJr?",
    description:
      "Qualidade, inovação e comprometimento em cada projeto que desenvolvemos.",
  },

  projects: {
    badge: "PORTFÓLIO",
    title: "Projetos que transformam",
    description: "Conheça alguns dos projetos desenvolvidos pela TecnoJr.",
  },

  members: {
    badge: "NOSSO TIME",
    title: "Conheça quem faz acontecer",
    description:
      "Somos um time apaixonado por tecnologia e inovação, comprometido em entregar as melhores soluções.",
  },

  ideals: {
    badge: "NOSSA ESSÊNCIA",
    title: "Missão, Visão e Valores",
    description:
      "Os princípios que guiam nosso trabalho e nossa paixão pela tecnologia.",
  },

  budget: {
    badge: "FALE CONOSCO",
    title: "Vamos transformar sua ideia em realidade?",
    description:
      "Entre em contato conosco e solicite um orçamento sem compromisso.",
  },

  contact: {
    badge: "CONTATO",
    title: "Vamos conversar?",
    description:
      "Estamos prontos para ouvir sua ideia e transformá-la em uma solução tecnológica de qualidade.",
  },
} as const;

/**
 * Common phrases and text patterns used across the site
 */
export const COMMON_PHRASES = {
  /** Main value proposition */
  valueProposition: "Transformando ideias em projetos de qualidade",

  /** Academic connection */
  academicConnection: "Aproximando o mundo acadêmico do empresarial",

  /** Team passion */
  teamPassion: "Apaixonados por tecnologia e inovação",

  /** Quality commitment */
  qualityCommitment:
    "Desenvolvemos soluções tecnológicas inovadoras com qualidade e profissionalismo",

  /** Years of experience */
  experience: "Anos de experiência transformando ideias em realidade",
} as const;

/**
 * Form labels and placeholders
 */
export const FORM_CONTENT = {
  contact: {
    name: {
      label: "Nome",
      placeholder: "Seu nome completo",
    },
    email: {
      label: "Email",
      placeholder: "seu@email.com",
    },
    phone: {
      label: "Telefone",
      placeholder: "(00) 00000-0000",
    },
    message: {
      label: "Mensagem",
      placeholder: "Conte-nos sobre seu projeto...",
    },
    submit: "Enviar Mensagem",
    submitting: "Enviando...",
    success: "Mensagem enviada com sucesso!",
    error: "Erro ao enviar mensagem. Tente novamente.",
  },
} as const;

/**
 * SEO and metadata content helpers
 */
export const SEO_CONTENT = {
  /** Common keywords across the site */
  keywords: [
    "TecnoJr",
    "Empresa Júnior",
    "UESC",
    "Desenvolvimento Web",
    "Tecnologia",
    "Ilhéus",
    "Sistemas Web",
    "Aplicativos",
    "Consultoria Tecnológica",
  ],

  /** Site verification and analytics tags */
  verification: {
    // Add verification codes here when needed
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
};
