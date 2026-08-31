"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Player do depoimento em vídeo da seção de prova social.
 *
 * Antes da interação só o poster (uma imagem otimizada) é carregado —
 * nem um byte do .mp4 desce sem o visitante pedir. O clique no botão de
 * play troca o poster pelo <video> nativo, que aí sim começa a tocar
 * (com som: foi o visitante quem clicou). playsInline evita o
 * fullscreen automático no iOS; as legendas do depoimento são abertas,
 * embutidas na própria imagem do vídeo.
 *
 * Sem `src` ou sem `poster`, não renderiza nada — a seção que o usa
 * decide o que mostrar no lugar.
 */
export default function PlayerDepoimento({
  video,
  className = "",
}: {
  video: {
    src: string | null;
    srcWebm?: string | null;
    poster: string | null;
    nome: string | null;
    duracaoSegundos: number | null;
    ratio: string;
  };
  className?: string;
}) {
  const [tocando, setTocando] = useState(false);

  if (!video.src || !video.poster) return null;

  const rotulo = `Assistir ao depoimento em vídeo${
    video.nome ? ` de ${video.nome}` : ""
  }${video.duracaoSegundos ? ` (${video.duracaoSegundos} segundos)` : ""}`;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-ink ${video.ratio} ${className}`}
    >
      {tocando ? (
        <video
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          aria-label={
            video.nome ? `Depoimento em vídeo de ${video.nome}` : "Depoimento em vídeo"
          }
          className="absolute inset-0 h-full w-full object-cover"
        >
          {video.srcWebm ? <source src={video.srcWebm} type="video/webm" /> : null}
          <source src={video.src} type="video/mp4" />
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setTocando(true)}
          aria-label={rotulo}
          data-depoimento-video={video.src}
          data-depoimento-poster={video.poster}
          className="group absolute inset-0 block w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand"
        >
          {/* O contexto está no aria-label do botão; a imagem é o próprio botão */}
          <Image
            src={video.poster}
            alt=""
            fill
            sizes="(max-width: 1024px) 80vw, 26rem"
            className="object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105">
              <span className="ml-1 block h-0 w-0 border-y-[11px] border-l-[17px] border-y-transparent border-l-ink" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
