import Link from "next/link";
import { eyebrow, shell } from "./estilos";

/**
 * Abertura das páginas internas do Boot Camp.
 *
 * Mantém o fundo ink do hero principal para as seis páginas lerem como o
 * mesmo lugar, e carrega a volta para /bootcamp acima do título — quem
 * entra por busca precisa saber onde está antes de rolar. Rota real,
 * mesma aba; nada de âncora.
 */
export default function SubHero({
  eyebrowTexto,
  titulo,
  texto,
  children,
}: {
  eyebrowTexto: string;
  titulo: React.ReactNode;
  texto?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="on-dark bg-ink text-white">
      <div className={`${shell} pb-16 pt-10 lg:pb-20 lg:pt-14`}>
        <nav aria-label="Você está em">
          <Link
            href="/bootcamp"
            className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-white/60 underline decoration-white/25 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            <span aria-hidden="true">←</span> Voltar para o Bootcamp
          </Link>
        </nav>

        <p className={`${eyebrow} mt-8`}>{eyebrowTexto}</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
          {titulo}
        </h1>
        {texto ? (
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/70 sm:text-xl">
            {texto}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
