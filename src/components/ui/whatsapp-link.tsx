import type { ReactNode } from 'react';
import { whatsappUrl } from '@/config/contact';
import { Arrow } from './arrow';
import { HoverLabel } from './hover-label';
import './whatsapp-link.css';

type Props = { children: ReactNode; context?: string; className?: string };
export function WhatsAppLink({
  children,
  context,
  className = 'text-link tw:inline-flex tw:items-center tw:gap-[22px] tw:py-[9px]',
}: Props) {
  return (
    <a
      className={`${className} whatsapp-link tw:min-h-[44px]`}
      href={whatsappUrl(context)}
      data-track-contact={context || 'projeto geral'}
      target="_blank"
      rel="noopener noreferrer"
      title="Conversar pelo WhatsApp (abre em nova aba)"
    >
      {typeof children === 'string' ? (
        <HoverLabel>{children}</HoverLabel>
      ) : (
        children
      )}
      <Arrow />
      <span className="whatsapp-link-hint tw:absolute tw:w-[1px] tw:h-[1px] tw:overflow-hidden tw:whitespace-nowrap">
        {' '}
        pelo WhatsApp (abre em nova aba)
      </span>
    </a>
  );
}
