"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { cousersData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
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
      className="mb-28 w-full md:w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Cursos / Certificações</SectionHeading>
      <ul className="flex flex-wrap flex-col md:flex-row justify-center">
        {cousersData.map((course, index) => (
          <motion.li
            className="w-full md:w-[27rem] p-5"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex flex-col justify-start bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              <h3 className="font-semibold text-lg">{course.title}</h3>
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
