"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CiLink } from "react-icons/ci";


type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  linkUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${y * -3}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 3}deg`);
  }

  function resetTilt(event: React.PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-5 w-full last:mb-0 sm:mb-8"
    >
      <section onPointerMove={handlePointerMove} onPointerLeave={resetTilt} className="project-card relative w-full overflow-hidden rounded-3xl border border-[var(--line-color)] bg-white/70 transition duration-300 hover:border-[var(--accent)] hover:shadow-[var(--shadow-soft)] sm:h-[21rem] sm:pr-8 sm:group-even:pl-8 dark:bg-white/5">
        <div className="flex h-full flex-col px-6 pb-7 pt-6 sm:max-w-[60%] sm:pl-10 sm:pr-2 sm:pt-9 sm:group-even:ml-[18rem]">
          <p className="eyebrow mb-2">Projeto em destaque</p>
          <h3 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">{title}</h3>
          <p className="line-mt-2 pb-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {description}
          </p>
          {linkUrl.startsWith("http") ? (
            <a href={linkUrl} target="_blank" rel="noreferrer" className="my-4 flex flex-row items-center gap-2 text-sm font-medium text-[var(--accent-strong)] transition hover:gap-3 sm:mt-auto"><CiLink size={24}/><span>Visitar projeto</span></a>
          ) : (
            <span className="my-4 flex flex-row items-center gap-2 text-sm font-medium text-[var(--muted)] sm:mt-auto"><CiLink size={24}/><span>Imagem em breve</span></span>
          )}
          <ul className="flex flex-wrap mt-4 gap-1 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-[var(--ink)]/90 px-2.5 py-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-white/90 dark:bg-white/10"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Prévia do projeto ${title}`}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        ) : (
          <div className="project-image-placeholder absolute right-8 top-8 hidden h-[15rem] w-[28.25rem] items-center justify-center rounded-2xl border border-dashed border-teal-300/35 bg-teal-300/[0.04] sm:flex">
            <div className="text-center">
              <span className="mx-auto mb-3 block h-10 w-10 rounded-xl border border-teal-300/40 bg-teal-300/10" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200/70">Imagem do projeto</p>
              <p className="mt-1 text-xs text-white/35">Disponível para substituição</p>
            </div>
          </div>
        )}
      </section>
    </motion.div>
  );
}
