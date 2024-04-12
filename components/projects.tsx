"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";


export interface ProjectsProps {
  ref: React.RefObject<HTMLDivElement>;
  inView: boolean;

  setActiveSection: (sectionName: string) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;

  activeSection: string;
  index: number;

  sectionInView: boolean;
}

export default function Projects(props: ProjectsProps) {
  const { ref } = useSectionInView("Projetos", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
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
