# 📋 Índice Completo de Componentes

Catálogo abrangente de todos os componentes React do site TecnoJr com exemplos de código e padrões de uso.

> **💡 Dica**: Para exploração visual, use o [Storybook](http://localhost:6006) (`npm run storybook`)

---

## 🗂️ Organização de Componentes

```
src/components/
├── animated/        # Wrappers de animação (FadeUp, ScaleIn, etc)
├── layout/          # Estrutura (Header, Footer, wrappers)
├── sections/        # Seções completas de página
└── ui/              # Componentes UI reutilizáveis
    ├── buttons/     # Sistema de botões
    ├── cards/       # Tipos de cards
    ├── form/        # Formulários (input, textarea)
    ├── feedback/    # Loading, alerts
    ├── navigation/  # Tabs, pills, filtros
    ├── primitives/  # Primitivos base (Shadcn)
    └── typography/  # Títulos, textos, gradientes
```

---

## 🎨 Componentes UI (`ui/`)

### Sistema de Botões (`ui/buttons/`)

#### Button
**Arquivo**: `src/components/ui/buttons/button.tsx`

Sistema completo de botões com Class Variance Authority (CVA).

**Props principais**:
```typescript
interface ButtonProps {
  variant?: "gradient-primary" | "gradient-whatsapp" | "gradient-secondary" 
          | "outline-gradient" | "ghost-gradient" | "default" 
          | "outline" | "secondary" | "ghost" | "destructive" | "link";
  size?: "xs" | " sm" | "default" | "lg" | "xl";
  children: React.ReactNode;
  asChild?: boolean;
}
```

**Variantes**:

| Variante | Uso | Cores |
|----------|-----|-------|
| `gradient-primary` | CTAs principais, ações importantes | Gradiente roxo→azul animado |
| `gradient-whatsapp` | Exclusivo para WhatsApp | Verde WhatsApp + ícone |
| `gradient-secondary` | CTAs secundários | Gradiente mais suave |
| `outline-gradient` | Filtros, tabs, toggles | Borda com gradiente | 
| `ghost-gradient` | Navegação, ações sutis | Transparente, hover gradiente |

**Exemplos de uso**:

```tsx
import { Button } from "@/components/ui/buttons";
import { ArrowRight, MessageCircle } from "lucide-react";

// CTA principal
<Button variant="gradient-primary" size="lg">
  Começar Agora
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>

// WhatsApp
<Button variant="gradient-whatsapp">
  <MessageCircle className="mr-2 h-5 w-5" />
  Fale Conosco
</Button>

// Filtro
<Button variant="outline-gradient" size="sm">
  Todos os Projetos
</Button>
```

📚 **[Documentação completa →](./button-system.md)**

---

### Cards (`ui/cards/`)

#### BaseCard
**Arquivo**: `src/components/ui/cards/base-card.tsx`

Card base reutilizável com ícone, usado como fundação para FeatureCard e ServiceCard.

**Props**:
```typescript
interface BaseCardProps {
  icon: LucideIcon;           // Componente de ícone
  title: string;
  description: string;
  iconColor?: string;          // Classes Tailwind de cor
  layout?: "default" | "centered";
  className?: string;
}
```

**Exemplo**:
```tsx
import { BaseCard } from "@/components/ui/cards";
import { Rocket } from "lucide-react";

<BaseCard
  icon={Rocket}
  title="Inovação"
  description="Soluções tecnológicas de ponta"
  iconColor="from-purple-500 to-blue-500"
  layout="centered"
/>
```

---

#### FeatureCard
**Arquivo**: `src/components/ui/cards/feature-card.tsx`

Card otimizado para exibição de diferenciais/features.

**Props**:
```typescript
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
```

**Dados**: `@/lib/data/features`

**Exemplo**:
```tsx
import { FeatureCard } from "@/components/ui/cards";
import { features } from "@/lib/data/features";

{features.map((feature) => (
  <FeatureCard key={feature.title} {...feature} />
))}
```

**Layout**: Ícone à esquerda, texto alinhado à esquerda

---

#### ServiceCard
**Arquivo**: `src/components/ui/cards/service-card.tsx`

Card para serviços oferecidos.

**Props**: Mesmas de FeatureCard

**Dados**: `@/lib/data/services`

**Exemplo**:
```tsx
import { ServiceCard } from "@/components/ui/cards";
import { services } from "@/lib/data/services";

<div className="grid md:grid-cols-3 gap-6">
  {services.map((service) => (
    <ServiceCard key={service.title} {...service} />
  ))}
</div>
```

**Layout**: Ícone centralizado, texto centralizado, hover rotaciona ícone

---

#### ProjectCard
**Arquivo**: `src/components/ui/cards/project-card.tsx`

Card para showcase de projetos com imagem.

**Props**:
```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  img: string;               // Caminho da imagem
  link: string;              // URL do projeto
  type?: "external" | "internal";
}
```

**Dados**: `@/lib/data/projects` (`externalProjects`, `internalProjects`)

**Exemplo**:
```tsx
import { ProjectCard } from "@/components/ui/cards";
import { externalProjects } from "@/lib/data/projects";

{externalProjects.map((project) => (
  <ProjectCard key={project.title} {...project} type="external" />
))}
```

**Features**:
- Imagem com overlay de gradiente
- Badge "Externo" ou "Interno"
- Hover: eleva card
- Link abre em nova aba

---

#### MemberCard
**Arquivo**: `src/components/ui/cards/member-card.tsx`

Card para membros da equipe.

**Props**:
```typescript
interface MemberCardProps {
  name: string;
  role: string;
  image: string;             // Caminho da foto
  socials?: SocialLink[];    // Links sociais (GitHub, LinkedIn, etc)
}
```

**Dados**: `@/lib/data/members` (`memberList`)

**Exemplo**:
```tsx
import { MemberCard } from "@/components/ui/cards";
import { memberList } from "@/lib/data/members";

{memberList.map((member) => (
  <MemberCard key={member.name} {...member} />
))}
```

**Features**:
- Foto circular
- Nome e cargo
- Ícones sociais clicáveis
- Hover: efeito de elevação

---

#### AssetCard
**Arquivo**: `src/components/ui/cards/asset-card.tsx`

Card para assets do press kit (logos, ícones).

**Props**:
```typescript
interface AssetCardProps {
  name: string;
  path: string;              // Caminho sem extensão
  inverted?: boolean;        // Fundo preto para assets brancos
}
```

**Dados**: `@/lib/data/press-kit` (`fullLogos`, `icons`, `typos`)

**Exemplo**:
```tsx
import { AssetCard } from "@/components/ui/cards";
import { fullLogos } from "@/lib/data/press-kit";

{fullLogos.map((logo) => (
  <AssetCard key={logo.name} {...logo} />
))}
```

**Features**:
- Preview SVG + PNG
- Botões de download
- Fundo invertido para assets brancos

---

#### ColorCard
**Arquivo**: `src/components/ui/cards/color-card.tsx`

Card para cores da marca.

**Props**:
```typescript
interface ColorCardProps {
  name: string;
  hex: string;
  rgb: string;
}
```

**Dados**: `@/lib/data/press-kit` (`colors`)

**Exemplo**:
```tsx
import { ColorCard } from "@/components/ui/cards";
import { colors } from "@/lib/data/press-kit";

{colors.map((color) => (
  <ColorCard key={color.name} {...color} />
))}
```

**Features**:
- Preview da cor
- HEX e RGB
- Botão copiar para clipboard

---

### Formulários (`ui/form/`)

#### Input
**Arquivo**: `src/components/ui/form/input.tsx`

Input de texto com suporte a validação.

**Props**: Estende `InputHTMLAttributes<HTMLInputElement>`

**Exemplo**:
```tsx
import { Input } from "@/components/ui/form";
import { Label } from "@/components/ui/label";

<div>
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="seu@email.com"
    aria-invalid={hasError}
  />
</div>
```

**Integrações**:
- React Hook Form
- Zod validation
**States**: default, focus, error (aria-invalid)

---

#### Textarea
**Arquivo**: `src/components/ui/form/textarea.tsx`

Campo de texto multi-linha.

**Props**: Estende `TextareaHTMLAttributes<HTMLTextAreaElement>`

**Exemplo**:
```tsx
import { Textarea } from "@/components/ui/form";

<Textarea 
  placeholder="Descreva seu projeto..."
  rows={5}
  aria-invalid={hasError}
/>
```

**Features**:
- Auto-resize com `field-sizing: content`
- Mesmos states do Input

---

### Navegação (`ui/navigation/`)

#### Tabs
**Arquivo**: `src/components/ui/navigation/tabs.tsx`

Sistema de tabs baseado em Radix UI.

**Componentes**:
- `Tabs` - Container
- `TabsList` - Lista de triggers
- `TabsTrigger` - Botão de tab
- `TabsContent` - Conteúdo da tab

**Exemplo**:
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/navigation";

<Tabs defaultValue="external">
  <TabsList>
    <TabsTrigger value="external">Externos</TabsTrigger>
    <TabsTrigger value="internal">Internos</TabsTrigger>
  </TabsList>
  <TabsContent value="external">
    {/* Conteúdo de externos */}
  </TabsContent>
  <TabsContent value="internal">
    {/* Conteúdo de internos */}
  </TabsContent>
</Tabs>
```

**Variantes**: `default` (pílula), `line` (sublinhado)

---

#### FilterPill
**Arquivo**: `src/components/ui/navigation/filter-pill.tsx`

Botão de filtro/categoria.

**Props**:
```typescript
interface FilterPillProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

**Exemplo**:
```tsx
import { FilterPill } from "@/components/ui/navigation";

const [filter, setFilter] = useState("all");

<div className="flex gap-2">
  <FilterPill 
    active={filter === "all"} 
    onClick={() => setFilter("all")}
  >
    Todos
  </FilterPill>
  <FilterPill 
    active={filter === "web"} 
    onClick={() => setFilter("web")}
  >
    Web
  </FilterPill>
</div>
```

**States**: Inativo (outline), Ativo (gradiente)

---

### Tipografia (`ui/typography/`)

#### SectionTitle
**Arquivo**: `src/components/ui/typography/section-title.tsx`

Título de seção responsivo e semântico.

**Props**:
```typescript
interface SectionTitleProps {
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
}
```

**Exemplo**:
```tsx
import { SectionTitle } from "@/components/ui/typography";

<SectionTitle size="lg" align="center" as="h2">
  Nossos Projetos
</SectionTitle>
```

**Features**:
- Responsive font sizes
- `text-balance` para quebras otimizadas
- Tag HTML semântica configurável

---

#### GradientText
**Arquivo**: `src/components/ui/typography/gradient-text.tsx`

Texto com gradiente da marca.

**Exemplo**:
```tsx
import { GradientText } from "@/components/ui/typography";

<h1 className="text-4xl font-bold">
  Bem-vindo à <GradientText>TecnoJr</GradientText>
</h1>
```

**Gradiente**: Roxo → Azul (marca)

---

#### InlineHighlight
**Arquivo**: `src/components/ui/typography/inline-highlight.tsx`

Destaque inline para texto.

**Props**:
```typescript
interface InlineHighlightProps {
  variant?: "gradient" | "underline" | "box";
  children: React.ReactNode;
}
```

**Exemplo**:
```tsx
import { InlineHighlight } from "@/components/ui/typography";

<p>
  Transformamos <InlineHighlight variant="gradient">ideias</InlineHighlight> em realidade.
</p>
```

---

#### LeadParagraph
**Arquivo**: `src/components/ui/typography/lead-paragraph.tsx`

Parágrafo de entrada (lead) maior e destacado.

**Exemplo**:
```tsx
import { LeadParagraph } from "@/components/ui/typography";

<LeadParagraph>
  A TecnoJr é a empresa júnior de Computação da UESC, 
  desenvolvendo soluções tecnológicas desde 2002.
</LeadParagraph>
```

---

#### Text
**Arquivo**: `src/components/ui/typography/text.tsx`

Componente de texto genérico com variantes.

**Props**:
```typescript
interface TextProps {
  variant?: "body" | "small" | "large" | "muted";
  as?: "p" | "span" | "div";
  children: React.ReactNode;
}
```

---

#### CodeText
**Arquivo**: `src/components/ui/typography/code-text.tsx`

Código inline.

**Exemplo**:
```tsx
import { CodeText } from "@/components/ui/typography";

<p>
  Execute <CodeText>npm install</CodeText> para instalar.
</p>
```

---

### Primitivos (`ui/primitives/`)

Componentes base do Shadcn UI. Consulte [Shadcn UI Docs](https://ui.shadcn.com/) para detalhes.

- `Card` - Container de card
- `Separator` - Divisor horizontal/vertical
- `Badge` - Badges de status

---

### Outros (`ui/`)

#### TecnoJrLogo
**Arquivo**: `src/components/ui/tecnojr-logo.tsx`

Logo da TecnoJr com variantes.

**Props**:
```typescript
interface TecnoJrLogoProps {
  variant?: "white" | "black" | "color";
  size?: "sm" | "md" | "lg";
}
```

---

#### SkipLink
**Arquivo**: `src/components/ui/skip-link.tsx`

Link de acessibilidade (WCAG 2.4.1).

**Uso**: Automático em `layout.tsx`, visível ao focar com Tab

---

## 🏗️ Componentes de Layout (`layout/`)

### Header
**Arquivo**: `src/components/layout/header/header.tsx`

Header fixo com navegação.

**Sub-componentes**:
- `DesktopNavigation` - Links desktop
- `MobileNavigation` - Menu mobile (drawer)

**Features**:
- Detecta scroll (blur backdrop)
- Active link indicators
- Responsivo (hambúrguer em mobile)

**Dados**: `@/lib/utils/navigation` (`navigationLinks`)

---

### Footer
**Arquivo**: `src/components/layout/footer/footer.tsx`

Footer com 4 colunas.

**Sub-componentes**:
- `Description` - Logo + descrição + social
- `QuickLinks` - Links de navegação
- `ContactInfo` - Email, telefone, endereço
- `Copyright` - Copyright dinâmico

**Dados**: 
- `@/lib/config/company` (COMPANY_INFO)
- `@/lib/config/social` (SOCIAL_LINKS)
- `@/lib/utils/navigation` (navigationLinks)

---

### Wrappers

#### MaxWidthWrapper
**Arquivo**: `src/components/layout/max-width-wrapper.tsx`

Limita largura e centraliza conteúdo.

**Props**:
```typescript
interface MaxWidthWrapperProps {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  className?: string;
  children: React.ReactNode;
}
```

**Exemplo**:
```tsx
import { MaxWidthWrapper } from "@/components/layout";

<MaxWidthWrapper maxWidth="xl">
  <YourContent />
</MaxWidthWrapper>
```

---

#### SectionWrapper
**Arquivo**: `src/components/layout/section-wrapper.tsx`

Adiciona padding vertical consistente.

**Props**:
```typescript
interface SectionWrapperProps {
  id?: string;              // Para âncoras (#services)
  className?: string;
  children: React.ReactNode;
}
```

**Exemplo**:
```tsx
import { SectionWrapper } from "@/components/layout";

<SectionWrapper id="services" className="bg-neutral-50">
  <ServicesSection />
</SectionWrapper>
```

---

## 📄 Componentes de Seção (`sections/`)

### Hero Variants (`sections/hero/`)

Sistema modular de hero para diferentes páginas.

#### HeroHome
**Arquivo**: `src/components/sections/hero/hero-home.tsx`

Hero da homepage com animações.

**Features**:
- Background com gradiente overlay
- Animações escalonadas (stagger)
- CTA button destacado
- Formas decorativas de fundo

**Dados**: `@/lib/config/content`

---

#### Outras Variantes
- `HeroAbout` - Página "Sobre"
- `HeroProjects` - Página de projetos
- `HeroPressKit` - Press kit
- `HeroStats` - com estatísticas

---

### Seções de Conteúdo

#### FeaturesSection
**Arquivo**: `src/components/sections/features-section.tsx`

Grid 2 colunas de diferenciais.

**Dados**: `@/lib/data/features`

**Exemplo de página**:
```tsx
import { FeaturesSection } from "@/components/sections";

export default function Page() {
  return (
    <>
      <HeroHome />
      <FeaturesSection />
      {/* ... */}
    </>
  );
}
```

---

#### ServicesSection
**Arquivo**: `src/components/sections/services-section.tsx`

Grid 3 colunas de serviços.

**Dados**: `@/lib/data/services`

---

#### ProjectsSection
**Arquivo**: `src/components/sections/projects-section.tsx`

Projetos com tabs (Externos/Internos).

**Dados**: `@/lib/data/projects`

**Features**:
- Tabs para filtrar tipo
- Grid responsivo (1-3 colunas)
- Âncora: `#projects`

---

#### IdealsSection
**Arquivo**: `src/components/sections/ideals-section.tsx`

Missão, Visão e Valores.

**Dados**: `@/lib/data/ideals`

**Layout**: 3 cards com ícones e gradientes

**Uso**: Página "Sobre"

---

#### MembersSection
**Arquivo**: `src/components/sections/members-section.tsx`

Exibição de membros da equipe.

**Dados**: `@/lib/data/members`

**Features**:
- Filtro por cargo
- Grid responsivo
- MemberCards

**Uso**: Página "Sobre"

---

#### BudgetSection
**Arquivo**: `src/components/sections/budget-section.tsx`

CTA de orçamento com formulário.

**Sub-componentes** (`sections/budget/`):
- `BenefitsList` - Lista de benefícios
- `ContactFormCard` - Formulário de contato

**Features**:
- Orbes animados de fundo
- Formulário com validação
- CTA WhatsApp
- Integração com API `/api/contact`

---

### Press Kit (`sections/press-kit/`)

Seções especializadas da página press kit.

- `LogosSection` - Download de logos
- `ColorsSection` - Paleta de cores
- `AlternativesSection` - Variações de uso
- `DriveSection` - Link para assets completos

**Dados**: `@/lib/data/press-kit`

---

## 🎬 Componentes Animados (`animated/`)

### Motion Wrappers
**Arquivo**: `src/components/animated/motion-wrappers.tsx`

Wrappers reutilizáveis de Framer Motion.

**Disponíveis**:
- `FadeUp` - Fade + deslize para cima
- `FadeDown` - Fade + deslize para baixo
- `FadeLeft` - Fade + deslize da esquerda
- `FadeRight` - Fade + deslizeda direita
- `ScaleIn` - Animação de escala
- `StaggerContainer` - Container para animações escalonadas

**Exemplo**:
```tsx
import { FadeUp, StaggerContainer } from "@/components/animated";

<StaggerContainer>
  {items.map(item => (
    <FadeUp key={item.id}>
      <Card {...item} />
    </FadeUp>
  ))}
</StaggerContainer>
```

**📚 [Guia completo de animações →](./animations-guide.md)**

---

## 🧪 Testes

Muitos componentes têm:
- **`*.test.tsx`** - Testes unitários (Vitest + React Testing Library)
- **`*.stories.tsx`** - Stories do Storybook

### Exemplo: Button Tests
```typescript
// button.test.tsx
describe("Button", () => {
  it("renderiza com variante gradient-primary", () => {
    render(<Button variant="gradient-primary">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("gradient-primary");
  });
});
```

**📚 [Guia de testes →](./testing.md)**

---

## 📚 Documentação Relacionada

- **[Criação de Componentes](./component-creation.md)** - Como criar novos componentes
- **[Guia de Estilos](./style-guide.md)** - Design system completo
- **[Sistema de Botões](./button-system.md)** - Análise profunda dos botões
- **[Guia de Animações](./animations-guide.md)** - Sistema de animações
- **[Diretório Lib](./lib-directory.md)** - Dados e utilitários
- **[Storybook](http://localhost:6006)** - Exploração visual (`npm run storybook`)

---

## 🎯 Resumo: Quando Usar Cada Componente

| Preciso de... | Use... |
|---------------|--------|
| Botão de ação | `Button` com variante apropriada |
| Card com ícone | `FeatureCard` ou `ServiceCard` |
| Card de projeto | `ProjectCard` |
| Card de pessoa | `MemberCard` |
| Título de seção | `SectionTitle` |
| Input de formulário | `Input` ou `Textarea` |
| Tabs/Abas | `Tabs` + sub-componentes |
| Texto com gradiente | `GradientText` |
| Highlight inline | `InlineHighlight` |
| Animar entrada | `FadeUp`, `ScaleIn`, etc |
| Limitar largura | `MaxWidthWrapper` |
| Espaçar seção | `SectionWrapper` |
| Seção completa | Componentes em `sections/` |

---

**Dúvidas?** Consulte o [Storybook](http://localhost:6006) para exemplos visuais ou abra uma issue no GitHub.

[← Voltar para Documentação](../README.md)
