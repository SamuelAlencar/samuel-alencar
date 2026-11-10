// Os dados ficam separados da interface para facilitar a atualização do portfólio.
export const profile = {
  email: "samuel.d.alencar@gmail.com",
  phone: "(11) 95242-4064",
  whatsapp: "https://wa.me/5511952424064",
  github: "https://github.com/SamuelAlencar",
  linkedin: "https://www.linkedin.com/in/samuel-nascimento-alencar/",
  location: "Carapicuíba, São Paulo",
};

export const featuredExperiences = [
  {
    company: "Tok&Stok", period: "2012 — 2019", title: "E-commerce que se tornou canal de vendas",
    context: "O canal digital era usado principalmente como catálogo pelas equipes das lojas.",
    contribution: "Participei, em equipe, do desenvolvimento e da evolução de três versões do e-commerce, incluindo front-end, componentes e sustentação.",
    result: "A evolução ajudou a consolidar o canal como um dos maiores faturamentos da rede na comparação com as unidades físicas.",
    technologies: ["JavaScript", "IBM WebSphere", "VTEX Legacy"],
  },
  {
    company: "Compass.UOL", period: "2019 — 2021", title: "Operações de e-commerce para Livelo e Yamaha",
    context: "Clientes da consultoria precisavam implantar, sustentar e evoluir suas jornadas de compra.",
    contribution: "Atuei na Oracle Commerce Cloud, desenvolvendo funcionalidades e mantendo padrões de código, documentação e qualidade técnica.",
    result: "Contribuí para a evolução contínua das operações de e-commerce de Livelo e Yamaha por meio da Compass.UOL.",
    technologies: ["Oracle Commerce Cloud", "Knockout.js", "JavaScript"],
  },
  {
    company: "Grupo Carrefour", period: "2021 — 2023", title: "Modernização de plataformas de varejo",
    context: "E-commerce, marketplace e back-office demandavam evolução arquitetural e operação sustentável.",
    contribution: "Atuei como consultor no desenvolvimento das aplicações, na adoção de microfrontends com Module Federation e na evolução das práticas de DevOps.",
    result: "Apoiei a modernização da arquitetura front-end e a continuidade das plataformas em operação.",
    technologies: ["React", "TypeScript", "VTEX IO", "Module Federation"],
  },
  {
    company: "Salon Line", period: "2023", title: "E-commerce conectado aos sistemas corporativos",
    context: "A operação precisava conectar a plataforma de venda aos fluxos do ERP TOTVS e dos sistemas Linx.",
    contribution: "Atuei na implantação e sustentação da Oracle Commerce Cloud e em integrações de alta complexidade com Oracle Integration Cloud.",
    result: "Contribuí para conectar e-commerce e sistemas corporativos, além de avaliar tecnologias para novas iniciativas.",
    technologies: ["Oracle Commerce Cloud", "Oracle Integration Cloud", "TOTVS", "Linx"],
  },
];

export const experiences = [
  {
    id: "caoa-chery",
    company: "CAOA Chery",
    role: "Desenvolvedor Fullstack",
    period: "Abr 2026 — Atual",
    description:
      "Responsabilidade técnica por ferramentas e soluções web e mobile, da implantação e evolução à sustentação, com visão de produto e negócio.",
    highlights: [
      "Concepção e supervisão do desenvolvimento de soluções web e mobile, conectando requisitos, decisões técnicas e evolução contínua.",
      "Adoção e disseminação de práticas de DevOps com Azure DevOps, incluindo gestão de backlog, pipelines de CI/CD e sustentação.",
      "Estudo, avaliação e aplicação de agentes e ferramentas de IA para aumentar a produtividade no desenvolvimento e apoiar novas soluções.",
      "Visão de produto para transformar ferramentas corporativas em iniciativas com potencial de gerar receita e ampliar o retorno sobre o desenvolvimento.",
    ],
    technologies: ["Next.js", "React Native", "Node.js", "SQL Server", "Azure DevOps", "CI/CD", "Agentes de IA"],
  },
  {
    id: "sesc-sp",
    company: "SESC SP",
    role: "Analista de Sistemas",
    period: "Jul 2024 — Dez 2025",
    description:
      "Sustentação e evolução de mais de 20 sistemas que conectam serviços, atendimento e gestão no SESC SP.",
    highlights: [
      "Sustentação, manutenção e modernização de mais de 20 aplicações, incluindo sistemas legados e novas demandas de negócio.",
      "Desenvolvimento de soluções de reconhecimento facial, biometria e integração com catracas para apoiar atendimento e acesso físico.",
      "Participação na evolução do aplicativo de bilheteria, em conjunto com a sustentação de outras experiências digitais do SESC.",
      "Levantamento de requisitos, diagnóstico de falhas e gestão de backlog e pipelines de entrega com equipes multidisciplinares.",
    ],
    technologies: ["React", "Next.js", "Angular", "Java", "Spring", "Oracle", "Azure DevOps"],
  },
  {
    id: "salon-line",
    company: "Salon Line",
    role: "Analista de Sistemas Sênior",
    period: "Jan 2023 — Nov 2023",
    description:
      "Implantação e sustentação de e-commerce, conectando a plataforma Oracle Commerce Cloud aos sistemas corporativos.",
    highlights: [
      "Implantação e sustentação da Oracle Commerce Cloud, com desenvolvimento de funcionalidades, hotsites e landing pages.",
      "Implementação de integrações de alta complexidade entre o ERP TOTVS, sistemas Linx e o e-commerce com Oracle Integration Cloud.",
      "Atuação na implantação do Linx Commerce, incluindo integrações de pagamentos e suporte ao go-live.",
      "Estudo e avaliação de tecnologias e ferramentas de IA voltadas ao ganho de produtividade no desenvolvimento.",
    ],
    technologies: ["React", "Oracle Commerce Cloud", "Linx Commerce", "Oracle Integration Cloud", "TOTVS", "WordPress", "IA aplicada"],
  },
  {
    id: "carrefour",
    company: "Grupo Carrefour",
    role: "Analista de Sistemas E-commerce Sênior",
    period: "Ago 2021 — Jan 2023",
    description:
      "Consultoria para desenvolvimento e evolução do e-commerce, marketplace e portal de back-office do Grupo Carrefour.",
    highlights: [
      "Desenvolvimento e evolução de aplicações web para e-commerce VTEX IO, marketplace e portal de back-office.",
      "Modernização da arquitetura front-end com microfrontends e Module Federation, além de padrões técnicos, code reviews e documentação.",
      "Evolução de práticas e processos de DevOps para apoiar qualidade, entrega e sustentação das plataformas.",
      "Análise de causa raiz de incidentes e participação em cerimônias Scrum e Kanban.",
    ],
    technologies: ["React", "TypeScript", "VTEX IO", "Module Federation", "Microfrontends", "PostgreSQL", "GCP", "GitLab", "DevOps"],
  },
  {
    id: "compass-uol",
    company: "Compass.UOL",
    role: "Desenvolvedor Front-end Sênior",
    period: "Dez 2019 — Ago 2021",
    description:
      "Implantação, sustentação e evolução de e-commerces em Oracle Commerce Cloud para clientes atendidos pela Compass.UOL, incluindo Livelo e Yamaha.",
    highlights: [
      "Implantação, sustentação e desenvolvimento de funcionalidades na Oracle Commerce Cloud para Livelo e Yamaha, por meio da Compass.UOL.",
      "Desenvolvimento de experiências de e-commerce e aplicações web em Oracle Commerce Cloud e WordPress para outros clientes da consultoria.",
      "Definição de padrões de código, code reviews, documentação e manuais de uso para manter a qualidade técnica.",
    ],
    technologies: ["JavaScript", "Knockout.js", "Oracle Commerce Cloud", "WordPress", "GitLab"],
  },
  {
    id: "tok-stok-dev",
    company: "Tok&Stok",
    role: "Desenvolvedor Front-end Pleno",
    period: "Jan 2012 — Nov 2019",
    description:
      "Participação, em equipe, no desenvolvimento e na evolução de três versões do e-commerce e do site institucional.",
    highlights: [
      "Contribuição para três versões do e-commerce, que evoluiu de ferramenta majoritariamente usada como catálogo pelas lojas para um canal de vendas relevante da rede.",
      "Desenvolvimento e manutenção de funcionalidades e componentes para IBM WebSphere Commerce e VTEX Legacy.",
      "Sustentação de aplicações, correção de bugs, code reviews e documentação de sistemas em colaboração com a equipe.",
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
    label: "Web & mobile",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "React Native", "Angular", "HTML5", "CSS3"],
  },
  {
    label: "Arquitetura & back-end",
    skills: ["Node.js", "Java", "Spring Framework", "Microfrontends", "Module Federation", "Integrações de sistemas"],
  },
  {
    label: "Integrações & dados",
    skills: ["Oracle Integration Cloud", "Digibee", "TOTVS", "Linx", "PostgreSQL", "MySQL", "Oracle", "SQL Server", "MongoDB"],
  },
  {
    label: "E-commerce",
    skills: ["VTEX IO", "Oracle Commerce Cloud", "Linx Commerce", "IBM WebSphere", "WordPress", "OIC", "Digibee"],
  },
  {
    label: "DevOps & IA aplicada",
    skills: ["Azure DevOps", "CI/CD", "Git", "GitHub", "GitLab", "Jira", "GitHub Copilot", "Claude Code", "Codex", "Gemini", "Agentes de IA"],
  },
];
