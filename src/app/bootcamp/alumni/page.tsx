import type { Metadata } from "next";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SubHero from "../_components/SubHero";
import AlumniBrowser from "../_components/AlumniBrowser";
import { eyebrowLight, shell } from "../_components/estilos";
import { ibbcAlumni } from "../_data/alumni";
import { ibbcFacts } from "../_data/config";
import { publishableTestimonials } from "../_data/testimonials";

const description =
  "Os campers que já viveram o Investment Banking Boot Camp desde 2018 — cada um responsável por cobrir um setor durante a sua edição.";

export const metadata: Metadata = {
  title: "Alumni | Investment Banking Boot Camp",
  description,
  alternates: { canonical: "/bootcamp/alumni" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Alumni | Investment Banking Boot Camp",
    description,
  },
};

/**
 * A comunidade completa, com filtro por ano — o AlumniBrowser veio da
 * landing intacto. Os cards mostram somente o que o arquivo oficial de
 * edições confirma: nome, turma, ano e retorno como mentor quando houve.
 * Setor coberto, cargo atual e LinkedIn entram pelos mesmos dados quando
 * a Bankers Academy os confirmar — nada é inferido aqui.
 */
export default function AlumniPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrowTexto="Alumni"
          titulo={
            <>
              Quem já passou
              <span className="block text-white/55">por aqui.</span>
            </>
          }
          texto={`${ibbcAlumni.length} campers já viveram o Investment Banking Boot Camp desde ${ibbcFacts.firstEditionYear} — cada um responsável por cobrir um setor durante a sua edição. Vários voltaram depois como mentores de turmas seguintes.`}
        />

        <section aria-label="Comunidade de alumni" className="bg-surface">
          <div className={`${shell} pb-24 pt-4 lg:pb-28`}>
            <AlumniBrowser />
          </div>
        </section>

        {/* DEPOIMENTOS COMPLETOS — a landing mostra o vídeo e frases
            curtas; aqui vive o texto integral dos cinco posts do IBBC,
            cada um com o permalink público verificado. Só depoimentos do
            Investment Banking Boot Camp — os demais programas têm os
            seus próprios arquivos e não entram nesta página. */}
        {publishableTestimonials.length > 0 ? (
          <section
            aria-labelledby="depo-alumni-t"
            className="border-t border-line bg-surface-alt"
          >
            <div className={`${shell} py-20 lg:py-24`}>
              <p className={eyebrowLight}>Depoimentos</p>
              <h2 id="depo-alumni-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
                Nas palavras de quem viveu.
              </h2>

              <ul className="mt-12 grid content-start gap-5 md:grid-cols-2">
                {publishableTestimonials.map((t) => (
                  <li key={t.id}>
                    <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                      {t.quote ? (
                        <blockquote className="flex-1 leading-7 text-ink/80">
                          <p>“{t.quote}”</p>
                        </blockquote>
                      ) : (
                        /* Card só com link: o post existe mas o LinkedIn não
                           expõe o texto publicamente — nada de inventar fala. */
                        <p className="flex-1 leading-7 text-ink/60">
                          Depoimento publicado no LinkedIn.
                        </p>
                      )}
                      <figcaption className="mt-6 border-t border-line pt-5">
                        <p className="font-semibold">{t.name}</p>
                        {t.role || t.edition ? (
                          <p className="mt-1 text-sm text-brand-deep">
                            {[t.role, t.edition].filter(Boolean).join(" · ")}
                          </p>
                        ) : null}
                        {t.linkedin && t.linkVerified ? (
                          <a
                            href={t.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1 py-1 text-sm font-semibold text-brand-deep underline decoration-brand-deep/35 decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                          >
                            Ver publicação ↗
                            <span className="sr-only">
                              {" "}
                              de {t.name} no LinkedIn (abre em nova aba)
                            </span>
                          </a>
                        ) : null}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </main>

      <Footer />
    </>
  );
}
