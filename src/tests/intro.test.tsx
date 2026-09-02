import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Intro from '../components/intro';

describe('Component: Intro', () => {
  it("should render correctly texts intruction", () => {
    render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Intro />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    );
    expect(screen.getByText(/Olá, eu sou Samuel Alencar/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Analista de Sistemas \| Full Stack Developer/i)
    ).toBeInTheDocument();
  });

  it("should open links correctly", () => {
    render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Intro />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    );
    const links = screen.getAllByRole("link");
    links.forEach(link => {
      expect(link).toHaveAttribute('href');
    });    
  });
});
