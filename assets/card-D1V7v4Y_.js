import{j as r}from"./jsx-runtime-DVhjNUKw.js";import{c as t}from"./utils-CDN07tui.js";function n({as:e="div",className:a,...d}){return r.jsx(e,{"data-slot":"card",className:t("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...d})}function o({className:e,...a}){return r.jsx("div",{"data-slot":"card-header",className:t("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...a})}function s({className:e,...a}){return r.jsx("div",{"data-slot":"card-title",className:t("leading-none font-semibold",e),...a})}function i({className:e,...a}){return r.jsx("div",{"data-slot":"card-description",className:t("text-muted-foreground text-sm",e),...a})}function c({className:e,...a}){return r.jsx("div",{"data-slot":"card-content",className:t("px-6",e),...a})}n.__docgenInfo={description:`Primitive card container for building custom card layouts.

This base Card component provides consistent border, shadow, and padding.
Use with CardHeader, CardTitle, CardDescription, CardContent for structured layouts.

For specialized cards with specific styling, see:
- \`FeatureCard\` for features section
- \`ServiceCard\` for services section
- \`ProjectCard\` for project showcase

@example
Basic card: Card with CardHeader (containing CardTitle and CardDescription) and CardContent.

@example
Card with action: Use CardAction within CardHeader for buttons or links.`,methods:[],displayName:"Card",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:'"div"',computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};s.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};i.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};c.__docgenInfo={description:"",methods:[],displayName:"CardContent"};export{n as C,o as a,s as b,c,i as d};
