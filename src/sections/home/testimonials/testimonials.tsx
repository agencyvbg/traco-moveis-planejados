import { TitleReveal } from '@/animations/title-reveal';
import Image from 'next/image';
import { testimonials } from '@/content/ariyana-demo';
import { demoPortraits } from '@/content/ariyana-demo.images';
import { DemoNote } from '@/components/ui/demo-note';
import './testimonials.css';
export function Testimonials() {
  return (
    <section
      className="testimonials section"
      aria-labelledby="testimonials-title"
    >
      <div className="reference-heading">
        <TitleReveal id="testimonials-title" text="O que dizem os clientes" />
        <span className="reference-badge" data-floating-badge="">
          Serviço cinco estrelas
        </span>
        <DemoNote />
      </div>
      <div className="testimonial-cards" data-slide-cards="">
        {testimonials.map((item, index) => (
          <article
            key={item.name}
            className="testimonial-card"
            data-slide-card=""
          >
            <div
              className="testimonial-stars"
              role="img"
              aria-label="5 estrelas"
            >
              ★★★★★
            </div>
            <div>
              <blockquote>{item.text}</blockquote>
              <div className="testimonial-author">
                <Image
                  src={demoPortraits[index]}
                  alt={`Retrato demonstrativo de ${item.name}`}
                  width={64}
                  height={64}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
