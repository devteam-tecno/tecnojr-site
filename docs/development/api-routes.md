# 🔌 Rotas de API

Documentação completa das rotas de API (API Routes) do Next.js utilizadas no projeto TecnoJr.

---

## 📋 Visão Geral

O projeto utiliza Next.js API Routes para endpoints server-side. Atualmente temos:

| Rota | Método | Propósito | Status |
|------|--------|-----------|--------|
| `/api/contact` | `POST` | Envio de formulário de contato | ✅ Ativo |

---

## 📁 Estrutura

```
src/app/api/
└── contact/
    └── route.ts        # Endpoint de contato
```

API Routes no Next.js App Router seguem a convenção `route.ts` em pastas nomeadas pela rota.

---

## 📮 `/api/contact` - Envio de Formulário

### Propósito

Recebe dados do formulário de contato da homepage e envia email via [Resend](https://resend.com).

### Método

`POST`

### Request Body

```typescript
interface ContactRequest {
  name: string;        // Nome completo (min 2 chars)
  email: string;       // Email válido
  subject: string;     // Assunto (min 5 chars)
  message: string;     // Mensagem (min 10 chars)
}
```

**Exemplo**:
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "subject": "Orçamento para site",
  "message": "Gostaria de saber mais sobre desenvolvimento web."
}
```

### Validação

Todos os campos são validados com **Zod**:

```typescript
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100),
  email: z
    .string()
    .email("Email inválido")
    .max(100),
  subject: z
    .string()
    .min(5, "Assunto deve ter pelo menos 5 caracteres")
    .max(200),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000),
});
```

### Response

#### ✅ Sucesso (200)

```json
{
  "message": "Email enviado com sucesso!"
}
```

#### ❌ Erro de Validação (400)

```json
{
  "error": "Dados inválidos",
  "details": [
    {
      "path": ["email"],
      "message": "Email inválido"
    }
  ]
}
```

#### ❌ Erro Interno (500)

```json
{
  "error": "Erro ao enviar email. Tente novamente mais tarde."
}
```

### Implementação Completa

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Inicializa cliente Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Schema de validação
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(100),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(1000),
});

/**
 * POST /api/contact
 * Envia email de contato via Resend
 */
export async function POST(request: NextRequest) {
  try {
    // Parse do body
    const body = await request.json();

    // Valida dados com Zod
    const validatedData = contactSchema.parse(body);

    // Envia email via Resend
    const { data, error } = await resend.emails.send({
      from: "TecnoJr <contato@tecnojr.com.br>",
      to: ["contato@tecnojr.com.br"],
      replyTo: validatedData.email,
      subject: `[Site] ${validatedData.subject}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Assunto:</strong> ${validatedData.subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Erro do Resend
    if (error) {
      console.error("[API] Erro ao enviar email:", error);
      return NextResponse.json(
        { error: "Erro ao enviar email. Tente novamente mais tarde." },
        { status: 500 }
      );
    }

    // Sucesso
    return NextResponse.json(
      { message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    // Erro de validação Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Dados inválidos",
          details: error.errors.map((err) => ({
            path: err.path,
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Outros erros
    console.error("[API] Erro inesperado:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
```

---

## 🔧 Configuração

### Variáveis de Ambiente

Crie arquivo `.env.local` na raiz:

```env
# Resend API Key (obtenha em https://resend.com/api-keys)
RESEND_API_KEY=re_123456789_ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

⚠️ **Importante**: 
- Nunca commite `.env.local` (já está no `.gitignore`)
- Use variáveis diferentes para desenvolvimento e produção

### Instalação Resend

```bash
npm install resend
```

### Verificação de Domínio

Para usar Resend em produção:

1. Acesse [Resend Dashboard](https://resend.com/domains)
2. Adicione seu domínio (`tecnojr.com.br`)
3. Configure registros DNS (SPF, DKIM, DMARC)
4. Aguarde verificação

**Modo desenvolvimento**: Use domínio de teste do Resend (`onboarding@resend.dev`)

---

## 🎨 Uso no Frontend

### Com React Hook Form + Zod

```tsx
// components/sections/budget/contact-form-card.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/buttons";
import { Input } from "@/components/ui/form";
import { Textarea } from "@/components/ui/form";
import { toast } from "sonner"; // ou seu sistema de notificação

// Schema IDÊNTICO ao backend
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().email("Email inválido").max(100),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres").max(200),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar mensagem");
      }

      // Sucesso
      toast.success(result.message);
      reset(); // Limpa formulário
    } catch (error) {
      // Erro
      toast.error(
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem. Tente novamente."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nome
        </label>
        <Input
          id="name"
          {...register("name")}
          aria-invalid={!!errors.name}
          placeholder="Seu nome completo"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Assunto */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Assunto
        </label>
        <Input
          id="subject"
          {...register("subject")}
          aria-invalid={!!errors.subject}
          placeholder="Orçamento para site"
        />
        {errors.subject && (
          <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensagem
        </label>
        <Textarea
          id="message"
          {...register("message")}
          aria-invalid={!!errors.message}
          placeholder="Descreva seu projeto..."
          rows={4}
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="gradient-primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
};
```

---

## 🧪 Testes

### Teste Manual (cURL)

```bash
# Sucesso
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@example.com",
    "subject": "Assunto de teste",
    "message": "Esta é uma mensagem de teste"
  }'

# Erro de validação (email inválido)
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "email-invalido",
    "subject": "Assunto",
    "message": "Mensagem"
  }'
```

### Teste Automatizado (Vitest)

```typescript
// src/app/api/contact/__tests__/route.test.ts
import { describe, it, expect, vi } from "vitest";
import { POST } from "../route";
import { NextRequest } from "next/server";

// Mock do Resend
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ data: {}, error: null }),
    },
  })),
}));

describe("POST /api/contact", () => {
  const createRequest = (body: any) => {
    return new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  it("retorna 200 com dados válidos", async () => {
    const request = createRequest({
      name: "João Silva",
      email: "joao@example.com",
      subject: "Teste de assunto",
      message: "Esta é uma mensagem de teste válida.",
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe("Email enviado com sucesso!");
  });

  it("retorna 400 com email inválido", async () => {
    const request = createRequest({
      name: "João Silva",
      email: "email-invalido",
      subject: "Teste",
      message: "Mensagem de teste",
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Dados inválidos");
    expect(data.details).toHaveLength(1);
  });

  it("retorna 400 com nome muito curto", async () => {
    const request = createRequest({
      name: "J",
      email: "joao@example.com",
      subject: "Teste",
      message: "Mensagem de teste",
    });

    const response = await POST(request);
    
    expect(response.status).toBe(400);
  });
});
```

---

## 🔒 Segurança

### Rate Limiting (Recomendado)

Para evitar abuso, adicione rate limiting:

```bash
npm install @upstash/ratelimit @upstash/redis
```

```typescript
// src/app/api/contact/route.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "60 s"), // 5 requests por minuto
});

export async function POST(request: NextRequest) {
  // Rate limiting por IP
  const ip = request.ip ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Muitas requisições. Tente novamente em 1 minuto." },
      { status: 429 }
    );
  }

  // Resto do código...
}
```

### Sanitização de HTML

Para prevenir XSS no email:

```bash
npm install dompurify isomorphic-dompurify
```

```typescript
import DOMPurify from "isomorphic-dompurify";

// Sanitiza mensagem antes de enviar
const sanitizedMessage = DOMPurify.sanitize(validatedData.message);
```

### CORS (se necessário)

Se API será usada por outros domínios:

```typescript
export async function POST(request: NextRequest) {
  const response = await handleRequest();

  // Adiciona headers CORS
  response.headers.set("Access-Control-Allow-Origin", "https://tecnojr.com.br");
  response.headers.set("Access-Control-Allow-Methods", "POST");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}
```

---

## 📊 Logs e Monitoramento

### Console Logs

```typescript
export async function POST(request: NextRequest) {
  console.log("[API] POST /api/contact - Iniciando...");

  try {
    const body = await request.json();
    console.log("[API] Body recebido:", { ...body, message: "***" }); // Não loga mensagem completa

    const validatedData = contactSchema.parse(body);
    console.log("[API] Validação OK");

    // Envia email...
    console.log("[API] Email enviado com sucesso");

    return NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("[API] Erro:", error);
    // ...
  }
}
```

### Integração com Sentry (Opcional)

```bash
npm install @sentry/nextjs
```

```typescript
import * as Sentry from "@sentry/nextjs";

export async function POST(request: NextRequest) {
  try {
    // ...
  } catch (error) {
    Sentry.captureException(error, {
      tags: { route: "/api/contact" },
      extra: { body: await request.json() },
    });
    // ...
  }
}
```

---

## 🚀 Deploy

### Vercel

1. **Adicione variável de ambiente**:
   - Acesse projeto no Vercel Dashboard
   - Settings → Environment Variables
   - Adicione `RESEND_API_KEY`

2. **Deploy**:
```bash
npm run build
vercel --prod
```

### Outras Plataformas

Certifique-se de configurar `RESEND_API_KEY` nas variáveis de ambiente da plataforma.

---

## 📚 Documentação Relacionada

- **[Formulários e Validação](./forms-validation.md)** - Integração com React Hook Form
- **[Gerenciamento de Dados](./data-management.md)** - Estrutura de dados
- **[Resend Documentation](https://resend.com/docs)** - Documentação oficial do Resend
- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** - Documentação oficial

---

## ❓ FAQ

### **P: Por que não usar Server Actions em vez de API Routes?**
**R**: Server Actions são ótimos para mutações simples. Usamos API Routes para:
- Endpoints RESTful explícitos
- Fácil teste com ferramentas como cURL/Postman
- Potencial uso por apps externos (mobile, etc)

### **P: Como adicionar nova rota de API?**
**R**: 
1. Crie pasta em `src/app/api/[nome-rota]/`
2. Crie arquivo `route.ts`
3. Exporte funções com nomes de métodos HTTP (`GET`, `POST`, etc)

### **P: Posso usar outras bibliotecas de email?**
**R**: Sim! Alternativas: Nodemailer, SendGrid, AWS SES. Resend é simples e moderno.

### **P: Como testar envio de email localmente?**
**R**: 
- Use Resend em modo teste (domínio `onboarding@resend.dev`)
- Ou use MailHog/MailCatcher para capturar emails localmente

### **P: API Routes rodam no servidor ou cliente?**
**R**: Sempre no **servidor**. São endpoints Node.js, não código de browser.

---

**Dúvidas?** Abra uma issue ou consulte a [documentação do Next.js](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)!

[← Voltar para Documentação](../README.md)
