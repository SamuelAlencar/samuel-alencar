"use client";

import { useState } from "react";
import { profile } from "../data/portfolio";
import { Icon } from "./ui-icon";

export default function ContactActions() {
  const [message, setMessage] = useState("");
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setMessage("E-mail copiado!"); }
    catch { setMessage("Não foi possível copiar. Use o link de e-mail ao lado."); }
  }
  return <div className="contact-actions"><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}<Icon name="arrow" /></a><button className="copy-button" aria-label="Copiar endereço de e-mail" onClick={copyEmail}><Icon name={message === "E-mail copiado!" ? "check" : "copy"} size={18} /></button></div><p className="copy-message" role="status">{message || "Uma boa conversa pode ser o início de algo incrível."}</p></div>;
}
