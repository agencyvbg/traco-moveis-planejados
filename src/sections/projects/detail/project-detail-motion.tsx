'use client';

import { useEffect } from 'react';

export function ProjectDetailMotion() {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    async function setup() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        document.fonts.ready,
      ]);
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      cleanup = () => media.revert();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        document
          .querySelectorAll<HTMLElement>('.project-counter')
          .forEach((counter) => {
            const strips = counter.querySelectorAll<HTMLElement>(
              '.project-counter-strip',
            );
            gsap.fromTo(
              strips,
              { yPercent: 0 },
              {
                yPercent: (_index, element: HTMLElement) =>
                  -Number(element.dataset.digit) * 10,
                duration: 2,
                ease: 'power3.inOut',
                scrollTrigger: {
                  trigger: counter,
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                },
              },
            );
          });
        gsap.fromTo(
          '.project-quote-mask',
          { xPercent: 0 },
          {
            xPercent: 100,
            stagger: 1,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.project-quote',
              start: 'top 65%',
              end: 'bottom 65%',
              scrub: 0.8,
            },
          },
        );
      });
    }
    void setup();
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
  return null;
}
