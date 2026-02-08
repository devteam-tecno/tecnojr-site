# 📚 Diretório Lib

Pasta centralizada de utilitários, constantes, tipos, hooks, dados e configurações compartilhadas do projeto. Esta é a **fonte única de verdade** para todos os dados, funções utilitárias e configurações da aplicação.

---

## 📁 Estrutura de Diretórios

```
src/lib/
├── animation/              # Sistema de animações com Framer Motion
│   ├── animations.ts       # Hooks de animação customizados
│   ├── animations.test.ts  # Testes unitários de animações
│   └── animation-variants.ts # Variantes de animação reutilizáveis
├── config/                 # Configurações e constantes da empresa
│   ├── company.ts          # Informações da empresa (nome, fundação, etc)
│   ├── contact.ts          # Dados de contato centralizados
│   ├── content.ts          # Conteúdo textual das páginas
│   ├── social.ts           # Links e perfis de redes sociais
│   ├── stats.ts            # Estatísticas e métricas da empresa
│   └── index.ts            # Barrel export de configurações
├── data/                   # Dados estruturados da aplicação
│   ├── features.ts         # Diferenciais e benefícios
│   ├── ideals.ts           # Missão, visão e valores
│   ├── members.ts          # Dados dos membros da equipe
│   ├── press-kit.ts        # Logos, cores e material de marca
│   ├── projects.ts         # Projetos externos e internos
│   ├── services.ts         # Serviços oferecidos
│   └── index.ts            # Barrel export de dados
├── hooks/                  # React Hooks customizados
│   ├── use-reduced-motion.ts # Hook de acessibilidade para animações
│   └── index.ts            # Barrel export de hooks
├── types/                  # Tipos TypeScript compartilhados
│   ├── types.ts            # Interfaces e tipos
│   ├── types.test.ts       # Testes de validação de tipos
│   └── index.ts            # Barrel export de tipos
├── utils/                  # Funções utilitárias
│   ├── icons.ts            # Mapeamento de ícones sociais
│   ├── metadata.ts         # Helpers para SEO e metadata
│   ├── navigation.ts       # Sistema de navegação e rotas
│   ├── styles.ts           # Utilitários de estilo e gradientes
│   ├── styles.test.ts      # Testes de utilitários de estilo
│   ├── utils.ts            # Funções utilitárias gerais (cn, etc)
│   └── utils.test.ts       # Testes de funções utilitárias
├── constants.ts            # Constantes globais (enums, IDs, etc)
├── animation-variants.ts   # Variantes de animação legadas (deprecated)
└── metadata.ts             # Metadata helpers legado (usar utils/metadata.ts)
```

---

## 🗂️ lib/config/ - Configurações Centralizadas

### **🏢 company.ts** - Informações da Empresa

Fonte única de verdade para todas as informações da TecnoJr. Atualizar este arquivo reflete mudanças em todo o site.

**Exports:**
- `COMPANY_INFO` - Objeto com informações da empresa
  - `name` - Nome curto da marca ("TecnoJr")
  - `fullName` - Nome completo legal
  - `university` - Dados da UESC (sigla e nome completo)
  - `department` - Departamento ("Ciência da Computação")
  - `foundedYear` - Ano de fundação (2002)
  - `tagline` - Slogan principal
  - `slogans` - Variações de slogans (hero, footer)
  - `description` - Descrições em 3 tamanhos (short, medium, long)
- `getCompanyAge()` - Calcula idade da empresa dinamicamente

**Uso:**
```typescript
import { COMPANY_INFO, getCompanyAge } from "@/lib/config/company";

<h1>{COMPANY_INFO.name}</h1>
<p>{COMPANY_INFO.description.short}</p>
<span>Há {getCompanyAge()} anos transformando ideias</span>
```

---

### **📊 stats.ts** - Estatísticas e Métricas

Métricas da empresa com cálculos dinâmicos e formatação consistente.

**Exports:**
- `COMPANY_STATS` - Objeto com estatísticas
  - `yearsOfExperience` - Anos de experiência (calculado dinamicamente)
  - `yearsOfExperienceFormatted` - Formato "24+"
  - `projectsDelivered` - Total de projetos (200)
  - `projectsDeliveredFormatted` - Formato "200+"
  - `clientSatisfaction` - Satisfação dos clientes (100%)
  - `quality` - Qualidade (100%)
  - Getters para cálculo dinâmico baseado em dados reais
- `BENEFITS` - Array de benefícios com ícones
  - Interface: `{ title, description, icon, color }`

**Uso:**
```typescript
import { COMPANY_STATS, BENEFITS } from "@/lib/config/stats";

<div>
  <span>{COMPANY_STATS.yearsOfExperienceFormatted}</span> anos de experiência
</div>

{BENEFITS.map(benefit => (
  <Card key={benefit.title} {...benefit} />
))}
```

---

### **📞 contact.ts** - Dados de Contato

Centraliza todos os meios de contato da TecnoJr.

**Uso:**
```typescript
import { CONTACT_INFO } from "@/lib/config/contact";

<a href={`mailto:${CONTACT_INFO.email}`}>Entre em contato</a>
```

---

### **🌐 social.ts** - Redes Sociais

Links para redes sociais e perfis oficiais da TecnoJr.

**Uso:**
```typescript
import { SOCIAL_LINKS } from "@/lib/config/social";

{SOCIAL_LINKS.map(link => (
  <a href={link.url} target="_blank" rel="noopener noreferrer">
    <link.icon />
  </a>
))}
```

---

### **📝 content.ts** - Conteúdo Textual

Textos das páginas centralizados para fácil edição e internacionalização futura.

**Uso:**
```typescript
import { CONTENT } from "@/lib/config/content";

<h1>{CONTENT.hero.title}</h1>
<p>{CONTENT.hero.subtitle}</p>
```

---

## 📊 lib/data/ - Dados Estruturados

### **✨ features.ts** - Diferenciais e Benefícios

Lista de diferenciais competitivos da TecnoJr.

**Exports:**
- `features` - Array de features com ícones e descrições

**Uso:**
```typescript
import { features } from "@/lib/data/features";

{features.map(feature => (
  <FeatureCard key={feature.title} {...feature} />
))}
```

---

### **🎯 ideals.ts** - Missão, Visão e Valores

Ideais corporativos da empresa (MVV).

**Exports:**
- `Ideal` - Interface para ideais
  - `title` - Título ("Missão", "Visão", "Valores")
  - `icon` - Componente Lucide Icon
  - `description` - Descrição detalhada
  - `color` - Classes de gradiente Tailwind
- `ideals` - Array com missão, visão e valores

**Uso:**
```typescript
import { ideals } from "@/lib/data/ideals";

{ideals.map(ideal => (
  <div key={ideal.title}>
    <ideal.icon className={`bg-linear-to-r ${ideal.color}`} />
    <h3>{ideal.title}</h3>
    <p>{ideal.description}</p>
  </div>
))}
```

---

### **👥 members.ts** - Membros da Equipe

Dados completos dos membros da TecnoJr com fotos, cargos e links sociais.

**Exports:**
- `Member` - Interface de membro
- `memberList` - Array completo de membros
- `roles` - Objeto com todos os cargos e suas cores
- `getMembersByRole(roleId)` - Filtra membros por cargo
- `getAllRoles()` - Lista todos os cargos únicos

**Uso:**
```typescript
import { memberList, getMembersByRole } from "@/lib/data/members";
import { ROLE_ID } from "@/lib/constants";

// Listar todos os membros
{memberList.map(member => <MemberCard key={member.name} {...member} />)}

// Filtrar por cargo
const directors = getMembersByRole(ROLE_ID.Diretor);
```

---

### **🎨 press-kit.ts** - Material de Marca

Logos, ícones, tipografias e cores oficiais da TecnoJr para uso em materiais.

**Exports:**
- `Logo` - Interface para logos
- `ColorInfo` - Interface para cores
- `fullLogos` - Array de logos completos (6 variações)
- `icons` - Array de ícones (4 variações)
- `typos` - Array de tipografias (4 variações)
- `colors` - Array de cores da marca com hex e RGB

**Uso:**
```typescript
import { fullLogos, colors } from "@/lib/data/press-kit";

{fullLogos.map(logo => (
  <Image src={`${logo.path}.svg`} alt={logo.name} />
))}

{colors.map(color => (
  <div style={{ backgroundColor: color.hex }}>{color.name}</div>
))}
```

---

### **📦 projects.ts** - Projetos

Lista de projetos externos (clientes) e internos (estudos/open-source).

**Exports:**
- `ExternalProject` - Interface para projetos de clientes
- `InternalProject` - Interface para projetos internos
- `externalProjects` - Array de projetos entregues
- `internalProjects` - Array de projetos de aprendizado

**Uso:**
```typescript
import { externalProjects, internalProjects } from "@/lib/data/projects";

{externalProjects.map(project => (
  <ProjectCard key={project.title} {...project} />
))}
```

---

### **🛠️ services.ts** - Serviços

Serviços oferecidos pela TecnoJr com descrições e ícones.

**Uso:**
```typescript
import { services } from "@/lib/data/services";

{services.map(service => (
  <ServiceCard key={service.title} {...service} />
))}
```

---

## 🪝 lib/hooks/ - React Hooks Customizados

### **♿ use-reduced-motion.ts** - Preferência de Movimento Reduzido

Hook de acessibilidade que detecta se o usuário prefere animações reduzidas via `prefers-reduced-motion` (WCAG 2.3.3 Level AAA).

**Exports:**
- `useReducedMotion()` - Retorna `boolean`

**Uso:**
```typescript
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { motion } from "framer-motion";

function AnimatedComponent() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={reducedMotion ? {} : { opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: reducedMotion ? 0 : 0.5 }}
    >
      Conteúdo
    </motion.div>
  );
}
```

**Quando usar:**
- ✅ Componentes com animações complexas ou de movimento
- ✅ Animações que duram mais de 0.3s
- ✅ Animações de parallax ou scroll
- ❌ Transições sutis de cor/opacidade (< 0.3s)

---

## 🎨 lib/animation/ - Sistema de Animações

### **✨ animations.ts** - Hooks de Animação

Hooks customizados para animações com Framer Motion que respeitam preferências de acessibilidade.

**Exports:**
- `useScrollAnimation()` - Animação de scroll com Intersection Observer
- `useParallax()` - Efeito parallax com spring physics
- `useStaggerChildren()` - Animação escalonada de lista de elementos

**Uso:**
```typescript
import { useScrollAnimation } from "@/lib/animation/animations";

function Section() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section ref={ref} animate={controls}>
      Conteúdo animado ao entrar na viewport
    </motion.section>
  );
}
```

---

### **🎭 animation-variants.ts** - Variantes Reutilizáveis

Variantes de animação padronizadas para uso com Framer Motion.

**Exports:**
- `fadeInUp` - Fade com movimento de baixo para cima
- `fadeIn` - Fade simples
- `scaleIn` - Escala de 0.8 → 1.0
- `slideInLeft` - Desliza da esquerda
- `slideInRight` - Desliza da direita
- `staggerContainer` - Container para animações escalonadas

**Uso:**
```typescript
import { fadeInUp, staggerContainer } from "@/lib/animation/animation-variants";

<motion.div variants={staggerContainer} initial="initial" animate="animate">
  {items.map(item => (
    <motion.div key={item.id} variants={fadeInUp}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 🎯 lib/types/ - Tipos TypeScript

### **📝 types.ts** - Interfaces e Tipos

Todas as interfaces e tipos compartilhados do projeto.

**Exports principais:**
- `Member` - Membro da equipe
- `SocialLink` - Link de rede social
- `ExternalProject` - Projeto de cliente
- `InternalProject` - Projeto interno
- `Feature` - Diferencial/benefício
- `Service` - Serviço oferecido
- `NavigationLink` - Link de navegação
- `AppRoute` - Type union de rotas válidas

**Uso:**
```typescript
import type { Member, ExternalProject } from "@/lib/types";

interface TeamProps {
  members: Member[];
}

const project: ExternalProject = {
  title: "Projeto X",
  description: "Descrição",
  link: "https://example.com",
  img: "project.png"
};
```

---

## 🛠️ lib/utils/ - Funções Utilitárias

### **🎨 styles.ts** - Utilitários de Estilo

Funções centralizadas para classes de estilo, eliminando duplicação de 60+ padrões de className.

**Exports:**
- `GradientVariant` - Type para variantes de gradiente
- `getGradientClass(variant)` - Retorna classe de gradiente
  - `'diagonal'` - Gradiente diagonal roxo-azul (cards, ícones)
  - `'animated'` - Gradiente animado (CTAs, hero)
  - `'primary'` - Gradiente primário da marca
  - `'text'` - Gradiente para texto
- `getIconWrapperClass()` - Classes para wrapper de ícones
- `getCardClass()` - Classes base para cards
- `getButtonClass()` - Classes base para botões

**Uso:**
```typescript
import { getGradientClass } from "@/lib/utils/styles";

<div className={getGradientClass('diagonal')}>
  <Icon className="text-white" />
</div>

<button className={getGradientClass('animated')}>
  Começar Agora
</button>

<h1 className={getGradientClass('text')}>
  TecnoJr
</h1>
```

---

### **🎨 utils.ts** - Funções Gerais

Funções utilitárias diversas.

**Exports:**
- `cn(...inputs)` - Combina classes CSS com Tailwind (usa `clsx` + `tailwind-merge`)
- `formatDate(date, locale?)` - Formata datas
- `slugify(text)` - Converte texto em slug URL-friendly

**Uso:**
```typescript
import { cn } from "@/lib/utils/utils";

<div className={cn(
  "base-class",
  active && "active-class",
  variant === 'primary' && "primary-class"
)} />
```

**Por que usar `cn()` em vez de template strings:**
- ✅ Remove classes duplicadas automaticamente
- ✅ Resolve conflitos de classes Tailwind (último vence)
- ✅ Type-safe e otimizado para performance

---

### **🗺️ navigation.ts** - Sistema de Navegação

Centraliza todas as rotas e links de navegação com type safety.

**Exports:**
- `NavigationLink` - Interface para links
- `navigationLinks` - Array de links (fonte única de verdade)
- `AppRoute` - Type union de todas as rotas válidas (`"/" | "/sobre" | "/projetos" | ...`)
- `isValidRoute(path)` - Valida se uma string é uma rota
- `getNavigationLink(url)` - Busca link por URL
- `ROUTES_WITHOUT_HEADER` - Rotas que ocultam header

**Uso:**
```typescript
import { navigationLinks, type AppRoute } from "@/lib/utils/navigation";

// Type-safe routing com autocomplete
function navigate(route: AppRoute) {
  router.push(route); // TypeScript valida rotas
}

// Renderizar links dinamicamente
{navigationLinks.map(link => (
  <Link key={link.url} href={link.url}>{link.text}</Link>
))}
```

**Vantagem:** Adicionar nova rota em `navigationLinks` atualiza automaticamente o type `AppRoute` e todos os componentes de navegação.

---

### **🎯 icons.ts** - Mapeamento de Ícones

Mapeia tipos de ícones sociais para componentes Lucide React.

**Exports:**
- `SocialIconType` - Type union de ícones disponíveis
- `iconMap` - Record de tipo → componente
- `getIcon(type)` - Retorna componente de ícone

**Uso:**
```typescript
import { getIcon } from "@/lib/utils/icons";

const LinkedInIcon = getIcon("linkedin");

<LinkedInIcon className="h-5 w-5 text-blue-500" />
```

---

### **🔍 metadata.ts** - Helpers de SEO

Funções para gerar metadata de páginas com Next.js 16.

**Exports:**
- `generatePageMetadata(page)` - Gera objeto de metadata
- `baseMetadata` - Metadata base do site
- `getOpenGraphImage(page)` - Gera URL de imagem OG

**Uso:**
```typescript
import { generatePageMetadata } from "@/lib/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Sobre Nós",
  description: "Conheça a TecnoJr",
  path: "/sobre"
});
```

---

## 🔢 lib/constants.ts - Constantes Globais

Valores constantes e enums usados em todo o projeto.

**Exports:**
- `ROLE_ID` - Enum de IDs de cargos
  - `ROLE_ID.Diretor`, `ROLE_ID.Gerente`, etc.
- `ROLE_LABELS` - Labels legíveis dos cargos
- `SOCIAL_ICONS` - Constantes de tipos de ícones
- `ANIMATION_DURATION` - Durações padrão de animações
- `BREAKPOINTS` - Breakpoints de mídia queries

**Uso:**
```typescript
import { ROLE_ID, ROLE_LABELS } from "@/lib/constants";

const role = ROLE_ID.Diretor;
const label = ROLE_LABELS[role]; // "Diretor"
```

---

## 🎯 Princípios de Organização

### 1. **Single Source of Truth (SSOT)**
Cada dado existe em **um único lugar**. Mudanças se propagam automaticamente.

✅ **Correto:**
```typescript
import { COMPANY_INFO } from "@/lib/config/company";
<span>{COMPANY_INFO.name}</span> // Atualiza se company.ts mudar
```

❌ **Evite:**
```typescript
<span>TecnoJr</span> // Hardcoded, precisa mudar manualmente
```

### 2. **Type Safety First**
Todos os dados têm tipos explícitos. TypeScript previne erros.

```typescript
import type { AppRoute } from "@/lib/utils/navigation";

// ✅ TypeScript aceita
const validRoute: AppRoute = "/sobre";

// ❌ TypeScript rejeita
const invalidRoute: AppRoute = "/pagina-inexistente"; // Erro!
```

### 3. **Organização por Função**
- **config/** → Configurações que mudam raramente (empresa, contato)
- **data/** → Dados estruturados que mudam frequentemente (projetos, membros)
- **utils/** → Funções puras sem estado
- **hooks/** → Lógica com estado do React
- **types/** → Apenas definições de tipos

### 4. **Barrel Exports**
Cada subdiretório tem `index.ts` para imports limpos.

✅ **Correto:**
```typescript
import { COMPANY_INFO } from "@/lib/config"; // Via index.ts
```

✅ **Também correto:**
```typescript
import { COMPANY_INFO } from "@/lib/config/company"; // Import direto
```

### 5. **Testes Co-localizados**
Testes ficam ao lado do código (`utils.ts` + `utils.test.ts`).

---

## ✨ Exemplos Práticos

### Adicionar Nova Rota

```typescript
// ✏️ 1. Adicione em lib/utils/navigation.ts
export const navigationLinks = [
  { url: "/", text: "Início" },
  { url: "/blog", text: "Blog" }, // ← Nova rota
  { url: "/sobre", text: "Sobre" },
] as const satisfies readonly NavigationLink[];

// TypeScript atualiza automaticamente AppRoute para incluir "/blog"
```

```typescript
// ✅ 2. Use type-safe routing
import type { AppRoute } from "@/lib/utils/navigation";

function BlogButton() {
  const router = useRouter();
  
  // Autocomplete sugere "/blog"
  const goToBlog = () => router.push("/blog" satisfies AppRoute);
  
  return <button onClick={goToBlog}>Ver Blog</button>;
}
```

### Adicionar Novo Membro

```typescript
// ✏️ Edite lib/data/members.ts
export const memberList: Member[] = [
  // ... membros existentes
  {
    name: "João Silva",
    role: ROLE_ID.Desenvolvedor,
    image: "/assets/members/joao.jpg",
    socials: [
      { type: "github", url: "https://github.com/joaosilva" }
    ]
  }
];
```

```typescript
// ✅ Componente atualiza automaticamente
import { memberList } from "@/lib/data/members";

function TeamSection() {
  return (
    <div>
      {memberList.map(member => (
        <MemberCard key={member.name} {...member} />
      ))}
    </div>
  );
}
```

### Usar Estatísticas Dinâmicas

```typescript
import { COMPANY_STATS } from "@/lib/config/stats";

function StatsSection() {
  return (
    <div>
      {/* Atualiza automaticamente todo ano */}
      <Stat value={COMPANY_STATS.yearsOfExperienceFormatted} label="Anos" />
      
      {/* Calcula de dados reais de projetos */}
      <Stat value={COMPANY_STATS.projectsDeliveredFormatted} label="Projetos" />
    </div>
  );
}
```

### Criar Animação Acessível

```typescript
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { fadeInUp } from "@/lib/animation/animation-variants";
import { motion } from "framer-motion";

function AccessibleCard() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={reducedMotion ? {} : fadeInUp}
      initial="initial"
      animate="animate"
    >
      Conteúdo acessível
    </motion.div>
  );
}
```

---

## 🚀 Vantagens do Sistema

| Vantagem | Descrição | Exemplo |
|----------|-----------|---------|
| **🎯 Autocomplete** | TypeScript sugere valores válidos | `AppRoute` autocompleta `/sobre`, `/projetos`, etc |
| **🛡️ Type Safety** | Erros detectados em tempo de compilação | Rota inválida = erro de TypeScript |
| **🔄 DRY** | Zero duplicação de dados | Mudar `COMPANY_INFO.name` atualiza todo o site |
| **📝 Auto-documentação** | Tipos servem como documentação | Interface `Member` documenta estrutura |
| **🧪 Testabilidade** | Funções puras fáceis de testar | `styles.test.ts`, `utils.test.ts` |
| **♿ Acessibilidade** | Hooks respeitam preferências do usuário | `useReducedMotion()` para WCAG AAA |
| **⚡ Performance** | Barrel exports otimizam tree-shaking | Imports não usados são removidos no build |

---

## 📚 Documentação Relacionada

- **[Guia de Animações](./animations-guide.md)** - Sistema completo de animações
- **[Sistema de Botões](./button-system.md)** - Variantes e uso de botões
- **[Guia de Estilos](./style-guide.md)** - Design system e padrões visuais
- **[Testes](./testing.md)** - Como testar utilitários e hooks
- **[Criação de Componentes](./component-creation.md)** - Como criar novos componentes

---

## ❓ FAQ

**P: Devo criar novo arquivo em `config/` ou `data/`?**  
R: Use `config/` para dados que mudam raramente (nome da empresa, cores da marca). Use `data/` para conteúdo que muda frequentemente (projetos, membros, posts).

**P: Como adiciono novo tipo de gradiente?**  
R: Edite `lib/utils/styles.ts` e adicione nova variante em `GradientVariant`. TypeScript forçará você a implementar o caso no switch.

**P: Posso importar de `lib/` diretamente ou devo usar subdirs?**  
R: Prefira subdirs para organização (`@/lib/config/`, `@/lib/data/`), mas imports diretos também funcionam via barrel exports.

**P: Como testo funções utilitárias?**  
R: Veja arquivos `.test.ts` existentes como exemplo. Use Vitest: `npm run test`.
