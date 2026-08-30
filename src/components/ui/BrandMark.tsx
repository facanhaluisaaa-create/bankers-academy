/**
 * Símbolo da Bankers Academy.
 *
 * Reproduzido em SVG a partir do arquivo enviado pelo cliente: quatro
 * quadrantes escuros com o losango da marca centrado sobre a junção deles.
 * Como é geometria pura, o SVG é fiel, escala sem perda e usa o token da
 * marca — não há raster para manter em sincronia com a paleta.
 *
 * `variant`:
 *   "negative" — quadrantes escuros + losango lima (o arquivo enviado)
 *   "mark"     — só o losango, para uso solto sobre qualquer fundo
 */
export default function BrandMark({
  variant = "negative",
  className = "",
  title,
}: {
  variant?: "negative" | "mark";
  className?: string;
  /** Preencha só quando o símbolo carregar significado próprio na página. */
  title?: string;
}) {
  const a11y = title
    ? { role: "img" as const, "aria-label": title }
    : { "aria-hidden": true as const };

  if (variant === "mark") {
    return (
      <svg viewBox="0 0 100 100" className={className} {...a11y}>
        <rect
          x="26"
          y="26"
          width="48"
          height="48"
          rx="6"
          transform="rotate(45 50 50)"
          fill="var(--color-brand)"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" className={className} {...a11y}>
      {/* Quadrantes encostados; a distinção vem do tom, não de vão branco */}
      <g fill="var(--color-ink)">
        <rect x="0" y="0" width="50" height="50" />
        <rect x="50" y="0" width="50" height="50" opacity="0.88" />
        <rect x="0" y="50" width="50" height="50" opacity="0.88" />
        <rect x="50" y="50" width="50" height="50" />
      </g>
      {/* Losango sobre a junção */}
      <rect
        x="28"
        y="28"
        width="44"
        height="44"
        rx="5"
        transform="rotate(45 50 50)"
        fill="var(--color-brand)"
      />
    </svg>
  );
}
