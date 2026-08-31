import type { Metadata } from "next";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SubHero from "../_components/SubHero";
import InteractiveCertificate from "../_components/InteractiveCertificate";
import { btnApply, shell } from "../_components/estilos";
import { ibbcFacts, ibbcLinks } from "../_data/config";

const description =
  "Veja como ficaria o seu nome no certificado de 250 horas do Investment Banking Boot Camp — prévia ilustrativa e interativa do diploma.";

export const metadata: Metadata = {
  title: "Seu Certificado | Investment Banking Boot Camp",
  description,
  alternates: { canonical: "/bootcamp/certificado" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Seu Certificado | Investment Banking Boot Camp",
    description,
  },
};

/**
 * Casa da prévia interativa do diploma — o componente InteractiveCertificate
 * veio da landing intacto: o visitante clica em "SEU NOME AQUI", digita o
 * nome no painel e o vê no certificado. Tudo em estado local, durante a
 * visita: sem rede, sem armazenamento, sem PDF, sem número de certificado.
 */
export default function CertificadoPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrowTexto="Certificação IBBC"
          titulo="Imagine seu nome aqui."
          texto="Complete a experiência do Investment Banking Boot Camp e leve com você o marco de uma jornada construída na prática."
        />

        <section aria-label="Prévia interativa do certificado" className="on-dark bg-ink pb-24 text-white">
          <div className={shell}>
            {/* O diploma é o protagonista da página */}
            <div className="mx-auto max-w-5xl">
              <InteractiveCertificate />
            </div>

            <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-white/55">
              Prévia ilustrativa. O certificado oficial é concedido após a
              conclusão do Investment Banking Boot Camp.
            </p>

            <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-4">
              {[
                { v: `${ibbcFacts.weeks} semanas`, l: "de imersão" },
                { v: `${ibbcFacts.stages} etapas`, l: "com entregas diárias" },
                { v: "Pitchbook", l: "final apresentado" },
                { v: "Certificado", l: "de conclusão" },
              ].map((m) => (
                <div key={m.v} className="text-center">
                  <dt className="sr-only">{m.l}</dt>
                  <dd>
                    <span className="block text-lg font-semibold tracking-tight text-brand sm:text-xl">
                      {m.v}
                    </span>
                    <span className="mt-1 block text-[13px] leading-tight text-white/60">
                      {m.l}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-16 border-t border-white/15 pt-12 text-center">
              <h2 className="mx-auto max-w-xl text-balance text-xl font-semibold leading-snug sm:text-2xl">
                Seu nome pode estar aqui. Sua jornada começa antes.
              </h2>
              <a
                href={ibbcLinks.apply}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnApply} mt-8 text-sm font-bold uppercase tracking-[0.08em]`}
              >
                Quero participar do IBBC
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
