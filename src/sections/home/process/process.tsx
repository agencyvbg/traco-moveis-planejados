'use client';
import { TitleReveal } from '@/animations/title-reveal';
import { useState, useEffect } from 'react';
import { processSteps } from './process.content';
import './process.css';
export function Process() {
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(new Set());
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(max-width:991px)');
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  function toggle(id: string) {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  return (
    <section
      id="processo"
      className="process section"
      aria-labelledby="process-title"
      tabIndex={-1}
    >
      <div className="process-heading">
        <TitleReveal id="process-title" text="Avaliar, implementar e operar" />
        <p data-text-anim="">
          Acompanhamos você do primeiro passo ao que vem depois.
        </p>
        <small className="demo-note">
          Demonstração — processo da referência Ariyana
        </small>
      </div>
      <div className="process-grid tw:grid">
        {processSteps.map((step, index) => {
          const open = compact || expanded.has(step.id);
          return (
            <article key={step.id} className="process-item" data-open={open}>
              <span className="process-marker" aria-hidden="true" />
              <div className="process-card">
                <span className="process-count">
                  Etapa {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <div
                  id={`process-${step.id}`}
                  className="process-description"
                  inert={!open}
                >
                  <p>{step.text}</p>
                </div>
                <button
                  type="button"
                  className="process-toggle"
                  aria-expanded={open}
                  aria-controls={`process-${step.id}`}
                  aria-label={
                    (open ? 'Fechar' : 'Abrir') +
                    ' etapa ' +
                    (index + 1) +
                    ': ' +
                    step.title
                  }
                  onClick={() => toggle(step.id)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m5 9 7 7 7-7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
