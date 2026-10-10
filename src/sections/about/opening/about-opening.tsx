import Image from 'next/image';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { projects } from '@/content/projects';
import { demoPortraits } from '@/content/ariyana-demo.images';
import { DemoNote } from '@/components/ui/demo-note';
import './about-opening.css';
export function AboutOpening() {
  return (
    <PageOpening
      id="about-title"
      caption="Por dentro (da) Traço"
      title={
        <>
          <span data-about-title-text="">
            Um estúdio criativo que dá forma{' '}
          </span>
          <span className="reference-inline-image">
            <ResponsiveImage
              {...projects[0].images.detalhe}
              alt={`${projects[0].category} — estudo conceitual`}
              sizes="150px"
            />
          </span>
          <span data-about-title-text="">
            a tudo que acontece no seu espaço.
          </span>
        </>
      }
    >
      <div className="about-review">
        <div className="about-review-avatars">
          {demoPortraits.slice(0, 3).map((image, index) => (
            <Image
              key={image.src}
              src={image}
              alt={`Retrato demonstrativo ${index + 1}`}
              width={56}
              height={56}
            />
          ))}
        </div>
        <div className="about-review-content">
          <div className="about-review-top">
            <strong>4,9</strong>
            <i aria-hidden="true">★★★★★</i>
          </div>
          <span>Avaliação dos clientes</span>
        </div>
      </div>
      <DemoNote>
        Avaliação e retratos demonstrativos da referência Ariyana.
      </DemoNote>
    </PageOpening>
  );
}
