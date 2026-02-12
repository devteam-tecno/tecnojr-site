import{j as n}from"./jsx-runtime-DVhjNUKw.js";import{useMDXComponents as l}from"./index-DgFQXQHp.js";import{Meta as r}from"@storybook/blocks";import"./iframe-CTDfU54N.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Documentation/Deployment"}),`
`,n.jsx(e.h1,{id:"deploy",children:"Deploy"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"📖 Documentação Completa"}),": ",n.jsx(e.a,{href:"../../docs/deployment/deployment-guide.md",children:"Deployment Guide"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"quick-start",children:"Quick Start"}),`
`,n.jsx(e.h3,{id:"build-para-produção",children:"Build para Produção"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Build Next.js
npm run build

# Preview local do build de produção
npm start

# Build Storybook
npm run docs:build
`})}),`
`,n.jsx(e.h3,{id:"environment-setup",children:"Environment Setup"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Copy environment template
cp .env.example .env.local

# Required environment variables
NEXT_PUBLIC_SITE_URL=https://tecnojr.com.br
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"deployment-platforms",children:"Deployment Platforms"}),`
`,n.jsx(e.h3,{id:"vercel-recommended",children:"Vercel (Recommended)"}),`
`,n.jsx(e.h4,{id:"automatic-deployment",children:"Automatic Deployment"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Connect Repository"})," to Vercel"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Go to ",n.jsx(e.a,{href:"https://vercel.com/new",rel:"nofollow",children:"vercel.com/new"})]}),`
`,n.jsx(e.li,{children:"Import your GitHub repository"}),`
`,n.jsx(e.li,{children:"Vercel auto-detects Next.js"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Configure Build Settings"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Framework Preset: Next.js"}),`
`,n.jsxs(e.li,{children:["Build Command: ",n.jsx(e.code,{children:"npm run build"})]}),`
`,n.jsxs(e.li,{children:["Output Directory: ",n.jsx(e.code,{children:".next"})]}),`
`,n.jsxs(e.li,{children:["Install Command: ",n.jsx(e.code,{children:"npm ci"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Environment Variables"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Add in Vercel Dashboard → Settings → Environment Variables"}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"NEXT_PUBLIC_SITE_URL"})}),`
`,n.jsx(e.li,{children:"Any API keys or secrets"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Deploy"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Every push to ",n.jsx(e.code,{children:"main"})," deploys to production"]}),`
`,n.jsx(e.li,{children:"Feature branches get preview deployments"}),`
`,n.jsx(e.li,{children:"Pull requests get automatic preview URLs"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"manual-deployment",children:"Manual Deployment"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
`})}),`
`,n.jsx(e.h4,{id:"custom-domain",children:"Custom Domain"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Go to Vercel Dashboard → Project → Settings → Domains"}),`
`,n.jsxs(e.li,{children:["Add custom domain: ",n.jsx(e.code,{children:"tecnojr.com.br"})]}),`
`,n.jsx(e.li,{children:"Configure DNS records as instructed"}),`
`,n.jsx(e.li,{children:"Enable automatic HTTPS"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"netlify",children:"Netlify"}),`
`,n.jsx(e.h4,{id:"automatic-deployment-1",children:"Automatic Deployment"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Connect Repository"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Go to ",n.jsx(e.a,{href:"https://app.netlify.com/start",rel:"nofollow",children:"app.netlify.com/start"})]}),`
`,n.jsx(e.li,{children:"Choose GitHub repository"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Build Settings"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Build command: ",n.jsx(e.code,{children:"npm run build"})]}),`
`,n.jsxs(e.li,{children:["Publish directory: ",n.jsx(e.code,{children:".next"})]}),`
`,n.jsxs(e.li,{children:["Node version: 20.x (in ",n.jsx(e.code,{children:"netlify.toml"}),")"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"netlify.toml Configuration"})}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-toml",children:`[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
`})}),`
`,n.jsx(e.h4,{id:"netlify-cli",children:"Netlify CLI"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"self-hosted-vpsdocker",children:"Self-Hosted (VPS/Docker)"}),`
`,n.jsx(e.h4,{id:"docker-deployment",children:"Docker Deployment"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-dockerfile",children:`# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Build Docker image
docker build -t tecnojr-website .

# Run container
docker run -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://tecnojr.com.br tecnojr-website
`})}),`
`,n.jsx(e.h4,{id:"docker-compose",children:"Docker Compose"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=https://tecnojr.com.br
      - NODE_ENV=production
    restart: unless-stopped
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Start services
docker-compose up -d

# View logs
docker-compose logs -f
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"storybook-deployment",children:"Storybook Deployment"}),`
`,n.jsx(e.h3,{id:"deploy-to-vercel-separate",children:"Deploy to Vercel (Separate)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Build Storybook
npm run docs:build

# Deploy storybook-static to Vercel
cd storybook-static
vercel --prod
`})}),`
`,n.jsx(e.h3,{id:"deploy-to-chromatic-visual-testing",children:"Deploy to Chromatic (Visual Testing)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Install Chromatic
npm install --save-dev chromatic

# Deploy and run visual tests
npx chromatic --project-token=<YOUR_PROJECT_TOKEN>
`})}),`
`,n.jsx(e.h4,{id:"chromatic-ci-integration",children:"Chromatic CI Integration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`# .github/workflows/chromatic.yml
name: Chromatic
on: push

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx chromatic --project-token=\${{ secrets.CHROMATIC_PROJECT_TOKEN }}
`})}),`
`,n.jsx(e.h3,{id:"storybook-on-github-pages",children:"Storybook on GitHub Pages"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Build Storybook
npm run docs:build

# Deploy to gh-pages branch
npx gh-pages -d storybook-static
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"cicd-pipelines",children:"CI/CD Pipelines"}),`
`,n.jsx(e.h3,{id:"github-actions",children:"GitHub Actions"}),`
`,n.jsx(e.h4,{id:"main-deployment-workflow",children:"Main Deployment Workflow"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm test
      - run: npm run test:e2e
      
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
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: build
          path: .next

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
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
`})}),`
`,n.jsx(e.h4,{id:"storybook-deployment-1",children:"Storybook Deployment"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`# .github/workflows/storybook.yml
name: Deploy Storybook

on:
  push:
    branches: [main]

jobs:
  deploy-storybook:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"build-optimization",children:"Build Optimization"}),`
`,n.jsx(e.h3,{id:"nextjs-configuration",children:"Next.js Configuration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Compression
  compress: true,
  
  // Bundle analyzer (development only)
  webpack: (config, { isServer }) => {
    if (!isServer && process.env.ANALYZE === "true") {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "./analyze.html",
        })
      );
    }
    return config;
  },
};

export default nextConfig;
`})}),`
`,n.jsx(e.h3,{id:"analyze-bundle-size",children:"Analyze Bundle Size"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Run with analyzer
ANALYZE=true npm run build

# View report at .next/analyze.html
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"performance-checklist",children:"Performance Checklist"}),`
`,n.jsx(e.h3,{id:"before-deployment",children:"Before Deployment"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] Run ",n.jsx(e.code,{children:"npm run build"})," successfully"]}),`
`,n.jsxs(e.li,{children:["[ ] Test production build locally with ",n.jsx(e.code,{children:"npm start"})]}),`
`,n.jsx(e.li,{children:"[ ] Check Lighthouse scores (>90 on all metrics)"}),`
`,n.jsx(e.li,{children:"[ ] Verify all images are optimized (Next.js Image)"}),`
`,n.jsx(e.li,{children:"[ ] Test on mobile devices (responsive design)"}),`
`,n.jsx(e.li,{children:"[ ] Check accessibility (WCAG 2.1 AA)"}),`
`,n.jsx(e.li,{children:"[ ] Verify all links work (no 404s)"}),`
`,n.jsx(e.li,{children:"[ ] Test forms (contact, budget request)"}),`
`,n.jsx(e.li,{children:"[ ] Check meta tags and SEO"}),`
`,n.jsx(e.li,{children:"[ ] Verify environment variables are set"}),`
`]}),`
`,n.jsx(e.h3,{id:"post-deployment",children:"Post-Deployment"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"[ ] Monitor real user metrics (Core Web Vitals)"}),`
`,n.jsx(e.li,{children:"[ ] Set up error tracking (Sentry)"}),`
`,n.jsx(e.li,{children:"[ ] Configure analytics (Google Analytics, Plausible)"}),`
`,n.jsx(e.li,{children:"[ ] Set up uptime monitoring"}),`
`,n.jsx(e.li,{children:"[ ] Create backups strategy"}),`
`,n.jsx(e.li,{children:"[ ] Document deployment process"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"monitoring--analytics",children:"Monitoring & Analytics"}),`
`,n.jsx(e.h3,{id:"error-tracking-with-sentry",children:"Error Tracking with Sentry"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Install Sentry
npm install @sentry/nextjs

# Initialize
npx @sentry/wizard@latest -i nextjs
`})}),`
`,n.jsx(e.h3,{id:"analytics",children:"Analytics"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";

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
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"rollback-strategy",children:"Rollback Strategy"}),`
`,n.jsx(e.h3,{id:"vercel-rollback",children:"Vercel Rollback"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# List recent deployments
vercel ls

# Rollback to specific deployment
vercel rollback <deployment-url>
`})}),`
`,n.jsx(e.h3,{id:"manual-rollback",children:"Manual Rollback"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Revert to previous commit
git revert HEAD

# Force push (use with caution)
git push origin main

# Or create rollback PR
git revert <commit-hash>
git push origin rollback-branch
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://nextjs.org/docs/app/building-your-application/deploying",rel:"nofollow",children:"Next.js Deployment Docs"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://vercel.com/docs",rel:"nofollow",children:"Vercel Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://storybook.js.org/docs/sharing/publish-storybook",rel:"nofollow",children:"Storybook Deployment"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.chromatic.com/",rel:"nofollow",children:"Chromatic"})," - Visual testing & review"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Deployment Philosophy"}),": Automate everything, test thoroughly, monitor continuously. Every deployment should be safe, fast, and reversible."]})]})}function h(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{h as default};
