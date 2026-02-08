# 🚀 Deployment e Produção

Guia completo para fazer deploy da aplicação TecnoJr.

---

## 📋 Guia Principal

### [📦 Guia Completo de Deployment](./deployment-guide.md)
Documentação completa de deploy e CI/CD (~3000 linhas).

**Inclui**:

#### 🎯 Plataformas de Deploy
- **Vercel (Recomendado)** - Deploy automático, zero-config
- **Netlify** - Alternativa com edge functions
- **Docker** - Self-hosted e controle total
- **Servidor próprio** - VPS com PM2/Nginx

#### ⚙️ Configuração
- Variáveis de ambiente obrigatórias
- Build optimization
- Caching strategies
- Environment-specific configs

#### 🔄 CI/CD
- GitHub Actions workflows
- Testes automatizados no PR
- Preview deployments
- Production deployment
- Rollback automático

#### 📊 Monitoramento
- Vercel Analytics
- Core Web Vitals
- Error tracking
- Logs e debugging

#### 🧪 Storybook Deploy
- Chromatic ou Vercel
- Visual regression testing
- Documentação pública

---

## ⚡ Quick Start

### Deploy Rápido (Vercel)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Production deploy
vercel --prod
```

**Setup automático**: Vercel detecta Next.js e configura tudo.

---

### Deploy Rápido (Netlify)

```bash
# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Build
npm run build

# 4. Deploy
netlify deploy --prod
```

---

## 🔐 Variáveis de Ambiente

### Obrigatórias para Produção

```bash
# Email API (Resend)
RESEND_API_KEY=re_...

# Next.js (público)
NEXT_PUBLIC_SITE_URL=https://tecnojr.com.br
```

### Configurar na Plataforma

- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Environment variables

---

## 🎯 Checklists

### Antes do Deploy

- [ ] `npm run build` passa localmente
- [ ] `npm run typecheck` sem erros
- [ ] `npm run lint` sem erros
- [ ] `npm test` todos passando
- [ ] `npm run test:e2e` todos passando
- [ ] Variáveis de ambiente configuradas
- [ ] `.env.example` atualizado

### Depois do Deploy

- [ ] Site acessível na URL
- [ ] Formulário de contato funcionando
- [ ] Imagens carregando corretamente
- [ ] Links de navegação funcionando
- [ ] Lighthouse score > 90
- [ ] Testar em mobile

---

## 🔍 Troubleshooting Comum

### Build Falha

```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Erro de Environment Variable

Verifique:
1. Nome da variável correto
2. Valor não tem espaços extras
3. `NEXT_PUBLIC_` prefix se variável é usada no client
4. Variável salva na plataforma de deploy

### 404 em Produção

- Rotas dinâmicas precisam de `generateStaticParams()`
- Verifique file-based routing em `src/app/`

### Formulário Não Envia

1. `RESEND_API_KEY` configurada?
2. Email de origem verificado no Resend?
3. Rate limiting não atingido?
4. Logs de erro na plataforma?

---

## 📊 Performance em Produção

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Verificar Performance

```bash
# Lighthouse local
npm run build
npm start
# Abrir DevTools → Lighthouse

# Ou usar Vercel Analytics
# (automático após deploy)
```

---

## 🔄 Workflow de Deploy

### Development
```bash
git checkout develop
git pull
# Fazer mudanças
git add .
git commit -m "feat: nova feature"
git push
```
→ Deploy automático para staging/preview

### Production
```bash
git checkout main
git merge develop
git push
```
→ Deploy automático para produção

---

## 🛡️ Segurança em Produção

### Headers de Segurança

Configurados automaticamente em `next.config.ts`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- CSP headers

### Rate Limiting

API routes têm rate limiting:
- 5 requests/minuto para `/api/contact`
- Baseado em IP

### Validação

- Server-side validation com Zod
- Client-side validation com React Hook Form
- Sanitização de inputs

---

## 🔗 Recursos

### Documentações Oficiais
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify Deployment](https://docs.netlify.com/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

### Monitoramento
- [Vercel Analytics](https://vercel.com/analytics)
- [Google Search Console](https://search.google.com/search-console)

### CI/CD
- [GitHub Actions](https://docs.github.com/actions)
- [Chromatic](https://www.chromatic.com/)

---

## 🔗 Links Relacionados

- **[Getting Started](../getting-started/README.md)** - Setup local
- **[Development](../development/README.md)** - Guias de dev
- **[Architecture](../architecture/README.md)** - Decisões técnicas

---

**Problemas com deploy?** Verifique logs na plataforma ou abra uma issue!

[← Voltar para Documentação Principal](../README.md)
