import Link from "next/link";
import { rotas } from "@/data/quem-somos";
import { eyeBrand, shell } from "./estilos";

/**
 * Abertura das páginas internas do hub Quem Somos.
 *
 * Repete o verde da marca do hub para as quatro páginas lerem como o mesmo
 * lugar, e carrega o caminho de volta. O link de volta fica acima do
 * título, não no rodapé: quem entra por busca precisa saber onde está
 * antes de rolar.
 */
export default function SubHero({
  eyebrow,
  titulo,
  texto,
  children,
}: {
  eyebrow: string;
  titulo: string;
  texto?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-brand text-ink">
      <div className={`${shell} pb-16 pt-10 lg:pb-20 lg:pt-14`}>
        <nav aria-label="Você está em">
          <Link
            href={rotas.hub}
            className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-ink/70 underline decoration-ink/25 decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
          >
            <span aria-hidden="true">←</span> Quem somos
          </Link>
        </nav>

        <p className={`${eyeBrand} mt-8`}>{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-balance text-[2.4rem] font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
          {titulo}
        </h1>
        {texto ? (
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-ink/80 sm:text-xl">
            {texto}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
