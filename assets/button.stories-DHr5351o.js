import{j as r}from"./jsx-runtime-DVhjNUKw.js";import{F as A,a as L,b as D}from"./index-vbc20wCt.js";import{c as T}from"./index-B_jtOnfb.js";import{c as O}from"./utils-CDN07tui.js";import{S as P}from"./index-CpisRUSc.js";import"./iframe-CTDfU54N.js";import"./preload-helper-PPVm8Dsz.js";const E=T("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 rounded-md","gradient-primary":"relative overflow-hidden rounded-full gradient-tecno-animated text-white font-semibold shadow-lg shadow-brand-primary/25 hover:shadow-brand-secondary/25 transition-all duration-500 hover:scale-[1.02] hover:bg-pos-100 [&>*]:relative [&>*]:z-10","gradient-whatsapp":"rounded-lg bg-linear-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 shadow-md hover:shadow-lg transition-all duration-300","gradient-secondary":"rounded-lg bg-linear-to-r from-brand-secondary to-tecno-blue-600 text-white font-medium hover:from-tecno-blue-600 hover:to-tecno-blue-700 shadow-md hover:shadow-lg transition-all duration-300","outline-gradient":"rounded-full border-2 border-gray-700/50 bg-gray-900/50 text-gray-300 font-medium backdrop-blur-sm hover:border-brand-primary/40 hover:bg-gray-800/60 hover:text-white transition-all duration-300","ghost-gradient":"rounded-md text-gray-300 hover:bg-linear-to-r hover:from-brand-primary/10 hover:to-brand-secondary/10 hover:text-white transition-all duration-300",tab:"rounded-full border border-gray-700/50 bg-gray-900/50 text-gray-300 font-medium backdrop-blur-sm transition-all data-[state=active]:border-transparent data-[state=active]:gradient-tecno-secondary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-brand-secondary/20 hover:border-brand-secondary/40 hover:bg-gray-800/60 hover:text-white",destructive:"rounded-md bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"rounded-md border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",xs:"h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 px-6 has-[>svg]:px-4",xl:"h-12 px-8 text-base has-[>svg]:px-6",icon:"size-9","icon-xs":"size-6 rounded-md [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function e({className:C,variant:j="default",size:G="default",asChild:W=!1,...F}){const I=W?P:"button";return r.jsx(I,{"data-slot":"button","data-variant":j,"data-size":G,className:O(E({variant:j,size:G,className:C})),...F})}e.__docgenInfo={description:`Button component with multiple variants and sizes.

Primary interactive element supporting gradient animations, glassmorphism effects,
and full accessibility. Integrates with Radix UI's Slot pattern for polymorphic rendering.

@param variant - Button style variant
  - \`gradient-primary\`: Animated gradient for primary CTAs (hero, main actions)
  - \`gradient-whatsapp\`: Green gradient specifically for WhatsApp links
  - \`gradient-secondary\`: Blue gradient for secondary important actions
  - \`outline-gradient\`: Glassmorphic outline for filters, tabs, navigation
  - \`ghost-gradient\`: Subtle gradient hover for secondary navigation
  - \`default\`: Standard solid button
  - \`outline\`: Outlined button
  - \`secondary\`: Secondary styled button
  - \`ghost\`: Ghost button with hover state
  - \`destructive\`: Destructive/danger actions
  - \`link\`: Link-styled button

@param size - Button size: xs, sm, default, lg, xl, icon variants
@param asChild - Render as child element (Radix Slot pattern)
@param className - Additional classes

@example
\`\`\`tsx
// Primary CTA button
<Button variant="gradient-primary" size="xl">
  Get Started
</Button>

// WhatsApp contact link
<Button variant="gradient-whatsapp">
  <FaWhatsapp />
  Contact Us
</Button>

// Filter/tab button
<Button variant="outline-gradient" size="sm">
  All Projects
</Button>

// As Next.js Link (polymorphic with asChild)
<Button asChild variant="ghost-gradient">
  <Link href="/about">Learn More</Link>
</Button>

// Icon-only button
<Button variant="ghost" size="icon">
  <MenuIcon />
</Button>
\`\`\`

@see {@link ../../BUTTON_SYSTEM.md} for complete design system documentation
@see {@link button.stories.tsx} for interactive examples in Storybook`,methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const q={title:"UI/Button",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Button component with 8 variants and multiple sizes.

The TecnoJR button system provides comprehensive styling options from
animated gradients to subtle ghost buttons. All variants support icons,
loading states, and accessibility features.

## When to use each variant:

- **gradient-primary**: Primary CTAs (hero sections, main actions)
- **gradient-whatsapp**: WhatsApp contact links only
- **gradient-secondary**: Secondary important actions (email, subm forms)
- **outline-gradient**: Filters, tabs, navigation options
- **ghost-gradient**: Subtle secondary navigation
- **default**: Standard buttons
- **outline**: Outlined buttons for less emphasis
- **destructive**: Critical/dangerous actions

@see BUTTON_SYSTEM.md for complete documentation`}}},argTypes:{variant:{control:"select",options:["gradient-primary","gradient-whatsapp","gradient-secondary","outline-gradient","ghost-gradient","default","outline","secondary","ghost","destructive","link"],description:"Button style variant"},size:{control:"select",options:["xs","sm","default","lg","xl","icon","icon-xs","icon-sm","icon-lg"],description:"Button size"},disabled:{control:"boolean",description:"Disabled state"},children:{control:"text",description:"Button content"}}},t={args:{variant:"gradient-primary",children:"Get Started",size:"lg"}},a={args:{variant:"gradient-whatsapp",children:r.jsxs(r.Fragment,{children:[r.jsx(A,{}),"Contact on WhatsApp"]})}},n={args:{variant:"gradient-secondary",children:"Submit Form"}},i={args:{variant:"outline-gradient",children:"All Projects",size:"sm"}},s={args:{variant:"ghost-gradient",children:"Learn More"}},o={args:{variant:"default",children:"Default Button"}},d={args:{variant:"outline",children:"Outline Button"}},c={args:{variant:"destructive",children:"Delete"}},l={args:{variant:"link",children:"Read More"}},p={args:{variant:"gradient-primary",size:"xs",children:"Extra Small"}},u={args:{variant:"gradient-primary",size:"sm",children:"Small"}},m={args:{variant:"gradient-primary",size:"default",children:"Default Size"}},g={args:{variant:"gradient-primary",size:"lg",children:"Large"}},h={args:{variant:"gradient-primary",size:"xl",children:"Extra Large"}},v={args:{variant:"outline",size:"icon",children:r.jsx(L,{})}},y={args:{variant:"ghost",size:"icon-sm",children:r.jsx(D,{})}},b={args:{variant:"gradient-primary",size:"icon-lg",children:r.jsx(L,{})}},f={args:{variant:"gradient-primary",children:r.jsxs(r.Fragment,{children:[r.jsx(L,{}),"Launch Project"]})}},x={args:{variant:"outline-gradient",children:r.jsxs(r.Fragment,{children:["View Code",r.jsx(D,{})]})}},S={args:{variant:"gradient-primary",children:"Disabled Button",disabled:!0}},z={args:{variant:"gradient-primary",children:"Loading...",disabled:!0}},B={render:()=>r.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[r.jsx(e,{variant:"gradient-primary",children:"Gradient Primary"}),r.jsxs(e,{variant:"gradient-whatsapp",children:[r.jsx(A,{}),"Gradient WhatsApp"]}),r.jsx(e,{variant:"gradient-secondary",children:"Gradient Secondary"}),r.jsx(e,{variant:"outline-gradient",children:"Outline Gradient"}),r.jsx(e,{variant:"ghost-gradient",children:"Ghost Gradient"})]})},w={render:()=>r.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[r.jsx(e,{variant:"gradient-primary",size:"xs",children:"XS"}),r.jsx(e,{variant:"gradient-primary",size:"sm",children:"Small"}),r.jsx(e,{variant:"gradient-primary",size:"default",children:"Default"}),r.jsx(e,{variant:"gradient-primary",size:"lg",children:"Large"}),r.jsx(e,{variant:"gradient-primary",size:"xl",children:"Extra Large"})]})},k={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-3",children:[r.jsx(e,{variant:"gradient-primary",children:"Save"}),r.jsx(e,{variant:"outline-gradient",children:"Cancel"}),r.jsx(e,{variant:"ghost-gradient",children:"Preview"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-primary",
    children: "Get Started",
    size: "lg"
  }
}`,...t.parameters?.docs?.source},description:{story:`Primary gradient button with animated background.
Use for hero CTAs and most important actions.`,...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-whatsapp",
    children: <>
        <FaWhatsapp />
        Contact on WhatsApp
      </>
  }
}`,...a.parameters?.docs?.source},description:{story:`WhatsApp-specific button with green gradient.
Only use for WhatsApp contact links.`,...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-secondary",
    children: "Submit Form"
  }
}`,...n.parameters?.docs?.source},description:{story:`Secondary gradient button with blue tones.
Use for email, form submissions, and secondary important actions.`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline-gradient",
    children: "All Projects",
    size: "sm"
  }
}`,...i.parameters?.docs?.source},description:{story:`Outline button with glassmorphism effect.
Perfect for filters, tabs, and navigation options.`,...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost-gradient",
    children: "Learn More"
  }
}`,...s.parameters?.docs?.source},description:{story:`Ghost button with subtle gradient hover.
Use for less prominent secondary actions.`,...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: "Default Button"
  }
}`,...o.parameters?.docs?.source},description:{story:`Standard default button.
General purpose button for regular actions.`,...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline Button"
  }
}`,...d.parameters?.docs?.source},description:{story:`Outlined button variant.
Lower emphasis than filled buttons.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Delete"
  }
}`,...c.parameters?.docs?.source},description:{story:`Destructive button for dangerous actions.
Use for delete, cancel, or critical operations.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link",
    children: "Read More"
  }
}`,...l.parameters?.docs?.source},description:{story:`Link-styled button.
Looks like a link but with button semantics.`,...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-primary",
    size: "xs",
    children: "Extra Small"
  }
}`,...p.parameters?.docs?.source},description:{story:"Extra small button.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-primary",
    size: "sm",
    children: "Small"
  }
}`,...u.parameters?.docs?.source},description:{story:"Small button.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-primary",
    size: "default",
    children: "Default Size"
  }
}`,...m.parameters?.docs?.source},description:{story:"Default size button.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-primary",
    size: "lg",
    children: "Large"
  }
}`,...g.parameters?.docs?.source},description:{story:"Large button.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-primary",
    size: "xl",
    children: "Extra Large"
  }
}`,...h.parameters?.docs?.source},description:{story:"Extra large button for hero CTAs.",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "icon",
    children: <FaRocket />
  }
}`,...v.parameters?.docs?.source},description:{story:"Icon-only button (default size).",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    size: "icon-sm",
    children: <FaCode />
  }
}`,...y.parameters?.docs?.source},description:{story:"Small icon button.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-primary",
    size: "icon-lg",
    children: <FaRocket />
  }
}`,...b.parameters?.docs?.source},description:{story:"Large icon button.",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-primary",
    children: <>
        <FaRocket />
        Launch Project
      </>
  }
}`,...f.parameters?.docs?.source},description:{story:"Button with leading icon.",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline-gradient",
    children: <>
        View Code
        <FaCode />
      </>
  }
}`,...x.parameters?.docs?.source},description:{story:"Button with trailing icon.",...x.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-primary",
    children: "Disabled Button",
    disabled: true
  }
}`,...S.parameters?.docs?.source},description:{story:"Disabled button state.",...S.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient-primary",
    children: "Loading...",
    disabled: true
  }
}`,...z.parameters?.docs?.source},description:{story:"Loading button state (with custom implementation).",...z.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 items-start">
      <Button variant="gradient-primary">Gradient Primary</Button>
      <Button variant="gradient-whatsapp">
        <FaWhatsapp />
        Gradient WhatsApp
      </Button>
      <Button variant="gradient-secondary">Gradient Secondary</Button>
      <Button variant="outline-gradient">Outline Gradient</Button>
      <Button variant="ghost-gradient">Ghost Gradient</Button>
    </div>
}`,...B.parameters?.docs?.source},description:{story:"All gradient variants showcase.",...B.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button variant="gradient-primary" size="xs">
        XS
      </Button>
      <Button variant="gradient-primary" size="sm">
        Small
      </Button>
      <Button variant="gradient-primary" size="default">
        Default
      </Button>
      <Button variant="gradient-primary" size="lg">
        Large
      </Button>
      <Button variant="gradient-primary" size="xl">
        Extra Large
      </Button>
    </div>
}`,...w.parameters?.docs?.source},description:{story:"All sizes showcase with gradient-primary variant.",...w.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <Button variant="gradient-primary">Save</Button>
      <Button variant="outline-gradient">Cancel</Button>
      <Button variant="ghost-gradient">Preview</Button>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Interactive button group example.
Shows how buttons work together in a UI.`,...k.parameters?.docs?.description}}};const Y=["GradientPrimary","GradientWhatsApp","GradientSecondary","OutlineGradient","GhostGradient","Default","Outline","Destructive","Link","SizeXS","SizeSmall","SizeDefault","SizeLarge","SizeXL","IconButton","IconButtonSmall","IconButtonLarge","WithLeadingIcon","WithTrailingIcon","Disabled","Loading","AllGradientVariants","AllSizes","ButtonGroup"];export{B as AllGradientVariants,w as AllSizes,k as ButtonGroup,o as Default,c as Destructive,S as Disabled,s as GhostGradient,t as GradientPrimary,n as GradientSecondary,a as GradientWhatsApp,v as IconButton,b as IconButtonLarge,y as IconButtonSmall,l as Link,z as Loading,d as Outline,i as OutlineGradient,m as SizeDefault,g as SizeLarge,u as SizeSmall,h as SizeXL,p as SizeXS,f as WithLeadingIcon,x as WithTrailingIcon,Y as __namedExportsOrder,q as default};
