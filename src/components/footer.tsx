import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mb-10 mt-8 border-t border-[var(--line-color)] px-4 pt-8 text-center text-[var(--muted)]" role="footer">
      <small className="mb-2 block text-xs">
        © {year} Samuel Alencar - Analista de Sistemas e Full Stack Developer.
        Todos os direitos reservados.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este site:</span> portfólio
        desenvolvido com React, Next.js, TypeScript, Tailwind CSS, Framer Motion
        e Vercel.
      </p>
    </footer>
  );
}
