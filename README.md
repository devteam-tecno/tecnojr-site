# Site TecnoJr

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/tecnojr/tecnojr-site/workflows/CI/badge.svg)](https://github.com/tecnojr/tecnojr-site/actions/workflows/ci.yml)
[![E2E Tests](https://github.com/tecnojr/tecnojr-site/workflows/E2E%20Tests/badge.svg)](https://github.com/tecnojr/tecnojr-site/actions/workflows/e2e.yml)
[![Deploy Storybook](https://github.com/tecnojr/tecnojr-site/workflows/Deploy%20Storybook/badge.svg)](https://github.com/tecnojr/tecnojr-site/actions/workflows/storybook-deploy.yml)

> Site moderno e responsivo da TecnoJr construído com Next.js 16, React 19, TypeScript e Tailwind CSS.

## 🚀 Stack Tecnológica

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Biblioteca UI**: [React 19](https://react.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Componentes UI**: [Shadcn UI](https://ui.shadcn.com/)
- **Formulários**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email**: [Resend](https://resend.com/)
- **Linting**: [Biome](https://biomejs.dev/)
- **Testes**: [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/), [Playwright](https://playwright.dev/)
- **Documentação**: [Storybook](https://storybook.js.org/)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/ORG/tecnojr-site.git
cd tecnojr-site/tecnojr-site

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com seus valores
```

## 📚 Documentação

Documentação completa para desenvolvedores trabalhando no site da TecnoJr:

### Documentação Interativa de Componentes
- **[Storybook](http://localhost:6006)**: Biblioteca visual de componentes com exemplos ao vivo
  ```bash
  npm run storybook  # Inicia o Storybook na porta 6006
  ```

### Sistema de Design
- **[Guia de Estilos](./docs/development/style-guide.md)**: Documentação completa do sistema de design
  - Sistema de cores OKLCH (tecno-purple, tecno-blue, tecno-black)
  - Utilitários de gradiente e aplicações
  - Padrões de estilização de componentes
  - Convenções do Tailwind CSS v4

- **[Sistema de Botões](./docs/development/button-system.md)**: Análise profunda do componente de botão
  - 8 variantes (gradient-primary, gradient-whatsapp, outline-gradient, etc.)
  - Especificações de tamanhos
  - Diretrizes e exemplos de uso

### Guias de Desenvolvimento

- **[Índice de Componentes](./docs/development/component-index.md)**: Catálogo completo de componentes
  - Todos os componentes UI, layout e seções
  - Exemplos de uso e padrões
  - Props e variantes

- **[Diretório Lib](./docs/development/lib-directory.md)**: Organização da pasta lib/
  - **lib/config/**: Configurações da empresa (company.ts, stats.ts, social.ts, etc)
  - **lib/data/**: Dados estruturados (projects, services, features, members, ideals, press-kit)
  - **lib/hooks/**: React hooks customizados (use-reduced-motion)
  - **lib/utils/**: Funções utilitárias (styles, animations, navigation, icons, metadata)
  - **lib/types/**: Definições de tipos TypeScript
  - **lib/animation/**: Sistema de animações com Framer Motion

- **[Guia de Testes](./docs/development/testing.md)**: Estratégia e padrões de testes
  - Testes unitários com Vitest
  - Testes E2E com Playwright
  - Requisitos de cobertura (85%+)
  - Melhores práticas

- **[Guia de Animações](./docs/development/animations-guide.md)**: Sistema completo de animações
  - Hooks customizados de animação
  - Variantes reutilizáveis
  - Acessibilidade (prefers-reduced-motion)
  - Performance e otimizações

- **[GitHub Actions](./docs/development/github-actions.md)**: CI/CD e automação
  - Workflows de CI (lint, test, build)
  - Testes E2E automatizados
  - Deploy do Storybook
  - Dependabot e atualizações automáticas
  - Troubleshooting e manutenção

- **[Criação de Componentes](./docs/development/component-creation.md)**: Como criar novos componentes
  - Estrutura de arquivos (component + stories + test)
  - Padrões de nomenclatura
  - JSDoc e documentação
  - Integração com Storybook

- **[Gerenciamento de Dados](./docs/development/data-management.md)**: Padrões de dados
  - lib/data/ vs lib/config/
  - Single Source of Truth
  - Type safety patterns
  - Como adicionar novos dados

### Arquitetura

- **[Decisões de Arquitetura](./docs/architecture/DECISIONS.md)**: Por que escolhemos cada tecnologia
  - Next.js 16 App Router
  - React 19
  - Tailwind CSS v4
  - OKLCH color space
  - Biome vs ESLint
  - E mais...

- **App Router**: Next.js 16 com React Server Components
- **Server-first**: Componentes são renderizados no servidor por padrão
- **Imports dinâmicos**: Componentes cliente carregados apenas quando necessário
- **Rotas de API**: Endpoints RESTful em `src/app/api/`

### Contexto para Assistentes de IA
- **[.github/copilot-instructions.md](./.github/copilot-instructions.md)**: Instruções para GitHub Copilot
  - Padrões de código e convenções
  - Uso do sistema de design
  - Tarefas comuns e exemplos
  - O que fazer e o que evitar

## 🛠️ Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Execute o linter
npm run lint

# Corrija problemas de linting
npm run lint:fix

# Verificação de tipos
npm run typecheck

# Formate o código
npm run format

# Execute todas as verificações (lint + typecheck)
npm run check
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar o site.

## 🧪 Testes

### Testes Unitários e de Integração

```bash
# Execute testes em modo watch
npm test

# Execute testes uma vez
npm run test:run

# Execute testes com interface
npm run test:ui

# Gere relatório de cobertura
npm run test:coverage
```

**Limites de Cobertura**: 
- Linhas: 85%
- Funções: 85%
- Branches: 80%
- Declarações: 85%

### Testes E2E

```bash
# Execute testes E2E (headless)
npm run test:e2e

# Execute testes E2E com interface
npm run test:e2e:ui

# Execute testes E2E em modo headed
npm run test:e2e:headed

# Debug de testes E2E
npm run test:e2e:debug
```

### Estrutura de Testes

```
tecnojr-site/
├── e2e/                    # Testes E2E Playwright
│   ├── home.spec.ts
│   ├── navigation.spec.ts
│   ├── projects.spec.ts
│   ├── sobre.spec.ts
│   └── contact.spec.ts
├── src/
│   ├── lib/
│   │   ├── utils/
│   │   │   ├── utils.ts
│   │   │   └── utils.test.ts   # Testes unitários co-localizados
│   │   ├── animation/
│   │   │   ├── animations.ts
│   │   │   └── animations.test.ts
│   │   └── types/
│   │       ├── types.ts
│   │       └── types.test.ts
│   ├── components/
│   │   └── ui/
│   │       ├── buttons/
│   │       │   ├── button.tsx
│   │       │   ├── button.test.tsx
│   │       │   └── button.stories.tsx
│   │       └── cards/
│   │           ├── feature-card.tsx
│   │           ├── feature-card.test.tsx
│   │           └── feature-card.stories.tsx
│   └── app/
│       └── api/
│           └── contact/
│               ├── route.ts
│               └── route.test.ts
└── tests/
    ├── setup.ts            # Configuração global de testes
    ├── test-utils.tsx      # Utilitários de render customizados
    └── mocks/              # Mocks compartilhados
```

Consulte [docs/development/testing.md](./docs/development/testing.md) para documentação detalhada de testes.

## 📁 Estrutura do Projeto

```
tecnojr-site/
├── public/                 # Assets estáticos
│   └── assets/            # Imagens, ícones, logos
│       ├── logo/          # Logos da TecnoJr (variações)
│       ├── icon/          # Ícones da marca
│       ├── typo/          # Tipografias
│       ├── members/       # Fotos dos membros
│       └── projects/      # Imagens de projetos
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx       # Homepage
│   │   ├── sobre/         # Página "Sobre"
│   │   ├── projetos/      # Página de projetos
│   │   ├── press-kit/     # Página de press kit
│   │   └── api/           # Rotas de API
│   │       └── contact/   # Endpoint de contato
│   ├── components/        # Componentes React
│   │   ├── animated/      # Componentes de animação
│   │   ├── layout/        # Componentes de layout
│   │   │   ├── header/    # Header e navegação
│   │   │   ├── footer/    # Footer
│   │   │   ├── max-width-wrapper.tsx
│   │   │   ├── section-wrapper.tsx
│   │   │   ├── section.tsx
│   │   │   ├── section-container.tsx
│   │   │   ├── content-container.tsx
│   │   │   └── responsive-grid.tsx
│   │   ├── sections/      # Seções de página
│   │   │   ├── hero/      # Variantes de hero (home, about, projects, etc)
│   │   │   ├── budget/    # Componentes da seção de orçamento
│   │   │   ├── press-kit/ # Seções do press kit
│   │   │   ├── features-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── ideals-section.tsx
│   │   │   ├── members-section.tsx
│   │   │   └── about-section.tsx
│   │   └── ui/            # Componentes UI reutilizáveis
│   │       ├── buttons/   # Sistema de botões
│   │       ├── cards/     # Tipos de cards (base, feature, service, project, member, etc)
│   │       ├── form/      # Componentes de formulário
│   │       ├── feedback/  # Componentes de feedback
│   │       ├── navigation/# Componentes de navegação
│   │       ├── primitives/# Primitivos base (card, separator, etc)
│   │       └── typography/# Sistema de tipografia
│   ├── lib/               # Utilitários e constantes
│   │   ├── animation/     # Sistema de animações
│   │   │   ├── animations.ts
│   │   │   ├── animations.test.ts
│   │   │   └── animation-variants.ts
│   │   ├── config/        # Configurações da empresa
│   │   │   ├── company.ts     # Informações da empresa
│   │   │   ├── contact.ts     # Dados de contato
│   │   │   ├── content.ts     # Conteúdo textual
│   │   │   ├── social.ts      # Redes sociais
│   │   │   ├── stats.ts       # Estatísticas
│   │   │   └── index.ts
│   │   ├── data/          # Dados estruturados
│   │   │   ├── features.ts    # Diferenciais
│   │   │   ├── ideals.ts      # Missão, visão, valores
│   │   │   ├── members.ts     # Membros da equipe
│   │   │   ├── press-kit.ts   # Material de marca
│   │   │   ├── projects.ts    # Projetos
│   │   │   ├── services.ts    # Serviços
│   │   │   └── index.ts
│   │   ├── hooks/         # React hooks customizados
│   │   │   ├── use-reduced-motion.ts
│   │   │   └── index.ts
│   │   ├── types/         # Tipos TypeScript
│   │   │   ├── types.ts
│   │   │   ├── types.test.ts
│   │   │   └── index.ts
│   │   ├── utils/         # Funções utilitárias
│   │   │   ├── icons.ts       # Mapeamento de ícones
│   │   │   ├── metadata.ts    # Helpers de SEO
│   │   │   ├── navigation.ts  # Sistema de navegação
│   │   │   ├── styles.ts      # Utilitários de estilo
│   │   │   ├── styles.test.ts
│   │   │   ├── utils.ts       # Funções gerais (cn, etc)
│   │   │   └── utils.test.ts
│   │   └── constants.ts   # Constantes globais
│   └── assets/            # Assets de origem
├── e2e/                   # Testes E2E
├── tests/                 # Utilitários de teste
├── .storybook/            # Configuração do Storybook
│   └── docs/              # Documentação do Storybook
└── docs/                  # Documentação do projeto
    ├── development/       # Guias de desenvolvimento
    ├── architecture/      # Documentação de arquitetura
    ├── deployment/        # Guias de deployment
    ├── getting-started/   # Getting started
    └── storybook/         # Guia do Storybook
```

## 🏗️ Build

```bash
# Crie build de produção
npm run build

# Inicie servidor de produção
npm start
```

O build gera:
- Páginas estáticas otimizadas
- Páginas renderizadas no servidor
- Rotas de API
- Assets estáticos

## 🚢 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_ORG/tecnojr-site)

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático ao fazer push para `main`

### Deploy Manual

1. Construa a aplicação: `npm run build`
2. Configure as variáveis de ambiente
3. Faça deploy do diretório `.next`

## 🔑 Variáveis de Ambiente

```bash
# Email (Resend)
RESEND_API_KEY=sua_chave_api_resend
EMAIL_FROM=noreply@tecnojr.com.br
EMAIL_TO=contato@tecnojr.com.br

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 Referência de Scripts

| Script | Descrição |
|--------|-----------|
| `dev` | Inicia servidor de desenvolvimento |
| `build` | Cria build de produção |
| `start` | Inicia servidor de produção |
| `analyze` | Analisa bundle size (ANALYZE=true) |
| `lint` | Executa linter Biome |
| `lint:fix` | Corrige problemas de linting |
| `format` | Formata código com Biome |
| `typecheck` | Executa verificação de tipos TypeScript |
| `check` | Executa typecheck + lint |
| `fix` | Executa lint:fix + format |
| `test` | Executa testes unitários (modo watch) |
| `test:run` | Executa testes unitários uma vez (projeto unit) |
| `test:ui` | Executa testes unitários com interface |
| `test:coverage` | Gera relatório de cobertura (projeto unit) |
| `test:unit` | Executa testes unitários (projeto unit) |
| `test:unit:run` | Executa testes unitários uma vez |
| `test:e2e` | Executa testes E2E |
| `test:e2e:ui` | Executa testes E2E com interface |
| `test:e2e:headed` | Executa testes E2E em modo headed |
| `test:e2e:debug` | Debug de testes E2E |
| `storybook` | Inicia Storybook |
| `build-storybook` | Constrói Storybook estático |
| `docs` | Alias para storybook |
| `docs:build` | Alias para build-storybook |
| `docs:test` | Testa stories do Storybook |

## 🤝 Contribuindo

1. Faça fork do repositório
2. Crie uma branch de feature: `git checkout -b feature/funcionalidade-incrivel`
3. Commit suas mudanças: `git commit -m 'Adiciona funcionalidade incrível'`
4. Push para a branch: `git push origin feature/funcionalidade-incrivel`
5. Abra um Pull Request

### Checklist de PR

- [ ] Testes passam (`npm run test:run`)
- [ ] Testes E2E passam (`npm run test:e2e`)
- [ ] Linting passa (`npm run lint`)
- [ ] Verificação de tipos passa (`npm run typecheck`)
- [ ] Build sucede (`npm run build`)
- [ ] Cobertura mantida acima de 85%
- [ ] Documentação atualizada
- [ ] Stories do Storybook criadas (para novos componentes UI)

## 📚 Índice de Documentação

### 🚀 Primeiros Passos
- [Guia de Setup](./docs/getting-started/setup.md) - Configuração do ambiente
- [Guia de Contribuição](./docs/getting-started/contributing.md) - Como contribuir
- [Estrutura do Projeto](./docs/getting-started/project-structure.md) - Organização de arquivos

### 💻 Desenvolvimento
- [Índice de Componentes](./docs/development/component-index.md) - Catálogo completo
- [Criação de Componentes](./docs/development/component-creation.md) - Como criar componentes
- [Diretório Lib](./docs/development/lib-directory.md) - Organização lib/
- [Gerenciamento de Dados](./docs/development/data-management.md) - Padrões de dados
- [Guia de Estilos](./docs/development/style-guide.md) - Sistema de design
- [Sistema de Botões](./docs/development/button-system.md) - Documentação de botões
- [Guia de Animações](./docs/development/animations-guide.md) - Sistema de animações
- [Guia de Testes](./docs/development/testing.md) - Estratégia de testes
- [Rotas de API](./docs/development/api-routes.md) - Endpoints e padrões
- [Formulários e Validação](./docs/development/forms-validation.md) - React Hook Form + Zod

### 🏛️ Arquitetura
- [Decisões de Arquitetura](./docs/architecture/DECISIONS.md) - ADRs
- [Estrutura do Projeto](./docs/architecture/STRUCTURE.md) - Organização e padrões
- [Estilização](./docs/architecture/STYLING.md) - Tailwind v4 e OKLCH

### 🚢 Deploy
- [Guia de Deploy](./docs/deployment/deployment.md) - Produção

### 📖 Storybook
- [Guia do Storybook](./docs/storybook/guide.md) - Como usar
- [Escrevendo Stories](./docs/storybook/writing-stories.md) - Padrões de stories

## 🎨 Design System

Nosso sistema de design utiliza:
- **Cores OKLCH**: Espaço de cores perceptualmente uniforme
- **Tailwind CSS v4**: Com diretiva `@theme` para customização
- **Gradientes**: Sistema de gradientes roxo-azul da marca
- **Tipografia**: Sistema tipográfico completo
- **Componentes**: Biblioteca completa documentada no Storybook

📚 [Ver Guia Completo de Estilos →](./docs/development/style-guide.md)

## ♿ Acessibilidade

O site segue as diretrizes WCAG 2.1 AA:
- Navegação por teclado completa
- Skip links para conteúdo principal
- Suporte a `prefers-reduced-motion`
- Contraste de cores adequado
- ARIA labels e roles apropriados
- Testes automatizados de acessibilidade

📚 [Ver Guia de Verificação →](./docs/VERIFICATION-GUIDE.md)

## 📄 Licença

Licença MIT - veja [LICENSE](./LICENSE) para detalhes

## 👥 Equipe

Construído com ❤️ pela [TecnoJr](https://tecnojr.com.br)

**Empresa Júnior de Computação da UESC**  
Transformando ideias em projetos de qualidade desde 2002

---

**Precisa de ajuda?** Entre em contato: contato@tecnojr.com.br
