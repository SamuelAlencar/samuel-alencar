import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Projects from '../components/projects';

describe('Component: Projects', () => {
  it("should render correctly ", () => {
    render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Projects />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    );

    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByTestId("projects-list")).toBeInTheDocument();

  });

});
