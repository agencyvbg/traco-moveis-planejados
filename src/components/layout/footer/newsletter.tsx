'use client';
import { useState, type FormEvent } from 'react';
import { HoverLabel } from '@/components/ui/hover-label';
export function Newsletter() {
  const [complete, setComplete] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setComplete(true);
  }
  return (
    <div className="footer-newsletter">
      <h2>Receba novidades</h2>
      <form onSubmit={submit}>
        <label className="tw:sr-only" htmlFor="newsletter-email">
          E-mail
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Seu e-mail"
          required
        />
        <button type="submit">
          <HoverLabel>Inscrever-se</HoverLabel>
        </button>
      </form>
      <small className="demo-note">
        Formulário demonstrativo; não envia seus dados.
      </small>
      {complete && <p role="status">Inscrição de demonstração validada.</p>}
    </div>
  );
}
