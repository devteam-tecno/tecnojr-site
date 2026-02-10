# GitHub Copilot Instructions - TecnoJR Site

## Project Overview

**Project**: TecnoJR Next.js Website  
**Stack**: Next.js 16.1.6 + React 19.2.3 + TypeScript + Tailwind CSS v4  
**Architecture**: App Router, Server Components by default  
**Design System**: OKLCH color space, gradient-based, glassmorphism aesthetic

---

## Code Patterns & Conventions

### File Naming
- **Components**: kebab-case files (e.g., `button.tsx`, `hero-section.tsx`)
- **Tests**: Co-located with `.test.tsx` or `.spec.ts` suffix
- **Lib/Utils**: kebab-case (e.g., `animations.ts`, `utils.ts`)

### Component Patterns
```tsx
// ❌ DON'T: Mark everything as client component
'use client';
export default function Page() { ... }

// ✅ DO: Server component by default, client only when needed
export default function Page() {
  // Use dynamic imports for client components
  return <ClientComponent />;
}

// ✅ DO: Mark client components explicitly
'use client';
export function InteractiveButton() {
  const [state, setState] = useState();
  return <button onClick={...} />;
}
```

### Import Conventions
```tsx
// ✅ ALWAYS use path alias
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { fadeVariants } from '@/lib/animations';

// ❌ NEVER use relative imports for src/ files
import { Button } from '../../components/ui/button';
```

### Styling Approach
```tsx
// ✅ DO: Use Tailwind + cn() utility
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes here',
  condition && 'conditional-classes',
  className // Allow prop overrides
)} />

// ✅ DO: Use style utility functions
import { getCardBackgroundClass } from '@/lib/styles';
<div className={getCardBackgroundClass({ blur: 'xl' })} />

// ❌ DON'T: Use inline styles or CSS-in-JS
<div style={{ backgroundColor: 'purple' }} />
```

---

## Design System

### Color System (OKLCH)
```tsx
// Primary color scales (50-950 shades)
- tecno-purple-* → Primary brand color (#9155EB at 500)
- tecno-blue-* → Secondary brand color (#4A90E2 at 500)
- tecno-black-* → Grayscale from white (50) to black (950)

// Usage
className="bg-tecno-purple-500 text-tecno-black-100"
className="border-tecno-blue-400/20" // With opacity
```

### Gradient System
```tsx
import { getGradientClass } from '@/lib/styles';

// Available gradients
getGradientClass('diagonal')  // Purple-to-blue diagonal
getGradientClass('animated')  // Animated gradient (CTAs)
getGradientClass('primary')   // Primary brand gradient
getGradientClass('text')      // Text gradient

// CSS utility classes
className="gradient-tecno-primary"
className="gradient-tecno-animated"
className="text-gradient-tecno"
```

### Button System (8 Variants)
```tsx
import { Button } from '@/components/ui/button';

// When to use each variant:
<Button variant="gradient-primary">      {/* Primary CTAs */}
<Button variant="gradient-whatsapp">     {/* WhatsApp links only */}
<Button variant="gradient-secondary">    {/* Secondary actions */}
<Button variant="outline-gradient">      {/* Filters, tabs, navigation */}
<Button variant="ghost-gradient">        {/* Subtle secondary actions */}
<Button variant="default">               {/* Standard button */}
<Button variant="outline">               {/* Outlined button */}
<Button variant="ghost">                 {/* Ghost button */}

// Sizes: sm, default, lg, xl
<Button size="xl">Large CTA</Button>

// See: BUTTON_SYSTEM.md for complete documentation
```

### Card Components
```tsx
import { BaseCard } from '@/components/ui/base-card';
import { FeatureCard } from '@/components/ui/feature-card';
import { ServiceCard } from '@/components/ui/service-card';
import { ProjectCard } from '@/components/ui/project-card';

// BaseCard is the abstraction - use specific cards when possible
<FeatureCard icon={RocketIcon} title="Fast" description="..." />
<ServiceCard icon={CodeIcon} title="Development" description="..." />
<ProjectCard project={projectData} />

// Custom card styling
import { getCardBackgroundClass, getGlowEffectClass } from '@/lib/styles';
<div className={getCardBackgroundClass({ hoverScale: true, blur: 'xl' })} />
```

---

## Data Management

### Single Source of Truth Pattern
```tsx
// ❌ DON'T: Hardcode navigation links
<Link href="/sobre">Sobre</Link>
<Link href="/projetos">Projetos</Link>

// ✅ DO: Use centralized nav config
import { navigationLinks } from '@/lib/navigation';
{navigationLinks.map(link => (
  <Link key={link.url} href={link.url}>{link.text}</Link>
))}
```

### Data Location
All static data lives in `src/lib/`:
- **projects.ts**: External & internal projects
- **services.ts**: Service offerings 
- **features.ts**: Company features/differentiators
- **members.ts**: Team members (20+ entries)
- **navigation.ts**: Navigation links (single source of truth)

### Data Usage Pattern
```tsx
import { externalProjects, getProjectByTitle } from '@/lib/projects';
import { services, getServiceByTitle } from '@/lib/services';
import { features } from '@/lib/features';

// Use helper functions
const project = getProjectByTitle('NASA Space Terra');
const service = getServiceByTitle('Web Development');

// Map over arrays
{services.map((service) => (
  <ServiceCard key={service.title} {...service} />
))}
```

---

## Animation System

### Framer Motion Patterns
```tsx
import { motion } from 'framer-motion';
import { fadeVariants, createFadeUp, createViewport } from '@/lib/animations';

// ✅ DO: Use centralized animation configs
<motion.div
  initial={fadeVariants.fadeUp.initial}
  animate={fadeVariants.fadeUp.animate}
  transition={fadeVariants.fadeUp.transition}
/>

// ✅ DO: Use helper functions
<motion.div {...createFadeUp(0.2)} />

// ✅ DO: Use whileInView for scroll animations
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={createViewport({ once: true })}
  variants={fadeVariants}
/>

// Staggered lists
{items.map((item, i) => (
  <motion.div key={i} {...createStaggeredFadeUp(i)}>
    {item}
  </motion.div>
))}

// ❌ DON'T: Inline animation configs (inconsistent)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>
```

### Available Animation Constants
```tsx
import { DURATIONS, DELAYS, TRANSITIONS } from '@/lib/animations';

DURATIONS.fast      // 0.3s
DURATIONS.standard  // 0.8s
DURATIONS.slow      // 1.2s
DURATIONS.infinite  // 15s

DELAYS.short   // 0.1s
DELAYS.medium  // 0.2s
DELAYS.long    // 0.5s

TRANSITIONS.standard
TRANSITIONS.spring
TRANSITIONS.springBouncy
```

---

## Testing Requirements

### Test Co-location
```tsx
// ✅ DO: Tests next to components
src/components/ui/
  button.tsx
  button.test.tsx    // Co-located test
  
src/lib/
  utils.ts
  utils.test.ts      // Co-located test
```

### Testing Patterns
```tsx
import { render, screen, userEvent } from '@/tests/test-utils';

// ✅ DO: Behavioral testing (what user experiences)
it('calls onClick when clicked', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  await userEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// ❌ DON'T: Implementation testing
it('has clicked state', () => {
  expect(component.state.clicked).toBe(true);
});
```

### Coverage Goals (Informational, Not Enforced)
- **Lines**: 85% (goal)
- **Functions**: 85% (goal)
- **Branches**: 80% (goal)
- **Statements**: 85% (goal)

**Note**: Coverage is reported but does not block CI. Aim to maintain high coverage for code quality.

### E2E Tests
Use Playwright for critical user flows:
```bash
npm run test:e2e       # Run E2E tests
npm run test:e2e:ui    # Interactive mode
```

---

##Code Quality

### TypeScript Strict Mode
```tsx
// ✅ DO: Proper typing
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

// ❌ NEVER use any
const handleClick = (data: any) => { ... }

// ✅ DO: Use unknown and type guard
const handleClick = (data: unknown) => {
  if (typeof data === 'string') { ... }
}
```

### Linting & Formatting
- **Tool**: Biome (replaces ESLint + Prettier)
- **Pre-commit**: Automatic formatting via Husky + lint-staged
- **Commands**:
  ```bash
  npm run lint      # Check for issues
  npm run lint:fix  # Auto-fix issues
  npm run format    # Format code
  npm run fix       # Lint + format together
  ```

### Commit Conventions
```bash
# ✅ DO: Use conventional commits
feat: add storybook configuration
fix: resolve button hover state
docs: update API documentation
refactor: consolidate card components
test: add tests for animations utility
chore: update dependencies

# ❌ DON'T: Generic messages
git commit -m "updates"
git commit -m "fix bug"
```

---

## Common Tasks

### Create New Component
1. Create file in appropriate directory:
   - UI components → `src/components/ui/`
   - Sections → `src/components/sections/`
   - Layout → `src/components/layout/`
   - Animated → `src/components/animated/`

2. Add JSDoc documentation with examples

3. Create co-located test file

4. Create Storybook story (for UI components)

5. Export from component (no barrel exports!)

**Example**:
```tsx
// src/components/ui/my-component.tsx
/**
 * MyComponent description here.
 * 
 * @param prop1 - Description
 * @returns Rendered component
 * 
 * @example
 * ```tsx
 * <MyComponent prop1="value" />
 * ```
 */
export function MyComponent({ prop1 }: MyComponentProps) {
  return <div />;
}

// src/components/ui/my-component.test.tsx
import { render, screen } from '@/tests/test-utils';
import { MyComponent } from './my-component';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent prop1="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});

// src/components/ui/my-component.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MyComponent } from './my-component';

const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    prop1: 'value',
  },
};
```

### Create New Page
```tsx
// src/app/my-page/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | TecnoJR',
  description: 'Page description',
};

// ✅ Server component by default
export default function MyPage() {
  // Fetch data directly (server component)
  const data = await fetch(...);
 
  return (
    <main>
      {/* Use client components only where needed */}
      <InteractiveSection />
    </main>
  );
}
```

### Add New Style Utility
```tsx
// Check src/lib/styles.ts first - might already exist!

// If creating new utility:
import { cn } from '@/lib/utils';

/**
 * Returns [utility description]
 * 
 * @param options - Configuration options
 * @returns Class string
 * 
 * @example
 * ```tsx
 * <div className={getMyUtility({ option: true })} />
 * ```
 */
export function getMyUtility(options = {}) {
  return cn(
    'base-classes',
    options.condition && 'conditional-classes'
  );
}
```

### Add New Animation
```tsx
// Check src/lib/animations.ts first!

// If creating new animation:
export const myAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: TRANSITIONS.spring,
} as const;
```

---

## DON'Ts (Common Mistakes)

### ❌ Type System
- Never use `any` type
- Don't disable TypeScript strict checks
- Don't use `@ts-ignore` without explanation

### ❌ Component Structure  
- Don't mark everything as `'use client'` - server first!
- Don't create barrel exports (`index.ts` re-exporting)
- Don't use CSS-in-JS - use Tailwind utilities
- Don't hardcode values that exist in lib/ modules

### ❌ Styling
- Don't use inline `style={{}}` attributes
- Don't duplicate className patterns - check `lib/styles.ts`
- Don't use arbitrary color values - use design tokens
- Don't ignore the existing gradient system

### ❌ Navigation & Routing
- Don't hardcode navigation links - use `lib/navigation.ts`
- Don't create new routes without updating navigation.ts
- Don't forget metadata on page components

### ❌ Animation
- Don't create inline animation configs - use `lib/animations.ts`
- Don't use different duration values - use `DURATIONS` constants
- Don't forget `viewport={{ once: true }}` on scroll animations

### ❌ Data
- Don't duplicate data arrays - use lib/ modules
- Don't fetch data in client components - use server components
- Don't create utility functions that already exist in lib/

---

## Important Files Reference

- **README.md** - Setup instructions, scripts, architecture overview
- **STYLE_GUIDE.md** - Complete design system (700 lines, OKLCH colors, gradients)
- **BUTTON_SYSTEM.md** - Button variant documentation (8 variants)
- **TESTING.md** - Testing patterns, best practices, coverage
- **LIB_DIRECTORY.md** - Data structure and utility organization
- **Storybook** - Component catalog at `http://localhost:6006` (run `npm run storybook`)

---

## Scripts Quick Reference

```bash
# Development
npm run dev          # Start Next.js dev server
npm run storybook    # Start Storybook (component docs)

# Quality Checks
npm run lint         # Run Biome linter
npm run typecheck    # Run TypeScript check
npm run check        # Run both lint + typecheck
npm run fix          # Auto-fix lint issues + format

# Testing
npm run test         # Run Vitest (watch mode)
npm run test:run     # Run tests once
npm run test:coverage  # Coverage report
npm run test:e2e     # Playwright E2E tests

# Documentation
npm run docs         # Start Storybook
npm run docs:build   # Build static Storybook
npm run docs:test    # Test Storybook stories

# Build
npm run build        # Production build
npm run start        # Start production server
```

---

## Context for AI

When generating code for this project:

1. **Assume TypeScript strict mode** - all suggestions must be fully typed
2. **Server components by default** - only add 'use client' when absolutely necessary
3. **Check existing utilities** - many patterns already exist in lib/
4. **Use design system** - don't create arbitrary colors/styles
5. **Follow test patterns** - maintain 85%+ coverage
6. **Maintain consistency** - match existing code patterns
7. **Document with JSDoc** - all public APIs need documentation
8. **Think mobile-first** - responsive design is critical

---

**Last Updated**: February 6, 2026  
**For Questions**: See README.md or project documentation
