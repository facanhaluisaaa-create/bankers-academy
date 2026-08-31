import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

import AlumniBrowser from "./_components/AlumniBrowser";
import InteractiveCertificate from "./_components/InteractiveCertificate";
import { ibbcAlumni } from "./_data/alumni";
import { ibbcEditions } from "./_data/editions";
import { ibbcFaq } from "./_data/faq";
import { ibbcJourney } from "./_data/journey";
import { ibbcMentors } from "./_data/mentors";
import { ibbcOutcomes } from "./_data/outcomes";
import { publishableTestimonials } from "./_data/testimonials";
import { ibbcFacts, ibbcLinks, BA_WHATSAPP_DISPLAY } from "./_data/config";

const description =
  "Treinamento intensivo de 5 semanas que simula o dia a dia de um analista de Investment Banking: 9 etapas, entregas diárias, mentoria da SP Advisors e um Pitchbook final. Certificado de 250 horas.";

export const metadata: Metadata = {
  title: "Investment Banking Boot Camp | Bankers Academy",
  description,
  alternates: { canonical: "/bootcamp" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Investment Banking Boot Camp | Bankers Academy",
    description,
  },
};

/* Números confirmados: 5 semanas, 9 etapas e o Pitchbook final vêm do
   material oficial; as 250 horas estão impressas no próprio diploma. */
const highlights = [
  { value: String(ibbcFacts.weeks), label: "semanas de imersão" },
  { value: String(ibbcFacts.stages), label: "etapas práticas" },
  { value: "1", label: "Pitchbook final" },
  { value: `${ibbcFacts.hours}h`, label: "de treinamento certificadas" },
];

const actions = [
  { number: "01", title: "ANALISAR", text: "Entenda um setor, suas empresas e a dinâmica competitiva." },
  { number: "02", title: "MODELAR", text: "Transforme informações financeiras em análises estruturadas." },
  { number: "03", title: "AVALIAR", text: "Trabalhe valuation e as ferramentas utilizadas em Investment Banking." },
  { number: "04", title: "APRESENTAR", text: "Consolide sua análise e apresente o Pitchbook final." },
];

const eyebrowBase = "text-sm font-semibold uppercase tracking-[0.3em]";
/* O verde vívido da marca (#6FDF11) tem 10,5:1 sobre o ink, mas só 1,7:1
   sobre branco — em seção clara usa-se a variante escurecida, de mesmo
   matiz, que passa AA em texto pequeno. */
const eyebrow = `${eyebrowBase} text-brand`;          // seções escuras
const eyebrowLight = `${eyebrowBase} text-brand-deep`; // seções claras
const shell = "mx-auto max-w-7xl px-6 lg:px-8";

function StructuredData() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Investment Banking Boot Camp",
      alternateName: "IBBC",
      description,
      inLanguage: "pt-BR",
      provider: { "@type": "Organization", name: "Bankers Academy" },
      educationalCredentialAwarded:
        "Certificado de 250 horas de Practical Investment Banking Training",
      teaches: [
        "Análise setorial",
        "Comparáveis e múltiplos",
        "Modelagem financeira",
        "Valuation",
        "Construção de Pitchbook",
      ],
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "blended",
        courseWorkload: "P5W",
        instructor: {
          "@type": "Person",
          name: "José Roberto Securato Jr.",
          sameAs: ibbcLinks.securatoLinkedin,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: ibbcFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default function BootcampPage() {
  const creditedMentors = Array.from(
    new Set(ibbcEditions.flatMap((e) => e.mentors ?? [])),
  ).sort((a, b) => a.localeCompare(b, "pt-BR"));

  return (
    <>
      {/*
        Neste projeto o layout não injeta Header/Footer — cada página inclui
        os seus. Ao portar para um site cujo layout já os fornece, remova
        estas duas linhas para não duplicá-los.
      */}
      <Header />

      <main className="bg-surface text-ink">
        <StructuredData />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-white">
        <div className={`${shell} py-24 lg:py-32`}>
          <p className={`mb-5 ${eyebrow}`}>Bankers Academy · desde {ibbcFacts.firstEditionYear}</p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Investment Banking
            <span className="block text-brand">Boot Camp</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Viva na prática a experiência de Investment Banking. Da análise de um
            setor à construção e apresentação do seu Pitchbook final.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={ibbcLinks.apply}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-soft px-7 py-4 font-semibold text-ink transition hover:brightness-95"
            >
              Quero participar
            </a>

            <Link
              href="#experiencia"
              className="rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Conheça a experiência
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="border-t border-white/20 pt-5">
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <p className="text-3xl font-semibold text-brand">{item.value}</p>
                  <p className="mt-2 text-sm text-white/60">{item.label}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* RESUMO — em texto, para busca e mecanismos de IA */}
      <section aria-labelledby="resumo" className="border-b border-line bg-surface">
        <div className={`${shell} py-16`}>
          <h2 id="resumo" className="sr-only">
            O que é o Investment Banking Boot Camp
          </h2>
          <p className="max-w-4xl text-lg leading-8 text-ink/75">
            O <strong className="text-ink">Investment Banking Boot Camp (IBBC)</strong> é um
            treinamento intensivo de <strong className="text-ink">{ibbcFacts.weeks} semanas</strong> da{" "}
            <strong className="text-ink">Bankers Academy</strong>, idealizado e conduzido por{" "}
            <strong className="text-ink">José Roberto Securato Jr.</strong>, que simula o dia a dia
            de um analista de Investment Banking. Realizado desde {ibbcFacts.firstEditionYear}, é
            organizado em <strong className="text-ink">{ibbcFacts.stages} etapas</strong> com
            entregas diárias e mentoria da equipe da SP Advisors. Cada participante — chamado de{" "}
            <em>camper</em> — cobre um setor da economia, produz a análise setorial, os comparáveis, a
            modelagem financeira e o valuation, e conclui a jornada construindo e apresentando um{" "}
            <strong className="text-ink">Pitchbook final</strong>. Ao final, recebe um certificado
            de <strong className="text-ink">{ibbcFacts.hours} horas</strong> de Practical Investment
            Banking Training. A participação é definida por entrevista online e exige dedicação em
            tempo integral durante a edição, que acontece em janeiro ou em julho.
          </p>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" aria-labelledby="experiencia-t" className="scroll-mt-20 bg-surface-alt py-24">
        <div className={shell}>
        <p className={eyebrowLight}>A experiência</p>

        <h2 id="experiencia-t" className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Você não vem só assistir.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
          O IBBC coloca o participante dentro de uma jornada prática, com análises,
          entregas diárias, feedback de mentores e apresentação final.
        </p>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {actions.map((item) => (
            <li key={item.number}>
              <article className="h-full rounded-3xl border border-line bg-white p-7">
                <p className="text-sm text-brand-deep">{item.number}</p>
                <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-ink/70">{item.text}</p>
              </article>
            </li>
          ))}
        </ul>
        </div>
      </section>

      {/* JORNADA */}
      <section aria-labelledby="jornada-t" className="border-y border-line bg-surface">
        <div className={`${shell} py-24`}>
          <p className={eyebrowLight}>Jornada do Camper</p>

          <h2 id="jornada-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
            {ibbcFacts.weeks} semanas.
            <span className="block text-ink/55">Uma experiência completa.</span>
          </h2>

          {/*
            O material oficial confirma que são 9 etapas, mas não publica o
            nome de cada uma — por isso as fases abaixo não são numeradas.
            Ao receber os nomes oficiais, basta trocar o array em _data/journey.ts.
          */}
          <p className="mt-6 max-w-2xl text-ink/70">
            O programa é organizado em {ibbcFacts.stages} etapas com entregas diárias.
            Abaixo, a progressão da experiência: do nivelamento que antecede a largada
            até o Pitchbook apresentado no encerramento.
          </p>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-line md:grid-cols-2 lg:grid-cols-4">
            {ibbcJourney.map((stage) => (
              <li key={stage.id} className="bg-white p-7">
                <p className="text-sm text-brand-deep">{stage.label}</p>
                <h3 className="mt-8 text-xl font-semibold">{stage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* O QUE VOCÊ CONSTRÓI */}
      <section aria-labelledby="constroi-t" className="bg-surface-alt py-24">
        <div className={shell}>
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

      {/* CERTIFICADO */}
      <section
        id="certificado"
        aria-labelledby="certificado-t"
        className="on-dark scroll-mt-20 bg-ink py-24 text-white"
      >
        <div className={shell}>
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrow}>Certificação IBBC</p>

            <h2
              id="certificado-t"
              className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Imagine seu nome aqui.
            </h2>

            <p className="mt-6 text-pretty text-lg leading-8 text-white/70">
              Complete a experiência do Investment Banking Boot Camp e leve com
              você o marco de uma jornada construída na prática.
            </p>
          </div>

          {/* O diploma é o protagonista da seção */}
          <div className="mx-auto mt-14 max-w-5xl">
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
            <p className="mx-auto max-w-xl text-balance text-xl font-semibold leading-snug sm:text-2xl">
              Seu nome pode estar aqui. Sua jornada começa antes.
            </p>
            <a
              href={ibbcLinks.apply}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-brand-soft px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-ink transition hover:brightness-95"
            >
              Quero participar do IBBC
            </a>
          </div>
        </div>
      </section>

      {/* ALUMNI */}
      <section id="alumni" aria-labelledby="alumni-t" className="scroll-mt-20 bg-surface py-24">
        <div className={shell}>
        <p className={eyebrowLight}>Alumni</p>

        <h2 id="alumni-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
          Quem já passou
          <span className="block text-ink/55">por aqui.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-ink/70">
          {ibbcAlumni.length} campers já viveram o Investment Banking Boot Camp desde{" "}
          {ibbcFacts.firstEditionYear} — cada um responsável por cobrir um setor durante
          a sua edição. Vários voltaram depois como mentores de turmas seguintes.
        </p>

        <AlumniBrowser />
        </div>
      </section>

      {/* DEPOIMENTOS — só renderiza com texto autorizado */}
      {publishableTestimonials.length > 0 ? (
        <section aria-labelledby="depo-t" className="border-y border-line bg-surface-alt">
          <div className={`${shell} py-24`}>
            <p className={eyebrowLight}>Depoimentos</p>
            <h2 id="depo-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
              Nas palavras de quem viveu.
            </h2>

            <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

      {/* EDIÇÕES */}
      <section aria-labelledby="edicoes-t" className="bg-surface py-24">
        <div className={shell}>
        <p className={eyebrowLight}>Desde {ibbcFacts.firstEditionYear}</p>

        <h2 id="edicoes-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
          Uma história construída
          <span className="block text-ink/55">edição após edição.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-ink/70">
          O boot camp acontece duas vezes por ano, em janeiro e em julho. Cada edição
          forma uma turma nova — e uma parte dela volta como mentora da seguinte.
        </p>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    <h3 className="text-xl font-semibold">IBBC {e.cohort}</h3>
                    <p className="text-sm tabular-nums text-ink/60">
                      {e.term} {e.year}
                    </p>
                  </div>

                  {e.upcoming ? (
                    <p className="mt-3 text-sm font-semibold text-brand-deep">Próxima edição</p>
                  ) : null}

                  {campers.length > 0 ? (
                    <p className="mt-3 text-sm text-ink/60">
                      {campers.length} {campers.length === 1 ? "camper" : "campers"}
                    </p>
                  ) : null}

                  {e.mentors && e.mentors.length > 0 ? (
                    <div className="mt-5 border-t border-line pt-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                        Mentores
                      </h4>
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

      {/* MENTORES */}
      <section aria-labelledby="mentores-t" className="border-y border-line bg-surface-alt">
        <div className={`${shell} py-24`}>
          <p className={eyebrowLight}>Mentoria</p>

          <h2 id="mentores-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
            Com quem você vai
            <span className="block text-ink/55">viver essa experiência.</span>
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {ibbcMentors.map((m) => (
              <article key={m.id} className="rounded-3xl border border-line bg-white p-7">
                <h3 className="text-2xl font-semibold">{m.name}</h3>
                <p className="mt-2 text-sm text-brand-deep">{m.role}</p>
                {m.bio ? <p className="mt-5 leading-7 text-ink/70">{m.bio}</p> : null}
                {m.linkedin ? (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex py-1 text-sm font-semibold text-brand-deep hover:underline"
                  >
                    LinkedIn ↗<span className="sr-only"> de {m.name} (abre em nova aba)</span>
                  </a>
                ) : null}
              </article>
            ))}

            {creditedMentors.length > 0 ? (
              <div className="rounded-3xl border border-line bg-white p-7">
                <h3 className="text-lg font-semibold">Mentores das edições</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  Profissionais que acompanharam as turmas do boot camp — boa parte
                  deles ex-campers do próprio programa.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {creditedMentors.map((name) => (
                    <li
                      key={name}
                      className="rounded-full border border-line px-3 py-1.5 text-xs text-ink/75"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-t" className="scroll-mt-20 bg-surface py-24">
        <div className={shell}>
        <p className={eyebrowLight}>Perguntas frequentes</p>

        <h2 id="faq-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
          O que costumam
          <span className="block text-ink/55">perguntar.</span>
        </h2>

        <ul className="mt-14 divide-y divide-white/10 border-y border-line">
          {ibbcFaq.map((item) => (
            <li key={item.id}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold transition hover:text-brand-deep [&::-webkit-details-marker]:hidden">
                  <h3>{item.question}</h3>
                  <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="pb-6 pr-10 leading-7 text-ink/70">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="participar" aria-labelledby="cta-t" className="on-dark scroll-mt-20 bg-ink py-28 text-center text-white">
        <div className={shell}>
        <p className={eyebrow}>Investment Banking Boot Camp</p>

        <h2 id="cta-t" className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Pronto para viver
          <span className="block text-brand">sua edição?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          A participação passa por uma entrevista online. Fale com a equipe da
          Bankers Academy para agendar a sua e entender os próximos passos.
        </p>

        <a
          href={ibbcLinks.apply}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-brand-soft px-8 py-4 font-semibold text-ink transition hover:brightness-95"
        >
          Agendar entrevista
        </a>

        <p className="mt-8 text-sm text-white/50">
          Ou fale direto no WhatsApp {BA_WHATSAPP_DISPLAY}
        </p>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
