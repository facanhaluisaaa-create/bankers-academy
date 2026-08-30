/* eslint-disable @next/next/no-img-element */

/**
 * Reprodução do diploma físico do Investment Banking Boot Camp.
 *
 * Cada elemento vem do certificado real: a borda guilhoché, a gravura do
 * touro e do urso, as cartelas "Class No." e "250 hours", o banner do
 * título, os dois parágrafos do documento, a linha de data, o selo em
 * relevo e a assinatura JOSE SECURATO / BANKERS ACADEMY.
 *
 * Nada foi inventado — sem selos, acreditações ou claims extras.
 * É texto HTML de verdade (não imagem), então continua nítido em
 * qualquer tela, selecionável e legível por leitor de tela.
 *
 * As cores são literais de propósito: o componente não depende de
 * nenhum token do projeto e pode ser colado em qualquer codebase.
 */

const PAPER = "#f4efe1";
const PAPER_EDGE = "#e8e0cb";
const INK = "#4a4a38";
const RULE = "#8a8b6d";

export default function Certificate() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[3px] shadow-2xl"
      style={{
        containerType: "inline-size",
        aspectRatio: "1.32 / 1",
        background: `radial-gradient(120% 100% at 50% 0%, #f8f4e8 0%, ${PAPER} 55%, ${PAPER_EDGE} 100%)`,
        color: INK,
      }}
    >
      {/* Borda guilhoché */}
      <div aria-hidden="true" className="absolute inset-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 660 500"
          preserveAspectRatio="none"
          role="presentation"
        >
          <defs>
            <pattern id="ibbc-rosette" width="22" height="22" patternUnits="userSpaceOnUse">
              <g fill="none" stroke={RULE} strokeWidth="0.7">
                <circle cx="11" cy="11" r="9.5" />
                <circle cx="11" cy="11" r="6" />
                <circle cx="11" cy="11" r="2.5" />
                <path d="M11 0v22M0 11h22M3 3l16 16M19 3L3 19" strokeWidth="0.4" />
              </g>
            </pattern>
            <mask id="ibbc-band">
              <rect width="660" height="500" fill="#fff" />
              <rect x="34" y="34" width="592" height="432" fill="#000" />
            </mask>
          </defs>
          <rect width="660" height="500" fill="url(#ibbc-rosette)" mask="url(#ibbc-band)" opacity="0.75" />
          <rect x="30" y="30" width="600" height="440" fill="none" stroke={RULE} strokeWidth="2.5" />
          <rect x="36" y="36" width="588" height="428" fill="none" stroke={RULE} strokeWidth="0.8" />
          <rect x="8" y="8" width="644" height="484" fill="none" stroke={RULE} strokeWidth="1.2" />
        </svg>
      </div>

      <div className="relative flex h-full flex-col px-[7.5%] py-[6%]">
        {/* Class No. · gravura · 250 hours */}
        <div className="flex items-start justify-between gap-2">
          <Cartouche>Class No.</Cartouche>

          {/*
            A gravura foi extraída da fotografia do diploma físico e limpa
            em PNG transparente — é a marca real, não um redesenho.
          */}
          <img
            src="/images/bootcamp/certificado-gravura-touro-urso.png"
            alt="Gravura de um touro e um urso frente a frente, impressa no certificado do Investment Banking Boot Camp"
            width={764}
            height={317}
            loading="lazy"
            decoding="async"
            className="h-auto w-[36%] max-w-[240px] shrink self-start"
          />

          <Cartouche>250 hours</Cartouche>
        </div>

        {/* Banner do título */}
        <div className="relative mt-[3%]">
          <div
            className="px-4 py-[1.6%] text-center"
            style={{
              borderTop: `2px solid ${RULE}`,
              borderBottom: `2px solid ${RULE}`,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(138,139,109,0.10))",
            }}
          >
            <h3
              className="font-serif text-[clamp(0.55rem,3.8cqw,2.2rem)] font-bold uppercase leading-none tracking-[0.03em]"
              style={{ color: INK }}
            >
              Investment Banking Boot Camp
            </h3>
          </div>
        </div>

        {/* Texto do documento, literal do diploma */}
        <div className="mt-[3.5%] font-serif text-[clamp(0.34rem,2.36cqw,0.82rem)] leading-[1.55]">
          <p>
            This certifies that{" "}
            <span
              className="mx-1 inline-block w-[38%] translate-y-[-0.15em]"
              style={{ borderBottom: `1px solid ${INK}` }}
            />{" "}
            is the owner of 250 hours of Practical Investment Banking Training,
            transferable only on the books of the Corporation by the holder
            hereof, in person or by a duly authorized attorney, upon surrender
            of this Certificate properly endorsed.
          </p>
          <p className="mt-[3%]">
            In witness whereof, the said Corporation has caused this Certificate
            to be signed by its duly authorized officers and to be sealed with
            the Seal of the Corporation.
          </p>
        </div>

        {/* Data · selo · assinatura */}
        <div className="relative mt-auto flex items-end justify-between gap-4 pt-[3%]">
          <p className="font-serif text-[clamp(0.34rem,2.36cqw,0.82rem)] leading-none">
            This <Rule w="2.2em" /> day of <Rule w="6em" /> , A.D. <Rule w="3.2em" />
          </p>

          <EmbossedSeal />

          <div className="text-center">
            <div
              className="mb-1 w-[clamp(5rem,37cqw,12rem)]"
              style={{ borderBottom: `1px solid ${INK}` }}
            />
            <p className="font-serif text-[clamp(0.28rem,1.9cqw,0.66rem)] uppercase leading-tight tracking-[0.06em]">
              Jose Securato
              <br />
              Bankers Academy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Rule({ w }: { w: string }) {
  return (
    <span
      aria-hidden="true"
      className="mx-1 inline-block translate-y-[-0.15em]"
      style={{ width: w, borderBottom: `1px solid ${INK}` }}
    />
  );
}

function Cartouche({ children }: { children: string }) {
  return (
    <div
      className="shrink-0 rounded-[2px] px-[0.9em] py-[0.45em] font-serif text-[clamp(0.32rem,2.2cqw,0.78rem)] font-semibold leading-none"
      style={{ border: `1px solid ${RULE}`, background: "rgba(255,255,255,0.45)" }}
    >
      {children}
    </div>
  );
}

/** Selo corporativo em relevo, como o gravado no documento real. */
function EmbossedSeal() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="pointer-events-none absolute bottom-[-4%] left-1/2 h-auto w-[16%] max-w-[86px] -translate-x-1/2 opacity-30"
      aria-hidden="true"
    >
      <g fill="none" stroke={INK} strokeWidth="1">
        <circle cx="50" cy="50" r="34" strokeDasharray="2 2.6" />
        <circle cx="50" cy="50" r="27" strokeWidth="0.7" />
      </g>
      <g fill={INK} opacity="0.55">
        <rect x="41" y="34" width="9" height="9" transform="rotate(45 45.5 38.5)" rx="1" />
        <rect x="52" y="34" width="9" height="9" transform="rotate(45 56.5 38.5)" rx="1" />
        <rect x="41" y="45" width="9" height="9" transform="rotate(45 45.5 49.5)" rx="1" />
        <rect x="52" y="45" width="9" height="9" transform="rotate(45 56.5 49.5)" rx="1" />
      </g>
      <text x="50" y="72" textAnchor="middle" fontSize="7" fill={INK} letterSpacing="0.5">
        ACADEMY
      </text>
    </svg>
  );
}
