# 📝 Formulários e Validação

Guia completo do sistema de formulários usado no projeto TecnoJr com React Hook Form, Zod e validação acessível.

---

## 🎯 Stack de Formulários

| Biblioteca | Versão | Propósito |
|------------|--------|-----------|
| [React Hook Form](https://react-hook-form.com/) | ^7.x | Gerenciamento de estado e submissão |
| [Zod](https://zod.dev/) | ^3.x | Schema de validação type-safe |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers#zod) | ^3.x | Integração RHF + Zod |

---

## 📋 Por Que Esta Stack?

### React Hook Form

✅ **Vantagens**:
- Performance: Sem re-renders desnecessários (uncontrolled components)
- TypeScript nativo
- Validação no client-side e server-side
- Fácil integração com componentes customizados
- Bundle pequeno (~9KB)

❌ **Alternativas não usadas**:
- Formik: Mais pesado, controlled components
- Form nativo: Sem validação integrada

---

### Zod

✅ **Vantagens**:
- Type inference automático (TypeScript)
- Schemas reutilizáveis (frontend + backend)
- Mensagens de erro customizáveis
- Validações complexas (refinements, transforms)
- Composição de schemas

❌ **Alternativas não usadas**:
- Yup: Menos type-safe
- Joi: Para Node.js, não funciona no browser

---

## 🏗️ Estrutura de um Formulário

### Template Completo

```tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/buttons";
import { Input } from "@/components/ui/form";
import { Textarea } from "@/components/ui/form";

// 1. SCHEMA ZOD
const formSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z
    .string()
    .email("Email inválido")
    .max(100, "Email muito longo"),
  message: z
    .string()
    .min(10, "Mensagem muito curta")
    .max(1000, "Mensagem muito longa"),
});

// 2. TYPES INFERIDOS
type FormData = z.infer<typeof formSchema>;

// 3. COMPONENTE
export const ExampleForm = () => {
  // 4. HOOK useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // 5. HANDLER DE SUBMIT
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/example", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erro na API");

      const result = await response.json();
      console.log("Sucesso:", result);
      
      reset(); // Limpa formulário após sucesso
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  // 6. RENDER
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Campo Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nome
        </label>
        <Input
          id="name"
          {...register("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-red-500 mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Campo Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-500 mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Campo Mensagem */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensagem
        </label>
        <Textarea
          id="message"
          {...register("message")}
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-500 mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="gradient-primary"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
};
```

---

## 🔧 Schema Zod: Tipos e Validações

### Tipos Básicos

```typescript
import { z } from "zod";

const schema = z.object({
  // String
  name: z.string(),
  
  // Number
  age: z.number(),
  
  // Boolean
  terms: z.boolean(),
  
  // Date
  birthdate: z.date(),
  
  // Email
  email: z.string().email(),
  
  // URL
  website: z.string().url(),
  
  // UUID
  id: z.string().uuid(),
  
  // Enum
  role: z.enum(["admin", "user", "guest"]),
  
  // Optional
  phone: z.string().optional(),
  
  // Nullable
  middleName: z.string().nullable(),
  
  // Array
  tags: z.array(z.string()),
  
  // Union (OR)
  contact: z.union([z.string().email(), z.string().length(10)]),
});
```

---

### Validações de String

```typescript
z.string()
  .min(2, "Mínimo 2 caracteres")           // Comprimento mínimo
  .max(100, "Máximo 100 caracteres")       // Comprimento máximo
  .length(10, "Deve ter exatamente 10")    // Exatamente N
  .email("Email inválido")                  // Email válido
  .url("URL inválida")                      // URL válida
  .regex(/^\d{5}-\d{3}$/, "CEP inválido")  // Regex customizado
  .startsWith("https://", "Deve usar HTTPS") // Começa com
  .endsWith(".com", "Deve ser .com")        // Termina com
  .includes("@", "Deve conter @")           // Contém substring
  .trim()                                    // Remove espaços
  .toLowerCase()                             // Converte para minúsculas
  .toUpperCase()                             // Converte para maiúsculas
```

---

### Validações de Number

```typescript
z.number()
  .min(18, "Idade mínima: 18")              // Mínimo
  .max(100, "Idade máxima: 100")            // Máximo
  .int("Deve ser inteiro")                  // Inteiro
  .positive("Deve ser positivo")            // > 0
  .nonnegative("Não pode ser negativo")     // >= 0
  .negative("Deve ser negativo")            // < 0
  .multipleOf(5, "Deve ser múltiplo de 5")  // Múltiplo de
```

---

### Validações Avançadas

#### Refinements (Validações Customizadas)

```typescript
const passwordSchema = z
  .string()
  .min(8)
  .refine(
    (val) => /[A-Z]/.test(val),
    { message: "Senha deve conter letra maiúscula" }
  )
  .refine(
    (val) => /[0-9]/.test(val),
    { message: "Senha deve conter número" }
  );
```

#### Comparação entre Campos

```typescript
const registerSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Senhas não coincidem",
    path: ["confirmPassword"], // Campo onde erro aparece
  }
);
```

#### Transformações

```typescript
const schema = z.object({
  age: z.string().transform((val) => parseInt(val, 10)), // String → Number
  name: z.string().transform((val) => val.trim()),        // Remove espaços
});
```

---

### Schemas Reutilizáveis

```typescript
// lib/schemas/contact.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(100),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(1000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

**Uso no frontend**:
```tsx
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";

const { register, handleSubmit } = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
});
```

**Uso no backend** (API Route):
```typescript
import { contactSchema } from "@/lib/schemas/contact";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatedData = contactSchema.parse(body); // Valida
  // ...
}
```

---

## 🎨 Componentes de Formulário

### Input

```tsx
// components/ui/form/input.tsx
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-md border border-neutral-300 bg-white px-3 py-2",
      "text-sm placeholder:text-neutral-500",
      "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-red-500 aria-invalid:focus:ring-red-500",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
```

**Props importantes**:
- `aria-invalid`: Indica erro visualmente
- `aria-describedby`: Associa mensagem de erro
- `disabled`: Estado desabilitado
- `required`: Campo obrigatório

---

### Textarea

```tsx
// components/ui/form/textarea.tsx
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-20 w-full rounded-md border border-neutral-300 bg-white px-3 py-2",
      "text-sm placeholder:text-neutral-500 resize-none",
      "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-red-500 aria-invalid:focus:ring-red-500",
      "field-sizing-content", // Auto-resize
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
```

---

### Select (Futuro)

```tsx
// Para implementação futura com select customizado
import * as SelectPrimitive from "@radix-ui/react-select";
```

---

## ♿ Acessibilidade (A11y)

### Checklist de Acessibilidade

- [x] **Labels associados**: Todo input tem `<label htmlFor="id">`
- [x] **ARIA invalid**: Inputs com erro têm `aria-invalid="true"`
- [x] **ARIA describedby**: Erros associados com ID
- [x] **Role alert**: Mensagens de erro têm `role="alert"`
- [x] **Focus visível**: Ring colorido em `:focus`
- [x] **Estados visuais**: Disabled, error, focus são visualmente distintos
- [x] **Contraste**: Textos e bordas seguem WCAG AA (4.5:1)
- [x] **Navegação por teclado**: Tab, Enter, Esc funcionam

---

### Exemplo Acessível

```tsx
<div>
  {/* Label associado */}
  <label htmlFor="email" className="block text-sm font-medium mb-1">
    Email <span className="text-red-500" aria-label="obrigatório">*</span>
  </label>
  
  {/* Input com ARIA */}
  <Input
    id="email"
    type="email"
    required
    aria-required="true"
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? "email-error" : undefined}
    {...register("email")}
  />
  
  {/* Mensagem de erro */}
  {errors.email && (
    <p
      id="email-error"
      className="text-sm text-red-500 mt-1"
      role="alert"
    >
      {errors.email.message}
    </p>
  )}
</div>
```

---

## 🧪 Testes

### Testando Validação

```typescript
// forms/__tests__/contact-form.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "../contact-form";

describe("ContactForm", () => {
  it("exibe erro para email inválido", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, "email-invalido");
    await user.tab(); // Blur para triggerar validação

    await waitFor(() => {
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
    });
  });

  it("não permite submit com campos vazios", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: /enviar/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/nome deve ter pelo menos/i)).toBeInTheDocument();
    });
  });

  it("chama onSubmit com dados válidos", async () => {
    const user = userEvent.setup();
    const mockSubmit = vi.fn();
    render(<ContactForm onSubmit={mockSubmit} />);

    // Preenche campos
    await user.type(screen.getByLabelText(/nome/i), "João Silva");
    await user.type(screen.getByLabelText(/email/i), "joao@example.com");
    await user.type(screen.getByLabelText(/assunto/i), "Orçamento");
    await user.type(screen.getByLabelText(/mensagem/i), "Mensagem de teste");

    // Submit
    await user.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        name: "João Silva",
        email: "joao@example.com",
        subject: "Orçamento",
        message: "Mensagem de teste",
      });
    });
  });
});
```

---

### Testando Schema Zod

```typescript
// lib/schemas/__tests__/contact.test.ts
import { describe, it, expect } from "vitest";
import { contactSchema } from "../contact";

describe("contactSchema", () => {
  it("aceita dados válidos", () => {
    const valid = {
      name: "João Silva",
      email: "joao@example.com",
      subject: "Teste",
      message: "Mensagem válida",
    };

    expect(() => contactSchema.parse(valid)).not.toThrow();
  });

  it("rejeita email inválido", () => {
    const invalid = {
      name: "João",
      email: "invalido",
      subject: "Teste",
      message: "Mensagem",
    };

    expect(() => contactSchema.parse(invalid)).toThrow();
  });

  it("rejeita nome com 1 caractere", () => {
    const invalid = {
      name: "J",
      email: "joao@example.com",
      subject: "Teste",
      message: "Mensagem",
    };

    expect(() => contactSchema.parse(invalid)).toThrow(/nome deve ter/i);
  });
});
```

---

## 🎯 Padrões de UX

### Estados de Loading

```tsx
<Button
  type="submit"
  disabled={isSubmitting}
  className="w-full"
>
  {isSubmitting ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Enviando...
    </>
  ) : (
    "Enviar Mensagem"
  )}
</Button>
```

---

### Feedback de Sucesso

Com **Sonner** (toast library):

```bash
npm install sonner
```

```tsx
import { toast } from "sonner";

const onSubmit = async (data: FormData) => {
  try {
    await fetch("/api/contact", { /* ... */ });
    
    toast.success("Mensagem enviada!", {
      description: "Responderemos em breve.",
    });
    
    reset(); // Limpa formulário
  } catch (error) {
    toast.error("Erro ao enviar", {
      description: "Tente novamente mais tarde.",
    });
  }
};
```

---

### Validação em Tempo Real (Opcional)

Por padrão, React Hook Form valida no blur/submit. Para validação em tempo real:

```tsx
const { register } = useForm({
  resolver: zodResolver(schema),
  mode: "onChange", // Valida a cada mudança
  // ou
  mode: "onBlur",   // Valida no blur (default)
  // ou
  mode: "onSubmit", // Valida apenas no submit
});
```

---

## 📚 Exemplos Reais

### Formulário de Contato (Atual)

```tsx
// components/sections/budget/contact-form-card.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { toast } from "sonner";

export const ContactFormCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error((await response.json()).error);
      }

      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Erro ao enviar."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Implementação completa vista anteriormente */}
    </form>
  );
};
```

---

## 📖 Recursos Adicionais

- **[React Hook Form Docs](https://react-hook-form.com/)** - Documentação oficial
- **[Zod Docs](https://zod.dev/)** - Schema de validação
- **[Hookform DevTools](https://react-hook-form.com/dev-tools)** - Debugging
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[API Routes](./api-routes.md)** - Integração com backend

---

## 📚 Documentação Relacionada

- **[API Routes](./api-routes.md)** - Como integrar formulários com APIs
- **[Component Creation](./component-creation.md)** - Como criar componentes de formulário
- **[Lib Directory](./lib-directory.md)** - Schemas Zod em lib/types/
- **[Testing](./testing.md)** - Como testar formulários
- **[React Hook Form Docs](https://react-hook-form.com/)** - Documentação oficial

---

## ❓ FAQ

### **P: Por que não usar controlled components?**
**R**: React Hook Form usa uncontrolled para performance. Evita re-renders a cada tecla digitada.

### **P: Como adicionar validação assíncrona (ex: verificar se email existe)?**
**R**: Use `refine` com função async:
```typescript
z.string().email().refine(
  async (email) => {
    const exists = await checkEmailExists(email);
    return !exists;
  },
  { message: "Email já cadastrado" }
);
```

### **P: Como criar campos dinâmicos (adicionar/remover)?**
**R**: Use `useFieldArray`:
```typescript
const { fields, append, remove } = useFieldArray({
  control,
  name: "items",
});
```

### **P: Como resetar apenas um campo?**
**R**:
```typescript
setValue("email", ""); // Limpa valor
resetField("email");   // Limpa valor e estado de erro
```

---

**Dúvidas?** Consulte a [documentação oficial](https://react-hook-form.com/) ou abra uma discussão!

[← Voltar para Documentação](../README.md)
