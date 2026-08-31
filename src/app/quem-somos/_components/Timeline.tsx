import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { Marco } from "@/data/quem-somos";

/**
 * Timeline da história da escola.
 *
 * Já aceita fotografia por marco (campo `imagem` em src/data/quem-somos.ts):
 * enquanto ele estiver vazio, o marco renderiza só em texto, sem deixar
 * buraco no layout. Marcos com `destaque` ganham peso visual — usado nos
 * divisores de água, não como decoração.
 */
export default function Timeline({ marcos }: { marcos: Marco[] }) {
  return (
    <ol className="relative mt-16">
      {/* Trilho contínuo atrás dos marcadores */}
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-[7px] top-2 w-px bg-line sm:left-[calc(9rem+7px)]"
      />

      {marcos.map((m, i) => (
        <Reveal as="li" key={m.id} delay={Math.min(i, 6) * 60} className="block">
          <article className="relative flex gap-6 pb-14 last:pb-0 sm:gap-10">
            {/* Período + marcador */}
            <div className="flex shrink-0 items-start gap-6 sm:w-36 sm:justify-end sm:gap-0">
              <p className="order-2 hidden text-right text-sm font-bold tabular-nums text-brand-deep sm:order-1 sm:block">
                {m.periodo}
              </p>
              <span
                aria-hidden="true"
                className={`order-1 mt-1.5 block h-[15px] w-[15px] shrink-0 rounded-full border-2 sm:order-2 sm:ml-6 ${
                  m.destaque
                    ? "border-brand-deep bg-brand"
                    : "border-line bg-white"
                }`}
              />
            </div>

            <div className="min-w-0 flex-1 pb-2">
              <p className="text-sm font-bold tabular-nums text-brand-deep sm:hidden">
                {m.periodo}
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight sm:mt-0 sm:text-2xl">
                {m.titulo}
              </h3>

              <p className="mt-3 max-w-2xl text-pretty leading-7 text-ink/70">
                {m.texto}
              </p>

              {m.imagem ? (
                <Image
                  src={m.imagem}
                  alt={m.imagemAlt ?? ""}
                  width={800}
                  height={450}
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="mt-6 h-auto w-full max-w-lg rounded-2xl"
                />
              ) : null}

              {m.href ? (
                <Link
                  href={m.href}
                  className="group mt-3 inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-brand-deep underline decoration-brand-deep/35 decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                >
                  Conhecer o programa
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ) : null}
            </div>
          </article>
        </Reveal>
      ))}
    </ol>
  );
}
