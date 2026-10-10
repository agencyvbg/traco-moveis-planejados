import Image from 'next/image';
import { DemoNote } from '@/components/ui/demo-note';
import { demoLogos } from '@/content/ariyana-demo.images';
import './trust.css';
export function Trust() {
  return (
    <section
      className="trust"
      id="marcas"
      aria-label="Marcas e depoimento demonstrativos"
    >
      <div className="trust-grid">
        <div className="trust-ticker" aria-hidden="true">
          <div>
            {[0, 1, 2].map((n) => (
              <span key={n}>
                Escolhido por quem inova <i>✳</i>
              </span>
            ))}
          </div>
        </div>
        <div className="trust-quote">
          <blockquote data-text-anim="">
            “Ágeis no suporte, fáceis de trabalhar e totalmente dedicados a
            lançar nosso site no prazo e dentro do orçamento.”
          </blockquote>
          <p>
            <strong>Robert Kenedy</strong>
            <br />
            Responsável por crescimento na Walton
          </p>
        </div>
        {demoLogos.map((logo, index) => (
          <div className={`trust-logo trust-logo-${index}`} key={logo.src}>
            <Image
              src={logo}
              alt={`Marca demonstrativa do Ariyana ${index + 1}`}
              width={120}
              height={100}
            />
          </div>
        ))}
      </div>
      <DemoNote />
    </section>
  );
}
