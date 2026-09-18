export type ProjectCategory = "E-commerce" | "Aplicações" | "IA";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  technologies: string[];
  tone: "rose" | "blue" | "violet" | "sand" | "green";
  image?: string;
  illustration?: "CAOA" | "SESC" | "IA";
  url?: string;
};

// Conteúdo do portfólio original, separado da interface para facilitar a edição.
export const projects: Project[] = [
  {
    id: "salon-line",
    title: "Salon Line",
    category: "E-commerce",
    summary: "Experiência de compra, do front-end às integrações.",
    description:
      "Desenvolvimento e sustentação do e-commerce, com novas funcionalidades, hotsites e landing pages. Atuação nas integrações entre plataformas, na preparação técnica e no suporte ao go-live.",
    technologies: ["Oracle Commerce Cloud", "React.js", "Integrações", "WordPress", "Oracle Integration Cloud", "Digibee", "Linx Commerce"],
    tone: "rose",
    image: "/projects/salon-line.png",
    url: "https://salonline.com.br",
  },
  {
    id: "carrefour",
    title: "Carrefour",
    category: "E-commerce",
    summary: "Arquitetura front-end para um grande e-commerce.",
    description:
      "Evolução do e-commerce VTEX IO e do portal BackOffice. Atuação em arquitetura front-end, manutenção sustentável, code reviews e investigação de incidentes para apoiar a continuidade da operação.",
    technologies: ["VTEX IO", "React.js", "TypeScript", "GCP", "Microfrontends", "BackOffice"],
    tone: "blue",
    image: "/projects/carrefour.png",
    url: "https://www.carrefour.com.br/",
  },
  {
    id: "yamaha",
    title: "Yamaha Motor",
    category: "E-commerce",
    summary: "Uma jornada digital com experiências interativas.",
    description:
      "Evolução da jornada digital do e-commerce com carrossel 360°, simulação de financiamento em tempo real e landing pages com experiências interativas.",
    technologies: ["Oracle Commerce Cloud", "Knockout.js", "jQuery", "Bootstrap", "Design responsivo"],
    tone: "sand",
    image: "/projects/yamaha.png",
    url: "https://www.yamaha-motor.com.br/",
  },
  {
    id: "caoa-dashboards",
    title: "CAOA Dashboards",
    category: "Aplicações",
    summary: "Informação que apoia decisões no negócio automotivo.",
    description:
      "Dashboards operacionais para acompanhamento de informações e apoio à tomada de decisão no negócio automotivo, conectando interfaces web, serviços e dados da operação.",
    technologies: ["Next.js", "Node.js", "SQL Server", "React", "Azure DevOps"],
    tone: "violet",
    illustration: "CAOA",
  },
  {
    id: "sesc-app",
    title: "SESC SP App",
    category: "Aplicações",
    summary: "Serviços e conteúdo na palma da mão.",
    description:
      "Aplicação mobile voltada à experiência digital do SESC SP, com foco em acesso a serviços, conteúdo e jornadas para o público em dispositivos Android e iOS.",
    technologies: ["React Native", "Android", "iOS", "Node.js", "Azure DevOps"],
    tone: "green",
    illustration: "SESC",
  },
  {
    id: "caoa-ia",
    title: "CAOA Agentes de IA",
    category: "IA",
    summary: "Novas possibilidades para operações e atendimento.",
    description:
      "Iniciativas com agentes de inteligência artificial para ampliar a eficiência operacional e apoiar novos fluxos de atendimento, com aplicações web e integrações entre serviços.",
    technologies: ["Agentes de IA", "Node.js", "Integrações", "React", "Azure DevOps"],
    tone: "sand",
    illustration: "IA",
  },
  {
    id: "livelo",
    title: "Livelo",
    category: "E-commerce",
    summary: "Sustentação e desenvolvimento de novas funcionalidades.",
    description:
      "Atuação na sustentação e no desenvolvimento de novas funcionalidades para o site da Livelo, contribuindo para a manutenção e evolução da plataforma.",
    technologies: ["Oracle Commerce Cloud", "Knockout.js", "jQuery", "Design responsivo"],
    tone: "rose",
    image: "/projects/livelo.png",
    url: "https://www.livelo.com.br/",
  },
  {
    id: "sesc-central-relacionamento",
    title: "Central de Relacionamento Sesc SP",
    category: "Aplicações",
    summary: "Sustentação e desenvolvimento de novas funcionalidades.",
    description:
      "Atuação na sustentação e no desenvolvimento de novas funcionalidades para a Central de Relacionamento do Sesc SP, contribuindo para a manutenção e evolução da plataforma.",
    technologies: ["Sustentação", "Desenvolvimento de funcionalidades"],
    tone: "green",
    illustration: "SESC",
    url: "https://centralrelacionamento.sescsp.org.br/",
  },
  {
    id: "tokstok",
    title: "Tok&Stok E-commerce",
    category: "E-commerce",
    summary: "Evolução contínua de uma plataforma de varejo.",
    description:
      "Atuação em múltiplas versões do e-commerce, unindo desenvolvimento front-end, sustentação de componentes legados e evolução contínua da plataforma com IBM WebSphere Commerce e VTEX.",
    technologies: ["IBM WebSphere Commerce", "VTEX Legacy", "JavaScript", "HTML", "CSS", "jQuery", "Dojo.js"],
    tone: "green",
    image: "/projects/tokstok.png",
    url: "https://www.tokstok.com.br/",
  },
  {
    id: "caoa-sites",
    title: "CAOA Sites Operacionais",
    category: "Aplicações",
    summary: "Aplicações que acompanham o dia a dia da operação.",
    description:
      "Sites e aplicações operacionais para apoiar processos internos, atendimento ao cliente e evolução da operação, com desenvolvimento de interfaces web e serviços.",
    technologies: ["React", "Next.js", "Node.js", "Azure DevOps"],
    tone: "blue",
    illustration: "CAOA",
  },
  {
    id: "sesc-bilheteria",
    title: "Site Bilheteria SESC",
    category: "Aplicações",
    summary: "Uma jornada clara para descobrir e comprar ingressos.",
    description:
      "Plataforma web para consulta e compra de ingressos, com foco em usabilidade, clareza da jornada e integração com os serviços do SESC SP.",
    technologies: ["React.js", "Next.js", "Java", "JavaScript", "Azure DevOps"],
    tone: "violet",
    illustration: "SESC",
  },
];
