"use client";

import React from "react";

export default function AmbientEffects() {
  React.useEffect(() => {
    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div className="ambient-effects" aria-hidden="true">
      <div className="scroll-progress" />
      <div className="cursor-ring" />
      <div className="ambient-spotlight" />
      <div className="ambient-scanline" />
      <span className="ambient-node ambient-node-one" />
      <span className="ambient-node ambient-node-two" />
      <span className="ambient-node ambient-node-three" />
      <span className="ambient-node ambient-node-four" />
    </div>
  );
}
