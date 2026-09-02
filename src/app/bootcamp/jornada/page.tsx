import type { Metadata } from "next";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SubHero from "../_components/SubHero";
import JornadaEtapas from "../_components/JornadaEtapas";
import InteractiveCertificate from "../_components/InteractiveCertificate";
import { btnApply, btnGhostDark, eyebrow, eyebrowLight, shell } from "../_components/estilos";
import { ibbcJourney } from "../_data/journey";
import { ibbcOutcomes } from "../_data/outcomes";
import { ibbcFacts, ibbcLinks, BA_WHATSAPP_DISPLAY } from "../_data/config";

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
 * A jornada completa, sem fotografia por decisão do cliente (02/09): as
 * etapas de _data/journey.ts com microelementos gráficos, o fechamento
 * na apresentação final e, logo abaixo, o certificado interativo — o
 * MESMO componente da landing e de /bootcamp/certificado, reutilizado
 * sem alteração. O material oficial confirma 9 etapas mas não publica o
 * nome de cada uma, então as fases descrevem a progressão.
 */
export default function JornadaPage() {
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
          texto={`O programa é organizado em ${ibbcFacts.stages} etapas com entregas diárias, do nivelamento que antecede a largada até o Pitchbook apresentado no encerramento.`}
        />

        {/* ═══════════ AS ETAPAS ═══════════ */}
        <section aria-label="Etapas da jornada" className="bg-surface-alt">
          <div className={`${shell} py-20 lg:py-28`}>
            <JornadaEtapas etapas={ibbcJourney} />
          </div>
        </section>

        {/* ═══════════ CERTIFICADO — logo depois da apresentação final ═══════════
            PROCESSO → ENTREGA → CERTIFICADO. Componente existente, intacto. */}
        <section aria-labelledby="jor-cert-t" className="on-dark bg-ink py-20 text-white lg:py-24">
          <div className={shell}>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow}>Certificação IBBC</p>
              <h2
                id="jor-cert-t"
                className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                O resultado também leva o seu nome.
              </h2>
              <p className="mt-6 text-pretty text-lg leading-8 text-white/70">
                Ao concluir a experiência, você recebe o certificado de{" "}
                {ibbcFacts.hours} horas de Practical Investment Banking Training.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl">
              <InteractiveCertificate />
            </div>

            <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-white/55">
              Prévia ilustrativa. O certificado oficial é concedido após a
              conclusão do Investment Banking Boot Camp.
            </p>
          </div>
        </section>

        {/* ═══════════ O QUE VOCÊ CONSTRÓI — lista enxuta, sem caixas ═══════════ */}
        <section aria-labelledby="constroi-t" className="border-b border-line bg-surface">
          <div className={`${shell} py-20 lg:py-24`}>
            <p className={eyebrowLight}>O que você constrói</p>

            <h2 id="constroi-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
              No fim, você tem
              <span className="block text-ink/55">o trabalho na mão.</span>
            </h2>

            <dl className="mt-12 grid gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
              {ibbcOutcomes.map((o) => (
                <div key={o.id}>
                  <dt className="text-lg font-semibold tracking-tight">{o.title}</dt>
                  <dd className="mt-2 text-sm leading-6 text-ink/70">{o.description}</dd>
                </div>
              ))}
            </dl>
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
            {/* Contato E inscrição, lado a lado — mesmo padrão do CTA
                final da landing */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={ibbcLinks.apply}
                target="_blank"
                rel="noopener noreferrer"
                className={btnApply}
              >
                Quero participar
              </a>
              <a
                href={ibbcLinks.coursePage}
                target="_blank"
                rel="noopener noreferrer"
                className={btnGhostDark}
              >
                Inscrição pela Tabula ↗
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              WhatsApp da equipe:{" "}
              <a
                href={ibbcLinks.apply}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 underline decoration-white/30 decoration-2 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
              >
                {BA_WHATSAPP_DISPLAY}
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
