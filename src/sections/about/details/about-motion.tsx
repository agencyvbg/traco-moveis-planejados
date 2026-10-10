'use client';
import { useEffect } from 'react';

/** Ariyana About IX3: t-610354a5, t-3e2a02dc, t-ce39731a, t-36c4dd99. */
export function AboutMotion() {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    async function setup() {
      const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/SplitText'),
        document.fonts.ready,
      ]);
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const media = gsap.matchMedia();
      cleanup = () => media.revert();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const title = document.querySelector(
          '.about-page .reference-opening h1',
        );
        let split: InstanceType<typeof SplitText> | undefined;
        if (title) {
          // Preserve the inline image: split only the two text wrappers.
          split = SplitText.create(
            title.querySelectorAll('[data-about-title-text]'),
            { type: 'words,chars', mask: 'chars' },
          );
          gsap.from(split.chars, {
            yPercent: -100,
            opacity: 0,
            duration: 1,
            stagger: { amount: 0.5 },
            ease: 'back.inOut',
          });
          gsap.from('.about-page .reference-inline-image', {
            scale: 0,
            delay: 0.53,
            duration: 0.5,
            ease: 'power1.inOut',
          });
          gsap.from('.about-page .reference-opening .section-kicker', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          });
        }
        document.querySelectorAll('.about-counter').forEach((counter) => {
          const timeline = gsap.timeline({ paused: true });
          timeline
            .from(
              counter.querySelectorAll('.counter-top'),
              { yPercent: -90, duration: 2, ease: 'power3.inOut' },
              0,
            )
            .from(
              counter.querySelectorAll('.counter-bottom'),
              { yPercent: 90, duration: 2, ease: 'power3.inOut' },
              0,
            )
            .from(
              counter.querySelectorAll('.counter-suffix'),
              { yPercent: 20, opacity: 0, duration: 0.5, ease: 'power2.out' },
              1.94,
            );
          ScrollTrigger.create({
            trigger: counter,
            animation: timeline,
            start: 'clamp(top bottom)',
            toggleActions: 'play none none none',
          });
        });
        return () => split?.revert();
      });
      media.add(
        '(min-width: 992px) and (prefers-reduced-motion: no-preference)',
        () => {
          const why = document.querySelector('.about-why-track');
          if (why) {
            const timeline = gsap.timeline({ paused: true });
            timeline.to(why.querySelectorAll('.about-why-card'), {
              width: '32.5%',
              duration: 0.5,
              stagger: 0.5,
              ease: 'none',
            });
            ScrollTrigger.create({
              trigger: why,
              animation: timeline,
              start: 'top top',
              end: 'bottom 130%',
              scrub: 0.8,
            });
          }
          const team = document.querySelector('.about-team-track');
          if (team) {
            const timeline = gsap.timeline({ paused: true });
            timeline.fromTo(
              team.querySelectorAll(
                '.about-team-grid article:not(:first-child)',
              ),
              { opacity: 0, yPercent: 100 },
              {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
                stagger: 0.5,
                ease: 'none',
              },
            );
            ScrollTrigger.create({
              trigger: team,
              animation: timeline,
              start: 'top top',
              end: 'bottom 130%',
              scrub: 0.8,
            });
          }
          const cards = Array.from(
            document.querySelectorAll<HTMLElement>('.about-life-images > div'),
          );
          const events: Array<() => void> = [];
          const offsets = [
            [0, 7, 5, 5],
            [2, 0, 2, 2],
            [-15, -8, 0, 10],
            [-10, -8, -10, 0],
          ];
          const hoverContext = gsap.context(() => {});
          cards.forEach((card, index) => {
            const enter = () => {
              gsap.to(card, {
                scale: 1.1,
                rotation: 0,
                duration: 0.8,
                ease: 'back.out',
                overwrite: 'auto',
              });
              cards.forEach((sibling, siblingIndex) => {
                if (sibling === card) return;
                const distance = offsets[index][siblingIndex];
                gsap.to(sibling, {
                  x: `${distance}vw`,
                  duration: 0.8,
                  ease: 'back.out',
                  overwrite: 'auto',
                });
              });
            };
            const leave = () => {
              gsap.to(card, {
                scale: 1,
                duration: 0.6,
                ease: 'back.out',
                overwrite: 'auto',
              });
              gsap.to(card, {
                rotation: index === 1 ? 5 : -3,
                duration: 0.6,
                ease: 'power1.inOut',
                overwrite: 'auto',
              });
              cards.forEach((sibling) => {
                if (sibling !== card)
                  gsap.to(sibling, {
                    x: 0,
                    duration: 0.6,
                    ease: 'back.out',
                    overwrite: 'auto',
                  });
              });
            };
            hoverContext.add(`enter${index}`, enter);
            hoverContext.add(`leave${index}`, leave);
            const onEnter = () => hoverContext[`enter${index}`]();
            const onLeave = () => hoverContext[`leave${index}`]();
            card.addEventListener('mouseenter', onEnter);
            card.addEventListener('mouseleave', onLeave);
            events.push(() => {
              card.removeEventListener('mouseenter', onEnter);
              card.removeEventListener('mouseleave', onLeave);
            });
          });
          return () => {
            events.forEach((remove) => {
              remove();
            });
            hoverContext.revert();
          };
        },
      );
      ScrollTrigger.refresh();
    }
    void setup();
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
  return null;
}
