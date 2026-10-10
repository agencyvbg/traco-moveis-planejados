'use client';

import { useEffect, useRef } from 'react';
import './hover-label.css';

type Props = { children: string; variant?: 'primary' | 'v2' | 'link' | 'cta' };

/** Two visual rows, with a single accessible label, as in the reference. */
export function HoverLabel({ children, variant = 'link' }: Props) {
  const label = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = label.current;
    const control = element?.closest('a, button');
    if (!element || !control || !children.length) return;
    let disposed = false;
    let cleanup = () => {};
    void import('gsap').then(({ gsap }) => {
      if (disposed) return;
      const media = gsap.matchMedia();
      cleanup = () => media.revert();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const rows = element.querySelectorAll('.hover-label-row');
        const timeline = gsap.timeline({ paused: true });
        rows.forEach((row, index) => {
          timeline.to(
            row.children,
            {
              yPercent: -100,
              duration: variant === 'link' || variant === 'cta' ? 0.5 : 0.35,
              stagger: {
                amount:
                  variant === 'link'
                    ? index
                      ? 0.3
                      : 0.2
                    : variant === 'cta'
                      ? 0.6
                      : 0.5,
              },
              ease:
                variant === 'link' || variant === 'cta'
                  ? 'power2.out'
                  : variant === 'primary'
                    ? 'power4.inOut'
                    : 'power3.inOut',
            },
            0,
          );
        });
        if (variant === 'primary' || variant === 'v2') {
          timeline.to(
            control.querySelector('.hover-button-line'),
            variant === 'primary'
              ? { scaleX: 1.3, duration: 0.3, ease: 'power1.out' }
              : { width: 16, duration: 0.5, ease: 'power1.out' },
            0,
          );
          timeline.to(
            control.querySelectorAll('.hover-button-gap'),
            {
              width: 0,
              x: (index) => (index === 0 ? -20 : 20),
              duration: 0.5,
              ease: 'back.in',
            },
            0,
          );
        }
        if (variant === 'cta') {
          timeline.to(
            control.querySelectorAll('.contact-button-gap'),
            {
              width: 0,
              x: (index) => (index === 0 ? -20 : 20),
              duration: 0.5,
              ease: 'back.in',
            },
            0,
          );
        }
        const enter = () =>
          variant === 'link' ? timeline.restart() : timeline.play();
        const leave = () => {
          if (variant !== 'link' && !control.matches(':hover, :focus-within'))
            timeline.reverse();
        };
        control.addEventListener('mouseenter', enter);
        control.addEventListener('mouseleave', leave);
        control.addEventListener('focusin', enter);
        control.addEventListener('focusout', leave);
        return () => {
          control.removeEventListener('mouseenter', enter);
          control.removeEventListener('mouseleave', leave);
          control.removeEventListener('focusin', enter);
          control.removeEventListener('focusout', leave);
        };
      });
    });
    return () => {
      disposed = true;
      cleanup();
    };
  }, [variant, children]);
  return (
    <>
      {(variant === 'primary' || variant === 'v2') && (
        <>
          <span className="hover-button-line" aria-hidden="true" />
          <span className="hover-button-gaps" aria-hidden="true">
            <i className="hover-button-gap" />
            <i className="hover-button-gap" />
            <i className="hover-button-gap" />
          </span>
        </>
      )}
      <span className="tw:sr-only">{children}</span>
      <span
        ref={label}
        className={`hover-label hover-label-${variant}`}
        aria-hidden="true"
      >
        {[0, 1].map((row) => (
          <span key={row} className="hover-label-row">
            {Array.from(children).map((letter, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: Static ordered letters, rebuilt only when the label changes.
              <span className="hover-label-char" key={index}>
                {letter === ' ' ? ' ' : letter}
              </span>
            ))}
          </span>
        ))}
      </span>
    </>
  );
}
