"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Habilidades");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Habilidades</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2.5 text-lg text-gray-800 dark:text-white">
        {skillsData.map((skill, index) => (
          <motion.li
            className="rounded-xl border border-[var(--line-color)] bg-white/65 px-4 py-2.5 text-xs font-medium text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent-strong)] dark:bg-white/5 dark:text-white/75"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
