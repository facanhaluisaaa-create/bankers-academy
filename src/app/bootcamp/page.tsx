import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

import AlumniBrowser from "./_components/AlumniBrowser";
import Certificate from "./_components/Certificate";
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

const eyebrow = "text-sm font-semibold uppercase tracking-[0.3em] text-green-400";
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

      <main className="bg-black text-white">
        <StructuredData />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className={`${shell} py-24 lg:py-32`}>
          <p className={`mb-5 ${eyebrow}`}>Bankers Academy · desde {ibbcFacts.firstEditionYear}</p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Investment Banking
            <span className="block text-green-400">Boot Camp</span>
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
              className="rounded-full bg-green-400 px-7 py-4 font-semibold text-black transition hover:opacity-90"
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
                  <p className="text-3xl font-semibold text-green-400">{item.value}</p>
                  <p className="mt-2 text-sm text-white/60">{item.label}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* RESUMO — em texto, para busca e mecanismos de IA */}
      <section aria-labelledby="resumo" className="border-b border-white/10">
        <div className={`${shell} py-16`}>
          <h2 id="resumo" className="sr-only">
            O que é o Investment Banking Boot Camp
          </h2>
          <p className="max-w-4xl text-lg leading-8 text-white/70">
            O <strong className="text-white">Investment Banking Boot Camp (IBBC)</strong> é um
            treinamento intensivo de <strong className="text-white">{ibbcFacts.weeks} semanas</strong> da{" "}
            <strong className="text-white">Bankers Academy</strong>, idealizado e conduzido por{" "}
            <strong className="text-white">José Roberto Securato Jr.</strong>, que simula o dia a dia
            de um analista de Investment Banking. Realizado desde {ibbcFacts.firstEditionYear}, é
            organizado em <strong className="text-white">{ibbcFacts.stages} etapas</strong> com
            entregas diárias e mentoria da equipe da SP Advisors. Cada participante — chamado de{" "}
            <em>camper</em> — cobre um setor da economia, produz a análise setorial, os comparáveis, a
            modelagem financeira e o valuation, e conclui a jornada construindo e apresentando um{" "}
            <strong className="text-white">Pitchbook final</strong>. Ao final, recebe um certificado
            de <strong className="text-white">{ibbcFacts.hours} horas</strong> de Practical Investment
            Banking Training. A participação é definida por entrevista online e exige dedicação em
            tempo integral durante a edição, que acontece em janeiro ou em julho.
          </p>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" aria-labelledby="experiencia-t" className={`${shell} scroll-mt-8 py-24`}>
        <p className={eyebrow}>A experiência</p>

        <h2 id="experiencia-t" className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Você não vem só assistir.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          O IBBC coloca o participante dentro de uma jornada prática, com análises,
          entregas diárias, feedback de mentores e apresentação final.
        </p>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {actions.map((item) => (
            <li key={item.number}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <p className="text-sm text-green-400">{item.number}</p>
                <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/60">{item.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* JORNADA */}
      <section aria-labelledby="jornada-t" className="border-y border-white/10 bg-white/[0.02]">
        <div className={`${shell} py-24`}>
          <p className={eyebrow}>Jornada do Camper</p>

          <h2 id="jornada-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
            {ibbcFacts.weeks} semanas.
            <span className="block text-white/45">Uma experiência completa.</span>
          </h2>

          {/*
            O material oficial confirma que são 9 etapas, mas não publica o
            nome de cada uma — por isso as fases abaixo não são numeradas.
            Ao receber os nomes oficiais, basta trocar o array em _data/journey.ts.
          */}
          <p className="mt-6 max-w-2xl text-white/60">
            O programa é organizado em {ibbcFacts.stages} etapas com entregas diárias.
            Abaixo, a progressão da experiência: do nivelamento que antecede a largada
            até o Pitchbook apresentado no encerramento.
          </p>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {ibbcJourney.map((stage) => (
              <li key={stage.id} className="bg-black p-7">
                <p className="text-sm text-green-400">{stage.label}</p>
                <h3 className="mt-8 text-xl font-semibold">{stage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* O QUE VOCÊ CONSTRÓI */}
      <section aria-labelledby="constroi-t" className={`${shell} py-24`}>
        <p className={eyebrow}>O que você constrói</p>

        <h2 id="constroi-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
          No fim, você tem
          <span className="block text-white/45">o trabalho na mão.</span>
        </h2>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ibbcOutcomes.map((o) => (
            <li key={o.id}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-green-400" />
                <h3 className="mt-6 text-lg font-semibold">{o.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{o.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* CERTIFICADO */}
      <section id="certificado" aria-labelledby="certificado-t" className="scroll-mt-8 border-y border-white/10 bg-white/[0.02]">
        <div className={`${shell} py-24`}>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className={eyebrow}>Certificação</p>

              <h2 id="certificado-t" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Leve sua experiência
                <span className="block text-white/45">com você.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                A jornada termina com a apresentação do Pitchbook — e com um documento
                que registra o que você construiu. O certificado atesta {ibbcFacts.hours}{" "}
                horas de Practical Investment Banking Training e é assinado por José Securato.
              </p>

              <ul className="mt-9 flex flex-wrap gap-3">
                {[
                  `${ibbcFacts.weeks} semanas`,
                  `${ibbcFacts.stages} etapas`,
                  "Pitchbook final",
                  `${ibbcFacts.hours} horas`,
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <figure className="lg:rotate-[-1.1deg]">
              <Certificate />
              <figcaption className="mt-5 text-center text-xs text-white/55">
                Representação do certificado entregue ao final do Investment Banking Boot Camp.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ALUMNI */}
      <section id="alumni" aria-labelledby="alumni-t" className={`${shell} scroll-mt-8 py-24`}>
        <p className={eyebrow}>Alumni</p>

        <h2 id="alumni-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
          Quem já passou
          <span className="block text-white/45">por aqui.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-white/60">
          {ibbcAlumni.length} campers já viveram o Investment Banking Boot Camp desde{" "}
          {ibbcFacts.firstEditionYear} — cada um responsável por cobrir um setor durante
          a sua edição. Vários voltaram depois como mentores de turmas seguintes.
        </p>

        <AlumniBrowser />
      </section>

      {/* DEPOIMENTOS — só renderiza com texto autorizado */}
      {publishableTestimonials.length > 0 ? (
        <section aria-labelledby="depo-t" className="border-y border-white/10 bg-white/[0.02]">
          <div className={`${shell} py-24`}>
            <p className={eyebrow}>Depoimentos</p>
            <h2 id="depo-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
              Nas palavras de quem viveu.
            </h2>

            <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {publishableTestimonials.map((t) => (
                <li key={t.id}>
                  <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-black p-7">
                    <blockquote className="flex-1 leading-7 text-white/80">
                      <p>{t.quote}</p>
                    </blockquote>
                    <figcaption className="mt-6 border-t border-white/10 pt-5">
                      <p className="font-semibold">{t.name}</p>
                      {t.edition ? (
                        <p className="mt-1 text-sm text-green-400">{t.edition}</p>
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
      <section aria-labelledby="edicoes-t" className={`${shell} py-24`}>
        <p className={eyebrow}>Desde {ibbcFacts.firstEditionYear}</p>

        <h2 id="edicoes-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
          Uma história construída
          <span className="block text-white/45">edição após edição.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-white/60">
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
                      ? "border-green-400/50 bg-green-400/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold">IBBC {e.cohort}</h3>
                    <p className="text-sm tabular-nums text-white/50">
                      {e.term} {e.year}
                    </p>
                  </div>

                  {e.upcoming ? (
                    <p className="mt-3 text-sm font-semibold text-green-400">Próxima edição</p>
                  ) : null}

                  {campers.length > 0 ? (
                    <p className="mt-3 text-sm text-white/50">
                      {campers.length} {campers.length === 1 ? "camper" : "campers"}
                    </p>
                  ) : null}

                  {e.mentors && e.mentors.length > 0 ? (
                    <div className="mt-5 border-t border-white/10 pt-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                        Mentores
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        {e.mentors.join(" · ")}
                      </p>
                    </div>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      {/* MENTORES */}
      <section aria-labelledby="mentores-t" className="border-y border-white/10 bg-white/[0.02]">
        <div className={`${shell} py-24`}>
          <p className={eyebrow}>Mentoria</p>

          <h2 id="mentores-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
            Com quem você vai
            <span className="block text-white/45">viver essa experiência.</span>
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {ibbcMentors.map((m) => (
              <article key={m.id} className="rounded-3xl border border-white/10 bg-black p-7">
                <h3 className="text-2xl font-semibold">{m.name}</h3>
                <p className="mt-2 text-sm text-green-400">{m.role}</p>
                {m.bio ? <p className="mt-5 leading-7 text-white/60">{m.bio}</p> : null}
                {m.linkedin ? (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex py-1 text-sm font-semibold text-green-400 hover:underline"
                  >
                    LinkedIn ↗<span className="sr-only"> de {m.name} (abre em nova aba)</span>
                  </a>
                ) : null}
              </article>
            ))}

            {creditedMentors.length > 0 ? (
              <div className="rounded-3xl border border-white/10 bg-black p-7">
                <h3 className="text-lg font-semibold">Mentores das edições</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Profissionais que acompanharam as turmas do boot camp — boa parte
                  deles ex-campers do próprio programa.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {creditedMentors.map((name) => (
                    <li
                      key={name}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70"
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
      <section id="faq" aria-labelledby="faq-t" className={`${shell} scroll-mt-8 py-24`}>
        <p className={eyebrow}>Perguntas frequentes</p>

        <h2 id="faq-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
          O que costumam
          <span className="block text-white/45">perguntar.</span>
        </h2>

        <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {ibbcFaq.map((item) => (
            <li key={item.id}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold transition hover:text-green-400 [&::-webkit-details-marker]:hidden">
                  <h3>{item.question}</h3>
                  <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="pb-6 pr-10 leading-7 text-white/60">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA FINAL */}
      <section id="participar" aria-labelledby="cta-t" className={`${shell} scroll-mt-8 py-28 text-center`}>
        <p className={eyebrow}>Investment Banking Boot Camp</p>

        <h2 id="cta-t" className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Pronto para viver
          <span className="block text-green-400">sua edição?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          A participação passa por uma entrevista online. Fale com a equipe da
          Bankers Academy para agendar a sua e entender os próximos passos.
        </p>

        <a
          href={ibbcLinks.apply}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-green-400 px-8 py-4 font-semibold text-black transition hover:opacity-90"
        >
          Agendar entrevista
        </a>

        <p className="mt-8 text-sm text-white/50">
          Ou fale direto no WhatsApp {BA_WHATSAPP_DISPLAY}
        </p>
      </section>
      </main>

      <Footer />
    </>
  );
}
