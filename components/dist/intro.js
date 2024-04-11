"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
var bs_1 = require("react-icons/bs");
var hi_1 = require("react-icons/hi");
var fa_1 = require("react-icons/fa");
var hooks_1 = require("@/lib/hooks");
var active_section_context_1 = require("@/context/active-section-context");
function Intro() {
    var ref = hooks_1.useSectionInView("Home", 0.5).ref;
    var _a = active_section_context_1.useActiveSectionContext(), setActiveSection = _a.setActiveSection, setTimeOfLastClick = _a.setTimeOfLastClick;
    return (react_1["default"].createElement("section", { ref: ref, id: "home", className: "mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" },
        react_1["default"].createElement("div", { className: "flex items-center justify-center" },
            react_1["default"].createElement("div", { className: "relative" },
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: {
                        type: "tween",
                        duration: 0.2
                    } },
                    react_1["default"].createElement(image_1["default"], { src: "/IMG_20220919_121524 (1).jpg", alt: "Samuel Alencar", width: "611", height: "611", quality: "95", priority: true, className: "h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" })),
                react_1["default"].createElement(framer_motion_1.motion.span, { className: "absolute bottom-0 right-0 text-4xl", initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: {
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7
                    } }, "\uD83D\uDC4B"))),
        react_1["default"].createElement(framer_motion_1.motion.p, { className: "mb-4 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-1xl", initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } },
            react_1["default"].createElement("span", null, "Ol\u00E1, bem vindo ao meu portif\u00F3lio!")),
        react_1["default"].createElement(framer_motion_1.motion.p, { className: "mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-1xl", initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } },
            react_1["default"].createElement("span", { className: "text-xl" }, "Meu nome \u00E9 Samuel Alencar, sou casado e pai de uma filha linda. Sou um profissional apaixonado por tecnologias web e tenho uma s\u00F3lida experi\u00EAncia de mais de 15 anos na \u00E1rea.")),
        react_1["default"].createElement(framer_motion_1.motion.div, { className: "flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium", initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 }, transition: {
                delay: 0.1
            } },
            react_1["default"].createElement(link_1["default"], { href: "#contact", className: "group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition", onClick: function () {
                    setActiveSection("Contato");
                    setTimeOfLastClick(Date.now());
                } },
                "Entre e contato",
                " ",
                react_1["default"].createElement(bs_1.BsArrowRight, { className: "opacity-70 group-hover:translate-x-1 transition" })),
            react_1["default"].createElement("a", { className: "group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10", href: "/CV.pdf", download: true },
                "Download CV",
                " ",
                react_1["default"].createElement(hi_1.HiDownload, { className: "opacity-60 group-hover:translate-y-1 transition" })),
            react_1["default"].createElement("a", { className: "bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60", href: "https://www.linkedin.com/in/samuel-alencar-5b1a2251/", target: "_blank" },
                react_1["default"].createElement(bs_1.BsLinkedin, null)),
            react_1["default"].createElement("a", { className: "bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60", href: "https://github.com/SamuelAlencar", target: "_blank" },
                react_1["default"].createElement(fa_1.FaGithubSquare, null)))));
}
exports["default"] = Intro;
