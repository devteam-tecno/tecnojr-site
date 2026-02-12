import{c as e}from"./createLucideIcon-B_DZViE8.js";import{j as r}from"./jsx-runtime-DVhjNUKw.js";import{B as i}from"./base-card-DUaPzh0v.js";const o=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],u=e("rocket",o);const c=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],y=e("target",c);const s=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],h=e("users",s);const d=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],k=e("zap",d);function p({icon:t,title:a,description:n}){return r.jsx(i,{icon:t,title:a,description:n,variant:"default",iconSize:"md",iconGradient:"diagonal",glowEffect:!0,glowVariant:"primary",iconRotate:!1})}p.__docgenInfo={description:`Feature card component displaying company features/differentiators.

Refactored to use BaseCard with predefined styling optimized for
feature showcases. Shows icon, title, and description with hover
glow effect and smooth animations.

@param icon - Lucide React icon component
@param title - Feature title (e.g., "Fast Performance")
@param description - Feature description

@returns Rendered feature card with glassmorphic styling

@example
\`\`\`tsx
import { Zap } from 'lucide-react';
import { FeatureCard } from '@/components/ui/cards/feature-card';

<FeatureCard
  icon={Zap}
  title="Lightning Fast"
  description="Optimized for speed and performance"
/>
\`\`\`

@example
\`\`\`tsx
// Using with data from lib/features.ts
import { features } from '@/lib/features';

{features.map((feature) => (
  <FeatureCard
    key={feature.title}
    icon={feature.icon}
    title={feature.title}
    description={feature.description}
  />
))}
\`\`\`

@see {@link BaseCard} for underlying component
@see {@link ../../../lib/features.ts} for feature data`,methods:[],displayName:"FeatureCard"};export{p as F,u as R,y as T,h as U,k as Z};
