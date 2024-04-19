import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import ThemeContextProvider from "../context/theme-context";
import ActiveSectionContextProvider from "../context/active-section-context";
import Header from "../components/header";

describe("Component: Header", () => {
  describe("links", () => {
    it("become active when clicked", () => {
      const links = [
        { name: "Home", hash: "#home" },
        { name: "Sobre", hash: "#about" },
        { name: "Experiência", hash: "#experience" },
        { name: "Projetos", hash: "#projects" },
        { name: "Skills", hash: "#skills" },
        { name: "Cursos", hash: "#courses" },
        { name: "Contato", hash: "#contact" },
      ];

      const { getByText } = render(
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      );

      links.forEach(({ name, hash }) => {
        const link = getByText(name);
        fireEvent.click(link);
        expect(link).toHaveAttribute("href", hash);
      });
    });
  });
});
