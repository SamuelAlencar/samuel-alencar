import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Project from '../components/project';
import { projectsData } from "@/lib/data";

describe('Component: Projects', () => {
  it("should render correctly ", () => {
    render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Project {...projectsData[0]} />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    );
    expect(screen.getByText(projectsData[0].title)).toBeInTheDocument();
    expect(screen.getByText(projectsData[0].description)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

});

