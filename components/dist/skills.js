"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var section_heading_1 = require("./section-heading");
var data_1 = require("@/lib/data");
var hooks_1 = require("@/lib/hooks");
var framer_motion_1 = require("framer-motion");
var fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: function (index) { return ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    }); }
};
function Skills() {
    var ref = hooks_1.useSectionInView("Skills").ref;
    return (react_1["default"].createElement("section", { id: "skills", ref: ref, className: "mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40" },
        react_1["default"].createElement(section_heading_1["default"], null, "Minhas skills"),
        react_1["default"].createElement("ul", { className: "flex flex-wrap justify-center gap-2 text-lg text-gray-800" }, data_1.skillsData.map(function (skill, index) { return (react_1["default"].createElement(framer_motion_1.motion.li, { className: "text-xs bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80", key: index, variants: fadeInAnimationVariants, initial: "initial", whileInView: "animate", viewport: {
                once: true
            }, custom: index }, skill)); }))));
}
exports["default"] = Skills;
