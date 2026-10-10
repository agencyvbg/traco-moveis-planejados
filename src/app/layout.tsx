import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { bebasNeue, dmSans } from '@/styles/fonts';
import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';
import { ConsentManager } from '@/components/analytics/consent';
import { siteMetadata } from '@/config/metadata';
import { AnchorNavigation } from '@/components/layout/anchor-navigation';
import { PageTransition } from '@/components/layout/page-transition/page-transition';
import { SectionEntrances } from '@/animations/section-entrances';
import '@/styles/globals.css';

export const viewport: Viewport = { themeColor: '#121212' };
export const metadata: Metadata = siteMetadata;
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>
        <PageTransition />
        <a href="#conteudo" className="skip-link tw:bg-ink">
          Pular para o conteúdo
        </a>
        <div id="inicio" />
        <Header />
        {children}
        <div
          className="reference-divider reference-divider-footer"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4].map((n) => (
            <i key={n} />
          ))}
        </div>
        <Footer />
        <AnchorNavigation />
        <SectionEntrances />
        <ConsentManager />
      </body>
    </html>
  );
}
