# Animation Components Guide

**Guia completo de uso dos componentes de animação do TecnoJr Site**

---

## 📚 Índice

- [Visão Geral](#visão-geral)
- [Componentes Disponíveis](#componentes-disponíveis)
- [Exemplos Práticos](#exemplos-práticos)
- [Padrões de Uso](#padrões-de-uso)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Visão Geral

O sistema de animações do TecnoJr Site foi refatorado para consolidar **40+ padrões duplicados** de Framer Motion em componentes reutilizáveis e autodescritivos. Todos os componentes estão em `src/components/animated/`.

### Princípios

- **Autodescritivo**: Nomes claros que indicam o comportamento
- **Composição**: Combinar componentes simples para criar animações complexas
- **Performance**: Animações otimizadas com `viewport={{ once: true }}` por padrão
- **Consistência**: Delays e durações padronizados

### Importação Centralizada

```tsx
import {
  FadeUp,
  AnimatedCard,
  AnimatedUnderline,
  AnimatedBadge,
  AnimatedLink,
  AnimatedButton,
  Interactive,
  Card,
  Badge,
} from '@/components/animated';
```

---

## 📦 Componentes Disponíveis

### 1. Motion Wrappers (Básicos)

Componentes fundamentais de animação que envolvem conteúdo.

#### `<FadeUp>`

Animação mais comum - fade in enquanto move para cima.

```tsx
<FadeUp delay={0.2}>
  <h2>Seu Conteúdo</h2>
</FadeUp>
```

**Props:**
- `delay?: number` - Delay em segundos (padrão: 0)
- `once?: boolean` - Animar apenas uma vez (padrão: true)
- `className?: string` - Classes CSS adicionais

**Quando usar:** Conteúdo de seções, cards, blocos de texto.

---

#### `<FadeFromLeft>` / `<FadeFromRight>`

Slide horizontal com fade.

```tsx
<FadeFromLeft delay={0.3}>
  <h2>Primeira Linha</h2>
</FadeFromLeft>

<FadeFromRight delay={0.5}>
  <h2>Segunda Linha</h2>
</FadeFromRight>
```

**Quando usar:** Títulos de seção em duas linhas, revelação de imagens alternadas.

---

#### `<ScaleFadeIn>`

Scale up com fade e spring effect.

```tsx
<ScaleFadeIn delay={0.2}>
  <Card>Feature</Card>
</ScaleFadeIn>
```

**Quando usar:** Cards, itens de features, elementos que precisam de ênfase.

---

#### `<StaggerFadeUp>`

Animação em cascata para listas.

```tsx
{items.map((item, i) => (
  <StaggerFadeUp key={item.id} index={i} baseDelay={0.2}>
    <Card>{item.content}</Card>
  </StaggerFadeUp>
))}
```

**Props:**
- `index: number` - Índice do item (zero-based) **obrigatório**
- `baseDelay?: number` - Delay base antes do stagger (padrão: 0)

**Quando usar:** Grids de features, listas de projetos, qualquer lista que precisa aparecer sequencialmente.

---

### 2. Animated Card

Sistema completo de animações para cards com Composition Pattern.

#### Uso Básico

```tsx
<AnimatedCard>
  <BaseCard icon={Zap} title="Feature" description="Description" />
</AnimatedCard>
```

#### Com Opções Customizadas

```tsx
<AnimatedCard 
  entrance="fadeUp" 
  hover="lift" 
  delay={0.2}
  tapEffect
>
  <div className="p-6 bg-white rounded-lg">
    Conteúdo Customizado
  </div>
</AnimatedCard>
```

#### Variantes Preset

```tsx
// Lift no hover (padrão)
<AnimatedCardLift>...</AnimatedCardLift>

// Scale no hover
<AnimatedCardScale>...</AnimatedCardScale>

// Glow (para cards com border)
<AnimatedCardGlow>...</AnimatedCardGlow>

// Fade up entrance
<AnimatedCardFadeUp>...</AnimatedCardFadeUp>
```

#### Staggered Cards

```tsx
{features.map((feature, i) => (
  <AnimatedCardStagger 
    key={feature.id} 
    index={i}
    baseDelay={0.2}
    staggerDelay={0.1}
  >
    <FeatureCard {...feature} />
  </AnimatedCardStagger>
))}
```

#### Composition Pattern (Namespace)

```tsx
<Card.Animated.Lift entrance="fadeUp" delay={0.2}>
  <BaseCard {...props} />
</Card.Animated.Lift>
```

**Props:**
- `entrance?: 'fade' | 'scaleFade' | 'fadeUp' | 'none'` (padrão: 'scaleFade')
- `hover?: 'lift' | 'scale' | 'scaleDown' | 'glow' | 'none'` (padrão: 'lift')
- `delay?: number` (padrão: 0)
- `once?: boolean` (padrão: true)
- `tapEffect?: boolean` (padrão: false)

---

### 3. Animated Interactive

Animações para elementos interativos (links, botões, ícones).

#### `<AnimatedLink>`

Links com hover effects.

```tsx
<AnimatedLink 
  href="/about"
  hoverEffect="slide"
>
  Saiba Mais
</AnimatedLink>
```

**Hover Effects:**
- `slide` - Desliza para direita (padrão)
- `scale` - Aumenta tamanho
- `lift` - Levanta (y: -2)
- `glow` - Scale sutil
- `none` - Sem efeito

**Exemplo avançado:**

```tsx
<AnimatedLink 
  href="https://example.com"
  hoverEffect="lift"
  tapEffect
  target="_blank"
  className="text-brand-primary"
>
  Link Externo
</AnimatedLink>
```

---

#### `<AnimatedButton>`

Botões com lift e tap effects.

```tsx
<AnimatedButton 
  onClick={handleClick}
  hoverEffect="lift"
  tapEffect
>
  Clique Aqui
</AnimatedButton>
```

**Hover Effects:**
- `lift` - Lift + scale (padrão)
- `scale` - Scale 1.1
- `glow` - Scale sutil
- `none` - Sem efeito

---

#### `<AnimatedIcon>`

Ícones com scale no hover.

```tsx
<AnimatedIcon hoverScale={1.1}>
  <Github className="h-6 w-6" />
</AnimatedIcon>
```

**Props:**
- `hoverScale?: number` (padrão: 1.1)

**Quando usar:** Social icons, action icons, icon buttons.

---

#### Namespace Pattern

```tsx
<Interactive.Link href="/contact" hoverEffect="slide">
  Contato
</Interactive.Link>

<Interactive.Button onClick={handleSubmit}>
  Enviar
</Interactive.Button>

<Interactive.Icon>
  <GithubIcon />
</Interactive.Icon>
```

---

### 4. Animated Underline

Sublinhados animados com scale effect.

#### Uso Básico

```tsx
<span className="relative">
  TecnoJr
  <AnimatedUnderline delay={1.5} className="gradient-tecno-primary" />
</span>
```

#### Props

- `delay?: number` (padrão: 0)
- `duration?: number` (padrão: 0.8)
- `origin?: 'left' | 'center' | 'right'` (padrão: 'left')
- `className?: string` - Para cores, gradientes, altura

#### Variantes Preset

```tsx
// Gradient primário
<AnimatedUnderlinePrimary delay={1.5} />

// Gradient secundário
<AnimatedUnderlineSecondary delay={1.7} />

// Branco sólido
<AnimatedUnderlineWhite delay={0.5} />

// Underline grosso
<AnimatedUnderlineThick className="bg-brand-primary" delay={0.5} />
```

#### Com Origin Customizada

```tsx
<span className="relative">
  Texto Centralizado
  <AnimatedUnderline 
    origin="center"
    delay={0.5}
    className="h-1 bg-brand-secondary"
  />
</span>
```

**Quando usar:** Enfatizar palavras em headings, hero sections, calls-to-action.

---

### 5. Animated Badge

Badges/pills com spring entrance.

#### Uso Básico

```tsx
<AnimatedBadge>New</AnimatedBadge>
```

#### Com Variant

```tsx
<AnimatedBadge variant="success" delay={0.3}>
  Completo
</AnimatedBadge>

<AnimatedBadge variant="warning" size="lg">
  Pendente
</AnimatedBadge>

<AnimatedBadge variant="gradient" spring={false}>
  Premium
</AnimatedBadge>
```

#### Variants Disponíveis

- `primary` - Cor primária TecnoJr (padrão)
- `secondary` - Cor secundária TecnoJr
- `accent` - Roxo
- `success` - Verde
- `warning` - Amarelo
- `danger` - Vermelho
- `neutral` - Cinza
- `gradient` - Gradiente primário → secundário

#### Sizes

- `sm` - Pequeno (px-2 py-0.5)
- `md` - Médio (px-3 py-1) - padrão
- `lg` - Grande (px-4 py-1.5)

#### Preset Components

```tsx
// Badge de tipo de projeto
<AnimatedBadgeProjectType isInternal={true} delay={0.5} />
// Renderiza: "Interno" (primary) ou "Cliente" (secondary)

// Badge de status
<AnimatedBadgeStatus status="active" />
// Opções: 'active', 'pending', 'completed', 'error'
```

#### Namespace Pattern

```tsx
<Badge.Animated variant="primary" delay={0.2}>
  Featured
</Badge.Animated>

<Badge.Primary>New Feature</Badge.Primary>

<Badge.ProjectType isInternal={false} />

<Badge.Status status="completed" />
```

#### Props

- `variant?: VariantType` (padrão: 'primary')
- `size?: 'sm' | 'md' | 'lg'` (padrão: 'md')
- `delay?: number` (padrão: 0)
- `duration?: number` (padrão: 0.5)
- `spring?: boolean` - Usar spring animation (padrão: true)
- `once?: boolean` (padrão: true)
- `noAnimation?: boolean` - Desabilitar animação (padrão: false)

**Quando usar:** Tags, labels, status indicators, category badges, project types.

---

## 🎨 Exemplos Práticos

### Hero Section

```tsx
import { 
  FadeUp, 
  AnimatedUnderlinePrimary,
  AnimatedUnderlineSecondary 
} from '@/components/animated';

export function HeroSection() {
  return (
    <section>
      <h1>
        <FadeFromLeft delay={0.6}>
          Primeira Linha
        </FadeFromLeft>
        <FadeFromRight delay={0.8}>
          Segunda Linha
        </FadeFromRight>
      </h1>

      <FadeUp delay={1}>
        <p>
          A <span className="relative">
            TecnoJr
            <AnimatedUnderlinePrimary delay={1.5} />
          </span> é uma empresa júnior de{" "}
          <span className="relative">
            excelência
            <AnimatedUnderlineSecondary delay={1.7} />
          </span>.
        </p>
      </FadeUp>
    </section>
  );
}
```

---

### Feature Grid com Stagger

```tsx
import { AnimatedCardStagger } from '@/components/animated';

export function FeaturesGrid({ features }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <AnimatedCardStagger 
          key={feature.id} 
          index={i}
          hover="lift"
        >
          <BaseCard {...feature} />
        </AnimatedCardStagger>
      ))}
    </div>
  );
}
```

---

### Footer com Links Animados

```tsx
import { AnimatedLink, FadeUp } from '@/components/animated';

export function Footer() {
  return (
    <FadeUp delay={0.2}>
      <nav>
        {links.map((link) => (
          <AnimatedLink
            key={link.href}
            href={link.href}
            hoverEffect="slide"
            className="text-gray-300"
          >
            {link.label}
          </AnimatedLink>
        ))}
      </nav>
    </FadeUp>
  );
}
```

---

### Social Icons

```tsx
import { AnimatedLink } from '@/components/animated';

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socials.map((social) => (
        <AnimatedLink
          key={social.label}
          href={social.url}
          target="_blank"
          hoverEffect="lift"
          tapEffect
          className="icon-container"
        >
          <social.Icon />
        </AnimatedLink>
      ))}
    </div>
  );
}
```

---

### Project Cards com Badge

```tsx
import { AnimatedCard, AnimatedBadgeProjectType } from '@/components/animated';

export function ProjectCard({ project }) {
  return (
    <AnimatedCard hover="glow">
      <div className="relative">
        <Image src={project.image} alt={project.title} />
        
        <div className="absolute top-4 right-4">
          <AnimatedBadgeProjectType 
            isInternal={project.isInternal}
            delay={0.3}
          />
        </div>
      </div>
      
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </AnimatedCard>
  );
}
```

---

## 🎯 Padrões de Uso

### Quando Usar Cada Componente

| Caso de Uso | Componente Recomendado |
|-------------|------------------------|
| Conteúdo de seção genérico | `<FadeUp>` |
| Títulos de seção (2 linhas) | `<FadeFromLeft>` + `<FadeFromRight>` |
| Grid de cards | `<AnimatedCardStagger>` |
| Lista de items | `<StaggerFadeUp>` |
| Links no footer | `<AnimatedLink hoverEffect="slide">` |
| Botões CTA | `<AnimatedButton hoverEffect="lift">` |
| Ícones sociais | `<AnimatedLink hoverEffect="lift" tapEffect>` |
| Texto enfatizado | `<AnimatedUnderline>` |
| Tags/Labels | `<AnimatedBadge>` |
| Status indicators | `<AnimatedBadgeStatus>` |

---

### Delays Recomendados

**Hero Sections:**
- Primeira linha: 0.6s
- Segunda linha: 0.8s
- Descrição: 1.0s
- Underlines: 1.5s, 1.7s
- Stats: 1.2s
- CTA: 2.0s

**Section Content:**
- Título: 0.2s
- Conteúdo: 0.4s-0.6s
- Cards (stagger): baseDelay 0.2s

**Footer:**
- Diferentes colunas: 0.2s, 0.4s, 0.6s

---

### Stagger Delays

```tsx
// Padrão: 0.1s entre items
<StaggerFadeUp index={i} baseDelay={0.2} />

// Mais lento: 0.15s entre items
<AnimatedCardStagger 
  index={i} 
  baseDelay={0.2}
  staggerDelay={0.15}
/>
```

---

## ⚡ Performance

### Best Practices

1. **Use `once: true` (padrão)**: Evita re-animações desnecessárias
2. **Evite delays muito longos**: Máximo 2-3s
3. **Limite stagger em listas grandes**: Use `maxItems` se necessário
4. **Prefira `will-change` em CSS**: Já aplicado nos components

### Quando NÃO Animar

- **Casos Especiais** já implementados:
  - `AnimatePresence` para menus/filtros
  - Infinite animations (floating orbs)
  - Page transitions
  - Background shapes

- **Conteúdo crítico**: Texto importante deve ser visível imediatamente
- **Muitos elementos**: >20 elementos animados simultaneamente

---

## 🐛 Troubleshooting

### Animação não aparece

**Problema:** Componente não anima no scroll.

**Solução:**
```tsx
// Verifique se once está correto
<FadeUp once={false}> // Anima toda vez
<FadeUp once={true}>  // Anima apenas uma vez (padrão)
```

### Delay não funciona

**Problema:** Delay não está sendo aplicado.

**Solução:**
```tsx
// Certifique-se de passar como número, não string
<FadeUp delay={0.5} /> // ✅ Correto
<FadeUp delay="0.5" /> // ❌ Errado
```

### Animação "pula"

**Problema:** Elemento aparece antes da animação começar.

**Solução:** Verifique se o componente está dentro de um `<HeroBase.Content>` ou similar que gerencia o viewport.

### Props do Motion não funcionam

**Problema:** Props customizadas do Framer Motion são ignoradas.

**Solução:** Use `<AnimatedWrapper>` para acesso completo às props do motion:

```tsx
<AnimatedWrapper
  initial={{ opacity: 0, rotate: -10 }}
  whileInView={{ opacity: 1, rotate: 0 }}
  transition={{ duration: 1 }}
>
  <CustomContent />
</AnimatedWrapper>
```

### TypeScript errors

**Problema:** Erros de tipo ao usar os componentes.

**Solução:** Importe os tipos se necessário:

```tsx
import type { 
  AnimatedCardProps,
  LinkHoverVariant,
  AnimatedBadgeProps 
} from '@/components/animated';
```

---

## 📚 Recursos Adicionais

### Arquivos Relacionados

- **Core animations**: `src/lib/animations.ts`
- **Motion wrappers**: `src/components/animated/motion-wrappers.tsx`
- **Specialized components**: 
  - `src/components/animated/animated-card.tsx`
  - `src/components/animated/animated-underline.tsx`
  - `src/components/animated/animated-badge.tsx`
  - `src/components/animated/animated-interactive.tsx`

### Referências

- [Framer Motion Docs](https://www.framer.com/motion/)
- [TecnoJr Style Guide](./style-guide.md)
- [Component Library](./lib-directory.md)

---

**Última atualização:** Fevereiro 2026  
**Autor:** TecnoJr Development Team  
**Versão:** 2.0 (Post-Refactor)
