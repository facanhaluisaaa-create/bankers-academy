import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

import Certificate from "./_components/Certificate";
import { btnApply, btnGhostDark, ctaSetaDark, ctaSetaLight, eyebrow, eyebrowLight, setaClasse, shell } from "./_components/estilos";
import { ibbcAlumni } from "./_data/alumni";
import { ibbcEditions } from "./_data/editions";
import { ibbcFaq } from "./_data/faq";
import { ibbcJourney } from "./_data/journey";
import { ibbcMentors } from "./_data/mentors";
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

/**
 * Landing page + hub do Investment Banking Boot Camp.
 *
 * Sem navegação por âncora: cada "Conheça…" é uma ROTA REAL, na mesma
 * aba — /bootcamp/experiencia, /jornada, /certificado, /alumni,
 * /edicoes, /mentores. A página principal apresenta o programa inteiro
 * em prévias curtas (o que é, para quem é, como é, o que se constrói,
 * por que confiar) e as internas aprofundam. Nada foi descartado no
 * caminho — só mudou de endereço.
 */
export default function BootcampPage() {
  const proxima = ibbcEditions.find((e) => e.upcoming);
  const realizadas = ibbcEditions.filter((e) => !e.upcoming).length;
  /* Prévia de alumni: os campers da turma mais recente com gente listada. */
  const ultimaTurma = Math.max(...ibbcAlumni.map((a) => a.cohort));
  const amostraAlumni = ibbcAlumni.filter((a) => a.cohort === ultimaTurma).slice(0, 8);

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

        {/* ═══════════ A. HERO ═══════════ */}
        <section className="on-dark relative overflow-hidden bg-ink text-white">
          <div className={`${shell} py-24 lg:py-32`}>
            <p className={`mb-5 ${eyebrow}`}>
              Bankers Academy · desde {ibbcFacts.firstEditionYear}
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Investment Banking
              <span className="block text-brand">Boot Camp</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Viva na prática a experiência de Investment Banking. Da análise de
              um setor à construção e apresentação do seu Pitchbook final.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={ibbcLinks.apply}
                target="_blank"
                rel="noopener noreferrer"
                className={btnApply}
              >
                Quero participar
              </a>

              {/* Rota real, mesma aba — antes era href="#experiencia" */}
              <Link href="/bootcamp/experiencia" className={btnGhostDark}>
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

        {/* RESUMO — o programa inteiro em um parágrafo, para quem chega e
            para buscadores. Ninguém precisa abrir página interna para
            entender o que é o IBBC. */}
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

        {/* ═══════════ B. EXPERIÊNCIA (prévia) ═══════════ */}
        <section aria-labelledby="experiencia-t" className="bg-surface-alt py-20 lg:py-24">
          <div className={shell}>
            <p className={eyebrowLight}>A experiência</p>

            <h2 id="experiencia-t" className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Você não vem só assistir.
            </h2>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {actions.map((item) => (
                <li key={item.number}>
                  <article className="h-full rounded-3xl border border-line bg-white p-6">
                    <p className="text-sm text-brand-deep">{item.number}</p>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink/70">{item.text}</p>
                  </article>
                </li>
              ))}
            </ul>

            <Link href="/bootcamp/experiencia" className={`${ctaSetaLight} mt-10`}>
              Conheça a experiência
              <span aria-hidden="true" className={setaClasse}>→</span>
            </Link>
          </div>
        </section>

        {/* ═══════════ C. JORNADA (prévia) ═══════════ */}
        <section aria-labelledby="jornada-t" className="border-y border-line bg-surface py-20 lg:py-24">
          <div className={shell}>
            <p className={eyebrowLight}>Jornada do Camper</p>

            <h2 id="jornada-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
              {ibbcFacts.weeks} semanas.
              <span className="block text-ink/55">Uma experiência completa.</span>
            </h2>

            {/* Só a espinha da progressão; a jornada completa vive em
                /bootcamp/jornada */}
            <ol className="mt-12 flex flex-wrap items-center gap-y-3 text-sm font-semibold">
              {ibbcJourney.map((stage, i) => (
                <li key={stage.id} className="flex items-center">
                  {i > 0 ? (
                    <span aria-hidden="true" className="mx-3 text-ink/30">→</span>
                  ) : null}
                  <span className="rounded-full border border-line bg-white px-4 py-2">
                    {stage.label}
                  </span>
                </li>
              ))}
            </ol>

            <Link href="/bootcamp/jornada" className={`${ctaSetaLight} mt-10`}>
              Conheça a jornada
              <span aria-hidden="true" className={setaClasse}>→</span>
            </Link>
          </div>
        </section>

        {/* ═══════════ D. RESULTADO (prévia) ═══════════ */}
        <section aria-labelledby="constroi-t" className="bg-surface-alt py-20 lg:py-24">
          <div className={shell}>
            <p className={eyebrowLight}>O que você constrói</p>

            <h2 id="constroi-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
              No fim, você tem
              <span className="block text-ink/55">o trabalho na mão.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
              Análise setorial, comparáveis, modelagem financeira, valuation — e
              o Pitchbook final, construído por você e apresentado a
              profissionais do mercado.
            </p>

            <Link href="/bootcamp/jornada" className={`${ctaSetaLight} mt-8`}>
              Veja o que você constrói
              <span aria-hidden="true" className={setaClasse}>→</span>
            </Link>
          </div>
        </section>

        {/* ═══════════ E. CERTIFICADO (prévia) ═══════════ */}
        <section aria-labelledby="certificado-t" className="on-dark bg-ink py-20 text-white lg:py-24">
          <div className={shell}>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow}>Certificação IBBC</p>
              <h2
                id="certificado-t"
                className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Seu nome pode estar aqui.
              </h2>
              <p className="mt-6 text-pretty text-lg leading-8 text-white/70">
                Ao concluir a experiência, você recebe o certificado de{" "}
                {ibbcFacts.hours} horas de Practical Investment Banking Training.
              </p>
            </div>

            {/* Prévia estática do diploma. A versão interativa — em que o
                visitante escreve o próprio nome — vive em
                /bootcamp/certificado. */}
            <div className="mx-auto mt-12 max-w-4xl">
              {/* tabIndex: no celular esta área rola na horizontal e precisa
                  ser alcançável pelo teclado (WCAG 2.1.1). */}
              <div
                tabIndex={0}
                role="group"
                aria-label="Prévia do certificado — role para o lado para ver inteiro"
                className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:overflow-visible sm:px-0"
              >
                <div className="min-w-[560px] sm:min-w-0">
                  <Certificate
                    nameSlot={
                      <span className="cert-name mx-1 inline-block max-w-[62%] translate-y-[-0.15em] truncate align-baseline font-serif leading-none">
                        SEU NOME AQUI
                      </span>
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/bootcamp/certificado" className={ctaSetaDark}>
                Explore seu certificado
                <span aria-hidden="true" className={setaClasse}>→</span>
              </Link>
              <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-white/55">
                Prévia ilustrativa. O certificado oficial é concedido após a
                conclusão do Investment Banking Boot Camp.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ F. ALUMNI (prévia) ═══════════ */}
        <section aria-labelledby="alumni-t" className="bg-surface py-20 lg:py-24">
          <div className={shell}>
            <p className={eyebrowLight}>Alumni</p>

            <h2 id="alumni-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
              Quem já passou
              <span className="block text-ink/55">por aqui.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-ink/70">
              {ibbcAlumni.length} campers já viveram o Investment Banking Boot
              Camp desde {ibbcFacts.firstEditionYear} — cada um responsável por
              cobrir um setor durante a sua edição. Vários voltaram depois como
              mentores de turmas seguintes.
            </p>

            {/* Amostra da turma mais recente; a comunidade completa, com
                filtro por ano, vive em /bootcamp/alumni */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {amostraAlumni.map((a) => (
                <li
                  key={a.name}
                  className="rounded-full border border-line px-3 py-1.5 text-xs text-ink/75"
                >
                  {a.name}
                </li>
              ))}
              <li className="rounded-full bg-brand-soft px-3 py-1.5 text-xs font-semibold text-ink">
                + {ibbcAlumni.length - amostraAlumni.length} campers
              </li>
            </ul>

            <Link href="/bootcamp/alumni" className={`${ctaSetaLight} mt-9`}>
              Conheça nossos alumni
              <span aria-hidden="true" className={setaClasse}>→</span>
            </Link>
          </div>
        </section>

        {/* DEPOIMENTOS — a prova social fica na landing; só renderiza com
            texto autorizado */}
        {publishableTestimonials.length > 0 ? (
          <section aria-labelledby="depo-t" className="border-y border-line bg-surface-alt">
            <div className={`${shell} py-20 lg:py-24`}>
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

        {/* ═══════════ G. EDIÇÕES + H. MENTORES (prévias) ═══════════ */}
        <section aria-labelledby="hist-t" className="bg-surface py-20 lg:py-24">
          <div className={shell}>
            <h2 id="hist-t" className="sr-only">
              História e mentoria do programa
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-3xl border border-line bg-white p-8">
                <p className={eyebrowLight}>Desde {ibbcFacts.firstEditionYear}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Uma história construída edição após edição.
                </h3>
                <p className="mt-4 leading-7 text-ink/70">
                  {realizadas} edições realizadas, duas por ano — em janeiro e em
                  julho.
                  {proxima
                    ? ` A próxima é o IBBC ${proxima.cohort}, em ${proxima.term.toLowerCase()} de ${proxima.year}.`
                    : ""}
                </p>
                <Link href="/bootcamp/edicoes" className={`${ctaSetaLight} mt-7`}>
                  Veja as edições anteriores
                  <span aria-hidden="true" className={setaClasse}>→</span>
                </Link>
              </article>

              <article className="rounded-3xl border border-line bg-white p-8">
                <p className={eyebrowLight}>Mentoria</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Com quem você vai viver essa experiência.
                </h3>
                <p className="mt-4 leading-7 text-ink/70">
                  {ibbcMentors[0].name} — {ibbcMentors[0].role.toLowerCase()} —
                  com o apoio de mentores do time da SP Advisors, boa parte deles
                  ex-campers do próprio programa.
                </p>
                <Link href="/bootcamp/mentores" className={`${ctaSetaLight} mt-7`}>
                  Conheça quem ensina
                  <span aria-hidden="true" className={setaClasse}>→</span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ — objeções respondidas antes da conversão */}
        <section aria-labelledby="faq-t" className="border-t border-line bg-surface py-20 lg:py-24">
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

        {/* ═══════════ I. CTA FINAL ═══════════ */}
        <section aria-labelledby="cta-t" className="on-dark bg-ink py-28 text-center text-white">
          <div className={shell}>
            <p className={eyebrow}>Investment Banking Boot Camp</p>

            <h2 id="cta-t" className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Pronto para viver
              <span className="block text-brand">sua edição?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              A participação passa por uma entrevista online. Fale com a equipe da
              Bankers Academy para agendar a sua — ou vá direto para a inscrição
              na Tabula.
            </p>

            {/* Dois caminhos, lado a lado: conversa com a equipe e inscrição */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={ibbcLinks.apply}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnApply} px-8`}
              >
                Falar com a equipe
              </a>
              <a
                href={ibbcLinks.coursePage}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnGhostDark} px-8`}
              >
                Inscrição pela Tabula ↗
              </a>
            </div>

            <p className="mt-8 text-sm text-white/50">
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
