"use client";

import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

export default function HeroEnergy() {
  const [charged, setCharged] = useState(false);
  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - .5;
    const y = (event.clientY - box.top) / box.height - .5;
    event.currentTarget.style.setProperty("--tilt-x", `${-y * 24}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 28}deg`);
    event.currentTarget.style.setProperty("--glow-x", `${50 + x * 45}%`);
    event.currentTarget.style.setProperty("--glow-y", `${50 + y * 45}%`);
  }
  return (
    <div className={`hero-energy ${charged ? "is-charged" : ""}`} onPointerMove={move} onPointerLeave={(event) => {
      ["--tilt-x", "--tilt-y", "--glow-x", "--glow-y"].forEach((name) => event.currentTarget.style.removeProperty(name));
    }}>
      <div className="energy-aura" />
      <div className="energy-sphere">
        <div className="energy-ring energy-ring-one" />
        <div className="energy-ring energy-ring-two" />
        <div className="energy-ring energy-ring-three" />
        <button type="button" className="energy-core" aria-label="Ativar energia do átomo" aria-pressed={charged} onClick={() => setCharged(!charged)}><span aria-hidden="true">&lt;/&gt;</span></button>
      </div>
      <div className="energy-particles">
        {Array.from({ length: 32 }, (_, index) => <i key={index} style={{ "--x": `${(index * 37) % 100}%`, "--y": `${(index * 61) % 100}%`, "--delay": `${index * -.43}s`, "--duration": `${5 + index % 5}s` } as CSSProperties} />)}
      </div>
      <span className="energy-label energy-label-top">IDEIAS EM MOVIMENTO</span>
      <span className="energy-label energy-label-bottom">{charged ? "ENERGIA ATIVADA · CLIQUE PARA DESATIVAR" : "EXPLORE COM O MOUSE · CLIQUE NO NÚCLEO"}</span>
    </div>
  );
}
