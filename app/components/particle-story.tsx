"use client";

import { useEffect, useRef } from "react";

export default function ParticleStory() {
  const section = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = section.current;
    const surface = canvas.current;
    const context = surface?.getContext("2d");
    if (!root || !surface || !context) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = false;
    let width = 0;
    let height = 0;
    let time = 0;
    let previous = 0;
    const dots = Array.from({ length: 380 }, (_, index) => ({
      x: ((index * 137.508) % 997) / 997,
      y: ((index * 71.317) % 991) / 991,
      size: .7 + ((index * 13) % 31) / 10,
      phase: index * .81,
    }));
    const draw = (stamp: number) => {
      frame = 0;
      if (!visible || document.hidden) { previous = 0; return; }
      if (previous && !motion.matches) time += Math.min(stamp - previous, 50) / 1000;
      previous = stamp;
      const bounds = root.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -bounds.top / Math.max(1, root.offsetHeight - innerHeight)));
      root.style.setProperty("--story-progress", String(motion.matches ? 0 : progress));
      context.clearRect(0, 0, width, height);
      for (const dot of dots) {
        const wave = motion.matches ? 0 : Math.sin(time * .3 + dot.phase) * 13;
        const x = dot.x * width + wave;
        const y = ((dot.y * height + (motion.matches ? 0 : time * (3 + dot.size) + progress * 100)) % (height + 20)) - 10;
        const glow = Math.max(0, 1 - Math.hypot((x / width - .65) * 1.2, (y / height - .75) * 1.6));
        context.fillStyle = `rgba(${Math.round(97 + glow * 147)}, ${Math.round(86 - glow * 12)}, ${Math.round(62 - glow * 39)}, ${.25 + glow * .6})`;
        context.beginPath();
        context.arc(x, y, dot.size, 0, Math.PI * 2);
        context.fill();
      }
      if (!motion.matches) frame = requestAnimationFrame(draw);
    };
    const refresh = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      frame = requestAnimationFrame(draw);
    };
    const resize = new ResizeObserver(() => {
      const rect = surface.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      surface.width = Math.round(width * ratio);
      surface.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      refresh();
    });
    resize.observe(surface);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; refresh(); });
    observer.observe(root);
    motion.addEventListener("change", refresh);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      motion.removeEventListener("change", refresh);
      document.removeEventListener("visibilitychange", refresh);
      root.style.removeProperty("--story-progress");
    };
  }, []);

  return (
    <section className="particle-story" ref={section} aria-labelledby="story-title">
      <div className="particle-story-stage">
        <canvas ref={canvas} className="particle-story-canvas" aria-hidden="true" />
        <div className="story-heading">
          <span className="story-eyebrow">IDEIA. INTENÇÃO. IMPACTO.</span>
          <h2 id="story-title">Entender o desafio.<br />Conectar as possibilidades.<br /><span>Construir o que vem depois.</span></h2>
        </div>
        <div className="story-cards">
          <article className="story-card"><span>01 / VISÃO</span><p>A tecnologia começa com uma boa pergunta. Entender pessoas e negócios dá direção ao código.</p></article>
          <article className="story-card"><span>02 / CONSTRUÇÃO</span><p>Da interface à integração, transformo desafios em experiências digitais com propósito.</p></article>
          <article className="story-card"><span>03 / IMPACTO</span><p>O trabalho continua após a entrega: sustentar, evoluir e criar novas possibilidades para pessoas e negócios.</p></article>
        </div>
        <a className="story-next" href="#projetos">EXPLORE OS PROJETOS <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
