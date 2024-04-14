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
        Sou um profissional de Tecnologia da Informação com experiência
        consolidada como Analista de Sistemas E-commerce e Desenvolvedor
        Front-End.
      </p>
      <p className="pb-4 align-left font-extralight">
        Ao longo da minha trajetória, destaco minha habilidade em liderança
        técnica, desenvolvimento de aplicações web e integrações de sistemas.
        Minha especialização abrange tecnologias como React.js, Node.js, e
        frameworks associados.
      </p>
      <p className="pb-4 align-left font-extralight">
        Possuo competências comprovadas em metodologias ágeis, controle de
        versão e gestão eficiente de backlog.{" "}
      </p>
      <p className="pb-4 align-left font-extralight">
        Meu histórico em empresas líderes do setor reflete minha expertise em
        resolução de problemas, arquitetura front-end e implementação de
        soluções inovadoras.{" "}
      </p>
      <p className="pb-4 align-left font-extralight">
        Estou em busca de desafios em um ambiente dinâmico, onde eu possa
        aplicar e ampliar minhas habilidades.
      </p>

    </motion.section>
  );
}
