"use client";

import { useEffect, useId, useRef, useState } from "react";
import Certificate from "./Certificate";

/**
 * Prévia interativa do diploma do IBBC.
 *
 * O visitante clica no lugar do nome e vê como o certificado ficaria com o
 * nome dele. É recurso de marketing, não emissão: o nome existe apenas no
 * estado deste componente, em memória, durante a visita.
 *
 * Deliberadamente ausente: requisição de rede, armazenamento (nem
 * localStorage), e-mail, número de certificado, geração de PDF.
 */

const MAX_NAME = 48;

export default function InteractiveCertificate() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  /** Muda a cada confirmação para reiniciar a animação de troca. */
  const [swap, setSwap] = useState(0);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const hintId = useId();

  // Abre o painel já com o nome atual e o foco no campo
  function openPanel() {
    setDraft(name);
    setOpen(true);
  }

  function closePanel() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function confirm() {
    const clean = draft.replace(/\s+/g, " ").trim().slice(0, MAX_NAME);
    setName(clean);
    setSwap((n) => n + 1);
    setOpen(false);
    triggerRef.current?.focus();
  }

  // Foco inicial, Escape e ciclo de foco preso ao painel
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.select(), 20);

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        closePanel();
        return;
      }
      if (e.key !== "Tab") return;
      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, input, [href], [tabindex]:not([tabindex="-1"])',
      );
      if (!nodes || nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const filled = name.length > 0;

  return (
    <div className="relative">
      <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:overflow-visible sm:px-0">
        <div className="min-w-[560px] sm:min-w-0">
          <Certificate
        nameSlot={
          <button
            ref={triggerRef}
            type="button"
            onClick={openPanel}
            aria-describedby={hintId}
            className="cert-name-btn mx-1 -my-[0.35em] inline-block max-w-[62%] translate-y-[-0.15em] cursor-pointer rounded-[2px] px-[0.4em] py-[0.35em] text-left align-baseline"
          >
            <span
              key={swap}
              className={`cert-name block truncate font-serif leading-none ${
                filled ? "cert-name--filled cert-name--swap" : ""
              }`}
            >
              {filled ? name : "SEU NOME AQUI"}
            </span>
            </button>
          }
          />
        </div>
      </div>

      {/* Só aparece enquanto o certificado precisa rolar */}
      <p className="mt-3 text-center text-[11px] text-white/45 sm:hidden">
        Arraste o certificado para o lado para vê-lo inteiro
      </p>

      {/* Dica discreta, ligada ao botão por aria-describedby */}
      <p id={hintId} className="mt-4 text-center">
        <button
          type="button"
          onClick={openPanel}
          className="inline-block px-3 py-2 text-xs text-white/60 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
        >
          {filled ? "Trocar o nome" : "Clique para personalizar"}
        </button>
      </p>

      {/* Painel */}
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closePanel();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="cert-panel w-full max-w-md rounded-2xl bg-white p-7 text-ink shadow-2xl"
          >
            <h3 id={titleId} className="text-lg font-bold tracking-tight">
              Como seu nome apareceria no certificado?
            </h3>

            <label
              htmlFor="ibbc-nome"
              className="mt-6 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/60"
            >
              Nome completo
            </label>
            <input
              ref={inputRef}
              id="ibbc-nome"
              type="text"
              value={draft}
              maxLength={MAX_NAME}
              autoComplete="off"
              spellCheck={false}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  confirm();
                }
              }}
              placeholder="Luísa Façanha"
              className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base outline-none transition-colors placeholder:text-ink/35 focus:border-ink"
            />

            <div className="mt-6 flex flex-col gap-2 sm:flex-row-reverse">
              <button
                type="button"
                onClick={confirm}
                disabled={draft.trim().length === 0}
                className="rounded-full bg-brand-soft px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Visualizar no certificado
              </button>
              <button
                type="button"
                onClick={closePanel}
                className="rounded-full px-6 py-3 text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
              >
                Cancelar
              </button>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-ink/55">
              O nome fica só no seu navegador, enquanto você estiver nesta
              página. Nada é enviado ou guardado.
            </p>
          </div>
        </div>
      ) : null}

    </div>
  );
}
