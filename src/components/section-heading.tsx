import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-10 flex items-center justify-center gap-3 text-center text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
      <span className="h-px w-8 bg-[var(--accent)]" />
      {children}
      <span className="h-px w-8 bg-[var(--accent)]" />
    </h2>
  );
}
