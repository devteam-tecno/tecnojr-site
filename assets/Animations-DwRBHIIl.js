import{j as n}from"./jsx-runtime-DVhjNUKw.js";import{useMDXComponents as t}from"./index-DgFQXQHp.js";import"./iframe-CTDfU54N.js";import"./preload-helper-PPVm8Dsz.js";function a(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"animações",children:"Animações"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"📖 Documentação Completa"}),": ",n.jsx(e.a,{href:"../../docs/development/animations-guide.md",children:"Animation Guide"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"visão-geral",children:"Visão Geral"}),`
`,n.jsxs(e.p,{children:["O sistema de animações do TecnoJr usa ",n.jsx(e.strong,{children:"Framer Motion"})," com componentes reutilizáveis em ",n.jsx(e.code,{children:"src/components/animated/"}),"."]}),`
`,n.jsx(e.h3,{id:"componentes-principais",children:"Componentes Principais"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"FadeUp"}),", ",n.jsx(e.code,{children:"FadeDown"}),", ",n.jsx(e.code,{children:"FadeLeft"}),", ",n.jsx(e.code,{children:"FadeRight"})," - Animações de entrada"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ScaleIn"})," - Animação de escala"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"StaggerContainer"})," - Container para animações sequenciais"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"AnimatedCard"}),", ",n.jsx(e.code,{children:"AnimatedButton"})," - Componentes especializados"]}),`
`]}),`
`,n.jsx(e.h3,{id:"exemplo-rápido",children:"Exemplo Rápido"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { FadeUp } from '@/components/animated';

<FadeUp>
  <Card />
</FadeUp>
`})}),`
`,n.jsx(e.h2,{id:"animation-constants",children:"Animation Constants"}),`
`,n.jsxs(e.p,{children:["All timing values are centralized in ",n.jsx(e.code,{children:"@/lib/animations.ts"}),":"]}),`
`,n.jsx(e.h3,{id:"durations",children:"Durations"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { DURATIONS } from '@/lib/animations';

DURATIONS.fast      // 0.3s - Micro-interactions
DURATIONS.standard  // 0.8s - Most UI animations
DURATIONS.slow     // 1.2s - Emphasis animations
DURATIONS.infinite  // 15s - Ambient effects
`})}),`
`,n.jsx(e.h3,{id:"delays",children:"Delays"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { DELAYS } from '@/lib/animations';

DELAYS.none     // 0s
DELAYS.short    // 0.1s - Subtle stagger
DELAYS.medium   // 0.2s - Standard stagger
DELAYS.standard // 0.3s - Longer stagger
DELAYS.long     // 0.5s - Emphasis delay
`})}),`
`,n.jsx(e.h3,{id:"transitions",children:"Transitions"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { TRANSITIONS } from '@/lib/animations';

TRANSITIONS.standard     // duration: 0.8s
TRANSITIONS.fast         // duration: 0.3s
TRANSITIONS.slow         // duration: 1.2s
TRANSITIONS.spring       // Spring physics (stiffness: 100)
TRANSITIONS.springBouncy // Bouncy spring (stiffness: 260)
`})}),`
`,n.jsx(e.h2,{id:"fade-animations",children:"Fade Animations"}),`
`,n.jsx(e.h3,{id:"fade-variants",children:"Fade Variants"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { fadeVariants } from '@/lib/animations';

fadeVariants.fadeUp    // Fade in from bottom
fadeVariants.fadeDown  // Fade in from top
fadeVariants.fadeLeft  // Fade in from left
fadeVariants.fadeRight // Fade in from right
fadeVariants.fadeIn    // Simple fade in
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { motion } from 'framer-motion';
import { fadeVariants } from '@/lib/animations';

<motion.div
  initial={fadeVariants.fadeUp.initial}
  animate={fadeVariants.fadeUp.animate}
  transition={fadeVariants.fadeUp.transition}
>
  Content
</motion.div>
`})}),`
`,n.jsx(e.h3,{id:"scroll-triggered-fades",children:"Scroll-Triggered Fades"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { motion } from 'framer-motion';
import { fadeVariants, createViewport } from '@/lib/animations';

<motion.section
  initial="initial"
  whileInView="animate"
  viewport={createViewport({ once: true })}
  variants={{
    initial: fadeVariants.fadeUp.initial,
    animate: fadeVariants.fadeUp.animate,
  }}
>
  Animates when scrolled into view
</motion.section>
`})}),`
`,n.jsx(e.h2,{id:"helper-functions",children:"Helper Functions"}),`
`,n.jsx(e.h3,{id:"createfadeup",children:"createFadeUp"}),`
`,n.jsx(e.p,{children:"Simple fade up with custom delay:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { createFadeUp } from '@/lib/animations';

<motion.div {...createFadeUp(0.2)}>
  Fades up with 0.2s delay
</motion.div>
`})}),`
`,n.jsx(e.h3,{id:"createstaggeredfadeup",children:"createStaggeredFadeUp"}),`
`,n.jsx(e.p,{children:"Automatically calculates delay for list items:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { createStaggeredFadeUp } from '@/lib/animations';

{items.map((item, index) => (
  <motion.div key={item.id} {...createStaggeredFadeUp(index)}>
    {item.content}
  </motion.div>
))}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Advanced with base delay:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`{items.map((item, i) => (
  <motion.div {...createStaggeredFadeUp(i, 0.5)}>
    {/* Waits 0.5s, then staggers by 0.1s each */}
  </motion.div>
))}
`})}),`
`,n.jsx(e.h3,{id:"createviewport",children:"createViewport"}),`
`,n.jsx(e.p,{children:"Configures when scroll animations trigger:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { createViewport } from '@/lib/animations';

// Default - animate once when visible
<motion.div
  whileInView={{ opacity: 1 }}
  viewport={createViewport()}
/>

// Animate every time
<motion.div
  whileInView={{ opacity: 1 }}
  viewport={createViewport({ once: false })}
/>

// Trigger when 50% visible
<motion.div
  whileInView={{ opacity: 1 }}
  viewport={createViewport({ amount: 0.5 })}
/>

// Start 100px before entering viewport
<motion.div
  whileInView={{ opacity: 1 }}
  viewport={createViewport({ margin: '-100px' })}
/>
`})}),`
`,n.jsx(e.h2,{id:"scale-animations",children:"Scale Animations"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { scaleVariants } from '@/lib/animations';

scaleVariants.scaleFadeIn  // Scale + fade + move up
scaleVariants.scaleUp      // Simple scale up
scaleVariants.pulse        // Single pulse effect
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<motion.button
  initial={scaleVariants.scaleFadeIn.initial}
  animate={scaleVariants.scaleFadeIn.animate}
  transition={scaleVariants.scaleFadeIn.transition}
>
  Button
</motion.button>
`})}),`
`,n.jsx(e.h2,{id:"infinite-animations",children:"Infinite Animations"}),`
`,n.jsx(e.p,{children:"For ambient effects and background elements:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { infiniteAnimations } from '@/lib/animations';

// Floating orbs
<motion.div
  animate={infiniteAnimations.floatingOrb.animate}
  transition={infiniteAnimations.floatingOrb.transition}
/>

// Rotating elements
<motion.div
  animate={infiniteAnimations.rotate360.animate}
  transition={infiniteAnimations.rotate360.transition}
/>

// Bouncing elements
<motion.div
  animate={infiniteAnimations.bounce.animate}
  transition={infiniteAnimations.bounce.transition}
/>
`})}),`
`,n.jsx(e.h2,{id:"common-patterns",children:"Common Patterns"}),`
`,n.jsx(e.h3,{id:"hero-section-animation",children:"Hero Section Animation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { motion } from 'framer-motion';
import { createFadeUp, DELAYS } from '@/lib/animations';

<section>
  {/* Title - first */}
  <motion.h1 {...createFadeUp(DELAYS.none)}>
    Welcome
  </motion.h1>
  
  {/* Subtitle - second */}
  <motion.p {...createFadeUp(DELAYS.medium)}>
    Description
  </motion.p>
  
  {/* CTA - third */}
  <motion.div {...createFadeUp(DELAYS.long)}>
    <Button>Get Started</Button>
  </motion.div>
</section>
`})}),`
`,n.jsx(e.h3,{id:"grid-with-stagger",children:"Grid with Stagger"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { createStaggeredFadeUp } from '@/lib/animations';

<div className="grid grid-cols-3 gap-8">
  {items.map((item, i) => (
    <motion.div key={i} {...createStaggeredFadeUp(i)}>
      <Card {...item} />
    </motion.div>
  ))}
</div>
`})}),`
`,n.jsx(e.h3,{id:"tabs-transition",children:"Tabs Transition"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { AnimatePresence, motion } from 'framer-motion';
import { fadeVariants } from '@/lib/animations';

<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={fadeVariants.fadeIn.initial}
    animate={fadeVariants.fadeIn.animate}
    exit={fadeVariants.fadeIn.initial}
    transition={{ duration: 0.2 }}
  >
    {tabContent}
  </motion.div>
</AnimatePresence>
`})}),`
`,n.jsx(e.h3,{id:"card-hover-effect",children:"Card Hover Effect"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<motion.div
  whileHover={{ scale: 1.02 }}
  transition={TRANSITIONS.fast}
  className="cursor-pointer"
>
  <Card />
</motion.div>
`})}),`
`,n.jsx(e.h2,{id:"performance-tips",children:"Performance Tips"}),`
`,n.jsx(e.h3,{id:"use-will-change",children:"Use will-change"}),`
`,n.jsx(e.p,{children:"For smooth animations:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.animated-element {
  will-change: transform, opacity;
}
`})}),`
`,n.jsx(e.h3,{id:"prefer-transform-over-position",children:"Prefer transform over position"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✓ Good - GPU accelerated
<motion.div animate={{ x: 100, y: 50 }} />

// ✗ Bad - Causes reflow
<motion.div animate={{ left: 100, top: 50 }} />
`})}),`
`,n.jsx(e.h3,{id:"batch-animations",children:"Batch animations"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✓ Good - Single animation
<motion.div animate={{ x: 100, opacity: 1 }} />

// ✗ Bad - Multiple rerenders
<motion.div animate={{ x: 100 }} />
<motion.div animate={{ opacity: 1 }} />
`})}),`
`,n.jsx(e.h2,{id:"reduced-motion",children:"Reduced Motion"}),`
`,n.jsx(e.p,{children:"Automatically respected:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  // Automatically skips animation if user prefers reduced motion
/>
`})}),`
`,n.jsx(e.p,{children:"Manual check:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useReducedMotion } from 'framer-motion';

function MyComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={shouldReduceMotion ? {} : { scale: 1.1 }}
    />
  );
}
`})}),`
`,n.jsx(e.h2,{id:"testing-animations",children:"Testing Animations"}),`
`,n.jsx(e.p,{children:"Animations are mocked in tests:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// tests/setup.ts already handles this
vi.mock('framer-motion', () => ({
  motion: { /* mocked */ },
}));
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:["For complete animation configurations, see ",n.jsx(e.a,{href:"../../src/lib/animations.ts",children:"@/lib/animations.ts"})]})]})}function c(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{c as default};
