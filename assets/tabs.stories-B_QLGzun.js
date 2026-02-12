import{j as n}from"./jsx-runtime-DVhjNUKw.js";import{F as L,Z as Se,R as ye,T as we,U as Re}from"./feature-card-DAM4NrpT.js";import{P as X}from"./project-card-CNaSLAju.js";import{c as Ae}from"./index-B_jtOnfb.js";import{c as K}from"./utils-CDN07tui.js";import{b as o,R,h as ee}from"./iframe-CTDfU54N.js";import{c as H,u as z}from"./index-CpisRUSc.js";import"./index-B0f_SlLK.js";import"./createLucideIcon-B_DZViE8.js";import"./base-card-DUaPzh0v.js";import"./card-D1V7v4Y_.js";import"./link-B0djyyxq.js";import"./preload-helper-PPVm8Dsz.js";var Ee=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],P=Ee.reduce((e,t)=>{const a=H(`Primitive.${t}`),r=o.forwardRef((s,l)=>{const{asChild:c,...u}=s,m=c?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),n.jsx(m,{...u,ref:l})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Z(e,t=[]){let a=[];function r(l,c){const u=o.createContext(c),m=a.length;a=[...a,c];const f=d=>{const{scope:g,children:v,...N}=d,x=g?.[e]?.[m]||u,p=o.useMemo(()=>N,Object.values(N));return n.jsx(x.Provider,{value:p,children:v})};f.displayName=l+"Provider";function i(d,g){const v=g?.[e]?.[m]||u,N=o.useContext(v);if(N)return N;if(c!==void 0)return c;throw new Error(`\`${d}\` must be used within \`${l}\``)}return[f,i]}const s=()=>{const l=a.map(c=>o.createContext(c));return function(u){const m=u?.[e]||l;return o.useMemo(()=>({[`__scope${e}`]:{...u,[e]:m}}),[u,m])}};return s.scopeName=e,[r,Pe(s,...t)]}function Pe(...e){const t=e[0];if(e.length===1)return t;const a=()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(l){const c=r.reduce((u,{useScope:m,scopeName:f})=>{const d=m(l)[`__scope${f}`];return{...u,...d}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return a.scopeName=t.scopeName,a}function _e(e){const t=e+"CollectionProvider",[a,r]=Z(t),[s,l]=a(t,{collectionRef:{current:null},itemMap:new Map}),c=x=>{const{scope:p,children:T}=x,j=R.useRef(null),b=R.useRef(new Map).current;return n.jsx(s,{scope:p,itemMap:b,collectionRef:j,children:T})};c.displayName=t;const u=e+"CollectionSlot",m=H(u),f=R.forwardRef((x,p)=>{const{scope:T,children:j}=x,b=l(u,T),h=z(p,b.collectionRef);return n.jsx(m,{ref:h,children:j})});f.displayName=u;const i=e+"CollectionItemSlot",d="data-radix-collection-item",g=H(i),v=R.forwardRef((x,p)=>{const{scope:T,children:j,...b}=x,h=R.useRef(null),A=z(p,h),E=l(i,T);return R.useEffect(()=>(E.itemMap.set(h,{ref:h,...b}),()=>{E.itemMap.delete(h)})),n.jsx(g,{[d]:"",ref:A,children:j})});v.displayName=i;function N(x){const p=l(e+"CollectionConsumer",x);return R.useCallback(()=>{const j=p.collectionRef.current;if(!j)return[];const b=Array.from(j.querySelectorAll(`[${d}]`));return Array.from(p.itemMap.values()).sort((E,O)=>b.indexOf(E.ref.current)-b.indexOf(O.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:c,Slot:f,ItemSlot:v},N,r]}function y(e,t,{checkForDefaultPrevented:a=!0}={}){return function(s){if(e?.(s),a===!1||!s.defaultPrevented)return t?.(s)}}var G=globalThis?.document?o.useLayoutEffect:()=>{},Fe=ee[" useInsertionEffect ".trim().toString()]||G;function te({prop:e,defaultProp:t,onChange:a=()=>{},caller:r}){const[s,l,c]=Me({defaultProp:t,onChange:a}),u=e!==void 0,m=u?e:s;{const i=o.useRef(e!==void 0);o.useEffect(()=>{const d=i.current;d!==u&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),i.current=u},[u,r])}const f=o.useCallback(i=>{if(u){const d=Oe(i)?i(e):i;d!==e&&c.current?.(d)}else l(i)},[u,e,l,c]);return[m,f]}function Me({defaultProp:e,onChange:t}){const[a,r]=o.useState(e),s=o.useRef(a),l=o.useRef(t);return Fe(()=>{l.current=t},[t]),o.useEffect(()=>{s.current!==a&&(l.current?.(a),s.current=a)},[a,s]),[a,r,l]}function Oe(e){return typeof e=="function"}function Le(e,t){return o.useReducer((a,r)=>t[a][r]??a,e)}var ne=e=>{const{present:t,children:a}=e,r=De(t),s=typeof a=="function"?a({present:r.isPresent}):o.Children.only(a),l=z(r.ref,ke(s));return typeof a=="function"||r.isPresent?o.cloneElement(s,{ref:l}):null};ne.displayName="Presence";function De(e){const[t,a]=o.useState(),r=o.useRef(null),s=o.useRef(e),l=o.useRef("none"),c=e?"mounted":"unmounted",[u,m]=Le(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const f=D(r.current);l.current=u==="mounted"?f:"none"},[u]),G(()=>{const f=r.current,i=s.current;if(i!==e){const g=l.current,v=D(f);e?m("MOUNT"):v==="none"||f?.display==="none"?m("UNMOUNT"):m(i&&g!==v?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,m]),G(()=>{if(t){let f;const i=t.ownerDocument.defaultView??window,d=v=>{const x=D(r.current).includes(CSS.escape(v.animationName));if(v.target===t&&x&&(m("ANIMATION_END"),!s.current)){const p=t.style.animationFillMode;t.style.animationFillMode="forwards",f=i.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=p)})}},g=v=>{v.target===t&&(l.current=D(r.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{i.clearTimeout(f),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else m("ANIMATION_END")},[t,m]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(f=>{r.current=f?getComputedStyle(f):null,a(f)},[])}}function D(e){return e?.animationName||"none"}function ke(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}var Ue=ee[" useId ".trim().toString()]||(()=>{}),Ve=0;function ae(e){const[t,a]=o.useState(Ue());return G(()=>{a(r=>r??String(Ve++))},[e]),e||(t?`radix-${t}`:"")}var $e=o.createContext(void 0);function re(e){const t=o.useContext($e);return e||t||"ltr"}function ze(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...a)=>t.current?.(...a),[])}var q="rovingFocusGroup.onEntryFocus",Ge={bubbles:!1,cancelable:!0},F="RovingFocusGroup",[Y,oe,Ke]=_e(F),[We,se]=Z(F,[Ke]),[Be,qe]=We(F),ie=o.forwardRef((e,t)=>n.jsx(Y.Provider,{scope:e.__scopeRovingFocusGroup,children:n.jsx(Y.Slot,{scope:e.__scopeRovingFocusGroup,children:n.jsx(He,{...e,ref:t})})}));ie.displayName=F;var He=o.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,orientation:r,loop:s=!1,dir:l,currentTabStopId:c,defaultCurrentTabStopId:u,onCurrentTabStopIdChange:m,onEntryFocus:f,preventScrollOnEntryFocus:i=!1,...d}=e,g=o.useRef(null),v=z(t,g),N=re(l),[x,p]=te({prop:c,defaultProp:u??null,onChange:m,caller:F}),[T,j]=o.useState(!1),b=ze(f),h=oe(a),A=o.useRef(!1),[E,O]=o.useState(0);return o.useEffect(()=>{const C=g.current;if(C)return C.addEventListener(q,b),()=>C.removeEventListener(q,b)},[b]),n.jsx(Be,{scope:a,orientation:r,dir:N,loop:s,currentTabStopId:x,onItemFocus:o.useCallback(C=>p(C),[p]),onItemShiftTab:o.useCallback(()=>j(!0),[]),onFocusableItemAdd:o.useCallback(()=>O(C=>C+1),[]),onFocusableItemRemove:o.useCallback(()=>O(C=>C-1),[]),children:n.jsx(P.div,{tabIndex:T||E===0?-1:0,"data-orientation":r,...d,ref:v,style:{outline:"none",...e.style},onMouseDown:y(e.onMouseDown,()=>{A.current=!0}),onFocus:y(e.onFocus,C=>{const Ne=!A.current;if(C.target===C.currentTarget&&Ne&&!T){const Q=new CustomEvent(q,Ge);if(C.currentTarget.dispatchEvent(Q),!Q.defaultPrevented){const B=h().filter(w=>w.focusable),Ce=B.find(w=>w.active),je=B.find(w=>w.id===x),Ie=[Ce,je,...B].filter(Boolean).map(w=>w.ref.current);ue(Ie,i)}}A.current=!1}),onBlur:y(e.onBlur,()=>j(!1))})})}),ce="RovingFocusGroupItem",le=o.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,focusable:r=!0,active:s=!1,tabStopId:l,children:c,...u}=e,m=ae(),f=l||m,i=qe(ce,a),d=i.currentTabStopId===f,g=oe(a),{onFocusableItemAdd:v,onFocusableItemRemove:N,currentTabStopId:x}=i;return o.useEffect(()=>{if(r)return v(),()=>N()},[r,v,N]),n.jsx(Y.ItemSlot,{scope:a,id:f,focusable:r,active:s,children:n.jsx(P.span,{tabIndex:d?0:-1,"data-orientation":i.orientation,...u,ref:t,onMouseDown:y(e.onMouseDown,p=>{r?i.onItemFocus(f):p.preventDefault()}),onFocus:y(e.onFocus,()=>i.onItemFocus(f)),onKeyDown:y(e.onKeyDown,p=>{if(p.key==="Tab"&&p.shiftKey){i.onItemShiftTab();return}if(p.target!==p.currentTarget)return;const T=Je(p,i.orientation,i.dir);if(T!==void 0){if(p.metaKey||p.ctrlKey||p.altKey||p.shiftKey)return;p.preventDefault();let b=g().filter(h=>h.focusable).map(h=>h.ref.current);if(T==="last")b.reverse();else if(T==="prev"||T==="next"){T==="prev"&&b.reverse();const h=b.indexOf(p.currentTarget);b=i.loop?Qe(b,h+1):b.slice(h+1)}setTimeout(()=>ue(b))}}),children:typeof c=="function"?c({isCurrentTabStop:d,hasTabStop:x!=null}):c})})});le.displayName=ce;var Ye={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ze(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Je(e,t,a){const r=Ze(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Ye[r]}function ue(e,t=!1){const a=document.activeElement;for(const r of e)if(r===a||(r.focus({preventScroll:t}),document.activeElement!==a))return}function Qe(e,t){return e.map((a,r)=>e[(t+r)%e.length])}var Xe=ie,et=le,W="Tabs",[tt]=Z(W,[se]),de=se(),[nt,J]=tt(W),fe=o.forwardRef((e,t)=>{const{__scopeTabs:a,value:r,onValueChange:s,defaultValue:l,orientation:c="horizontal",dir:u,activationMode:m="automatic",...f}=e,i=re(u),[d,g]=te({prop:r,onChange:s,defaultProp:l??"",caller:W});return n.jsx(nt,{scope:a,baseId:ae(),value:d,onValueChange:g,orientation:c,dir:i,activationMode:m,children:n.jsx(P.div,{dir:i,"data-orientation":c,...f,ref:t})})});fe.displayName=W;var me="TabsList",pe=o.forwardRef((e,t)=>{const{__scopeTabs:a,loop:r=!0,...s}=e,l=J(me,a),c=de(a);return n.jsx(Xe,{asChild:!0,...c,orientation:l.orientation,dir:l.dir,loop:r,children:n.jsx(P.div,{role:"tablist","aria-orientation":l.orientation,...s,ref:t})})});pe.displayName=me;var ge="TabsTrigger",ve=o.forwardRef((e,t)=>{const{__scopeTabs:a,value:r,disabled:s=!1,...l}=e,c=J(ge,a),u=de(a),m=he(c.baseId,r),f=Te(c.baseId,r),i=r===c.value;return n.jsx(et,{asChild:!0,...u,focusable:!s,active:i,children:n.jsx(P.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":f,"data-state":i?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:m,...l,ref:t,onMouseDown:y(e.onMouseDown,d=>{!s&&d.button===0&&d.ctrlKey===!1?c.onValueChange(r):d.preventDefault()}),onKeyDown:y(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&c.onValueChange(r)}),onFocus:y(e.onFocus,()=>{const d=c.activationMode!=="manual";!i&&!s&&d&&c.onValueChange(r)})})})});ve.displayName=ge;var be="TabsContent",xe=o.forwardRef((e,t)=>{const{__scopeTabs:a,value:r,forceMount:s,children:l,...c}=e,u=J(be,a),m=he(u.baseId,r),f=Te(u.baseId,r),i=r===u.value,d=o.useRef(i);return o.useEffect(()=>{const g=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(g)},[]),n.jsx(ne,{present:s||i,children:({present:g})=>n.jsx(P.div,{"data-state":i?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":m,hidden:!g,id:f,tabIndex:0,...c,ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0},children:g&&l})})});xe.displayName=be;function he(e,t){return`${e}-trigger-${t}`}function Te(e,t){return`${e}-content-${t}`}var at=fe,rt=pe,ot=ve,st=xe;function _({className:e,orientation:t="horizontal",...a}){return n.jsx(at,{"data-slot":"tabs","data-orientation":t,orientation:t,className:K("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",e),...a})}const it=Ae("rounded-lg p-[3px] group-data-[orientation=horizontal]/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",{variants:{variant:{default:"bg-muted",line:"gap-1 bg-transparent"}},defaultVariants:{variant:"default"}});function M({className:e,variant:t="default",...a}){return n.jsx(rt,{"data-slot":"tabs-list","data-variant":t,className:K(it({variant:t}),e),...a})}function I({className:e,...t}){return n.jsx(ot,{"data-slot":"tabs-trigger",className:K("focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4","group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent","data-[state=active]:bg-background dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 data-[state=active]:text-foreground","after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:-bottom-1.25 group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",e),...t})}function S({className:e,...t}){return n.jsx(st,{"data-slot":"tabs-content",className:K("flex-1 outline-none",e),...t})}_.__docgenInfo={description:`Accessible tabs component built on Radix UI with two visual variants.

Supports horizontal (default) and vertical orientation. The "line" variant
displays an underline indicator, while "default" uses a solid background pill.

@example
Basic tabs: Tabs with defaultValue, TabsList containing TabsTrigger elements, and TabsContent for each tab.

@example
Line variant (Projects section): Use TabsList with variant="line" for underline style.

@example
Vertical orientation: Add orientation="vertical" prop to Tabs component.

@see https://www.radix-ui.com/primitives/docs/components/tabs Radix Tabs docs`,methods:[],displayName:"Tabs",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}}};M.__docgenInfo={description:"",methods:[],displayName:"TabsList",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};I.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};S.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const Ct={title:"UI/Tabs",component:_,parameters:{layout:"centered"},tags:["autodocs"]},k={render:()=>n.jsxs(_,{defaultValue:"tab1",className:"w-100",children:[n.jsxs(M,{children:[n.jsx(I,{value:"tab1",children:"Overview"}),n.jsx(I,{value:"tab2",children:"Details"}),n.jsx(I,{value:"tab3",children:"Settings"})]}),n.jsx(S,{value:"tab1",children:n.jsx("div",{className:"p-4 text-center",children:n.jsx("p",{className:"text-muted-foreground",children:"This is the overview tab with general information."})})}),n.jsx(S,{value:"tab2",children:n.jsx("div",{className:"p-4 text-center",children:n.jsx("p",{className:"text-muted-foreground",children:"This is the details tab with more specific information."})})}),n.jsx(S,{value:"tab3",children:n.jsx("div",{className:"p-4 text-center",children:n.jsx("p",{className:"text-muted-foreground",children:"This is the settings tab with configuration options."})})})]})},U={render:()=>n.jsxs(_,{defaultValue:"external",className:"w-125",children:[n.jsxs(M,{variant:"line",children:[n.jsx(I,{value:"external",children:"External Projects"}),n.jsx(I,{value:"internal",children:"Internal Projects"})]}),n.jsx(S,{value:"external",children:n.jsxs("div",{className:"p-4",children:[n.jsx("p",{className:"text-muted-foreground mb-4",children:"Projects developed for external clients"}),n.jsx("div",{className:"grid gap-4",children:n.jsx(X,{title:"NASA Space Apps",description:"Educational platform for NASA space challenges",imageSrc:"/assets/img/projects/nasa-space-apps.jpg",link:"https://nasa-space-apps.com",isInternal:!1})})]})}),n.jsx(S,{value:"internal",children:n.jsxs("div",{className:"p-4",children:[n.jsx("p",{className:"text-muted-foreground mb-4",children:"Internal projects and initiatives"}),n.jsx("div",{className:"grid gap-4",children:n.jsx(X,{title:"COLCIC UESC",description:"Scientific initiation management system",imageSrc:"/assets/img/projects/colcic.jpg",link:"/projetos/colcic",isInternal:!0})})]})})]})},V={render:()=>n.jsxs(_,{defaultValue:"features",className:"w-150",children:[n.jsxs(M,{children:[n.jsx(I,{value:"features",children:"Features"}),n.jsx(I,{value:"team",children:"Team"})]}),n.jsx(S,{value:"features",children:n.jsxs("div",{className:"grid grid-cols-2 gap-6 p-4",children:[n.jsx(L,{icon:Se,title:"Lightning Fast",description:"Optimized performance for speed"}),n.jsx(L,{icon:ye,title:"Innovation",description:"Cutting-edge technology solutions"}),n.jsx(L,{icon:we,title:"Precision",description:"Accurate and reliable results"}),n.jsx(L,{icon:Re,title:"Collaboration",description:"Work seamlessly with your team"})]})}),n.jsx(S,{value:"team",children:n.jsx("div",{className:"p-4",children:n.jsx("p",{className:"text-muted-foreground",children:"Our experienced team of developers and designers work together to create amazing digital products."})})})]})},$={render:()=>n.jsxs(_,{orientation:"vertical",defaultValue:"account",className:"flex gap-4",children:[n.jsxs(M,{children:[n.jsx(I,{value:"account",children:"Account"}),n.jsx(I,{value:"security",children:"Security"}),n.jsx(I,{value:"notifications",children:"Notifications"})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx(S,{value:"account",children:n.jsxs("div",{className:"p-4 border rounded-lg",children:[n.jsx("h3",{className:"font-semibold mb-2",children:"Account Settings"}),n.jsx("p",{className:"text-muted-foreground",children:"Manage your account settings and preferences."})]})}),n.jsx(S,{value:"security",children:n.jsxs("div",{className:"p-4 border rounded-lg",children:[n.jsx("h3",{className:"font-semibold mb-2",children:"Security Settings"}),n.jsx("p",{className:"text-muted-foreground",children:"Configure security options for your account."})]})}),n.jsx(S,{value:"notifications",children:n.jsxs("div",{className:"p-4 border rounded-lg",children:[n.jsx("h3",{className:"font-semibold mb-2",children:"Notification Preferences"}),n.jsx("p",{className:"text-muted-foreground",children:"Customize your notification settings."})]})})]})]})};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-100">
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Details</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 text-center">
          <p className="text-muted-foreground">
            This is the overview tab with general information.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 text-center">
          <p className="text-muted-foreground">
            This is the details tab with more specific information.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 text-center">
          <p className="text-muted-foreground">
            This is the settings tab with configuration options.
          </p>
        </div>
      </TabsContent>
    </Tabs>
}`,...k.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="external" className="w-125">
      <TabsList variant="line">
        <TabsTrigger value="external">External Projects</TabsTrigger>
        <TabsTrigger value="internal">Internal Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="external">
        <div className="p-4">
          <p className="text-muted-foreground mb-4">
            Projects developed for external clients
          </p>
          <div className="grid gap-4">
            <ProjectCard title="NASA Space Apps" description="Educational platform for NASA space challenges" imageSrc="/assets/img/projects/nasa-space-apps.jpg" link="https://nasa-space-apps.com" isInternal={false} />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="internal">
        <div className="p-4">
          <p className="text-muted-foreground mb-4">
            Internal projects and initiatives
          </p>
          <div className="grid gap-4">
            <ProjectCard title="COLCIC UESC" description="Scientific initiation management system" imageSrc="/assets/img/projects/colcic.jpg" link="/projetos/colcic" isInternal />
          </div>
        </div>
      </TabsContent>
    </Tabs>
}`,...U.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="features" className="w-150">
      <TabsList>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="features">
        <div className="grid grid-cols-2 gap-6 p-4">
          <FeatureCard icon={Zap} title="Lightning Fast" description="Optimized performance for speed" />
          <FeatureCard icon={Rocket} title="Innovation" description="Cutting-edge technology solutions" />
          <FeatureCard icon={Target} title="Precision" description="Accurate and reliable results" />
          <FeatureCard icon={Users} title="Collaboration" description="Work seamlessly with your team" />
        </div>
      </TabsContent>
      <TabsContent value="team">
        <div className="p-4">
          <p className="text-muted-foreground">
            Our experienced team of developers and designers work together to
            create amazing digital products.
          </p>
        </div>
      </TabsContent>
    </Tabs>
}`,...V.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs orientation="vertical" defaultValue="account" className="flex gap-4">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="account">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Account Settings</h3>
            <p className="text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="security">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Security Settings</h3>
            <p className="text-muted-foreground">
              Configure security options for your account.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Notification Preferences</h3>
            <p className="text-muted-foreground">
              Customize your notification settings.
            </p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
}`,...$.parameters?.docs?.source}}};const jt=["Default","LineVariant","WithComplexContent","VerticalOrientation"];export{k as Default,U as LineVariant,$ as VerticalOrientation,V as WithComplexContent,jt as __namedExportsOrder,Ct as default};
