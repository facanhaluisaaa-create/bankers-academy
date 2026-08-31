import type { Metadata } from "next";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SubHero from "../_components/SubHero";
import Foto from "../_components/Foto";
import { jornadaMedia } from "../_data/media";
import { btnApply, eyebrowLight, shell } from "../_components/estilos";
import { ibbcJourney } from "../_data/journey";
import { ibbcOutcomes } from "../_data/outcomes";
import { ibbcFacts, ibbcLinks } from "../_data/config";

const description =
  "A jornada do camper no Investment Banking Boot Camp: do Pre-Work de nivelamento à apresentação do Pitchbook final, em 5 semanas e 9 etapas com entregas diárias.";

export const metadata: Metadata = {
  title: "A Jornada | Investment Banking Boot Camp",
  description,
  alternates: { canonical: "/bootcamp/jornada" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "A Jornada | Investment Banking Boot Camp",
    description,
  },
};

/**
 * A jornada completa, como progressão vertical: trilho, marcadores e a
 * sensação de avanço até o Pitchbook. O conteúdo é o já confirmado no
 * projeto (_data/journey.ts) — o material oficial confirma 9 etapas mas
 * não publica o nome de cada uma, então as fases descrevem a progressão
 * sem numerar.
 */
export default function JornadaPage() {
  const ultima = ibbcJourney.length - 1;

  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrowTexto="Jornada do Camper"
          titulo={
            <>
              {ibbcFacts.weeks} semanas.
              <span className="block text-white/55">Uma experiência completa.</span>
            </>
          }
          texto={`O programa é organizado em ${ibbcFacts.stages} etapas com entregas diárias — do nivelamento que antecede a largada até o Pitchbook apresentado no encerramento.`}
        />

        {/* Progressão */}
        <section aria-label="Etapas da jornada" className="bg-surface-alt">
          <div className={`${shell} py-20 lg:py-28`}>
            <ol className="relative">
              {/* Trilho contínuo atrás dos marcadores */}
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-[11px] top-2 w-px bg-line"
              />
              {ibbcJourney.map((stage, i) => (
                <li key={stage.id} className="relative flex gap-6 pb-12 last:pb-0 sm:gap-8">
                  <span
                    aria-hidden="true"
                    className={`mt-1 block h-[23px] w-[23px] shrink-0 rounded-full border-2 ${
                      i === ultima
                        ? "border-brand-deep bg-brand"
                        : "border-line bg-white"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-deep">
                      {stage.label}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {stage.title}
                    </h2>
                    <p className="mt-3 max-w-2xl leading-7 text-ink/70">
                      {stage.description}
                    </p>
                    {/* Foto da etapa, quando o slot existir no registro —
                        etapas sem slot seguem só em texto, sem buraco */}
                    {jornadaMedia[stage.id] ? (
                      <Foto
                        slot={jornadaMedia[stage.id]}
                        sizes="(max-width: 768px) 90vw, 40vw"
                        rounded="rounded-2xl"
                        className="mt-6 max-w-lg"
                      />
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* O que você constrói — o resultado concreto da jornada */}
        <section aria-labelledby="constroi-t" className="border-y border-line bg-surface">
          <div className={`${shell} py-20 lg:py-24`}>
            <p className={eyebrowLight}>O que você constrói</p>

            <h2 id="constroi-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
              No fim, você tem
              <span className="block text-ink/55">o trabalho na mão.</span>
            </h2>

            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ibbcOutcomes.map((o) => (
                <li key={o.id}>
                  <article className="h-full rounded-3xl border border-line bg-white p-6">
                    <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-brand-deep" />
                    <h3 className="mt-6 text-lg font-semibold">{o.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink/70">{o.description}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Conversão */}
        <section aria-labelledby="jor-cta" className="on-dark bg-ink py-20 text-center text-white lg:py-24">
          <div className={shell}>
            <h2
              id="jor-cta"
              className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
            >
              A jornada termina com o seu Pitchbook.
              <span className="block text-brand">Ela começa com uma conversa.</span>
            </h2>
            <div className="mt-8">
              <a
                href={ibbcLinks.apply}
                target="_blank"
                rel="noopener noreferrer"
                className={btnApply}
              >
                Quero participar
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
