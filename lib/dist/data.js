"use strict";
exports.__esModule = true;
exports.skillsData = exports.projectsData = exports.experiencesData = exports.links = void 0;
var react_1 = require("react");
var cg_1 = require("react-icons/cg");
var fa_1 = require("react-icons/fa");
var lu_1 = require("react-icons/lu");
var corpcomment_png_1 = require("@/public/corpcomment.png");
var rmtdev_png_1 = require("@/public/rmtdev.png");
var wordanalytics_png_1 = require("@/public/wordanalytics.png");
var bs_1 = require("react-icons/bs");
exports.links = [
    {
        name: "Home",
        hash: "#home",
        icon: react_1["default"].createElement(bs_1.BsHouse)
    },
    {
        name: "Sobre",
        hash: "#about",
        icon: react_1["default"].createElement(bs_1.BsBookHalf)
    },
    // {
    //   name: "Projetos",
    //   hash: "#projects",
    //   icon: React.createElement(BsHouse),
    // },
    {
        name: "Skills",
        hash: "#skills",
        icon: react_1["default"].createElement(bs_1.BsCodeSquare)
    },
    {
        name: "Experiência",
        hash: "#experience",
        icon: react_1["default"].createElement(bs_1.BsPersonBadgeFill)
    },
    {
        name: "Contato",
        hash: "#contact",
        icon: react_1["default"].createElement(bs_1.BsFillEnvelopePaperFill)
    },
];
exports.experiencesData = [
    {
        title: "Analista de Sistemas Ecommerce / Software Developer (Salon Line)",
        location: "Barueri, SP",
        description: "Concepção, desenho e desenvolvimento da arquitetura de sistemas, levantamento de requisitos e documentação para viabilização de novos sistemas web, desenvolvimento de novas features e aplicações web para diversos canais de venda, manutenção e sustentação de e-commerces, sites, blogs e aplicações web, implantação e integração de sistemas, análise e resolução de bugs, depuração e code review",
        // icon: React.createElement(LuGraduationCap),
        icon: react_1["default"].createElement(cg_1.CgWorkAlt),
        date: "2023"
    },
    {
        title: "Analista de Sistemas Ecommerce / Software Developer (Carrefour)",
        location: "São Paulo, SP",
        description: "Desenvolvimento de novas features e aplicações web para diversos canais de venda, manutenção e sustentação de e-commerces, sites, blogs e aplicações web, análise e resolução de bugs, depuração e code review, levantamento de requisitos e documentação para viabilização de novos sistemas web.",
        icon: react_1["default"].createElement(cg_1.CgWorkAlt),
        date: "2021 - 2023"
    },
    {
        title: "Desenvolvedor Front-End (Compass.UOL)",
        location: "São Paulo, SP",
        description: "Desenvolvimento de novas features e aplicações web para diversos canais de venda, manutenção e sustentação de e-commerces, sites, blogs e aplicações web, análise e resolução de bugs, depuração e code review, levantamento de requisitos e documentação para viabilização de novos sistemas web.",
        icon: react_1["default"].createElement(cg_1.CgWorkAlt),
        date: "2019 - 2021"
    },
    {
        title: "React / Impacta Tecnologia",
        location: "São Paulo, SP",
        description: "Desenvolvimento de Aplicações Web com React, React Native e Redux",
        icon: react_1["default"].createElement(fa_1.FaReact),
        date: "2019"
    },
    {
        title: "Desenvolvedor Front-End (Tok&Stok)",
        location: "Barueri, SP",
        description: "Desenvolvimento de novas features e aplicações web para diversos canais de venda, manutenção e sustentação de e-commerces, sites, blogs e aplicações web, análise e resolução de bugs, depuração e code review, levantamento de requisitos e documentação para viabilização de novos sistemas web.",
        icon: react_1["default"].createElement(cg_1.CgWorkAlt),
        date: "2012 - 2019"
    },
    {
        title: "Website Development / Impacta Certified Specialist - Profissional",
        location: "São Paulo, SP",
        description: "JavaScript e JQuery.",
        icon: react_1["default"].createElement(fa_1.FaJs),
        date: "2014"
    },
    {
        title: "JQuery / Impacta Certified Specialist - Profissional",
        location: "São Paulo, SP",
        description: "O curso jQuery destina-se a todos os profissionais, ou interessados em desenvolvimento Web, que pretendem compreender os conceitos e as técnicas essenciais de programação para utilização da biblioteca jQuery na criação de sites mais interativos e amigáveis visualmente.",
        icon: react_1["default"].createElement(fa_1.FaJs),
        date: "2014"
    },
    {
        title: "Bachelor of Information Systems",
        location: "Campus Osasco",
        description: "Universidade Bandeirante de São Paulo",
        icon: react_1["default"].createElement(lu_1.LuGraduationCap),
        date: "2008 - 2011"
    },
    {
        title: "Assistente de marketing (Tok&Stok)",
        location: "Barueri, SP",
        description: "Produção de fotos still para abastecimento do site, edição de imagens com Photoshop, responsável pela organização do banco de imagens da empresa, cadastro de novos produtos e manutenção de cadastros já existentes no site, responsável pela execução dos processos logísticos e organizacionais de produtos para fotos em estúdio e externas, criação de comunicados digitais para comunicação interna e atualização e manutenção da Intranet",
        icon: react_1["default"].createElement(cg_1.CgWorkAlt),
        date: "2006 - 2011"
    },
];
exports.projectsData = [
    {
        title: "CorpComment",
        description: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcomment_png_1["default"]
    },
    {
        title: "rmtDev",
        description: "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdev_png_1["default"]
    },
    {
        title: "Word Analytics",
        description: "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalytics_png_1["default"]
    },
];
exports.skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "VTEX",
    "IBM-WebSphere",
    "Oracle CX Commerce(OCC/OSF)",
    "Oracle Integration Cloud(OIC)",
    "Wordpress",
];
