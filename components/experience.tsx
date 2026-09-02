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
  const chronologicalExperiences = [...experiencesData].reverse();

  return (
    <section id="experience" ref={ref} className="mb-28 w-full scroll-mt-28 sm:mb-40">
      <SectionHeading>Experiência</SectionHeading>
      <div className="mb-8 sm:hidden">
        <div className="mb-4 flex items-center justify-between px-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          <span>2006</span>
          <span className="text-[var(--accent-strong)]">Linha do tempo</span>
          <span>Agora</span>
        </div>
        <div className="relative h-px bg-[var(--line-color)]">
          <span className="absolute inset-y-0 left-0 w-1/2 bg-[var(--accent)]" />
          <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
        </div>
        <div className="experience-carousel mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5">
          {chronologicalExperiences.map((item, index) => (
            <article
              className="experience-time-card relative w-[86vw] shrink-0 snap-center rounded-3xl border border-[var(--line-color)] bg-white/70 p-5 text-left dark:bg-white/5"
              key={`${item.title}-${index}`}
            >
              <span className="mb-4 inline-flex rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                {item.date}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-[var(--ink)] sm:text-xl">{item.title}</h3>
              <p className="!mt-1 !font-medium text-[var(--accent-strong)]">{item.location}</p>
              <p className="!mt-3 !font-light text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">{item.description}</p>
              {item.flags.length > 1 ? <h3 className="pt-4 font-normal">Stack e ferramentas</h3> : null}
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.flags.map((flag) => (
                  <li
                    key={flag}
                    className="rounded-lg border border-[var(--line-color)] bg-white/60 px-2.5 py-1.5 text-[0.68rem] font-medium text-[var(--muted)] dark:bg-white/5 dark:text-white/70"
                  >
                    {flag}
                  </li>
                ))}
              </ul>
              <span className="absolute -bottom-2 left-8 h-4 w-4 rounded-full border-4 border-[var(--page-bg)] bg-[var(--accent)]" />
            </article>
          ))}
        </div>
        <p className="text-center text-xs text-[var(--muted)] sm:hidden">Deslize para avançar pela trajetória</p>
      </div>

      <div className="hidden sm:block">
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
      </div>
    </section>
  );
}
