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
  status: string;
  imageNote?: string;
  url?: string;
};

// Conteúdo do portfólio original, separado da interface para facilitar a edição.
export const projects: Project[] = [
  {
    id: "salon-line",
    title: "Salon Line",
    category: "E-commerce",
    summary: "E-commerce conectado ao ERP e aos sistemas corporativos.",
    description:
      "Implantação e sustentação do e-commerce em Oracle Commerce Cloud, com funcionalidades, hotsites e landing pages. Implementei integrações de alta complexidade entre o ERP TOTVS, sistemas Linx e a plataforma usando Oracle Integration Cloud, além de apoiar o go-live.",
    technologies: ["Oracle Commerce Cloud", "React.js", "Integrações", "WordPress", "Oracle Integration Cloud", "Digibee", "Linx Commerce"],
    tone: "rose",
    image: "/projects/salon-line.png",
    status: "Solução implantada e sustentada",
    imageNote: "Imagem ilustrativa da interface do projeto.",
    url: "https://salonline.com.br",
  },
  {
    id: "carrefour",
    title: "Carrefour",
    category: "E-commerce",
    summary: "Arquitetura front-end para e-commerce, marketplace e back-office.",
    description:
      "Consultoria na evolução do e-commerce VTEX IO, marketplace e portal de back-office. Contribuí para modernizar a arquitetura front-end com microfrontends e Module Federation, além de fortalecer práticas de DevOps, code reviews e investigação de incidentes.",
    technologies: ["VTEX IO", "React.js", "TypeScript", "Module Federation", "Microfrontends", "GCP", "DevOps", "BackOffice"],
    tone: "blue",
    image: "/projects/carrefour.png",
    status: "Plataformas em evolução",
    imageNote: "Imagem ilustrativa da interface do projeto.",
    url: "https://www.carrefour.com.br/",
  },
  {
    id: "yamaha",
    title: "Yamaha Motor",
    category: "E-commerce",
    summary: "Funcionalidades interativas para a jornada de e-commerce.",
    description:
      "Por meio da Compass.UOL, atuei na implantação, sustentação e evolução da Oracle Commerce Cloud para a Yamaha. Desenvolvi funcionalidades para a jornada digital, incluindo carrossel 360°, simulação de financiamento em tempo real e landing pages interativas.",
    technologies: ["Oracle Commerce Cloud", "Knockout.js", "jQuery", "Bootstrap", "Design responsivo"],
    tone: "sand",
    image: "/projects/yamaha.png",
    status: "Cliente atendido via Compass.UOL",
    imageNote: "Imagem ilustrativa da interface do projeto.",
    url: "https://www.yamaha-motor.com.br/",
  },
  {
    id: "caoa-dashboards",
    title: "CAOA Dashboards",
    category: "Aplicações",
    summary: "Dados operacionais para apoiar decisões no negócio automotivo.",
    description:
      "Desenvolvimento e evolução de dashboards internos que conectam interfaces web, serviços e dados operacionais para apoiar a tomada de decisão. A iniciativa integra o conjunto de ferramentas corporativas com potencial de ampliar o retorno sobre o desenvolvimento.",
    technologies: ["Next.js", "Node.js", "SQL Server", "React", "Azure DevOps"],
    tone: "violet",
    illustration: "CAOA",
    status: "Solução interna em evolução",
  },
  {
    id: "sesc-app",
    title: "SESC SP App",
    category: "Aplicações",
    summary: "Evolução do aplicativo de bilheteria do SESC.",
    description:
      "Participação na evolução do aplicativo de bilheteria do SESC SP, voltado ao acesso a serviços, conteúdo e jornadas do público em Android e iOS. Esta aplicação é distinta do site de bilheteria e de outros sistemas sustentados pela equipe.",
    technologies: ["React Native", "Android", "iOS", "Node.js", "Azure DevOps"],
    tone: "green",
    illustration: "SESC",
    status: "Aplicação em evolução",
  },
  {
    id: "livelo",
    title: "Livelo",
    category: "E-commerce",
    summary: "Sustentação e evolução da plataforma de fidelidade.",
    description:
      "Por meio da Compass.UOL, atuei na implantação, sustentação e desenvolvimento de funcionalidades da Oracle Commerce Cloud para a Livelo, contribuindo para a evolução de sua operação de e-commerce.",
    technologies: ["Oracle Commerce Cloud", "Knockout.js", "jQuery", "Design responsivo"],
    tone: "rose",
    image: "/projects/livelo.png",
    status: "Cliente atendido via Compass.UOL",
    imageNote: "Imagem ilustrativa da interface do projeto.",
    url: "https://www.livelo.com.br/",
  },
  {
    id: "sesc-central-relacionamento",
    title: "Central de Relacionamento Sesc SP",
    category: "Aplicações",
    summary: "Evolução de uma aplicação de relacionamento com o público.",
    description:
      "Atuação na sustentação e no desenvolvimento de novas funcionalidades para a Central de Relacionamento do Sesc SP, contribuindo para a manutenção e evolução da plataforma.",
    technologies: ["Sustentação", "Desenvolvimento de funcionalidades"],
    tone: "green",
    illustration: "SESC",
    status: "Solução em sustentação e evolução",
    url: "https://centralrelacionamento.sescsp.org.br/",
  },
  {
    id: "tokstok",
    title: "Tok&Stok E-commerce",
    category: "E-commerce",
    summary: "Três versões que acompanharam a evolução do canal digital.",
    description:
      "Participei, em equipe, do desenvolvimento e da evolução de três versões do e-commerce. O canal deixou de ser usado principalmente como catálogo pelas equipes das lojas e se tornou um dos maiores faturamentos da rede na comparação com unidades físicas. Contribuí com front-end, componentes legados e sustentação em IBM WebSphere Commerce e VTEX.",
    technologies: ["IBM WebSphere Commerce", "VTEX Legacy", "JavaScript", "HTML", "CSS", "jQuery", "Dojo.js"],
    tone: "green",
    image: "/projects/tokstok.png",
    status: "E-commerce evoluído em três versões",
    imageNote: "Imagem ilustrativa da interface do projeto.",
    url: "https://www.tokstok.com.br/",
  },
  {
    id: "caoa-sites",
    title: "CAOA Sites Operacionais",
    category: "Aplicações",
    summary: "Ferramentas web para operação e atendimento.",
    description:
      "Concepção, desenvolvimento e sustentação de aplicações internas para apoiar processos operacionais e atendimento. A frente combina interfaces web, serviços e práticas de entrega contínua para evoluir ferramentas corporativas.",
    technologies: ["React", "Next.js", "Node.js", "Azure DevOps"],
    tone: "blue",
    illustration: "CAOA",
    status: "Soluções internas em evolução",
  },
  {
    id: "sesc-bilheteria",
    title: "Site Bilheteria SESC",
    category: "Aplicações",
    summary: "Site de bilheteria para consulta e compra de ingressos.",
    description:
      "Plataforma web para consulta e compra de ingressos, com foco em usabilidade, clareza da jornada e integração com os serviços do SESC SP.",
    technologies: ["React.js", "Next.js", "Java", "JavaScript", "Azure DevOps"],
    tone: "violet",
    illustration: "SESC",
    status: "Aplicação distinta do app de bilheteria",
  },
];
