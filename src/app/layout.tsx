import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TecnoJr | Empresa Júnior de Computação UESC",
    template: "%s | TecnoJr",
  },
  description:
    "A TecnoJr é a empresa júnior do curso de Ciência da Computação da UESC. Desenvolvemos soluções tecnológicas inovadoras com qualidade e profissionalismo.",
  keywords: [
    "TecnoJr",
    "Empresa Júnior",
    "UESC",
    "Desenvolvimento Web",
    "Tecnologia",
    "Ilhéus",
  ],
  authors: [{ name: "TecnoJr" }],
  creator: "TecnoJr",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://tecnojr.com.br",
    title: "TecnoJr | Empresa Júnior de Computação UESC",
    description:
      "A TecnoJr é a empresa júnior do curso de Ciência da Computação da UESC. Desenvolvemos soluções tecnológicas inovadoras.",
    siteName: "TecnoJr",
  },
  twitter: {
    card: "summary_large_image",
    title: "TecnoJr - Empresa Júnior de Computação UESC",
    description:
      "A TecnoJr é a empresa júnior do curso de Ciência da Computação da UESC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${montserrat.variable} bg-tecno-black font-sans text-white antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
