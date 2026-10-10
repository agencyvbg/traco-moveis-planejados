import { ProjectOpeningMotion } from './project-opening-motion';
import { HoverLabel } from '@/components/ui/hover-label';
import Link from 'next/link';
import { projects, projectPath } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import './project-gallery.css';
export function ProjectGallery() {
  return (
    <>
      <ProjectOpeningMotion />
      <PageOpening
        id="collection-title"
        caption="Histórico dos projetos"
        title="Nosso olhar criativo define o que construímos."
      >
        <Link className="pill-link" href="/contato">
          <HoverLabel variant="primary">Vamos conversar</HoverLabel>
        </Link>
      </PageOpening>
      <div className="project-ticker" aria-hidden="true">
        <div>
          {[0, 1, 2].map((n) => (
            <span key={n}>Cozinhas ✳ Quartos ✳ Salas ✳ </span>
          ))}
        </div>
      </div>
      <div
        className="reference-divider reference-divider-orange"
        aria-hidden="true"
      >
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <section
        className="project-collection section"
        aria-labelledby="collection-heading"
      >
        <div className="reference-heading">
          <h2 id="collection-heading" data-title-anim="">
            Nossos novos projetos
          </h2>
          <span className="reference-badge" data-floating-badge="">
            Espaços sob medida
          </span>
        </div>
        <div className="collection-grid">
          {projects.map((project, index) => (
            <article key={project.slug} className="collection-item">
              <Link className="project-card-image" href={projectPath(project)}>
                <ResponsiveImage
                  {...project.images.capa}
                  alt={`${project.category} — ${project.title}`}
                  eager={index === 0}
                  sizes="(min-width:768px) 43vw,100vw"
                />
              </Link>
              <div className="project-card-caption">
                <Link href={projectPath(project)}>
                  <h3 data-title-anim="">
                    {project.title} — {project.category}
                  </h3>
                </Link>
                <div className="project-card-tags">
                  {project.features.slice(0, 2).map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
                <small className="demo-note">
                  Estudo conceitual de marcenaria
                </small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
