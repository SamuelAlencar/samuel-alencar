"use client";

import { useEffect, useRef, useState } from "react";

export default function ProjectCounter({
  total = 25,
  label = "Projetos e entregas digitais",
  note = "Estimativa ao longo da trajetória",
}: { total?: number; label?: string; note?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(total);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const finish = () => {
      if (reduced.matches) { cancelAnimationFrame(frame); setCount(total); }
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (reduced.matches) return;
      const start = performance.now();
      setCount(0);
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1800, 1);
        setCount(Math.round(total * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .5 });
    observer.observe(element);
    reduced.addEventListener("change", finish);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); reduced.removeEventListener("change", finish); };
  }, [total]);

  return <div className="hero-stat project-counter" ref={root}>
    <strong aria-label={`Mais de ${total}`}><span className="counter-number" aria-hidden="true">{count}</span><span aria-hidden="true">+</span></strong>
    <span>{label}</span>
    {note && <small>{note}</small>}
  </div>;
}
