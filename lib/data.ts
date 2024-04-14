import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { MdPersonSearch } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import tokstokProjectImg from "@/public/tokstok-project.png";
import yamahaProjectImg from "@/public/yamaha-project.png";
import carrefourProjectImg from "@/public/carrefour-project.png";
import salonlineProjectImg from "@/public/salonline-project.png";
import livelobradesProjectImg from "@/public/livelobradescoseguros-project.png";
import {
  BsHouse,
  BsBookHalf,
  BsPencilSquare,
  BsCodeSquare,
  BsFillEnvelopePaperFill,
  BsPersonBadgeFill,
} from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(BsHouse),
  },
  {
    name: "Sobre",
    hash: "#about",
    icon: React.createElement(MdPersonSearch),
  },
  {
    name: "Experiência",
    hash: "#experience",
    icon: React.createElement(BsPersonBadgeFill),
  },
  {
    name: "Projetos",
    hash: "#projects",
    icon: React.createElement(BsPencilSquare),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(BsCodeSquare),
  },
  {
    name: "Cursos",
    hash: "#courses",
    icon: React.createElement(BsBookHalf),
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
      "TOTVs Protheus",
    ],
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
      "Adobe XD",
    ],
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
    ],
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
      "Bootstrap",
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
    ],
  },
  {
    title: "Bachelor of Information Systems",
    location: "Campus Osasco",
    description: "Universidade Bandeirante de São Paulo",
    icon: React.createElement(LuGraduationCap),
    date: "2008 - 2011",
    flags: [],
  },
  {
    title: "Assistente de marketing (Tok&Stok)",
    location: "Barueri, SP",
    description:
      "Produção de fotos still para abastecimento do site, edição de imagens com Photoshop, responsável pela organização do banco de imagens da empresa, cadastro de novos produtos e manutenção de cadastros já existentes no site, responsável pela execução dos processos logísticos e organizacionais de produtos para fotos em estúdio e externas, criação de comunicados digitais para comunicação interna e atualização e manutenção da Intranet",
    icon: React.createElement(CgWorkAlt),
    date: "2006 - 2011",
    flags: ["HTML", "CSS", "Javascript", "JQuery", "Photoshop"],
  },
] as const;

export const projectsData = [
  {
    title: "Salon Line",
    description:
      "Atuei como Analista de Sistemas, focado no desenvolvimento e aprimoramento do E-commerce, incluindo segurança do site, novas funcionalidades, hotsites, landing pages e correção de bugs.",
    tags: ["OCC", "React", "Mobile First", "Chakra UI", "Swiper"],
    imageUrl: salonlineProjectImg,
    linkUrl: "https://salonline.com.br/",
  },
  {
    title: "Carrefour",
    description:
      "Integrante do time responsável pelo desenvolvimento do E-commerce e do Portal BackOffice, atuei como Desenvolvedor Sr. do time.",
    tags: [
      "VTEX",
      "React",
      "Microfrontends",
      "Bootstrap",
      "TypeScript",
      "Mobile First",
      "GCP",
    ],
    imageUrl: carrefourProjectImg,
    linkUrl: "https://www.carrefour.com.br/",
  },
  {
    title: "Yamaha Motor",
    description:
      "Nesse projeto trabalhei na migração de versão do E-commerce e na evolução do site com novas funcionalidades incríveis, tais como carroussel 360°, simulação de financiamento em real time e Landing pages com animações.",
    tags: ["OCC", "Knouckout js", "JQuery", "Responsive", "Slick", "Bootstrap"],
    imageUrl: yamahaProjectImg,
    linkUrl: "https://www.yamaha-motor.com.br/",
  },
  {
    title: "Livelo",
    description:
      "Nesse projeto desafiador atuei como Desenvolvedor Front-end Sr., desenvolvendo features, dando manutenção e realizando integrações de alta complexidade entres sistemas.",
    tags: ["OCC", "Knouckout js", "JQuery", "Responsive", "Slick", "Bootstrap"],
    imageUrl: livelobradesProjectImg,
    linkUrl: "https://www.livelo.com.br/",
  },
  {
    title: "Tok&Stok E-commerce",
    description:
      "Trabalhei em 4 versões do E-Commerce, com foco no desenvolvimento e aprimoramento, sendo que atuei durante 7 anos como desenvolvedor front-end. ",
    tags: ["HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "Photoshop", "Slick","Oracle DB"],
    imageUrl: tokstokProjectImg,
    linkUrl: "https://www.tokstok.com.br/",
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
export const cousersData = [
  {
    title: "Produtividade com IA",
    institution: "Rocketseat",
    workload: "5h",
    initialDate: "26/03/2024",
    endDate: "01/04/2024",
  },
  {
    title: "Clean Code",
    institution: "Rocketseat",
    workload: "5h",
    initialDate: "22/03/2024",
    endDate: "26/03/2024",
  },
  {
    title: "Redux + Zustand",
    institution: "Rocketseat",
    workload: "3h",
    initialDate: "11/03/2024",
    endDate: "18/03/2024",
  },
  {
    title: "Next.js App Router e Testes",
    institution: "Rocketseat",
    workload: "6h",
    initialDate: "28/01/2024",
    endDate: "15/03/2024",
  },
  {
    title: "Node js",
    institution: "Rocketseat",
    workload: "50h",
    initialDate: "28/11/2023",
    endDate: "26/01/2024",
  },
  {
    title: "React js",
    institution: "Alura",
    workload: "12h",
    initialDate: "01/03/2022",
    endDate: "01/03/2022",
  },
  {
    title: "React.JS + Redux e React Native",
    institution: "Impacta Treinamentos",
    workload: "40h",
    initialDate: "28/09/2019",
    endDate: "09/11/2019",
  },
  {
    title: "JQuery",
    institution: "Impacta Treinamentos",
    workload: "40h",
    initialDate: "01/11/2015",
    endDate: "30/11/2015",
  },
  {
    title: "Javascript",
    institution: "Impacta Treinamentos",
    workload: "40h",
    initialDate: "12/04/2014",
    endDate: "24/05/2014",
  },

] as const;
