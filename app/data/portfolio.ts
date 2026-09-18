// Os dados ficam separados da interface para facilitar a atualização do portfólio.
export const profile = {
  email: "samuel.d.alencar@gmail.com",
  phone: "(11) 95242-4064",
  whatsapp: "https://wa.me/5511952424064",
  github: "https://github.com/SamuelAlencar",
  linkedin: "https://www.linkedin.com/in/samuel-nascimento-alencar/",
  location: "Carapicuíba, São Paulo",
};

export const experiences = [
  {
    id: "caoa-chery",
    company: "CAOA Chery",
    role: "Desenvolvedor Fullstack",
    period: "Abr 2026 — Atual",
    description:
      "Desenvolvimento de soluções web e mobile para conectar atendimento ao cliente, tecnologia e gestão do negócio.",
    highlights: [
      "Desenvolvimento, evolução e sustentação de aplicações web e aplicativos Android e iOS.",
      "Análise de requisitos, diagnóstico de falhas e otimização de sistemas em colaboração com stakeholders e parceiros.",
      "Gestão de backlog, pipelines de CI/CD e práticas de DevOps com Azure DevOps.",
    ],
    technologies: ["Next.js", "React Native", "Node.js", "SQL Server", "Azure DevOps"],
  },
  {
    id: "sesc-sp",
    company: "SESC SP",
    role: "Analista de Sistemas",
    period: "Jul 2024 — Dez 2025",
    description:
      "Aplicações web voltadas à melhoria do atendimento ao cliente e à gestão, da análise de requisitos à sustentação.",
    highlights: [
      "Levantamento e documentação de requisitos funcionais e não funcionais para novas aplicações.",
      "Desenvolvimento, correção de bugs e otimização de sistemas em parceria com equipes multidisciplinares.",
      "Condução de reuniões técnicas e gestão de backlog e pipelines de entrega contínua.",
    ],
    technologies: ["React", "Next.js", "Angular", "Java", "Spring", "Oracle", "Azure DevOps"],
  },
  {
    id: "salon-line",
    company: "Salon Line",
    role: "Analista de Sistemas Sênior",
    period: "Jan 2023 — Nov 2023",
    description:
      "Liderança técnica, arquitetura front-end e integrações entre e-commerce e sistemas de negócio.",
    highlights: [
      "Desenvolvimento de funcionalidades, hotsites e landing pages em Oracle Commerce Cloud e WordPress.",
      "Integrações entre e-commerce, ERP, CRM e TMS com Oracle Integration Cloud e Digibee.",
      "Atuação na implantação do Linx Commerce, incluindo integrações com TOTVS, pagamentos e suporte ao go-live.",
      "Coordenação técnica de projetos e execução de testes unitários, de integração e end-to-end.",
    ],
    technologies: ["React", "Oracle Commerce Cloud", "Linx Commerce", "OIC", "Digibee", "WordPress"],
  },
  {
    id: "carrefour",
    company: "Grupo Carrefour",
    role: "Analista de Sistemas E-commerce Sênior",
    period: "Ago 2021 — Jan 2023",
    description:
      "Desenvolvimento de aplicações para e-commerce VTEX IO e BackOffice, com foco em arquitetura e qualidade técnica.",
    highlights: [
      "Desenvolvimento e manutenção de aplicações web para e-commerce e portal BackOffice.",
      "Definição e padronização de arquiteturas front-end, code reviews e documentação técnica.",
      "Análise de causa raiz de incidentes e participação na condução de cerimônias Scrum e Kanban.",
    ],
    technologies: ["React", "TypeScript", "VTEX IO", "PostgreSQL", "GCP", "GitLab"],
  },
  {
    id: "compass-uol",
    company: "Compass.UOL",
    role: "Desenvolvedor Front-end Sênior",
    period: "Dez 2019 — Ago 2021",
    description:
      "Desenvolvimento de experiências de e-commerce e aplicações web com padrões de código e documentação compartilhados.",
    highlights: [
      "Levantamento de requisitos e desenvolvimento de funcionalidades em Oracle Commerce Cloud e WordPress.",
      "Definição de padrões de código, code reviews e manutenção da qualidade técnica.",
      "Criação de documentação e manuais de uso, com participação em cerimônias Scrum.",
    ],
    technologies: ["JavaScript", "Knockout.js", "Oracle Commerce Cloud", "WordPress", "GitLab"],
  },
  {
    id: "tok-stok-dev",
    company: "Tok&Stok",
    role: "Desenvolvedor Front-end Pleno",
    period: "Jan 2012 — Nov 2019",
    description:
      "Construção e evolução do e-commerce e do site institucional, com componentes para IBM WebSphere e VTEX.",
    highlights: [
      "Desenvolvimento e manutenção de funcionalidades para e-commerce e site institucional.",
      "Criação de componentes para IBM WebSphere Commerce e VTEX Legacy.",
      "Sustentação de aplicações, correção de bugs, code reviews e documentação de sistemas.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "jQuery", "IBM WebSphere", "VTEX Legacy"],
  },
  {
    id: "tok-stok-marketing",
    company: "Tok&Stok",
    role: "Assistente de Marketing Sênior",
    period: "Dez 2006 — Dez 2011",
    description:
      "O início da trajetória entre conteúdo visual e web: fotografia de produtos, comunicação digital e intranet.",
    highlights: [
      "Produção de fotografias still, tratamento de imagens e organização do banco de imagens.",
      "Cadastro de produtos e manutenção do conteúdo do site institucional.",
      "Criação de comunicados digitais e atualização da intranet corporativa.",
    ],
    technologies: ["Photoshop", "HTML", "CSS", "JavaScript", "jQuery", "Oracle"],
  },
];

export const education = [
  {
    degree: "Pós-graduação em Desenvolvimento Web",
    school: "SENAC",
    period: "Jul 2025 — Ago 2026",
  },
  {
    degree: "Bacharelado em Sistemas de Informação",
    school: "UNIBAN · Campus Osasco",
    period: "Concluído em 2011",
  },
];

export const courses = [
  { title: "Formação Node.js", school: "Rocketseat", year: "2023–2024" },
  { title: "Next.js App Router e Testes", school: "Rocketseat", year: "2024" },
  { title: "Redux + Zustand", school: "Rocketseat", year: "2024" },
  { title: "Clean Code", school: "Rocketseat", year: "2024" },
  { title: "Produtividade com IA", school: "Rocketseat", year: "2024" },
  { title: "React.js", school: "Alura", year: "2022" },
  { title: "React.js, Redux e React Native", school: "Impacta", year: "2019" },
  { title: "jQuery", school: "Impacta", year: "2015" },
  { title: "JavaScript", school: "Impacta", year: "2014" },
];

export const skillGroups = [
  {
    label: "Front-end",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "React Native", "Angular", "HTML5", "CSS3"],
  },
  {
    label: "Back-end",
    skills: ["Node.js", "Java", "Spring Framework", "Integrações de sistemas"],
  },
  {
    label: "Dados & cloud",
    skills: ["PostgreSQL", "MySQL", "Oracle", "SQL Server", "MongoDB", "Azure DevOps", "GCP", "CI/CD"],
  },
  {
    label: "E-commerce",
    skills: ["VTEX IO", "Oracle Commerce Cloud", "Linx Commerce", "IBM WebSphere", "WordPress", "OIC", "Digibee"],
  },
  {
    label: "IA & ferramentas",
    skills: ["Git", "GitHub", "GitLab", "Figma", "Jira", "GitHub Copilot", "Claude Code", "Codex", "Gemini"],
  },
];
