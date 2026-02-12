import{j as e}from"./jsx-runtime-DVhjNUKw.js";import{b as o,u as G}from"./iframe-CTDfU54N.js";import{M as Q,i as V,u as U,P as Z,a as ee,b as te,L as ne,m as v,n as W,T as ie,R as ae}from"./navigation-mSlPqcES.js";import{c as S}from"./utils-CDN07tui.js";import{L as O,n as se}from"./link-B0djyyxq.js";import{c as q}from"./createLucideIcon-B_DZViE8.js";import"./preload-helper-PPVm8Dsz.js";function I(t,a){if(typeof t=="function")return t(a);t!=null&&(t.current=a)}function re(...t){return a=>{let s=!1;const r=t.map(l=>{const n=I(l,a);return!s&&typeof n=="function"&&(s=!0),n});if(s)return()=>{for(let l=0;l<r.length;l++){const n=r[l];typeof n=="function"?n():I(t[l],null)}}}}function oe(...t){return o.useCallback(re(...t),t)}class le extends o.Component{getSnapshotBeforeUpdate(a){const s=this.props.childRef.current;if(s&&a.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=s.offsetParent,l=V(r)&&r.offsetWidth||0,n=V(r)&&r.offsetHeight||0,i=this.props.sizeRef.current;i.height=s.offsetHeight||0,i.width=s.offsetWidth||0,i.top=s.offsetTop,i.left=s.offsetLeft,i.right=l-i.width-i.left,i.bottom=n-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}}function ce({children:t,isPresent:a,anchorX:s,anchorY:r,root:l,pop:n}){const i=o.useId(),h=o.useRef(null),y=o.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:N}=o.useContext(Q),p=t.props?.ref??t?.ref,C=oe(h,p);return o.useInsertionEffect(()=>{const{width:d,height:u,top:x,left:g,right:b,bottom:M}=y.current;if(a||n===!1||!h.current||!d||!u)return;const z=s==="left"?`left: ${g}`:`right: ${b}`,_=r==="bottom"?`bottom: ${M}`:`top: ${x}`;h.current.dataset.motionPopId=i;const m=document.createElement("style");N&&(m.nonce=N);const j=l??document.head;return j.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${u}px !important;
            ${z}px !important;
            ${_}px !important;
          }
        `),()=>{j.contains(m)&&j.removeChild(m)}},[a]),e.jsx(le,{isPresent:a,childRef:h,sizeRef:y,pop:n,children:n===!1?t:o.cloneElement(t,{ref:C})})}const de=({children:t,initial:a,isPresent:s,onExitComplete:r,custom:l,presenceAffectsLayout:n,mode:i,anchorX:h,anchorY:y,root:N})=>{const p=U(me),C=o.useId();let d=!0,u=o.useMemo(()=>(d=!1,{id:C,initial:a,isPresent:s,custom:l,onExitComplete:x=>{p.set(x,!0);for(const g of p.values())if(!g)return;r&&r()},register:x=>(p.set(x,!1),()=>p.delete(x))}),[s,p,r]);return n&&d&&(u={...u}),o.useMemo(()=>{p.forEach((x,g)=>p.set(g,!1))},[s]),o.useEffect(()=>{!s&&!p.size&&r&&r()},[s]),t=e.jsx(ce,{pop:i==="popLayout",isPresent:s,anchorX:h,anchorY:y,root:N,children:t}),e.jsx(Z.Provider,{value:u,children:t})};function me(){return new Map}const H=t=>t.key||"";function F(t){const a=[];return o.Children.forEach(t,s=>{o.isValidElement(s)&&a.push(s)}),a}const pe=({children:t,custom:a,initial:s=!0,onExitComplete:r,presenceAffectsLayout:l=!0,mode:n="sync",propagate:i=!1,anchorX:h="left",anchorY:y="top",root:N})=>{const[p,C]=ee(i),d=o.useMemo(()=>F(t),[t]),u=i&&!p?[]:d.map(H),x=o.useRef(!0),g=o.useRef(d),b=U(()=>new Map),M=o.useRef(new Set),[z,_]=o.useState(d),[m,j]=o.useState(d);te(()=>{x.current=!1,g.current=d;for(let f=0;f<m.length;f++){const c=H(m[f]);u.includes(c)?(b.delete(c),M.current.delete(c)):b.get(c)!==!0&&b.set(c,!1)}},[m,u.length,u.join("-")]);const A=[];if(d!==z){let f=[...d];for(let c=0;c<m.length;c++){const k=m[c],P=H(k);u.includes(P)||(f.splice(c,0,k),A.push(k))}return n==="wait"&&A.length&&(f=A),j(F(f)),_(d),null}const{forceRender:J}=o.useContext(ne);return e.jsx(e.Fragment,{children:m.map(f=>{const c=H(f),k=i&&!p?!1:d===m||u.includes(c),P=()=>{if(M.current.has(c))return;if(M.current.add(c),b.has(c))b.set(c,!0);else return;let $=!0;b.forEach(K=>{K||($=!1)}),$&&(J?.(),j(g.current),i&&C?.(),r&&r())};return e.jsx(de,{isPresent:k,initial:!x.current||s?void 0:!1,custom:a,presenceAffectsLayout:l,mode:n,root:N,onExitComplete:k?void 0:P,anchorX:h,anchorY:y,children:f},c)})})};const he=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ue=q("menu",he);const xe=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Y=q("x",xe);function B({navigationLinks:t,pathname:a}){const s={left:[],center:[],right:[]};t.forEach(n=>{const i=n.align||"center";s[i].push(n)});const{center:r,right:l}=s;return e.jsxs("div",{className:"ml-8 hidden flex-1 items-center justify-between lg:flex",children:[e.jsx("div",{className:"flex flex-1 justify-center",children:e.jsx("nav",{className:"flex items-center space-x-8","aria-label":"Navegação principal",children:r.map(n=>{const i=n.disabled;return e.jsxs(O,{href:n.url,onClick:h=>i&&h.preventDefault(),className:S("relative px-3 py-2 text-sm font-medium transition-all duration-300",i?"cursor-not-allowed text-gray-500":a===n.url?"text-white":"text-gray-300 hover:text-white"),"aria-disabled":i,"aria-current":a===n.url&&!i?"page":void 0,children:[n.text,a===n.url&&!i&&e.jsx(v.div,{layoutId:"underline",className:"absolute bottom-0 left-0 right-0 h-0.5 gradient-tecno-primary",initial:!1,transition:{type:"spring",stiffness:500,damping:30}})]},n.url)})})}),l.length>0&&e.jsx("nav",{className:"flex items-center space-x-6","aria-label":"Navegação secundária",children:l.map(n=>{const i=n.disabled;return e.jsx(O,{href:n.url,onClick:h=>i&&h.preventDefault(),className:S("relative px-3 py-2 text-sm font-medium transition-all duration-300",i?"cursor-not-allowed text-gray-500":a===n.url?"text-white":"text-gray-300 hover:text-white"),"aria-disabled":i,"aria-current":a===n.url&&!i?"page":void 0,children:n.text},n.url)})})]})}B.__docgenInfo={description:`Desktop navigation component with center/right aligned links and active indicators.

Features:
- Filters links by alignment (center, right)
- Active link indicator with animated underline
- Disabled link support (cursor-not-allowed, greyed out)
- Smooth transitions and hover states
- Hidden on mobile (lg:flex)

Active indicator: Purple gradient underline with scale animation on active link.

@example
// Used in Header component
<DesktopNavigation
  navigationLinks={navigationLinks}
  pathname={pathname}
/>`,methods:[],displayName:"DesktopNavigation",props:{navigationLinks:{required:!0,tsType:{name:"unknown"},description:""},pathname:{required:!0,tsType:{name:"string"},description:""}}};function X({mobileMenuOpen:t,setMobileMenuOpen:a,pathname:s}){return e.jsx(pe,{children:t&&e.jsxs(e.Fragment,{children:[e.jsx(v.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>a(!1),className:"fixed inset-0 z-40 h-screen bg-black/50 backdrop-blur-md lg:hidden"}),e.jsx(v.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"tween",duration:.3},className:"fixed right-0 top-0 z-50 h-screen w-80 max-w-[90vw] border-l border-brand-primary/20 bg-zinc-900/95 backdrop-blur-md lg:hidden",children:e.jsxs("div",{className:"flex h-screen flex-col bg-zinc-900",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-brand-primary/20 bg-zinc-900 p-6",children:[e.jsx(se,{src:"/assets/logo/tecnojr-logo-white.png",alt:"Logo TecnoJr",width:150,height:30,className:"h-8"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"p-2 text-white transition-colors hover:text-brand-primary","aria-label":"Close menu",children:e.jsx(Y,{className:"h-6 w-6"})})]}),e.jsx("nav",{className:"flex-1 bg-zinc-900 px-6 py-8","aria-label":"Menu mobile",children:e.jsx("div",{className:"space-y-6",children:W.map((r,l)=>{const n="disabled"in r&&r.disabled;return e.jsx(v.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:l*.1},children:e.jsx(O,{href:r.url,onClick:i=>{n&&i.preventDefault(),a(!1)},className:S("block text-lg font-medium transition-all duration-300",n?"cursor-not-allowed text-gray-500":s===r.url?"text-brand-primary":"text-gray-300 hover:text-white"),"aria-current":s===r.url&&!n?"page":void 0,children:r.text})},r.url)})})})]})})]})})}X.__docgenInfo={description:`Mobile navigation drawer with slide-in animation and backdrop.

Features:
- Slide-in from right with Framer Motion
- Backdrop overlay with blur effect
- Close button (X icon) in header
- Logo display in drawer header
- Active link highlighting with gradient
- Disabled link support
- AnimatePresence for smooth enter/exit
- Hidden on desktop (lg:hidden)

Animation: Slides in from right (x: 100% → 0), backdrop fades in.
Width: 320px (w-80), max 90vw for small screens.

@example
// Used in Header component
<MobileNavigation
  mobileMenuOpen={mobileMenuOpen}
  setMobileMenuOpen={setMobileMenuOpen}
  pathname={pathname}
/>`,methods:[],displayName:"MobileNavigation",props:{mobileMenuOpen:{required:!0,tsType:{name:"boolean"},description:""},setMobileMenuOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},pathname:{required:!0,tsType:{name:"string"},description:""}}};function w(){const[t,a]=o.useState(!1),[s,r]=o.useState(0),l=G(),n=ae.includes(l);return o.useEffect(()=>{const i=()=>r(window.scrollY);return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),o.useEffect(()=>{a(!1)},[l]),n?null:e.jsxs(v.header,{initial:{y:-100},animate:{y:0},transition:{duration:.6,ease:"easeOut"},className:S("fixed left-0 right-0 top-0 z-50 transition-all duration-300",s>50?"border-b border-brand-primary/20 bg-zinc-900/95 backdrop-blur-md":"bg-zinc-900/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none"),children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 items-center justify-between lg:h-20",children:[e.jsx(v.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(ie,{})}),e.jsx(B,{navigationLinks:W,pathname:l}),e.jsx(v.button,{whileTap:{scale:.95},onClick:()=>a(!t),className:S("rounded-lg p-2 transition-all duration-200 lg:hidden",s>50?"text-white hover:bg-brand-primary/10 hover:text-brand-primary":"bg-zinc-900/40 text-white backdrop-blur-sm hover:bg-brand-primary/20 hover:text-brand-primary"),"aria-label":"Toggle menu","aria-expanded":t,children:t?e.jsx(Y,{className:"h-6 w-6"}):e.jsx(ue,{className:"h-6 w-6"})})]})}),e.jsx(X,{mobileMenuOpen:t,setMobileMenuOpen:a,pathname:l})]})}w.__docgenInfo={description:`Main header component with sticky positioning and scroll-based styling.

Features:
- Slide-down animation on mount
- Scroll detection (background blur/border after 50px scroll)
- Mobile menu toggle state management
- Desktop navigation (hidden on mobile)
- Mobile navigation drawer (hamburger menu)
- Auto-hide on specific routes (ROUTES_WITHOUT_HEADER)
- Auto-close mobile menu on route change
- Logo with scale animation on hover

The header becomes more opaque with a border when scrolled past 50px for
better readability. On mobile, it always has a background; on desktop (lg+),
it starts transparent.

@example
// Usage in root layout
<Header />
<main>{children}</main>
<Footer />

@see {@link @/lib/navigation} - For navigation links and route configuration
@see {@link DesktopNavigation} - Desktop nav implementation
@see {@link MobileNavigation} - Mobile drawer nav implementation`,methods:[],displayName:"Header"};const je={title:"Layout/Header",component:w,parameters:{layout:"fullscreen"},tags:["autodocs"]},T={render:()=>e.jsxs("div",{className:"min-h-screen bg-zinc-900",children:[e.jsx(w,{}),e.jsxs("div",{className:"pt-32 px-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Page Content"}),e.jsx("p",{className:"text-gray-300",children:"The header is fixed at the top with transparent background initially. Scroll down to see the background change."}),e.jsx("div",{className:"h-[200vh] mt-8 space-y-4",children:Array.from({length:20},(t,a)=>({id:`scroll-demo-${a}`,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scroll down to see the header background change with blur effect."})).map(t=>e.jsx("p",{className:"text-gray-400",children:t.text},t.id))})]})]})},D={render:()=>(window.scrollY=100,e.jsxs("div",{className:"min-h-screen bg-zinc-900",children:[e.jsx(w,{}),e.jsxs("div",{className:"pt-32 px-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Scrolled State (simulated)"}),e.jsx("p",{className:"text-gray-300",children:"Header shows background with border and backdrop-blur when scrolled."})]})]}))},R={parameters:{viewport:{defaultViewport:"mobile1"}},render:()=>e.jsxs("div",{className:"min-h-screen bg-zinc-900",children:[e.jsx(w,{}),e.jsxs("div",{className:"pt-32 px-4",children:[e.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Mobile Header"}),e.jsx("p",{className:"text-gray-300",children:"On mobile, the header shows a hamburger menu. Click it to open the mobile navigation drawer."}),e.jsx("div",{className:"h-screen mt-8 space-y-4",children:Array.from({length:10},(t,a)=>({id:`mobile-demo-${a}`,text:"Mobile content. Tap the menu icon to see the navigation drawer slide in from the right."})).map(t=>e.jsx("p",{className:"text-gray-400 text-sm",children:t.text},t.id))})]})]})},E={parameters:{viewport:{defaultViewport:"tablet"}},render:()=>e.jsxs("div",{className:"min-h-screen bg-zinc-900",children:[e.jsx(w,{}),e.jsxs("div",{className:"pt-32 px-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-white mb-4",children:"Tablet Header"}),e.jsx("p",{className:"text-gray-300",children:"Tablet view still uses mobile navigation. Desktop navigation appears at lg breakpoint (1024px+)."})]})]})},L={parameters:{viewport:{defaultViewport:"desktop"}},render:()=>e.jsxs("div",{className:"min-h-screen bg-zinc-900",children:[e.jsx(w,{}),e.jsxs("div",{className:"pt-32 px-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Desktop Header"}),e.jsx("p",{className:"text-gray-300 mb-8",children:"Desktop view shows full navigation with center-aligned links and right-aligned CTA buttons. Hover over links to see transitions."}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-semibold text-white",children:"Features:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 space-y-2",children:[e.jsx("li",{children:"Logo with hover scale animation"}),e.jsx("li",{children:"Center-aligned navigation links"}),e.jsx("li",{children:"Active link indicator with gradient underline"}),e.jsx("li",{children:'Right-aligned "Processo Seletivo" link'}),e.jsx("li",{children:"Smooth transitions on scroll"}),e.jsx("li",{children:"Backdrop blur effect when scrolled"})]})]})]})]})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-zinc-900">
      <Header />
      <div className="pt-32 px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Page Content</h1>
        <p className="text-gray-300">
          The header is fixed at the top with transparent background initially.
          Scroll down to see the background change.
        </p>
        <div className="h-[200vh] mt-8 space-y-4">
          {Array.from({
          length: 20
        }, (_, i) => ({
          id: \`scroll-demo-\${i}\`,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scroll down to see the header background change with blur effect."
        })).map(item => <p key={item.id} className="text-gray-400">
              {item.text}
            </p>)}
        </div>
      </div>
    </div>
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Simulate scrolled state
    if (typeof window !== "undefined") {
      window.scrollY = 100;
    }
    return <div className="min-h-screen bg-zinc-900">
        <Header />
        <div className="pt-32 px-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Scrolled State (simulated)
          </h1>
          <p className="text-gray-300">
            Header shows background with border and backdrop-blur when scrolled.
          </p>
        </div>
      </div>;
  }
}`,...D.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: () => <div className="min-h-screen bg-zinc-900">
      <Header />
      <div className="pt-32 px-4">
        <h1 className="text-2xl font-bold text-white mb-4">Mobile Header</h1>
        <p className="text-gray-300">
          On mobile, the header shows a hamburger menu. Click it to open the
          mobile navigation drawer.
        </p>
        <div className="h-screen mt-8 space-y-4">
          {Array.from({
          length: 10
        }, (_, i) => ({
          id: \`mobile-demo-\${i}\`,
          text: "Mobile content. Tap the menu icon to see the navigation drawer slide in from the right."
        })).map(item => <p key={item.id} className="text-gray-400 text-sm">
              {item.text}
            </p>)}
        </div>
      </div>
    </div>
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tablet"
    }
  },
  render: () => <div className="min-h-screen bg-zinc-900">
      <Header />
      <div className="pt-32 px-8">
        <h1 className="text-3xl font-bold text-white mb-4">Tablet Header</h1>
        <p className="text-gray-300">
          Tablet view still uses mobile navigation. Desktop navigation appears
          at lg breakpoint (1024px+).
        </p>
      </div>
    </div>
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  },
  render: () => <div className="min-h-screen bg-zinc-900">
      <Header />
      <div className="pt-32 px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Desktop Header</h1>
        <p className="text-gray-300 mb-8">
          Desktop view shows full navigation with center-aligned links and
          right-aligned CTA buttons. Hover over links to see transitions.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Features:</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Logo with hover scale animation</li>
            <li>Center-aligned navigation links</li>
            <li>Active link indicator with gradient underline</li>
            <li>Right-aligned "Processo Seletivo" link</li>
            <li>Smooth transitions on scroll</li>
            <li>Backdrop blur effect when scrolled</li>
          </ul>
        </div>
      </div>
    </div>
}`,...L.parameters?.docs?.source}}};const ke=["Default","WithScrollEffect","MobileView","TabletView","DesktopView"];export{T as Default,L as DesktopView,R as MobileView,E as TabletView,D as WithScrollEffect,ke as __namedExportsOrder,je as default};
