import { HoverLabel } from '@/components/ui/hover-label';
import Image from 'next/image';
import Link from 'next/link';
import { PrivacyPreferences } from '@/components/analytics/consent';
import { contact } from '@/config/contact';
import { developer } from '@/config/developer';
import vbgLogo from '@/assets/images/shared/vbg/logo.webp';
import { Newsletter } from './newsletter';
import { FooterReveal } from './footer-reveal';
import './footer.css';
export function Footer() {
  return (
    <FooterReveal>
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-contact">
            <h2>Contato</h2>
            <p>
              Traço Móveis Planejados
              <br />
              Espaços pensados para viver.
            </p>
            <a href={`tel:+${contact.whatsappNumber}`}>
              {contact.whatsappDisplay}
            </a>
          </div>
          <nav aria-label="Páginas principais">
            <h2>Navegue</h2>
            <Link href="/">
              <HoverLabel>Início</HoverLabel>
            </Link>
            <Link href="/sobre">
              <HoverLabel>Sobre</HoverLabel>
            </Link>
            <Link href="/servicos">
              <HoverLabel>Serviços</HoverLabel>
            </Link>
            <Link href="/contato">
              <HoverLabel>Contato</HoverLabel>
            </Link>
          </nav>
          <nav aria-label="Projetos e artigos">
            <h2>Projetos e artigos</h2>
            <Link href="/projetos">
              <HoverLabel>Projetos</HoverLabel>
            </Link>
            <Link href="/blog">
              <HoverLabel>Blog</HoverLabel>
            </Link>
            <Link href="/blog/conversa-com-a-fwa">
              <HoverLabel>Artigo</HoverLabel>
            </Link>
            <Link href="/projetos/cozinha-encontro">
              <HoverLabel>Detalhe do projeto</HoverLabel>
            </Link>
          </nav>
          <div className="footer-information">
            <h2>Informações</h2>
            <p className="footer-instagram">
              <span className="footer-instagram-icon" aria-hidden="true">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>
              Instagram da Traço
            </p>
            <p>
              Ver perfil no{' '}
              <span className="footer-google">
                <span className="tw:sr-only">Google</span>
                <span aria-hidden="true">
                  <span className="google-blue">G</span>
                  <span className="google-red">o</span>
                  <span className="google-yellow">o</span>
                  <span className="google-blue">g</span>
                  <span className="google-green">l</span>
                  <span className="google-red">e</span>
                </span>
              </span>
            </p>
            <p>Cuidados com seus móveis</p>
            <PrivacyPreferences />
          </div>
        </div>
        <Newsletter />
      </div>
      <div className="footer-bottom">
        <Link className="footer-wordmark" href="/">
          {'//TRAÇO'}
        </Link>
        <div className="footer-credits">
          <p>© {new Date().getFullYear()} Traço. Conceito demonstrativo.</p>
          <a
            href={developer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-developer"
            aria-label="Criado por VBG Agency — abrir site"
          >
            <span>Criado por</span>
            <Image src={vbgLogo} alt="VBG Agency" width={112} height={42} />
          </a>
        </div>
      </div>
    </FooterReveal>
  );
}
