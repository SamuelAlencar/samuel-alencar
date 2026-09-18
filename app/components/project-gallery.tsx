"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects, type Project, type ProjectCategory } from "../data/projects";

const filters: ("Todos" | ProjectCategory)[] = ["Todos", "E-commerce", "Aplicações", "IA"];

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={`project-preview tone-${project.tone}`}>
      {project.image ? (
        <Image
          src={project.image}
          alt={`Captura do projeto ${project.title} no portfólio original`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
          className="project-image"
        />
      ) : (
        <div className="project-illustration" aria-label="Composição ilustrativa do projeto">
          <span className="illustration-topline">&lt; Visão do projeto /&gt;</span>
          <span className="illustration-mark" aria-hidden="true">{project.illustration}</span>
          <span className="illustration-lines" aria-hidden="true"><i /><i /><i /></span>
          <span className="illustration-caption">Conceito visual · ilustrativo</span>
        </div>
      )}
      <span className="project-category">{project.category}</span>
    </div>
  );
}

export default function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const previousOverflowRef = useRef<string | null>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const firstExtraProjectRef = useRef<HTMLButtonElement>(null);

  const matchingProjects = filter === "Todos" ? projects : projects.filter((project) => project.category === filter);
  const visibleProjects = filter === "Todos" && !showAll ? matchingProjects.slice(0, 6) : matchingProjects;

  useEffect(() => {
    return () => {
      if (previousOverflowRef.current !== null) {
        document.body.style.overflow = previousOverflowRef.current;
      }
    };
  }, []);

  useEffect(() => {
    if (showAll && document.activeElement === expandButtonRef.current) {
      firstExtraProjectRef.current?.focus({ preventScroll: true });
    }
  }, [showAll]);

  useEffect(() => {
    if (!selectedProject) return;
    if (previousOverflowRef.current === null) {
      previousOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    // Abre após renderizar o título: leitores de tela recebem o nome do projeto.
    dialogRef.current?.showModal();
  }, [selectedProject]);

  function openProject(project: Project, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelectedProject(project);
  }

  function restoreAfterClose() {
    if (previousOverflowRef.current !== null) {
      document.body.style.overflow = previousOverflowRef.current;
      previousOverflowRef.current = null;
    }
    setSelectedProject(null);
    triggerRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filtrar projetos por categoria">
        {filters.map((category) => (
          <button
            className={`filter-button${filter === category ? " active" : ""}`}
            type="button"
            key={category}
            aria-pressed={filter === category}
            aria-controls="project-results"
            onClick={() => {
              setFilter(category);
              setShowAll(false);
            }}
          >
            {category}
            <span>{category === "Todos" ? projects.length : projects.filter((project) => project.category === category).length}</span>
          </button>
        ))}
      </div>

      <p className="sr-only" role="status">
        {visibleProjects.length} projetos exibidos. Categoria: {filter}.
      </p>
      <div className="projects-grid" id="project-results">
        {visibleProjects.map((project, index) => (
          <button
            className="project-card"
            type="button"
            key={project.id}
            ref={index === 6 ? firstExtraProjectRef : undefined}
            aria-haspopup="dialog"
            aria-label={`Ver detalhes de ${project.title}`}
            onClick={(event) => openProject(project, event.currentTarget)}
          >
            <ProjectPreview project={project} />
            <div className="project-card-body">
              <div className="project-card-heading">
                <h3>{project.title}</h3>
                <span className="project-open" aria-hidden="true">↗</span>
              </div>
              <p>{project.summary}</p>
              <div className="project-tags">
                {project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          </button>
        ))}
      </div>

      {filter === "Todos" && (
        <div className="projects-more">
          <button
            className="button button-outline"
            type="button"
            ref={expandButtonRef}
            aria-expanded={showAll}
            aria-controls="project-results"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? "Mostrar menos projetos" : `Ver todos os projetos (${projects.length})`}
            <span aria-hidden="true">{showAll ? "↑" : "↗"}</span>
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        aria-describedby="project-dialog-description"
        onClose={restoreAfterClose}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
            event.currentTarget.close();
          }
        }}
      >
        <button className="dialog-close" type="button" aria-label="Fechar detalhes do projeto" autoFocus onClick={() => dialogRef.current?.close()}>
          <span aria-hidden="true">×</span>
        </button>
        {selectedProject && (
          <>
            <ProjectPreview project={selectedProject} />
            <div className="dialog-content">
              <span className="dialog-eyebrow">PROJETO EM DESTAQUE · {selectedProject.category}</span>
              <h2 id="project-dialog-title">{selectedProject.title}</h2>
              <p id="project-dialog-description">{selectedProject.description}</p>
              <h3>Tecnologias e ferramentas</h3>
              <div className="dialog-tags">
                {selectedProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              {selectedProject.url ? (
                <a className="button button-dark" href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                  Visitar site <span aria-hidden="true">↗</span><span className="sr-only"> (abre em uma nova aba)</span>
                </a>
              ) : (
                <p className="project-access-note">Detalhes públicos do projeto; acesso à aplicação não disponibilizado.</p>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
