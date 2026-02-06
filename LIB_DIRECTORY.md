# 📚 Lib Directory

Pasta centralizada de utilitários, constantes, tipos e dados compartilhados do projeto.

## 📁 Estrutura dos Arquivos

| Arquivo | Descrição | Status |
|---------|-----------|--------|
| [navigation.ts](src/lib/navigation.ts) | Sistema de navegação centralizado | ✅ Usado |
| [services.ts](src/lib/services.ts) | Serviços oferecidos pela TecnoJr | ✅ Usado |
| [features.ts](src/lib/features.ts) | Diferenciais e benefícios da TecnoJr | ✅ Usado |
| [projects.ts](src/lib/projects.ts) | Projetos externos e internos | ✅ Usado |
| [utils.ts](src/lib/utils.ts) | Funções utilitárias (cn) | ✅ Usado |
| [members.ts](src/lib/members.ts) | Dados dos membros da equipe | 🚧 Página "/sobre" |
| [icons.ts](src/lib/icons.ts) | Mapeamento de ícones sociais | 🚧 Página "/sobre" |
| [types.ts](src/lib/types.ts) | Interfaces TypeScript | ✅ Usado |
| [constants.ts](src/lib/constants.ts) | Enums e constantes | ✅ Usado |
| [metadata.ts](src/lib/metadata.ts) | Helper de metadata (não usado) | ⚠️ Avaliar |

---

## 📖 Documentação por Arquivo

### **🗺️ navigation.ts** - Sistema de Navegação
Centraliza todos os links de navegação e rotas da aplicação.

**Exports:**
- `NavigationLink` - Interface para links de navegação
- `navigationLinks` - Array de links (fonte única de verdade)
- `AppRoute` - Type union de todas as rotas válidas
- `isValidRoute()` - Valida se uma string é uma rota válida
- `getNavigationLink()` - Busca link por URL
- `ROUTES_WITHOUT_HEADER` - Rotas que escondem o header

**Uso:**
```typescript
import { navigationLinks, type AppRoute } from "@/lib/navigation";

// Type-safe routing
function navigate(route: AppRoute) {
  // TypeScript autocomplete com todas as rotas
}

// Filtragem dinâmica
const centerLinks = navigationLinks.filter(link => !link.align);
```

### **🎨 utils.ts** - Funções Utilitárias
Funções auxiliares reutilizáveis.

**Exports:**
- `cn()` - Combina classes CSS com Tailwind (usa clsx + twMerge)

**Uso:**
```typescript
import { cn } from "@/lib/utils";

<div className={cn("base-class", active && "active-class")} />
```

### **📦 projects.ts** - Dados dos Projetos
Lista todos os projetos externos e internos da TecnoJr.

**Exports:**
- `externalProjects` - Array de projetos para clientes
- `internalProjects` - Array de projetos internos/estudos

**Uso:**
```typescript
import { externalProjects, internalProjects } from "@/lib/projects";
```

### **👥 members.ts** - Dados dos Membros
Lista informações dos membros da equipe.

**Exports:**
- `memberList` - Array de membros com nome, cargo, foto e links sociais
- `roles` - Objeto com todos os cargos
- `getMembersByRole()` - Filtra membros por cargo
- `getAllRoles()` - Lista todos os cargos únicos

**Status:** 🚧 Será usado na página "/sobre" (em desenvolvimento)

**Uso:**
```typescript
import { memberList, getMembersByRole } from "@/lib/members";
import { ROLE_ID } from "@/lib/constants";

const directors = getMembersByRole(ROLE_ID.Diretor);
```

### **🎯 icons.ts** - Mapeamento de Ícones
Mapeia tipos de ícones sociais para componentes Lucide React.

**Exports:**
- `iconMap` - Record de tipos de ícone para componentes
- `getIcon()` - Retorna componente de ícone por nome

**Status:** 🚧 Será usado na página "/sobre" para renderizar links sociais

**Uso:**
```typescript
import { getIcon } from "@/lib/icons";

const LinkedInIcon = getIcon("linkedin");
<LinkedInIcon className="h-5 w-5" />
```

### **🏷️ types.ts** - Tipos TypeScript
Definições de tipos compartilhados.

**Exports:**
- `Member` - Tipo de membro da equipe
- `SocialLink` - Tipo de link social
- `ExternalProject` - Tipo de projeto externo
- `InternalProject` - Tipo de projeto interno

**Uso:**
```typescript
import type { Member, ExternalProject } from "@/lib/types";
```

### **🔢 constants.ts** - Constantes
Valores constantes usados no projeto.

**Exports:**
- `ROLE_ID` - Enum com IDs de cargos
- `ROLE_LABELS` - Labels dos cargos
- `SocialIconType` - Type union de tipos de ícones

**Uso:**
```typescript
import { ROLE_ID, ROLE_LABELS } from "@/lib/constants";

const label = ROLE_LABELS[ROLE_ID.Diretor]; // "Diretor"
```

## 🎯 Princípios de Organização

1. **Single Source of Truth**: Dados centralizados em um único lugar
2. **Type Safety**: Tipos exportados para validação TypeScript
3. **Reutilização**: Funções e dados compartilhados entre componentes
4. **Manutenibilidade**: Fácil atualizar dados sem mexer em componentes
5. **Preparação Futura**: Arquivos prontos para funcionalidades planejadas

## ✨ Exemplos de Uso

### Adicionar nova rota
```typescript
// lib/navigation.ts
export const navigationLinks = [
  { url: "/", text: "Início" },
  { url: "/nova-pagina", text: "Nova Página" }, // Adicione aqui
] as const satisfies readonly NavigationLink[];

// TypeScript automaticamente atualiza o tipo AppRoute
// Header e Footer automaticamente mostram o novo link
```

### Atualizar dados de projetos
```typescript
// lib/projects.ts
export const externalProjects: ExternalProject[] = [
  // ... projetos existentes
  {
    title: "Novo Projeto",
    description: "Descrição",
    link: "https://example.com",
    img: "projeto.png",
  },
];
```

### Usar tipos em componentes
```typescript
import type { AppRoute } from "@/lib/navigation";

interface PageProps {
  route: AppRoute; // Autocomplete com todas as rotas
}
```

## 🚀 Vantagens

- ✅ **Autocomplete**: TypeScript sugere rotas/dados válidos
- ✅ **Segurança**: Erros de digitação detectados em tempo de compilação
- ✅ **Centralização**: Uma mudança atualiza todo o app
- ✅ **Consistência**: Mesmos dados em header, footer, etc
- ✅ **Documentação**: Tipos servem como documentação viva
