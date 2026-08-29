import Image from "next/image";

/**
 * An elegant in-page rendition of the real IBBC diploma.
 *
 * Every element below is reproduced from the physical certificate
 * photographed in the asset pack: the guilloché border, the bull-and-bear
 * engraving, the "Class No." and "250 hours" cartouches, the title
 * banner, the two paragraphs of body copy, the dateline, the embossed
 * seal and the JOSE SECURATO / BANKERS ACADEMY signature block.
 *
 * Nothing is invented — no extra seals, accreditations or claims.
 * Rendered as HTML text (not an image) so it stays crisp, selectable,
 * translatable and readable by assistive technology.
 */
export default function CertificateArtwork() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[3px] shadow-2xl shadow-black/40"
      style={{
        aspectRatio: "1.32 / 1",
        background:
          "radial-gradient(120% 100% at 50% 0%, #f8f4e8 0%, var(--color-cert-paper) 55%, var(--color-cert-paper-edge) 100%)",
      }}
    >
      {/* Guilloché border, drawn as a repeating rosette band */}
      <div aria-hidden="true" className="absolute inset-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 660 500"
          preserveAspectRatio="none"
          role="presentation"
        >
          <defs>
            <pattern
              id="ibbc-rosette"
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <g fill="none" stroke="var(--color-cert-rule)" strokeWidth="0.7">
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
          <rect x="30" y="30" width="600" height="440" fill="none" stroke="var(--color-cert-rule)" strokeWidth="2.5" />
          <rect x="36" y="36" width="588" height="428" fill="none" stroke="var(--color-cert-rule)" strokeWidth="0.8" />
          <rect x="8" y="8" width="644" height="484" fill="none" stroke="var(--color-cert-rule)" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col px-[7.5%] py-[6%] text-cert-ink">
        {/* Top row: Class No. · engraving · 250 hours */}
        <div className="flex items-start justify-between gap-2">
          <Cartouche>Class No.</Cartouche>

          <BullAndBear />

          <Cartouche>250 hours</Cartouche>
        </div>

        {/* Title banner */}
        <div className="relative mt-[3%]">
          <div
            className="border-y-2 px-4 py-[1.6%] text-center"
            style={{
              borderColor: "var(--color-cert-rule)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(138,139,109,0.10))",
            }}
          >
            <h3
              className="font-serif text-[clamp(0.72rem,2.35vw,1.55rem)] font-bold uppercase leading-none tracking-[0.03em]"
              style={{ color: "var(--color-cert-ink)" }}
            >
              Investment Banking Boot Camp
            </h3>
          </div>
        </div>

        {/* Body copy — verbatim from the physical certificate */}
        <div className="mt-[3.5%] font-serif text-[clamp(0.4rem,1.08vw,0.76rem)] leading-[1.55]">
          <p>
            This certifies that{" "}
            <span
              className="mx-1 inline-block w-[38%] translate-y-[-0.15em] border-b"
              style={{ borderColor: "var(--color-cert-ink)" }}
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

        {/* Dateline · seal · signature */}
        <div className="relative mt-auto flex items-end justify-between gap-4 pt-[3%]">
          <p className="font-serif text-[clamp(0.4rem,1.08vw,0.76rem)] leading-none">
            This <Rule w="2.2em" /> day of <Rule w="6em" /> , A.D. <Rule w="3.2em" />
          </p>

          <EmbossedSeal />

          <div className="text-center">
            <div
              className="mb-1 w-[clamp(6rem,17vw,11rem)] border-b"
              style={{ borderColor: "var(--color-cert-ink)" }}
            />
            <p className="font-serif text-[clamp(0.34rem,0.86vw,0.6rem)] uppercase leading-tight tracking-[0.06em]">
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
      className="mx-1 inline-block translate-y-[-0.15em] border-b"
      style={{ width: w, borderColor: "var(--color-cert-ink)" }}
    />
  );
}

function Cartouche({ children }: { children: string }) {
  return (
    <div
      className="shrink-0 rounded-[2px] border px-[0.9em] py-[0.45em] font-serif text-[clamp(0.38rem,1vw,0.72rem)] font-semibold leading-none"
      style={{
        borderColor: "var(--color-cert-rule)",
        background: "rgba(255,255,255,0.45)",
      }}
    >
      {children}
    </div>
  );
}

/**
 * The bull-and-bear engraving, extracted directly from a photograph of
 * the physical diploma and cleaned to a transparent PNG — so the mark on
 * the page is the real one, not a redrawing of it.
 */
function BullAndBear() {
  return (
    <Image
      src="/images/bootcamp/certificado-gravura-touro-urso.png"
      alt="Gravura de um touro e um urso frente a frente, impressa no certificado do Investment Banking Boot Camp"
      width={764}
      height={317}
      sizes="(max-width: 1024px) 36vw, 240px"
      className="h-auto w-[36%] max-w-[240px] shrink self-start"
    />
  );
}

/** Blind-embossed corporate seal, as pressed on the real document. */
function EmbossedSeal() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="pointer-events-none absolute bottom-[-4%] left-1/2 h-auto w-[16%] max-w-[86px] -translate-x-1/2 opacity-[0.30]"
      aria-hidden="true"
    >
      <g fill="none" stroke="var(--color-cert-ink)" strokeWidth="1">
        <circle cx="50" cy="50" r="34" strokeDasharray="2 2.6" />
        <circle cx="50" cy="50" r="27" strokeWidth="0.7" />
      </g>
      {/* brand mark: four diamonds in an X */}
      <g fill="var(--color-cert-ink)" opacity="0.55">
        <rect x="41" y="34" width="9" height="9" transform="rotate(45 45.5 38.5)" rx="1" />
        <rect x="52" y="34" width="9" height="9" transform="rotate(45 56.5 38.5)" rx="1" />
        <rect x="41" y="45" width="9" height="9" transform="rotate(45 45.5 49.5)" rx="1" />
        <rect x="52" y="45" width="9" height="9" transform="rotate(45 56.5 49.5)" rx="1" />
      </g>
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fontSize="7"
        fill="var(--color-cert-ink)"
        fontFamily="var(--font-serif)"
        letterSpacing="0.5"
      >
        ACADEMY
      </text>
    </svg>
  );
}
