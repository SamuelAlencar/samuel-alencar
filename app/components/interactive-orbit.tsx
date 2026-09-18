"use client";

import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

const nodes = [
  { name: "React", mark: "⚛", detail: "Interfaces que aproximam pessoas.", code: "createExperience()", color: "#317b91" },
  { name: "Next.js", mark: "N", detail: "Do primeiro acesso à última interação.", code: "buildForTheWeb()", color: "#292738" },
  { name: "TypeScript", mark: "TS", detail: "Clareza e confiança em cada entrega.", code: "type Ideas = Solutions", color: "#386ec1" },
  { name: "Node.js", mark: "JS", detail: "Conectando sistemas e possibilidades.", code: "connectTheDots()", color: "#577d47" },
];

export default function InteractiveOrbit() {
  const [selected, setSelected] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const current = selected === null ? null : nodes[selected];

  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({ x: ((event.clientX - rect.left) / rect.width - 0.5) * 10, y: ((event.clientY - rect.top) / rect.height - 0.5) * -10 });
  }

  return (
    <div className="orbit-scene" onPointerMove={move} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="orbit-grid" aria-hidden="true" />
      <span className="scene-coordinate coordinate-top" aria-hidden="true">IDEIA → CÓDIGO → IMPACTO</span>
      <div className="orbit-ring ring-outer" aria-hidden="true"><span /></div>
      <div className="orbit-ring ring-inner" aria-hidden="true" />
      <div className="orbit-cross cross-one" aria-hidden="true">+</div><div className="orbit-cross cross-two" aria-hidden="true">+</div>
      <div className="code-card" style={{ transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}>
        <div className="code-card-bar"><span><i /><i /><i /></span><span>samuel.dev</span><span>↗</span></div>
        <div className="code-card-body">
          <span className="code-comment">// construindo possibilidades</span>
          <div className="code-name"><span>&lt;</span>Samuel <span>/&gt;</span></div>
          <div className="code-line"><span>const</span> foco = <em>&apos;{current ? current.name : "impacto real"}&apos;</em>;</div>
          <div className="code-line"><span>return</span> {current ? current.code : "ideias.transformar()"};</div>
          <div className="code-card-footer"><span className="green-dot" /> Full stack. Full of ideas.<span className="blinking-cursor">▌</span></div>
        </div>
      </div>
      {nodes.map((node, index) => <button key={node.name} className={`orbit-node node-${index} ${selected === index ? "selected" : ""}`} style={{ "--node-color": node.color } as CSSProperties} aria-label={`Explorar ${node.name}`} aria-pressed={selected === index} onClick={() => setSelected(selected === index ? null : index)}><span>{node.mark}</span><small>{node.name}</small></button>)}
      <div className="orbit-status"><span className="orbit-status-icon">✧</span><span>Código com propósito<strong>Do front ao back.</strong></span></div>
      <p className="orbit-hint" aria-live="polite">{current ? current.detail : "Explore as tecnologias ao redor ↗"}</p>
    </div>
  );
}
