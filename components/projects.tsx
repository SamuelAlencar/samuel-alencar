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
    <section data-testid="projects-list" ref={ref} id="projects" className="scroll-mt-28 mb-28 ">
      <SectionHeading>Projetos</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
