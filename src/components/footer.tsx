import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500" role="footer">
      <small className="mb-2 block text-xs">
        @2024 Samuel Alencar - Web Developer. Todos os direitos reservados.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este site:</span> desenvolvido com
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
