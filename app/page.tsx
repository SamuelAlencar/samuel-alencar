import Navigation from "./components/navigation";
import CompanyCarousel from "./components/company-carousel";
import ProjectCounter from "./components/project-counter";
import ParticleStory from "./components/particle-story";
import HeroEnergy from "./components/hero-energy";
import ProjectGallery from "./components/project-gallery";
import ScrollEffects from "./components/scroll-effects";
import Skills from "./components/skills";
import ContactActions from "./components/contact-actions";
import { Icon } from "./components/ui-icon";
import { courses, education, experiences, profile } from "./data/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <ScrollEffects />
      <Navigation />
      <main id="conteudo">
        <div className="hero-stage">
        <section className="hero container" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-introduction"><span className="tiny-line" /> OLÁ, EU SOU SAMUEL ALENCAR</div>
            <h1 id="hero-title"><span className="hero-title-line">Transformando</span><span className="hero-title-line">ideias em</span><span className="hero-title-line hero-title-accent">experiências.</span><span className="hero-asterisk" aria-hidden="true">✳</span></h1>
            <p className="hero-description">Analista de Sistemas & Full Stack Developer.<br />Conecto tecnologia, pessoas e negócios através de experiências digitais que fazem a diferença.</p>
            <div className="hero-actions"><a className="button button-dark" href="#projetos">Explore meus projetos <Icon name="arrow" size={18} /></a><a className="button button-outline" href="/curriculo-samuel-alencar.pdf" download>Baixar currículo <Icon name="download" size={17} /></a></div>
            <div className="hero-location"><span className="green-dot" /> Atuação atual na CAOA Chery <span className="location-divider" /> São Paulo, Brasil</div>
          </div>
          <HeroEnergy />
          <div className="hero-bottom"><ProjectCounter total={14} label="Anos em desenvolvimento" note="" /><ProjectCounter /><div className="hero-stat"><strong>06</strong><span>Empresas na trajetória</span></div><a className="scroll-cue" href="#sobre"><span>UM POUCO MAIS SOBRE MIM</span><Icon name="down" size={17} /></a></div>
        </section>
        </div>

        <CompanyCarousel />

        <ParticleStory />

        <section className="about-section section container" id="sobre" aria-labelledby="about-title">
          <div className="section-heading" data-reveal><span className="section-index">01 / SOBRE MIM</span><h2 id="about-title">Mais do que código.<br /><span>Conexões que fazem sentido.</span></h2></div>
          <div className="about-grid" data-reveal>
            <div className="about-note"><span className="note-icon" aria-hidden="true">✳</span><p>Visão de negócio.<br />Curiosidade de quem<br />nunca para de aprender.</p><span className="note-signature">Samuel Alencar <span>↗</span></span></div>
            <div className="about-copy"><p>Sou Samuel, <strong>Analista de Sistemas e Desenvolvedor Full Stack Sênior</strong>. Minha trajetória começou no universo digital da Tok&Stok e evoluiu para a construção de aplicações, e-commerces e integrações em empresas de grande porte.</p><p>Gosto de entender o desafio antes de escolher a tecnologia. Da arquitetura front-end à integração entre sistemas, combino visão de negócio, liderança técnica e atenção à experiência de quem está do outro lado da tela.</p><p>Hoje, na <strong>CAOA Chery</strong>, atuo com soluções web e mobile. E sigo aprendendo: concluí minha pós-graduação em Desenvolvimento Web no SENAC e exploro o uso de IA no dia a dia do desenvolvimento.</p><div className="about-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">Mais sobre minha trajetória <Icon name="arrow" size={17} /></a><span><Icon name="pin" size={15} /> {profile.location}</span></div></div>
          </div>
        </section>

        <section className="projects-section section" id="projetos" aria-labelledby="projects-title"><div className="container"><div className="section-heading heading-with-aside" data-reveal><div><span className="section-index">02 / PROJETOS SELECIONADOS</span><h2 id="projects-title">Do desafio à <span>solução.</span></h2></div><p>E-commerce, aplicações e novas possibilidades.<br />Um pouco do que ajudei a construir.</p></div><ProjectGallery /></div></section>

        <section className="experience-section section container" id="experiencia" aria-labelledby="experience-title"><div className="experience-layout"><div className="experience-intro" data-reveal><span className="section-index">03 / TRAJETÓRIA</span><h2 id="experience-title">Cada etapa,<br />um novo <span>repertório.</span></h2><p>De experiências digitais no varejo a aplicações que conectam operações inteiras.</p><a className="text-link" href="/curriculo-samuel-alencar.pdf" download>Currículo completo <Icon name="download" size={17} /></a><div className="journey-mark" aria-hidden="true"><span>2006</span><div /><span>HOJE ↗</span></div></div><div className="timeline">{experiences.map((experience, index) => <details className="experience-item" key={experience.id} open={index === 0} data-reveal><summary><span className={`timeline-dot ${index === 0 ? "current" : ""}`} /><span className="experience-summary"><span className="experience-period">{experience.period}{index === 0 && <span className="current-badge">ATUALMENTE</span>}</span><h3>{experience.company}</h3><span className="experience-role">{experience.role}</span></span><span className="experience-toggle"><Icon name="plus" size={18} /></span></summary><div className="experience-content"><p>{experience.description}</p><ul>{experience.highlights.map((item) => <li key={item}>{item}</li>)}</ul><div className="tag-list">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></details>)}</div></div></section>

        <section className="skills-section section" id="habilidades" aria-labelledby="skills-title"><div className="container"><div className="section-heading heading-with-aside" data-reveal><div><span className="section-index">04 / HABILIDADES</span><h2 id="skills-title">Uma stack. <span>Muitas possibilidades.</span></h2></div><p>Ferramentas mudam. A vontade de<br />resolver problemas continua.</p></div><div data-reveal><Skills /></div></div></section>

        <section className="education-section section container" id="formacao" aria-labelledby="education-title"><div className="section-heading" data-reveal><span className="section-index">05 / APRENDIZADO CONTÍNUO</span><h2 id="education-title">Sempre em <span>construção.</span></h2></div><div className="education-grid" data-reveal>{education.map((item, index) => <article className="education-card" key={item.degree}><div className="education-icon" aria-hidden="true">{index === 0 ? "✧" : "⌘"}</div><div><span className="education-period">{item.period}</span><h3>{item.degree}</h3><p>{item.school}</p></div><Icon name="arrow" size={20} /></article>)}</div><details className="courses-disclosure"><summary>Cursos e especializações <span>{courses.length} cursos <Icon name="plus" size={18} /></span></summary><div className="courses-grid">{courses.map((course) => <article key={course.title}><span>{course.year}</span><h3>{course.title}</h3><p>{course.school}</p></article>)}</div></details></section>

        <section className="contact-section" id="contato" aria-labelledby="contact-title"><div className="container contact-inner" data-reveal><div className="contact-copy"><span className="section-index">06 / VAMOS CONVERSAR</span><h2 id="contact-title">Boas ideias merecem<br /><span>uma boa conexão.</span><span className="contact-star" aria-hidden="true">✳</span></h2><p>Um projeto, um desafio ou uma troca de ideias.<br />Vamos descobrir o que podemos construir juntos?</p><ContactActions /></div><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span><b aria-hidden="true">in</b> LinkedIn</span><Icon name="arrow" size={19} /></a><a href={profile.github} target="_blank" rel="noopener noreferrer"><span><Icon name="github" size={19} /> GitHub</span><Icon name="arrow" size={19} /></a><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer"><span><Icon name="mail" size={19} /> WhatsApp</span><Icon name="arrow" size={19} /></a></div></div></section>
      </main>
      <footer className="site-footer container"><a className="footer-brand" href="#inicio">sa<span>.</span></a><span>© {new Date().getFullYear()} Samuel Alencar. Feito com intenção.</span><a className="back-top" href="#inicio">De volta ao topo <Icon name="arrow" size={16} /></a></footer>
    </>
  );
}
