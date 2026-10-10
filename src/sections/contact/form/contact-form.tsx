'use client';
import { HoverLabel } from '@/components/ui/hover-label';

import { useState, type FormEvent, type KeyboardEvent } from 'react';
import { contactFormUrl } from '@/config/contact';
import './contact-form.css';
export function ContactForm() {
  const [tab, setTab] = useState<'hello' | 'quote'>('hello');
  const [draftUrl, setDraftUrl] = useState('');
  function switchTab(event: KeyboardEvent<HTMLButtonElement>) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === 'Home'
        ? 'hello'
        : event.key === 'End'
          ? 'quote'
          : tab === 'hello'
            ? 'quote'
            : 'hello';
    setTab(next);
    setDraftUrl('');
    event.currentTarget.parentElement
      ?.querySelector<HTMLButtonElement>(`#tab-${next}`)
      ?.focus();
  }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = contactFormUrl(new FormData(e.currentTarget), tab);
    setDraftUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return (
    <section
      className="contact-form-section section"
      aria-label="Formulário de contato"
    >
      <div
        className="contact-form-tabs"
        role="tablist"
        aria-label="Tipo de contato"
      >
        <button
          id="tab-hello"
          tabIndex={tab === 'hello' ? 0 : -1}
          onKeyDown={switchTab}
          role="tab"
          aria-selected={tab === 'hello'}
          aria-controls="contact-panel"
          type="button"
          onClick={() => {
            setTab('hello');
            setDraftUrl('');
          }}
        >
          Diga olá
        </button>
        <button
          id="tab-quote"
          tabIndex={tab === 'quote' ? 0 : -1}
          onKeyDown={switchTab}
          role="tab"
          aria-selected={tab === 'quote'}
          aria-controls="contact-panel"
          type="button"
          onClick={() => {
            setTab('quote');
            setDraftUrl('');
          }}
        >
          Peça um orçamento
        </button>
      </div>
      <div id="contact-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        <form onSubmit={submit} onChange={() => setDraftUrl('')}>
          <div className="contact-form-grid">
            <label>
              Nome*
              <input
                name="name"
                autoComplete="name"
                placeholder="Seu nome"
                required
              />
            </label>
            <label>
              E-mail*
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Seu e-mail"
                required
              />
            </label>
            <label>
              Telefone
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Seu telefone"
              />
            </label>
            <label>
              Empresa
              <input
                name="company"
                autoComplete="organization"
                placeholder="Nome da empresa"
              />
            </label>
            {tab === 'quote' && (
              <>
                <label>
                  Tipo de projeto
                  <span className="contact-select">
                    <select name="project">
                      <option>Móveis planejados</option>
                      <option>Cozinha</option>
                      <option>Quarto</option>
                      <option>Sala</option>
                    </select>
                    <span aria-hidden="true" className="contact-select-arrow" />
                  </span>
                </label>
                <label>
                  Orçamento
                  <span className="contact-select">
                    <select name="budget">
                      <option>A definir</option>
                      <option>Até R$ 10 mil</option>
                      <option>De R$ 10 a 30 mil</option>
                      <option>Acima de R$ 30 mil</option>
                    </select>
                    <span aria-hidden="true" className="contact-select-arrow" />
                  </span>
                </label>
              </>
            )}
            <label className="contact-message">
              Mensagem*
              <textarea name="message" placeholder="Conte sua ideia" required />
            </label>
          </div>
          <div className="contact-form-submit">
            <small className="demo-note">
              Abra o WhatsApp com seus dados e confirme o envio da mensagem.
            </small>
            <button type="submit" className="pill-link">
              <HoverLabel variant="v2">Continuar no WhatsApp</HoverLabel>
            </button>
          </div>
          {draftUrl && (
            <p className="contact-form-status" role="status">
              Sua mensagem está pronta.{' '}
              <a href={draftUrl} target="_blank" rel="noopener noreferrer">
                Abrir no WhatsApp ↗
              </a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
