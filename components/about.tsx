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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre</SectionHeading>
      <p className="mb-3">
        Sou um profissional apaixonado por tecnologias web, <span className="font-medium">bacharel em Sistemas de Informação</span> pela <span className="font-bold">Universidade Bandeirantes em 2011</span>. Com <span className="font-bold">13 anos</span> de experiência sólida, obtive certificações pelo <span className="font-bold">Grupo Impacta</span> em <span className="font-bold">React + Redux</span>, <span className="font-bold">Reactive Native</span>, <span className="bold">JQuery</span> e <span className="bold">Javascript</span>.
      </p>

      <p className="mb-3">
      Ao longo da minha carreira, atuei como <span className="font-bold">Analista de Sistemas Ecommerce</span> na <span className="font-bold">SalonLine</span>, liderando a concepção, planejamento, desenvolvimento e integração de sistemas. Anteriormente, fui <span className="font-bold">Consultor de Tecnologia</span> no <span className="font-bold">Grupo Carrefour</span>, contribuindo para o maior grupo de varejo alimentar do Brasil por 2 anos.
      </p>

      <p className="mb-3">
      Na <span className="font-bold">Compasso UOL</span>, uma renomada empresa de tecnologia, participei ativamente da implantação de <span className="font-bold">Oracle Cloud Commerce(OCC)</span> em clientes de destaque como <span className="font-bold">Livelo, Malharia Anselmi, Osklen e Yamaha</span>, durante 1 ano e 9 meses.
      </p>

      <p className="mb-3">
      Ao longo de 12 anos, desempenhei um papel fundamental em uma empresa líder do setor varejista de Móveis e Decoração, a <span className="font-bold">Tok&Stok</span>. Durante 5 anos, integrei a equipe de Marketing e, nos últimos 7 anos, integrei a equipe responsável pelo <span className="font-bold">E-Commerce</span>, desde a primeira versão até a quarta.        
      </p>

      <p>
      Minha expertise abrange implantações de E-Commerces em diversas plataformas, desde soluções open source como Opencart, Magento, Wordpress e All-In, até plataformas empresariais como IBM-WebSphere, Oracle CX Commerce(OCC/OSF), Oracle Integration Cloud(OIC), Oracle Responsys, VTEX, entre outras. Estou comprometido em impulsionar o sucesso através da inovação e soluções tecnológicas.
      </p>
    </motion.section>
  );
}
