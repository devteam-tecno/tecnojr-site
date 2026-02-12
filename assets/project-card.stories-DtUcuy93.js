import{j as e}from"./jsx-runtime-DVhjNUKw.js";import{P as t}from"./project-card-CNaSLAju.js";import"./iframe-CTDfU54N.js";import"./preload-helper-PPVm8Dsz.js";import"./link-B0djyyxq.js";import"./card-D1V7v4Y_.js";import"./utils-CDN07tui.js";import"./createLucideIcon-B_DZViE8.js";const h={title:"UI/Cards/ProjectCard",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`ProjectCard displays portfolio projects with image, title, description, and type badge.

Used in the Projects section to showcase TecnoJR's work.
Differentiates between client projects (external) and internal projects.
External projects with links open in new tabs.`}}},argTypes:{title:{control:"text",description:"Project name"},description:{control:"text",description:"Project description"},imageSrc:{control:"text",description:"Image path in /public/assets/img/projects/"},link:{control:"text",description:"Project URL (optional)"},isInternal:{control:"boolean",description:"Is this an internal TecnoJR project?"}}},r={args:{title:"NASA Space Apps",description:"Website for NASA Space Apps Challenge hackathon event.",imageSrc:"/assets/img/projects/nasaapps.png",link:"https://nasa.spaceterra.org/",isInternal:!1}},s={args:{title:"COLCIC UESC",description:"Internal management tool for university computer science department.",imageSrc:"/assets/img/projects/colcic.png",link:"https://colcic.vercel.app",isInternal:!0}},a={args:{title:"Corporate Website",description:"Modern corporate website with custom CMS and analytics.",imageSrc:"/assets/img/projects/simmbra.png",isInternal:!1}},i={args:{title:"E-commerce Platform",description:"Complete e-commerce solution with product catalog, shopping cart, payment integration with Stripe and PayPal, inventory management system, customer reviews and ratings, real-time order tracking, and admin dashboard with analytics.",imageSrc:"/assets/img/projects/guiaserve.png",link:"https://guiaserve.com.br",isInternal:!1}},n={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl",children:[e.jsx(t,{title:"NASA Space Apps",description:"Website for NASA Space Apps Challenge hackathon event.",imageSrc:"/assets/img/projects/nasaapps.png",link:"https://nasa.spaceterra.org/",isInternal:!1}),e.jsx(t,{title:"COLCIC UESC",description:"Internal management tool for university.",imageSrc:"/assets/img/projects/colcic.png",link:"https://colcic.vercel.app",isInternal:!0}),e.jsx(t,{title:"SIMMBRA",description:"Corporate website for agricultural company.",imageSrc:"/assets/img/projects/simmbra.png",link:"https://simmbra.com.br",isInternal:!1}),e.jsx(t,{title:"GuiaServe",description:"Web platform and mobile app for local services.",imageSrc:"/assets/img/projects/guiaserve.png",link:"https://guiaserve.com.br",isInternal:!1}),e.jsx(t,{title:"Ferramentas UESC",description:"Internal productivity tools for students.",imageSrc:"/assets/img/projects/ferramentasuesc.png",link:"https://uesc.ilrocha.com/",isInternal:!0}),e.jsx(t,{title:"Space Terra",description:"Platform for space-themed hackathon events.",imageSrc:"/assets/img/projects/spaceterra.jpg",link:"https://spaceterra.org/",isInternal:!1})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "NASA Space Apps",
    description: "Website for NASA Space Apps Challenge hackathon event.",
    imageSrc: "/assets/img/projects/nasaapps.png",
    link: "https://nasa.spaceterra.org/",
    isInternal: false
  }
}`,...r.parameters?.docs?.source},description:{story:"External client project with link.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "COLCIC UESC",
    description: "Internal management tool for university computer science department.",
    imageSrc: "/assets/img/projects/colcic.png",
    link: "https://colcic.vercel.app",
    isInternal: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Internal TecnoJR member project.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Corporate Website",
    description: "Modern corporate website with custom CMS and analytics.",
    imageSrc: "/assets/img/projects/simmbra.png",
    isInternal: false
  }
}`,...a.parameters?.docs?.source},description:{story:"Project without link.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "E-commerce Platform",
    description: "Complete e-commerce solution with product catalog, shopping cart, payment integration with Stripe and PayPal, inventory management system, customer reviews and ratings, real-time order tracking, and admin dashboard with analytics.",
    imageSrc: "/assets/img/projects/guiaserve.png",
    link: "https://guiaserve.com.br",
    isInternal: false
  }
}`,...i.parameters?.docs?.source},description:{story:"Project with long description.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
      <ProjectCard title="NASA Space Apps" description="Website for NASA Space Apps Challenge hackathon event." imageSrc="/assets/img/projects/nasaapps.png" link="https://nasa.spaceterra.org/" isInternal={false} />
      <ProjectCard title="COLCIC UESC" description="Internal management tool for university." imageSrc="/assets/img/projects/colcic.png" link="https://colcic.vercel.app" isInternal={true} />
      <ProjectCard title="SIMMBRA" description="Corporate website for agricultural company." imageSrc="/assets/img/projects/simmbra.png" link="https://simmbra.com.br" isInternal={false} />
      <ProjectCard title="GuiaServe" description="Web platform and mobile app for local services." imageSrc="/assets/img/projects/guiaserve.png" link="https://guiaserve.com.br" isInternal={false} />
      <ProjectCard title="Ferramentas UESC" description="Internal productivity tools for students." imageSrc="/assets/img/projects/ferramentasuesc.png" link="https://uesc.ilrocha.com/" isInternal={true} />
      <ProjectCard title="Space Terra" description="Platform for space-themed hackathon events." imageSrc="/assets/img/projects/spaceterra.jpg" link="https://spaceterra.org/" isInternal={false} />
    </div>
}`,...n.parameters?.docs?.source},description:{story:`Multiple project cards in a grid layout.
Shows mix of external and internal projects.`,...n.parameters?.docs?.description}}};const j=["ExternalProject","InternalProject","WithoutLink","LongDescription","ProjectGrid"];export{r as ExternalProject,s as InternalProject,i as LongDescription,n as ProjectGrid,a as WithoutLink,j as __namedExportsOrder,h as default};
