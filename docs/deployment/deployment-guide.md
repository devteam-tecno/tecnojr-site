# 🚀 Guia de Deploy

Guia completo para build, deploy e monitoramento do site TecnoJr em produção.

---

## ⚡ Quick Start

### Build Local

```bash
# Build Next.js para produção
npm run build

# Preview local do build de produção
npm start
# Acesse http://localhost:3000

# Build Storybook
npm run docs:build
# Resultado em storybook-static/
```

### Verificação Pré-Deploy

```bash
# Lint + TypeCheck + Tests
npm run lint
npm run typecheck
npm test
npm run test:e2e

# Lighthouse audit
npm run build && npm start
# Em outra aba: npx lighthouse http://localhost:3000 --view
```

---

## 🔧 Configuração de Ambiente

### Variáveis de Ambiente

Crie `.env.local` (não commitar!):

```env
# Site URL (produção)
NEXT_PUBLIC_SITE_URL=https://tecnojr.com.br

# Resend (Email API)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=xxxxx
```

**Convenções**:
- `NEXT_PUBLIC_*`: Exposto no browser (URLs públicas, IDs analytics)
- Sem prefixo: Apenas servidor (API keys, secrets)

---

## 🌐 Plataformas de Deploy

### Vercel (Recomendado) ⭐

#### Por Que Vercel?

✅ **Vantagens**:
- Deploy automático via GitHub
- Preview deployments em cada PR
- Edge Network global (CDN)
- Zero config para Next.js
- Free tier generoso
- Analytics integrado

#### Setup Automático

1. **Conectar Repositório**
   - Acesse [vercel.com/new](https://vercel.com/new)
   - Importe repositório do GitHub
   - Vercel detecta Next.js automaticamente

2. **Configurar Build**
   - Framework Preset: **Next.js** (auto-detectado)
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)
   - Install Command: `npm ci` (padrão)
   - Node.js Version: **20.x**

3. **Environment Variables**
   - Vá em **Settings → Environment Variables**
   - Adicione:
     - `RESEND_API_KEY` (Production + Preview)
     - `NEXT_PUBLIC_SITE_URL` (Production: `https://tecnojr.com.br`, Preview: deixe vazio)
   
4. **Deploy**
   - Push para `main` → deploy production
   - Push para outras branches → preview deploy
   - Pull Request → preview automático com URL única

#### Deploy Manual (Vercel CLI)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy para preview
vercel

# Deploy para production
vercel --prod
```

#### Domínio Customizado

1. **Adicionar Domínio**
   - Dashboard → Project Settings → Domains
   - Add Domain: `tecnojr.com.br`
   - Add: `www.tecnojr.com.br` (redirect to apex)

2. **Configurar DNS**
   - **Type A**: `tecnojr.com.br` → `76.76.21.21` (Vercel IP)
   - **CNAME**: `www.tecnojr.com.br` → `cname.vercel-dns.com`
   
3. **HTTPS**
   - Vercel provê SSL automático (Let's Encrypt)
   - Renovação automática

---

### Netlify (Alternativa)

#### Setup

1. **Conectar Repo**
   - [app.netlify.com/start](https://app.netlify.com/start)
   - Escolha repositório GitHub

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20.x

3. **netlify.toml**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"

# Redirects para SPA
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Netlify CLI

```bash
# Instalar
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

### Self-Hosted (VPS/Docker)

Para controle total ou restrições de plataforma.

#### Dockerfile

```dockerfile
# Estágio 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Dependências
COPY package*.json ./
RUN npm ci

# Build
COPY . .
RUN npm run build

# Estágio 2: Runtime
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copiar apenas necessário
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
```

#### Build & Run

```bash
# Build imagem
docker build -t tecnojr-website .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://tecnojr.com.br \
  -e RESEND_API_KEY=re_xxxxx \
  tecnojr-website
```

#### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=https://tecnojr.com.br
      - RESEND_API_KEY=${RESEND_API_KEY}
      - NODE_ENV=production
    restart: unless-stopped
    
  # Opcional: Nginx como reverse proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certs:/etc/nginx/certs:ro
    depends_on:
      - web
    restart: unless-stopped
```

```bash
# Start
docker-compose up -d

# Logs
docker-compose logs -f web

# Stop
docker-compose down
```

---

## 📚 Deploy do Storybook

### Chromatic (Recomendado para Storybook) ⭐

Visual testing + hosting integrado.

```bash
# Instalar
npm install --save-dev chromatic

# Deploy (obtém token em chromatic.com)
npx chromatic --project-token=<SEU_TOKEN>
```

**Vantagens**:
- Visual regression testing automático
- Review UI changes em PRs
- Histórico de versões
- Compartilhamento fácil

#### CI com Chromatic

```yaml
# .github/workflows/chromatic.yml
name: Chromatic

on: push

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0  # Histórico completo para Chromatic
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx chromatic --project-token=${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

---

### GitHub Pages

```bash
# Build
npm run docs:build

# Deploy (instalar gh-pages)
npm install --save-dev gh-pages

# Deploy para gh-pages branch
npx gh-pages -d storybook-static

# Acesse em: https://tecnojr.github.io/tecnojr-site/
```

---

### Vercel (Separado do Site)

```bash
# Build Storybook
npm run docs:build

# Deploy storybook-static/
cd storybook-static
vercel --prod

# Domínio customizado: docs.tecnojr.com.br
```

---

## 🔄 CI/CD com GitHub Actions

### Workflow Principal

```yaml
# .github/workflows/deploy.yml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  # Job 1: Lint & TypeCheck
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run Biome
        run: npm run lint
      
      - name: TypeScript check
        run: npm run typecheck

  # Job 2: Testes
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      
      - run: npm ci
      
      - name: Unit tests
        run: npm test
      
      - name: E2E tests
        run: npm run test:e2e
      
      - name: Upload coverage
        uses: codecov/codecov-action@v4
        with:
          files: ./coverage/coverage-final.json

  # Job 3: Build
  build:
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      
      - run: npm ci
      
      - name: Build Next.js
        run: npm run build
      
      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: build
          path: .next

  # Job 4: Deploy (apenas main branch)
  deploy:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/download-artifact@v4
        with:
          name: build
          path: .next
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Verificar Secrets

Em GitHub: **Settings → Secrets and variables → Actions**

Adicione:
- `VERCEL_TOKEN` (obtido em vercel.com/account/tokens)
- `VERCEL_ORG_ID` (em .vercel/project.json após primeiro deploy)
- `VERCEL_PROJECT_ID` (em .vercel/project.json)
- `CHROMATIC_PROJECT_TOKEN` (se usar Chromatic)

---

## 📊 Otimização de Build

### Analisar Bundle Size

```bash
# Instalar analyzer
npm install --save-dev @next/bundle-analyzer

# Build com análise
ANALYZE=true npm run build

# Abre relatório no browser
```

**Adicionar a `next.config.ts`**:

```typescript
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  // ... config
};

export default withBundleAnalyzer(nextConfig);
```

### Metas de Performance

| Métrica | Meta | Atual |
|---------|------|-------|
| First Load JS | < 200KB | ~180KB ✅ |
| LCP (Largest Contentful Paint) | < 2.5s | ~1.8s ✅ |
| FID (First Input Delay) | < 100ms | ~50ms ✅ |
| CLS (Cumulative Layout Shift) | < 0.1 | ~0.05 ✅ |
| Lighthouse Performance | > 90 | 97 ✅ |

---

## ✅ Checklist Pré-Deploy

### Antes do Deploy

- [ ] `npm run build` roda sem erros
- [ ] `npm start` funciona localmente (test prod build)
- [ ] Lighthouse Score > 90 (Performance, SEO, Accessibility, Best Practices)
- [ ] Todas as imagens otimizadas (next/image + WebP/AVIF)
- [ ] Responsivo em mobile (375px), tablet (768px), desktop (1920px)
- [ ] Acessibilidade: WCAG 2.1 AA
  - [ ] Contraste de cores adequado
  - [ ] Navigation com teclado funciona
  - [ ] Screen reader friendly
- [ ] Todos os links funcionam (sem 404s)
- [ ] Formulário de contato funciona (teste envio)
- [ ] Meta tags (title, description, og:image) corretas
- [ ] robots.txt e sitemap.xml configurados
- [ ] Variáveis de ambiente configuradas no Vercel

### Pós-Deploy

- [ ] Site carrega em https://tecnojr.com.br
- [ ] SSL/HTTPS funcionando
- [ ] Configurar Analytics (Vercel Analytics ou Google Analytics)
- [ ] Configurar error tracking (Sentry)
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure alerts (downtime, errors)
- [ ] Documentar processo de rollback
- [ ] Criar backup strategy
- [ ] Atualizar documentação com URLs de produção

---

## 📈 Monitoramento & Analytics

### Vercel Analytics

Já incluído gratuitamente:

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

Acesse em: **Vercel Dashboard → Project → Analytics**

---

### Google Analytics (Opcional)

```bash
npm install @next/third-parties
```

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

---

### Error Tracking com Sentry

```bash
# Instalar Sentry
npm install @sentry/nextjs

# Setup wizard
npx @sentry/wizard@latest -i nextjs
```

Wizard cria:
- `sentry.client.config.ts` - Front-end tracking
- `sentry.server.config.ts` - Server-side tracking
- `sentry.edge.config.ts` - Edge middleware tracking

**Environment Variable**:
```env
SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

---

### Uptime Monitoring

**Opções gratuitas**:
- [UptimeRobot](https://uptimerobot.com/) (50 monitors free)
- [Pingdom](https://www.pingdom.com/) (free tier)
- [Better Uptime](https://betteruptime.com/) (generous free)

Configure alertas via:
- Email
- Slack
- Discord
- SMS (pago)

---

## 🔙 Estratégia de Rollback

### Vercel Rollback (UI)

1. Dashboard → Project → Deployments
2. Encontre deployment anterior funcional
3. Click "..." → **Promote to Production**

### Vercel Rollback (CLI)

```bash
# Listar deployments recentes
vercel ls

# Rollback para deployment específico
vercel rollback <deployment-url>
```

### Git Rollback

```bash
# Opção 1: Revert último commit (preserva histórico)
git revert HEAD
git push origin main
# CI/CD deploya automaticamente

# Opção 2: Reset para commit anterior (CUIDADO!)
git reset --hard <commit-hash>
git push --force origin main

# Opção 3: Criar PR de rollback (mais seguro)
git revert <commit-hash>
git checkout -b rollback-deploy
git push origin rollback-deploy
# Criar PR e merge
```

---

## 🛠️ Troubleshooting

### Build Falha

**Erro**: `Module not found`
```bash
# Limpar cache e reinstalar
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Erro**: `TypeScript errors`
```bash
# Verificar erros de tipo
npm run typecheck

# Build ignorando erros (NÃO RECOMENDADO)
npm run build -- --no-lint
```

---

### Deploy Falha no Vercel

1. **Check Logs**: Vercel Dashboard → Deployment → View Function Logs
2. **Environment Variables**: Verifique se todas estão configuradas
3. **Build Settings**: Framework Preset = Next.js
4. **Node Version**: Deve ser 20.x

---

### Site Lento em Produção

```bash
# 1. Verificar bundle size
ANALYZE=true npm run build

# 2. Lighthouse audit
npx lighthouse https://tecnojr.com.br --view

# 3. Check Core Web Vitals no Vercel Analytics
```

**Common fixes**:
- Otimizar imagens (usar next/image)
- Lazy load componentes pesados (dynamic import)
- Remover unused dependencies
- Enable compression (já default em Vercel)

---

## 📚 Recursos Adicionais

- **[Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)** - Docs oficiais
- **[Vercel Docs](https://vercel.com/docs)** - Plataforma de deploy
- **[Storybook Deployment](https://storybook.js.org/docs/sharing/publish-storybook)** - Deploy de Storybook
- **[Chromatic](https://www.chromatic.com/)** - Visual testing
- **[Web.dev](https://web.dev/measure/)** - Performance auditing

---

## 🎯 Filosofia de Deploy

> "Automatize tudo, teste completamente, monitore continuamente. Todo deploy deve ser seguro, rápido e reversível."

**Princípios**:
1. **Automação**: CI/CD elimina erros humanos
2. **Testes**: Nunca pule testes antes de deploy
3. **Monitoramento**: Saiba quando algo quebra
4. **Rollback**: Sempre tenha um plano B
5. **Documentação**: Próximo deploy deve ser mais fácil

---

**Última atualização**: Fevereiro 2026  
**Mantido por**: TecnoJr Development Team

[← Voltar para Documentação](../README.md)
