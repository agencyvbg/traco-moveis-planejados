'use client';
import { HoverLabel } from '@/components/ui/hover-label';

import { TitleReveal } from '@/animations/title-reveal';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useMotionValueEvent,
  animate,
  type AnimationPlaybackControls,
} from 'framer-motion';
import { projects } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import './environments.css';
function WorkCard({
  index,
  progress,
}: {
  index: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const project = projects[index];
  const reduced = useReducedMotion();

  // Reference timeline: 0.1s hold, three 0.5s exchanges separated by 0.01s.
  const exchange = (value: number, step: number) =>
    Math.min(1, Math.max(0, (value * 1.62 - (0.1 + step * 0.51)) / 0.5));
  const y = useTransform(progress, (value) => {
    if (index < 3 && exchange(value, index) > 0)
      return `${-exchange(value, index) * 120}%`;
    let offset = index * 40;
    for (let step = 0; step < index; step++)
      offset -=
        exchange(value, step) *
        (step === index - 1 ? index * 40 - step * 20 : 20);
    return `${offset}px`;
  });
  const rotateX = useTransform(progress, (value) =>
    index === 3 ? 0 : exchange(value, index) * 45,
  );
  const scale = useTransform(progress, (value) => {
    let current = 1 - index * 0.06;
    for (let step = 0; step < index; step++)
      current += exchange(value, step) * 0.06;
    return current;
  });
  return (
    <motion.article
      className="environment-panel tw:grid"
      style={{
        y: reduced ? 0 : y,
        rotateX: reduced ? 0 : rotateX,
        scale: reduced ? 1 : scale,
        zIndex: 4 - index,
      }}
    >
      <div className="environment-copy">
        <Link href={`/projetos/${project.slug}`}>
          <h3>
            {project.title}
            <br />
            {project.category}
          </h3>
        </Link>
        <p>{project.description}</p>
        <Link className="pill-link" href={`/projetos/${project.slug}`}>
          <HoverLabel variant="v2">Saiba mais</HoverLabel>
        </Link>
      </div>
      <div className="environment-photo">
        <ResponsiveImage
          eager
          priority="auto"
          unoptimized
          {...project.images.capa}
          alt={`${project.category} — ${project.title}`}
          sizes="(min-width:768px) 500px,100vw"
        />
      </div>
    </motion.article>
  );
}
export function Environments() {
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ['start start', 'end end'],
  });
  const smoothProgress = useMotionValue(0);
  const scrub = useRef<AnimationPlaybackControls | null>(null);
  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    scrub.current?.stop();
    if (reduced) smoothProgress.set(value);
    else
      scrub.current = animate(smoothProgress, value, {
        duration: 0.8,
        ease: (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t)),
      });
  });
  useEffect(() => () => scrub.current?.stop(), []);
  return (
    <section
      id="ambientes"
      className="environments section"
      aria-labelledby="environments-title"
      tabIndex={-1}
    >
      <div className="reference-heading">
        <TitleReveal id="environments-title" text="Projetos em destaque" />
        <span className="reference-badge" data-floating-badge="">
          Espaços sob medida
        </span>
      </div>
      <div ref={track} className="environment-track" data-reduced={!!reduced}>
        <div className="environment-list">
          {[0, 1, 2, 3].map((index) => (
            <WorkCard
              key={projects[index].slug}
              index={index}
              progress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
