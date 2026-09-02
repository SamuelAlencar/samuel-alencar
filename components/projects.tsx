"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";


export interface ProjectsProps {}

export default function Projects(props: ProjectsProps) {
  const { ref } = useSectionInView("Projetos", 0.5);

  return (
    <section data-testid="projects-list" ref={ref} id="projects" className="mb-28 w-full scroll-mt-28">
      <SectionHeading>Projetos</SectionHeading>
      <p className="mb-5 text-xs text-[var(--muted)] sm:hidden">Deslize para explorar os projetos</p>
      <div className="projects-carousel flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 sm:block sm:overflow-visible sm:pb-0">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
