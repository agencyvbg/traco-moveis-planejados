'use client';
import { useEffect } from 'react';
export function ServiceOpeningMotion() {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    async function setup() {
      const [{ gsap }, { SplitText }] = await Promise.all([
        import('gsap'),
        import('gsap/SplitText'),
        document.fonts.ready,
      ]);
      if (disposed) return;
      gsap.registerPlugin(SplitText);
      const media = gsap.matchMedia();
      cleanup = () => media.revert();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const title = document.querySelector('.service-opening-content h1');
        if (!title) return;
        const split = SplitText.create(
          title.querySelectorAll('[data-service-title-text]'),
          {
            type: 'words,chars',
            mask: 'chars',
          },
        );
        gsap.from(split.chars, {
          yPercent: -100,
          opacity: 0,
          duration: 1,
          stagger: { amount: 0.5 },
          ease: 'back.inOut',
        });
        gsap.from('.service-opening-caption', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
        gsap.from('.service-opening-photo', {
          scale: 0,
          delay: 0.53,
          duration: 0.5,
          ease: 'power1.inOut',
        });
        return () => split.revert();
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
