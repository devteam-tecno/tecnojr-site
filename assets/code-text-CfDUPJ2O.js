import{j as t}from"./jsx-runtime-DVhjNUKw.js";import{c as o}from"./utils-CDN07tui.js";function s({children:e,className:n}){return t.jsx("code",{className:o("rounded bg-muted px-2 py-1 font-mono text-sm font-semibold",n),children:e})}s.__docgenInfo={description:`Inline code snippet display component with monospace font and background.

Styled with muted background, rounded corners, and semantic font-mono.
Use for inline code references, command snippets, or technical terms.

@example
// Basic inline code
<p>Run <CodeText>npm install</CodeText> to install dependencies.</p>

@example
// Variable or function name
<p>The <CodeText>useState</CodeText> hook manages component state.</p>

@example
// With custom styling
<CodeText className="text-tecno-purple-500">@/lib/utils</CodeText>

@example
// In documentation or error messages
<div>
  <p>Import the utility:</p>
  <CodeText>import {{ cn }} from "@/lib/utils"</CodeText>
</div>`,methods:[],displayName:"CodeText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{s as C};
