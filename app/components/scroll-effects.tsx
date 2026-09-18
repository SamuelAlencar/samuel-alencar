"use client";

import { useEffect, useRef } from "react";

export default function ScrollEffects() {
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Web Animations mantém o conteúdo visível mesmo sem JavaScript.
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (!media.matches) animations.push(entry.target.animate([{ opacity: 0, transform: "translateY(26px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 650, easing: "cubic-bezier(.2,.7,.2,1)", fill: "none" }));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    const stopAnimations = () => { if (media.matches) animations.forEach((animation) => animation.cancel()); };
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    media.addEventListener("change", stopAnimations);
    return () => { observer.disconnect(); animations.forEach((animation) => animation.cancel()); window.removeEventListener("scroll", updateProgress); media.removeEventListener("change", stopAnimations); };
  }, []);

  return <div className="scroll-progress" ref={progress} aria-hidden="true" />;
}
