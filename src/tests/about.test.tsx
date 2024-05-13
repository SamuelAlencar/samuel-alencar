import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ThemeContextProvider from "../context/theme-context";
import ActiveSectionContextProvider from "../context/active-section-context";
import About from "../components/about";

describe("Component: About", () => {
  it("should render correctly texts", () => {
    render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <About />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    );

    const aboutElement = screen.getByText("Sobre");
    expect(aboutElement).toBeInTheDocument();

    const paragraphs = screen.getAllByRole('paragraph');
    expect(paragraphs.length).toBeGreaterThan(0);

  });
});
