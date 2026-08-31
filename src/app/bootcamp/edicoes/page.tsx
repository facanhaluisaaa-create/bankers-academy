import type { Metadata } from "next";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SubHero from "../_components/SubHero";
import { shell } from "../_components/estilos";
import { ibbcAlumni } from "../_data/alumni";
import { ibbcEditions } from "../_data/editions";
import { ibbcFacts } from "../_data/config";

const description =
  "As edições do Investment Banking Boot Camp desde 2018 — duas por ano, em janeiro e em julho, com turmas e mentores de cada edição.";

export const metadata: Metadata = {
  title: "Edições | Investment Banking Boot Camp",
  description,
  alternates: { canonical: "/bootcamp/edicoes" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Edições | Investment Banking Boot Camp",
    description,
  },
};

/**
 * A história do programa, edição a edição — os cards vieram da landing
 * intactos. Turmas, anos e mentores saem do arquivo oficial de edições;
 * fotos de turma e cases entram aqui quando a Bankers Academy os
 * fornecer. Nada é inventado.
 */
export default function EdicoesPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrowTexto={`Desde ${ibbcFacts.firstEditionYear}`}
          titulo={
            <>
              Uma história construída
              <span className="block text-white/55">edição após edição.</span>
            </>
          }
          texto="O boot camp acontece duas vezes por ano, em janeiro e em julho. Cada edição forma uma turma nova — e uma parte dela volta como mentora da seguinte."
        />

        <section aria-label="Edições do programa" className="bg-surface">
          <div className={`${shell} py-20 lg:py-28`}>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ibbcEditions.map((e) => {
                const campers = ibbcAlumni.filter((a) => a.cohort === e.cohort);
                return (
                  <li key={`${e.cohort}-${e.year}-${e.term}`}>
                    <article
                      className={`flex h-full flex-col rounded-3xl border p-6 ${
                        e.upcoming
                          ? "border-brand/50 bg-brand/10"
                          : "border-line bg-white"
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h2 className="text-xl font-semibold">IBBC {e.cohort}</h2>
                        <p className="text-sm tabular-nums text-ink/60">
                          {e.term} {e.year}
                        </p>
                      </div>

                      {e.upcoming ? (
                        <p className="mt-3 text-sm font-semibold text-brand-deep">
                          Próxima edição
                        </p>
                      ) : null}

                      {campers.length > 0 ? (
                        <p className="mt-3 text-sm text-ink/60">
                          {campers.length} {campers.length === 1 ? "camper" : "campers"}
                        </p>
                      ) : null}

                      {e.mentors && e.mentors.length > 0 ? (
                        <div className="mt-5 border-t border-line pt-4">
                          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                            Mentores
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-ink/75">
                            {e.mentors.join(" · ")}
                          </p>
                        </div>
                      ) : null}
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
