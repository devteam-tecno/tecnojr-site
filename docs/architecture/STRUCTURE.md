# 🏗️ Estrutura e Arquitetura

Documentação profunda da estrutura, organização e padrões arquiteturais do projeto TecnoJr.

---

## 📐 Visão Geral da Arquitetura

### Diagrama de Alto Nível

```
┌─────────────────────────────────────────────────────────┐
│                     BROWSER (Client)                     │
├─────────────────────────────────────────────────────────┤
│  React 19 Components                                     │
│  ├─ Server Components (RSC) ← Renderizados no servidor  │
│  └─ Client Components ("use client") ← Interativos      │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/HTTPS
┌────────────────────▼────────────────────────────────────┐
│               NEXT.JS 16 APP ROUTER                      │
├─────────────────────────────────────────────────────────┤
│  Routing (file-based)                                    │
│  ├─ Pages (app/**page.tsx)                             │
│  ├─ Layouts (app/**/layout.tsx)                        │
│  ├─ API Routes (app/api/**/route.ts)                   │
│  └─ Metadata (generateMetadata)                         │
│                                                          │
│  Data Fetching                                           │
│  ├─ Server Components (fetch com cache)                │
│  └─ API Routes (integração externa)                    │
│                                                          │
│  Rendering                                               │
│  ├─ SSR (Server-Side Rendering)                        │
│  ├─ SSG (Static Site Generation)                       │
│  └─ ISR (Incremental Static Regeneration)              │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                 EXTERNAL SERVICES                        │
├─────────────────────────────────────────────────────────┤
│  Resend (Email)                                          │
│  Vercel Analytics (Tracking)                             │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Estrutura de Diretórios

### Visão Completa

```
tecnojr-site/
├── 📄 Configs Raiz
│   ├── next.config.ts          # Configuração Next.js
│   ├── tsconfig.json            # TypeScript config
│   ├── biome.json               # Linter/formatter
│   ├── tailwind.config.ts       # Tailwind CSS
│   ├── postcss.config.mjs       # PostCSS (Tailwind)
│   ├── vitest.config.ts         # Testes unitários
│   ├── playwright.config.ts     # Testes E2E
│   ├── components.json          # Shadcn UI
│   └── package.json             # Dependências
│
├── 📂 src/                      # Código-fonte
│   ├── 📂 app/                  # Next.js App Router
│   │   ├── layout.tsx           # Layout raiz (HTML, body, providers)
│   │   ├── page.tsx             # Homepage (/)
│   │   ├── globals.css          # Estilos globais
│   │   ├── 📂 sobre/            # Rota /sobre
│   │   │   └── page.tsx
│   │   ├── 📂 projetos/         # Rota /projetos
│   │   │   └── page.tsx
│   │   ├── 📂 press-kit/        # Rota /press-kit
│   │   │   └── page.tsx
│   │   └── 📂 api/              # API Routes
│   │       └── 📂 contact/
│   │           └── route.ts     # POST /api/contact
│   │
│   ├── 📂 components/           # Componentes React
│   │   ├── 📂 animated/         # Wrappers de animação
│   │   ├── 📂 layout/           # Header, Footer, wrappers
│   │   ├── 📂 sections/         # Seções completas de página
│   │   └── 📂 ui/               # Componentes UI reutilizáveis
│   │       ├── 📂 buttons/
│   │       ├── 📂 cards/
│   │       ├── 📂 form/
│   │       ├── 📂 navigation/
│   │       ├── 📂 typography/
│   │       └── 📂 primitives/   # Shadcn UI base
│   │
│   └── 📂 lib/                  # Bibliotecas e utilitários
│       ├── 📂 animation/        # Configs e variants de animação
│       ├── 📂 config/           # Configs do app (company, metadata)
│       ├── 📂 data/             # Dados estáticos (projetos, membros)
│       ├── 📂 hooks/            # Hooks customizados
│       ├── 📂 types/            # Tipos TypeScript compartilhados
│       └── 📂 utils/            # Funções utilitárias
│
├── 📂 public/                   # Assets estáticos
│   └── 📂 assets/               # Imagens, logos, ícones
│       ├── 📂 brand/            # Logos TecnoJr
│       ├── 📂 projects/         # Screenshots de projetos
│       └── 📂 members/          # Fotos da equipe
│
├── 📂 docs/                     # Documentação
│   ├── 📂 getting-started/
│   ├── 📂 development/
│   ├── 📂 architecture/
│   └── 📂 deployment/
│
├── 📂 e2e/                      # Testes end-to-end (Playwright)
├── 📂 tests/                    # Setup de testes (Vitest)
└── 📂 .storybook/               # Configuração Storybook
    └── 📂 docs/                 # Docs do Storybook
```

---

## 🔀 Fluxo de Rendering

### 1. Homepage (/)

```
User → https://tecnojr.com.br/
  ↓
Next.js Server
  ↓
app/layout.tsx (Root Layout)
  ├─ HTML structure
  ├─ Providers (Analytics, Theme)
  └─ Global CSS
  ↓
app/page.tsx (Homepage)
  ├─ Metadata (SEO)
  ├─ HeroHome (Server Component ✅)
  ├─ FeaturesSection (Server Component ✅)
  ├─ ServicesSection (Server Component ✅)
  ├─ ProjectsSection (Client Component ❗ - Tabs)
  └─ BudgetSection (Client Component ❗ - Form)
  ↓
HTML Response → Browser
  ↓
Hydration (React takes over)
  ├─ Framer Motion animations
  ├─ Form interactions
  └─ Button clicks
```

### 2. API Call (Contact Form)

```
User fills form → Submit
  ↓
Client Component (contact-form-card.tsx)
  ├─ React Hook Form validates
  └─ Zod schema check
  ↓
fetch("/api/contact", { method: "POST", body: data })
  ↓
Next.js API Route (app/api/contact/route.ts)
  ├─ Validate with Zod (again, server-side)
  ├─ Send email via Resend
  └─ Return { success: true }
  ↓
Client updates UI (toast notification)
```

---

## 🧩 Padrões Arquiteturais

### 1. Server vs Client Components

#### Regra de Ouro
> **Use Server Components por padrão**. Só adicione `"use client"` quando necessário.

#### Quando usar Server Components (padrão)

✅ **Bom para**:
- Buscar dados (fetch, banco de dados)
- Acessar recursos do servidor (filesystem, env vars)
- Reduzir JavaScript no cliente
- Conteúdo estático (textos, imagens)

```tsx
// ✅ Server Component (sem "use client")
import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/ui/cards";

export default function ServicesPage() {
  return (
    <div>
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}
```

#### Quando usar Client Components

✅ **Necessário para**:
- Event listeners (`onClick`, `onChange`)
- React Hooks (`useState`, `useEffect`)
- Browser APIs (`window`, `localStorage`)
- Framer Motion (animações)
- Bibliotecas que usam Context

```tsx
// ❗ Client Component (precisa "use client")
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/buttons";

export function InteractiveButton() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </Button>
  );
}
```

#### Padrão de Composição

**❌ RUIM**: Forçar toda a página a ser Client Component

```tsx
"use client"; // ❌ Torna TUDO client-side

import { Header } from "@/components/layout";
import { HeroHome } from "@/components/sections";
import { InteractiveForm } from "@/components/forms";

export default function Page() {
  return (
    <>
      <Header /> {/* Não precisa ser client */}
      <HeroHome /> {/* Não precisa ser client */}
      <InteractiveForm /> {/* SÓ ESTE precisa */}
    </>
  );
}
```

**✅ BOM**: Client Component isolado

```tsx
// ✅ Server Component (padrão)
import { Header } from "@/components/layout";
import { HeroHome } from "@/components/sections";
import { InteractiveForm } from "@/components/forms"; // Este tem "use client"

export default function Page() {
  return (
    <>
      <Header /> {/* Server Component */}
      <HeroHome /> {/* Server Component */}
      <InteractiveForm /> {/* Client Component isolado */}
    </>
  );
}
```

---

### 2. Data Fetching Strategy

#### Dados Estáticos (Build Time)

Para conteúdo que **não muda frequentemente** (projetos, membros, serviços):

```tsx
// ✅ Importa de arquivos TypeScript
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
  // "projects" é resolvido em build time
  return <ProjectList projects={projects} />;
}
```

**Vantagens**:
- ⚡ Ultra rápido (dados em bundle)
- 💰 Zero custo (sem requests)
- 🔒 Type-safe (TypeScript)

**Quando usar**:
- Dados gerenciados via Git
- Mudanças controladas (via PR)
- Conteúdo estruturado

---

#### Dados Dinâmicos (Request Time)

Para conteúdo **que muda** (usuários logados, dados em tempo real):

```tsx
// ✅ Fetch em Server Component
async function getProjects() {
  const res = await fetch("https://api.example.com/projects", {
    cache: "no-store", // Sempre fresh
  });
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectList projects={projects} />;
}
```

**Opções de cache**:

| Opção | Comportamento | Uso |
|-------|---------------|-----|
| `force-cache` | Cache indefinido (padrão) | Dados imutáveis |
| `no-store` | Sempre busca fresh | Dados em tempo real |
| `{ revalidate: 60 }` | Cache por 60s | ISR (atualiza periodicamente) |

---

### 3. Routing Patterns

#### File-Based Routing

```
app/
├── page.tsx                    → /
├── sobre/
│   └── page.tsx                → /sobre
├── projetos/
│   ├── page.tsx                → /projetos
│   └── [slug]/
│       └── page.tsx            → /projetos/[slug]
└── api/
    └── contact/
        └── route.ts            → /api/contact
```

#### Rotas Especiais

| Arquivo | Propósito |
|---------|-----------|
| `layout.tsx` | Layout compartilhado (não re-renderiza) |
| `loading.tsx` | UI de loading (Suspense boundary) |
| `error.tsx` | Error boundary |
| `not-found.tsx` | 404 customizado |
| `route.ts` | API endpoint |

#### Exemplo: Layout Aninhado

```tsx
// app/layout.tsx (Root Layout)
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header /> {/* Aparece em TODAS as páginas */}
        {children}
        <Footer /> {/* Aparece em TODAS as páginas */}
      </body>
    </html>
  );
}

// app/projetos/layout.tsx (Nested Layout)
export default function ProjectsLayout({ children }) {
  return (
    <div>
      <ProjectsHeader /> {/* Só aparece em /projetos/* */}
      {children}
    </div>
  );
}

// app/projetos/page.tsx
export default function ProjectsPage() {
  return <div>Lista de projetos</div>;
}
```

Resultado: `/projetos` renderiza:
```
RootLayout
  ├─ Header
  ├─ ProjectsLayout
  │   ├─ ProjectsHeader
  │   └─ ProjectsPage
  └─ Footer
```

---

### 4. Metadata Strategy

#### Metadata Estático

```tsx
// app/sobre/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | TecnoJr",
  description: "Conheça a história da TecnoJr",
  openGraph: {
    title: "Sobre Nós | TecnoJr",
    description: "Conheça a história da TecnoJr",
    images: ["/assets/og-sobre.jpg"],
  },
};

export default function AboutPage() {
  return <div>Sobre</div>;
}
```

#### Metadata Dinâmico

```tsx
// app/projetos/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const project = await getProject(params.slug);

  return {
    title: `${project.title} | TecnoJr`,
    description: project.description,
    openGraph: {
      images: [project.image],
    },
  };
}
```

#### Template Global

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "TecnoJr",
    template: "%s | TecnoJr", // Páginas individuais estendem
  },
};
```

---

### 5. Component Organization

#### Hierarquia de Componentes

```
Páginas (app/)
  ↓
Seções (sections/)
  ├─ FeaturesSection
  ├─ ServicesSection
  └─ ProjectsSection
  ↓
Cards (ui/cards/)
  ├─ FeatureCard
  ├─ ServiceCard
  └─ ProjectCard
  ↓
Primitivos (ui/)
  ├─ Button
  ├─ Input
  └─ Typography
```

#### Regra de Composição

> Componente de **nível superior** usa componentes de **nível inferior**, nunca o contrário.

```tsx
// ✅ BOM
// sections/features-section.tsx
import { FeatureCard } from "@/components/ui/cards";

export function FeaturesSection() {
  return (
    <div>
      {features.map(feature => (
        <FeatureCard {...feature} />
      ))}
    </div>
  );
}

// ❌ RUIM
// ui/cards/feature-card.tsx
import { FeaturesSection } from "@/components/sections"; // ❌ Circular!
```

---

### 6. State Management

#### Local State (useState)

Para estado **de componente** (form inputs, toggles, modals):

```tsx
"use client";

import { useState } from "react";

export function FilterableProjetos() {
  const [filter, setFilter] = useState("all");

  const filtered = projects.filter(p => 
    filter === "all" || p.type === filter
  );

  return (
    <div>
      <FilterButtons filter={filter} setFilter={setFilter} />
      <ProjectList projects={filtered} />
    </div>
  );
}
```

---

#### URL State (searchParams)

Para estado **compartilhável via URL** (filtros, paginação):

```tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";

export function FilterableProjects() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filter = searchParams.get("type") || "all";

  const setFilter = (type: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("type", type);
    router.push(`?${params.toString()}`);
  };

  return <div>{/* ... */}</div>;
}
```

URL resultante: `/projetos?type=web`

---

#### Global State (Context)

Para estado **global** (tema, auth, user preferences):

```tsx
// lib/contexts/theme-context.tsx
"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}>({ theme: "light", toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

**Uso**:
```tsx
// app/layout.tsx
import { ThemeProvider } from "@/lib/contexts/theme-context";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

---

#### Server State (React Query) - Futuro

Para **cache de API calls** (não implementado ainda, mas recomendado para escalar):

```bash
npm install @tanstack/react-query
```

```tsx
"use client";

import { useQuery } from "@tanstack/react-query";

export function ProjectsList() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => fetch("/api/projects").then(res => res.json()),
  });

  if (isLoading) return <Loading />;

  return <div>{/* render projects */}</div>;
}
```

---

## 🔐 Segurança

### Environment Variables

```env
# .env.local (nunca commitar!)
RESEND_API_KEY=re_xxxxx
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXX
```

**Convenção**:
- `NEXT_PUBLIC_*`: Exposto no browser (analytics, API públicas)
- Sem prefixo: APENAS servidor (API keys, secrets)

**Acessar**:
```tsx
// Server Component ou API Route
const apiKey = process.env.RESEND_API_KEY; // ✅

// Client Component
const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID; // ✅
const apiKey = process.env.RESEND_API_KEY; // ❌ undefined!
```

---

### Rate Limiting

Para `/api/contact`, implementar rate limiting (ver [ADR-002](./DECISIONS.md#rate-limiting)):

```typescript
import { Ratelimit } from "@upstash/ratelimit";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "60 s"),
});
```

---

### Input Sanitization

Sempre validar inputs com Zod (tanto client quanto server):

```typescript
// Validação client-side (UX)
const onSubmit = async (data) => {
  const validated = contactSchema.parse(data); // Lança erro se inválido
  // ...
};

// Validação server-side (SEGURANÇA)
export async function POST(request) {
  const body = await request.json();
  const validated = contactSchema.parse(body); // Impede dados maliciosos
  // ...
}
```

---

## 📊 Performance

### Bundle Analysis

```bash
npm run build
# Vercel automaticamente analisa bundle size
```

**Metas**:
- First Load JS: < 200KB
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

---

### Image Optimization

Sempre usar `next/image`:

```tsx
import Image from "next/image";

<Image
  src="/assets/project.jpg"
  alt="Projeto XYZ"
  width={800}
  height={600}
  priority={isAboveFold} // Para imagens acima da dobra
/>
```

**Benefícios**:
- Lazy loading automático
- Responsive images (srcset)
- AVIF/WebP automático
- Blur placeholder

---

### Code Splitting

Next.js faz automaticamente, mas pode otimizar com `dynamic`:

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/heavy"), {
  loading: () => <Loading />,
  ssr: false, // Desabilita SSR se não for crítico
});
```

---

## 🧪 Testing Strategy

### Pirâmide de Testes

```
    /\
   /E2E\      ← Poucos (smoke tests, fluxos críticos)
  /------\
 /  INTEG \   ← Alguns (API routes, formulários)
/----------\
│   UNIT   │  ← Muitos (componentes, utilitários)
└──────────┘
```

### Unit Tests (Vitest)

Para **componentes isolados** e **utilitários**:

```typescript
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

test("renderiza botão", () => {
  render(<Button>Click</Button>);
  expect(screen.getByRole("button")).toHaveTextContent("Click");
});
```

### Integration Tests (Playwright Component Testing)

Para **fluxos com múltiplos componentes**:

```typescript
test("formulário de contato envia mensagem", async ({ mount }) => {
  const component = await mount(<ContactForm />);
  await component.getByLabel("Nome").fill("João");
  await component.getByLabel("Email").fill("joao@example.com");
  await component.getByRole("button", { name: "Enviar" }).click();
  await expect(component.getByText("Enviado com sucesso")).toBeVisible();
});
```

### E2E Tests (Playwright)

Para **fluxos completos de usuário**:

```typescript
test("usuário consegue navegar e enviar formulário", async ({ page }) => {
  await page.goto("/");
  await page.click('text="Sobre"');
  await expect(page).toHaveURL("/sobre");
  await page.click('text="Orçamento"');
  await page.fill('[name="email"]', "test@example.com");
  await page.click('button:has-text("Enviar")');
  await expect(page.locator("text=Enviado")).toBeVisible();
});
```

---

## 📚 Documentação Relacionada

- **[Decisões Arquiteturais (ADRs)](./DECISIONS.md)** - Por quê fizemos estas escolhas
- **[Sistema de Estilos](./STYLING.md)** - Tailwind e design system
- **[Diretório Lib](../development/lib-directory.md)** - Organização de lib/
- **[Guia de Componentes](../development/component-creation.md)** - Como criar componentes

---

**Dúvidas sobre arquitetura?** Abra uma discussão ou consulte as ADRs!

[← Voltar para Documentação](../README.md)
