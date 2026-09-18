"use client";

import { useEffect, useState } from "react";
import { Icon } from "./ui-icon";

const links = [["sobre", "Sobre"], ["projetos", "Projetos"], ["experiencia", "Experiência"], ["habilidades", "Habilidades"]];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (open) document.querySelector<HTMLAnchorElement>("#main-navigation a")?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme") === "dark";
      setDark(saved);
      document.documentElement.dataset.theme = saved ? "dark" : "light";
    } catch { /* A navegação continua funcionando quando o armazenamento está bloqueado. */ }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -60% 0px" });
    document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", next ? "dark" : "light"); } catch { /* O tema também funciona sem persistência. */ }
  }

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    }}>
      <div className="header-inner container">
        <a className="brand" href="#inicio" aria-label="Samuel Alencar — início" onClick={() => setOpen(false)}>
          <span className="brand-monogram">sa<span>.</span></span>
          <span className="brand-name">Samuel Alencar<span>DEVELOPER & PROBLEM SOLVER</span></span>
        </a>
        <nav id="main-navigation" className={`navigation ${open ? "is-open" : ""}`} aria-label="Navegação principal">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="mobile-contact" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <Icon name="arrow" size={16} /></a>
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-toggle" aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"} onClick={toggleTheme}><Icon name={dark ? "sun" : "moon"} size={18} /></button>
          <a className="header-contact" href="#contato">Vamos conversar <Icon name="arrow" size={16} /></a>
          <button id="menu-toggle" className="icon-button menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
        </div>
      </div>
    </header>
  );
}
