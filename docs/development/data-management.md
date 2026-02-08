# 📊 Gerenciamento de Dados

Guia completo sobre como organizar, criar e utilizar dados no projeto TecnoJr seguindo o princípio SSOT (Single Source of Truth).

---

## 🎯 Princípios Fundamentais

### 1. Single Source of Truth (SSOT)

**Regra de Ouro**: Cada dado deve ter **uma única fonte oficial** no projeto.

#### ✅ **BOM**: Dados centralizados

```tsx
// lib/data/services.ts
export const services = [
  { title: "Web", description: "...", icon: Globe },
  // ...
];

// Usado em múltiplos lugares
import { services } from "@/lib/data/services";
```

#### ❌ **RUIM**: Dados duplicados

```tsx
// page1.tsx
const services = [{ title: "Web", ... }]; // ❌

// page2.tsx
const services = [{ title: "Web", ... }]; // ❌ Duplicado!
```

---

### 2. Type-Safety First

Todos os dados devem ter tipos TypeScript explícitos.

```typescript
// ✅ Com tipo
export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [ /* ... */ ];

// ❌ Sem tipo
export const services = [ /* ... */ ]; // any[]
```

---

### 3. Separação: Data vs Config

| Categoria | O Que Incluir | Onde |
|-----------|---------------|------|
| **Data** (`lib/data/`) | Conteúdo dinâmico, listas, coleções | `features`, `services`, `projects`, `members` |
| **Config** (`lib/config/`) | Constantes fixas, metadados do app | `company`, `metadata`, `social` |

---

## 📁 Estrutura de Dados

### `lib/data/` - Dados de Conteúdo

```
lib/data/
├── features.ts         # Diferenciais da empresa
├── services.ts         # Serviços oferecidos
├── projects.ts         # Projetos (externos e internos)
├── members.ts          # Membros da equipe
├── ideals.ts           # Missão, visão e valores
├── press-kit.ts        # Assets do press kit (logos, cores)
├── stats.ts            # Estatísticas da empresa
└── contact.ts          # Informações de contato
```

### `lib/config/` - Configurações

```
lib/config/
├── company.ts          # Info institucional (CNPJ, endereço)
├── metadata.ts         # SEO metadata (Open Graph, etc)
└── social.ts           # Links de redes sociais
```

---

## 🗃️ Exemplos de Arquivos de Dados

### `lib/data/features.ts`

**Propósito**: Diferenciais/benefícios da empresa.

```typescript
import { Zap, Users, Target, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Representa um diferencial da empresa
 */
export interface Feature {
  /** Componente de ícone do Lucide */
  icon: LucideIcon;
  /** Título do diferencial */
  title: string;
  /** Descrição detalhada */
  description: string;
}

/**
 * Lista de diferenciais da TecnoJr
 * Exibidos na homepage e páginas institucionais
 */
export const features: Feature[] = [
  {
    icon: Zap,
    title: "Agilidade e Eficiência",
    description:
      "Metodologia ágil para garantir entregas rápidas e iterativas.",
  },
  {
    icon: Users,
    title: "Equipe Qualificada",
    description:
      "Estudantes de Ciência da Computação capacitados e motivados.",
  },
  {
    icon: Target,
    title: "Foco no Cliente",
    description:
      "Soluções personalizadas que atendem necessidades específicas.",
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description:
      "Processos rigorosos de teste e controle de qualidade.",
  },
];

/**
 * Total de diferenciais (útil para estatísticas)
 */
export const FEATURES_COUNT = features.length;
```

**Uso**:
```tsx
import { features } from "@/lib/data/features";
import { FeatureCard } from "@/components/ui/cards";

export const FeaturesSection = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {features.map((feature) => (
      <FeatureCard key={feature.title} {...feature} />
    ))}
  </div>
);
```

---

### `lib/data/services.ts`

**Propósito**: Serviços oferecidos pela empresa.

```typescript
import { Globe, Smartphone, Database, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Serviços oferecidos pela TecnoJr
 * Exibidos na homepage e página de serviços
 */
export const services: Service[] = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description:
      "Sites institucionais, landing pages e aplicações web responsivas.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e híbridos para iOS e Android.",
  },
  {
    icon: Database,
    title: "Sistemas Personalizados",
    description:
      "ERPs, CRMs e sistemas sob medida para seu negócio.",
  },
  {
    icon: Code,
    title: "Consultoria Tecnológica",
    description:
      "Arquitetura de software, auditoria de código e mentoria.",
  },
];

export const SERVICES_COUNT = services.length;
```

---

### `lib/data/projects.ts`

**Propósito**: Portfólio de projetos desenvolvidos.

```typescript
/**
 * Representa um projeto desenvolvido
 */
export interface Project {
  /** Nome do projeto */
  title: string;
  /** Breve descrição */
  description: string;
  /** Caminho relativo da imagem (a partir de /public) */
  img: string;
  /** URL do projeto (pode ser externo ou interno) */
  link: string;
  /** Categoria do projeto */
  category?: "web" | "mobile" | "system";
  /** Tecnologias utilizadas */
  technologies?: string[];
}

/**
 * Projetos para clientes externos
 */
export const externalProjects: Project[] = [
  {
    title: "Site Institucional XYZ",
    description: "Website moderno e responsivo para empresa de tecnologia.",
    img: "/assets/projects/project-xyz.jpg",
    link: "https://example.com",
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  // ...mais projetos
];

/**
 * Projetos internos da TecnoJr
 */
export const internalProjects: Project[] = [
  {
    title: "Sistema de Gestão Interna",
    description: "Gerenciamento de membros, projetos e finanças.",
    img: "/assets/projects/internal-system.jpg",
    link: "/projetos/gestao-interna",
    category: "system",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  // ...mais projetos
];

/**
 * Todos os projetos combinados
 */
export const allProjects = [...externalProjects, ...internalProjects];

/**
 * Estatísticas de projetos
 */
export const projectStats = {
  total: allProjects.length,
  external: externalProjects.length,
  internal: internalProjects.length,
};
```

**Uso com filtro**:
```tsx
import { externalProjects, internalProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/cards";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/navigation";

export const ProjectsSection = () => (
  <Tabs defaultValue="external">
    <TabsList>
      <TabsTrigger value="external">Externos</TabsTrigger>
      <TabsTrigger value="internal">Internos</TabsTrigger>
    </TabsList>
    
    <TabsContent value="external">
      <div className="grid md:grid-cols-3 gap-6">
        {externalProjects.map((project) => (
          <ProjectCard key={project.title} {...project} type="external" />
        ))}
      </div>
    </TabsContent>
    
    <TabsContent value="internal">
      <div className="grid md:grid-cols-3 gap-6">
        {internalProjects.map((project) => (
          <ProjectCard key={project.title} {...project} type="internal" />
        ))}
      </div>
    </TabsContent>
  </Tabs>
);
```

---

### `lib/data/members.ts`

**Propósito**: Membros da equipe.

```typescript
export interface SocialLink {
  platform: "github" | "linkedin" | "instagram" | "email";
  url: string;
}

export interface Member {
  name: string;
  role: "Presidente" | "Diretor" | "Gerente" | "Desenvolvedor" | "Designer";
  image: string;
  bio?: string;
  socials?: SocialLink[];
}

/**
 * Lista completa de membros da TecnoJr
 * Ordenados por hierarquia e depois alfabeticamente
 */
export const memberList: Member[] = [
  {
    name: "João Silva",
    role: "Presidente",
    image: "/assets/members/joao.jpg",
    bio: "Estudante de Ciência da Computação, apaixonado por tecnologia.",
    socials: [
      { platform: "github", url: "https://github.com/joaosilva" },
      { platform: "linkedin", url: "https://linkedin.com/in/joaosilva" },
    ],
  },
  // ...mais membros
];

/**
 * Membros filtrados por cargo
 */
export const membersByRole = (role: Member["role"]) =>
  memberList.filter((member) => member.role === role);

/**
 * Total de membros ativos
 */
export const MEMBERS_COUNT = memberList.length;
```

---

### `lib/data/ideals.ts`

**Propósito**: Missão, visão e valores da empresa.

```typescript
import { Target, Eye, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Ideal {
  icon: LucideIcon;
  title: "Missão" | "Visão" | "Valores";
  description: string;
  color: string; // Classes Tailwind de cor
}

/**
 * Missão, visão e valores da TecnoJr
 * Exibidos na página "Sobre"
 */
export const ideals: Ideal[] = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Proporcionar aos alunos a aplicação prática dos conhecimentos acadêmicos, desenvolvendo soluções tecnológicas inovadoras.",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em desenvolvimento de software na região, formando profissionais qualificados para o mercado.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Integridade, inovação, trabalho em equipe, responsabilidade social e excelência técnica.",
    color: "from-cyan-500 to-green-500",
  },
];
```

---

### `lib/data/press-kit.ts`

**Propósito**: Assets de marca (logos, cores, tipografia).

```typescript
export interface Asset {
  name: string;
  path: string; // Caminho sem extensão
  inverted?: boolean; // Se precisa de fundo escuro
}

export interface Color {
  name: string;
  hex: string;
  rgb: string;
  usage?: string;
}

/**
 * Logos com marca completa (texto + símbolo)
 */
export const fullLogos: Asset[] = [
  { name: "Logo Horizontal - Colorido", path: "/assets/brand/logo-horizontal" },
  { name: "Logo Horizontal - Branco", path: "/assets/brand/logo-horizontal-white", inverted: true },
  { name: "Logo Vertical - Colorido", path: "/assets/brand/logo-vertical" },
];

/**
 * Ícones (símbolo sem texto)
 */
export const icons: Asset[] = [
  { name: "Ícone Colorido", path: "/assets/brand/icon" },
  { name: "Ícone Branco", path: "/assets/brand/icon-white", inverted: true },
];

/**
 * Variações tipográficas (só texto)
 */
export const typos: Asset[] = [
  { name: "Tipografia Colorida", path: "/assets/brand/typo" },
  { name: "Tipografia Branca", path: "/assets/brand/typo-white", inverted: true },
];

/**
 * Paleta de cores da marca
 */
export const colors: Color[] = [
  {
    name: "Roxo Primário",
    hex: "#8B5CF6",
    rgb: "139, 92, 246",
    usage: "CTAs principais, acentos",
  },
  {
    name: "Azul Secundário",
    hex: "#3B82F6",
    rgb: "59, 130, 246",
    usage: "Gradientes, links",
  },
  {
    name: "Neutro Escuro",
    hex: "#171717",
    rgb: "23, 23, 23",
    usage: "Textos, fundos escuros",
  },
  // ...mais cores
];

/**
 * Link para pasta completa de assets
 */
export const DRIVE_ASSETS_URL = "https://drive.google.com/...";
```

---

### `lib/data/stats.ts`

**Propósito**: Estatísticas da empresa.

```typescript
export interface Stat {
  label: string;
  value: number | string;
  suffix?: string;
  description?: string;
}

/**
 * Estatísticas da TecnoJr para exibição
 */
export const stats: Stat[] = [
  {
    label: "Anos de Experiência",
    value: 22,
    suffix: "+",
    description: "Desde 2002 transformando ideias em realidade",
  },
  {
    label: "Projetos Entregues",
    value: 150,
    suffix: "+",
    description: "Soluções desenvolvidas com excelência",
  },
  {
    label: "Membros Ativos",
    value: 25,
    description: "Estudantes qualificados e motivados",
  },
  {
    label: "Taxa de Satisfação",
    value: "98%",
    description: "Clientes satisfeitos com nosso trabalho",
  },
];
```

---

## 🛠️ Configurações

### `lib/config/company.ts`

**Propósito**: Informações institucionais fixas.

```typescript
/**
 * Informações institucionais da TecnoJr
 * @constant
 */
export const COMPANY_INFO = {
  name: "TecnoJr - Empresa Júnior de Computação da UESC",
  shortName: "TecnoJr",
  legalName: "TecnoJr Empresa Júnior de Computação",
  cnpj: "12.345.678/0001-90",
  foundedYear: 2002,
  
  address: {
    street: "Rodovia Jorge Amado, Km 16",
    district: "Salobrinho",
    city: "Ilhéus",
    state: "BA",
    zip: "45662-900",
    country: "Brasil",
  },
  
  contact: {
    email: "contato@tecnojr.com.br",
    phone: "+55 73 3680-5000",
    whatsapp: "+5573999999999",
  },
  
  website: "https://tecnojr.com.br",
} as const;

/**
 * Shortcut para nome da empresa
 */
export const COMPANY_NAME = COMPANY_INFO.name;

/**
 * Shortcut para email de contato
 */
export const CONTACT_EMAIL = COMPANY_INFO.contact.email;
```

**Uso**:
```tsx
import { COMPANY_INFO } from "@/lib/config/company";

<footer>
  <p>{COMPANY_INFO.name}</p>
  <p>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}</p>
</footer>
```

---

### `lib/config/metadata.ts`

**Propósito**: Metadados para SEO e social sharing.

```typescript
import type { Metadata } from "next";
import { COMPANY_INFO } from "./company";

/**
 * Metadata base para todas as páginas
 */
export const BASE_METADATA: Metadata = {
  title: {
    default: COMPANY_INFO.shortName,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description:
    "Empresa júnior de Computação da UESC. Desenvolvemos soluções tecnológicas inovadoras desde 2002.",
  keywords: [
    "empresa júnior",
    "desenvolvimento web",
    "UESC",
    "Ilhéus",
    "tecnologia",
  ],
  authors: [{ name: COMPANY_INFO.shortName }],
  creator: COMPANY_INFO.shortName,
  publisher: COMPANY_INFO.shortName,
  
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: COMPANY_INFO.website,
    siteName: COMPANY_INFO.name,
    title: COMPANY_INFO.name,
    description:
      "Empresa júnior de Computação da UESC. Desenvolvemos soluções tecnológicas inovadoras desde 2002.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.shortName} - Empresa Júnior de Computação`,
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: COMPANY_INFO.name,
    description:
      "Empresa júnior de Computação da UESC. Desenvolvemos soluções tecnológicas inovadoras desde 2002.",
    images: ["/assets/twitter-image.jpg"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Metadata específica para páginas
 */
export const PAGE_METADATA = {
  home: {
    title: "Início",
    description: "Transformamos ideias em soluções tecnológicas inovadoras.",
  },
  about: {
    title: "Sobre Nós",
    description: "Conheça a história, valores e equipe da TecnoJr.",
  },
  projects: {
    title: "Projetos",
    description: "Confira nosso portfólio de projetos desenvolvidos.",
  },
  pressKit: {
    title: "Press Kit",
    description: "Logos, cores e materiais de marca da TecnoJr.",
  },
} as const;
```

**Uso em páginas**:
```tsx
// app/sobre/page.tsx
import { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/config/metadata";

export const metadata: Metadata = PAGE_METADATA.about;

export default function AboutPage() {
  // ...
}
```

---

### `lib/config/social.ts`

**Propósito**: Links de redes sociais.

```typescript
import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  type LucideIcon,
} from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color?: string; // Cor da marca (Tailwind classes)
}

/**
 * Links das redes sociais da TecnoJr
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/tecnojr",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/tecnojr",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/tecnojr",
    icon: Github,
    color: "hover:text-neutral-800",
  },
  {
    name: "Email",
    url: "mailto:contato@tecnojr.com.br",
    icon: Mail,
    color: "hover:text-red-500",
  },
];

/**
 * Links específicos por plataforma
 */
export const getSocialLink = (platform: "instagram" | "linkedin" | "github" | "email") =>
  SOCIAL_LINKS.find((link) => link.name.toLowerCase() === platform);
```

**Uso**:
```tsx
import { SOCIAL_LINKS } from "@/lib/config/social";

export const SocialIcons = () => (
  <div className="flex gap-4">
    {SOCIAL_LINKS.map((social) => {
      const Icon = social.icon;
      return (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={social.color}
          aria-label={social.name}
        >
          <Icon className="h-5 w-5" />
        </a>
      );
    })}
  </div>
);
```

---

## ✅ Boas Práticas

### 1. Sempre Export Nomeado

#### ✅ **BOM**
```typescript
export const features: Feature[] = [ /* ... */ ];
export const services: Service[] = [ /* ... */ ];
```

#### ❌ **RUIM**
```typescript
export default [ /* ... */ ]; // Dificulta autocomplete
```

---

### 2. Documente com JSDoc

```typescript
/**
 * Lista de diferenciais da TecnoJr
 * 
 * @example
 * ```tsx
 * import { features } from "@/lib/data/features";
 * 
 * features.map(feature => <Card {...feature} />)
 * ```
 */
export const features: Feature[] = [ /* ... */ ];
```

---

### 3. Export Auxiliares úteis

```typescript
export const projects: Project[] = [ /* ... */ ];

// ✅ Exports auxiliares
export const projectsCount = projects.length;
export const getProjectByTitle = (title: string) =>
  projects.find((p) => p.title === title);
export const projectsByCategory = (category: string) =>
  projects.filter((p) => p.category === category);
```

---

### 4. Validação com Zod (Opcional)

Para dados críticos ou vindos de fontes externas:

```typescript
import { z } from "zod";

const ProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(10),
  img: z.string().url(),
  link: z.string().url(),
});

export type Project = z.infer<typeof ProjectSchema>;

// Valida ao importar
export const projects: Project[] = [
  /* ... */
].map((p) => ProjectSchema.parse(p));
```

---

### 5. Imagens: Caminhos Relativos

Sempre use caminhos a partir de `/public`:

```typescript
// ✅ Correto
img: "/assets/projects/project-1.jpg"

// ❌ Incorreto
img: "../public/assets/projects/project-1.jpg"
img: "public/assets/projects/project-1.jpg"
```

---

## 🔄 Fluxo de Atualização de Dados

### Adicionando Novo Item

1. **Adicione ao arquivo de dados**:
```typescript
// lib/data/services.ts
export const services: Service[] = [
  // ...existentes
  {
    icon: Shield,
    title: "Segurança da Informação",
    description: "Auditorias e implementação de práticas seguras.",
  },
];
```

2. **Componentes atualizam automaticamente**:
```tsx
// Sem mudanças necessárias!
{services.map(service => <ServiceCard {...service} />)}
```

---

### Modificando Item

1. **Edite no arquivo de dados**:
```typescript
{
  icon: Globe,
  title: "Desenvolvimento Web e Mobile", // ✏️ Atualizado
  description: "Sites e apps para todas as plataformas.", // ✏️ Atualizado
}
```

2. **Todas as referências atualizam automaticamente**

---

### Removendo Item

1. **Remova do array**
2. **Verifique componentes que dependem do total**:
```typescript
// Se algo usa services.length, ajuste se necessário
export const SERVICES_COUNT = services.length;
```

---

## 🧪 Testando Dados

### Validação de Estrutura

```typescript
// lib/data/__tests__/features.test.ts
import { describe, it, expect } from "vitest";
import { features } from "../features";

describe("features data", () => {
  it("não deve estar vazio", () => {
    expect(features.length).toBeGreaterThan(0);
  });

  it("todos os itens devem ter propriedades obrigatórias", () => {
    features.forEach(feature => {
      expect(feature).toHaveProperty("icon");
      expect(feature).toHaveProperty("title");
      expect(feature).toHaveProperty("description");
      expect(feature.title).toBeTruthy();
      expect(feature.description).toBeTruthy();
    });
  });

  it("títulos devem ser únicos", () => {
    const titles = features.map(f => f.title);
    const uniqueTitles = new Set(titles);
    expect(titles.length).toBe(uniqueTitles.size);
  });
});
```

---

## 📚 Documentação Relacionada

- **[Diretório Lib](./lib-directory.md)** - Estrutura completa de lib/
- **[Índice de Componentes](./component-index.md)** - Como usar dados em componentes
- **[API Routes](./api-routes.md)** - Como consumir dados em APIs
- **[Estrutura do Projeto](../getting-started/project-structure.md)** - Organização geral

---

## ❓ FAQ

### **P: Quando usar `lib/data/` vs `lib/config/`?**
**R**: 
- `lib/data/`: Coleções, listas, conteúdo que pode crescer (projetos, membros)
- `lib/config/`: Constantes fixas, metadados do app (nome, CNPJ, URLs)

### **P: Posso usar banco de dados em vez de arquivos?**
**R**: Sim! Para sites com CMS ou conteúdo dinâmico. Mas para conteúdo estático, arquivos são mais simples e performáticos.

### **P: Preciso validar dados com Zod?**
**R**: Não é obrigatório para dados internos hardcoded. Use para:
- Dados vindos de APIs externas
- Formulários de usuários
- Ambientes onde tipos podem ser violados

### **P: Como lidar com tradução (i18n)?**
**R**: Para agora, dados são em PT-BR. Para suporte multi-idioma futuro:
```typescript
// lib/data/features.pt-BR.ts
export const features = [ /* ... */ ];

// lib/data/features.en.ts
export const features = [ /* ... */ ];
```

### **P: Dados podem ter lógica complexa?**
**R**: Prefira manter arquivos de dados simples. Lógica vai em `lib/utils/` ou hooks:
```typescript
// ✅ Bom - dados simples
export const projects = [ /* ... */ ];

// ✅ Lógica em utilitário
// lib/utils/projects.ts
export const filterProjects = (category) => { /* ... */ };
```

---

**Dúvidas?** Consulte o [Diretório Lib](./lib-directory.md) ou abra uma discussão!

[← Voltar para Documentação](../README.md)
