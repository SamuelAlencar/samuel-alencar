"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var section_heading_1 = require("./section-heading");
var data_1 = require("@/lib/data");
var project_1 = require("./project");
var hooks_1 = require("@/lib/hooks");
function Projects(props) {
    var ref = hooks_1.useSectionInView("Projetos", 0.5).ref;
    return (react_1["default"].createElement("section", { ref: ref, id: "projects", className: "scroll-mt-28 mb-28" },
        react_1["default"].createElement(section_heading_1["default"], null, "My projects"),
        react_1["default"].createElement("div", null, data_1.projectsData.map(function (project, index) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: index },
            react_1["default"].createElement(project_1["default"], __assign({}, project)))); }))));
}
exports["default"] = Projects;
