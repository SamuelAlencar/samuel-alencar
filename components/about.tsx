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
      className="mb-28 mt-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
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
      <p className="pb-4 items-start font-extralight">
        Sou Analista de Sistemas e Desenvolvedor Front-end Sênior, com
        experiência consolidada em e-commerce, integrações e aplicações web
        escaláveis.
      </p>
      <p className="pb-4 align-left font-extralight">
        Ao longo da minha trajetória, atuo com levantamento de requisitos,
        liderança técnica, arquitetura front-end e desenvolvimento de soluções
        orientadas ao negócio, usando React.js, Next.js, Angular, Node.js e Java.
      </p>
      <p className="pb-4 align-left font-extralight">
        Também trabalho com Azure DevOps, Oracle Commerce Cloud, VTEX IO, IBM
        WebSphere e Oracle Integration Cloud, sempre em colaboração com times
        multidisciplinares.
      </p>
      <p className="pb-4 align-left font-extralight">
        Em 2026, concluí minha pós-graduação em Desenvolvimento Web pelo SENAC
        SP, reforçando meu compromisso com aprendizado contínuo.
      </p>
      <p className="pb-4 align-left font-extralight">
        Busco desafios em ambientes dinâmicos, nos quais eu possa transformar
        requisitos complexos em produtos digitais de qualidade.
      </p>

    </motion.section>
  );
}
