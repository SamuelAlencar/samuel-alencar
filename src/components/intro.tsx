"use client";

import Image from "next/image";
import React from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaWhatsapp } from "react-icons/fa6";

function CommandMetric({ value, label, detail }: { value: number; label: string; detail: string }) {
  const count = useMotionValue(0);
  const displayValue = useTransform(count, (latest) => Math.round(latest).toLocaleString("pt-BR"));

  React.useEffect(() => {
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:border-teal-300/50 hover:bg-teal-300/[0.07]">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/45">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-white"><motion.span>{displayValue}</motion.span><span className="text-teal-300">+</span></p>
      <p className="mt-1 text-xs text-white/45">{detail}</p>
    </div>
  );
}


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 w-full scroll-mt-[100rem] px-2 text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="avatar-frame relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/IMG_20220919_121524 (1).jpg"
              alt="Samuel Alencar"
              width="611"
              height="611"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full border-[0.35rem] border-white object-cover shadow-xl shadow-teal-900/15"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mx-auto mt-8 w-full overflow-hidden rounded-[2rem] border border-teal-200/15 bg-[#0b2023] p-4 text-left shadow-2xl shadow-teal-950/20 sm:p-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-teal-300">Mission control / 01</p>
            <p className="mt-1 text-sm text-white/55">Painel de inteligência profissional</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-teal-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-teal-300 shadow-[0_0_12px_#54d2c3]" /> Sistema online
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <CommandMetric value={15} label="Experiência" detail="anos em tecnologia" />
          <CommandMetric value={7} label="Trajetória" detail="empresas e operações" />
          <CommandMetric value={5} label="Projetos" detail="cases selecionados" />
        </div>
        <div className="signal-graph mt-4 flex h-8 items-end gap-1.5 rounded-xl border border-white/10 bg-black/10 px-3 py-2">
          {[35, 58, 42, 76, 52, 88, 64, 95, 70, 82, 61, 90, 74, 100].map((height, index) => (
            <span key={index} style={{ height: `${height}%`, animationDelay: `${index * 45}ms` }} />
          ))}
        </div>
      </motion.div>

      <p className="eyebrow mb-4 mt-8">Sistemas • Produtos digitais • E-commerce</p>
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
        <span className="text-[0.7em] text-[var(--ink)]">Analista de Sistemas | Desenvolvedor Front-end Sênior</span>
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
          href="/Curriculo_Samuel_Alencar_Atualizado.docx"
          download="Curriculo_Samuel_Alencar_Atualizado.docx"
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
