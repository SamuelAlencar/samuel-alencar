import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "../components/footer";

describe("Component: Footer", () => {
  it("should renders footer component with correct content", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText(
        "@2024 Samuel Alencar - Web Developer. Todos os direitos reservados."
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        "desenvolvido com React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting."
      )
    ).toBeInTheDocument();
    expect(getByText("Sobre este site:")).toBeInTheDocument();
  });
});
