import{j as e}from"./jsx-runtime-DVhjNUKw.js";import{L as s,n as l}from"./link-B0djyyxq.js";import{C as c,a as p,b as d,c as m,d as g}from"./card-D1V7v4Y_.js";import{c as j}from"./createLucideIcon-B_DZViE8.js";const u=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],f=j("external-link",u);function h({title:n,description:o,imageSrc:i,link:r,isInternal:t=!1}){const a=e.jsxs("article",{className:"group relative h-full",children:[e.jsx("div",{className:"absolute -inset-px rounded-2xl gradient-tecno-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"}),e.jsxs(c,{className:"relative pt-0 h-full overflow-hidden border-gray-800/50 bg-linear-to-b! from-gray-900/80! to-gray-900/60! backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-brand-primary/30",children:[e.jsxs("div",{className:"relative h-48 w-full overflow-hidden",children:[e.jsx(l,{src:i,alt:n,fill:!0,className:"object-cover transition-transform duration-300 group-hover:scale-105"}),e.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent"}),r&&e.jsx("div",{className:`absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${t?"border-brand-primary/20 bg-brand-primary/10 text-brand-primary":"border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary"}`,children:t?"Interno":"Cliente"})]}),e.jsx(p,{children:e.jsxs(d,{className:"flex items-center justify-between text-white transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:bg-clip-text group-hover:text-transparent",children:[e.jsx("span",{children:n}),r&&!t&&e.jsx(f,{className:"h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-brand-primary"})]})}),e.jsx(m,{children:e.jsx(g,{className:"line-clamp-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-300",children:o})})]})]});return r&&!t?e.jsx(s,{href:r,target:"_blank",rel:"noopener noreferrer",className:"block h-full",children:a}):a}h.__docgenInfo={description:`Project card component displaying portfolio projects.

Shows project thumbnail, title, description, and type badge (Client/Internal).
For external projects with links, renders as clickable link opening in new tab.
Features gradient glow on hover and smooth scale animation.

@param title - Project name
@param description - Brief project description
@param imageSrc - Image filename (loads from /public/assets/img/projects/)
@param link - Project URL (optional)
@param isInternal - True for internal projects, false for client projects (default: false)

@returns Rendered project card, wrapped in Link if external project

@example
\`\`\`tsx
import { ProjectCard } from '@/components/ui/cards/project-card';

// External client project
<ProjectCard
  title="NASA Space Apps"
  description="Website for NASA Space Apps Challenge"
  imageSrc="/assets/img/projects/nasaapps.png"
  link="https://nasa.spaceterra.org/"
  isInternal={false}
/>

// Internal project (no external link)
<ProjectCard
  title="COLCIC UESC"
  description="Internal tool for university"
  imageSrc="/assets/img/projects/colcic.png"
  link="https://colcic.vercel.app"
  isInternal={true}
/>
\`\`\`

@example
\`\`\`tsx
// Using with data from lib/projects.ts
import { externalProjects } from '@/lib/projects';

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {externalProjects.map((project) => (
    <ProjectCard
      key={project.title}
      title={project.title}
      description={project.description}
      imageSrc={\`/assets/img/projects/\${project.img}\`}
      link={project.link}
      isInternal={false}
    />
  ))}
</div>
\`\`\`

@see {@link ../../../lib/projects.ts} for project data
@see {@link ../../../lib/types.ts} for ExternalProject and InternalProject types`,methods:[],displayName:"ProjectCard",props:{title:{required:!0,tsType:{name:"string"},description:"Project title"},description:{required:!0,tsType:{name:"string"},description:"Project description"},imageSrc:{required:!0,tsType:{name:"string"},description:"Path to project image in /public/assets/img/projects/"},link:{required:!1,tsType:{name:"string"},description:"Optional link to project (external URL or internal route)"},isInternal:{required:!1,tsType:{name:"boolean"},description:"Whether project is internal (TecnoJR member project) or external (client project)",defaultValue:{value:"false",computed:!1}}}};export{h as P};
