import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { hubCards } from "@/data/quem-somos";
import { eyeLight, shell } from "./estilos";

/**
 * As quatro portas do hub.
 *
 * O card inteiro é o link, não só o texto do CTA: alvo grande, e ninguém
 * precisa mirar. O CTA continua escrito porque diz para onde vai — mas é
 * um `span`, já que um link dentro de outro link é HTML inválido.
 *
 * Cards com foto usam a imagem como fundo, sob um véu escuro. Os sem foto
 * ficam em ink chapado em vez de mostrarem espaço reservado: aqui a foto é
 * decoração, e um "foto pendente" no meio do caminho principal da página
 * atrapalharia mais do que informa.
 */
export default function HubCards() {
  return (
    <section aria-labelledby="conheca-t" className="bg-surface-alt">
      <div className={`${shell} py-24 lg:py-28`}>
        <Reveal>
          <p className={eyeLight}>Por onde começar</p>
          <h2
            id="conheca-t"
            className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl"
          >
            Conheça a Bankers Academy
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {hubCards.map((c, i) => (
            <Reveal as="li" key={c.id} delay={Math.min(i, 3) * 70} className="block">
              <Link
                href={c.href}
                className="group relative flex h-full min-h-[19rem] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-8 text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_50px_-20px_rgba(0,0,0,0.55)] active:translate-y-0 active:shadow-none sm:p-10"
              >
                {c.imagem ? (
                  <>
                    <Image
                      src={c.imagem}
                      alt=""
                      width={1536}
                      height={1024}
                      sizes="(max-width: 768px) 92vw, 46vw"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/35"
                    />
                  </>
                ) : null}

                <div className="relative">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {c.titulo}
                  </h3>
                  <p className="mt-4 max-w-md text-pretty leading-7 text-white/70">
                    {c.descricao}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-brand">
                    {c.cta}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
