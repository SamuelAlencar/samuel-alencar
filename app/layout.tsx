import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: [
    { path: "../public/fonts/manrope-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/manrope-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/manrope-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/manrope-700.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/manrope-800.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samuel Alencar — Analista de Sistemas e Full Stack Sênior",
  description: "Portfólio de Samuel Alencar, Analista de Sistemas e Desenvolvedor Full Stack Sênior com experiência em liderança técnica, e-commerce, integrações, DevOps e IA aplicada.",
  openGraph: {
    title: "Samuel Alencar — Full Stack Sênior e liderança técnica",
    description: "Aplicações web e mobile, e-commerce, integrações, DevOps e IA aplicada com visão de negócio.",
    locale: "pt_BR",
    type: "website",
  },
};

// O layout raiz define o idioma, os metadados e a fonte compartilhada.
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR" className={manrope.variable}><body>{children}</body></html>;
}
