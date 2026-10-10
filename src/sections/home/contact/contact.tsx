import { HoverLabel } from '@/components/ui/hover-label';
import Link from 'next/link';
import './contact.css';
export function Contact() {
  return (
    <section
      id="contato"
      className="contact"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <h2 id="contact-title" className="contact-accessible">
        Vamos criar juntos
      </h2>
      {[false, true].map((stroke) => (
        <div
          className="contact-marquee"
          data-stroke={stroke}
          aria-hidden="true"
          key={String(stroke)}
        >
          <div>
            {[0, 1].map((n) => (
              <span key={n}>Vamos nos conectar e trabalhar juntos</span>
            ))}
          </div>
        </div>
      ))}
      <Link href="/contato" className="contact-button">
        <span className="contact-button-gaps" aria-hidden="true">
          <span className="contact-button-gap" />
          <span className="contact-button-gap" />
          <span className="contact-button-gap" />
        </span>
        <span className="contact-button-text">
          <HoverLabel variant="cta">Vamos conversar</HoverLabel>
        </span>
        <span className="contact-button-icon" aria-hidden="true">
          →
        </span>
      </Link>
    </section>
  );
}
