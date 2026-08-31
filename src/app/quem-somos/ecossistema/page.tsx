import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/ui/Reveal";
import SubHero from "../_components/SubHero";
import { btnSolid, linhaClicavel, shell } from "../_components/estilos";

import { iniciativas, links, outrasIniciativas, parceiros } from "@/data/quem-somos";

const description =
  "Boot Camp, Modelagem Financeira, Investment Banking, Masterclass M&A, Crédito & DCM e os programas de inclusão da Bankers Academy.";

export const metadata: Metadata = {
  title: "Ecossistema | Bankers Academy",
  description,
  alternates: { canonical: "/quem-somos/ecossistema" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Ecossistema | Bankers Academy",
    description,
  },
};

/**
 * As portas de entrada da escola — a seção "Ecossistema" do /quem-somos
 * antigo, em página própria.
 *
 * Esta página existe porque não há uma página "Programas" para apontar:
 * nem neste projeto nem no site no ar (o menu de lá leva direto a
 * /modelagemfinanceira, /investmentbanking, /masterclass e /credito-dcm).
 * Nada é duplicado: cada iniciativa daqui continua levando à página
 * própria dela no site.
 */
export default function EcossistemaPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrow="Ecossistema"
          titulo="Muitas portas. Um mesmo objetivo."
          texto="Entrar no mercado mais preparado — escolha por onde começar."
        />

        <section aria-label="Iniciativas" className="bg-surface-alt">
          <div className={`${shell} py-20 lg:py-28`}>
            <ul className="divide-y divide-line border-y border-line">
              {iniciativas.map((it, i) => {
                const conteudo = (
                  <div className="grid items-baseline gap-3 px-4 py-8 md:grid-cols-12 md:gap-10">
                    <h2
                      className={`font-semibold tracking-tight underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors duration-200 group-hover:decoration-ink md:col-span-5 ${
                        it.destaque ? "text-2xl sm:text-3xl" : "text-xl"
                      }`}
                    >
                      {it.nome}
                      {it.destaque ? (
                        <span className="ml-3 inline-block translate-y-[-0.15em] rounded-full bg-brand px-3 py-1 align-middle text-[11px] font-bold uppercase tracking-[0.08em] text-ink">
                          Desde 2018
                        </span>
                      ) : null}
                    </h2>
                    <p className="text-pretty leading-7 text-ink/70 md:col-span-6">
                      {it.descricao}
                    </p>
                    {it.href ? (
                      <span
                        aria-hidden="true"
                        className="inline-block text-base font-bold text-brand-deep transition-transform duration-200 group-hover:translate-x-1 md:col-span-1 md:text-right"
                      >
                        {it.externo ? "↗" : "→"}
                      </span>
                    ) : null}
                  </div>
                );

                return (
                  <Reveal as="li" key={it.id} delay={Math.min(i, 5) * 40} className="block">
                    {it.href ? (
                      it.externo ? (
                        <a
                          href={it.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linhaClicavel}
                        >
                          {conteudo}
                        </a>
                      ) : (
                        <Link href={it.href} className={linhaClicavel}>
                          {conteudo}
                        </Link>
                      )
                    ) : (
                      conteudo
                    )}
                  </Reveal>
                );
              })}
            </ul>

            <Reveal>
              <div className="mt-14 grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
                    Outras iniciativas
                  </h2>
                  <p className="mt-4 text-pretty leading-7 text-ink/75">
                    {outrasIniciativas.join(" · ")}
                  </p>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
                    Parceiros
                  </h2>
                  <p className="mt-4 text-pretty leading-7 text-ink/75">
                    {parceiros.join(" · ")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Próxima porta */}
        <section aria-labelledby="eco-cta-t" className="bg-brand text-ink">
          <div className={`${shell} py-20 text-center lg:py-24`}>
            <Reveal>
              <h2
                id="eco-cta-t"
                className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
              >
                A porta mais antiga é o Boot Camp.
              </h2>
              <div className="mt-8">
                <Link href={links.bootcamp} className={btnSolid}>
                  Conheça o Boot Camp
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
