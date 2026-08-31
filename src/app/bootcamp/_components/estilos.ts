/**
 * Classes compartilhadas pelas páginas do Investment Banking Boot Camp.
 *
 * Com sete páginas irmãs (/bootcamp + seis internas), estas classes
 * moram num lugar só — um ajuste de botão repetido sete vezes é como
 * uma página fica para trás.
 */

export const shell = "mx-auto max-w-7xl px-6 lg:px-8";

const eyebrowBase = "text-sm font-semibold uppercase tracking-[0.3em]";
/* O verde da marca é claro: legível sobre o ink, ilegível sobre branco —
   em seção clara usa-se a variante escurecida de mesmo matiz (AA). */
export const eyebrow = `${eyebrowBase} text-brand`; // seções escuras
export const eyebrowLight = `${eyebrowBase} text-brand-deep`; // seções claras

/** CTA primário de participação (WhatsApp) — o botão verde do programa. */
export const btnApply =
  "inline-flex rounded-full bg-brand-soft px-7 py-4 font-semibold text-ink transition hover:brightness-95";

/** Secundário sobre fundo escuro. */
export const btnGhostDark =
  "inline-flex rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-brand hover:text-brand";

/**
 * CTA de navegação interna — o link que leva às páginas do hub.
 * Texto forte + seta que desliza; alvo alto para toque.
 */
export const ctaSetaLight =
  "group inline-flex items-center gap-2 py-2 text-sm font-bold uppercase tracking-[0.08em] text-brand-deep underline decoration-brand-deep/35 decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink";
export const ctaSetaDark =
  "group inline-flex items-center gap-2 py-2 text-sm font-bold uppercase tracking-[0.08em] text-brand underline decoration-brand/40 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-white";

/** A seta dos CTAs acima — sempre com aria-hidden no uso. */
export const setaClasse =
  "inline-block transition-transform duration-200 group-hover:translate-x-1";
