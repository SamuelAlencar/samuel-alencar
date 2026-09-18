"use client";

import { useEffect, useRef } from "react";

export default function ScrollEffects() {
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Web Animations mantém o conteúdo visível mesmo sem JavaScript.
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const play = (element: Element, delay = 0, title = false) => {
      if (media.matches) return;
      const animation = element.animate([
        { opacity: 0, transform: `translateY(${title ? 48 : 30}px)`, clipPath: title ? "inset(0 0 100% 0)" : "inset(0)", filter: "blur(3px)" },
        { opacity: 1, transform: "translateY(0)", clipPath: "inset(0)", filter: "blur(0)" },
      ], { duration: title ? 1100 : 850, delay, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };
    document.querySelectorAll(".hero-introduction, .hero-title-line, .hero-description, .hero-actions, .hero-location, .hero-bottom").forEach((element, index) => play(element, index * 90, element.classList.contains("hero-title-line")));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        play(entry.target, Math.min(index * 80, 240), entry.target.classList.contains("section-heading"));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    const scene = document.querySelector<HTMLElement>(".orbit-scene");
    const header = document.querySelector<HTMLElement>(".site-header");
    const desktop = window.matchMedia("(min-width: 901px)");
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
      if (scene) scene.style.translate = !media.matches && desktop.matches ? `0 ${Math.min(window.scrollY, 700) * .12}px` : "none";
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(updateProgress); };
    const stopAnimations = () => { if (media.matches) animations.forEach((animation) => animation.cancel()); schedule(); };
    updateProgress();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", stopAnimations);
    return () => { observer.disconnect(); animations.forEach((animation) => animation.cancel()); cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); media.removeEventListener("change", stopAnimations); header?.classList.remove("is-scrolled"); if (scene) scene.style.removeProperty("translate"); };
  }, []);

  return <div className="scroll-progress" ref={progress} aria-hidden="true" />;
}
