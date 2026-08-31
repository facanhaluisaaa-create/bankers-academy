import Image from "next/image";
import type { MediaSlot } from "../_data/media";

/**
 * Renderiza um slot de mídia do registro central (_data/media.ts).
 *
 * Com `src` preenchido: next/image cobrindo a proporção reservada, com
 * object-position configurável por slot — trocar a foto é editar UMA
 * linha no registro, nunca este componente.
 *
 * Sem `src`: espaço reservado elegante na identidade da casa — fundo
 * neutro, borda discreta, etiqueta verde com o código do slot e a
 * proporção esperada. Visível de propósito: nenhum placeholder pode ir
 * ao ar despercebido, e quem for escolher a foto sabe exatamente o que
 * procurar.
 */
export default function Foto({
  slot,
  sizes,
  priority = false,
  tone = "light",
  rounded = "rounded-3xl",
  className = "",
}: {
  slot: MediaSlot;
  /** Atributo sizes do next/image — obrigatório para a foto real. */
  sizes: string;
  /** Só o hero da landing deve usar priority. */
  priority?: boolean;
  /** "dark" sobre seções de fundo ink. */
  tone?: "light" | "dark";
  rounded?: string;
  className?: string;
}) {
  if (slot.src) {
    return (
      <div className={`relative overflow-hidden ${slot.ratio} ${rounded} ${className}`}>
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: slot.position ?? "50% 50%" }}
        />
      </div>
    );
  }

  const dark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para fotografia: ${slot.pendente}`}
      className={`relative flex items-center justify-center overflow-hidden border border-dashed ${slot.ratio} ${rounded} ${className} ${
        dark ? "border-white/25 bg-white/[0.03]" : "border-ink/20 bg-surface-alt"
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${dark ? "opacity-[0.10]" : "opacity-[0.06]"}`}
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${
            dark ? "#fff" : "#000"
          } 0 1px, transparent 1px 9px)`,
        }}
      />
      <div className="relative px-5 py-4 text-center">
        <p
          className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
            dark ? "bg-brand text-ink" : "bg-brand-soft text-ink"
          }`}
        >
          {slot.slot} · foto pendente
        </p>
        <p
          className={`mt-3 text-sm font-medium leading-snug ${
            dark ? "text-white/85" : "text-ink"
          }`}
        >
          {slot.pendente}
        </p>
        <p className={`mt-1 text-xs ${dark ? "text-white/50" : "text-ink/50"}`}>
          {slot.ratioLabel}
        </p>
      </div>
    </div>
  );
}

/* O slot do depoimento em vídeo virou componente próprio —
   PlayerDepoimento.tsx (client): poster primeiro, vídeo só após o
   clique no play. */
