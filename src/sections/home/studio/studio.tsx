import { HoverLabel } from '@/components/ui/hover-label';
import Link from 'next/link';
import Image from 'next/image';
import { DemoNote } from '@/components/ui/demo-note';
import pattern from '@/assets/images/shared/ariyana-demo/pattern.avif';
import { StudioPanels } from './studio-panels';
import { StudioTitle } from './studio-title';
import './studio.css';
export function Studio() {
  return (
    <section
      id="estudio"
      className="studio"
      aria-labelledby="studio-title"
      tabIndex={-1}
    >
      <div className="studio-intro section tw:flex">
        <div>
          <span className="studio-caption">
            <span className="studio-caption-circle" aria-hidden="true" />
            <span>
              Por dentro <i>(da)</i> Traço
            </span>
          </span>
          <StudioTitle />
          <Link href="/sobre" className="pill-link">
            <HoverLabel variant="primary">Saiba mais</HoverLabel>
          </Link>
        </div>
        <Image
          src={pattern}
          alt="Composição geométrica em branco, vermelho e laranja"
          className="studio-pattern"
        />
      </div>
      <div className="studio-demo">
        <DemoNote>
          Histórico demonstrativo do Ariyana — imagens de ambientes da Traço.
        </DemoNote>
      </div>
      <StudioPanels />
    </section>
  );
}
