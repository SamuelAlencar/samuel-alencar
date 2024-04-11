"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var section_heading_1 = require("./section-heading");
var react_vertical_timeline_component_1 = require("react-vertical-timeline-component");
require("react-vertical-timeline-component/style.min.css");
var data_1 = require("@/lib/data");
var hooks_1 = require("@/lib/hooks");
var theme_context_1 = require("@/context/theme-context");
function Experience() {
    var ref = hooks_1.useSectionInView("Experiência").ref;
    var theme = theme_context_1.useTheme().theme;
    return (react_1["default"].createElement("section", { id: "experience", ref: ref, className: "scroll-mt-28 mb-28 sm:mb-40" },
        react_1["default"].createElement(section_heading_1["default"], null, "Experi\u00EAncia"),
        react_1["default"].createElement(react_vertical_timeline_component_1.VerticalTimeline, { lineColor: "" }, data_1.experiencesData.map(function (item, index) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: index },
            react_1["default"].createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { contentStyle: {
                    background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem"
                }, contentArrowStyle: {
                    borderRight: theme === "light"
                        ? "0.4rem solid #9ca3af"
                        : "0.4rem solid rgba(255, 255, 255, 0.5)"
                }, date: item.date, icon: item.icon, iconStyle: {
                    background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem"
                } },
                react_1["default"].createElement("h3", { className: "font-semibold capitalize" }, item.title),
                react_1["default"].createElement("p", { className: "font-normal !mt-0" }, item.location),
                react_1["default"].createElement("p", { className: "!mt-1 !font-normal text-gray-700 dark:text-white/75" }, item.description),
                (item === null || item === void 0 ? void 0 : item.flags) && (react_1["default"].createElement("ul", { className: "flex flex-wrap mt-4 gap-2" }, item.flags.map(function (tag) { return (react_1["default"].createElement("li", { key: tag, className: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-full" }, tag)); })))))); }))));
}
exports["default"] = Experience;
