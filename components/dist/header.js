"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var data_1 = require("@/lib/data");
var link_1 = require("next/link");
var clsx_1 = require("clsx");
var active_section_context_1 = require("@/context/active-section-context");
var theme_context_1 = require("@/context/theme-context");
var bs_1 = require("react-icons/bs");
function Header() {
    var theme = theme_context_1.useTheme();
    var _a = react_1["default"].useState(false), closeMenu = _a[0], setCloseMenu = _a[1];
    var _b = active_section_context_1.useActiveSectionContext(), activeSection = _b.activeSection, setActiveSection = _b.setActiveSection, setTimeOfLastClick = _b.setTimeOfLastClick;
    function handleCloseMenu() {
        setCloseMenu(!closeMenu);
    }
    return (react_1["default"].createElement("header", { className: "z-[999] relative" },
        react_1["default"].createElement(framer_motion_1.motion.div, { className: "", initial: { y: -100, x: "-50%", opacity: 0 }, animate: { y: 0, x: "-50%", opacity: 1 } }),
        react_1["default"].createElement("nav", { className: "fixed top-0 w-full bg-gray-800" },
            react_1["default"].createElement("span", { className: "text-white text-3xl absolute md:hidden top-3 cursor-pointer right-5 ", onClick: handleCloseMenu }, closeMenu ? react_1["default"].createElement(bs_1.BsList, { color: (theme === null || theme === void 0 ? void 0 : theme.theme) === "light" ? "black" : "white" }) : react_1["default"].createElement(bs_1.BsXLg, null)),
            react_1["default"].createElement("ul", { className: "max-w-7xl mx-auto " + (closeMenu ? "hidden" : "flex") + " flex-col md:flex-row  justify-center items-start md:items-center gap-6 p-8 md:p-4" }, data_1.links.map(function (link) { return (react_1["default"].createElement(framer_motion_1.motion.li, { className: "w-full flex justify-start md:justify-center items-center border-b-[.3px] md:border-b-0 border-gray-500 pb-4 md:pb-0", key: link.hash, initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
                react_1["default"].createElement(link_1["default"], { className: clsx_1["default"]("flex flex-row justify-start md:justify-center gap-2 items-center w-full " + (theme ? "text-white" : "text-white"), { "": activeSection === link.name }), href: link.hash, onClick: function () {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        handleCloseMenu();
                    } },
                    link.icon,
                    link.name,
                    link.name === activeSection && (react_1["default"].createElement(framer_motion_1.motion.span, { className: "", layoutId: "activeSection", transition: {
                            type: "spring",
                            stiffness: 380,
                            damping: 30
                        } }))))); })))));
}
exports["default"] = Header;
