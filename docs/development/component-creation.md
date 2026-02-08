# 🧩 Guia de Criação de Componentes

Manual completo para criar componentes React no padrão TecnoJr com as melhores práticas de TypeScript, acessibilidade e testes.

---

## 📋 Checklist Rápido

Antes de começar, certifique-se que:

- [ ] O componente não existe ou não pode ser substituído por um existente
- [ ] Você leu o [Índice de Componentes](./component-index.md)
- [ ] Você definiu o propósito e escopo do componente
- [ ] Você sabe onde o componente será usado (páginas, seções, outros componentes)

---

## 🗂️ Organização de Arquivos

### Estrutura de um Componente

```
src/components/[categoria]/[nome-componente]/
├── index.ts                    # Export barrel
├── [nome-componente].tsx       # Componente principal
├── [nome-componente].test.tsx  # Testes unitários
└── [nome-componente].stories.tsx # Stories do Storybook
```

**Exemplo real** (`ProjectCard`):
```
src/components/ui/cards/project-card/
├── index.ts
├── project-card.tsx
├── project-card.test.tsx
└── project-card.stories.tsx
```

### Categorias

| Pasta | Quando Usar |
|-------|-------------|
| `ui/` | Componentes UI reutilizáveis (buttons, cards, form fields) |
| `ui/buttons/` | Variantes de botões |
| `ui/cards/` | Variantes de cards |
| `ui/form/` | Inputs, textareas, selects |
| `ui/typography/` | Títulos, parágrafos, texto com estilos |
| `ui/navigation/` | Tabs, pills, navegação |
| `layout/` | Header, footer, wrappers de layout |
| `sections/` | Seções completas de página |
| `animated/` | Wrappers de animação |

---

## 🔨 Template de Componente

### 1. Arquivo Principal (`*.tsx`)

```tsx
/**
 * @component NomeDoComponente
 * @description Descrição breve de uma linha do que o componente faz
 * 
 * @example
 * ```tsx
 * <NomeDoComponente
 *   prop1="valor"
 *   prop2={42}
 * >
 *   Conteúdo
 * </NomeDoComponente>
 * ```
 */

import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

// ===== TYPES =====
interface NomeDoComponenteProps extends ComponentPropsWithoutRef<"div"> {
  /** Descrição da prop obrigatória */
  propObrigatoria: string;
  
  /** Descrição da prop opcional */
  propOpcional?: number;
  
  /** Variantes visuais do componente */
  variant?: "default" | "primary" | "secondary";
  
  /** Classes auxiliares para personalização */
  className?: string;
}

// ===== COMPONENT =====
export const NomeDoComponente = forwardRef<
  HTMLDivElement,
  NomeDoComponenteProps
>(
  (
    {
      propObrigatoria,
      propOpcional = 10,
      variant = "default",
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Lógica do componente aqui
    
    return (
      <div
        ref={ref}
        className={cn(
          // Classes base
          "rounded-lg border p-4",
          // Classes condicionais
          {
            "bg-neutral-50": variant === "default",
            "bg-blue-50": variant === "primary",
          },
          // Classes customizadas
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

// Display name para DevTools
NomeDoComponente.displayName = "NomeDoComponente";
```

---

### 2. Barrel Export (`index.ts`)

```typescript
export { NomeDoComponente } from "./nome-do-componente";
export type { NomeDoComponenteProps } from "./nome-do-componente";
```

> **💡 Dica**: Sempre exporte também o tipo para permitir reutilização

---

### 3. Testes Unitários (`*.test.tsx`)

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NomeDoComponente } from "./nome-do-componente";

describe("NomeDoComponente", () => {
  // Teste básico de renderização
  it("renderiza corretamente", () => {
    render(<NomeDoComponente propObrigatoria="teste">Conteúdo</NomeDoComponente>);
    expect(screen.getByText("Conteúdo")).toBeInTheDocument();
  });

  // Teste de props
  it("aplica variante corretamente", () => {
    const { container } = render(
      <NomeDoComponente propObrigatoria="teste" variant="primary">
        Teste
      </NomeDoComponente>
    );
    expect(container.firstChild).toHaveClass("bg-blue-50");
  });

  // Teste de acessibilidade
  it("aceita props ARIA personalizadas", () => {
    render(
      <NomeDoComponente 
        propObrigatoria="teste"
        aria-label="Rótulo customizado"
      >
        Teste
      </NomeDoComponente>
    );
    expect(screen.getByLabelText("Rótulo customizado")).toBeInTheDocument();
  });

  // Teste de className customizada
  it("aceita classes customizadas", () => {
    const { container } = render(
      <NomeDoComponente propObrigatoria="teste" className="custom-class">
        Teste
      </NomeDoComponente>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
```

**Executar testes**:
```bash
npm run test              # Todos os testes
npm run test:watch        # Watch mode
npm run test:ui           # Interface visual 
npm run test:coverage     # Com cobertura
```

---

### 4. Stories do Storybook (`*.stories.tsx`)

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { NomeDoComponente } from "./nome-do-componente";

// ===== METADATA =====
const meta: Meta<typeof NomeDoComponente> = {
  title: "UI/Categoria/NomeDoComponente",
  component: NomeDoComponente,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary"],
      description: "Variante visual do componente",
    },
    propObrigatoria: {
      control: "text",
      description: "Descrição da prop obrigatória",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ===== STORIES =====

// História padrão
export const Default: Story = {
  args: {
    propObrigatoria: "Valor padrão",
    children: "Conteúdo do componente",
  },
};

// Variantes
export const Primary: Story = {
  args: {
    propObrigatoria: "Teste",
    variant: "primary",
    children: "Variante primária",
  },
};

export const Secondary: Story = {
  args: {
    propObrigatoria: "Teste",
    variant: "secondary",
    children: "Variante secundária",
  },
};

// Com elemento customizado
export const WithCustomContent: Story = {
  args: {
    propObrigatoria: "Teste",
    children: (
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Título</h3>
        <p>Parágrafo com conteúdo customizado</p>
      </div>
    ),
  },
};
```

**Visualizar stories**:
```bash
npm run storybook
# Abrir http://localhost:6006
```

---

## 🎨 Padrões de Design

### TypeScript

#### ✅ **BOM**: Tipos fortes e explícitos

```tsx
interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  size: "sm" | "md" | "lg";
  onClick: () => void;
}
```

#### ❌ **RUIM**: Tipos fracos ou `any`

```tsx
interface ButtonProps {
  variant: string;  // Muito amplo
  size: any;        // Evite any!
  onClick: Function; // Use tipos de função específicos
}
```

---

### Props e Defaults

#### ✅ **BOM**: Valores default na desestruturação

```tsx
export const Card = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: CardProps) => { /* ... */ };
```

#### ❌ **RUIM**: Valores default fora da função

```tsx
// Não usar defaultProps (deprecated em React)
Card.defaultProps = {
  variant: "default",
};
```

---

### Composição

#### ✅ **BOM**: Componentes compostos

```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
</Card>
```

#### ❌ **RUIM**: Muitas props condicionais

```tsx
<Card
  showHeader
  headerTitle="Título"
  showFooter
  footerContent="Rodapé"
/>
```

---

### Styling

#### ✅ **BOM**: Tailwind + `cn()`

```tsx
<div
  className={cn(
    "rounded-lg p-4",
    variant === "primary" && "bg-blue-500",
    error && "border-red-500",
    className
  )}
>
```

#### ❌ **RUIM**: Strings de classe longas e repetidas

```tsx
<div
  className={`rounded-lg p-4 ${variant === "primary" ? "bg-blue-500" : ""} ${error ? "border-red-500" : ""} ${className}`}
>
```

---

### Acessibilidade

#### ✅ **BOM**: ARIA labels e semântica

```tsx
<button
  type="button"
  aria-label="Fechar modal"
  aria-pressed={isOpen}
>
  <XIcon aria-hidden="true" />
</button>
```

#### ❌ **RUIM**: Falta de contexto para leitores de tela

```tsx
<button onClick={close}>
  <XIcon />
</button>
```

---

## 🧪 Testes: O Que Cobrir

### ✅ Sempre Teste

1. **Renderização básica**: O componente renderiza sem erros
2. **Props obrigatórias**: Funciona com valores mínimos
3. **Variantes**: Todas as variantes visuais aplicam classes corretas
4. **Interações**: Callbacks são chamados corretamente
5. **Acessibilidade**: ARIA labels e roles funcionam
6. **Classes customizadas**: `className` é aplicada

### 🚫 Não Precisa Testar

- Lógica de bibliotecas externas (Radix, Shadcn)
- Detalhes visuais (cores, tamanhos) — Storybook faz isso
- Animações complexas (teste manualmente)

---

## 📐 Class Variance Authority (CVA)

Para componentes com muitas variantes, use CVA.

### Exemplo: Button System

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Definir variantes
const buttonVariants = cva(
  // Classes base
  "inline-flex items-center justify-center rounded-md font-medium transition-all",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-white hover:bg-neutral-800",
        primary: "bg-gradient-to-r from-purple-500 to-blue-500 text-white",
        outline: "border border-neutral-300 hover:bg-neutral-50",
        ghost: "hover:bg-neutral-100",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// Props com tipos extraídos do CVA
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Componente
export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};
```

**Quando usar CVA**:
- Componentes com 3+ variantes
- Combinações complexas de estilos
- Componentes do design system (Button, Badge, Card)

---

## 🎬 Componentes Animados

### Com Framer Motion

```tsx
"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

export const AnimatedCard = ({ children, ...props }: CardProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 } // Respeita preferência do usuário
          : { duration: 0.5, ease: "easeOut" }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
};
```

**Importante**:
- Use `"use client"` para componentes com animação
- Sempre respeite `prefers-reduced-motion`
- Use hook `useReducedMotion()` do projeto

**📚 [Guia completo de animações →](./animations-guide.md)**

---

## 🗃️ Componentes com Dados

### Single Source of Truth

Dados devem vir de `lib/data/` ou `lib/config/`.

#### ✅ **BOM**: Importar dados

```tsx
import { services } from "@/lib/data/services";

export const ServicesSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
};
```

#### ❌ **RUIM**: Dados hardcoded

```tsx
export const ServicesSection = () => {
  const services = [
    { title: "Web", description: "..." }, // Hardcoded!
    // ...
  ];
  // ...
};
```

**📚 [Guia de gerenciamento de dados →](./data-management.md)**

---

## 🚀 Checklist de Lançamento

Antes de abrir um PR com seu componente:

### Código
- [ ] Componente segue template e convenções
- [ ] TypeScript sem erros (`npm run type-check`)
- [ ] Props documentadas com JSDoc
- [ ] `forwardRef` se componente precisa aceitar `ref`
- [ ] `displayName` definido
- [ ] Barrel export criado (`index.ts`)

### Estilos
- [ ] Usa Tailwind classes
- [ ] Usa `cn()` para combinar classes
- [ ] Responsivo (mobile-first)
- [ ] Estados visuais (hover, focus, disabled)

### Acessibilidade
- [ ] Tags HTML semânticas
- [ ] ARIA labels onde necessário
- [ ] Focusable com teclado
- [ ] Cores com contraste adequado (WCAG AA)

### Testes
- [ ] Testes unitários passando (`npm run test`)
- [ ] Cobertura de pelo menos 80%
- [ ] Testes de acessibilidade básicos

### Documentação
- [ ] Storybook stories criadas
- [ ] Exemplos de uso nos stories
- [ ] Adicionado ao [component-index.md](./component-index.md)

### Performance
- [ ] imagens otimizadas (usar `<Image />` do Next)
- [ ] Evita re-renders desnecessários (`memo` se necessário)
- [ ] Usa `"use client"` apenas se precisar de interatividade

---

## 🛠️ Ferramentas Úteis

### Gerar Componente (Script)

Você pode criar um script para automatizar a criação:

```bash
# scripts/create-component.sh
#!/bin/bash
NAME=$1
CATEGORY=$2
PATH="src/components/$CATEGORY/$NAME"

mkdir -p $PATH
touch $PATH/index.ts
touch $PATH/$NAME.tsx
touch $PATH/$NAME.test.tsx
touch $PATH/$NAME.stories.tsx

echo "export { $NAME } from './$NAME';" > $PATH/index.ts
# Adicionar templates aqui...
```

**Uso**:
```bash
./scripts/create-component.sh my-card ui/cards
```

---

### Extensões VS Code Recomendadas

Para desenvolvimento eficiente:

- **ES7+ React/Redux Snippets**: Snippets de componente
- **Tailwind CSS IntelliSense**: Autocomplete de classes
- **Pretty TypeScript Errors**: Erros mais legíveis
- **Error Lens**: Erros inline
- **Storybook**: Preview inline de stories

---

## 📚 Exemplos Completos

### Componente Simples (Badge)

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-white",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        error: "bg-red-100 text-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({ variant, className, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};
```

---

### Componente Composto (Card)

```tsx
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

// Card Root
export const Card = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-white p-6 shadow-sm", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

// Card Header
export const CardHeader = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mb-4 flex flex-col space-y-1.5", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

// Card Title
export const CardTitle = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h3">>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

// Card Content
export const CardContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";
```

**Uso**:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Conteúdo do card</p>
  </CardContent>
</Card>
```

---

## ❓ FAQ

### **P: Preciso criar testes E stories?**
**R**: Sim. Testes garantem funcionamento, stories facilitam desenvolvimento e documentação visual.

### **P: Quando usar `forwardRef`?**
**R**: Sempre que o componente encapsula um elemento HTML que pode precisar de `ref` (inputs, buttons, divs interativas).

### **P: Como lidar com contexto (theme, i18n)?**
**R**: Use hooks do React no componente:
```tsx
const { theme } = useTheme();
const { t } = useTranslation();
```

### **P: Posso ter lógica complexa em componentes?**
**R**: Prefira hooks customizados para lógica. Componentes devem focar em UI:
```tsx
// ✅ Bom
const { data, loading } = useProjects();

// ❌ Ruim - lógica misturada
const [data, setData] = useState([]);
useEffect(() => { fetch... }, []);
```

### **P: Como versionamento de componentes?**
**R**: Não há versionamento individual. Siga [Conventional Commits](../getting-started/contributing.md) e documente breaking changes.

---

## 📖 Recursos Adicionais

- **[Índice de Componentes](./component-index.md)** - Todos os componentes disponíveis
- **[Guia de Estilos](./style-guide.md)** - Design system
- **[Diretório Lib](./lib-directory.md)** - Dados e utilitários
- **[Storybook](http://localhost:6006)** - Playground visual
- **[React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)** - Referência externa
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos
- **[Shadcn UI](https://ui.shadcn.com/)** - Source dos nossos primitivos

---

**Dúvidas?** Abra uma discussão no GitHub ou consulte exemplos existentes!

[← Voltar para Documentação](../README.md)
