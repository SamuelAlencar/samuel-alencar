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
      <SectionHeading>Sobre</SectionHeading>
      <p className="pb-4 font-extralight">
        Sou um Analista de Sistemas e Desenvolvedor Front-end Sênior com
        trajetória consolidada em e-commerce, integrações entre sistemas e
        aplicações web escaláveis.
      </p>
      <p className="pb-4 font-extralight">
        Atuo com levantamento e documentação de requisitos, arquitetura
        front-end, desenvolvimento de funcionalidades, sustentação de
        plataformas e colaboração próxima com times multidisciplinares.
      </p>
      <p className="pb-4 font-extralight">
        Minha experiência inclui React.js, Next.js, Angular, Node.js, Java,
        Azure DevOps e plataformas como Oracle Commerce Cloud, VTEX IO, IBM
        WebSphere e Oracle Integration Cloud.
      </p>
      <p className="pb-4 font-extralight">
        Também mantenho evolução contínua com pós-graduação em Desenvolvimento
        Web e cursos recentes em Node.js, Next.js, React e produtividade com
        IA.
      </p>
    </motion.section>
  );
}
