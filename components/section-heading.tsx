import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 flex items-center justify-center gap-2 text-center text-2xl font-semibold leading-tight text-[var(--ink)] sm:mb-10 sm:gap-3 sm:text-4xl">
      <span className="h-px w-6 bg-[var(--accent)] sm:w-8" />
      {children}
      <span className="h-px w-6 bg-[var(--accent)] sm:w-8" />
    </h2>
  );
}
