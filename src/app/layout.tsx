import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SkipLink } from "@/components/ui/skip-link";
import { generateRootMetadata } from "@/lib/utils/metadata";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = generateRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${montserrat.variable} bg-tecno-black-800 font-sans text-white antialiased`}
      >
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
