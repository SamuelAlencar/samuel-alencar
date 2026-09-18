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
  title: "Samuel Alencar — Full Stack Developer",
  description: "Portfólio de Samuel Alencar, Analista de Sistemas e Full Stack Developer. Experiências em aplicações web, mobile, e-commerce e integrações.",
  openGraph: {
    title: "Samuel Alencar — Código com propósito",
    description: "Tecnologia, pessoas e negócios conectados através de experiências digitais.",
    locale: "pt_BR",
    type: "website",
  },
};

// O layout raiz define o idioma, os metadados e a fonte compartilhada.
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR" className={manrope.variable}><body>{children}</body></html>;
}
