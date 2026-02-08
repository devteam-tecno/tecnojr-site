# 🤝 Guia de Contribuição

Bem-vindo! Este guia explica como contribuir para o site da TecnoJr seguindo nossas práticas e padrões.

---

## 🎯 Antes de Começar

### Competências Recomendadas

- **Essenciais**: React, TypeScript, CSS
- **Importantes**: Next.js, Tailwind CSS
- **Úteis**: Framer Motion, Zod, React Hook Form

**Novo em alguma tecnologia?** Sem problemas! Veja nossa [lista de recursos](#-recursos-de-aprendizado) no final.

### Leia a Documentação

Familiarize-se com:
- [Setup](./setup.md) - Configuração do ambiente
- [Estrutura do Projeto](./project-structure.md) - Organização de arquivos
- [Guia de Estilos](../development/style-guide.md) - Design system
- [Diretório Lib](../development/lib-directory.md) - Utilitários

---

## 🔀 Workflow de Branches

### Branches Principais

| Branch | Propósito | Deploy |
|--------|-----------|--------|
| `main` | Código de produção | ✅ Automático (Vercel) |
| `develop` | Desenvolvimento ativo | 🔄 Staging (opcional) |
| `feature/*` | Novas funcionalidades | ❌ Não |
| `fix/*` | Correções de bugs | ❌ Não |
| `docs/*` | Atualizações de docs | ❌ Não |
| `refactor/*` | Refatorações | ❌ Não |

### Criar Nova Branch

```bash
# Sempre parta de main atualizada
git checkout main
git pull origin main

# Crie sua branch
git checkout -b <tipo>/<nome-descritivo>

# Exemplos:
git checkout -b feature/adicionar-blog
git checkout -b fix/corrigir-menu-mobile
git checkout -b docs/atualizar-readme
git checkout -b refactor/melhorar-componente-card
```

**Nomenclatura de branches:**
- Use kebab-case (palavras-separadas-por-hífen)
- Seja descritivo mas conciso
- Prefixe com tipo: `feature/`, `fix/`, `docs/`, `refactor/`

---

## 💻 Desenvolvimento

### 1. Faça suas Alterações

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Em outro terminal, rode os testes em watch mode
npm test
```

### 2. Siga os Padrões do Projeto

#### Estrutura de Arquivos

```
src/components/ui/meu-componente/
├── meu-componente.tsx           # Componente
├── meu-componente.test.tsx      # Testes
├── meu-componente.stories.tsx   # Storybook
└── index.ts                     # Re-export
```

#### Template de Componente

```typescript
/**
 * MeuComponente
 * 
 * Breve descrição do que o componente faz
 * 
 * @example
 * ```tsx
 * <MeuComponente prop="valor" />
 * ```
 */

import type { ComponentProps } from "react";

export interface MeuComponenteProps extends ComponentProps<"div"> {
  /**
   * Descrição da prop
   * @default "valor-padrão"
   */
  prop: string;
}

export function MeuComponente({ prop, ...props }: MeuComponenteProps) {
  return (
    <div {...props}>
      {/* Conteúdo */}
    </div>
  );
}
```

#### Padrões de Estilo

```typescript
// ✅ Correto - Use cn() para combinar classes
import { cn } from "@/lib/utils/utils";

<div className={cn("base-class", active && "active-class")} />

// ❌ Evite - Template strings perdem resolução de conflitos
<div className={`base-class ${active ? 'active-class' : ''}`} />

// ✅ Correto - Use utilitários de estilo
import { getGradientClass } from "@/lib/utils/styles";

<div className={getGradientClass('primary')} />

// ❌ Evite - Duplicar classes de gradiente
<div className="bg-linear-to-r from-purple-500 to-blue-500" />
```

#### Padrões de Importação

```typescript
// ✅ Correto - Imports organizados
import { useState } from "react";              // 1. React
import type { NextPage } from "next";          // 2. Next.js
import { motion } from "framer-motion";        // 3. Bibliotecas externas

import { Button } from "@/components/ui/buttons";  // 4. Componentes internos
import { COMPANY_INFO } from "@/lib/config/company"; // 5. Lib
import type { Member } from "@/lib/types";     // 6. Types
```

### 3. Escreva Testes

#### Testes Unitários

```typescript
// meu-componente.test.tsx
import { render, screen } from "@/tests/test-utils";
import { MeuComponente } from "./meu-componente";

describe("MeuComponente", () => {
  it("renderiza corretamente", () => {
    render(<MeuComponente prop="teste" />);
    expect(screen.getByText("teste")).toBeInTheDocument();
  });

  it("aplica classes customizadas", () => {
    const { container } = render(
      <MeuComponente prop="teste" className="custom-class" />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
```

**Cobertura mínima**: 85% (lines, functions, statements)

#### Stories do Storybook

```typescript
// meu-componente.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MeuComponente } from "./meu-componente";

const meta: Meta<typeof MeuComponente> = {
  title: "UI/MeuComponente",
  component: MeuComponente,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MeuComponente>;

export const Default: Story = {
  args: {
    prop: "Exemplo",
  },
};

export const Variant: Story = {
  args: {
    prop: "Outro exemplo",
  },
};
```

### 4. Verifique a Qualidade

```bash
# Rode TODOS esses comandos antes de commitar
npm run lint          # Biome linter
npm run typecheck     # TypeScript
npm run test:run      # Testes unitários
npm run test:e2e      # Testes E2E (se tocou em features principais)
npm run build         # Verifica se builda
```

**Atalho**:
```bash
npm run check && npm run test:run && npm run build
```

---

## 📝 Commits

### Padrão de Mensagens (Conventional Commits)

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

#### Tipos de Commit

| Tipo | Uso | Exemplo |
|------|-----|---------|
| `feat` | Nova funcionalidade | `feat(components): adiciona componente de modal` |
| `fix` | Correção de bug | `fix(header): corrige menu mobile não fechando` |
| `docs` | Documentação | `docs(readme): atualiza instruções de setup` |
| `style` | Formatação | `style(button): ajusta espaçamento` |
| `refactor` | Refatoração | `refactor(lib): reorganiza estrutura de data` |
| `test` | Testes | `test(card): adiciona testes de snapshot` |
| `chore` | Manutenção | `chore(deps): atualiza dependências` |
| `perf` | Performance | `perf(images): otimiza carregamento` |

#### Exemplos de Commits

```bash
# Bom ✅
git commit -m "feat(sections): adiciona seção de blog com cards responsivos"
git commit -m "fix(forms): corrige validação de email no formulário de contato"
git commit -m "docs(contributing): adiciona seção sobre padrões de commit"

# Ruim ❌
git commit -m "update"
git commit -m "fix stuff"
git commit -m "WIP"
```

#### Commits Detalhados

Para mudanças complexas, use corpo e rodapé:

```bash
git commit -m "feat(api): adiciona endpoint de newsletter

Implementa endpoint POST /api/newsletter para inscrição
de usuários na newsletter mensal.

- Validação com Zod
- Integração com Resend
- Testes unitários e E2E

Closes #123"
```

### Commitando

```bash
# Adicione arquivos
git add src/components/novo-componente/

# Commit
git commit -m "feat(components): adiciona novo componente"

# Push para sua branch
git push origin feature/nome-da-sua-branch
```

---

## 🔍 Pull Requests

### 1. Antes de Abrir o PR

**Checklist pré-PR:**
- [ ] Código funciona localmente
- [ ] Testes passando (`npm run test:run`)
- [ ] E2E passando se aplicável (`npm run test:e2e`)
- [ ] Linting passa (`npm run lint`)
- [ ] Type checking passa (`npm run typecheck`)
- [ ] Build sucede (`npm run build`)
- [ ] Storybook funciona (`npm run storybook`)
- [ ] Documentação atualizada
- [ ] Branch atualizada com `main`

```bash
# Atualize sua branch com main
git checkout main
git pull origin main
git checkout sua-branch
git merge main
# Resolva conflitos se houver
```

### 2. Abra o Pull Request

1. Vá para [GitHub](https://github.com/tecnojr/tecnojr-site)
2. Clique em "Compare & pull request"
3. Preencha o template do PR

#### Template de PR

```markdown
## 📝 Descrição

Breve descrição do que foi implementado/corrigido.

## 🎯 Tipo de Mudança

- [ ] 🆕 Nova funcionalidade (feature)
- [ ] 🐛 Correção de bug (fix)
- [ ] 📚 Documentação (docs)
- [ ] 🎨 Estilo/Formatação (style)
- [ ] ♻️ Refatoração (refactor)
- [ ] ⚡ Performance (perf)
- [ ] 🧪 Testes (test)

## 🧪 Como Testar

1. Faça checkout desta branch
2. Execute `npm install`
3. Execute `npm run dev`
4. Navegue para [rota específica]
5. Verifique [comportamento esperado]

## 📸 Screenshots (se aplicável)

[Adicione screenshots ou GIFs demonstrando as mudanças visuais]

## ✅ Checklist

- [ ] Código segue os padrões do projeto
- [ ] Testes unitários passando
- [ ] Testes E2E passando (se aplicável)
- [ ] Documentação atualizada
- [ ] Storybook stories criadas (para componentes UI)
- [ ] Sem warnings no console
- [ ] Acessibilidade verificada (navegação por teclado, screen readers)
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Performance verificada (Lighthouse > 90)

## 📚 Documentação Relacionada

- Link para issue relacionada: #123
- Link para documentação técnica: [docs/...]
- Link para design: [Figma/...]

## 🔗 Issues Relacionadas

Closes #123
Related to #456
```

### 3. Responda ao Code Review

**Durante o review:**
- ✅ Responda a todos os comentários
- ✅ Faça ajustes solicitados
- ✅ Seja receptivo a feedback
- ✅ Explique suas decisões quando necessário
- ❌ Não leve críticas para o pessoal
- ❌ Não ignore comentários

**Respondendo a comentários:**

```bash
# Faça as mudanças solicitadas
git add .
git commit -m "fix: corrige X conforme sugerido"
git push origin sua-branch
```

O PR será automaticamente atualizado!

### 4. Aprovação e Merge

**Critérios de aprovação:**
- ✅ Pelo menos 1 aprovação de maintainer
- ✅ Todos os checks de CI passando
- ✅ Conflitos resolvidos
- ✅ Todas as conversas marcadas como resolvidas

**Após aprovação:**
- Maintainer fará o merge usando **Squash and Merge**
- Sua branch será automaticamente deletada
- Mudanças vão para `main` e deploy automático acontece

---

## 🎨 Padrões de Código

### TypeScript

```typescript
// ✅ Use tipos explícitos para props
interface CardProps {
  title: string;
  description?: string;
}

// ✅ Use `type` para unions e intersections
type Status = "idle" | "loading" | "success" | "error";

// ✅ Use `interface` para objetos e componentes
interface User {
  name: string;
  email: string;
}

// ✅ Export types separadamente
export type { CardProps, Status, User };

// ❌ Evite `any`
const data: any = {}; // Ruim

// ✅ Use `unknown` quando não souber o tipo
const data: unknown = fetchData();
if (typeof data === "object" && data !== null) {
  // Type narrowing
}
```

### React

```typescript
// ✅ Use function components
function MyComponent() {}

// ❌ Evite class components (legacy)
class MyComponent extends React.Component {}

// ✅ Destructure props
function Card({ title, description }: CardProps) {}

// ❌ Evite props.
function Card(props: CardProps) {
  return <h2>{props.title}</h2>; // Ruim
}

// ✅ Use early returns
function Component({ items }: Props) {
  if (items.length === 0) return <Empty />;
  
  return <List items={items} />;
}
```

### Acessibilidade

```typescript
// ✅ Use elementos semânticos
<button onClick={handleClick}>Clique</button>

// ❌ Evite divs com onClick
<div onClick={handleClick}>Clique</div> // Ruim

// ✅ Adicione ARIA labels quando necessário
<button aria-label="Fechar modal" onClick={close}>
  <X />
</button>

// ✅ Gerencie foco em modals
<dialog ref={dialogRef} onClose={handleClose}>
  <button autoFocus>OK</button>
</dialog>
```

---

## 🚫 O Que Evitar

### ❌ NÃO Faça

1. **Commit direto em `main`**
   - Sempre use branches
   
2. **Commits grandes demais**
   - Separe em commits menores e lógicos
   
3. **Hardcode de valores**
   ```typescript
   // ❌ Ruim
   <span>TecnoJr</span>
   
   // ✅ Bom
   import { COMPANY_INFO } from "@/lib/config/company";
   <span>{COMPANY_INFO.name}</span>
   ```

4. **Ignorar warnings**
   - Resolva todos os warnings do TypeScript e Biome

5. **Pular testes**
   - Sempre teste suas mudanças

6. **Formatação manual**
   - Use `npm run format` ou configure auto-format

7. **Console.logs em produção**
   ```typescript
   // ❌ Remova antes de commitar
   console.log("debug:", data);
   
   // ✅ Use durante desenvolvimento, remova depois
   if (process.env.NODE_ENV === "development") {
     console.log("debug:", data);
   }
   ```

---

## 📚 Recursos de Aprendizado

### Documentação Oficial

- [React 19](https://react.dev/)
- [Next.js 16](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

### Tutoriais Recomendados

**React + TypeScript:**
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

**Next.js:**
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js + TypeScript](https://nextjs.org/docs/app/building-your-application/configuring/typescript)

**Tailwind CSS:**
- [Tailwind UI](https://tailwindui.com/)
- [Tailwind CSS Crash Course](https://www.youtube.com/watch?v=UBOj6rqRUME)

---

## 💬 Comunicação

### Onde Pedir Ajuda

1. **GitHub Issues**: Para bugs e features
2. **Pull Requests**: Para discussões sobre código
3. **Email**: contato@tecnojr.com.br
4. **Documentação**: Leia primeiro antes de perguntar

### Reportando Bugs

Use o template de issue:

```markdown
**Descrição do Bug**
Descrição clara e concisa do bug.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '....'
3. Veja o erro

**Comportamento Esperado**
O que você esperava que acontecesse.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [e.g. Windows 11]
- Browser: [e.g. Chrome 120]
- Node: [e.g. 20.10.0]
- npm: [e.g. 10.2.3]
```

---

## 🎉 Reconhecimento

Contribuidores são listados em:
- [CONTRIBUTORS.md](../../CONTRIBUTORS.md)
- Página "Sobre" do site (membros atuais)
- Releases notes (para contribuições significativas)

**Obrigado por contribuir para a TecnoJr!** 🚀

---

## 📋 Checklist Final de Contribuição

Antes de cada PR, verifique:

- [ ] Código segue padrões do projeto
- [ ] Commits seguem Conventional Commits
- [ ] Testes escritos e passando
- [ ] Documentação atualizada
- [ ] Storybook stories criadas (componentes UI)
- [ ] Linting passa (`npm run lint`)
- [ ] Type checking passa (`npm run typecheck`)
- [ ] Build sucede (`npm run build`)
- [ ] Testado em diferentes navegadores
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Acessível (teclado, screen readers)
- [ ] Performance otimizada (Lighthouse)
- [ ] Branch atualizada com `main`

[← Voltar: Setup](./setup.md) | [Próximo: Estrutura do Projeto →](./project-structure.md)
