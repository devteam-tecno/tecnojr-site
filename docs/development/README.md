# 💻 Documentação de Desenvolvimento

Guias técnicos para desenvolvimento day-to-day no projeto TecnoJr.

---

## 📚 Guias Disponíveis

### [📋 Índice de Componentes](./component-index.md)
Catálogo completo de todos os componentes React do projeto.

**Inclui**:
- 60+ componentes documentados
- Organização por categoria (ui/, layout/, sections/, animated/)
- Props de cada componente
- Exemplos de uso
- Links para stories

**Use quando**: Procurar um componente existente ou aprender como usar.

---

### [🧩 Criação de Componentes](./component-creation.md)
Template e boas práticas para criar novos componentes.

**Inclui**:
- Template completo de componente
- Estrutura de arquivos
- JSDoc patterns
- TypeScript patterns
- Testes e stories
- Checklist de qualidade

**Use quando**: Criar um novo componente do zero.

---

### [📊 Gerenciamento de Dados](./data-management.md)
Como organizar e usar dados no projeto (SSOT).

**Inclui**:
- Princípio Single Source of Truth
- Estrutura de lib/data/ e lib/config/
- Types e validação com Zod
- Exemplos de arquivos de dados
- Boas práticas

**Use quando**: Adicionar novos dados (projetos, membros, serviços, etc).

---

### [🔌 API Routes](./api-routes.md)
Documentação dos endpoints de API do Next.js.

**Inclui**:
- `/api/contact` - Formulário de contato
- Request/response schemas
- Validação com Zod
- Resend integration
- Segurança e rate limiting
- Testes de API

**Use quando**: Trabalhar com formulários ou criar novos endpoints.

---

### [📝 Formulários e Validação](./forms-validation.md)
Sistema de formulários com React Hook Form e Zod.

**Inclui**:
- Stack completa (RHF + Zod)
- Templates de formulários
- Schemas de validação
- Componentes de form (Input, Textarea)
- Acessibilidade (ARIA, error states)
- Exemplos e testes

**Use quando**: Criar ou modificar formulários.

---

### [🎬 Guia de Animações](./animations-guide.md)
Sistema de animações com Framer Motion.

**Inclui**:
- Componentes de animação (FadeUp, ScaleIn, etc)
- Variants e transitions
- Padrões comuns (hero, grids, stagger)
- Performance tips
- Reduced motion

**Use quando**: Adicionar animações a componentes.

---

### [🧪 Testes](./testing.md)
Estratégia e guias de testes.

**Inclui**:
- Stack de testes (Vitest, Playwright, RTL)
- Patterns de teste
- Coverage goals (85% recomendado, não bloqueante)
- Comandos de teste
- Best practices

**Use quando**: Escrever testes para componentes ou features.

---

### [🎨 Sistema de Estilos](./style-guide.md)
Design system e padrões visuais.

**Nota**: Link para [../architecture/STYLING.md](../architecture/STYLING.md)

---

### [🎯 Sistema de Botões](./button-system.md)
Análise profunda do sistema de botões.

**Inclui**:
- Todas as variantes (gradient-primary, gradient-whatsapp, etc)
- Props e configuração
- Exemplos de uso
- Accessibility

**Use quando**: Trabalhar com botões ou criar novas variantes.

---

### [📖 Diretório Lib](./lib-directory.md)
Documentação completa do diretório lib/.

**Inclui**:
- lib/animation/ - Configs de animação
- lib/config/ - Configurações do app
- lib/data/ - Dados estáticos
- lib/hooks/ - Custom hooks
- lib/types/ - Tipos TypeScript
- lib/utils/ - Funções utilitárias

**Use quando**: Adicionar utilitários ou entender organização de lib/.

---

## 🎯 Fluxos Comuns

### Criar Nova Feature

1. **[Component Index](./component-index.md)** → Ver se componente já existe
2. **[Component Creation](./component-creation.md)** → Criar componente novo
3. **[Data Management](./data-management.md)** → Adicionar dados necessários
4. **[Testing](./testing.md)** → Escrever testes

### Trabalhar com Formulários

1. **[Forms Validation](./forms-validation.md)** → Template de formulário
2. **[API Routes](./api-routes.md)** → Criar endpoint se necessário
3. **[Testing](./testing.md)** → Testar validação e submissão

### Adicionar Animação

1. **[Animations Guide](./animations-guide.md)** → Usar componentes existentes
2. **[Component Creation](./component-creation.md)** → Integrar em componente

---

## 🔗 Links Relacionados

- **[Getting Started](../getting-started/README.md)** - Setup e primeiros passos
- **[Architecture](../architecture/README.md)** - Decisões técnicas e estrutura
- **[Deployment](../deployment/README.md)** - Como fazer deploy

---

**Dúvidas técnicas?** Consulte a documentação específica ou abra uma discussão!

[← Voltar para Documentação Principal](../README.md)
