'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { navigateAnchor } from '@/lib/navigate-anchor';
import { focusAnchor } from '@/lib/focus-anchor';
import { prefersReducedMotion } from '@/lib/media-queries';
import { isPlainClick } from '@/lib/plain-click';
import { routePaths } from '@/config/routes';
import './page-transition.css';

type Destination = {
  url: URL;
  reduced: boolean;
  restoreScroll?: number;
};
type Phase = 'initial' | 'idle' | 'covering' | 'covered' | 'revealing';
const preloaderLetters = Array.from('//TRAÇO').map((letter, index) => ({
  letter,
  id: `preloader-${index}`,
  delay: `${0.05 + (index * 0.4) / 6}s`,
}));

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('initial');
  const pending = useRef<Destination | null>(null);
  const busy = useRef(true);
  const currentPath = useRef(pathname);
  const positions = useRef(new Map<string, number>());
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setPhase('idle');
      busy.current = false;
      return;
    }
    let cancelled = false;
    let frame = 0;
    let deadline: ReturnType<typeof setTimeout> | undefined;
    let finish: ReturnType<typeof setTimeout> | undefined;
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(async () => {
        const image = document.querySelector<HTMLImageElement>('main img');
        // Prepare the first view without waiting for lazy images farther down.
        await Promise.race([
          Promise.all([
            document.fonts.ready,
            image?.decode().catch(() => undefined),
          ]),
          new Promise<void>((resolve) => {
            deadline = setTimeout(resolve, 1200);
          }),
        ]);
        if (cancelled) return;
        clearTimeout(deadline);
        const introduction = currentPath.current === '/';
        if (introduction) {
          if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
          const curtain =
            document.querySelector<HTMLElement>('.page-transition');
          if (curtain)
            curtain.dataset.entranceStart = String(performance.now());
          window.dispatchEvent(new Event('traco:entrance-ready'));
          await new Promise<void>((resolve) => {
            deadline = setTimeout(resolve, 1440);
          });
          if (cancelled) return;
        }
        setPhase('revealing');
        finish = setTimeout(
          () => {
            setPhase('idle');
            busy.current = false;
          },
          currentPath.current === '/' ? 1000 : 540,
        );
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(deadline);
      clearTimeout(finish);
    };
  }, []);

  useEffect(() => {
    const prefetched = new Set<string>();
    const destination = (link: HTMLAnchorElement) => {
      if (link.target || link.hasAttribute('download')) return null;
      const url = new URL(link.href);
      return url.origin === location.origin &&
        routePaths.has(url.pathname) &&
        url.pathname !== location.pathname &&
        !url.search
        ? url
        : null;
    };
    const click = (event: MouseEvent) => {
      if (!isPlainClick(event) || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const samePage = new URL(link.href);
      if (
        !link.target &&
        !link.hasAttribute('download') &&
        samePage.origin === location.origin &&
        samePage.pathname === location.pathname &&
        routePaths.has(samePage.pathname) &&
        !samePage.hash &&
        !samePage.search
      ) {
        event.preventDefault();
        focusAnchor('#conteudo');
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
      const url = destination(link);
      if (!url) return;
      event.preventDefault();
      if (busy.current) return;
      positions.current.set(location.pathname + location.hash, window.scrollY);
      const reduced = prefersReducedMotion();
      pending.current = { url, reduced };
      busy.current = true;
      setPhase(reduced ? 'idle' : 'covering');
      // The mobile dialog finishes closing before the route is replaced.
      timers.current.push(
        setTimeout(
          () => {
            setPhase(reduced ? 'idle' : 'covered');
            if (reduced)
              router.push(url.pathname + url.hash, { scroll: false });
            else {
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  router.push(url.pathname + url.hash, { scroll: false });
                });
              });
            }
          },
          reduced ? 0 : 360,
        ),
      );
      // A failed route request must never leave the visitor behind the curtain.
      timers.current.push(
        setTimeout(() => {
          if (busy.current) location.assign(url.href);
        }, 8000),
      );
    };
    const prefetch = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      const url = link && destination(link);
      if (url && !prefetched.has(url.pathname)) {
        prefetched.add(url.pathname);
        router.prefetch(url.pathname);
      }
    };
    const back = () => {
      if (
        location.pathname === currentPath.current ||
        !routePaths.has(location.pathname)
      )
        return;
      for (const timer of timers.current) clearTimeout(timer);
      timers.current = [];
      const reduced = prefersReducedMotion();
      pending.current = {
        url: new URL(location.href),
        reduced,
        restoreScroll: positions.current.get(location.pathname + location.hash),
      };
      busy.current = true;
      setPhase(reduced ? 'idle' : 'covered');
    };
    // Intercept before Next Link's delegated handler changes the pathname.
    // Otherwise the destination can render before pending is registered,
    // skipping the route effect that resets scroll under the curtain.
    document.addEventListener('click', click, true);
    document.addEventListener('pointerover', prefetch);
    document.addEventListener('focusin', prefetch);
    window.addEventListener('popstate', back);
    return () => {
      document.removeEventListener('click', click, true);
      document.removeEventListener('pointerover', prefetch);
      document.removeEventListener('focusin', prefetch);
      window.removeEventListener('popstate', back);
      for (const timer of timers.current) clearTimeout(timer);
    };
  }, [router]);

  useEffect(() => {
    currentPath.current = pathname;
    const target = pending.current;
    if (!target || target.url.pathname !== pathname) return;
    let cancelled = false;
    let frame = 0;
    // Wait for the destination's section effects to register their scroll markers.
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(async () => {
        const image = document.querySelector<HTMLImageElement>('main img');
        if (image && !image.complete) {
          await Promise.race([
            image.decode().catch(() => undefined),
            new Promise<void>((resolve) => {
              timers.current.push(setTimeout(resolve, 900));
            }),
          ]);
        }
        if (cancelled || pending.current !== target) return;
        if (target.url.hash) navigateAnchor(target.url.hash, false, 'instant');
        else {
          focusAnchor('#conteudo');
          window.scrollTo({
            top: target.restoreScroll ?? 0,
            behavior: 'instant',
          });
        }
        for (const timer of timers.current) clearTimeout(timer);
        timers.current = [];
        pending.current = null;
        if (target.reduced) {
          setPhase('idle');
          busy.current = false;
          return;
        }
        setPhase('revealing');
        timers.current.push(
          setTimeout(
            () => {
              setPhase('idle');
              busy.current = false;
            },
            pathname === '/' ? 1000 : 540,
          ),
        );
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div
      className="page-transition tw:grid tw:place-items-center tw:bg-taupe tw:text-ink"
      data-phase={phase}
      data-home={pathname === '/'}
      aria-hidden={phase === 'idle'}
    >
      <span className="page-transition-wordmark" aria-hidden="true">
        {preloaderLetters.map(({ letter, id, delay }) => (
          <span className="preloader-letter-mask" key={id}>
            <span style={{ animationDelay: delay }}>{letter}</span>
          </span>
        ))}
      </span>
      <span className="page-transition-border" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <i key={i} />
        ))}
      </span>
    </div>
  );
}
