"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaWhatsapp } from "react-icons/fa6";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-screen w-full flex-col justify-center px-2 text-center"
    >
      <p className="eyebrow mb-4">Sistemas • Produtos digitais • E-commerce</p>
      <motion.p
        className="mb-5 px-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-gradient sm:text-6xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "subsets",
          stiffness: 125,
          delay: 0.5,
          duration: 0.7,
        }}
      >
        <span>Olá, eu sou Samuel Alencar</span>
        <br />
        <span className="text-[0.7em] text-[var(--ink)]">Analista de Sistemas | Full Stack Developer</span>
      </motion.p>
      <motion.p
        className="mx-auto mb-10 max-w-2xl px-4 text-lg font-light leading-relaxed text-[var(--muted)] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "subsets",
          stiffness: 125,
          delay: 0.75,
          duration: 0.7,
        }}
      >
        <span className="text-xl font-light italic">
          "Transformo desafios de negócio em experiências digitais escaláveis, com arquitetura sólida e foco no usuário."
        </span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-[var(--ink)] px-7 py-3 text-white shadow-lg shadow-teal-950/10 outline-none transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] focus:scale-105 active:scale-100 dark:bg-[#54d2c3] dark:text-[#082326] dark:hover:bg-[#8ae8dc]"
          onClick={() => {
            setActiveSection("Contato");
            setTimeOfLastClick(Date.now());
          }}
        >
          Entre em contato{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-[var(--line-color)] bg-white/70 px-7 py-3 outline-none transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white focus:scale-105 active:scale-100 dark:bg-white/10 dark:hover:bg-white/15"
          href="/CV.pdf"
          download="CV.pdf"
        >
          Baixar currículo{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex flex-row gap-4">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/samuel-nascimento-alencar/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/SamuelAlencar"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://api.whatsapp.com/send?phone=5511952424064"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
