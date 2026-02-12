import{j as e}from"./jsx-runtime-DVhjNUKw.js";import{b as g}from"./iframe-CTDfU54N.js";import{c as x}from"./index-B_jtOnfb.js";import{c as f}from"./utils-CDN07tui.js";import"./preload-helper-PPVm8Dsz.js";const h=x("inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer select-none",{variants:{variant:{default:"bg-secondary text-secondary-foreground hover:bg-secondary/80",active:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",outline:"border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function n({children:t,active:r=!1,onClick:s,className:l,variant:a}){const i=r?"active":a;return e.jsx("button",{type:"button",onClick:s,className:f(h({variant:i}),l),children:t})}n.__docgenInfo={description:"",methods:[],displayName:"FilterPill",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const T={title:"UI/FilterPill",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","active","outline"]}}},c={args:{children:"All Projects"}},o={args:{children:"Active Filter",active:!0}},d={args:{children:"Outline Variant",variant:"outline"}},m={args:{children:"Filter"},render:()=>{const[t,r]=g.useState("all"),s=["all","web","mobile","design","marketing"];return e.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(l=>e.jsx(n,{active:t===l,onClick:()=>r(l),children:l.charAt(0).toUpperCase()+l.slice(1)},l))})}},p={args:{children:"All Projects"},render:()=>{const[t,r]=g.useState("all");return e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Filter Projects"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(n,{active:t==="all",onClick:()=>r("all"),children:"All Projects"}),e.jsx(n,{active:t==="external",onClick:()=>r("external"),children:"External"}),e.jsx(n,{active:t==="internal",onClick:()=>r("internal"),children:"Internal"}),e.jsx(n,{variant:"outline",onClick:()=>r("all"),children:"Reset Filters"})]}),e.jsx("div",{className:"mt-6 p-4 border rounded-lg",children:e.jsxs("p",{className:"text-muted-foreground",children:["Showing: ",e.jsx("span",{className:"font-semibold",children:t})," ","projects"]})})]})}},u={args:{children:"React"},render:()=>{const[t,r]=g.useState([]),s=["React","Next.js","TypeScript","Tailwind","Node.js"],l=a=>{r(i=>i.includes(a)?i.filter(v=>v!==a):[...i,a])};return e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Select Technologies"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(a=>e.jsx(n,{active:t.includes(a),onClick:()=>l(a),children:a},a))}),t.length>0&&e.jsx("div",{className:"mt-6 p-4 border rounded-lg",children:e.jsxs("p",{className:"text-muted-foreground",children:["Selected: ",t.join(", ")]})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "All Projects"
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Active Filter",
    active: true
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Outline Variant",
    variant: "outline"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Filter"
  },
  render: () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const filters = ["all", "web", "mobile", "design", "marketing"];
    return <div className="flex flex-wrap gap-2">
        {filters.map(filter => <FilterPill key={filter} active={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </FilterPill>)}
      </div>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "All Projects"
  },
  render: () => {
    const [activeFilter, setActiveFilter] = useState("all");
    return <div className="max-w-2xl">
        <h3 className="mb-4 text-lg font-semibold">Filter Projects</h3>
        <div className="flex flex-wrap gap-2">
          <FilterPill active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>
            All Projects
          </FilterPill>
          <FilterPill active={activeFilter === "external"} onClick={() => setActiveFilter("external")}>
            External
          </FilterPill>
          <FilterPill active={activeFilter === "internal"} onClick={() => setActiveFilter("internal")}>
            Internal
          </FilterPill>
          <FilterPill variant="outline" onClick={() => setActiveFilter("all")}>
            Reset Filters
          </FilterPill>
        </div>
        <div className="mt-6 p-4 border rounded-lg">
          <p className="text-muted-foreground">
            Showing: <span className="font-semibold">{activeFilter}</span>{" "}
            projects
          </p>
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "React"
  },
  render: () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const tags = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"];
    const toggleTag = (tag: string) => {
      setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    };
    return <div className="max-w-2xl">
        <h3 className="mb-4 text-lg font-semibold">Select Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => <FilterPill key={tag} active={selectedTags.includes(tag)} onClick={() => toggleTag(tag)}>
              {tag}
            </FilterPill>)}
        </div>
        {selectedTags.length > 0 && <div className="mt-6 p-4 border rounded-lg">
            <p className="text-muted-foreground">
              Selected: {selectedTags.join(", ")}
            </p>
          </div>}
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const y=["Default","Active","Outline","FilterGroup","ProjectFilters","TechnologyTags"];export{o as Active,c as Default,m as FilterGroup,d as Outline,p as ProjectFilters,u as TechnologyTags,y as __namedExportsOrder,T as default};
