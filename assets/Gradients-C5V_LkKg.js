import{j as n}from"./jsx-runtime-DVhjNUKw.js";import{useMDXComponents as s}from"./index-DgFQXQHp.js";import"./iframe-CTDfU54N.js";import"./preload-helper-PPVm8Dsz.js";function r(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"gradientes",children:"Gradientes"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"📖 Documentação Completa"}),": ",n.jsx(e.a,{href:"../../docs/architecture/STYLING.md#cores-principais-oklch",children:"Style System - Gradientes"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"sistema-de-gradientes",children:"Sistema de Gradientes"}),`
`,n.jsx(e.p,{children:"O design TecnoJr usa gradientes para criar identidade visual moderna."}),`
`,n.jsx(e.h2,{id:"gradientes-principais",children:"Gradientes Principais"}),`
`,n.jsx(e.h3,{id:"1-gradiente-primário-roxo--azul",children:"1. Gradiente Primário (Roxo → Azul)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`background: linear-gradient(135deg, 
  oklch(69% 0.19 290) 0%,    /* Purple */
  oklch(65% 0.18 250) 100%   /* Blue */
);
`})}),`
`,n.jsx(e.h3,{id:"2-gradiente-animado",children:"2. Gradiente Animado"}),`
`,n.jsx(e.p,{children:"Usado em CTAs principais com animação de shift."}),`
`,n.jsx(e.h3,{id:"3-text-gradient",children:"3. Text Gradient"}),`
`,n.jsxs(e.p,{children:["Aplicado a textos com ",n.jsx(e.code,{children:"background-clip: text"}),"."]}),`
`,n.jsx(e.h2,{id:"available-gradients",children:"Available Gradients"}),`
`,n.jsx(e.h3,{id:"1-primary-gradient",children:"1. Primary Gradient"}),`
`,n.jsx(e.p,{children:"Purple to blue diagonal gradient - most commonly used."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.gradient-tecno-primary
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Hero section backgrounds"}),`
`,n.jsx(e.li,{children:"Primary CTA buttons"}),`
`,n.jsx(e.li,{children:"Section highlights"}),`
`,n.jsx(e.li,{children:"Card accents"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"CSS:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`background: linear-gradient(135deg, 
  oklch(0.6 0.26 295) 0%,    /* tecno-purple-500 */
  oklch(0.55 0.18 250) 100%  /* tecno-blue-500 */
);
`})}),`
`,n.jsx(e.h3,{id:"2-animated-gradient",children:"2. Animated Gradient"}),`
`,n.jsx(e.p,{children:"Animated gradient for high-emphasis CTAs."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.gradient-tecno-animated
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Primary CTA buttons (hero, budget sections)"}),`
`,n.jsx(e.li,{children:"Important call-to-action elements"}),`
`,n.jsx(e.li,{children:"Hover states for major interactions"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"CSS:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`background: linear-gradient(90deg,
  oklch(0.6 0.26 295),
  oklch(0.55 0.18 250),
  oklch(0.6 0.26 295)
);
background-size: 200% 100%;
animation: gradient-shift 3s ease infinite;
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Animation:"}),`
The gradient shifts horizontally on hover:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
`})}),`
`,n.jsx(e.h3,{id:"3-diagonal-gradient",children:"3. Diagonal Gradient"}),`
`,n.jsx(e.p,{children:"Perfect for icon wrappers and small accents."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.gradient-tecno-diagonal
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Icon backgrounds (feature cards, service cards)"}),`
`,n.jsx(e.li,{children:"Small accent elements"}),`
`,n.jsx(e.li,{children:"Badge backgrounds"}),`
`]}),`
`,n.jsx(e.h3,{id:"4-text-gradient",children:"4. Text Gradient"}),`
`,n.jsx(e.p,{children:"Gradient applied to text using background-clip."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.text-gradient-tecno
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Hero titles"}),`
`,n.jsx(e.li,{children:"Section headings"}),`
`,n.jsx(e.li,{children:"Important text highlights"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"CSS:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`background: linear-gradient(135deg,
  oklch(0.6 0.26 295),
  oklch(0.55 0.18 250)
);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
`})}),`
`,n.jsx(e.h2,{id:"gradient-utility-functions",children:"Gradient Utility Functions"}),`
`,n.jsxs(e.p,{children:["Import from ",n.jsx(e.code,{children:"@/lib/styles"})," for type-safe gradient usage:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { getGradientClass } from '@/lib/styles';

// Returns appropriate class name
getGradientClass('diagonal')   // 'gradient-tecno-diagonal'
getGradientClass('animated')   // 'gradient-tecno-animated'
getGradientClass('primary')    // 'gradient-tecno-primary'
getGradientClass('text')       // 'text-gradient-tecno'
`})}),`
`,n.jsx(e.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,n.jsx(e.h3,{id:"button-with-animated-gradient",children:"Button with Animated Gradient"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@/components/ui/button';

<Button variant="gradient-primary" size="xl">
  Get Started
</Button>
`})}),`
`,n.jsx(e.h3,{id:"icon-with-diagonal-gradient",children:"Icon with Diagonal Gradient"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Zap } from 'lucide-react';
import { getGradientClass } from '@/lib/styles';

<div className={cn(
  'h-12 w-12 rounded-lg flex items-center justify-center',
  getGradientClass('diagonal')
)}>
  <Zap className="h-6 w-6 text-white" />
</div>
`})}),`
`,n.jsx(e.h3,{id:"text-gradient-heading",children:"Text Gradient Heading"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<h1 className="text-gradient-tecno text-5xl font-bold">
  Welcome to TecnoJR
</h1>
`})}),`
`,n.jsx(e.h3,{id:"card-with-glow-effect",children:"Card with Glow Effect"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { getGlowEffectClass } from '@/lib/styles';

<div className="group relative">
  {/* Glow border on hover */}
  <div className={getGlowEffectClass({
    variant: 'primary',
    hoverOpacity: 50,
    blur: true,
  })} />
  
  {/* Card content */}
  <div className="relative bg-tecno-black-900 rounded-2xl p-6">
    Content here
  </div>
</div>
`})}),`
`,n.jsx(e.h2,{id:"gradient-backgrounds",children:"Gradient Backgrounds"}),`
`,n.jsx(e.p,{children:"For section backgrounds and overlays:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Subtle background gradient
<section className="bg-linear-to-b from-tecno-black-950 to-tecno-black-900">
  {/* Content */}
</section>

// Radial gradient spotlight effect
<div className="bg-radial-gradient from-tecno-purple-500/20 via-transparent to-transparent">
  {/* Content */}
</div>

// Gradient overlay on images
<div className="relative">
  <Image src="..." alt="..." />
  <div className="absolute inset-0 bg-linear-to-t from-tecno-black-950/90 to-transparent" />
</div>
`})}),`
`,n.jsx(e.h2,{id:"animation-patterns",children:"Animation Patterns"}),`
`,n.jsx(e.h3,{id:"hover-shift",children:"Hover Shift"}),`
`,n.jsx(e.p,{children:"Used in gradient-animated buttons:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<button className="
  gradient-tecno-animated
  bg-size-200
  hover:bg-pos-100
  transition-all duration-500
">
  Hover me
</button>
`})}),`
`,n.jsx(e.h3,{id:"pulse-effect",children:"Pulse Effect"}),`
`,n.jsx(e.p,{children:"For drawing attention:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div className="
  gradient-tecno-primary
  animate-pulse
">
  New feature!
</div>
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsx(e.h3,{id:"do-",children:"DO ✓"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use animated gradients sparingly (primary CTAs only)"}),`
`,n.jsx(e.li,{children:"Maintain consistent gradient direction (typically 135deg)"}),`
`,n.jsx(e.li,{children:"Layer gradients with opacity for depth"}),`
`,n.jsx(e.li,{children:"Use gradients on important elements only"}),`
`]}),`
`,n.jsx(e.h3,{id:"dont-",children:"DON'T ✗"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Don't use multiple animated gradients on one page"}),`
`,n.jsx(e.li,{children:"Don't apply gradients to body text (readability)"}),`
`,n.jsx(e.li,{children:"Don't combine too many different gradients"}),`
`,n.jsx(e.li,{children:"Don't use gradients on small text"}),`
`]}),`
`,n.jsx(e.h2,{id:"performance-considerations",children:"Performance Considerations"}),`
`,n.jsx(e.p,{children:"Gradients are performant but keep in mind:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Animated gradients"})," use GPU acceleration (will-change: background-position)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Static gradients"})," have minimal performance impact"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Multiple layers"})," may affect paint performance on low-end devices"]}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"background-attachment: fixed"})," sparingly (expensive)"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:["For implementation details, see ",n.jsx(e.a,{href:"../../STYLE_GUIDE.md",children:"STYLE_GUIDE.md"})," and ",n.jsx(e.a,{href:"../../src/lib/styles.ts",children:"@/lib/styles.ts"})]})]})}function c(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{c as default};
