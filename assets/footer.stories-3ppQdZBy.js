import{j as e}from"./jsx-runtime-DVhjNUKw.js";import{b as k}from"./iframe-CTDfU54N.js";import{m as f,T as I,n as z}from"./navigation-mSlPqcES.js";import"./code-text-CfDUPJ2O.js";import"./section-title-EcszT7Jj.js";import{c as E}from"./utils-CDN07tui.js";import{c as v}from"./createLucideIcon-B_DZViE8.js";import{c as _,d as A,e as U,f as D,F as M}from"./index-vbc20wCt.js";import{L as R}from"./link-B0djyyxq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_jtOnfb.js";const V={standard:.8},q={once:!0},O={standard:{duration:V.standard}},y={fadeUp:{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:O.standard}},P=(n={})=>({...q,...n});function W(){const[n,t]=k.useState(!1);return k.useEffect(()=>{const a=window.matchMedia("(prefers-reduced-motion: reduce)");t(a.matches);const s=r=>{t(r.matches)};return a.addEventListener("change",s),()=>{a.removeEventListener("change",s)}},[]),n}function N({children:n,delay:t=0,once:a=!0,className:s,...r}){const l=W();return e.jsx(f.div,{initial:l?void 0:y.fadeUp.initial,whileInView:l?void 0:y.fadeUp.animate,transition:l?void 0:{...y.fadeUp.transition,delay:t},viewport:P({once:a}),className:s,...r,children:n})}N.__docgenInfo={description:`Fade up animation - most common motion pattern (15+ usages)

Animates content by fading in while moving up from below.
Used extensively across hero sections, features, projects, services, and budget sections.
Respects prefers-reduced-motion by disabling animation.

@example
\`\`\`tsx
<FadeUp delay={0.2}>
  <h2>Your Content</h2>
</FadeUp>
\`\`\`

@param delay - Animation start delay in seconds (default: 0)
@param once - Only animate on first scroll (default: true)`,methods:[],displayName:"FadeUp",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},once:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const J={slide:{x:5},scale:{scale:1.05},lift:{y:-2},glow:{scale:1.02},none:{}};function b({children:n,hoverEffect:t="slide",tapEffect:a=!1,className:s,...r}){const l=J[t];return e.jsx(f.a,{whileHover:t!=="none"?l:void 0,whileTap:a?{scale:.95}:void 0,className:s,...r,children:n})}b.__docgenInfo={description:`Animated link with hover effects

Provides consistent link animations throughout the application.
Default behavior is a subtle slide to the right on hover.

@example Basic usage
\`\`\`tsx
<AnimatedLink href="/about">
  Learn More
</AnimatedLink>
\`\`\`

@example With custom hover effect
\`\`\`tsx
<AnimatedLink
  href="/contact"
  hoverEffect="scale"
  className="text-brand-primary"
>
  Contact Us
</AnimatedLink>
\`\`\`

@example With tap effect
\`\`\`tsx
<AnimatedLink
  href="https://example.com"
  hoverEffect="lift"
  tapEffect
  target="_blank"
>
  External Link
</AnimatedLink>
\`\`\``,methods:[],displayName:"AnimatedLink",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},hoverEffect:{required:!1,tsType:{name:"union",raw:'"slide" | "scale" | "lift" | "glow" | "none"',elements:[{name:"literal",value:'"slide"'},{name:"literal",value:'"scale"'},{name:"literal",value:'"lift"'},{name:"literal",value:'"glow"'},{name:"literal",value:'"none"'}]},description:`Hover animation effect
@default 'slide'`,defaultValue:{value:'"slide"',computed:!1}},tapEffect:{required:!1,tsType:{name:"boolean"},description:`Enable tap animation
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}},composes:["Omit"]};const Q=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$=v("mail",Q);const B=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],H=v("map-pin",B);const G=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Y=v("phone",G);function d({children:n,variant:t="body",size:a,as:s="p",className:r}){const l={body:"text-gray-300",muted:"text-gray-400",lead:"text-gray-300",small:"text-gray-400",xs:"text-gray-400"},T={xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl"},S=a??{body:"base",muted:"sm",lead:"lg",small:"sm",xs:"xs"}[t];return e.jsx(s,{className:E(l[t],T[S],r),children:n})}d.__docgenInfo={description:`Universal text component with semantic variants.

Consolidates duplicate text patterns like:
- \`text-sm text-gray-400\` (muted - 50+ occurrences)
- \`text-base text-gray-300\` (body)
- \`text-lg text-gray-300\` (lead)

Provides consistent typography scale across the application.
Use for body text, labels, descriptions, and secondary content.

@example
// Muted text (most common use case)
<Text variant="muted" size="sm">
  Last updated: 2 hours ago
</Text>

@example
// Body text with custom element
<Text variant="body" as="span">
  Standard body text content
</Text>

@example
// Lead text (larger, prominent)
<Text variant="lead" size="lg">
  Important introductory text
</Text>

@example
// Small labels
<Text variant="small">
  Form helper text or metadata
</Text>`,methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"body" | "muted" | "lead" | "small" | "xs"',elements:[{name:"literal",value:'"body"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"lead"'},{name:"literal",value:'"small"'},{name:"literal",value:'"xs"'}]},description:"",defaultValue:{value:'"body"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "base" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"base"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:""},as:{required:!1,tsType:{name:"ElementType"},description:"",defaultValue:{value:'"p"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const i={email:{primary:"tecnojr@uesc.br",contact:"contato@tecnojr.com.br",getPrimaryLink:()=>`mailto:${i.email.primary}`,getContactLink:()=>`mailto:${i.email.contact}`},phone:{display:"+55 (73) 3680-5389",raw:"557336805389",getLink:()=>`tel:${i.phone.raw}`},whatsapp:{number:"5573999321323",defaultMessage:"Olá! Estou entrando em contato pelo site da *Tecno*, gostaria de pedir um orçamento para ",getLink:n=>{const t=n||i.whatsapp.defaultMessage;return`https://wa.me/${i.whatsapp.number}?text=${encodeURIComponent(t)}`}},address:{display:"Campus Soane Nazaré de Andrade Rodovia Jorge Amado, km 16 S/N Bairro Salobrinho, Ilhéus",mapUrl:"https://goo.gl/maps/ivriShW6tUBzJNVa6"}};function K(){return[{icon:$,title:"EMAIL",content:i.email.primary,link:i.email.getPrimaryLink()},{icon:H,title:"LOCAL",content:i.address.display,link:i.address.mapUrl},{icon:Y,title:"TELEFONE",content:i.phone.display,link:i.phone.getLink()}]}function w(){const n=K();return e.jsx("div",{className:"lg:col-span-2",children:e.jsxs(N,{delay:.2,children:[e.jsx("h4",{className:"mb-6 text-lg font-semibold text-white",children:"Contato"}),e.jsx("div",{className:"space-y-6",children:n.map(t=>{const a=t.icon;return e.jsxs(b,{href:t.link,target:t.link.startsWith("http")?"_blank":void 0,rel:t.link.startsWith("http")?"noopener noreferrer":void 0,hoverEffect:"slide",className:"group flex items-start space-x-4",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-110",children:e.jsx(a,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx(d,{variant:"muted",size:"sm",className:"font-semibold uppercase tracking-wider text-purple-500",children:t.title}),e.jsx(d,{variant:"body",size:"sm",className:"leading-relaxed transition-colors duration-300 group-hover:text-white",children:t.content})]})]},t.title)})})]})})}w.__docgenInfo={description:`Footer contact information section with animated display.

Displays company contact details (email, address, phone) with icons and clickable links.
Each item has a gradient icon circle, title, and linked content text.
Spans 2 columns on large screens (lg:col-span-2).

Animation: Fade up on scroll into view with 0.2s delay.

@example
// Used in Footer component
<ContactInfo />`,methods:[],displayName:"ContactInfo"};function j(){return e.jsx("div",{className:"mt-8 border-t border-purple-500/20 pt-8 text-center",children:e.jsxs(d,{variant:"muted",size:"sm",children:["©",new Date().getFullYear()," TecnoJr - Todos os direitos reservados."]})})}j.__docgenInfo={description:`Footer copyright notice with current year.

Displays centered copyright text with dynamic year from \`new Date().getFullYear()\`.
Includes top border separator with purple accent.

@example
// Used in Footer component (after other footer sections)
<Copyright />`,methods:[],displayName:"Copyright"};const X={description:"Transformando ideias em projetos de qualidade. Nossa missão é oferecer soluções tecnológicas seguras e práticas."},c={instagram:"https://instagram.com/tecnojr",facebook:"https://facebook.com/tecnojr",github:"https://github.com/tecnojr-uesc",linkedin:"https://linkedin.com/company/tecnojr",get whatsapp(){return i.whatsapp.getLink()}};function Z(){return[{url:c.instagram,icon:_,label:"Instagram",platform:"instagram"},{url:c.facebook,icon:A,label:"Facebook",platform:"facebook"},{url:c.github,icon:U,label:"GitHub",platform:"github"},{url:c.linkedin,icon:D,label:"LinkedIn",platform:"linkedin"},{url:c.whatsapp,icon:M,label:"WhatsApp",platform:"whatsapp"}]}function F(){const n=Z();return e.jsx("div",{className:"flex space-x-4",children:n.map(t=>{const a=t.icon;return e.jsx(b,{href:t.url,target:"_blank",rel:"noopener noreferrer","aria-label":t.label,hoverEffect:"lift",tapEffect:!0,className:"flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/20 bg-linear-to-br from-zinc-800 to-zinc-900 text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:text-white",children:e.jsx(a,{className:"h-4 w-4"})},t.label)})})}F.__docgenInfo={description:"",methods:[],displayName:"SocialLinks"};function L(){return e.jsx("div",{className:"lg:col-span-1",children:e.jsxs(f.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[e.jsx("div",{className:"mb-6",children:e.jsx(I,{size:"lg"})}),e.jsx(d,{variant:"body",size:"sm",className:"mb-6 leading-relaxed",children:X.description}),e.jsx(F,{})]})})}L.__docgenInfo={description:`Footer description section with logo, mission statement, and social links.

First column (lg:col-span-1) of footer containing:
- Large TecnoJr logo
- Company mission/description text
- Social media links component

Animation: Fade up on scroll into view.

@example
// Used in Footer component
<Description />

@see {@link TecnoJrLogo} - Logo component with size variants
@see {@link SocialLinks} - Social media icons with links`,methods:[],displayName:"Description"};function C(){const n=z.filter(t=>!("align"in t&&t.align==="right"));return e.jsx("nav",{className:"hidden lg:col-span-1 lg:block","aria-label":"Links rápidos do rodapé",children:e.jsxs(f.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[e.jsx("h4",{className:"mb-6 text-lg font-semibold text-white",children:"Links Rápidos"}),e.jsx("ul",{className:"space-y-3",children:n.map(t=>{const a="disabled"in t&&t.disabled===!0;return e.jsx("li",{children:e.jsx(R,{href:t.url,onClick:s=>a&&s.preventDefault(),className:"text-gray-300 transition-colors duration-300 hover:text-purple-500 aria-disabled:cursor-not-allowed aria-disabled:text-gray-500 aria-disabled:hover:text-gray-500","aria-disabled":a,children:t.text})},t.url)})})]})})}C.__docgenInfo={description:`Footer quick links section with site navigation.

Displays vertical list of navigation links (filtered to exclude right-aligned links
like "Processo Seletivo"). Includes hover effects and disabled link support.

Hidden on mobile, visible on large screens (lg:col-span-1 lg:block).
Animation: Fade up on scroll with 0.1s delay.

@example
// Used in Footer component
<QuickLinks />

@see {@link navigationLinks} - Centralized navigation data from @/lib/navigation`,methods:[],displayName:"QuickLinks"};function o(){return e.jsx("footer",{className:"border-t border-purple-500/20 bg-linear-to-t from-zinc-950 to-zinc-900",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12",children:[e.jsx(L,{}),e.jsx(C,{}),e.jsx(w,{})]}),e.jsx(j,{})]})})}o.__docgenInfo={description:`Main footer component with multi-column layout and gradient background.

Layout structure:
- Description: Logo, company description, social links
- QuickLinks: Navigation links (Sobre, Serviços, Projetos, etc.)
- ContactInfo: Email, phone, address
- Copyright: Bottom copyright text

Responsive grid: 1 column on mobile, 4 columns on lg+ screens.
Border-top with purple gradient for visual separation from page content.

@example
// Usage in root layout
<main>{children}</main>
<Footer />

@see {@link Description} - Logo and company description sub-component
@see {@link QuickLinks} - Navigation links sub-component
@see {@link ContactInfo} - Contact details sub-component
@see {@link Copyright} - Copyright notice sub-component`,methods:[],displayName:"Footer"};const pe={title:"Layout/Footer",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"]},m={render:()=>e.jsxs("div",{className:"min-h-screen bg-zinc-900 flex flex-col",children:[e.jsxs("div",{className:"flex-1 px-8 py-16",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Page Content"}),e.jsx("p",{className:"text-gray-300",children:"Scroll down to see the footer at the bottom of the page."})]}),e.jsx(o,{})]})},p={render:()=>e.jsx(o,{})},u={parameters:{viewport:{defaultViewport:"mobile1"}},render:()=>e.jsx("div",{className:"bg-zinc-900",children:e.jsx(o,{})})},h={parameters:{viewport:{defaultViewport:"tablet"}},render:()=>e.jsx("div",{className:"bg-zinc-900",children:e.jsx(o,{})})},x={parameters:{viewport:{defaultViewport:"desktop"}},render:()=>e.jsx("div",{className:"bg-zinc-900",children:e.jsx(o,{})})},g={render:()=>e.jsxs("div",{className:"min-h-screen bg-zinc-900 flex flex-col",children:[e.jsx("div",{className:"flex-1 px-8 py-32",children:e.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[e.jsx("h1",{className:"text-5xl font-bold text-white",children:"TecnoJr Website"}),e.jsx("p",{className:"text-xl text-gray-300 leading-relaxed",children:"A comprehensive digital presence for UESC's Computer Science Junior Enterprise. This page demonstrates how the footer integrates with page content."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mt-12",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-white",children:"Footer Features"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 space-y-2",children:[e.jsx("li",{children:"Company logo and description"}),e.jsx("li",{children:"Social media links"}),e.jsx("li",{children:"Quick navigation links"}),e.jsx("li",{children:"Contact information (email, address, phone)"}),e.jsx("li",{children:"Copyright notice with dynamic year"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-white",children:"Responsive Layout"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 space-y-2",children:[e.jsx("li",{children:"Mobile: Single column, stacked sections"}),e.jsx("li",{children:"Tablet: 2-column grid"}),e.jsx("li",{children:"Desktop: 4-column grid layout"}),e.jsx("li",{children:"Gradient background with purple accent"}),e.jsx("li",{children:"Fade-in animations on scroll"})]})]})]}),e.jsxs("div",{className:"mt-16 p-8 border border-purple-500/20 rounded-xl bg-zinc-800/50",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Footer Structure"}),e.jsxs("div",{className:"text-gray-300 space-y-2 text-sm font-mono",children:[e.jsx("p",{children:"<Footer> (4-column grid on desktop, responsive stacking)"}),e.jsx("p",{className:"ml-4",children:"├─ Description (Logo + Mission + Social)"}),e.jsx("p",{className:"ml-4",children:"├─ QuickLinks (Navigation links)"}),e.jsx("p",{className:"ml-4",children:"├─ ContactInfo (Email + Address + Phone, spans 2 cols)"}),e.jsx("p",{className:"ml-4",children:"└─ Copyright (Full width, top border)"})]})]})]})}),e.jsx(o,{})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-zinc-900 flex flex-col">
      <div className="flex-1 px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Page Content</h1>
        <p className="text-gray-300">
          Scroll down to see the footer at the bottom of the page.
        </p>
      </div>
      <Footer />
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Footer />
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: () => <div className="bg-zinc-900">
      <Footer />
    </div>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tablet"
    }
  },
  render: () => <div className="bg-zinc-900">
      <Footer />
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  },
  render: () => <div className="bg-zinc-900">
      <Footer />
    </div>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-zinc-900 flex flex-col">
      <div className="flex-1 px-8 py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-bold text-white">TecnoJr Website</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A comprehensive digital presence for UESC's Computer Science Junior
            Enterprise. This page demonstrates how the footer integrates with
            page content.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Footer Features
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Company logo and description</li>
                <li>Social media links</li>
                <li>Quick navigation links</li>
                <li>Contact information (email, address, phone)</li>
                <li>Copyright notice with dynamic year</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Responsive Layout
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Mobile: Single column, stacked sections</li>
                <li>Tablet: 2-column grid</li>
                <li>Desktop: 4-column grid layout</li>
                <li>Gradient background with purple accent</li>
                <li>Fade-in animations on scroll</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 p-8 border border-purple-500/20 rounded-xl bg-zinc-800/50">
            <h3 className="text-xl font-semibold text-white mb-4">
              Footer Structure
            </h3>
            <div className="text-gray-300 space-y-2 text-sm font-mono">
              <p>
                &lt;Footer&gt; (4-column grid on desktop, responsive stacking)
              </p>
              <p className="ml-4">├─ Description (Logo + Mission + Social)</p>
              <p className="ml-4">├─ QuickLinks (Navigation links)</p>
              <p className="ml-4">
                ├─ ContactInfo (Email + Address + Phone, spans 2 cols)
              </p>
              <p className="ml-4">└─ Copyright (Full width, top border)</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
}`,...g.parameters?.docs?.source}}};const ue=["Default","FooterOnly","MobileFooter","TabletFooter","DesktopFooter","WithPageContent"];export{m as Default,x as DesktopFooter,p as FooterOnly,u as MobileFooter,h as TabletFooter,g as WithPageContent,ue as __namedExportsOrder,pe as default};
