import{j as e}from"./jsx-runtime-DVhjNUKw.js";import{useMDXComponents as i}from"./index-DgFQXQHp.js";import{Meta as r}from"@storybook/blocks";import"./iframe-CTDfU54N.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Testing"}),`
`,e.jsx(n.h1,{id:"testes",children:"Testes"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"📖 Documentação Completa"}),": ",e.jsx(n.a,{href:"../../docs/development/testing.md",children:"Testing Guide"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"stack-de-testes",children:"Stack de Testes"}),`
`,e.jsx(n.h3,{id:"vitest-unit--integration",children:"Vitest (Unit & Integration)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Testes co-localizados com componentes (",e.jsx(n.code,{children:"*.test.tsx"}),")"]}),`
`,e.jsx(n.li,{children:"Coverage mínimo: 85%"}),`
`,e.jsxs(n.li,{children:["Comando: ",e.jsx(n.code,{children:"npm test"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"playwright-e2e",children:"Playwright (E2E)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Testes em ",e.jsx(n.code,{children:"e2e/"})," directory"]}),`
`,e.jsx(n.li,{children:"Cross-browser (Chromium, Firefox, WebKit)"}),`
`,e.jsxs(n.li,{children:["Comando: ",e.jsx(n.code,{children:"npm run test:e2e"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"storybook-visual",children:"Storybook (Visual)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Interaction tests com addon-interactions"}),`
`,e.jsxs(n.li,{children:["Comando: ",e.jsx(n.code,{children:"npm run storybook"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"test-organization",children:"Test Organization"}),`
`,e.jsx(n.h3,{id:"unit-tests",children:"Unit Tests"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// src/components/ui/button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies gradient-primary variant", () => {
    render(<Button variant="gradient-primary">Submit</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("gradient-primary");
  });
});
`})}),`
`,e.jsx(n.h3,{id:"integration-tests",children:"Integration Tests"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// src/components/sections/features-section.test.tsx
import { render, screen } from "@testing-library/react";
import { FeaturesSection } from "./features-section";

describe("FeaturesSection", () => {
  it("renders all features from lib/features", () => {
    render(<FeaturesSection />);
    expect(screen.getByText("Inovação")).toBeInTheDocument();
    expect(screen.getByText("Qualidade")).toBeInTheDocument();
    // ... test all features
  });

  it("animates cards on scroll", async () => {
    // Test IntersectionObserver triggers
  });
});
`})}),`
`,e.jsx(n.h3,{id:"e2e-tests",children:"E2E Tests"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// tests/navigation.spec.ts
import { test, expect } from "@playwright/test";

test("homepage navigation works", async ({ page }) => {
  await page.goto("/");
  
  // Test header navigation
  await page.click('a[href="#services"]');
  await expect(page).toHaveURL("/#services");
  
  // Test mobile menu
  await page.setViewportSize({ width: 375, height: 667 });
  await page.click('[aria-label="Open menu"]');
  await expect(page.getByRole("navigation")).toBeVisible();
});
`})}),`
`,e.jsx(n.h2,{id:"coverage-requirements",children:"Coverage Requirements"}),`
`,e.jsx(n.h3,{id:"minimum-thresholds-vitestconfigts",children:"Minimum Thresholds (vitest.config.ts)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`coverage: {
  provider: "v8",
  reporter: ["text", "json", "html"],
  thresholds: {
    statements: 85,
    branches: 85,
    functions: 85,
    lines: 85,
  },
}
`})}),`
`,e.jsx(n.h3,{id:"current-coverage",children:"Current Coverage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"UI Components: ~90% coverage"}),`
`,e.jsx(n.li,{children:"Utility Functions: ~95% coverage"}),`
`,e.jsx(n.li,{children:"Section Components: ~80% coverage"}),`
`,e.jsx(n.li,{children:"Layout Components: ~75% coverage"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Goal"}),": Maintain >85% across all categories"]}),`
`,e.jsx(n.h2,{id:"testing-patterns",children:"Testing Patterns"}),`
`,e.jsx(n.h3,{id:"1-arrange-act-assert-aaa",children:"1. Arrange-Act-Assert (AAA)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`it("opens mobile menu on button click", async () => {
  // Arrange
  const { getByLabelText } = render(<Header />);
  
  // Act
  await userEvent.click(getByLabelText("Open menu"));
  
  // Assert
  expect(screen.getByRole("navigation")).toBeVisible();
});
`})}),`
`,e.jsx(n.h3,{id:"2-test-user-behavior-not-implementation",children:"2. Test User Behavior, Not Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ❌ Bad: Testing implementation details
it("sets mobileMenuOpen state to true", () => {
  const { result } = renderHook(() => useState(false));
  act(() => result.current[1](true));
  expect(result.current[0]).toBe(true);
});

// ✅ Good: Testing user-visible behavior
it("shows mobile navigation when menu button clicked", async () => {
  render(<Header />);
  await userEvent.click(screen.getByLabelText("Open menu"));
  expect(screen.getByText("Sobre")).toBeVisible();
});
`})}),`
`,e.jsx(n.h3,{id:"3-test-accessibility",children:"3. Test Accessibility"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

it("has no accessibility violations", async () => {
  const { container } = render(<Button>Click</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
`})}),`
`,e.jsx(n.h3,{id:"4-mock-external-dependencies",children:"4. Mock External Dependencies"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { vi } from "vitest";

// Mock Next.js router
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
  }),
}));

// Mock Framer Motion for performance
vi.mock("framer-motion", () => ({
  motion: {
    div: "div",
    span: "span",
  },
}));
`})}),`
`,e.jsx(n.h2,{id:"test-commands",children:"Test Commands"}),`
`,e.jsx(n.h3,{id:"development",children:"Development"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test button.test.tsx

# Run tests with coverage
npm run test:coverage
`})}),`
`,e.jsx(n.h3,{id:"cicd",children:"CI/CD"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Run all tests (unit + integration)
npm test

# Run E2E tests
npm run test:e2e

# Run E2E on specific browser
npm run test:e2e -- --project=chromium
`})}),`
`,e.jsx(n.h3,{id:"storybook-tests",children:"Storybook Tests"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Run Storybook interaction tests
npm run docs:test

# Build and test Storybook
npm run docs:build
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"-dos",children:"✅ Do's"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Write tests for new features before implementation (TDD when possible)"}),`
`,e.jsx(n.li,{children:"Test critical user paths thoroughly (navigation, forms, CTAs)"}),`
`,e.jsx(n.li,{children:"Keep tests simple and readable"}),`
`,e.jsxs(n.li,{children:["Use descriptive test names (",e.jsx(n.code,{children:'it("does X when Y")'}),")"]}),`
`,e.jsx(n.li,{children:"Mock external APIs and services"}),`
`,e.jsx(n.li,{children:"Test edge cases and error states"}),`
`,e.jsx(n.li,{children:"Use data-testid sparingly (prefer accessible queries)"}),`
`]}),`
`,e.jsx(n.h3,{id:"-donts",children:"❌ Don'ts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Don't test implementation details (state, props passing)"}),`
`,e.jsx(n.li,{children:"Don't test third-party library internals"}),`
`,e.jsx(n.li,{children:"Don't write tests that depend on previous tests"}),`
`,e.jsx(n.li,{children:"Don't mock everything (test real integrations when safe)"}),`
`,e.jsx(n.li,{children:"Don't ignore failing tests (fix or remove)"}),`
`,e.jsx(n.li,{children:"Don't test styles directly (use visual regression instead)"}),`
`]}),`
`,e.jsx(n.h2,{id:"continuous-integration",children:"Continuous Integration"}),`
`,e.jsx(n.h3,{id:"github-actions-workflow",children:"GitHub Actions Workflow"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`name: Test
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npm run test:e2e
`})}),`
`,e.jsx(n.h2,{id:"debugging-tests",children:"Debugging Tests"}),`
`,e.jsx(n.h3,{id:"vscode-debug-config",children:"VSCode Debug Config"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "type": "node",
  "request": "launch",
  "name": "Debug Vitest Tests",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run", "test"],
  "console": "integratedTerminal"
}
`})}),`
`,e.jsx(n.h3,{id:"playwright-debug",children:"Playwright Debug"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Run in debug mode with browser
npm run test:e2e -- --debug

# Run specific test in headed mode
npm run test:e2e tests/navigation.spec.ts -- --headed
`})}),`
`,e.jsx(n.h2,{id:"resources",children:"Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/?path=/docs/documentation-testing--docs",children:"TESTING.md"})," - Full testing documentation (500+ lines)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://vitest.dev/",rel:"nofollow",children:"Vitest Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://playwright.dev/",rel:"nofollow",children:"Playwright Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro/",rel:"nofollow",children:"Testing Library"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/nickcolley/jest-axe",rel:"nofollow",children:"Jest Axe"})," - Accessibility testing"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing Philosophy"}),": Tests should give confidence that the application works correctly for users, not just that the code executes without errors."]})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};
