# GitHub Actions - TecnoJR Site

Documentação completa dos workflows de CI/CD implementados no projeto.

---

## Visão Geral

O projeto utiliza **GitHub Actions** para automação de qualidade de código, testes e deploy. A infraestrutura foi projetada para ser simples, confiável e adequada para equipes com rotatividade anual.

### Workflows Implementados

| Workflow | Arquivo | Quando roda | Tempo médio | Descrição |
|----------|---------|-------------|-------------|-----------|
| **CI** | [`ci.yml`](../../.github/workflows/ci.yml) | Todos os pushes e PRs | ~5-7 min | Linting, type checking, testes unitários e build |
| **E2E Tests** | [`e2e.yml`](../../.github/workflows/e2e.yml) | Push para `main` | ~10-15 min | Testes end-to-end com Playwright |
| **Storybook Deploy** | [`storybook-deploy.yml`](../../.github/workflows/storybook-deploy.yml) | Push para `main` | ~5-8 min | Build e deploy da documentação de componentes |

### Dependências Automáticas

- **Dependabot**: Configurado em [`.github/dependabot.yml`](../../.github/dependabot.yml)
  - Atualiza dependências npm semanalmente (segundas, 09:00 BRT)
  - Atualiza GitHub Actions semanalmente
  - Agrupa updates de dev dependencies para reduzir ruído

---

## Workflow: CI (Continuous Integration)

### Quando roda

- ✅ Push para qualquer branch
- ✅ Pull requests para qualquer branch
- ⚡ Cancela execuções anteriores quando novo push é feito

### Jobs

#### 1. **Code Quality** (~2-3 min)

Valida qualidade do código:

```bash
npm run lint      # Biome linter
npm run typecheck # TypeScript strict mode
```

**Falha se:**
- Existirem erros de linting
- Existirem erros de tipos TypeScript
- Código não seguir convenções do Biome

#### 2. **Unit Tests** (~3-4 min)

Executa testes unitários com cobertura:

```bash
npm run test:coverage # Vitest com coverage
```

**Falha se:**
- Qualquer teste unitário falhar
- Cobertura não atingir thresholds:
  - **Lines**: 85%
  - **Functions**: 85%
  - **Branches**: 80%
  - **Statements**: 85%

**Artifacts gerados:**
- `coverage-report/` (disponível por 7 dias)
  - HTML report em `coverage/index.html`
  - LCOV report para integrações

#### 3. **Build Next.js** (~2-3 min)

Valida build de produção:

```bash
npm run build # Next.js production build
```

**Falha se:**
- Build falhar (erros de compilação, imports inválidos, etc.)
- Diretório `.next` não for criado

**Cache:**
- `.next/cache` (incremental build)
- Reduz tempo de builds subsequentes em ~40%

#### 4. **CI Success** (summary job)

Job agregador que verifica status de todos os anteriores. Útil para configurar branch protection rules.

---

## Workflow: E2E Tests

### Quando roda

- ✅ Push para branch `main` (economiza CI minutes)
- ✅ Manualmente via `workflow_dispatch` (para debugging)

### Por que apenas em main?

Testes E2E são lentos e consomem mais recursos. Como CI já valida qualidade de código e testes unitários em todos os PRs, E2E rodando apenas em main oferece:

- **Economia**: ~10-15 min × 5 commits/PR = economiza 50-75 min por PR
- **Feedback rápido**: Desenvolvedores recebem feedback de CI em ~5-7 min
- **Segurança**: Main sempre testada antes de deploy

**Recomendação**: Rodar E2E localmente antes de merge crítico:
```bash
npm run test:e2e
```

### O que faz

```bash
npx playwright install --with-deps  # Instala browsers (Chromium, Firefox)
npm run test:e2e                    # Roda testes E2E
```

**Playwright configuração:**
- **Browsers**: Chromium + Firefox (cross-browser testing)
- **Timeout por teste**: 30s
- **Retries**: 2 tentativas em caso de falha (flaky tests)
- **Workers**: 1 (sequencial em CI para estabilidade)
- **Dev server**: Iniciado automaticamente pelo Playwright
  - URL: `http://localhost:3000`
  - Timeout: 120s para startup
  - Gerenciado por: Playwright (não deixa processos órfãos)

### Cache

- **Playwright browsers**: `~/.cache/ms-playwright`
- Primeira execução: ~2 min para download
- Execuções subsequentes: ~10s overhead apenas

### Artifacts em falha

Quando testes falham, workflow faz upload de:
- `playwright-report/` → HTML report interativo (7 dias retenção)
- `test-results/` → Screenshots/videos de falhas (7 dias retenção)

**Como visualizar:**
1. Acesse workflow run que falhou
2. Baixe artifact `playwright-report`
3. Extraia e abra `index.html` no browser

---

## Workflow: Storybook Deploy

### Quando roda

- ✅ Push para branch `main`
- ✅ Manualmente via `workflow_dispatch`

### O que faz

```bash
npm run build-storybook  # Build static Storybook
# Deploy para GitHub Pages (branch gh-pages)
```

### Primeira configuração (one-time setup)

1. **Habilitar GitHub Pages no repositório:**
   - Acesse: `Settings` → `Pages`
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Clique em `Save`

2. **Aguardar primeiro deploy:**
   - Faça push para `main` ou dispare workflow manualmente
   - Aguarde ~5 min para build + deploy
   - GitHub Pages processa por ~2-3 min adicionais

3. **Acessar Storybook:**
   - URL: `https://tecnojr.github.io/tecnojr-site/`
   - Atualiza automaticamente a cada merge em `main`

### Benefícios

- **Documentação viva**: Sempre atualizada com `main`
- **Onboarding rápido**: Novos membros exploram componentes visualmente
- **Design review**: Stakeholders podem ver componentes sem rodar projeto
- **Custo zero**: GitHub Pages é gratuito para repositórios públicos

---

## Dependabot

Configurado para manter dependências atualizadas automaticamente.

### Estratégia de updates

**npm dependencies:**
- **Frequência**: Semanalmente (segundas, 09:00 BRT)
- **Limite**: 10 PRs abertos simultaneamente
- **Agrupamento**: Dev dependencies com updates menores são agrupados
  - Reduz de ~15 PRs/semana para ~3-4 PRs/semana
  - Facilitana revisão e merge

**GitHub Actions:**
- **Frequência**: Semanalmente (segundas, 09:00 BRT)
- **Segurança**: Actions pinadas por SHA no futuro (boa prática)

### Labels automáticos

Dependabot adiciona labels para organização:
- `dependencies` → Todos os updates
- `automated` → Updates automáticos (npm)
- `ci/cd` → Updates de GitHub Actions

### Revisores e assignees

Configure em [`.github/dependabot.yml`](../../.github/dependabot.yml):

```yaml
reviewers:
  - "tecnojr/frontend-team"  # Substitua pelo time real
assignees:
  - "tecnojr/frontend-team"  # Substitua pelo time real
```

**TODO**: Atualizar com nome do GitHub team correto.

### Como revisar PRs do Dependabot

1. **Verificar changelog**: Link no PR para release notes
2. **Verificar se CI passa**: Todos os checks devem estar verdes
3. **Breaking changes?**: Ler release notes cuidadosamente
4. **Merge**: Se CI verde e sem breaking changes

**Dependabot commands:**
- `@dependabot rebase` → Rebase o PR
- `@dependabot recreate` → Recria o PR do zero
- `@dependabot merge` → Merge automático (se CI verde)
- `@dependabot ignore this major version` → Ignora versão major

---

## Custos e Limites

### GitHub Actions Free Tier

- **Repositórios públicos**: ✅ **Minutos ilimitados**
- **Repositórios privados**: 2.000 minutos/mês

### Estimativa de uso mensal (público)

Assumindo 30 dias/mês, 5 commits/dia em branches, 1 merge/dia em main:

| Workflow | Execuções/mês | Tempo | Total |
|----------|---------------|-------|-------|
| CI | ~150 (5 commits × 30 dias) | ~5 min | 750 min |
| E2E | ~30 (1 merge × 30 dias) | ~12 min | 360 min |
| Storybook | ~30 (1 merge × 30 dias) | ~6 min | 180 min |
| **TOTAL** | | | **~1.290 min/mês** |

**Custos**: R$ 0 (repositório público, ilimitado)

### Otimizações implementadas

✅ **Concurrency groups**: Cancela execuções duplicadas  
✅ **Cache agressivo**: `node_modules`, `.next/cache`, Playwright browsers  
✅ **E2E apenas em main**: Economiza ~50-75 min por PR  
✅ **Timeouts configurados**: Previne jobs travados  
✅ **Smart caching**: Playwright browsers (~200MB) com cache hit ~90%  

---

## Troubleshooting

### CI falhando: "Coverage threshold not met"

**Problema**: Cobertura de testes abaixo de 85/85/80/85.

**Solução**:
```bash
# Rodar coverage localmente
npm run test:coverage

# Ver relatório detalhado
open coverage/index.html  # Mac/Linux
start coverage/index.html # Windows

# Identificar código sem cobertura
# Adicionar testes faltantes
```

**Temporariamente** (não recomendado):
Ajustar thresholds em [vitest.config.ts](../../vitest.config.ts):
```ts
coverage: {
  thresholds: {
    lines: 80,  // Reduzir temporariamente
    // ...
  }
}
```

### CI falhando: "Build failed - Module not found"

**Problema**: Import inválido ou dependência faltando.

**Solução**:
```bash
# Limpar e reinstalar
rm -rf node_modules package-lock.json .next
npm install
npm run build

# Se ainda falhar, verificar:
# 1. Path alias (@/) configurado em tsconfig.json
# 2. Import statement correto
# 3. Arquivo realmente existe no caminho
```

### E2E falhando: "Target closed" ou "Timeout"

**Problema**: Playwright não consegue conectar ao dev server.

**Solução**:
```bash
# Verificar se porta 3000 está livre
lsof -i :3000  # Mac/Linux
netstat -ano | findstr :3000  # Windows

# Matar processo se existir
kill -9 <PID>

# Rodar teste localmente
npm run test:e2e

# Se ainda falhar, verificar timeout em playwright.config.ts
webServer: {
  timeout: 120000,  # 2 min (aumentar se necessário)
}
```

### E2E falhando: "Browser not found"

**Problema**: Playwright browsers não instalados em CI.

**Verificar**: [`.github/workflows/e2e.yml`](../../.github/workflows/e2e.yml) tem step:
```yaml
- name: Install Playwright browsers with dependencies
  run: npx playwright install --with-deps
```

**Localmente**:
```bash
npx playwright install --with-deps
```

### Storybook não acessível no GitHub Pages

**Problema**: `404 Not Found` ao acessar URL.

**Checklist**:
1. ✅ Workflow `storybook-deploy.yml` rodou com sucesso?
2. ✅ Branch `gh-pages` foi criada?
   - Verificar em: `Code` → `Branches`
3. ✅ GitHub Pages configurado corretamente?
   - `Settings` → `Pages` → Source: `gh-pages` branch
4. ✅ Aguardou ~5 min após primeiro deploy?

**Forçar re-deploy**:
```bash
# Fazer commit vazio em main
git commit --allow-empty -m "chore: trigger storybook redeploy"
git push origin main
```

### Dependabot não criando PRs

**Problema**: Nenhum PR de Dependabot aparece.

**Checklist**:
1. ✅ Dependabot habilitado no repositório?
   - `Settings` → `Security & analysis` → `Dependabot version updates`
2. ✅ Arquivo `.github/dependabot.yml` existe?
3. ✅ Sintaxe YAML válida?
   ```bash
   # Validar YAML
   yamllint .github/dependabot.yml
   ```
4. ✅ Aguardou primeira execução? (segundas, 09:00 BRT)

**Forçar execução manual**:
- `Insights` → `Dependency graph` → `Dependabot` → `Last checked: Check for updates`

### Cache não funcionando (CI lento)

**Problema**: Workflow sempre demora tempo total, sem speed-up.

**Verificar**:
```yaml
# Em cada workflow, checar step:
- uses: actions/setup-node@v4
  with:
    cache: 'npm'  # ✅ Deve estar presente

# Para Playwright:
- uses: actions/cache@v4
  with:
    path: ~/.cache/ms-playwright
    key: ${{ runner.os }}-playwright-${{ hashFiles('**/package-lock.json') }}
```

**Limpar cache manualmente**:
- `Actions` → `Caches` → Deletar caches antigos

---

## Segurança

### Secrets Management

**Nunca commitar**:
- ❌ API keys
- ❌ Tokens de acesso
- ❌ Credenciais de banco de dados
- ❌ Arquivos `.env`

**Onde configurar secrets**:

1. **GitHub Secrets** (para uso em Actions):
   - `Settings` → `Secrets and variables` → `Actions`
   - Adicionar: `New repository secret`
   - Usar em workflow: `${{ secrets.SECRET_NAME }}`

2. **Vercel Environment Variables** (para runtime):
   - Dashboard Vercel → Projeto → `Settings` → `Environment Variables`
   - Adicionar para cada ambiente: Production, Preview, Development

**Secrets necessários**:

| Secret | Onde configurar | Usado em | Obrigatório? |
|--------|----------------|----------|--------------|
| `RESEND_API_KEY` | Vercel | Runtime (email) | ✅ Sim (prod) |
| `RESEND_FROM_EMAIL` | Vercel | Runtime (email) | ✅ Sim (prod) |
| `CONTACT_EMAIL` | Vercel | Runtime (email) | ✅ Sim (prod) |
| `GITHUB_TOKEN` | Auto-gerado | Storybook deploy | Auto (GitHub) |

**Nota**: CI/CD **não precisa** de `RESEND_API_KEY` pois testes mockam email.

### Permissions

Workflows seguem **princípio do menor privilégio**:

```yaml
# CI e E2E - apenas leitura
permissions:
  contents: read

# Storybook deploy - necessita escrita para gh-pages
permissions:
  contents: write
```

### Auditoria

**Verificar logs de workflows**:
- `Actions` → Selecionar workflow run → Ver logs detalhados
- Logs mantidos por 90 dias

**Monitorar execuções falhadas**:
- Configurar notificações: `Settings` → `Notifications` → `Actions`
- Receber email quando workflow falha

---

## Adicionando Novo Workflow

Exemplo: Adicionar Lighthouse CI para performance monitoring.

### 1. Criar arquivo de workflow

[`.github/workflows/lighthouse.yml`](../../.github/workflows/lighthouse.yml):

```yaml
name: Lighthouse CI

on:
  pull_request:
    branches: ["main"]

permissions:
  contents: read
  pull-requests: write  # Para comentar score no PR

jobs:
  lighthouse:
    name: Lighthouse Performance Check
    runs-on: ubuntu-latest
    timeout-minutes: 10
    
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      
      - run: npm ci
      - run: npm run build
      
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/sobre
            http://localhost:3000/projetos
          uploadArtifacts: true
```

### 2. Testar localmente

```bash
# Instalar Lighthouse CLI
npm install -g @lhci/cli

# Rodar Lighthouse local
npm run build
npm run start &
lhci autorun
```

### 3. Commit e verificar

```bash
git add .github/workflows/lighthouse.yml
git commit -m "feat(ci): add lighthouse performance monitoring"
git push
```

### 4. Ajustar se necessário

- Verificar tempo de execução
- Ajustar `timeout-minutes` se necessário
- Configurar thresholds de performance

---

## Boas Práticas

### ✅ DO

- ✅ Usar cache agressivamente (`actions/cache`, `setup-node@cache`)
- ✅ Configurar timeouts em todos os jobs (previne custos excessivos)
- ✅ Usar concurrency groups para cancelar execuções duplicadas
- ✅ Pin Node.js version (usa `.nvmrc`)
- ✅ Fail fast: jobs independentes rodando em paralelo
- ✅ Upload artifacts apenas em caso de falha (economiza storage)
- ✅ Documentar cada workflow (comentários no YAML)
- ✅ Testar workflows localmente antes de commit
- ✅ Revisar logs de workflows regularmente

### ❌ DON'T

- ❌ Rodar `npm run dev` ou `npm run storybook` diretamente (nunca terminam)
- ❌ Usar `npm install` em vez de `npm ci` em CI (não determinístico)
- ❌ Commitar secrets ou tokens no código
- ❌ Criar workflows sem timeout (podem rodar infinitamente)
- ❌ Ignorar falhas de workflow (sempre investigar)
- ❌ Fazer deploy sem CI verde (quebra main)
- ❌ Desabilitar testes para fazer CI passar (resolver problema raiz)
- ❌ Usar `actions/*@main` (instável, preferir versões pinadas)

---

## Comandos Úteis

### Verificar CI localmente

```bash
# Replicar exatamente o que CI faz
npm ci                    # Instalar dependências (clean install)
npm run lint              # Linting
npm run typecheck         # Type check
npm run test:coverage     # Testes com coverage
npm run build             # Build produção
```

### Debugar testes E2E

```bash
# Modo debug (breakpoints)
npm run test:e2e:debug

# Modo headed (ver browser real)
npm run test:e2e:headed

# Modo UI (interface gráfica)
npm run test:e2e:ui

# Rodar teste específico
npx playwright test e2e/home.spec.ts

# Ver relatório do último run
npx playwright show-report
```

### Verificar Storybook

```bash
# Build localmente (mesmo que CI faz)
npm run build-storybook

# Verificar output
ls -la storybook-static/

# Servir localmente para testar
npx http-server storybook-static -p 8080
open http://localhost:8080
```

### Limpar caches

```bash
# Limpar Next.js cache
rm -rf .next

# Limpar node_modules
rm -rf node_modules package-lock.json
npm install

# Limpar Playwright browsers
npx playwright uninstall --all
npx playwright install --with-deps

# Limpar todos os caches
rm -rf .next node_modules coverage storybook-static test-results playwright-report
npm ci
```

---

## Recursos

### Documentação oficial

- [GitHub Actions docs](https://docs.github.com/en/actions)
- [Dependabot docs](https://docs.github.com/en/code-security/dependabot)
- [Playwright CI docs](https://playwright.dev/docs/ci)
- [Vitest coverage docs](https://vitest.dev/guide/coverage.html)
- [Storybook deployment docs](https://storybook.js.org/docs/sharing/publish-storybook)

### Marketplace Actions

- [actions/checkout](https://github.com/actions/checkout)
- [actions/setup-node](https://github.com/actions/setup-node)
- [actions/cache](https://github.com/actions/cache)
- [actions/upload-artifact](https://github.com/actions/upload-artifact)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

---

## Manutenção e Rotatividade

### Onboarding novos membros

1. **Leitura obrigatória**: Este documento + [README.md](../../README.md)
2. **Primeiro PR**: Observar CI rodando, entender feedback
3. **Rodar localmente**: Todos os comandos de CI para familiarização
4. **Revisar PR de Dependabot**: Praticar merge de dependency updates

### Handoff entre equipes

**Checklist de transferência**:
- ✅ Revisar todos os workflows e entender propósito
- ✅ Verificar que CI está estável (sem falhas recentes)
- ✅ Confirmar que Storybook está acessível
- ✅ Atualizar reviewers/assignees em `dependabot.yml`
- ✅ Compartilhar acesso a:
  - Vercel dashboard (environment variables)
  - GitHub repository (admin/maintain role)
  - Linha de comunicação para incidentes

### Quando modificar workflows

**Razões válidas**:
- ✅ Adicionar novo tipo de teste (visual regression, a11y, etc.)
- ✅ Otimizar tempo de execução (novos caches, paralelização)
- ✅ Adicionar novo ambiente de deploy (staging, QA)
- ✅ Integrar nova ferramenta (bundle analyzer, performance monitoring)

**Processo**:
1. Testar mudanças em branch separada
2. Observar execução completa em PR
3. Documentar mudanças neste arquivo
4. Fazer merge apenas se CI verde
5. Monitorar primeiras execuções em `main`

---

## Changelog

### 2026-02-10 - Implementação Inicial

**Criado por**: GitHub Copilot (TecnoJR)

**Workflows adicionados**:
- ✅ CI (lint, typecheck, test, build)
- ✅ E2E Tests (Playwright)
- ✅ Storybook Deploy (GitHub Pages)
- ✅ Dependabot (npm + GitHub Actions)

**Decisões técnicas**:
- Node.js 20.x LTS
- E2E apenas em `main` (economia de recursos)
- Coverage thresholds enforçados (85/85/80/85)
- Storybook em GitHub Pages (gratuito)
- Vercel para deploy production (integração nativa)

**Próximos passos**:
- [ ] Configurar GitHub Pages após primeiro merge
- [ ] Conectar repositório no Vercel
- [ ] Atualizar reviewers em dependabot.yml
- [ ] (Opcional) Adicionar Lighthouse CI
- [ ] (Opcional) Adicionar Chromatic para visual regression

---

**Última atualização**: 10 de fevereiro de 2026  
**Manutenção**: Time de Frontend TecnoJR  
**Dúvidas**: Abrir issue no repositório com label `ci/cd`
