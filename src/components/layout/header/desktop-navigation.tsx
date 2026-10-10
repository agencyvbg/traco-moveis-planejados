'use client';
import { usePathname } from 'next/navigation';
export function DesktopNavigation() {
  const pathname = usePathname();
  const links = [
    { href: '/sobre', label: 'Sobre' },
    { href: '/projetos', label: 'Projetos' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/contato', label: 'Contato' },
  ];
  return (
    <nav
      className="desktop-nav tw:flex tw:items-center"
      aria-label="Navegação principal"
    >
      {links.map((link) => (
        <a
          href={link.href}
          key={link.href}
          aria-current={pathname === link.href ? 'page' : undefined}
        >
          <span className="nav-link-circle" aria-hidden="true" />
          <span className="tw:sr-only">{link.label}</span>
          <span className="nav-link-label" aria-hidden="true">
            {[false, true].map((duplicate) => (
              <span key={String(duplicate)}>
                {Array.from(link.label).map((letter, index, letters) => (
                  <i
                    // biome-ignore lint/suspicious/noArrayIndexKey: Letters belong to a fixed navigation label and never reorder.
                    key={`${letter}-${index}`}
                    style={{
                      transitionDelay: `${(index / Math.max(1, letters.length - 1)) * (duplicate ? 0.3 : 0.2)}s`,
                    }}
                  >
                    {letter}
                  </i>
                ))}
              </span>
            ))}
          </span>
        </a>
      ))}
    </nav>
  );
}
