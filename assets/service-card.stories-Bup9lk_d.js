import{j as a}from"./jsx-runtime-DVhjNUKw.js";import{B as u}from"./base-card-DUaPzh0v.js";import{c as d}from"./createLucideIcon-B_DZViE8.js";import"./iframe-CTDfU54N.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./card-D1V7v4Y_.js";const h=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],c=d("code",h);const b=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],p=d("megaphone",b);const S=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],l=d("smartphone",S);function s({icon:m,title:g,description:v}){return a.jsx(u,{icon:m,title:g,description:v,variant:"centered",iconSize:"lg",iconGradient:"diagonal",glowEffect:!1,iconRotate:!0})}s.__docgenInfo={description:`Service card component displaying TecnoJR's service offerings.

Refactored to use BaseCard with centered layout and icon rotation
on hover. Optimized for services section showcasing what TecnoJR provides.

@param icon - Lucide React icon component
@param title - Service name (e.g., "Web Development")
@param description - Service description

@returns Rendered service card with centered layout

@example
\`\`\`tsx
import { Code } from 'lucide-react';
import { ServiceCard } from '@/components/ui/cards/service-card';

<ServiceCard
  icon={Code}
  title="Web Development"
  description="Custom websites and web applications"
/>
\`\`\`

@example
\`\`\`tsx
// Using with data from lib/services.ts
import { services } from '@/lib/services';

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {services.map((service) => (
    <ServiceCard
      key={service.title}
      icon={service.icon}
      title={service.title}
      description={service.description}
    />
  ))}
</div>
\`\`\`

@see {@link BaseCard} for underlying component
@see {@link ../../../lib/services.ts} for service data`,methods:[],displayName:"ServiceCard"};const M={title:"UI/Cards/ServiceCard",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`ServiceCard displays TecnoJR's service offerings with centered layout.

Used in the Services section to showcase what TecnoJR provides.
Features icon rotation on hover and glassmorphic styling.`}}},argTypes:{icon:{description:"Lucide React icon component",control:!1},title:{control:"text",description:"Service name"},description:{control:"text",description:"Service description"}}},e={args:{icon:c,title:"Web Development",description:"Custom websites and web applications built with modern technologies."}},i={args:{icon:l,title:"Mobile Development",description:"Native and cross-platform mobile applications for iOS and Android."}},n={args:{icon:p,title:"Digital Marketing",description:"SEO, social media management, and content marketing strategies."}},t={render:()=>a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl",children:[a.jsx(s,{icon:c,title:"Web Development",description:"Custom websites and web applications built with modern technologies."}),a.jsx(s,{icon:l,title:"Mobile Development",description:"Native and cross-platform mobile applications for iOS and Android."}),a.jsx(s,{icon:p,title:"Digital Marketing",description:"SEO, social media management, and content marketing strategies."})]})},o={args:{icon:c,title:"Full-Stack Web Development",description:"We provide end-to-end web development services including frontend interfaces with React and Next.js, backend APIs with Node.js and Python, database design and optimization, cloud deployment on AWS and Vercel, and ongoing maintenance and support."}},r={args:{icon:c,title:"Consulting",description:"Expert technical advice."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies."
  }
}`,...e.parameters?.docs?.source},description:{story:"Default service card - Web Development.",...e.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android."
  }
}`,...i.parameters?.docs?.source},description:{story:"Mobile development service card.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, social media management, and content marketing strategies."
  }
}`,...n.parameters?.docs?.source},description:{story:"Digital marketing service card.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
      <ServiceCard icon={Code} title="Web Development" description="Custom websites and web applications built with modern technologies." />
      <ServiceCard icon={Smartphone} title="Mobile Development" description="Native and cross-platform mobile applications for iOS and Android." />
      <ServiceCard icon={Megaphone} title="Digital Marketing" description="SEO, social media management, and content marketing strategies." />
    </div>
}`,...t.parameters?.docs?.source},description:{story:`Multiple service cards in a grid layout.
Shows centered alignment and spacing.`,...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "We provide end-to-end web development services including frontend interfaces with React and Next.js, backend APIs with Node.js and Python, database design and optimization, cloud deployment on AWS and Vercel, and ongoing maintenance and support."
  }
}`,...o.parameters?.docs?.source},description:{story:"Service card with long description.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Code,
    title: "Consulting",
    description: "Expert technical advice."
  }
}`,...r.parameters?.docs?.source},description:{story:"Service card with minimal content.",...r.parameters?.docs?.description}}};const N=["Default","MobileDevelopment","DigitalMarketing","ServiceGrid","LongDescription","Minimal"];export{e as Default,n as DigitalMarketing,o as LongDescription,r as Minimal,i as MobileDevelopment,t as ServiceGrid,N as __namedExportsOrder,M as default};
