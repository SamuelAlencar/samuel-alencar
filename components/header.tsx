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
    <header className="z-[999] relative">
      <motion.div
        className="hidden md:block"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-0 w-full bg-gray-800">
        <span
          className={`text-white text-3xl absolute md:hidden top-3 cursor-pointer right-5 `}
          onClick={handleCloseMenu}
        >
          {closeMenu ? (
            <BsList color={theme?.theme === "light" ? "black" : "white"} />
          ) : (
            <BsXLg />
          )}
        </span>
        <ul
          className={`max-w-5xl mx-auto  ${
            closeMenu ? "hidden md:flex" : "flex"
          } flex-col md:flex-row  justify-center items-start md:items-center gap-6 p-8 md:p-4`}
        >
          {links.map((link) => (
            <motion.li
              className="w-full flex justify-start md:justify-center items-center border-b-[.3px] md:border-b-0 border-gray-500 pb-4 md:pb-0"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  `flex flex-row justify-start text-md md:justify-center gap-2 items-center w-full ${
                    theme ? "text-white" : "text-white"
                  } hover:underline active:underline `,
                  { "": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.icon}
                {link.name}
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
