"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { cousersData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

import { LiaUniversitySolid } from "react-icons/lia";
import { FaRegClock, FaRegCalendarCheck } from "react-icons/fa6";

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

export default function Courses() {
  const { ref } = useSectionInView("Cursos");

  return (
    <section
      id="courses"
      ref={ref}
      className="mb-28 w-full scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Cursos / Certificações</SectionHeading>
      <p className="mb-5 text-xs text-[var(--muted)] sm:hidden">Deslize para explorar os cursos</p>
      <ul className="courses-carousel flex snap-x snap-mandatory flex-nowrap justify-start gap-4 overflow-x-auto pb-5 sm:flex-wrap sm:justify-center sm:gap-0 sm:overflow-visible sm:pb-0">
        {cousersData.map((course, index) => (
          <motion.li
            className="w-[86vw] shrink-0 snap-center p-3 sm:w-[27rem] sm:p-5"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex flex-col justify-start rounded-2xl border border-[var(--line-color)] bg-white/65 px-5 py-4 text-left transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[var(--shadow-soft)] dark:bg-white/5 dark:text-white/80">
              <h3 className="text-lg font-semibold tracking-tight text-[var(--ink)]">{course.title}</h3>
              <p className="text-sm font-extralight flex flex-row items-center justify-start gap-2 py-1">
                <LiaUniversitySolid size={20} />
                <b>Instituição:</b> {course.institution}
              </p>
              <p className="text-sm font-extralight flex flex-row items-center justify-start gap-2 py-1">
                <FaRegClock size={20} />
                <b>Duração:</b> {course?.workload}
              </p>
              <p className="text-sm font-extralight flex flex-row items-center justify-start gap-2 py-1">
                  <FaRegCalendarCheck size={20} />
                  <b>Período:</b> {course?.initialDate} - {course?.endDate}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
