"use strict";
exports.__esModule = true;
var about_1 = require("@/components/about");
var contact_1 = require("@/components/contact");
var experience_1 = require("@/components/experience");
var intro_1 = require("@/components/intro");
var skills_1 = require("@/components/skills");
function Home() {
    return (React.createElement("main", { className: "flex flex-col items-center px-4" },
        React.createElement(intro_1["default"], null),
        React.createElement(about_1["default"], null),
        React.createElement(experience_1["default"], null),
        React.createElement(skills_1["default"], null),
        React.createElement(contact_1["default"], null)));
}
exports["default"] = Home;
