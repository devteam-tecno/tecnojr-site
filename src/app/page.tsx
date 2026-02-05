import Link from "next/link";
import { PageTransition } from "@/components/animated/page-transition";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <SectionWrapper className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950">
        <MaxWidthWrapper>
          <div className="space-y-8 text-center">
            <SectionTitle as="h1" size="lg" className="text-gradient-primary">
              TecnoJr
            </SectionTitle>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Empresa Júnior de Ciência da Computação da UESC
            </p>
            <p className="mx-auto max-w-3xl text-lg text-gray-400">
              Transformando ideias em soluções tecnológicas inovadoras com
              qualidade e profissionalismo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/sobre">Conheça a TecnoJr</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/sonhos">Nossos Projetos</Link>
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </SectionWrapper>

      {/* Temporary Content Section */}
      <SectionWrapper className="bg-zinc-950">
        <MaxWidthWrapper>
          <div className="space-y-4 text-center">
            <SectionTitle size="md">Site em Migração</SectionTitle>
            <p className="mx-auto max-w-2xl text-gray-400">
              Estamos migrando nosso site para uma stack moderna com Next.js 16,
              React 19, e Tailwind CSS 4. Em breve teremos todo o conteúdo
              disponível.
            </p>
          </div>
        </MaxWidthWrapper>
      </SectionWrapper>
    </PageTransition>
  );
}
