import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import ThemeContextProvider from "../context/theme-context";
import ActiveSectionContextProvider from "../context/active-section-context";
import Contact from "../components/contact";

global.TextEncoder = require("util").TextEncoder;

describe("Component: Contact Form", () => {
  it("should validate all fields", () => {
    render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Contact />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    );


    const title = screen.getByText("Fale comigo");
    expect(title).toBeInTheDocument();

    const introTextPart1 = screen.getByText(
      /Por favor contacte-me diretamente em/i
    );
    expect(introTextPart1).toBeInTheDocument();
    const introTextPart2 = screen.getByText(/ou através deste formulário./i);
    expect(introTextPart2).toBeInTheDocument();

    const introLinkEmail = screen.getByText(/samuel.d.alencar@gmail.com/i);
    expect(introLinkEmail).toHaveAttribute("href", "mailto:samuel.d.alencar@gmail.com");

    const form = screen.getByRole("form");

    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    fireEvent.change(emailInput, { target: { value: "" } });
    const messageInput = screen.getByPlaceholderText(/mensagem/i);
    fireEvent.change(messageInput, { target: { value: "" } });

    fireEvent.submit(form);

    expect(emailInput).toHaveValue("");
    expect(messageInput).toHaveValue("");

    fireEvent.change(emailInput, { target: { value: "teste@teste.com" } });
    fireEvent.change(messageInput, { target: { value: "teste" } });

    fireEvent.submit(form);

    expect(emailInput).toHaveValue("teste@teste.com");
    expect(messageInput).toHaveValue("teste");

  });
});
