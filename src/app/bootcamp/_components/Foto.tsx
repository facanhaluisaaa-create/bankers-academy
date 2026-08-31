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

/**
 * Slot do depoimento em vídeo. Sem arquivo conectado, mostra um poster
 * reservado com o botão de play desativado e o aviso de pendência — nada
 * de caixa vazia ou erro. Com arquivo, renderiza <video> com controles
 * (sem autoplay: som só quando o visitante quiser).
 */
export function VideoDepoimento({
  video,
  className = "",
}: {
  video: {
    src: string | null;
    poster: string | null;
    nome: string | null;
    frase: string | null;
    ratio: string;
    ratioLabel: string;
  };
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-3xl ${video.ratio} ${
          video.src ? "bg-ink" : "border border-dashed border-ink/20 bg-surface-alt"
        }`}
      >
        {video.src ? (
          <video
            src={video.src}
            poster={video.poster ?? undefined}
            controls
            preload="metadata"
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #000 0 1px, transparent 1px 9px)",
              }}
            />
            <div className="relative px-5 text-center">
              <span
                aria-hidden="true"
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-ink/20 bg-white"
              >
                <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-ink/60" />
              </span>
              <p className="mt-4 inline-block rounded-full bg-brand-soft px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                Vídeo 06 · pendente
              </p>
              <p className="mt-3 text-sm font-medium leading-snug text-ink">
                Vídeo de depoimento — pendente
              </p>
              <p className="mt-1 text-xs text-ink/50">{video.ratioLabel}</p>
            </div>
          </>
        )}
      </div>
      {video.frase || video.nome ? (
        <figcaption className="mt-4">
          {video.frase ? (
            <p className="text-sm leading-6 text-ink/75">“{video.frase}”</p>
          ) : null}
          {video.nome ? (
            <p className="mt-1 text-sm font-semibold">{video.nome}</p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
