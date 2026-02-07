# TecnoJR Website

[![Tests](https://github.com/YOUR_ORG/tecnojr-site/actions/workflows/test.yml/badge.svg)](https://github.com/YOUR_ORG/tecnojr-site/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/YOUR_ORG/tecnojr-site/branch/main/graph/badge.svg)](https://codecov.io/gh/YOUR_ORG/tecnojr-site)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Modern, responsive website for TecnoJR built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email**: [Resend](https://resend.com/)
- **Linting**: [Biome](https://biomejs.dev/)
- **Testing**: [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/), [Playwright](https://playwright.dev/)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ORG/tecnojr-site.git
cd tecnojr-site/tecnojr-site

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values
```

## � Documentation

Comprehensive documentation for developers working on the TecnoJR website:

### Interactive Component Documentation
- **[Storybook](http://localhost:6006)**: Visual component library with live examples
  ```bash
  npm run storybook  # Start Storybook on port 6006
  ```

### Design System
- **[Style Guide](./docs/development/style-guide.md)**: Complete design system documentation
  - OKLCH color system (tecno-purple, tecno-blue, tecno-black)
  - Gradient utilities and applications
  - Component styling patterns
  - Tailwind CSS v4 conventions

- **[Button System](./docs/development/button-system.md)**: Button component deep dive
  - 8 variants (gradient-primary, gradient-whatsapp, outline-gradient, etc.)
  - Size specifications
  - Usage guidelines and examples

### Development Guides
- **[Testing Guide](./docs/development/testing.md)**: Testing strategy and patterns
  - Unit testing with Vitest
  - E2E testing with Playwright
  - Coverage requirements
  - Best practices

- **[Library Directory](./docs/development/lib-directory.md)**: Lib folder organization
  - Data modules (projects, services, features, members)
  - Utility functions (styles, animations, utils)
  - Type definitions

### AI Assistant Context
- **[.github/copilot-instructions.md](./.github/copilot-instructions.md)**: GitHub Copilot instructions
  - Code patterns and conventions
  - Design system usage
  - Common tasks and examples
  - Do's and don'ts

### Architecture
- **App Router**: Next.js 16 with React Server Components
- **Server-first**: Components are server-rendered by default
- **Dynamic imports**: Client components loaded only when needed
- **API Routes**: RESTful endpoints in `src/app/api/`

## �🛠️ Development

```bash
# Start development server
npm run dev

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npm run typecheck

# Format code
npm run format

# Run all checks (lint + typecheck)
npm run check
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🧪 Testing

### Unit & Integration Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

**Coverage Thresholds**: 
- Lines: 85%
- Functions: 85%
- Branches: 80%
- Statements: 85%

### E2E Tests

```bash
# Run E2E tests (headless)
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in headed mode
npm run test:e2e:headed

# Debug E2E tests
npm run test:e2e:debug
```

### Test Structure

```
tecnojr-site/
├── e2e/                    # Playwright E2E tests
│   ├── home.spec.ts
│   ├── navigation.spec.ts
│   ├── projects.spec.ts
│   └── contact.spec.ts
├── src/
│   ├── lib/
│   │   ├── utils.ts
│   │   └── utils.test.ts   # Co-located unit tests
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── button.test.tsx
│   └── app/
│       └── api/
│           └── contact/
│               ├── route.ts
│               └── route.test.ts
└── tests/
    ├── setup.ts            # Global test setup
    ├── test-utils.tsx      # Custom render utilities
    └── mocks/              # Shared mocks
```

See [TESTING.md](./TESTING.md) for detailed testing documentation.

## 📁 Project Structure

```
tecnojr-site/
├── public/                 # Static assets
│   └── assets/            # Images, icons, logos
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/          # API routes
│   ├── components/        # React components
│   │   ├── animated/     # Animation components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI components
│   ├── lib/              # Utilities & constants
│   │   ├── animations.ts
│   │   ├── constants.ts
│   │   ├── features.ts
│   │   ├── icons.ts
│   │   ├── members.ts
│   │   ├── metadata.ts
│   │   ├── navigation.ts
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── styles.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   └── assets/           # Source assets
├── e2e/                  # E2E tests
├── tests/                # Test utilities
└── docs/                 # Documentation
    ├── TESTING.md
    ├── STYLE_GUIDE.md
    ├── BUTTON_SYSTEM.md
    └── LIB_DIRECTORY.md
```

## 🏗️ Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

The build generates:
- Optimized static pages
- Server-rendered pages
- API routes
- Static assets

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_ORG/tecnojr-site)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to `main`

### Manual Deployment

1. Build the application: `npm run build`
2. Set up environment variables
3. Deploy the `.next` directory

## 🔑 Environment Variables

```bash
# Email (Resend)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@tecnojr.com.br
EMAIL_TO=contact@tecnojr.com.br

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 Scripts Reference

| Script | Description |
|--------|-------------|
| `dev` | Start development server |
| `build` | Create production build |
| `start` | Start production server |
| `lint` | Run Biome linter |
| `lint:fix` | Fix linting issues |
| `format` | Format code with Biome |
| `typecheck` | Run TypeScript type checking |
| `check` | Run typecheck + lint |
| `test` | Run unit tests (watch mode) |
| `test:run` | Run unit tests once |
| `test:ui` | Run unit tests with UI |
| `test:coverage` | Generate coverage report |
| `test:e2e` | Run E2E tests |
| `test:e2e:ui` | Run E2E tests with UI |
| `test:e2e:headed` | Run E2E tests in headed mode |
| `test:e2e:debug` | Debug E2E tests |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### PR Checklist

- [ ] Tests pass (`npm run test:run`)
- [ ] E2E tests pass (`npm run test:e2e`)
- [ ] Linting passes (`npm run lint`)
- [ ] Type checking passes (`npm run typecheck`)
- [ ] Build succeeds (`npm run build`)
- [ ] Coverage maintained above 85%
- [ ] Documentation updated

## 📚 Documentation

- [Documentation Index](./docs/README.md) - Full documentation index
- [Testing Guide](./docs/development/testing.md) - Complete testing documentation
- [Style Guide](./docs/development/style-guide.md) - Code style and conventions
- [Button System](./docs/development/button-system.md) - Button component documentation
- [Lib Directory](./docs/development/lib-directory.md) - Utilities reference

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details

## 👥 Team

Built with ❤️ by [TecnoJR](https://tecnojr.com.br)

---

**Need help?** Contact us at contato@tecnojr.com.br
