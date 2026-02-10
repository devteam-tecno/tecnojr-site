# 📖 Documentação TecnoJr

Bem-vindo à documentação completa do site da TecnoJr! Este diretório contém toda a documentação do projeto organizada por categoria.

---

## 🚀 Início Rápido

### Novo no Projeto?

1. **[🚀 Getting Started](./getting-started/README.md)** → Configure seu ambiente e aprenda o workflow
2. **[💻 Development](./development/README.md)** → Comece a criar componentes e features
3. **[🏗️ Architecture](./architecture/README.md)** → Entenda decisões técnicas

### Já Familiarizado?

- **Criar componente**: [Component Creation](./development/component-creation.md)
- **Adicionar dados**: [Data Management](./development/data-management.md)
- **Fazer deploy**: [Deployment Guide](./deployment/deployment-guide.md)

---

## 📚 Estrutura da Documentação

### 🚀 [Getting Started](./getting-started/README.md)
**Para começar no projeto**

- **[Setup](./getting-started/setup.md)** - Instalar dependências e configurar ambiente
- **[Contributing](./getting-started/contributing.md)** - Workflow de Git, commits, PRs
- **[Project Structure](./getting-started/project-structure.md)** - Organização de pastas e arquivos

**Use se**: É sua primeira vez no projeto ou precisa configurar novo ambiente.

---

### 💻 [Development](./development/README.md)
**Guias técnicos de desenvolvimento**

#### Componentes
- **[Component Index](./development/component-index.md)** - Catálogo de 60+ componentes
- **[Component Creation](./development/component-creation.md)** - Template para criar componentes
- **[Button System](./development/button-system.md)** - Sistema de botões e variantes

#### Dados e APIs
- **[Data Management](./development/data-management.md)** - SSOT e organização de dados
- **[API Routes](./development/api-routes.md)** - Endpoints de API (/api/contact)
- **[Forms Validation](./development/forms-validation.md)** - React Hook Form + Zod

#### Recursos
- **[Lib Directory](./development/lib-directory.md)** - Organização de lib/
- **[Animations Guide](./development/animations-guide.md)** - Framer Motion patterns
- **[Testing](./development/testing.md)** - Vitest, Playwright, RTL

**Use se**: Está desenvolvendo features, componentes ou trabalhando com APIs.

---

### 🏗️ [Architecture](./architecture/README.md)
**Decisões técnicas e estrutura**

- **[DECISIONS.md](./architecture/DECISIONS.md)** - 10 ADRs (Architecture Decision Records)
- **[STRUCTURE.md](./architecture/STRUCTURE.md)** - Arquitetura da aplicação Next.js
- **[STYLING.md](./architecture/STYLING.md)** - Design system, cores OKLCH, Tailwind v4

**Use se**: Precisa entender por que escolhemos certas tecnologias ou padrões.

---

### 🚀 [Deployment](./deployment/README.md)
**Como fazer deploy**

- **[Deployment Guide](./deployment/deployment-guide.md)** - Guia completo de deploy
  - Vercel (recomendado)
  - Netlify
  - Docker/self-hosted
  - Monitoramento

**Use se**: Vai fazer deploy para produção.

---

### 📦 [Archive](./archive/README.md)
**Documentação histórica**

- [Migration Complete](./archive/migration-complete.md)
- [Documentation Progress](./archive/documentation-progress.md)

---

## 🔍 Encontrar Informação Específica

### Por Tarefa

| Tarefa | Documentação |
|--------|--------------|
| Configurar ambiente | [Setup Guide](./getting-started/setup.md) |
| Criar componente | [Component Creation](./development/component-creation.md) |
| Adicionar dados | [Data Management](./development/data-management.md) |
| Criar formulário | [Forms Validation](./development/forms-validation.md) |
| Adicionar animação | [Animations Guide](./development/animations-guide.md) |
| Escrever testes | [Testing](./development/testing.md) |
| Fazer deploy | [Deployment Guide](./deployment/deployment-guide.md) |

### Por Tecnologia

| Tecnologia | Documentação |
|------------|--------------|
| Next.js App Router | [ADR 001](./architecture/DECISIONS.md), [STRUCTURE](./architecture/STRUCTURE.md) |
| Tailwind CSS v4 | [ADR 002](./architecture/DECISIONS.md), [STYLING](./architecture/STYLING.md) |
| Framer Motion | [ADR 003](./architecture/DECISIONS.md), [Animations Guide](./development/animations-guide.md) |
| TypeScript | [ADR 008](./architecture/DECISIONS.md), [Project Structure](./getting-started/project-structure.md) |
| Vitest + Playwright | [ADR 005](./architecture/DECISIONS.md), [Testing](./development/testing.md) |
| React Hook Form + Zod | [ADR 010](./architecture/DECISIONS.md), [Forms Validation](./development/forms-validation.md) |

### Por Categoria de Código

| Categoria | Documentação |
|-----------|--------------|
| Components | [Component Index](./development/component-index.md) |
| lib/data/ | [Data Management](./development/data-management.md) |
| lib/animation/ | [Lib Directory](./development/lib-directory.md) |
| lib/hooks/ | [Lib Directory](./development/lib-directory.md) |
| API Routes | [API Routes](./development/api-routes.md) |
| Design Tokens | [STYLING](./architecture/STYLING.md) |

---

## ⚡ Comandos Rápidos

```bash
# Desenvolvimento
npm run dev              # Servidor de dev (http://localhost:3000)
npm run storybook        # Storybook (http://localhost:6006)

# Build
npm run build            # Build de produção
npm start                # Preview do build

# Quality Checks
npm run lint             # Biome linter
npm run typecheck        # TypeScript check
npm test                 # Testes unitários (Vitest)
npm run test:e2e         # Testes E2E (Playwright)
npm run test:coverage    # Coverage report
```

---

## 📝 Padrões de Documentação

Toda documentação segue estes princípios:

### ✅ Linguagem
- **Português brasileiro** em toda documentação
- Termos técnicos em inglês quando apropriado

### ✅ Estrutura
- Seções claras com headings
- Exemplos de código práticos
- FAQs ao final
- Links para docs relacionadas

### ✅ Manutenção
- Atualizar docs junto com código
- Revisar anualmente
- Deprecations marcadas claramente

### ✅ Formato
- Markdown (.md) para guias
- MDX apenas no Storybook
- Código formatado com Biome

---

## 🔗 Links Externos

### Projeto
- **[README Principal](../README.md)** - Visão geral do projeto
- **[SECURITY.md](../SECURITY.md)** - Política de segurança
- **[Contributing](./getting-started/contributing.md)** - Como contribuir

### Tecnologias Principais
- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Biome](https://biomejs.dev/)

### Ferramentas
- [Vercel](https://vercel.com/docs) - Deploy
- [Storybook](https://storybook.js.org/) - Component docs
- [Vitest](https://vitest.dev/) - Testes unitários
- [Playwright](https://playwright.dev/) - Testes E2E

---

## 🆘 Precisa de Ajuda?

1. **Procure nesta documentação** usando os índices acima
2. **Consulte os READMEs** de cada seção (getting-started/, development/, etc)
3. **Verifique FAQs** nos guias específicos
4. **Abra uma issue** no GitHub se não encontrar resposta

---

## 📊 Estatísticas da Documentação

- **Total de guias**: 20+
- **Linhas de documentação**: ~53,000+
- **Idioma**: 100% PT-BR
- **Última atualização**: 2025
- **Cobertura**: Getting Started, Development, Architecture, Deployment

---

**Documentação ruim ou desatualizada?** Abra um PR para melhorar! 🚀
