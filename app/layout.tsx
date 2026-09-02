
import * as React from 'react';
import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import AmbientEffects from "@/components/ambient-effects";

export const metadata = {
  title: "Samuel Alencar | Analista de Sistemas e Full Stack Developer",
  description:
    "Portfólio de Samuel Alencar, com atuação em e-commerce, integrações de sistemas e aplicações web escaláveis. Experiência em React, Next.js, Angular, Node.js, Java, Azure DevOps, Oracle Commerce Cloud e VTEX IO.",
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="relative overflow-x-hidden text-gray-950 dark:text-gray-50 md:pl-24">
        <AmbientEffects />
        <div className="pointer-events-none fixed -top-40 right-[-12rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-teal-300/20 blur-[9rem] dark:bg-teal-500/10" />
        <div className="pointer-events-none fixed top-[34rem] left-[-18rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-200/20 blur-[8rem] dark:bg-cyan-700/10" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
