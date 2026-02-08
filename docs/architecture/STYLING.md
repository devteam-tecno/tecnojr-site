# 🎨 Sistema de Estilos e Design

Guia completo do design system, Tailwind CSS v4, cores OKLCH e padrões visuais do projeto TecnoJr.

---

## 🎯 Filosofia de Design

### Princípios

1. **Mobile-First**: Design para mobile, depois desktop
2. **Acessibilidade**: WCAG 2.1 AA minimum
3. **Consistência**: Design tokens e componentes reutilizáveis
4. **Performance**: Lightweight e otimizado

### Brand Identity

- **Cores principais**: Roxo (#8B5CF6) + Azul (#3B82F6)
- **Tipografia**: System fonts (San Francisco, Segoe UI, Roboto)
- **Vibe**: Moderno, tecnológico, jovem, confiável

---

## 🖌️ Tailwind CSS v4

### Por Que Tailwind v4?

Veja [ADR-002](./DECISIONS.md#adr-002-tailwind-v4) para decisão completa.

**Principais features**:
- `@theme` para customização
- Oxide engine (Rust, 10x mais rápido)
- OKLCH colors nativo
- Novas utilities (`text-balance`, `field-sizing`)

### Setup

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom extensions aqui
    },
  },
  plugins: [],
};

export default config;
```

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Custom theme aqui */
}
```

---

## 🎨 Sistema de Cores

### Paleta Principal (OKLCH)

OKLCH = **O**k **L**ightness **C**hroma **H**ue
- Espaço de cores perceptivamente uniforme
- Gradientes mais suaves que RGB/HSL
- Futuro do CSS (suporte crescente)

#### Cores da Marca

| Nome | OKLCH | HEX Equivalente | Uso |
|------|-------|-----------------|-----|
| Purple Primary | `oklch(69% 0.19 290)` | `#8B5CF6` | CTAs, highlights |
| Blue Secondary | `oklch(65% 0.18 250)` | `#3B82F6` | Links, accents |
| Cyan Accent | `oklch(75% 0.13 210)` | `#22D3EE` | Success states |

#### Gradientes

```css
/* Gradiente principal (roxo → azul) */
.gradient-primary {
  background: linear-gradient(
    135deg,
    oklch(69% 0.19 290) 0%,    /* Purple */
    oklch(65% 0.18 250) 100%   /* Blue */
  );
}

/* Gradiente secundário (azul → cyan) */
.gradient-secondary {
  background: linear-gradient(
    135deg,
    oklch(65% 0.18 250) 0%,    /* Blue */
    oklch(75% 0.13 210) 100%   /* Cyan */
  );
}
```

**Uso em Tailwind**:
```tsx
<div className="bg-linear-to-r from-purple-500 to-blue-500">
  Gradiente
</div>
```

---

#### Neutrals (Cinzas)

| Nome | Tailwind | Uso |
|------|----------|-----|
| White | `neutral-50` | Fundos claros |
| Light Gray | `neutral-100` | Cards, containers |
| Medium Gray | `neutral-500` | Texto secundário, placeholders |
| Dark Gray | `neutral-800` | Texto principal |
| Black | `neutral-950` | Headings, ênfase |

---

### Cores Semânticas

| Tipo | Cor | Tailwind | Uso |
|------|-----|----------|-----|
| Success | Green | `green-500` | Mensagens de sucesso |
| Warning | Yellow | `yellow-500` | Avisos |
| Error | Red | `red-500` | Erros, validação |
| Info | Blue | `blue-500` | Informações |

---

### Acessibilidade de Contraste

Todas as combinações seguem **WCAG 2.1 AA**:

| Combinação | Contraste | Status |
|------------|-----------|--------|
| `neutral-950` em `white` | 21:1 | ✅ AAA |
| `neutral-800` em `white` | 12:1 | ✅ AAA |
| `neutral-600` em `white` | 7:1 | ✅ AAA |
| `purple-500` em `white` | 4.8:1 | ✅ AA |
| `blue-500` em `white` | 5.2:1 | ✅ AA |

**Ferramenta**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 📐 Tipografia

### Font Stack

```css
font-family: 
  -apple-system,           /* macOS, iOS */
  BlinkMacSystemFont,      /* macOS Chrome */
  "Segoe UI",              /* Windows */
  Roboto,                  /* Android */
  "Helvetica Neue",        /* Fallback */
  Arial,                   /* Universal fallback */
  sans-serif;              /* Generic */
```

**Vantagem**: 
- System fonts = Zero latência (já instaladas)
- Aparência nativa em cada OS
- Bundle size zero

---

### Escala Tipográfica

Baseada em **Type Scale** (1.25 - Major Third):

| Classe Tailwind | Font Size | Line Height | Uso |
|-----------------|-----------|-------------|-----|
| `text-xs` | 12px / 0.75rem | 1.5 | Captions, labels |
| `text-sm` | 14px / 0.875rem | 1.5 | Body small, metadata |
| `text-base` | 16px / 1rem | 1.5 | Body padrão |
| `text-lg` | 18px / 1.125rem | 1.5 | Lead paragraphs |
| `text-xl` | 20px / 1.25rem | 1.4 | Subtítulos |
| `text-2xl` | 24px / 1.5rem | 1.3 | Títulos H3 |
| `text-3xl` | 30px / 1.875rem | 1.3 | Títulos H2 |
| `text-4xl` | 36px / 2.25rem | 1.2 | Títulos H1 |
| `text-5xl` | 48px / 3rem | 1.1 | Display titles |
| `text-6xl` | 60px / 3.75rem | 1.1 | Hero titles |

---

### Font Weights

| Classe | Peso | Uso |
|--------|------|-----|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Ênfase leve, labels |
| `font-semibold` | 600 | Subtítulos, botões |
| `font-bold` | 700 | Títulos, headings |
| `font-extrabold` | 800 | Hero, display |

---

### Componentes de Tipografia

#### SectionTitle

```tsx
import { SectionTitle } from "@/components/ui/typography";

<SectionTitle size="lg" align="center" as="h2">
  Nossos Projetos
</SectionTitle>
```

**Props**:
- `size`: `sm` | `md` | `lg`
- `align`: `left` | `center` | `right`
- `as`: `h1` | `h2` | `h3` | `h4`

---

#### GradientText

```tsx
import { GradientText } from "@/components/ui/typography";

<h1 className="text-5xl font-bold">
  Bem-vindo à <GradientText>TecnoJr</GradientText>
</h1>
```

Resultado: TecnoJr com gradiente roxo → azul

---

#### Text Utilities

```tsx
// Quebra otimizada de linhas
<p className="text-balance">
  Texto que quebra de forma visualmente agradável...
</p>

// Prevent widow (última palavra sozinha)
<h1 className="text-pretty">
  Título com quebra inteligente
</h1>

// Truncate com ellipsis
<p className="truncate">
  Texto muito longo que será cortado...
</p>

// Line clamp (múltiplas linhas)
<p className="line-clamp-3">
  Texto que será truncado após 3 linhas com reticências no final...
</p>
```

---

## 📏 Espaçamento

### Escala de Espaços

Tailwind usa múltiplos de **0.25rem** (4px):

| Classe | Valor | Uso |
|--------|-------|-----|
| `p-1` / `m-1` | 4px | Micro espaços |
| `p-2` / `m-2` | 8px | Compact |
| `p-4` / `m-4` | 16px | Padrão |
| `p-6` / `m-6` | 24px | Médio |
| `p-8` / `m-8` | 32px | Grande |
| `p-12` / `m-12` | 48px | Extra grande |
| `p-16` / `m-16` | 64px | Hero sections |

---

### Seções de Página

```tsx
// Wrapper padrão de seção
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4">
    {/* Conteúdo */}
  </div>
</section>
```

**Padrão**:
- Desktop: `py-24` (96px vertical)
- Mobile: `py-16` (64px vertical)
- Container: max-width com padding lateral

---

### Grid & Flex Layouts

#### Grid Responsivo

```tsx
// 1 coluna mobile → 2 tablet → 3 desktop
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card />
  <Card />
  <Card />
</div>
```

#### Flex Patterns

```tsx
// Centralizado
<div className="flex items-center justify-center">

// Space between
<div className="flex items-center justify-between">

// Vertical stack com gap
<div className="flex flex-col gap-4">
```

---

## 🎭 Componentes de UI

### Sistema de Botões

Veja [component-index.md](../development/component-index.md#sistema-de-botões) para detalhes completos.

#### Variantes

```tsx
import { Button } from "@/components/ui/buttons";

// Gradiente primário (CTAs)
<Button variant="gradient-primary" size="lg">
  Começar Agora
</Button>

// WhatsApp
<Button variant="gradient-whatsapp">
  Fale Conosco
</Button>

// Outline com gradiente
<Button variant="outline-gradient">
  Saiba Mais
</Button>

// Ghost (navegação)
<Button variant="ghost-gradient">
  Ver Mais
</Button>
```

---

### Cards

#### BaseCard

```tsx
import { BaseCard } from "@/components/ui/cards";

<BaseCard
  icon={Rocket}
  title="Inovação"
  description="Soluções tecnológicas de ponta"
  iconColor="from-purple-500 to-blue-500"
/>
```

**Features**:
- Ícone com gradiente
- Hover: eleva card (`hover:scale-105`)
- Borda sutil (`border-neutral-200`)

---

## 🎬 Animações

### Framer Motion Variants

#### FadeUp (Padrão)

```tsx
import { FadeUp } from "@/components/animated";

<FadeUp>
  <Card />
</FadeUp>
```

**Animação**:
- Inicial: `opacity: 0, y: 20`
- Final: `opacity: 1, y: 0`
- Duração: `0.5s`
- Easing: `easeOut`

---

#### Stagger (Sequencial)

```tsx
import { StaggerContainer, FadeUp } from "@/components/animated";

<StaggerContainer staggerChildren={0.1}>
  {items.map(item => (
    <FadeUp key={item.id}>
      <Card {...item} />
    </FadeUp>
  ))}
</StaggerContainer>
```

**Resultado**: Cards aparecem um após outro com 0.1s de delay

---

### CSS Transitions

Para animações simples, use CSS:

```tsx
<button className="transition-all duration-300 hover:scale-105">
  Hover Me
</button>
```

**Utilities**:
- `transition-all`: Todas as propriedades
- `transition-colors`: Apenas cores
- `transition-transform`: Apenas transforms
- `duration-300`: 300ms
- `ease-in-out`: Easing suave

---

### Accessibility: Reduced Motion

Sempre respeite preferência do usuário:

```tsx
"use client";

import { useReducedMotion } from "@/lib/hooks";

export function AnimatedCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5, // Sem animação se preferir
      }}
    >
      Content
    </motion.div>
  );
}
```

---

## 🌙 Dark Mode (Futuro)

Projeto atualmente é light mode only, mas preparado para dark mode:

### Setup

```tsx
// tailwind.config.ts
export default {
  darkMode: "class", // ou "media"
  // ...
};
```

### Uso

```tsx
<div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
  Texto que se adapta ao tema
</div>
```

### Theme Provider

```tsx
"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
```

---

## 📱 Responsividade

### Breakpoints

| Breakpoint | Min Width | Dispositivo |
|------------|-----------|-------------|
| `sm` | 640px | Phones landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

---

### Mobile-First Approach

```tsx
// ❌ RUIM: Desktop-first
<div className="lg:text-base md:text-sm text-xs">

// ✅ BOM: Mobile-first
<div className="text-xs md:text-sm lg:text-base">
  Texto pequeno em mobile, maior em desktop
</div>
```

**Princípio**: Escreva CSS para mobile, depois sobrescreva com breakpoints.

---

### Container

```tsx
// Container responsivo com max-width
<div className="container mx-auto px-4">
  Conteúdo centralizado
</div>
```

**Max widths**:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

### Grid Responsivo (Padrão)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {/* 1 coluna mobile, 2 tablet, 3 desktop */}
</div>
```

---

## ♿ Acessibilidade

### Focus States

Sempre visível para navegação por teclado:

```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
  Botão acessível
</button>
```

**Elementos**:
- `focus:ring-2`: Ring de 2px
- `focus:ring-purple-500`: Cor da marca
- `focus:ring-offset-2`: Espaço branco entre elemento e ring

---

### ARIA Labels

```tsx
// Link sem texto visível
<a href="/sobre" aria-label="Sobre a TecnoJr">
  <InfoIcon aria-hidden="true" />
</a>

// Form com erro
<input
  aria-invalid={hasError}
  aria-describedby="email-error"
/>
{hasError && (
  <p id="email-error" role="alert">
    Email inválido
  </p>
)}
```

---

### Skip Links

Implementado no layout raiz:

```tsx
// components/ui/skip-link.tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50"
>
  Pular para conteúdo principal
</a>
```

Visível apenas quando focado com Tab.

---

## 🧰 Utilities Customizadas

### `cn()` - Class Name Merge

Combina classes Tailwind com deduplicação:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Uso**:
```tsx
import { cn } from "@/lib/utils";

<div
  className={cn(
    "rounded-lg p-4", // Base
    variant === "primary" && "bg-purple-500", // Condicional
    error && "border-red-500", // Condicional
    className // Props externas
  )}
/>
```

**Por que não template strings?**
```tsx
// ❌ RUIM: Classes duplicadas não resolvem
className={`bg-red-500 ${props.className}`} // Se props.className = "bg-blue-500", ambas aplicam!

// ✅ BOM: twMerge resolve conflitos
cn("bg-red-500", "bg-blue-500") // → "bg-blue-500"
```

---

## 📚 Design Tokens (Referência Rápida)

### Cores
```css
purple-500   → oklch(69% 0.19 290)  → #8B5CF6
blue-500     → oklch(65% 0.18 250)  → #3B82F6
neutral-950  → oklch(15% 0 0)       → #171717
```

### Espaçamento
```
p-4  → 16px
p-6  → 24px
p-8  → 32px
p-12 → 48px
p-16 → 64px
```

### Tipografia
```
text-base → 16px / 1.5
text-2xl  → 24px / 1.3
text-4xl  → 36px / 1.2
```

### Bordas
```
rounded-md  → 6px
rounded-lg  → 8px
rounded-xl  → 12px
rounded-2xl → 16px
```

### Sombras
```
shadow-sm → subtle
shadow    → medium
shadow-lg → elevated
shadow-xl → modal
```

---

## 🎯 Checklist de Design

Ao criar novo componente:

- [ ] **Cores**: Usa palette da marca
- [ ] **Tipografia**: Escala consistente
- [ ] **Espaçamento**: Múltiplos de 4px
- [ ] **Responsivo**: Mobile-first
- [ ] **Hover/Focus**: Estados visuais claros
- [ ] **Contraste**: WCAG AA mínimo (4.5:1)
- [ ] **ARIA**: Labels onde necessário
- [ ] **Animações**: Respeita `prefers-reduced-motion`
- [ ] **Consistent**: Coerente com design system

---

## 📖 Recursos Adicionais

- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Documentação oficial
- **[Tailwind v4 Beta](https://tailwindcss.com/blog/tailwindcss-v4-beta)** - Novidades da v4
- **[OKLCH Color Picker](https://oklch.com/)** - Escolher cores OKLCH
- **[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)** - Validar contraste
- **[Decisions (ADRs)](./DECISIONS.md)** - Por quê Tailwind v4 e OKLCH
- **[Índice de Componentes](../development/component-index.md)** - Componentes disponíveis

---

**Dúvidas sobre estilos?** Consulte o Storybook ou abra uma discussão!

[← Voltar para Documentação](../README.md)
