"use client";

import { useState } from "react";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  const [selected, setSelected] = useState(0);
  return <div className="skills-explorer">
    <div className="skill-categories" aria-label="Categorias de habilidades">{skillGroups.map((group, index) => <button key={group.label} className={selected === index ? "selected" : ""} aria-pressed={selected === index} aria-controls="skill-panel" onClick={() => setSelected(index)}><span className="skill-number">0{index + 1}</span>{group.label}<span className="skill-arrow" aria-hidden="true">↗</span></button>)}</div>
    <div className="skill-panel" id="skill-panel" aria-live="polite"><span className="eyebrow">MINHA CAIXA DE FERRAMENTAS</span><h3>{skillGroups[selected].label}<span>.</span></h3><div className="skill-pills" key={selected}>{skillGroups[selected].skills.map((skill) => <span key={skill}>{skill}</span>)}</div><p>Tecnologia escolhida pelo desafio.<br />Qualidade presente em cada entrega.</p><span className="skill-decoration" aria-hidden="true">&#123; &#125;</span></div>
  </div>;
}
