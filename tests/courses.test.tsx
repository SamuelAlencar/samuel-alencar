import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ThemeContextProvider from "../context/theme-context";
import ActiveSectionContextProvider from "../context/active-section-context";
import Courses from "../components/courses";
import { cousersData } from "../lib/data";

describe("Component: Courses", () => {
  it("should render correctly texts", () => {
    render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Courses />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    );

    const title = screen.getByText("Cursos / Certificações");
    expect(title).toBeInTheDocument();

    const courses = screen.getAllByRole("listitem");
    expect(courses.length).toBe(cousersData.length);

    courses.forEach((course) => {
      const title = course.querySelector("h3");
      const institution = course.querySelector("p");
      expect(title).toBeInTheDocument();
      expect(institution).toBeInTheDocument();

      const { title: courseTitle, institution: courseInstitution } = cousersData[courses.indexOf(course)];
      expect(title?.textContent).toBe(courseTitle);
      expect(institution?.textContent).toBe(`Instituição: ${courseInstitution}`);

      const { workload } = cousersData[courses.indexOf(course)];
      const workloadElement = course.querySelector("p:nth-child(3)");
      expect(workloadElement).toBeInTheDocument();
      expect(workloadElement?.textContent).toBe(`Duração: ${workload}`);

      const { initialDate, endDate } = cousersData[courses.indexOf(course)];
      const dateElement = course.querySelector("p:last-child");
      expect(dateElement).toBeInTheDocument();
      expect(dateElement?.textContent).toBe(`Período: ${initialDate} - ${endDate}`);
      
    });
    
  });
});
