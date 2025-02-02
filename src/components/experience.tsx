"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experiência");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experiência</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                visibility: "visible",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
                visibility: "visible",
              }}
            >
              <h3 className="!font-normal text-lg">{item.title}</h3>
              <p className="!font-light !mt-0">{item.location}</p>
              <p className="!mt-1 !font-extralight text-gray-700 dark:text-white/75 ">
                {item.description}
              </p>
              {item.flags.length > 1 ? (
                <h3 className="font-normal pt-4">
                  Tecnologias utilizadas
                </h3>
              ) : null}

              {item?.flags && (
                <ul className="flex flex-wrap mt-4 gap-2">
                  {item.flags.map((flag) => (
                    <li
                      key={flag}
                      className="text-xs bg-white borderBlack rounded-xl px-2 py-1 dark:bg-white/10 dark:text-white/80 hover:transform hover:scale-105 transition-all cursor-pointer"
                    >
                      {flag}
                    </li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
