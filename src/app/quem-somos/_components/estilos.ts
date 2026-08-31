/**
 * Classes compartilhadas pelas páginas do hub Quem Somos.
 *
 * Estavam duplicadas no topo de cada página. Com cinco páginas irmãs, um
 * ajuste de botão teria de ser repetido cinco vezes — e é assim que uma
 * delas fica para trás.
 */

export const shell = "mx-auto max-w-7xl px-6 lg:px-8";

/** Sobrelinha (eyebrow) conforme o fundo da seção. */
export const eyeDark = "text-sm font-semibold uppercase tracking-[0.3em] text-brand";
export const eyeLight =
  "text-sm font-semibold uppercase tracking-[0.3em] text-brand-deep";
/* Sobre o verde da marca o texto é ink — o verde é claro demais para branco. */
export const eyeBrand = "text-sm font-semibold uppercase tracking-[0.3em] text-ink/70";

/**
 * Botões.
 *
 * O hover era `opacity-90`: sobre o verde da marca isso deixava o botão
 * esverdeado em vez de reagir ao ponteiro, e não havia resposta nenhuma ao
 * clique. Agora sobe com sombra no hover e afunda no clique.
 */
const btnBase =
  "inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] transition-all duration-200 active:translate-y-0 active:shadow-none";

export const btnSolid = `${btnBase} bg-ink text-white hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.6)]`;
export const btnOutline = `${btnBase} border border-ink/30 text-ink hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.4)]`;
/** Variante para seções de fundo escuro. */
export const btnSolidDark = `${btnBase} bg-brand text-ink hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(196,239,124,0.45)]`;

/**
 * Linha inteira clicável (lista do ecossistema).
 *
 * Antes o único sinal era `hover:bg-white` sobre uma seção quase branca —
 * invisível, e nada indicava que a linha era clicável antes de passar o
 * mouse. Agora a seta fica sempre visível, o título ganha sublinhado no
 * hover e a linha inteira vira branca. Sem deslocar texto: mover a linha
 * no hover fica inquieto quando são seis seguidas.
 */
export const linhaClicavel =
  "group block transition-colors duration-200 hover:bg-white active:bg-line/40";
