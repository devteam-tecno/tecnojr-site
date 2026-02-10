# 🚀 Primeiros Passos

Documentação para começar a desenvolver no projeto TecnoJr.

---

## 📚 Guias Disponíveis

### [Setup e Instalação](./setup.md)
Como configurar ambiente de desenvolvimento do zero.

**Inclui**:
- Pré-requisitos (Node.js 20+, npm, Git)
- Instalação de dependências
- Configuração de variáveis de ambiente
- VS Code extensions recomendadas
- Troubleshooting comum

**Comece aqui se**: É sua primeira vez no projeto.

---

### [Guia de Contribuição](./contributing.md)
Workflow de desenvolvimento e convenções do projeto.

**Inclui**:
- Git workflow (branches, commits, PRs)
- Conventional Commits
- Code review process
- Padrões de código
- O que evitar

**Leia se**: Vai criar uma feature, fix ou PR.

---

### [Estrutura do Projeto](./project-structure.md)
Organização de pastas e arquivos do projeto.

**Inclui**:
- Diretório tree completo
- Explicação de cada pasta
- Path aliases (@/, @tests/)
- Naming conventions
- Como encontrar arquivos

**Use como**: Referência para navegar no codebase.

---

## 🎯 Fluxo Rápido

### Novo Desenvolvedor

1. **[Setup](./setup.md)** → Instalar tudo
2. **[Estrutura](./project-structure.md)** → Entender organização
3. **[Contribuição](./contributing.md)** → Aprender workflow
4. **[Development docs](../development/README.md)** → Criar componentes

### Novo Contribuidor

1. **[Contribuição](./contributing.md)** → Workflow de PRs
2. **[Estrutura](./project-structure.md)** → Onde está cada coisa
3. **[Component Creation](../development/component-creation.md)** → Criar código

---

## ⚡ Comandos Essenciais

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de dev (http://localhost:3000)
npm run storybook        # Abre Storybook (http://localhost:6006)

# Build
npm run build            # Build de produção
npm start                # Preview do build
npm run analyze          # Analisa bundle size (ANALYZE=true)

# Quality
npm run lint             # Rodar Biome
npm run lint:fix         # Corrigir problemas automaticamente
npm run format           # Formatar código
npm run typecheck        # Verificar tipos TypeScript
npm run check            # Lint + typecheck
npm run fix              # Lint:fix + format

# Testes
npm test                 # Testes unitários (watch mode)
npm run test:run         # Testes unitários (run once)
npm run test:unit        # Testes unitários (projeto unit)
npm run test:unit:run    # Testes unitários run (projeto unit)
npm run test:ui          # Testes com interface
npm run test:coverage    # Gerar relatório de cobertura

# Testes E2E
npm run test:e2e         # Rodar testes E2E
npm run test:e2e:ui      # Testes E2E com interface
npm run test:e2e:headed  # Testes E2E em modo headed
npm run test:e2e:debug   # Debug testes E2E

# Documentação
npm run docs             # Alias para storybook
npm run docs:build       # Build do Storybook
npm run docs:test        # Testar stories
```

---

## 📖 Próximos Passos

Depois de concluir o setup inicial:

- **[Development](../development/README.md)** - Como criar componentes, gerenciar dados, trabalhar com APIs
- **[Architecture](../architecture/README.md)** - Entender decisões técnicas e estrutura
- **[Deployment](../deployment/README.md)** - Como fazer deploy

---

**Dúvidas?** Abra uma issue ou pergunte no canal de dev!

[← Voltar para Documentação Principal](../README.md)
