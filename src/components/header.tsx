"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { BsXLg, BsList } from "react-icons/bs";

export default function Header() {
  const theme = useTheme();
  const [closeMenu, setCloseMenu] = React.useState(true);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  function handleCloseMenu() {
    setCloseMenu(!closeMenu);
  }
  return (
    <header className="relative z-[999]">
      <nav className="group fixed left-1/2 top-3 w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-2xl border border-white/20 bg-[#0b2023]/90 shadow-2xl shadow-teal-950/20 backdrop-blur-xl transition-all duration-300 md:left-5 md:top-1/2 md:w-[4.75rem] md:-translate-y-1/2 md:translate-x-0 md:rounded-[1.75rem] md:hover:w-56">
        <div className="hidden items-center gap-3 border-b border-white/10 px-4 py-5 md:flex">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-300 to-cyan-500 text-sm font-black text-[#092023] shadow-lg shadow-teal-400/20">SA</span>
          <span className="whitespace-nowrap text-xs font-semibold tracking-[0.18em] text-white/80 opacity-0 transition group-hover:opacity-100">COMMAND DECK</span>
        </div>
        <span
          className="absolute right-5 top-3 cursor-pointer text-3xl text-white md:hidden"
          onClick={handleCloseMenu}
        >
          {closeMenu ? (
            <BsList color={theme?.theme === "light" ? "black" : "white"} />
          ) : (
            <BsXLg />
          )}
        </span>
        <ul
          className={`mx-auto max-w-5xl ${
            closeMenu ? "hidden md:flex" : "flex"
          } flex-col items-start justify-center gap-2 p-8 md:items-stretch md:gap-3 md:p-3`}
        >
          {links.map((link) => (
            <motion.li
              className="w-full items-center justify-start border-b border-white/10 pb-4 md:flex md:justify-start md:border-b-0 md:pb-0"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                aria-label={link.name}
                title={link.name}
                className={clsx(
                  "relative flex w-full flex-row items-center justify-start gap-3 rounded-xl px-2 py-2.5 text-sm text-white/65 transition hover:bg-white/10 hover:text-white md:justify-start",
                  { "bg-teal-300/15 text-white shadow-[inset_3px_0_0_#54d2c3]": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setCloseMenu(true);
                }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-teal-200 transition group-hover:border-teal-300/20 group-hover:bg-teal-300/10">
                  {link.icon}
                </span>
                <span className="whitespace-nowrap opacity-100 md:opacity-0 md:transition md:group-hover:opacity-100">{link.name}</span>
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
