# TecnoJR - Style Guide

> Modern, Tailwind V4-based design system with OKLCH colors, semantic tokens, and reusable gradient utilities.

**Last Updated:** February 5, 2026  
**Tailwind Version:** v4.x  
**Color Space:** OKLCH

---

## Table of Contents

1. [Color System](#color-system)
2. [Gradient System](#gradient-system)
3. [Component Patterns](#component-patterns)
4. [Utility Composition](#utility-composition)
5. [Best Practices](#best-practices)
6. [Migration Guide](#migration-guide)

---

## Color System

### Overview

TecnoJR uses a modern color system built on **OKLCH** (Oklab Lightness Chroma Hue) color space for superior perceptual uniformity and wide-gamut display support. All brand colors are defined using Tailwind V4's `@theme` directive and available as utility classes.

### Why OKLCH?

- **Perceptual Uniformity:** Equal numerical changes result in equal perceptual changes
- **Wide-Gamut Support:** Future-proof for modern displays
- **Better Interpolation:** Smoother gradients and color transitions
- **Consistency:** Matches shadcn/ui's design system architecture

### Brand Color Scales

#### Tecno Purple (Primary Brand Color)

Base color: `#9155EB` → `oklch(0.6 0.26 295)` at the 500 level

```tsx
// Usage examples
<div className="bg-tecno-purple-500">    {/* Base purple */}
<div className="text-tecno-purple-400">   {/* Lighter purple */}
<div className="border-tecno-purple-600"> {/* Darker purple */}
```

**Complete Scale:**

- `50`: Very light purple (backgrounds, subtle accents)
- `100-200`: Light shades (hover states, secondary backgrounds)
- `300-400`: Medium light (buttons, badges, lighter accents)
- `500`: **Base brand purple** (#9155EB equivalent)
- `600-700`: Dark shades (hover states for primary elements)
- `800-900`: Very dark (text on light backgrounds, strong borders)
- `950`: Nearly black purple (deep shadows, very dark text)

#### Tecno Blue (Secondary Brand Color)

Base color: `#4275F9` → `oklch(0.6 0.23 260)` at the 500 level

```tsx
// Usage examples
<div className="bg-tecno-blue-500">    {/* Base blue */}
<div className="text-tecno-blue-300">   {/* Lighter blue */}
<div className="border-tecno-blue-700"> {/* Darker blue */}
```

**Complete Scale:** Same structure as purple (50-950)

#### Tecno Black (Dark Brand Color)

Base color: `#232323` → `oklch(0.15 0 0)` at the 800 level

```tsx
// Usage examples
<div className="bg-tecno-black-800">  {/* Base dark background */}
<div className="bg-tecno-black-900">  {/* Darker background */}
<div className="text-tecno-black-200"> {/* Light text on dark */}
```

**Complete Scale:** Neutral grayscale from near-white (50) to near-black (950)

### Semantic Color Tokens

Use semantic tokens for consistent theming and easy rebranding:

```tsx
// ✅ PREFERRED - Semantic tokens
<div className="bg-brand-primary">           {/* tecno-purple-500 */}
<div className="bg-brand-primary-hover">     {/* tecno-purple-600 */}
<div className="bg-brand-primary-light">     {/* tecno-purple-400 */}

<div className="bg-brand-secondary">         {/* tecno-blue-500 */}
<div className="bg-brand-secondary-hover">   {/* tecno-blue-600 */}
<div className="bg-brand-secondary-light">   {/* tecno-blue-400 */}

<div className="bg-brand-accent">            {/* tecno-purple-400 */}
<div className="bg-brand-dark">              {/* tecno-black-800 */}

// ⚠️ ACCEPTABLE - Direct color references
<div className="bg-tecno-purple-500">
<div className="bg-tecno-blue-600">

// ❌ AVOID - Hardcoded hex values
<div className="bg-[#9155eb]">
<div style={{ backgroundColor: '#4275f9' }}>
```

### Color Usage Guidelines

| Use Case               | Recommended Token     | Alternative           |
| ---------------------- | --------------------- | --------------------- |
| Primary CTAs           | `brand-primary`       | `tecno-purple-500`    |
| Secondary CTAs         | `brand-secondary`     | `tecno-blue-500`      |
| Hover states (primary) | `brand-primary-hover` | `tecno-purple-600`    |
| Accents & highlights   | `brand-accent`        | `tecno-purple-400`    |
| Dark backgrounds       | `brand-dark`          | `tecno-black-800`     |
| Borders (subtle)       | `brand-primary/20`    | `tecno-purple-500/20` |

### Opacity Modifiers

Tailwind V4 supports opacity modifiers using `/` syntax:

```tsx
<div className="bg-brand-primary/10">    {/* 10% opacity */}
<div className="border-tecno-blue-500/25"> {/* 25% opacity */}
<div className="text-brand-accent/80">     {/* 80% opacity */}
```

Common opacity values:

- `/5` or `/10`: Very subtle backgrounds, hover overlays
- `/20` or `/25`: Borders, dividers, subtle accents
- `/40` or `/50`: Moderate overlays, secondary backgrounds
- `/80` or `/90`: Near-opaque, strong presence

---

## Gradient System

### Overview

TecnoJR provides reusable gradient utility classes for consistent visual effects across the application. All gradients use semantic color tokens for easy theming.

### Primary Gradients

#### `.gradient-tecno-primary`

**Purple → Blue (horizontal, 90deg)**

```tsx
<div className="gradient-tecno-primary">
  {/* Smooth purple to blue gradient */}
</div>
```

**Use for:**

- Primary CTA buttons
- Feature cards
- Hero section backgrounds
- Major UI accents

#### `.gradient-tecno-secondary`

**Blue → Purple (horizontal, 90deg)**

```tsx
<div className="gradient-tecno-secondary">
  {/* Smooth blue to purple gradient (reversed) */}
</div>
```

**Use for:**

- Secondary CTAs
- Alternate card designs
- Tab active states

#### `.gradient-tecno-diagonal`

**Purple → Blue (diagonal, 135deg)**

```tsx
<div className="gradient-tecno-diagonal">
  {/* Diagonal gradient for visual interest */}
</div>
```

**Use for:**

- Icon containers
- Circular badges
- Dynamic backgrounds

#### `.gradient-tecno-vertical`

**Purple → Blue (vertical, 180deg)**

```tsx
<div className="gradient-tecno-vertical">{/* Top to bottom gradient */}</div>
```

**Use for:**

- Scroll indicators
- Vertical progress bars
- Sidebar accents

#### `.gradient-tecno-animated`

**Purple → Blue → Purple (200% size for animation)**

```tsx
<div className="gradient-tecno-animated bg-pos-0 hover:bg-pos-100 transition-all">
  {/* Animated gradient on hover */}
</div>
```

**Use for:**

- Interactive buttons
- Animated cards
- Hover effects

### Text Gradients

#### `.text-gradient-primary`

**Gradient text effect (horizontal)**

```tsx
<h1 className="text-gradient-primary text-4xl font-bold">Gradient Heading</h1>
```

**CSS Output:**

```css
.text-gradient-primary {
  background: linear-gradient(
    to right,
    var(--color-brand-primary),
    var(--color-brand-secondary)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

#### `.text-gradient-tecno`

**Gradient text effect (diagonal, 135deg)**

```tsx
<h2 className="text-gradient-tecno text-3xl">Diagonal Gradient Text</h2>
```

### Border Gradients

#### `.border-gradient`

**Gradient border using pseudo-elements**

```tsx
<div className="border-gradient rounded-xl p-6">
  {/* Card with gradient border */}
</div>
```

#### `.border-gradient-primary`

**Alternative gradient border (horizontal)**

```tsx
<div className="border-gradient-primary rounded-lg p-4">
  {/* Horizontal gradient border */}
</div>
```

**Note:** Border gradients use complex CSS with `background-clip`. Ensure proper `border-radius` is applied.

---

## Component Patterns

### Glass Card Pattern

**Glass morphism effect with brand colors**

```tsx
// Using utility classes
<div className="glass-card rounded-2xl p-6">
  {/* Semi-transparent card with blur */}
</div>

// Using glass-card-strong for more opacity
<div className="glass-card-strong rounded-xl p-8">
  {/* Stronger glass effect */}
</div>

// Custom composition
<div className="bg-card/50 backdrop-blur-md border border-brand-primary/10 rounded-xl p-6">
  {/* Manual glass effect */}
</div>
```

**CSS Definition:**

```css
.glass-card {
  background: color-mix(in oklch, var(--card) 50%, transparent);
  backdrop-filter: blur(12px);
  border: 1px solid
    color-mix(in oklch, var(--color-brand-primary) 10%, transparent);
}

.glass-card-strong {
  background: color-mix(in oklch, var(--card) 80%, transparent);
  backdrop-filter: blur(16px);
  border: 1px solid
    color-mix(in oklch, var(--color-brand-primary) 20%, transparent);
}
```

### Icon Container Pattern

**Consistent icon containers with gradients**

```tsx
<div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-tecno-diagonal text-white shadow-lg shadow-brand-primary/25">
  <Icon className="h-6 w-6" />
</div>

// Larger variant
<div className="flex h-20 w-20 items-center justify-center rounded-full gradient-tecno-primary text-white transition-all hover:scale-110 hover:rotate-6">
  <Icon className="h-10 w-10" />
</div>
```

### Hover Glow Effect

**Brand-colored glow on hover**

```tsx
// Primary glow (purple + blue)
<div className="hover-glow transition-all duration-300 rounded-xl p-6">
  {/* Glows with brand colors on hover */}
</div>

// Purple-only glow
<div className="hover-glow-purple transition-all duration-300">
  {/* Purple glow */}
</div>

// Blue-only glow
<div className="hover-glow-blue transition-all duration-300">
  {/* Blue glow */}
</div>
```

**CSS Definition:**

```css
.hover-glow:hover {
  box-shadow:
    0 0 30px color-mix(in oklch, var(--color-brand-primary) 50%, transparent),
    0 0 60px color-mix(in oklch, var(--color-brand-secondary) 30%, transparent);
}
```

### Feature Card Pattern

**Full implementation example**

```tsx
<div className="group relative h-full">
  {/* Gradient glow border on hover */}
  <div className="absolute -inset-0.5 rounded-2xl gradient-tecno-animated opacity-0 blur transition duration-500 group-hover:opacity-50" />

  <Card className="relative h-full overflow-hidden border-gray-700/50 bg-linear-to-br! from-gray-900/90! via-gray-800/80! to-gray-900/90! backdrop-blur-xl transition-all duration-500 group-hover:scale-105">
    <CardHeader className="space-y-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg gradient-tecno-diagonal text-white shadow-lg shadow-brand-primary/25">
        <Icon className="h-7 w-7" />
      </div>
      <CardTitle className="text-xl text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>

    {/* Hover overlay */}
    <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </Card>
</div>
```

### Button Variants (CVA)

**Using Class Variance Authority**

```tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 transition-all",
  {
    variants: {
      variant: {
        "gradient-primary":
          "gradient-tecno-animated text-white shadow-lg shadow-brand-primary/25 hover:bg-pos-100",
        "gradient-secondary":
          "gradient-tecno-secondary text-white shadow-md hover:shadow-lg",
      },
      size: {
        default: "h-10 px-6",
        lg: "h-12 px-8 text-lg",
      },
    },
  },
);
```

---

## Utility Composition

### Using `cn()` Helper

The `cn()` utility (from `@/lib/utils`) combines `clsx` and `tailwind-merge` for conflict-free class composition:

```tsx
import { cn } from "@/lib/utils";

// ✅ CORRECT - Merge with conflict resolution
<div className={cn(
  "bg-card rounded-lg p-4",
  isActive && "bg-brand-primary text-white",
  className
)} />

// ❌ AVOID - Direct template literals (no conflict resolution)
<div className={`bg-card rounded-lg p-4 ${isActive ? 'bg-brand-primary' : ''}`} />
```

### Conditional Classes

```tsx
// ✅ Using cn() with objects (preferred)
<div className={cn(
  "rounded-lg p-6 transition-all",
  {
    "bg-brand-primary text-white": isPrimary,
    "bg-brand-secondary text-white": isSecondary,
    "border-2 border-brand-primary": hasError,
  }
)} />

// ✅ Using cn() with inline conditions
<div className={cn(
  "rounded-lg p-6",
  isPrimary ? "bg-brand-primary" : "bg-gray-900",
  isHovered && "scale-105"
)} />
```

### When to Create Custom Utilities

**Create a custom utility class when:**

1. Pattern is used **3+ times** across the codebase
2. Class string is **complex** (5+ utility classes)
3. Effect requires **@keyframes** or complex CSS
4. You need **semantic naming** for clarity

**Example - Creating a custom utility:**

```css
/* globals.css */
@layer utilities {
  .card-interactive {
    @apply rounded-xl bg-card/80 backdrop-blur-sm border border-brand-primary/10 
           transition-all duration-300 hover:scale-105 hover:border-brand-primary/30 
           hover-glow cursor-pointer;
  }
}
```

```tsx
// Usage
<div className="card-interactive p-6">{/* Clean, semantic markup */}</div>
```

---

## Best Practices

### Color Selection

✅ **DO:**

- Use semantic tokens (`brand-primary`) for themeable elements
- Use specific scale values (`tecno-purple-400`) when intentionally independent of theme
- Apply opacity modifiers for overlays (`bg-brand-primary/10`)
- Use OKLCH values in inline styles only when absolutely necessary

❌ **DON'T:**

- Hardcode hex values in className strings
- Mix color systems (OKLCH, RGB, HSL) unnecessarily
- Override brand colors with arbitrary values
- Use generic Tailwind colors (purple-500, blue-600) for brand elements

### Gradient Usage

✅ **DO:**

- Use utility classes (`.gradient-tecno-primary`) for consistency
- Apply gradients to backgrounds, borders, and text
- Combine gradients with opacity for subtle effects
- Use `gradient-tecno-animated` with background position transitions

❌ **DON'T:**

- Inline gradient CSS unless absolutely necessary
- Create one-off gradients in components (extract to utilities first)
- Mix multiple gradient directions without purpose
- Forget to test gradients in both light and dark modes

### Component Composition

✅ **DO:**

- Compose utilities with `cn()` for conflict resolution
- Group related classes (layout → spacing → colors → effects)
- Use Tailwind's group/peer modifiers for interactive states
- Extract repeated patterns to custom utilities or components

❌ **DON'T:**

- Chain excessive conditional classes (extract to CVA variants)
- Duplicate complex class strings across files
- Mix inline styles with utility classes
- Forget responsive modifiers (sm:, md:, lg:)

### Performance

✅ **DO:**

- Use Tailwind's JIT compiler (enabled by default)
- Purge unused classes in production builds
- Leverage CSS custom properties for dynamic theming
- Combine similar utilities (use `p-4` instead of `px-4 py-4`)

❌ **DON'T:**

- Create unused custom utilities
- Apply hundreds of classes to a single element
- Generate dynamic class names at runtime (breaks purging)
- Inline complex CSS that could be a utility

---

## Migration Guide

### From Old System to New

#### Color References

**Before:**

```tsx
<div className="from-[#9155eb] to-[#4275f9]" />
<div className="from-tecno-purple to-tecno-blue" />  {/* CSS var fallback */}
<div className="border-purple-500/20" />
```

**After:**

```tsx
<div className="gradient-tecno-primary" />
<div className="from-brand-primary to-brand-secondary" />
<div className="border-brand-primary/20" />
```

#### Hardcoded Gradients

**Before:**

```tsx
<div className="bg-linear-to-r from-[#9155eb] via-[#4275f9] to-[#9155eb]" />
```

**After:**

```tsx
<div className="gradient-tecno-animated" />
```

#### Generic Tailwind Colors

**Before:**

```tsx
<div className="text-purple-500 border-blue-600/20" />
```

**After:**

```tsx
<div className="text-brand-primary border-brand-secondary/20" />
```

#### Inline Styles

**Before:**

```tsx
<div
  style={{
    backgroundImage: "radial-gradient(circle, #9155EB, transparent)",
    backgroundColor: "#232323",
  }}
/>
```

**After:**

```tsx
<div
  className="bg-brand-dark"
  style={{
    backgroundImage:
      "radial-gradient(circle, oklch(0.6 0.26 295), transparent)",
  }}
/>
```

### Converting OKLCH Values

If you need to convert hex to OKLCH:

1. **Use an online converter:** [oklch.com](https://oklch.com)
2. **Use Tailwind's default palette as reference**
3. **Test the value in browser DevTools**

**Example conversion:**

```
#9155EB → oklch(0.6 0.26 295)
#4275F9 → oklch(0.6 0.23 260)
#232323 → oklch(0.15 0 0)
```

### Checklist for Migration

- [ ] Replace all hex values with semantic tokens
- [ ] Update hardcoded gradients to utility classes
- [ ] Convert `from-tecno-purple to-tecno-blue` to gradient utilities
- [ ] Replace generic Tailwind colors (purple-500) with brand colors
- [ ] Update button variants to use new gradient classes
- [ ] Test dark mode compatibility
- [ ] Verify build succeeds without errors
- [ ] Visual regression check in browser

---

## Additional Resources

### Tailwind V4 Documentation

- [Theme Variables](https://tailwindcss.com/docs/theme)
- [Customizing Colors](https://tailwindcss.com/docs/customizing-colors)
- [Using @theme directive](https://tailwindcss.com/docs/v4-beta)

### OKLCH Color Space

- [OKLCH Explained](https://oklch.com)
- [Why OKLCH is better](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)

### Project-Specific Docs

- [BUTTON_SYSTEM.md](./BUTTON_SYSTEM.md) - Button component documentation
- [MIGRATION_COMPLETE.md](./MIGRATION_COMPLETE.md) - Project migration history

---

## Questions or Issues?

If you encounter any inconsistencies or have suggestions for this style guide:

1. Check the [globals.css](./src/app/globals.css) file for the source of truth
2. Review existing component implementations in `src/components/`
3. Test in both light and dark modes
4. Verify build output with `npm run build`

**Last reviewed:** February 5, 2026  
**Maintainer:** TecnoJR Development Team
