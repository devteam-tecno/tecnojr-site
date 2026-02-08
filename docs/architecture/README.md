# 🏗️ Arquitetura e Decisões Técnicas

Documentação sobre a arquitetura do projeto e decisões de design.

---

## 📚 Guias Disponíveis

### [📋 Architecture Decision Records (ADRs)](./DECISIONS.md)
Registro de todas as decisões técnicas importantes do projeto.

**Inclui 10 ADRs**:
1. **Next.js App Router** - Por que App Router em vez de Pages Router
2. **Tailwind CSS v4** - Adoção de @theme directive e OKLCH
3. **Framer Motion** - Sistema de animações
4. **Biome** - Linter/formatter unificado
5. **Vitest + Playwright** - Stack de testes
6. **Storybook** - Component development environment
7. **Data Files vs CMS** - Por que dados estáticos
8. **TypeScript Strict Mode** - Type safety máxima
9. **OKLCH Color Space** - Sistema de cores perceptual
10. **React Hook Form + Zod** - Stack de formulários

**Leia se**: Quer entender por que tomamos certas decisões técnicas.

---

### [🏛️ Estrutura da Aplicação](./STRUCTURE.md)
Deep dive na arquitetura da aplicação Next.js.

**Inclui**:
- Server Components vs Client Components
- File-based routing
- Data fetching strategies
- Metadata API
- State management patterns
- Component hierarchy (`primitives` → `ui` → `sections` → `pages`)
- Security best practices
- Performance optimization

**Use quando**: Precisa entender a arquitetura geral ou fazer mudanças estruturais.

---

### [🎨 Sistema de Estilos e Design](./STYLING.md)
Documentação completa do design system.

**Inclui**:
- **Design Tokens**: Cores OKLCH, tipografia, spacing, shadows
- **Tailwind v4**: @theme directive, CSS Variables
- **Componentes de UI**: Botões, cards, inputs, badges
- **Gradientes**: 5 gradientes principais (primary, secondary, accent, success, info)
- **Typography Scale**: 11 níveis de texto
- **Animations**: Transições e micro-interações
- **Responsiveness**: Breakpoints e estratégias
- **Accessibility**: Contraste, focus states, ARIA

**Use quando**: Trabalhar com estilos, cores, tipografia ou criar novos componentes visuais.

---

## 🎯 Quando Usar Cada Documento

### Entender Decisões Passadas
→ [DECISIONS.md](./DECISIONS.md) - Leia o ADR relacionado

### Arquitetar Nova Feature
→ [STRUCTURE.md](./STRUCTURE.md) - Entenda padrões arquiteturais

### Adicionar Estilos/Componentes
→ [STYLING.md](./STYLING.md) - Use design tokens e patterns

---

## 🔍 Tópicos Específicos

### Next.js App Router
- **Por quê?** [DECISIONS.md - ADR 001](./DECISIONS.md)
- **Como usar?** [STRUCTURE.md - Routing](./STRUCTURE.md)

### Server vs Client Components
- **Quando usar cada?** [STRUCTURE.md - Server Components](./STRUCTURE.md)
- **Patterns comuns** [STRUCTURE.md - Component Hierarchy](./STRUCTURE.md)

### Cores e Gradientes
- **Sistema OKLCH** [DECISIONS.md - ADR 009](./DECISIONS.md)
- **Como usar** [STYLING.md - Cores](./STYLING.md)
- **Gradientes** [STYLING.md - Gradientes](./STYLING.md)

### Tailwind CSS v4
- **Por quê v4?** [DECISIONS.md - ADR 002](./DECISIONS.md)
- **@theme directive** [STYLING.md - Design Tokens](./STYLING.md)

### Animações
- **Por que Framer Motion?** [DECISIONS.md - ADR 003](./DECISIONS.md)
- **Como adicionar** [../development/animations-guide.md](../development/animations-guide.md)

### Testes
- **Stack escolhida** [DECISIONS.md - ADR 005](./DECISIONS.md)
- **Como testar** [../development/testing.md](../development/testing.md)

### Formulários
- **Por que RHF + Zod?** [DECISIONS.md - ADR 010](./DECISIONS.md)
- **Como usar** [../development/forms-validation.md](../development/forms-validation.md)

---

## 🌟 Princípios Arquiteturais

### Server-First
Use Server Components por padrão. Client Components apenas quando necessário (interatividade, hooks, browser APIs).

### Type-Safety
TypeScript strict mode em tudo. Zod para validação runtime.

### Performance
- Tree-shaking automático
- Code splitting por rota
- Image optimization
- Lazy loading de componentes pesados

### Accessibility
- ARIA labels obrigatórios
- Focus management
- Keyboard navigation
- Reduced motion support

### Single Source of Truth (SSOT)
Dados centralizados em `lib/data/`, tipos compartilhados em `lib/types/`.

---

## 🔗 Links Relacionados

- **[Getting Started](../getting-started/README.md)** - Setup e primeiros passos
- **[Development](../development/README.md)** - Guias de desenvolvimento
- **[Deployment](../deployment/README.md)** - Como fazer deploy

---

**Arquitetura não faz sentido?** Abra uma discussão para refatorar!

[← Voltar para Documentação Principal](../README.md)
