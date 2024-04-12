import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJs, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { BsHouse, BsBookHalf, BsCodeSquare, BsFillEnvelopePaperFill, BsPersonBadgeFill } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(BsHouse),
  },
  {
    name: "Sobre",
    hash: "#about",
    icon: React.createElement(BsBookHalf),
  },
  {
    name: "Experiência",
    hash: "#experience",
    icon: React.createElement(BsPersonBadgeFill),
  },  
  {
    name: "Projetos",
    hash: "#projects",
    icon: React.createElement(BsHouse),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(BsCodeSquare),
  },
  {
    name: "Contato",
    hash: "#contact",
    icon: React.createElement(BsFillEnvelopePaperFill),
  },
] as const;

export const experiencesData = [
  {
    title: "Analista de Sistemas Ecommerce / Software Developer (Salon Line)",
    location: "Barueri, SP",
    description:
      "Concepção, desenho e desenvolvimento da arquitetura de sistemas, levantamento de requisitos e documentação para viabilização de novos sistemas web, desenvolvimento de novas features e aplicações web para diversos canais de venda, manutenção e sustentação de e-commerces, sites, blogs e aplicações web, implantação e integração de sistemas, análise e resolução de bugs, depuração e code review",
    // icon: React.createElement(LuGraduationCap),
    icon: React.createElement(CgWorkAlt),
    date: "2023",
    flags: [
      "HTML",
      "CSS",
      "Javascript",
      "Reactjs",
      "Knouckout",
      "Trello",
      "Notion",
      "Git",
      "Gitlab",
      "GitHub",
      "Bitbucket",      
      "Postman",
      "Insomnia",
      "MySQL",
      "Oracle Database",
      "Wordpress",
      "Figma",
      "HUB2B",
      "Anymarket",
      "Digibee",
      "Oracle Integration Cloud",
      "Oracle Commerce Cloud",
      "Linx Commerce",
      "BSeller",
      "TOTVs Protheus"
    ]
  },
  {
    title: "Analista de Sistemas Ecommerce / Software Developer (Carrefour)",
    location: "São Paulo, SP",
    description:
      "Desenvolvimento de novas features e aplicações web para diversos canais de venda, manutenção e sustentação de e-commerces, sites, blogs e aplicações web, análise e resolução de bugs, depuração e code review, levantamento de requisitos e documentação para viabilização de novos sistemas web.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
    flags: [
      "HTML",
      "CSS",
      "TypeScript",
      "React js",
      "Jest",
      "Cypress",
      "GCP",
      "Cloud Build GCP",
      "Git",
      "GitHub",
      "Gitlab",
      "Firebase",
      "VTEX IO",
      "Postman",
      "Jira",
      "Confluence",
      "Figma",
      "Adobe XD"
    ]
  },
  {
    title: "Desenvolvedor Front-End (Compass.UOL)",
    location: "São Paulo, SP",
    description:
      "Desenvolvimento de novas features e aplicações web para diversos canais de venda, manutenção e sustentação de e-commerces, sites, blogs e aplicações web, análise e resolução de bugs, depuração e code review, levantamento de requisitos e documentação para viabilização de novos sistemas web.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
    flags: [
      "HTML",
      "CSS",
      "Javascript",
      "Knouckout",
      "React",
      "Git",
      "Gitlab",      
      "Postman",
      "Oracle Database",
      "Oracle Commerce Cloud",
      "Figma",
      "Oracle Commerce Cloud",
    ]    
  },
  {
    title: "Desenvolvedor Front-End (Tok&Stok)",
    location: "Barueri, SP",
    description:
      "Desenvolvimento de novas features e aplicações web para diversos canais de venda, manutenção e sustentação de e-commerces, sites, blogs e aplicações web, análise e resolução de bugs, depuração e code review, levantamento de requisitos e documentação para viabilização de novos sistemas web.",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2019",
    flags: [
      "HTML",
      "CSS",
      "Javascript",
      "JQuery",
      "Dojojs",
      "Backbonejs",
      "Oracle Database",
      "Git",
      "GitHub",
      "VTEX Legancy",
      "IBM WebSphere Commerce",
      "Photoshop", 
    ]    
  },
  {
    title: "Bachelor of Information Systems",
    location: "Campus Osasco",
    description: "Universidade Bandeirante de São Paulo",
    icon: React.createElement(LuGraduationCap),
    date: "2008 - 2011",
    flags: []    
  },
  {
    title: "Assistente de marketing (Tok&Stok)",
    location: "Barueri, SP",
    description:
      "Produção de fotos still para abastecimento do site, edição de imagens com Photoshop, responsável pela organização do banco de imagens da empresa, cadastro de novos produtos e manutenção de cadastros já existentes no site, responsável pela execução dos processos logísticos e organizacionais de produtos para fotos em estúdio e externas, criação de comunicados digitais para comunicação interna e atualização e manutenção da Intranet",
    icon: React.createElement(CgWorkAlt),
    date: "2006 - 2011",
    flags: [
      "HTML",
      "CSS",
      "Javascript",
      "JQuery",
      "Photoshop"
    ]    
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
"HTML5",
"CSS3",
"Javascript",
"JQuery",
"TypeScript",
"Less/Sass",
"Tailwind",
"Bootstrap",
"Skeleton",
"Bulma",

"React",
"Redux",
"NextJs",

"Angular",

"Vue",

"NodeJs",
"NestJs",
"Prisma",

"MongoDB",
"Firebase Realtime Database",
"Redis",

"MySQL",
"PostgreSQL",
"Oracle Database",
"Google Cloud SQL",

"Git",
"GitHub",
"GitLab",
"Bitbucket",

"Vercel",
"Google Cloud Platform",
"Oracle Cloud",

"Vtex",
"Vtex IO",
"Oracle Commerce Cloud",
"IBM WebSphere Commerce",
"Oracle Integration Cloud",

"Jira",
"Trello",
"Notion",

"Adobe Photoshop",
"Adobe XD",
"Miro",
"Figma",

"Codium",
"Copilot",
"AWS CodeWhisperer",
] as const;
