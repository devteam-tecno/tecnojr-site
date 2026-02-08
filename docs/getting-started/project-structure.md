# 📁 Estrutura do Projeto

Guia completo da organização de arquivos e diretórios do site TecnoJr.

---

## 🌳 Árvore de Diretórios

```
tecnojr-site/
├── 📁 .github/                    # Configurações do GitHub
│   ├── copilot-instructions.md    # Instruções para GitHub Copilot
│   └── workflows/                 # GitHub Actions (CI/CD)
├── 📁 .storybook/                 # Configuração do Storybook
│   ├── docs/                      # Documentação MDX do Storybook
│   │   ├── Introduction.mdx
│   │   ├── Components.mdx
│   │   ├── Animations.mdx
│   │   ├── Colors.mdx
│   │   ├── Gradients.mdx
│   │   ├── Testing.mdx
│   │   └── Deployment.mdx
│   ├── main.ts                    # Config principal
│   └── preview.tsx                # Preview config
├── 📁 public/                     # Assets estáticos (servidos na raiz)
│   └── assets/                    # Imagens, ícones, logos
│       ├── logo/                  # Logos TecnoJr (variações)
│       ├── icon/                  # Ícones da marca
│       ├── typo/                  # Tipografias
│       ├── members/               # Fotos dos membros
│       └── projects/              # Imagens de projetos
├── 📁 src/                        # Código-fonte principal
│   ├── 📁 app/                    # Next.js App Router (rotas)
│   │   ├── layout.tsx             # Layout raiz
│   │   ├── page.tsx               # Homepage (/)
│   │   ├── globals.css            # Estilos globais + Tailwind
│   │   ├── sobre/                 # Página "Sobre" (/sobre)
│   │   │   └── page.tsx
│   │   ├── projetos/              # Página de projetos (/projetos)
│   │   │   └── page.tsx
│   │   ├── press-kit/             # Página press kit (/press-kit)
│   │   │   └── page.tsx
│   │   └── api/                   # API Routes
│   │       └── contact/           # Endpoint de contato
│   │           └── route.ts       # POST /api/contact
│   ├── 📁 components/             # Componentes React
│   │   ├── 📁 animated/           # Wrappers de animação
│   │   │   └── motion-wrappers.tsx # FadeUp, FadeDown, etc
│   │   ├── 📁 layout/             # Componentes de layout
│   │   │   ├── header/
│   │   │   │   ├── header.tsx
│   │   │   │   ├── desktop-navigation.tsx
│   │   │   │   └── mobile-navigation.tsx
│   │   │   ├── footer/
│   │   │   │   ├── footer.tsx
│   │   │   │   ├── description.tsx
│   │   │   │   ├── quick-links.tsx
│   │   │   │   ├── contact-info.tsx
│   │   │   │   └── copyright.tsx
│   │   │   ├── max-width-wrapper.tsx
│   │   │   ├── section-wrapper.tsx
│   │   │   ├── section.tsx
│   │   │   ├── section-container.tsx
│   │   │   ├── content-container.tsx
│   │   │   └── responsive-grid.tsx
│   │   ├── 📁 sections/           # Seções de página completas
│   │   │   ├── 📁 hero/           # Variantes de hero
│   │   │   │   ├── hero-base.tsx
│   │   │   │   ├── hero-home.tsx
│   │   │   │   ├── hero-about.tsx
│   │   │   │   ├── hero-projects.tsx
│   │   │   │   ├── hero-press-kit.tsx
│   │   │   │   ├── hero-stats.tsx
│   │   │   │   └── hero-heading.tsx
│   │   │   ├── 📁 budget/         # Seção de orçamento
│   │   │   │   ├── benefits-list.tsx
│   │   │   │   └── contact-form-card.tsx
│   │   │   ├── 📁 press-kit/      # Seções press kit
│   │   │   │   ├── logos-section.tsx
│   │   │   │   ├── colors-section.tsx
│   │   │   │   ├── alternatives-section.tsx
│   │   │   │   └── drive-section.tsx
│   │   │   ├── features-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── projects-full-section.tsx
│   │   │   ├── ideals-section.tsx
│   │   │   ├── members-section.tsx
│   │   │   ├── members-section-wrapper.tsx
│   │   │   ├── about-section.tsx
│   │   │   └── budget-section.tsx
│   │   └── 📁 ui/                 # Componentes UI reutilizáveis
│   │       ├── 📁 buttons/        # Sistema de botões
│   │       │   ├── button.tsx
│   │       │   ├── button.test.tsx
│   │       │   ├── button.stories.tsx
│   │       │   ├── button-showcase.tsx
│   │       │   └── index.ts
│   │       ├── 📁 cards/          # Tipos de cards
│   │       │   ├── base-card.tsx
│   │       │   ├── base-card.test.tsx
│   │       │   ├── feature-card.tsx
│   │       │   ├── feature-card.test.tsx
│   │       │   ├── feature-card.stories.tsx
│   │       │   ├── service-card.tsx
│   │       │   ├── service-card.test.tsx
│   │       │   ├── service-card.stories.tsx
│   │       │   ├── project-card.tsx
│   │       │   ├── project-card.test.tsx
│   │       │   ├── project-card.stories.tsx
│   │       │   ├── member-card.tsx
│   │       │   ├── member-card.test.tsx
│   │       │   ├── asset-card.tsx
│   │       │   ├── color-card.tsx
│   │       │   ├── card.tsx (primitivo)
│   │       │   └── index.ts
│   │       ├── 📁 form/           # Componentes de formulário
│   │       │   ├── input.tsx
│   │       │   ├── textarea.tsx
│   │       │   └── form-message.tsx
│   │       ├── 📁 feedback/       # Feedback visual
│   │       │   ├── loading-spinner.tsx
│   │       │   └── alert.tsx
│   │       ├── 📁 navigation/     # Navegação
│   │       │   ├── tabs.tsx
│   │       │   └── filter-pill.tsx
│   │       ├── 📁 primitives/     # Primitivos base
│   │       │   ├── card.tsx
│   │       │   └── separator.tsx
│   │       └── 📁 typography/     # Sistema de tipografia
│   │           ├── section-title.tsx
│   │           ├── section-title.stories.tsx
│   │           ├── gradient-text.tsx
│   │           ├── inline-highlight.tsx
│   │           ├── lead-paragraph.tsx
│   │           ├── text.tsx
│   │           ├── code-text.tsx
│   │           ├── code-text.stories.tsx
│   │           └── index.ts
│   ├── 📁 lib/                    # Biblioteca de utilitários
│   │   ├── 📁 animation/          # Sistema de animações
│   │   │   ├── animations.ts      # Hooks customizados
│   │   │   ├── animations.test.ts
│   │   │   └── animation-variants.ts # Variantes Framer Motion
│   │   ├── 📁 config/             # Configurações da empresa
│   │   │   ├── company.ts         # Info da empresa (COMPANY_INFO)
│   │   │   ├── contact.ts         # Dados de contato
│   │   │   ├── content.ts         # Conteúdo textual
│   │   │   ├── social.ts          # Links sociais
│   │   │   ├── stats.ts           # Estatísticas (COMPANY_STATS)
│   │   │   └── index.ts           # Barrel export
│   │   ├── 📁 data/               # Dados estruturados
│   │   │   ├── features.ts        # Diferenciais
│   │   │   ├── ideals.ts          # Missão, visão, valores
│   │   │   ├── members.ts         # Membros da equipe
│   │   │   ├── press-kit.ts       # Material de marca
│   │   │   ├── projects.ts        # Projetos (external, internal)
│   │   │   ├── services.ts        # Serviços oferecidos
│   │   │   └── index.ts           # Barrel export
│   │   ├── 📁 hooks/              # React Hooks customizados
│   │   │   ├── use-reduced-motion.ts # Hook de acessibilidade
│   │   │   └── index.ts
│   │   ├── 📁 types/              # Tipos TypeScript
│   │   │   ├── types.ts           # Todas as interfaces
│   │   │   ├── types.test.ts      # Testes de validação
│   │   │   └── index.ts
│   │   ├── 📁 utils/              # Funções utilitárias
│   │   │   ├── icons.ts           # Mapeamento de ícones
│   │   │   ├── metadata.ts        # Helpers de SEO
│   │   │   ├── navigation.ts      # Sistema de navegação
│   │   │   ├── styles.ts          # Utilitários de estilo
│   │   │   ├── styles.test.ts
│   │   │   ├── utils.ts           # Funções gerais (cn, etc)
│   │   │   └── utils.test.ts
│   │   └── constants.ts           # Constantes globais
│   └── assets/                    # Assets de origem (se houver)
├── 📁 e2e/                        # Testes End-to-End (Playwright)
│   ├── home.spec.ts
│   ├── navigation.spec.ts
│   ├── projects.spec.ts
│   ├── sobre.spec.ts
│   └── contact.spec.ts
├── 📁 tests/                      # Utilitários de teste
│   ├── setup.ts                   # Config global de testes
│   ├── test-utils.tsx             # Custom render, etc
│   └── mocks/                     # Mocks compartilhados
├── 📁 docs/                       # Documentação do projeto
│   ├── README.md                  # Índice da documentação
│   ├── VERIFICATION-GUIDE.md      # Guia de verificação
│   ├── 📁 getting-started/        # Primeiros passos
│   │   ├── setup.md
│   │   ├── contributing.md
│   │   └── project-structure.md (você está aqui!)
│   ├── 📁 development/            # Guias de desenvolvimento
│   │   ├── component-index.md
│   │   ├── component-creation.md
│   │   ├── lib-directory.md
│   │   ├── data-management.md
│   │   ├── style-guide.md
│   │   ├── button-system.md
│   │   ├── animations-guide.md
│   │   ├── testing.md
│   │   ├── api-routes.md
│   │   └── forms-validation.md
│   ├── 📁 architecture/           # Arquitetura
│   │   ├── DECISIONS.md
│   │   ├── STRUCTURE.md
│   │   └── STYLING.md
│   ├── 📁 deployment/             # Deploy
│   │   └── deployment.md
│   └── 📁 storybook/              # Storybook
│       ├── guide.md
│       └── writing-stories.md
├── 📄 .env.example                # Exemplo de variáveis de ambiente
├── 📄 .env.local                  # Variáveis locais (não commitado)
├── 📄 .gitignore                  # Arquivos ignorados pelo Git
├── 📄 biome.json                  # Configuração do Biome
├── 📄 components.json             # Configuração Shadcn UI
├── 📄 next.config.ts              # Configuração Next.js
├── 📄 next-env.d.ts               # Types do Next.js (gerado)
├── 📄 package.json                # Dependências e scripts
├── 📄 package-lock.json           # Lock de dependências
├── 📄 playwright.config.ts        # Configuração Playwright
├── 📄 postcss.config.mjs          # Configuração PostCSS
├── 📄 README.md                   # README principal
├── 📄 SECURITY.md                 # Política de segurança
├── 📄 tailwind.config.js          # Configuração Tailwind
├── 📄 tsconfig.json               # Configuração TypeScript
├── 📄 tsconfig.node.json          # TS config para Node
├── 📄 vitest.config.ts            # Configuração Vitest
└── 📄 vitest.shims.d.ts           # Types do Vitest
```

---

## 📂 Detalhamento Por Diretório

### `/src/app/` - Next.js App Router

**O que é**: Sistema de roteamento baseado em arquivos do Next.js 16.

**Estrutura**:
```
app/
├── layout.tsx        # Layout raiz (envolve todas as páginas)
├── page.tsx          # Homepage (rota /)
├── globals.css       # Estilos globais
├── [pagina]/         # Pasta = rota dinâmica
│   └── page.tsx      # Página dessa rota
└── api/              # API Routes
    └── [endpoint]/
        └── route.ts  # Handler HTTP (GET, POST, etc)
```

**Convenções**:
- `page.tsx` → renderiza a página
- `layout.tsx` → layout compartilhado
- `loading.tsx` → UI de carregamento
- `error.tsx` → UI de erro
- `route.ts` → API endpoint

**Exemplo**:
```
/sobre          → app/sobre/page.tsx
/projetos       → app/projetos/page.tsx
/api/contact    → app/api/contact/route.ts
```

**📚 Documentação**: [App Router](https://nextjs.org/docs/app)

---

### `/src/components/` - Componentes React

Organização **por função** em subpastas:

#### 🎬 `animated/` - Componentes de Animação
Wrappers de Framer Motion reutilizáveis.

**Exemplo**: `<FadeUp>`, `<ScaleIn>`

**Quando usar**: Animar entrada/saída de elementos

---

#### 🏗️ `layout/` - Componentes de Layout
Estrutura da página (header, footer, wrappers).

**Principais**:
- `Header` - Navegação superior
- `Footer` - Rodapé
- `MaxWidthWrapper` - Limita largura do conteúdo
- `SectionWrapper` - Espaçamento de seções

**Quando usar**: Estruturar páginas, envolver conteúdo

---

#### 📄 `sections/` - Seções de Página
Blocos completos de conteúdo usado em páginas.

**Principais**:
- `HeroSection` - Seção hero
- `FeaturesSection` - Seção de diferenciais
- `ServicesSection` - Seção de serviços
- `ProjectsSection` - Seção de projetos
- `BudgetSection` - Formulário de orçamento

**Quando usar**: Compor páginas completas

**Exemplo**:
```typescript
// app/page.tsx (Homepage)
<>
  <HeroHome />
  <FeaturesSection />
  <ServicesSection />
  <ProjectsSection />
  <BudgetSection />
</>
```

---

#### 🎨 `ui/` - Componentes UI Reutilizáveis
Building blocks da interface.

**Organização por tipo**:
- `buttons/` - Sistema de botões
- `cards/` - Tipos de cards
- `form/` - Inputs, textareas, etc
- `navigation/` - Tabs, pills
- `typography/` - Títulos, textos, gradientes
- `primitives/` - Primitivos base (card, separator)
- `feedback/` - Loading, alerts

**Princípio**: Componentes **pequenos**, **reutilizáveis**, **testáveis**

**Estrutura padrão**:
```
ui/meu-componente/
├── meu-componente.tsx         # Componente
├── meu-componente.test.tsx    # Testes
├── meu-componente.stories.tsx # Storybook
└── index.ts                   # Re-export
```

**Quando usar**: Criar elementos de UI compartilhados

---

### `/src/lib/` - Biblioteca de Utilitários

**O que é**: Single Source of Truth para dados, configs, funções, hooks, tipos.

**Princípios**:
1. **SSOT** - Cada dado existe em um único lugar
2. **Type Safety** - Tudo tipado com TypeScript
3. **Organização** - Separação clara por função
4. **Testes** - Co-localizados (`*.test.ts`)

#### 📂 Subdiretórios

| Pasta | Propósito | Exemplos |
|-------|-----------|----------|
| `animation/` | Sistema de animações | `useScrollAnimation()`, `fadeInUp` |
| `config/` | Configs que mudam raramente | `COMPANY_INFO`, `COMPANY_STATS` |
| `data/` | Dados que mudam frequentemente | `projects`, `members`, `services` |
| `hooks/` | React hooks customizados | ` useReducedMotion()` |
| `types/` | Tipos TypeScript | `Member`, `Project`, `AppRoute` |
| `utils/` | Funções utilitárias | `cn()`, `getGradientClass()`, `navigation` |

**📚 Documentação completa**: [lib-directory.md](../development/lib-directory.md)

**Quando usar cada pasta**:

```typescript
// config/ - Configurações estáveis
import { COMPANY_INFO } from "@/lib/config/company";

// data/ - Dados dinâmicos
import { projects } from "@/lib/data/projects";

// hooks/ - Lógica com estado
import { useReducedMotion } from "@/lib/hooks";

// types/ - Apenas tipos
import type { Member } from "@/lib/types";

// utils/ - Funções puras
import { cn } from "@/lib/utils/utils";
import { getGradientClass } from "@/lib/utils/styles";
```

---

### `/public/` - Assets Estáticos

**O que é**: Arquivos servidos diretamente (imagens, fontes, etc).

**Acesso**: Via `/assets/...` no código.

```typescript
// Correto
<Image src="/assets/logo/tecnojr-logo-white.svg" alt="TecnoJr" />

// Errado (não precisa /public)
<Image src="/public/assets/logo/..." alt="..." />
```

**Organização**:
```
public/assets/
├── logo/        # Logos (SVG + PNG)
├── icon/        # Ícones da marca
├── typo/        # Tipografias
├── members/     # Fotos dos membros (JPG/PNG)
└── projects/    # Imagens de projetos (JPG/PNG/WebP)
```

**Quando usar**:
- ✅ Imagens que não mudam
- ✅ Logos, ícones, fontes
- ✅ Favicons, manifests
- ❌ Imagens dinâmicas (use CDN ou imports)

---

### `/e2e/` - Testes End-to-End

**O que é**: Testes de integração completos com Playwright.

**Estrutura**:
```
e2e/
├── home.spec.ts         # Testa homepage
├── navigation.spec.ts   # Testa navegação
├── projects.spec.ts     # Testa página de projetos
├── sobre.spec.ts        # Testa página sobre
└── contact.spec.ts      # Testa formulário de contato
```

**Comando**: `npm run test:e2e`

**Quando adicionar**:
- ✅ Novos fluxos de usuário
- ✅ Formulários críticos
- ✅ Features importantes

---

### `/tests/` - Utilitários de Teste

**O que é**: Configurações e helpers compartilhados para testes.

**Arquivos**:
- `setup.ts` - Config global (executa antes de todos os testes)
- `test-utils.tsx` - Custom render com providers
- `mocks/` - Mocks compartilhados

**Uso**:
```typescript
// Sempre use test-utils em vez de @testing-library/react
import { render, screen } from "@/tests/test-utils";
```

---

### `/docs/` - Documentação

**O que é**: Documentação markdown do projeto.

**Organização por tópico**:
- `getting-started/` - Para novos desenvolvedores
- `development/` - Guias de desenvolvimento
- `architecture/` - Decisões de arquitetura
- `deployment/` - Guias de deploy
- `storybook/` - Guias do Storybook

**Formato**: Markdown (`.md`)

---

### `/.storybook/` - Configuração Storybook

**O que é**: Documentação visual de componentes.

**Estrutura**:
- `main.ts` - Config principal
- `preview.tsx` - Decorators, themes
- `docs/` - Documentação MDX

**Comando**: `npm run storybook`

---

## 🎯 Path Aliases

Configurados em `tsconfig.json` para imports limpos:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@tests/*": ["./tests/*"]
    }
  }
}
```

**Uso**:

```typescript
// ✅ Com alias (correto)
import { Button } from "@/components/ui/buttons";
import { COMPANY_INFO } from "@/lib/config/company";
import { render } from "@/tests/test-utils";

// ❌ Sem alias (evite)
import { Button } from "../../src/components/ui/buttons";
import { COMPANY_INFO } from "../../../lib/config/company";
```

---

## 📝 Convenções de Nomenclatura

### Arquivos

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componentes | PascalCase | `Button.tsx`, `HeroSection.tsx` |
| Utilitários | kebab-case | `use-reduced-motion.ts`, `navigation.ts` |
| Testes | `.test.tsx` | `button.test.tsx`, `utils.test.ts` |
| Stories | `.stories.tsx` | `button.stories.tsx` |
| Tipos | PascalCase | `types.ts` (exports PascalCase) |
| Configs | kebab-case | `next.config.ts`, `tailwind.config.js` |

### Pastas

```typescript
// ✅ Correto
src/components/ui/my-component/
src/lib/config/

// ❌ Evite
src/components/ui/MyComponent/  // PascalCase em pastas
src/lib/Config/                 // PascalCase em pastas
```

---

## 🔍 Como Encontrar Algo

### "Onde está o componente X?"

1. **UI componente?** → `src/components/ui/`
2. **Seção de página?** → `src/components/sections/`
3. **Layout?** → `src/components/layout/`

### "Onde estão os dados de projetos?"

```
src/lib/data/projects.ts
```

Regra: Dados estruturados vivem em `lib/data/`

### "Como adiciono nova página?"

```
src/app/nome-da-pagina/page.tsx
```

Regra: Pasta = rota no App Router

### "Onde está a lógica de navegação?"

```
src/lib/utils/navigation.ts
```

Regra: Lógica de negócio vive em `lib/utils/`

### "Como encontro testes de um componente?"

```
src/components/ui/button/
├── button.tsx
└── button.test.tsx  ← Aqui!
```

Regra: Testes co-localizados com código

---

## 🚀 Adicionando Novos Arquivos

### Novo Componente UI

```bash
mkdir src/components/ui/meu-componente
cd src/components/ui/meu-componente

# Crie os arquivos
touch meu-componente.tsx
touch meu-componente.test.tsx
touch meu-componente.stories.tsx
touch index.ts
```

### Nova Página

```bash
mkdir src/app/minha-pagina
touch src/app/minha-pagina/page.tsx
```

### Novo Dado em lib/

```bash
# Se for configuração estável
touch src/lib/config/minha-config.ts

# Se for dado dinâmico
touch src/lib/data/meus-dados.ts
```

### Novo Teste E2E

```bash
touch e2e/minha-feature.spec.ts
```

---

## 📋 Checklist de Organização

Ao adicionar novos arquivos, pergunte:

- [ ] Está na pasta correta? (ui/ vs sections/ vs layout/)
- [ ] Segue convenção de nomenclatura?
- [ ] Tem testes co-localizados?
- [ ] Tem story no Storybook (se UI)?
- [ ] Usa path alias `@/`?
- [ ] Tem JSDoc documentation?
- [ ] Exportado via `index.ts` (se aplicável)?
- [ ] Atualiza documentação relevante?

---

## 🎓 Próximos Passos

Agora que você entende a estrutura:

1. **Explore o código**:
   ```bash
   cd src/components/ui/buttons
   cat button.tsx
   ```

2. **Leia guias específicos**:
   - [Criação de Componentes](../development/component-creation.md)
   - [Diretório Lib](../development/lib-directory.md)
   - [Guia de Estilos](../development/style-guide.md)

3. **Comece a contribuir**:
   - [Guia de Contribuição](./contributing.md)

---

**Dúvidas?** Consulte a [documentação completa](../README.md) ou abra uma issue no GitHub.

[← Voltar: Contribuindo](./contributing.md) | [Próximo: Guias de Desenvolvimento →](../development/README.md)
