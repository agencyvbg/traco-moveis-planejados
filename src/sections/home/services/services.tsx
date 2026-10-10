import { ServiceOpeningMotion } from './service-opening-motion';
import { TitleReveal } from '@/animations/title-reveal';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { projects } from '@/content/projects';
import { DemoNote } from '@/components/ui/demo-note';
import './services.css';
const services = [
  {
    title: 'Design gráfico',
    tags: [
      'Banners',
      'Identidade de marca',
      'Ilustração',
      'Logotipos',
      'Pôsteres',
      'Embalagens',
    ],
  },
  {
    title: 'Design UI/UX',
    tags: [
      'Interface',
      'Experiência do usuário',
      'Aplicativos',
      'Sistema de design',
      'SaaS',
      'Produtos',
    ],
  },
  {
    title: 'Desenvolvimento web',
    tags: ['WordPress', 'HTML', 'Webflow', 'Framer', 'Shopify', 'Shopware'],
  },
  {
    title: 'Marketing digital',
    tags: [
      'SEO',
      'Conteúdo',
      'Redes sociais',
      'Google Ads',
      'Meta Ads',
      'Otimização',
    ],
  },
];
export function Services() {
  return (
    <section
      id="servicos"
      className="services section"
      aria-labelledby="services-title"
      tabIndex={-1}
    >
      <div className="reference-heading">
        <TitleReveal id="services-title" text="Soluções especializadas" />
        <span className="reference-badge" data-floating-badge="">
          Serviço cinco estrelas
        </span>
        <DemoNote>
          Serviços demonstrativos do Ariyana; não são a oferta comercial da
          Traço.
        </DemoNote>
      </div>
      <div className="services-list">
        {services.map((item, index) => (
          <article key={item.title} className="service-row tw:flex">
            <div className="service-copy">
              <h3 data-title-anim="">{item.title}</h3>
              <p data-text-anim="">Serviços incluídos:</p>
              <div className="service-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="service-image">
              <ResponsiveImage
                eager
                priority="auto"
                unoptimized
                {...projects[index].images.detalhe}
                alt={`${projects[index].category} — estudo conceitual`}
                sizes="(min-width:768px) 40vw,100vw"
              />
              <small>Vídeo aguardando envio</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesOpening() {
  return (
    <header className="service-page-opening">
      <ServiceOpeningMotion />
      <div className="service-opening-circle" aria-hidden="true" />
      <div
        className="service-opening-circle service-opening-circle-top"
        aria-hidden="true"
      />
      <div className="service-opening-content">
        <p className="service-opening-caption">
          <span aria-hidden="true" />
          Experiência <em>da</em> Traço
        </p>
        <h1>
          <span data-service-title-text="">Descubra a criatividade</span>
          <br />
          <span data-service-title-text="">e nossa </span>
          <span className="service-opening-photo">
            <ResponsiveImage
              {...projects[1].images.detalhe}
              alt=""
              eager
              unoptimized
              sizes="150px"
            />
          </span>{' '}
          <span data-service-title-text="">experiência</span>
        </h1>
        <a
          className="service-opening-down"
          href="#apresentacao-servicos"
          aria-label="Assistir à apresentação da Traço"
        >
          <span className="tw:sr-only">Assistir à apresentação da Traço</span>
          <svg aria-hidden="true" viewBox="0 0 20 40" width="16" height="32">
            <path d="M10 2v32m-6-7 6 7 6-7" fill="none" stroke="currentColor" />
          </svg>
        </a>
      </div>
      <span className="service-opening-triangle" aria-hidden="true" />
    </header>
  );
}
