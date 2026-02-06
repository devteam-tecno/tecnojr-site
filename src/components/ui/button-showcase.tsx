"use client";

import { ArrowRight, Eye, Filter, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Componente de demonstração das variantes de botão da TecnoJr
 * Este arquivo serve como referência visual e pode ser usado em Storybook ou páginas de teste
 */
export function ButtonShowcase() {
  return (
    <div className="space-y-12 rounded-xl bg-gradient-to-br from-tecno-black-800 via-gray-900 to-tecno-black-800 p-12">
      <div>
        <h2 className="mb-6 text-3xl font-bold text-white">
          Variantes de Botões TecnoJr
        </h2>
        <p className="mb-8 text-gray-400">
          Demonstração de todas as variantes personalizadas disponíveis
        </p>
      </div>

      {/* Gradient Primary */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">
          1. Gradient Primary
        </h3>
        <p className="text-sm text-gray-400">
          Botão principal com gradiente animado. Ideal para CTAs importantes.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="gradient-primary" size="lg" asChild>
            <Link href="/contato">
              Contate-nos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="gradient-primary" size="xl" asChild>
            <Link href="/contato">
              Tamanho XL
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="gradient-primary" disabled>
            Desabilitado
          </Button>
        </div>
      </div>

      {/* Gradient WhatsApp */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">
          2. Gradient WhatsApp
        </h3>
        <p className="text-sm text-gray-400">
          Específico para links do WhatsApp.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="gradient-whatsapp" asChild>
            <Link
              href="https://wa.me/5573999502325"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Link>
          </Button>
          <Button variant="gradient-whatsapp" size="lg">
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp (lg)
          </Button>
        </div>
      </div>

      {/* Gradient Secondary */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">
          3. Gradient Secondary
        </h3>
        <p className="text-sm text-gray-400">
          Para ações secundárias como e-mail.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="gradient-secondary" asChild>
            <Link href="/contato">
              <Mail className="mr-2 h-4 w-4" />
              E-mail
            </Link>
          </Button>
          <Button variant="gradient-secondary" size="lg">
            <Mail className="mr-2 h-5 w-5" />
            E-mail (lg)
          </Button>
        </div>
      </div>

      {/* Outline Gradient */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">
          4. Outline Gradient
        </h3>
        <p className="text-sm text-gray-400">
          Borda com fundo semi-transparente. Ótimo para filtros e tabs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline-gradient" size="lg">
            <Filter className="mr-2 h-4 w-4" />
            Filtro 1
          </Button>
          <Button variant="outline-gradient" size="lg">
            <Filter className="mr-2 h-4 w-4" />
            Filtro 2
          </Button>
          <Button variant="outline-gradient" size="default">
            Tamanho Default
          </Button>
        </div>
      </div>

      {/* Ghost Gradient */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">5. Ghost Gradient</h3>
        <p className="text-sm text-gray-400">
          Transparente com hover gradiente sutil.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost-gradient">
            <Eye className="mr-2 h-4 w-4" />
            Ver mais
          </Button>
          <Button variant="ghost-gradient" size="sm">
            Pequeno
          </Button>
          <Button variant="ghost-gradient" size="lg">
            Grande
          </Button>
        </div>
      </div>

      {/* Tamanhos */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Todos os Tamanhos</h3>
        <p className="text-sm text-gray-400">
          Demonstração de todos os tamanhos disponíveis com gradient-primary.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="gradient-primary" size="xs">
            Extra Small
          </Button>
          <Button variant="gradient-primary" size="sm">
            Small
          </Button>
          <Button variant="gradient-primary" size="default">
            Default
          </Button>
          <Button variant="gradient-primary" size="lg">
            Large
          </Button>
          <Button variant="gradient-primary" size="xl">
            Extra Large
          </Button>
        </div>
      </div>

      {/* Variantes Originais Shadcn (mantidas) */}
      <div className="space-y-4 border-t border-gray-800 pt-8">
        <h3 className="text-xl font-semibold text-white">
          Variantes Shadcn Originais
        </h3>
        <p className="text-sm text-gray-400">
          As variantes originais ainda estão disponíveis para casos específicos.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Estados */}
      <div className="space-y-4 border-t border-gray-800 pt-8">
        <h3 className="text-xl font-semibold text-white">Estados</h3>
        <p className="text-sm text-gray-400">
          Estados disabled para todas as variantes.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="gradient-primary" disabled>
            Primary Disabled
          </Button>
          <Button variant="gradient-whatsapp" disabled>
            WhatsApp Disabled
          </Button>
          <Button variant="gradient-secondary" disabled>
            Secondary Disabled
          </Button>
          <Button variant="outline-gradient" disabled>
            Outline Disabled
          </Button>
        </div>
      </div>

      {/* Ícones */}
      <div className="space-y-4 border-t border-gray-800 pt-8">
        <h3 className="text-xl font-semibold text-white">Com Ícones</h3>
        <p className="text-sm text-gray-400">
          Exemplos de botões com ícones em diferentes posições.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="gradient-primary">
            <ArrowRight className="mr-2 h-4 w-4" />
            Ícone à esquerda
          </Button>
          <Button variant="gradient-primary">
            Ícone à direita
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="gradient-primary" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="gradient-secondary" size="icon-lg">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
