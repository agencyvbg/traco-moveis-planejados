'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { contact } from '@/config/contact';
import './floating-contact.css';

export function FloatingContact() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = document.querySelector('.hero');
      const pastOpening = hero
        ? hero.getBoundingClientRect().bottom <= 0
        : window.scrollY > 400;
      const nearContact = Array.from(
        document.querySelectorAll('#contato, .site-footer'),
      ).some((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight + 32 && rect.bottom > -32;
      });
      setVisible(pastOpening && !nearContact && pathname !== '/contato');
      setShowTop(nearContact && window.scrollY > 400);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    setVisible(false);
    setShowTop(false);
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [pathname]);
  const message =
    'Olá! Gostaria de solicitar um orçamento para móveis planejados.';
  return (
    <>
      <a
        className="floating-contact"
        data-visible={visible}
        tabIndex={visible ? 0 : -1}
        href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp (abre em nova aba)"
        data-track-contact="orçamento flutuante"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12.05 0C5.46 0 .1 5.35 .1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.26-1.64a11.95 11.95 0 0 0 5.78 1.47h.01C18.64 23.83 24 18.48 24 11.9a11.87 11.87 0 0 0-3.48-8.42ZM12.05 21.82a9.9 9.9 0 0 1-5.06-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.48 4.46-9.94 9.94-9.94a9.87 9.87 0 0 1 7.04 2.91 9.87 9.87 0 0 1 2.91 7.04c0 5.48-4.46 9.87-9.99 9.87Zm5.45-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
        <span className="tw:sr-only">Solicitar orçamento pelo WhatsApp</span>
      </a>
      <BackToTop visible={showTop} />
    </>
  );
}

function BackToTop({ visible }: { visible: boolean }) {
  return (
    <button
      className="floating-top"
      data-visible={visible}
      tabIndex={visible ? 0 : -1}
      aria-label="Voltar ao topo"
      type="button"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
            .matches
            ? 'instant'
            : 'smooth',
        });
        document
          .querySelector<HTMLElement>('#conteudo')
          ?.focus({ preventScroll: true });
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="m6 12 6-6 6 6M12 6v13" />
      </svg>
    </button>
  );
}
