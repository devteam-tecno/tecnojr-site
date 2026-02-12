import{j as e}from"./jsx-runtime-DVhjNUKw.js";import{U as l,Z as d,R as m,T as p,F as c}from"./feature-card-DAM4NrpT.js";import"./iframe-CTDfU54N.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B_DZViE8.js";import"./base-card-DUaPzh0v.js";import"./utils-CDN07tui.js";import"./card-D1V7v4Y_.js";const w={title:"UI/Cards/FeatureCard",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`FeatureCard displays company features/differentiators with icon, title, and description.

Used in the Features section to showcase what makes TecnoJR unique.
Features gradient glow effect on hover and smooth animations.`}}},argTypes:{icon:{description:"Lucide React icon component",control:!1},title:{control:"text",description:"Feature title"},description:{control:"text",description:"Feature description"}}},t={args:{icon:d,title:"Lightning Fast",description:"Optimized for speed and performance with cutting-edge technology."}},i={args:{icon:m,title:"Innovation First",description:"Always using the latest technologies and best practices."}},o={args:{icon:p,title:"Pixel Perfect",description:"Attention to detail in every aspect of design and development."}},r={args:{icon:l,title:"Team Collaboration",description:"Working together to deliver exceptional results."}},n={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl",children:[e.jsx(c,{icon:d,title:"Lightning Fast",description:"Optimized for speed and performance with cutting-edge technology."}),e.jsx(c,{icon:m,title:"Innovation First",description:"Always using the latest technologies and best practices."}),e.jsx(c,{icon:p,title:"Pixel Perfect",description:"Attention to detail in every aspect of design and development."}),e.jsx(c,{icon:l,title:"Team Collaboration",description:"Working together to deliver exceptional results."})]})},a={args:{icon:d,title:"Advanced Technology Stack",description:"We utilize the most modern and efficient technology stack available, including Next.js, React, TypeScript, and Tailwind CSS. Our development process ensures scalability, maintainability, and exceptional performance across all devices and platforms."}},s={args:{icon:p,title:"Focus",description:"Quality over quantity."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance with cutting-edge technology."
  }
}`,...t.parameters?.docs?.source},description:{story:"Default feature card with lightning icon.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Rocket,
    title: "Innovation First",
    description: "Always using the latest technologies and best practices."
  }
}`,...i.parameters?.docs?.source},description:{story:"Feature card with rocket icon - innovation theme.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Target,
    title: "Pixel Perfect",
    description: "Attention to detail in every aspect of design and development."
  }
}`,...o.parameters?.docs?.source},description:{story:"Feature card with target icon - precision theme.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Users,
    title: "Team Collaboration",
    description: "Working together to deliver exceptional results."
  }
}`,...r.parameters?.docs?.source},description:{story:"Feature card with users icon - collaboration theme.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      <FeatureCard icon={Zap} title="Lightning Fast" description="Optimized for speed and performance with cutting-edge technology." />
      <FeatureCard icon={Rocket} title="Innovation First" description="Always using the latest technologies and best practices." />
      <FeatureCard icon={Target} title="Pixel Perfect" description="Attention to detail in every aspect of design and development." />
      <FeatureCard icon={Users} title="Team Collaboration" description="Working together to deliver exceptional results." />
    </div>
}`,...n.parameters?.docs?.source},description:{story:`Multiple feature cards in a grid layout.
Shows how cards look when displayed together.`,...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Zap,
    title: "Advanced Technology Stack",
    description: "We utilize the most modern and efficient technology stack available, including Next.js, React, TypeScript, and Tailwind CSS. Our development process ensures scalability, maintainability, and exceptional performance across all devices and platforms."
  }
}`,...a.parameters?.docs?.source},description:{story:`Feature card with longer description text.
Tests how the component handles more content.`,...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Target,
    title: "Focus",
    description: "Quality over quantity."
  }
}`,...s.parameters?.docs?.source},description:{story:"Feature card with short title and description.",...s.parameters?.docs?.description}}};const T=["Default","Innovation","Precision","Collaboration","FeatureGrid","LongDescription","Minimal"];export{r as Collaboration,t as Default,n as FeatureGrid,i as Innovation,a as LongDescription,s as Minimal,o as Precision,T as __namedExportsOrder,w as default};
