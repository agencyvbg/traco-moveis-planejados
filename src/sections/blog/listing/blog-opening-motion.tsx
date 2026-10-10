'use client';
import { useEffect } from 'react';
export function BlogOpeningMotion() {
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
        const title = document.querySelector(
          '.blog-page .reference-opening h1',
        );
        if (!title) return;
        const split = SplitText.create(title, {
          type: 'words,chars',
          mask: 'chars',
        });
        gsap.from(split.chars, {
          yPercent: -100,
          opacity: 0,
          duration: 1,
          stagger: { amount: 0.5 },
          ease: 'back.inOut',
        });
        gsap.from('.blog-page .reference-opening .section-kicker', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
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
