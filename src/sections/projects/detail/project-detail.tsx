import { HoverLabel } from '@/components/ui/hover-label';
import Link from 'next/link';
import { type Project, projectPath } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import './project-detail.css';
import { ProjectDetailMotion } from './project-detail-motion';
export function ProjectDetail({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return (
    <>
      <ProjectDetailMotion />
      <section className="project-opening section">
        <div className="project-tags">
          {project.features.slice(0, 2).map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
        <h1 data-title-anim="">
          {project.title} — {project.category}
        </h1>
        <div className="project-meta">
          <div>
            <strong>Projeto</strong>
            <p>{project.title}</p>
          </div>
          <div>
            <strong>Ambiente</strong>
            <p>{project.category}</p>
          </div>
          <div>
            <strong>Materiais</strong>
            <p>Carvalho e travertino</p>
          </div>
          <div>
            <strong>Tipo</strong>
            <p>Estudo conceitual</p>
          </div>
          <Link className="pill-link" href="/contato">
            <HoverLabel variant="v2">Conversar</HoverLabel>
          </Link>
        </div>
      </section>
      <div className="project-cover">
        <ResponsiveImage
          {...project.images.capa}
          alt={`${project.category} — ${project.title}`}
          eager
          sizes="100vw"
        />
      </div>
      <section className="project-story section">
        <h2 data-title-anim="">Por que este olhar</h2>
        <div>
          <p className="project-lead" data-text-anim="">
            {project.introduction}
          </p>
          <p data-text-anim="">{project.description}</p>
        </div>
      </section>
      <section
        className="project-showcase section"
        aria-label="Perspectivas do projeto"
      >
        <div>
          <ResponsiveImage
            {...project.images.angulo}
            alt={`${project.category} — ${project.title}`}
            sizes="43vw"
          />
        </div>
        <div>
          <ResponsiveImage
            {...project.images.meio}
            alt={`${project.category} — ${project.title}`}
            sizes="43vw"
          />
        </div>
      </section>
      <section className="project-overview section">
        <div>
          <h2 data-title-anim="">Visão do projeto</h2>
          <p data-text-anim="">{project.description}</p>
          <DemoNote>
            Métricas abaixo são demonstrações do projeto da referência Ariyana,
            sem relação com resultados da Traço.
          </DemoNote>
        </div>
        <div className="project-overview-stats">
          {[
            { value: '120%', label: 'Aumento de visitas orgânicas' },
            { value: '165%', label: 'Aumento da conversão' },
            { value: '230%', label: 'Aumento de visitas orgânicas' },
            { value: '125%', label: 'Aumento de visitas orgânicas' },
          ].map((item) => (
            <div key={item.value}>
              <strong className="project-counter">
                <span className="tw:sr-only">{item.value}</span>
                {item.value
                  .replace('%', '')
                  .split('')
                  .map((digit, position) => (
                    <span
                      className="project-counter-window"
                      // biome-ignore lint/suspicious/noArrayIndexKey: Fixed digit columns keep their positions throughout the counter animation.
                      key={`${position}-${digit}`}
                      aria-hidden="true"
                    >
                      <span
                        className="project-counter-strip"
                        data-digit={digit}
                        style={{
                          transform: `translateY(-${Number(digit) * 10}%)`,
                        }}
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                          <span key={number}>{number}</span>
                        ))}
                      </span>
                    </span>
                  ))}
                <span aria-hidden="true">%</span>
              </strong>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="project-panorama">
        <ResponsiveImage
          {...project.images.detalhe}
          alt={`${project.category} — detalhe`}
          sizes="100vw"
        />
      </div>
      <section
        className="project-quote section"
        aria-label="Madeira, luz e proporção"
      >
        {['Formas', 'que acolhem', 'e ficam', 'na memória'].map((line) => (
          <div className="project-quote-line" key={line}>
            <p>{line}</p>
            <span className="project-quote-mask" aria-hidden="true" />
          </div>
        ))}
      </section>
      <section className="project-result section">
        <div>
          <h2 data-title-anim="">O resultado</h2>
          <p data-text-anim="">{project.description}</p>
          <Link className="pill-link" href={projectPath(next)}>
            <HoverLabel variant="v2">{`Próximo projeto: ${next.title}`}</HoverLabel>
          </Link>
        </div>
        <div className="project-result-gallery">
          {(['capa', 'angulo', 'detalhe'] as const).map((view) => (
            <div key={view}>
              <ResponsiveImage
                {...project.images[view]}
                alt={`${project.category} — ${view}`}
                sizes="50vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
