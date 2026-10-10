'use client';
import { HoverLabel } from '@/components/ui/hover-label';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { projects } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import { useSmoothedProgress } from '@/animations/use-smoothed-progress';
import './leaders.css';
export function Leaders() {
  const region = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: region,
    offset: ['start center', 'end end'],
  });
  const progress = useSmoothedProgress(scrollYProgress, 0.85);
  const rotate = useTransform(progress, [0, 1], [0, 360]);
  useEffect(() => {
    const element = region.current;
    if (!element) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    void Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();
        media.add('(prefers-reduced-motion: no-preference)', () => {
          const images = element.querySelectorAll('.leaders-image');
          gsap.set(images, { rotation: 0, xPercent: -50, x: 0 });
          const fan = gsap.to(images, {
            rotation: (index) => (index === 0 ? 0 : -(10 - index) * 36),
            duration: 1,
            ease: 'power2.inOut',
            paused: true,
          });
          ScrollTrigger.create({
            trigger: element,
            start: 'top 60%',
            end: 'bottom 10%',
            onEnter: () => fan.play(),
            onEnterBack: () => fan.play(),
            onLeave: () => fan.pause(0),
            onLeaveBack: () => fan.pause(0),
            onRefresh: (trigger) => {
              if (trigger.progress > 0) fan.progress(1);
            },
          });
          return () => {
            fan.kill();
          };
        });
        cleanup = () => media.revert();
      },
    );
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
  return (
    <section
      id="lideres"
      tabIndex={-1}
      ref={region}
      className="leaders"
      aria-labelledby="leaders-title"
    >
      <motion.div
        className="leaders-ring"
        style={{ rotate: reduced ? 0 : rotate }}
        aria-hidden="true"
      >
        <div className="leaders-orbit">
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map(
            (angle, index) => (
              <div
                className="leaders-image"
                style={{
                  transform: `translateX(-50%) rotate(${angle}deg)`,
                }}
                key={angle}
              >
                <ResponsiveImage
                  eager
                  priority="auto"
                  unoptimized
                  {...projects[index % 6].images[
                    index < 6 ? 'capa' : 'detalhe'
                  ]}
                  alt=""
                  sizes="18vw"
                />
              </div>
            ),
          )}
        </div>
      </motion.div>
      <div className="leaders-copy">
        <span className="leaders-badge">400+ grandes marcas</span>
        <h2 id="leaders-title">
          Escolhido por
          <br />
          <span>líderes</span>
        </h2>
        <Link href="/sobre" className="pill-link">
          <HoverLabel variant="primary">Saiba mais</HoverLabel>
        </Link>
      </div>
      <DemoNote>Quantidade demonstrativa do Ariyana; fotos da Traço.</DemoNote>
    </section>
  );
}
