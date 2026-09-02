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
    <section id="experience" ref={ref} className="mb-28 w-full scroll-mt-28 sm:mb-40">
      <SectionHeading>Experiência</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="timeline-card"
              contentStyle={{
                background:
                  theme === "light" ? "rgba(255, 255, 255, 0.78)" : "rgba(19, 39, 42, 0.78)",
                boxShadow: "none",
                border: "1px solid var(--line-color)",
                textAlign: "left",
                padding: "1.5rem 2rem",
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
              <h3 className="!font-semibold text-xl tracking-tight text-[var(--ink)]">{item.title}</h3>
              <p className="!mt-1 !font-medium text-[var(--accent-strong)]">{item.location}</p>
              <p className="!mt-3 !font-light leading-7 text-[var(--muted)]">
                {item.description}
              </p>
              {item.flags.length > 1 ? (
                <h3 className="font-normal pt-4">
                  Stack e ferramentas
                </h3>
              ) : null}

              {item?.flags && (
                <ul className="flex flex-wrap mt-4 gap-2">
                  {item.flags.map((flag) => (
                    <li
                      key={flag}
                      className="cursor-pointer rounded-lg border border-[var(--line-color)] bg-white/60 px-2.5 py-1.5 text-[0.68rem] font-medium text-[var(--muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent-strong)] dark:bg-white/5 dark:text-white/70"
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
