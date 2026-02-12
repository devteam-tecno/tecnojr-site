import{j as e}from"./jsx-runtime-DVhjNUKw.js";import{useMDXComponents as i}from"./index-DgFQXQHp.js";import{Meta as o}from"@storybook/blocks";import"./iframe-CTDfU54N.js";import"./preload-helper-PPVm8Dsz.js";function r(n){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Documentação/Componentes"}),`
`,e.jsx(s.h1,{id:"catálogo-de-componentes",children:"Catálogo de Componentes"}),`
`,e.jsxs(s.p,{children:["Referência visual de todos os componentes do sistema de design TecnoJr. Para documentação técnica detalhada, consulte ",e.jsx(s.a,{href:"../../docs/development/component-index.md",children:"docs/development/component-index.md"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"arquitetura-de-componentes",children:"Arquitetura de Componentes"}),`
`,e.jsx(s.h3,{id:"estrutura-de-organização",children:"Estrutura de Organização"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`src/components/
├── ui/              # Primitivos de UI reutilizáveis
│   ├── buttons/     # Sistema de botões com variantes
│   ├── cards/       # Tipos de cards (base, feature, project, etc)
│   ├── form/        # Componentes de formulário (input, textarea, etc)
│   ├── feedback/    # Feedback visual (loading, alerts, etc)
│   ├── navigation/  # Componentes de navegação (tabs, pills, etc)
│   ├── primitives/  # Primitivos básicos (card, separator, etc)
│   └── typography/  # Sistema de tipografia
├── layout/          # Componentes de layout (Header, Footer, wrappers)
├── sections/        # Seções de página completas
│   ├── hero/        # Variantes de Hero para diferentes páginas
│   ├── budget/      # Componentes da seção de orçamento
│   └── press-kit/   # Seções do press kit
└── animated/        # Wrappers de animação e efeitos
`})}),`
`,e.jsx(s.h3,{id:"princípios-de-design",children:"Princípios de Design"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Responsabilidade Única"})," - Cada componente faz uma coisa bem feita"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Composição"})," - Componentes constroem sobre primitivos"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Consistência"})," - Tokens de design e padrões compartilhados"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Acessibilidade"})," - Conformidade WCAG 2.1 AA"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Performance"})," - Renderização e animações otimizadas"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-componentes-ui",children:"🎨 Componentes UI"}),`
`,e.jsxs(s.h3,{id:"botões-uibuttons",children:["Botões (",e.jsx(s.code,{children:"ui/buttons/"}),")"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/buttons/button.tsx"})]}),`
`,e.jsx(s.p,{children:"Sistema completo de botões com 8 variantes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"gradient-primary"})," - CTAs principais, ações primárias (hero)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"gradient-whatsapp"})," - Exclusivo para contato WhatsApp"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"gradient-secondary"})," - CTAs secundários, links de email"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"outline-gradient"})," - Filtros, abas, toggles"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ghost-gradient"})," - Navegação, ações sutis"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"default"})," - Botão padrão"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"outline"})," - Botão com borda"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"destructive"})," - Ações destrutivas"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ghost"})," - Botão fantasma"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"link"})," - Botão estilo link"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"5 tamanhos"}),": ",e.jsx(s.code,{children:"xs"}),", ",e.jsx(s.code,{children:"sm"}),", ",e.jsx(s.code,{children:"default"}),", ",e.jsx(s.code,{children:"lg"}),", ",e.jsx(s.code,{children:"xl"})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Arquivos relacionados"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"button.tsx"})," - Componente principal com CVA"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"button.test.tsx"})," - Testes unitários completos"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"button.stories.tsx"})," - Stories do Storybook"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"button-showcase.tsx"})," - Showcase de todas as variantes"]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/ui-button--gradient-primary",children:"Ver Stories de Botões →"})}),`
`,e.jsxs(s.p,{children:["📚 ",e.jsx(s.strong,{children:"Documentação detalhada"}),": ",e.jsx(s.a,{href:"../../docs/development/button-system.md",children:"docs/development/button-system.md"})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"cards-uicards",children:["Cards (",e.jsx(s.code,{children:"ui/cards/"}),")"]}),`
`,e.jsx(s.h4,{id:"basecard",children:"BaseCard"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/cards/base-card.tsx"})]}),`
`,e.jsx(s.p,{children:"Fundação para FeatureCard, ServiceCard, StatItem."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Recursos"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Ícone configurável com gradientes"}),`
`,e.jsx(s.li,{children:"Efeitos de brilho ao hover"}),`
`,e.jsx(s.li,{children:"Animações de rotação do ícone"}),`
`,e.jsx(s.li,{children:"Dois layouts: default, centered"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Uso"}),": Base para composição de outros cards"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"featurecard",children:"FeatureCard"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/cards/feature-card.tsx"})]}),`
`,e.jsx(s.p,{children:"Para seção de diferenciais."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Layout alinhado à esquerda"}),`
`,e.jsx(s.li,{children:"Ícone em círculo com gradiente"}),`
`,e.jsx(s.li,{children:"Título + descrição"}),`
`,e.jsxs(s.li,{children:["Dados de ",e.jsx(s.code,{children:"@/lib/data/features"})]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/ui-featurecard--default",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"servicecard",children:"ServiceCard"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/cards/service-card.tsx"})]}),`
`,e.jsx(s.p,{children:"Para seção de serviços."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Layout centralizado"}),`
`,e.jsx(s.li,{children:"Rotação do ícone ao hover"}),`
`,e.jsx(s.li,{children:"Título + descrição"}),`
`,e.jsxs(s.li,{children:["Dados de ",e.jsx(s.code,{children:"@/lib/data/services"})]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/ui-servicecard--default",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"projectcard",children:"ProjectCard"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/cards/project-card.tsx"})]}),`
`,e.jsx(s.p,{children:"Para showcase de projetos."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Imagem com overlay de gradiente"}),`
`,e.jsx(s.li,{children:"Badge External/Internal"}),`
`,e.jsx(s.li,{children:"Efeito de elevação ao hover"}),`
`,e.jsxs(s.li,{children:["Dados de ",e.jsx(s.code,{children:"@/lib/data/projects"})]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/ui-projectcard--external-project",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"membercard",children:"MemberCard"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/cards/member-card.tsx"})]}),`
`,e.jsx(s.p,{children:"Para exibição de membros da equipe."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Foto do membro com bordas arredondadas"}),`
`,e.jsx(s.li,{children:"Nome e cargo"}),`
`,e.jsx(s.li,{children:"Links sociais (GitHub, LinkedIn, etc)"}),`
`,e.jsxs(s.li,{children:["Dados de ",e.jsx(s.code,{children:"@/lib/data/members"})]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Uso"}),': Página "Sobre" (/sobre)']}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"assetcard",children:"AssetCard"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/cards/asset-card.tsx"})]}),`
`,e.jsx(s.p,{children:"Para assets do press kit (logos, ícones)."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Preview do asset (SVG/PNG)"}),`
`,e.jsx(s.li,{children:"Suporta fundo invertido"}),`
`,e.jsx(s.li,{children:"Nome do asset"}),`
`,e.jsx(s.li,{children:"Botões de download"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Uso"}),": Página Press Kit (/press-kit)"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"colorcard",children:"ColorCard"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/cards/color-card.tsx"})]}),`
`,e.jsx(s.p,{children:"Para exibição de cores da marca."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Preview da cor"}),`
`,e.jsx(s.li,{children:"Nome da cor"}),`
`,e.jsx(s.li,{children:"Valores HEX e RGB"}),`
`,e.jsx(s.li,{children:"Botão de copiar código"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Uso"}),": Página Press Kit (/press-kit)"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"formulários-uiform",children:["Formulários (",e.jsx(s.code,{children:"ui/form/"}),")"]}),`
`,e.jsx(s.h4,{id:"input",children:"Input"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/form/input.tsx"})]}),`
`,e.jsx(s.p,{children:"Campo de texto com estados de validação."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Recursos"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Focus rings com cores da marca"}),`
`,e.jsx(s.li,{children:"Estilo aria-invalid"}),`
`,e.jsx(s.li,{children:"Integração React Hook Form"}),`
`,e.jsx(s.li,{children:"Suporte a type (text, email, tel, etc)"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/ui-input--default",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"textarea",children:"Textarea"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/form/textarea.tsx"})]}),`
`,e.jsx(s.p,{children:"Campo de texto multi-linha com auto-expansão."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Recursos"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"field-sizing: content"})," (CSS)"]}),`
`,e.jsx(s.li,{children:"Mesmos estados de validação do Input"}),`
`,e.jsx(s.li,{children:"Integração React Hook Form"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/ui-textarea--default",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"navegação-uinavigation",children:["Navegação (",e.jsx(s.code,{children:"ui/navigation/"}),")"]}),`
`,e.jsx(s.h4,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/navigation/tabs.tsx"})]}),`
`,e.jsx(s.p,{children:"Tabs baseado em Radix UI com 2 variantes."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Variantes"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"default"})," - Pílula com fundo sólido"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"line"})," - Indicador de sublinhado"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Recursos"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Orientação horizontal/vertical"}),`
`,e.jsx(s.li,{children:"Acessibilidade completa (ARIA)"}),`
`,e.jsx(s.li,{children:"Animações suaves"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/ui-tabs--default",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"filterpill",children:"FilterPill"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/navigation/filter-pill.tsx"})]}),`
`,e.jsx(s.p,{children:"Para filtros de categoria e tags."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Estado ativo com gradiente"}),`
`,e.jsx(s.li,{children:"Variante outline para reset"}),`
`,e.jsx(s.li,{children:"Click handler para gerenciamento de estado"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/ui-filterpill--filter-group",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"tipografia-uitypography",children:["Tipografia (",e.jsx(s.code,{children:"ui/typography/"}),")"]}),`
`,e.jsx(s.h4,{id:"sectiontitle",children:"SectionTitle"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/typography/section-title.tsx"})]}),`
`,e.jsx(s.p,{children:"Títulos de seção responsivos."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tamanhos"}),": ",e.jsx(s.code,{children:"sm"}),", ",e.jsx(s.code,{children:"md"}),", ",e.jsx(s.code,{children:"lg"}),e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"Alinhamentos"}),": ",e.jsx(s.code,{children:"left"}),", ",e.jsx(s.code,{children:"center"}),", ",e.jsx(s.code,{children:"right"}),e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"Tags HTML"}),": ",e.jsx(s.code,{children:"h1"}),", ",e.jsx(s.code,{children:"h2"}),", ",e.jsx(s.code,{children:"h3"}),", ",e.jsx(s.code,{children:"h4"})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Recursos"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"text-balance"})," para quebras otimizadas"]}),`
`,e.jsx(s.li,{children:"Espaçamento consistente"}),`
`,e.jsx(s.li,{children:"Gradientes opcionais"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/ui-sectiontitle--default",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"gradienttext",children:"GradientText"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/typography/gradient-text.tsx"})]}),`
`,e.jsx(s.p,{children:"Texto com gradiente da marca."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Uso"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<GradientText>TecnoJr</GradientText>
`})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Característica"}),": Gradiente roxo-azul com ",e.jsx(s.code,{children:"background-clip: text"})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"inlinehighlight",children:"InlineHighlight"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/typography/inline-highlight.tsx"})]}),`
`,e.jsx(s.p,{children:"Destaque inline para texto."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Variantes"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"gradient"})," - Fundo com gradiente"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"underline"})," - Sublinhado animado"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"box"})," - Caixa com fundo"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"leadparagraph",children:"LeadParagraph"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/typography/lead-paragraph.tsx"})]}),`
`,e.jsx(s.p,{children:"Parágrafo de entrada maior."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Uso"}),": Primeiros parágrafos de seções importantes"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"text",children:"Text"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/typography/text.tsx"})]}),`
`,e.jsx(s.p,{children:"Componente de texto genérico com variantes."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Variantes"}),": ",e.jsx(s.code,{children:"body"}),", ",e.jsx(s.code,{children:"small"}),", ",e.jsx(s.code,{children:"large"}),", ",e.jsx(s.code,{children:"muted"})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"codetext",children:"CodeText"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/typography/code-text.tsx"})]}),`
`,e.jsx(s.p,{children:"Para snippets de código inline."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Recursos"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Fonte monospace"}),`
`,e.jsx(s.li,{children:"Fundo muted"}),`
`,e.jsx(s.li,{children:"Bordas arredondadas"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/ui-codetext--default",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"feedback-uifeedback",children:["Feedback (",e.jsx(s.code,{children:"ui/feedback/"}),")"]}),`
`,e.jsxs(s.p,{children:["Componentes de feedback visual (spinners, alerts, etc) - ",e.jsx(s.strong,{children:"documentação a ser expandida"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"primitivos-uiprimitives",children:["Primitivos (",e.jsx(s.code,{children:"ui/primitives/"}),")"]}),`
`,e.jsx(s.h4,{id:"card",children:"Card"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/primitives/card.tsx"})]}),`
`,e.jsx(s.p,{children:"Card base do Shadcn UI com sub-componentes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Card"})," - Container principal"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"CardHeader"})," - Seção do cabeçalho"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"CardTitle"})," - Texto do título"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"CardDescription"})," - Subtítulo/descrição"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"CardContent"})," - Conteúdo principal"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"CardFooter"})," - Rodapé/ações"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"separator",children:"Separator"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/primitives/separator.tsx"})]}),`
`,e.jsx(s.p,{children:"Separador visual baseado em Radix UI."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Orientações"}),": horizontal, vertical",e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"Tipos"}),": decorativo, semântico"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"badge",children:"Badge"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/badge.tsx"})]}),`
`,e.jsx(s.p,{children:"Badges para categorização."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Variantes"}),": ",e.jsx(s.code,{children:"default"}),", ",e.jsx(s.code,{children:"secondary"}),", ",e.jsx(s.code,{children:"outline"}),", ",e.jsx(s.code,{children:"destructive"})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h3,{id:"outros-componentes-ui",children:"Outros Componentes UI"}),`
`,e.jsx(s.h4,{id:"iconcontainer",children:"IconContainer"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/icon-container.tsx"})]}),`
`,e.jsx(s.p,{children:"Container para ícones com fundo e gradiente."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Uso"}),": Centraliza estilo de ícones em cards e seções"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"tecnojrlogo",children:"TecnoJrLogo"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/tecnojr-logo.tsx"})]}),`
`,e.jsx(s.p,{children:"Logo da TecnoJr com variantes (branco, preto, colorido)."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Uso"}),": Header, Footer, Press Kit"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"skiplink",children:"SkipLink"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/ui/skip-link.tsx"})]}),`
`,e.jsx(s.p,{children:"Link de acessibilidade para pular navegação."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Recurso"}),": Visível apenas ao focar com teclado (WCAG 2.4.1)"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"️-componentes-de-layout",children:"🏗️ Componentes de Layout"}),`
`,e.jsxs(s.h3,{id:"header-layoutheader",children:["Header (",e.jsx(s.code,{children:"layout/header/"}),")"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/layout/header/"})]}),`
`,e.jsx(s.p,{children:"Header fixo com detecção de scroll."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Desktop: Navegação centralizada e à direita"}),`
`,e.jsx(s.li,{children:"Mobile: Menu hambúrguer + drawer"}),`
`,e.jsx(s.li,{children:"Indicadores de link ativo"}),`
`,e.jsx(s.li,{children:"Blur no backdrop ao scrollar"}),`
`,e.jsx(s.li,{children:"Esconde em rotas específicas (press-kit)"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Sub-componentes"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"DesktopNavigation"})," - Links de navegação desktop"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"MobileNavigation"})," - Drawer mobile"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ThemeToggle"})," - Toggle de tema (se implementado)"]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/layout-header--default",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"footer-layoutfooter",children:["Footer (",e.jsx(s.code,{children:"layout/footer/"}),")"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/layout/footer/"})]}),`
`,e.jsx(s.p,{children:"Footer com 4 colunas responsivas."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Seções"}),":"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Logo + descrição + redes sociais"}),`
`,e.jsx(s.li,{children:"Links rápidos"}),`
`,e.jsx(s.li,{children:"Informações de contato"}),`
`,e.jsx(s.li,{children:"Copyright dinâmico"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Sub-componentes"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Description"})," - Logo, missão, social"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"QuickLinks"})," - Links de navegação"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ContactInfo"})," - Email, endereço, telefone"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Copyright"})," - Ano dinâmico"]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/story/layout-footer--default",children:"Ver Stories →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h3,{id:"wrappers-de-layout",children:"Wrappers de Layout"}),`
`,e.jsx(s.h4,{id:"maxwidthwrapper",children:"MaxWidthWrapper"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/layout/max-width-wrapper.tsx"})]}),`
`,e.jsx(s.p,{children:"Centraliza conteúdo com largura máxima."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Padding responsivo"}),`
`,e.jsx(s.li,{children:"6 opções de largura máxima"}),`
`,e.jsx(s.li,{children:"Container centralizado"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"sectionwrapper",children:"SectionWrapper"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/layout/section-wrapper.tsx"})]}),`
`,e.jsx(s.p,{children:"Espaçamento consistente de seções."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Padding vertical responsivo"}),`
`,e.jsx(s.li,{children:"ID opcional para âncoras"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"section",children:"Section"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/layout/section.tsx"})]}),`
`,e.jsx(s.p,{children:"Componente de seção semântica com padding e max-width."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"sectioncontainer",children:"SectionContainer"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/layout/section-container.tsx"})]}),`
`,e.jsx(s.p,{children:"Container de seção com variantes de espaçamento."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"contentcontainer",children:"ContentContainer"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/layout/content-container.tsx"})]}),`
`,e.jsx(s.p,{children:"Container para conteúdo com largura controlada."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"responsivegrid",children:"ResponsiveGrid"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/layout/responsive-grid.tsx"})]}),`
`,e.jsx(s.p,{children:"Grid responsivo com número de colunas configurável."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Colunas"}),": 1-4 (responsivo)"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-componentes-de-seção",children:"📄 Componentes de Seção"}),`
`,e.jsxs(s.h3,{id:"hero-sectionshero",children:["Hero (",e.jsx(s.code,{children:"sections/hero/"}),")"]}),`
`,e.jsx(s.p,{children:"Sistema modular de hero para diferentes páginas."}),`
`,e.jsx(s.h4,{id:"herobase",children:"HeroBase"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/hero/hero-base.tsx"})]}),`
`,e.jsx(s.p,{children:"Hero base reutilizável."}),`
`,e.jsx(s.h4,{id:"herohome",children:"HeroHome"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/hero/hero-home.tsx"})]}),`
`,e.jsx(s.p,{children:"Hero da homepage."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Imagem de fundo + overlay de gradiente"}),`
`,e.jsx(s.li,{children:"Animações escalonadas de texto"}),`
`,e.jsx(s.li,{children:"Texto de título com gradiente"}),`
`,e.jsx(s.li,{children:"Botão CTA"}),`
`,e.jsx(s.li,{children:"Formas de fundo decorativas"}),`
`]}),`
`,e.jsx(s.h4,{id:"heroabout",children:"HeroAbout"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/hero/hero-about.tsx"})]}),`
`,e.jsx(s.p,{children:'Hero da página "Sobre".'}),`
`,e.jsx(s.h4,{id:"heroprojects",children:"HeroProjects"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/hero/hero-projects.tsx"})]}),`
`,e.jsx(s.p,{children:"Hero da página de projetos."}),`
`,e.jsx(s.h4,{id:"heropresskit",children:"HeroPressKit"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/hero/hero-press-kit.tsx"})]}),`
`,e.jsx(s.p,{children:"Hero da página press kit."}),`
`,e.jsx(s.h4,{id:"herostats",children:"HeroStats"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/hero/hero-stats.tsx"})]}),`
`,e.jsx(s.p,{children:"Hero com estatísticas da empresa."}),`
`,e.jsx(s.h4,{id:"heroheading",children:"HeroHeading"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/hero/hero-heading.tsx"})]}),`
`,e.jsx(s.p,{children:"Componente de heading reutilizável para heros."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h3,{id:"seções-de-conteúdo",children:"Seções de Conteúdo"}),`
`,e.jsx(s.h4,{id:"featuressection",children:"FeaturesSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/features-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Grid de 2 colunas com diferenciais."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Dados"}),": ",e.jsx(s.code,{children:"@/lib/data/features"}),e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"Animações"}),": Fade-up escalonado",e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"ID"}),": ",e.jsx(s.code,{children:"#features"})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"servicessection",children:"ServicesSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/services-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Grid de 3 colunas com serviços."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Dados"}),": ",e.jsx(s.code,{children:"@/lib/data/services"}),e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"Layout"}),": Cards centralizados",e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"ID"}),": ",e.jsx(s.code,{children:"#services"})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"aboutsection",children:"AboutSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/about-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Layout de duas colunas sobre a empresa."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Placeholder de imagem"}),`
`,e.jsx(s.li,{children:"Card de texto sobreposto"}),`
`,e.jsx(s.li,{children:"Animação de orbe flutuante"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"idealssection",children:"IdealsSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/ideals-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Seção de Missão, Visão e Valores."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Dados"}),": ",e.jsx(s.code,{children:"@/lib/data/ideals"}),e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"Layout"}),": 3 cards com ícones e gradientes",e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"Uso"}),': Página "Sobre"']}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"memberssection",children:"MembersSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/members-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Exibição de membros da equipe."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Dados"}),": ",e.jsx(s.code,{children:"@/lib/data/members"}),e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"Recursos"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Filtro por cargo"}),`
`,e.jsx(s.li,{children:"Grid responsivo"}),`
`,e.jsx(s.li,{children:"MemberCards com fotos e links sociais"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"memberssectionwrapper",children:"MembersSectionWrapper"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/members-section-wrapper.tsx"})]}),`
`,e.jsx(s.p,{children:"Wrapper da seção de membros com lógica de filtro."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"projectssection",children:"ProjectsSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/projects-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Projetos com tabs."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Características"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Tabs External/Internal"}),`
`,e.jsx(s.li,{children:"Grid de 3 colunas"}),`
`,e.jsx(s.li,{children:"ProjectCards"}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ID"}),": ",e.jsx(s.code,{children:"#projects"})]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"projectsfullsection",children:"ProjectsFullSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/projects-full-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Versão expandida da seção de projetos para página dedicada."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h4,{id:"budgetsection",children:"BudgetSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/budget-section.tsx"})]}),`
`,e.jsx(s.p,{children:"CTA de contato com formulário."}),`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Sub-componentes em ",e.jsx(s.code,{children:"sections/budget/"})]}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"BenefitsList"})," - Lista de benefícios de contratar"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ContactFormCard"})," - Card com formulário de contato"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Recursos"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Lista de benefícios"}),`
`,e.jsx(s.li,{children:"CTA WhatsApp"}),`
`,e.jsx(s.li,{children:"Formulário de contato"}),`
`,e.jsx(s.li,{children:"Orbes animados com gradiente"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"press-kit-sectionspress-kit",children:["Press Kit (",e.jsx(s.code,{children:"sections/press-kit/"}),")"]}),`
`,e.jsx(s.p,{children:"Seções especializadas para a página de press kit."}),`
`,e.jsx(s.h4,{id:"logossection",children:"LogosSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/press-kit/logos-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Exibição e download de logos."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Dados"}),": ",e.jsx(s.code,{children:"@/lib/data/press-kit"})," (fullLogos, icons, typos)"]}),`
`,e.jsx(s.h4,{id:"colorssection",children:"ColorsSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/press-kit/colors-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Paleta de cores da marca."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Dados"}),": ",e.jsx(s.code,{children:"@/lib/data/press-kit"})," (colors)"]}),`
`,e.jsx(s.h4,{id:"alternativessection",children:"AlternativesSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/press-kit/alternatives-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Alternativas de uso da marca."}),`
`,e.jsx(s.h4,{id:"drivesection",children:"DriveSection"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/sections/press-kit/drive-section.tsx"})]}),`
`,e.jsx(s.p,{children:"Link para Google Drive com todos os assets."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-componentes-animados",children:"🎬 Componentes Animados"}),`
`,e.jsx(s.h3,{id:"motion-wrappers",children:"Motion Wrappers"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Localização"}),": ",e.jsx(s.code,{children:"src/components/animated/motion-wrappers.tsx"})]}),`
`,e.jsx(s.p,{children:"Wrappers reutilizáveis de Framer Motion:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"FadeUp"})," - Fade + deslize para cima"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"FadeDown"})," - Fade + deslize para baixo"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"FadeLeft"})," - Fade + deslize da esquerda"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"FadeRight"})," - Fade + deslize da direita"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ScaleIn"})," - Animação de escala"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"StaggerContainer"})," - Container para animações escalonadas"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Uso"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { FadeUp } from '@/components/animated/motion-wrappers';

<FadeUp>
  <YourComponent />
</FadeUp>
`})}),`
`,e.jsxs(s.p,{children:["📚 ",e.jsx(s.strong,{children:"Documentação de animações"}),": ",e.jsx(s.a,{href:"../../docs/development/animations-guide.md",children:"docs/development/animations-guide.md"})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-testes",children:"🧪 Testes"}),`
`,e.jsx(s.p,{children:"Muitos componentes têm testes co-localizados:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"*.test.tsx"})," - Testes unitários com Vitest + React Testing Library"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"*.stories.tsx"})," - Stories do Storybook para documentação visual"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Exemplo"}),": ",e.jsx(s.code,{children:"button.test.tsx"}),", ",e.jsx(s.code,{children:"feature-card.test.tsx"}),", ",e.jsx(s.code,{children:"member-card.test.tsx"})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/?path=/docs/documenta%C3%A7%C3%A3o-testes--docs",children:"Ver Guia de Testes →"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-índice-completo-de-componentes",children:"📋 Índice Completo de Componentes"}),`
`,e.jsx(s.p,{children:"Para lista completa com detalhes técnicos, exemplos de código e padrões de uso, consulte:"}),`
`,e.jsxs(s.p,{children:["📚 ",e.jsx(s.strong,{children:e.jsx(s.a,{href:"../../docs/development/component-index.md",children:"Índice Completo de Componentes"})})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-design-system",children:"🎨 Design System"}),`
`,e.jsx(s.p,{children:"Para informações sobre o sistema de design (cores, tipografia, espaçamento, etc):"}),`
`,e.jsxs(s.p,{children:["📚 ",e.jsx(s.strong,{children:e.jsx(s.a,{href:"../../docs/development/style-guide.md",children:"Guia de Estilos"})})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-criando-novos-componentes",children:"🚀 Criando Novos Componentes"}),`
`,e.jsx(s.p,{children:"Para aprender a criar seus próprios componentes seguindo os padrões do projeto:"}),`
`,e.jsxs(s.p,{children:["📚 ",e.jsx(s.strong,{children:e.jsx(s.a,{href:"../../docs/development/component-creation.md",children:"Guia de Criação de Componentes"})})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-busca-rápida",children:"🔍 Busca Rápida"}),`
`,e.jsx(s.p,{children:"Use a busca do Storybook (Ctrl+K / Cmd+K) para encontrar rapidamente qualquer componente ou story."}),`
`,e.jsx(s.p,{children:"Ou navegue pelas categorias na sidebar:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"UI"})," - Componentes de interface"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Layout"})," - Componentes de estrutura"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Sections"})," - Seções de página"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Animated"})," - Wrappers de animação"]}),`
`]})]})}function h(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default};
