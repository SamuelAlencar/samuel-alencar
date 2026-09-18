"use client";

import { useEffect, useRef, useState } from "react";

const companies = [
  { name: "CAOA Chery", type: "Empresa", detail: "Soluções web e mobile, sustentação e evolução de aplicações. Caminhando para o terceiro projeto.", color: "#b89aff" },
  { name: "Sesc SP", type: "Empresa", detail: "Atuação em mais de 12 projetos, com sustentação e desenvolvimento de novas funcionalidades.", color: "#68c9f0" },
  { name: "Salon Line", type: "Empresa", detail: "Cerca de 3 projetos, incluindo e-commerce, funcionalidades e integrações de negócio.", color: "#f396c5" },
  { name: "Carrefour", type: "Empresa", detail: "Desenvolvimento e sustentação de e-commerce VTEX IO e BackOffice, com foco em arquitetura front-end.", color: "#79a9ff" },
  { name: "Compass.UOL", type: "Consultoria", detail: "Desenvolvimento para diferentes clientes, incluindo Livelo, Bradesco Seguros, Riachuelo e Yamaha Motos.", color: "#f9ab65" },
  { name: "Tok&Stok", type: "Empresa", detail: "Três versões de e-commerce, além de hotsites, landing pages e intranet.", color: "#addb95" },
  { name: "Livelo", type: "Cliente · Compass.UOL", detail: "Sustentação e desenvolvimento de novas funcionalidades para a plataforma Livelo, via Compass.UOL.", color: "#f58bd2" },
  { name: "Bradesco Seguros", type: "Cliente · Compass.UOL", detail: "Atuação em projetos para Bradesco Seguros por meio da consultoria Compass.UOL.", color: "#ff8e98" },
  { name: "Riachuelo", type: "Cliente · Compass.UOL", detail: "Atuação em projetos para Riachuelo por meio da consultoria Compass.UOL.", color: "#dccdb7" },
  { name: "Yamaha Motos", type: "Cliente · Compass.UOL", detail: "Evolução da jornada de e-commerce com experiências interativas, via Compass.UOL.", color: "#bcadff" },
];

export default function CompanyCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const interacting = useRef(false);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = 0;
    let direction = 1;
    let visible = false;
    const tick = (now: number) => {
      if (last && visible && !document.hidden && !paused && selected === null && !interacting.current && !reduced.matches) {
        const limit = element.scrollWidth - element.clientWidth;
        if (limit > 0) {
          element.scrollLeft += direction * Math.min(now - last, 40) * .035;
          if (element.scrollLeft >= limit - 1) direction = -1;
          else if (element.scrollLeft <= 0) direction = 1;
        }
      }
      last = now;
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(element);
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [paused, selected]);

  function navigate(direction: number) {
    setPaused(true);
    track.current?.scrollBy({ left: direction * 240, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  return <section className="company-showcase" aria-label="Empresas e clientes da trajetória">
    <div className="container company-showcase-heading"><div><span className="company-eyebrow">CONEXÕES QUE VIRARAM EXPERIÊNCIA</span><h2>Grandes marcas. <span>Histórias reais.</span></h2><p>Empresas da minha trajetória e clientes atendidos pela Compass.UOL.</p></div><div className="company-controls"><button type="button" onClick={() => navigate(-1)} aria-label="Empresas anteriores">←</button><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Retomar carrossel automático" : "Pausar carrossel automático"}>{paused ? "▶" : "Ⅱ"}</button><button type="button" onClick={() => navigate(1)} aria-label="Próximas empresas">→</button></div></div>
    <div className="company-track" ref={track} onPointerEnter={() => { interacting.current = true; }} onPointerLeave={() => { interacting.current = false; }} onTouchStart={() => setPaused(true)} onFocusCapture={() => { interacting.current = true; }} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) interacting.current = false; }}>
      {companies.map((company, index) => <button type="button" key={company.name} className={`company-tile ${selected === index ? "is-selected" : ""}`} style={{ borderColor: selected === index ? company.color : undefined }} aria-pressed={selected === index} aria-controls="company-detail" onClick={() => setSelected(selected === index ? null : index)}><span className="company-tile-top"><span>{String(index + 1).padStart(2, "0")}</span><span style={{ color: company.color }}>↗</span></span><strong style={{ color: company.color }}>{company.name}</strong><span className="company-tile-type">{company.type}</span></button>)}
    </div>
    <div className="container company-detail" id="company-detail" aria-live="polite">{selected !== null ? <div key={selected}><span style={{ color: companies[selected].color }}>{companies[selected].name}</span><p>{companies[selected].detail}</p><button type="button" onClick={() => setSelected(null)} aria-label="Fechar detalhes da empresa">×</button></div> : <p>Selecione uma marca para conhecer minha atuação <span aria-hidden="true">↗</span></p>}</div>
  </section>;
}
