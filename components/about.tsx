"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 mt-28 w-full scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "subsets",
        stiffness: 125,
        delay: 0.75,
        duration: 0.2,
      }}
      id="about"
    >
      <SectionHeading>
        Sobre
      </SectionHeading>
      <p className="glass-surface rounded-3xl p-6 text-lg leading-8 text-[var(--muted)] sm:p-9 sm:text-xl">
        Sou Analista de Sistemas e Full Stack Developer, com mais de
        15 anos de experiência em tecnologia e atuação sólida em e-commerce,
        integrações e aplicações web escaláveis.
      </p>
      <p className="mt-4 leading-8 text-[var(--muted)] sm:text-lg">
        Minha trajetória combina visão de negócio e profundidade técnica: atuo
        no levantamento de requisitos, na liderança técnica, na definição de
        arquiteturas front-end e no desenvolvimento de soluções com React.js,
        Next.js, Angular, Node.js e Java.
      </p>
      <p className="mt-4 leading-8 text-[var(--muted)] sm:text-lg">
        Tenho experiência com Azure DevOps, Oracle Commerce Cloud, VTEX IO, IBM
        WebSphere e Oracle Integration Cloud, colaborando com times
        multidisciplinares para transformar necessidades complexas em entregas
        consistentes.
      </p>
      <p className="mt-4 leading-8 text-[var(--muted)] sm:text-lg">
        Concluí em 2026 minha pós-graduação em Desenvolvimento Web pelo SENAC
        SP e sigo investindo em aprendizado contínuo, incluindo ferramentas de
        produtividade com IA, como Claude Code e Codex.
      </p>
      <p className="mt-4 leading-8 text-[var(--muted)] sm:text-lg">
        Estou aberto a desafios em ambientes dinâmicos, nos quais eu possa
        contribuir com visão sistêmica, qualidade técnica e evolução contínua
        de produtos digitais.
      </p>

    </motion.section>
  );
}
