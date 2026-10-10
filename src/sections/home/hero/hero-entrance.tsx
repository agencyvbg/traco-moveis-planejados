'use client';
import { useEffect, useRef } from 'react';

export function HeroEntrance() {
  const marker = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = marker.current?.closest('.hero');
    if (!element) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    let play: (() => void) | undefined;
    const start = () => play?.();
    window.addEventListener('traco:entrance-ready', start);
    void import('gsap').then(({ gsap }) => {
      if (disposed) return;
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const curtain = document.querySelector<HTMLElement>('.page-transition');
        const initial =
          curtain?.dataset.phase === 'initial' ||
          (!!curtain?.dataset.entranceStart &&
            performance.now() - Number(curtain.dataset.entranceStart) < 8000);
        const timeline = gsap.timeline({ paused: true });
        const letters = (selector: string) =>
          element.querySelectorAll(`${selector} .hero-letter`);
        gsap.set(element.querySelector('.hero-background'), {
          scaleX: 0.3,
          scaleY: 0.2,
        });
        gsap.set(letters('.hero-wordmark'), { yPercent: -100 });
        gsap.set(letters('.hero-content h2'), { yPercent: -100 });
        gsap.set(letters('.hero-description'), { yPercent: -100 });
        gsap.set(element.querySelectorAll('.hero-social,.hero-stat'), {
          opacity: 0,
          y: 30,
        });
        timeline
          .to(
            element.querySelector('.hero-background'),
            { scaleX: 1, scaleY: 1, duration: 1.5, ease: 'power1.inOut' },
            1.6,
          )
          .to(
            letters('.hero-wordmark'),
            {
              yPercent: 0,
              duration: 1,
              stagger: { amount: 0.5 },
              ease: 'back.inOut',
            },
            2.57,
          )
          .to(
            letters('.hero-content h2'),
            {
              yPercent: 0,
              duration: 1,
              stagger: { amount: 0.5 },
              ease: 'back.inOut',
            },
            3.46,
          )
          .to(
            letters('.hero-description'),
            {
              yPercent: 0,
              duration: 0.8,
              stagger: { amount: 0.4 },
              ease: 'power3.out',
            },
            4.06,
          )
          .to(
            element.querySelector('.hero-social'),
            { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' },
            4.89,
          )
          .to(
            element.querySelector('.hero-stat'),
            { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' },
            5.05,
          );
        play = () => {
          const started = Number(curtain?.dataset.entranceStart);
          timeline.play(
            initial && started
              ? Math.max(0, (performance.now() - started) / 1000)
              : 1.44,
          );
        };
        if (!initial || curtain?.dataset.entranceStart) play();
        return () => {
          timeline.kill();
        };
      });
      cleanup = () => media.revert();
    });
    return () => {
      disposed = true;
      window.removeEventListener('traco:entrance-ready', start);
      cleanup?.();
    };
  }, []);
  return <span ref={marker} hidden />;
}
