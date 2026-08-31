import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SubHero from "../_components/SubHero";
import Foto from "../_components/Foto";
import { experienciaMedia } from "../_data/media";
import { btnApply, ctaSetaLight, eyebrowLight, setaClasse, shell } from "../_components/estilos";
import { ibbcFacts, ibbcLinks } from "../_data/config";

const description =
  "Como é viver o Investment Banking Boot Camp: analisar um setor, modelar, avaliar e apresentar — com entregas diárias e feedback de mentores da SP Advisors.";

export const metadata: Metadata = {
  title: "A Experiência | Investment Banking Boot Camp",
  description,
  alternates: { canonical: "/bootcamp/experiencia" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "A Experiência | Investment Banking Boot Camp",
    description,
  },
};

/* O mesmo arco ANALISAR→APRESENTAR da landing, aqui com espaço para
   respirar. Os textos vêm do material já existente no projeto. */
const etapas = [
  {
    number: "01",
    title: "ANALISAR",
    text: "Entenda um setor, suas empresas e a dinâmica competitiva.",
    detalhe:
      "Cada camper recebe um setor da economia para cobrir. O trabalho começa por entender os drivers de receita, os players relevantes e o que o mercado está precificando.",
  },
  {
    number: "02",
    title: "MODELAR",
    text: "Transforme informações financeiras em análises estruturadas.",
    detalhe:
      "Leitura de releases, demonstrações e dados de mercado até chegar a projeções e a um modelo integrado — com entregas diárias revisadas por mentores.",
  },
  {
    number: "03",
    title: "AVALIAR",
    text: "Trabalhe valuation e as ferramentas utilizadas em Investment Banking.",
    detalhe:
      "Comparáveis, múltiplos e valuation do seu setor, com premissas que você precisa saber defender.",
  },
  {
    number: "04",
    title: "APRESENTAR",
    text: "Consolide sua análise e apresente o Pitchbook final.",
    detalhe:
      "As análises viram páginas — gráficos, exhibits e narrativa — e o Pitchbook é apresentado e defendido diante de profissionais do mercado.",
  },
];

/* Três marcas do dia a dia, todas confirmadas pelo material oficial. */
const ritmo = [
  { t: "Entregas diárias", d: "O ritmo é o de uma mesa de trabalho: todo dia tem entrega." },
  { t: "Feedback de mentores", d: "Mentoria da equipe da SP Advisors ao longo de toda a jornada." },
  { t: "Apresentação final", d: "A experiência termina de pé, defendendo o seu trabalho." },
];

export default function ExperienciaPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrowTexto="A experiência"
          titulo="Você não vem só assistir."
          texto="O IBBC coloca o participante dentro de uma jornada prática, com análises, entregas diárias, feedback de mentores e apresentação final."
        />

        {/* O arco da experiência */}
        <section aria-label="As quatro frentes da experiência" className="bg-surface-alt">
          <div className={`${shell} py-20 lg:py-28`}>
            {/* [EXP-01…04] Cada bloco do arco carrega a sua fotografia
                real; os slots vivem em _data/media.ts */}
            <ol className="grid gap-5 md:grid-cols-2">
              {etapas.map((item, i) => (
                <li key={item.number}>
                  <article className="h-full overflow-hidden rounded-3xl border border-line bg-white">
                    <Foto
                      slot={experienciaMedia[i]}
                      sizes="(max-width: 768px) 92vw, 46vw"
                      rounded="rounded-none"
                    />
                    <div className="p-8">
                      <p className="text-sm text-brand-deep">{item.number}</p>
                      <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{item.title}</h2>
                      <p className="mt-4 text-lg leading-8 text-ink/80">{item.text}</p>
                      <p className="mt-3 leading-7 text-ink/60">{item.detalhe}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* O ritmo */}
        <section aria-labelledby="ritmo-t" className="border-y border-line bg-surface">
          <div className={`${shell} py-20 lg:py-24`}>
            <p className={eyebrowLight}>O ritmo</p>
            <h2 id="ritmo-t" className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {ibbcFacts.weeks} semanas em tempo integral, {ibbcFacts.stages}{" "}
              etapas, um Pitchbook.
            </h2>
            <dl className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
              {ritmo.map((r) => (
                <div key={r.t}>
                  <dt className="text-xl font-semibold tracking-tight">{r.t}</dt>
                  <dd className="mt-3 leading-7 text-ink/70">{r.d}</dd>
                </div>
              ))}
            </dl>

            <Link href="/bootcamp/jornada" className={`${ctaSetaLight} mt-12`}>
              Conheça a jornada completa
              <span aria-hidden="true" className={setaClasse}>→</span>
            </Link>
          </div>
        </section>

        {/* Conversão */}
        <section aria-labelledby="exp-cta" className="on-dark bg-ink py-20 text-center text-white lg:py-24">
          <div className={shell}>
            <h2
              id="exp-cta"
              className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
            >
              Pronto para viver isso na prática?
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
