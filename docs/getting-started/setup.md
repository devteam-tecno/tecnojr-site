# 🚀 Guia de Setup

Guia completo para configurar o ambiente de desenvolvimento do site TecnoJr.

---

## 📋 Pré-requisitos

### Software Necessário

| Software | Versão Mínima | Recomendada | Download |
|----------|---------------|-------------|----------|
| **Node.js** | 18.17.0 | 20.x ou superior | [nodejs.org](https://nodejs.org/) |
| **npm** | 9.x | 10.x ou superior | Incluído com Node.js |
| **Git** | 2.x | Última | [git-scm.com](https://git-scm.com/) |
| **Editor** | - | VS Code | [code.visualstudio.com](https://code.visualstudio.com/) |

**Verificar instalações:**
```bash
node --version  # v20.x.x ou superior
npm --version   # 10.x.x ou superior
git --version   # 2.x.x ou superior
```

---

## 🔧 Instalação Inicial

### 1. Clone o Repositório

```bash
# Via HTTPS
git clone https://github.com/tecnojr/tecnojr-site.git

# OU via SSH (recomendado para contribuidores frequentes)
git clone git@github.com:tecnojr/tecnojr-site.git

# Entre no diretório do projeto
cd tecnojr-site/tecnojr-site
```

### 2. Instale as Dependências

```bash
npm install
```

**Tempo estimado**: 2-5 minutos dependendo da conexão

**O que é instalado:**
- Next.js 16 + React 19
- TypeScript + types
- Tailwind CSS v4
- Framer Motion
- Shadcn UI components
- Testing libraries (Vitest, Playwright, React Testing Library)
- Storybook
- Biome (linter/formatter)
- E mais... (~1000 packages)

### 3. Configure as Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local
```

Edite `.env.local` com seus valores:

```bash
# ====================================
# 📧 EMAIL (Resend)
# ====================================
# Obtenha sua chave em: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx

# Email remetente (deve estar verificado no Resend)
EMAIL_FROM=noreply@tecnojr.com.br

# Email destinatário (para onde vão os contatos)
EMAIL_TO=contato@tecnojr.com.br

# ====================================
# 📊 ANALYTICS (Opcional)
# ====================================
# Google Analytics 4 ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Como Obter a Chave do Resend

1. Acesse [resend.com](https://resend.com)
2. Crie uma conta ou faça login
3. Vá em **API Keys** → **Create API Key**
4. Copie a chave e cole em `RESEND_API_KEY`

**Importante**: A chave só é mostrada uma vez. Salve em local seguro!

### 4. Verifique a Instalação

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

**Você deve ver:**
- ✅ Homepage da TecnoJr carregando
- ✅ Sem erros no console do navegador
- ✅ Animações funcionando
- ✅ Navegação funcionando

**Se algo der errado**, veja a seção [Troubleshooting](#-troubleshooting) abaixo.

---

## 🔌 Extensões Recomendadas para VS Code

### Essenciais

Instale estas extensões para melhor experiência:

```json
{
  "recommendations": [
    "biomejs.biome",              // Linting e formatação
    "bradlc.vscode-tailwindcss",  // Autocomplete Tailwind
    "prisma.prisma-insider",      // Suporte TypeScript avançado
    "dbaeumer.vscode-eslint",     // ESLint fallback
    "ms-playwright.playwright",   // Testes E2E
    "vitest.explorer",            // Testes unitários
    "github.copilot",             // AI assistant (opcional)
    "esbenp.prettier-vscode"      // Prettier (backup)
  ]
}
```

**Instalar tudo de uma vez:**

1. Abra VS Code na pasta do projeto
2. Pressione `Ctrl+Shift+P` (Windows/Linux) ou `Cmd+Shift+P` (Mac)
3. Digite: `Extensions: Show Recommended Extensions`
4. Clique em "Install All"

### Configuração do VS Code

O projeto já inclui `.vscode/settings.json` com:
- Biome como formatador padrão
- Format on save habilitado
- Tailwind IntelliSense configurado
- TypeScript strict mode

---

## 🎨 Configure o Storybook

```bash
# Inicie o Storybook
npm run storybook
```

Abra [http://localhost:6006](http://localhost:6006).

**Você deve ver:**
- ✅ Biblioteca de componentes
- ✅ Stories de botões, cards, etc
- ✅ Documentação interativa

---

## 🧪 Execute os Testes

### Testes Unitários

```bash
# Modo watch (recomendado durante desenvolvimento)
npm test

# Executar uma vez
npm run test:run

# Com interface visual
npm run test:ui

# Gerar relatório de cobertura
npm run test:coverage
```

### Testes E2E

```bash
# Instalar browsers do Playwright (primeira vez)
npx playwright install

# Executar testes E2E
npm run test:e2e

# Com interface visual (recomendado)
npm run test:e2e:ui
```

---

## 🧹 Comandos de Qualidade de Código

### Linting

```bash
# Verificar problemas
npm run lint

# Corrigir automaticamente
npm run lint:fix
```

### Verificação de Tipos

```bash
npm run typecheck
```

### Verificação Completa

```bash
# Roda typecheck + lint
npm run check
```

---

## 📦 Estrutura de Pastas Após Instalação

```
tecnojr-site/
├── .git/                   # Repositório Git
├── .next/                  # Build do Next.js (gerado)
├── node_modules/           # Dependências (gerado)
├── public/                 # Assets estáticos
├── src/                    # Código-fonte
├── e2e/                    # Testes E2E
├── tests/                  # Utilitários de teste
├── .storybook/             # Config Storybook
├── docs/                   # Documentação
├── .env.local              # Variáveis de ambiente (você cria)
├── package.json            # Dependências
├── tsconfig.json           # Config TypeScript
├── next.config.ts          # Config Next.js
├── tailwind.config.js      # Config Tailwind
├── vitest.config.ts        # Config Vitest
└── playwright.config.ts    # Config Playwright
```

---

## 🚀 Comandos de Desenvolvimento Diário

```bash
# Iniciar desenvolvimento
npm run dev

# Ver componentes no Storybook
npm run storybook

# Rodar testes enquanto desenvolve
npm test

# Verificar código antes de commit
npm run check
```

---

## 🐛 Troubleshooting

### Problema: "Cannot find module"

**Causa**: Dependências não instaladas ou package-lock.json desatualizado

**Solução**:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Problema: "Port 3000 already in use"

**Causa**: Outra aplicação usando a porta 3000

**Solução 1** - Mate o processo:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Solução 2** - Use outra porta:
```bash
PORT=3001 npm run dev
```

---

### Problema: Erros de TypeScript no VS Code

**Causa**: TypeScript language server desatualizado

**Solução**:
1. Pressione `Ctrl+Shift+P` / `Cmd+Shift+P`
2. Digite: `TypeScript: Restart TS Server`
3. Aguarde alguns segundos

---

### Problema: Tailwind IntelliSense não funciona

**Causa**: Extensão não detectou o projeto

**Solução**:
1. Instale extensão `bradlc.vscode-tailwindcss`
2. Recarregue VS Code
3. Verifique se existe `tailwind.config.js` na raiz

---

### Problema: "RESEND_API_KEY is not defined"

**Causa**: Variável de ambiente não configurada

**Solução**:
1. Certifique-se de que `.env.local` existe
2. Verifique se `RESEND_API_KEY` está definida
3. Reinicie o servidor de desenvolvimento (`npm run dev`)

**Nota**: Variáveis de ambiente só são lidas no startup do servidor!

---

### Problema: Testes E2E falhando

**Causa**: Browsers Playwright não instalados

**Solução**:
```bash
npx playwright install
```

---

### Problema: Build falhando com erro de memória

**Causa**: Node.js sem memória suficiente

**Solução**:
```bash
# Aumentar limite de memória
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

---

### Problema: Storybook não inicia

**Causa**: Cache corrompido

**Solução**:
```bash
rm -rf .storybook/cache
npm run storybook
```

---

## 🔄 Mantendo o Projeto Atualizado

### Atualizar Dependências

```bash
# Verificar dependências desatualizadas
npm outdated

# Atualizar patch versions (seguro)
npm update

# Atualizar para latest (pode quebrar)
npm install <package>@latest
```

### Sincronizar com Repositório Remoto

```bash
# Baixar últimas mudanças
git pull origin main

# Reinstalar dependências (se package.json mudou)
npm install
```

---

## 📚 Próximos Passos

Agora que seu ambiente está configurado:

1. **📖 Leia a documentação**:
   - [Estrutura do Projeto](./project-structure.md)
   - [Guia de Contribuição](./contributing.md)
   - [Guia de Estilos](../development/style-guide.md)

2. **🎨 Explore o Storybook**:
   ```bash
   npm run storybook
   ```

3. **🧪 Rode os testes**:
   ```bash
   npm test
   npm run test:e2e:ui
   ```

4. **💻 Comece a desenvolver**:
   - Crie uma nova branch
   - Faça suas modificações
   - Siga o [Guia de Contribuição](./contributing.md)

---

## 💡 Dicas de Produtividade

### Atalhos de Teclado no VS Code

| Atalho | Ação |
|--------|------|
| `Ctrl+P` / `Cmd+P` | Quick Open - buscar arquivos |
| `Ctrl+Shift+P` / `Cmd+Shift+P` | Command Palette |
| `Ctrl+B` / `Cmd+B` | Toggle sidebar |
| `Ctrl+`` / `Cmd+`` | Toggle terminal |
| `Alt+Shift+F` / `Opt+Shift+F` | Format document |
| `F12` | Go to definition |
| `Shift+F12` | Find all references |

### Aliases de Terminal (opcional)

Adicione ao seu `.bashrc`/`.zshrc`:

```bash
alias dev='npm run dev'
alias story='npm run storybook'
alias test='npm test'
alias check='npm run check'
```

### Hot Reload Automático

O projeto já está configurado com hot reload. Mudanças em arquivos `.tsx`, `.ts`, `.css` recarregam automaticamente.

---

## 🆘 Ainda com Problemas?

1. **Verifique os logs** no terminal para erros específicos
2. **Limpe caches**:
   ```bash
   npm run clean  # Se disponível
   rm -rf .next node_modules
   npm install
   ```
3. **Consulte a documentação**:
   - [Troubleshooting Completo](../development/troubleshooting.md)
   - [FAQ do Projeto](../FAQ.md)
4. **Peça ajuda**:
   - Abra uma issue no GitHub
   - Entre em contato: contato@tecnojr.com.br

---

## ✅ Checklist de Setup Completo

- [ ] Node.js 18+ instalado
- [ ] Repositório clonado
- [ ] Dependências instaladas (`npm install`)
- [ ] `.env.local` configurado com RESEND_API_KEY
- [ ] Servidor de desenvolvimento funcionando (`npm run dev`)
- [ ] Storybook funcionando (`npm run storybook`)
- [ ] Testes rodando (`npm test`)
- [ ] Extensões VS Code instaladas
- [ ] Formatação funcionando (Biome)
- [ ] TypeScript IntelliSense funcionando
- [ ] Tailwind CSS IntelliSense funcionando

**Tudo certo?** 🎉 **Você está pronto para desenvolver!**

[← Voltar para Documentação](../README.md) | [Próximo: Estrutura do Projeto →](./project-structure.md)
