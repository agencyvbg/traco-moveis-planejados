import type { Metadata } from 'next';
import { AboutOpening } from '@/sections/about/opening/about-opening';
import {
  AboutMotion,
  AboutStats,
  WhyChoose,
  AboutTeam,
  AboutAwards,
  AboutLife,
} from '@/sections/about/details/about-details';
import { Trust } from '@/sections/home/trust/trust';
import { Leaders } from '@/sections/home/leaders/leaders';
import { Contact } from '@/sections/home/contact/contact';
import { siteMetadata } from '@/config/metadata';

export const metadata: Metadata = {
  title: 'Sobre a Traço',
  description:
    'Madeira, luz e proporção. Conheça o olhar da Traço para os móveis planejados e os espaços de viver.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    ...siteMetadata.openGraph,
    title: 'Sobre a Traço',
    description:
      'Madeira, luz e proporção. Conheça o olhar da Traço para os espaços de viver.',
    url: '/sobre',
  },
  twitter: {
    ...siteMetadata.twitter,
    title: 'Sobre a Traço',
    description:
      'Madeira, luz e proporção. Conheça o olhar da Traço para os espaços de viver.',
  },
};

export default function AboutPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper about-page"
      tabIndex={-1}
    >
      <AboutMotion />
      <AboutOpening />
      <AboutStats />
      <WhyChoose />
      <AboutTeam />
      <Trust />
      <Leaders />
      <AboutAwards />
      <div
        className="reference-divider reference-divider-awards"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((n) => (
          <i key={n} />
        ))}
      </div>
      <AboutLife />
      <Contact />
    </main>
  );
}
