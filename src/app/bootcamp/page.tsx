import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

import Certificate from "./_components/Certificate";
import Foto, { VideoDepoimento } from "./_components/Foto";
import { bootcampMedia } from "./_data/media";
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

          {/* [FOTO 01] A experiência real fechando o hero, de ponta a
              ponta. Um véu escuro desce da seção para a foto, mantendo a
              transição e a legibilidade do bloco de texto acima. */}
          <div className="relative">
            <Foto
              slot={bootcampMedia.hero}
              sizes="100vw"
              priority
              tone="dark"
              rounded="rounded-none"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink to-transparent"
            />
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

        {/* ═══════════ B. EXPERIÊNCIA — texto ao lado de UMA foto ═══════════ */}
        <section aria-labelledby="experiencia-t" className="bg-surface-alt py-20 lg:py-24">
          <div className={shell}>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className={eyebrowLight}>A experiência</p>

                <h2 id="experiencia-t" className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Você não vem só assistir.
                </h2>

                {/* O arco em lista enxuta — os quatro, sem virar parede
                    de cards; a explicação completa vive na página. */}
                <ol className="mt-10 space-y-5 border-t border-line pt-8">
                  {actions.map((item) => (
                    <li key={item.number} className="flex gap-5">
                      <span className="text-sm font-semibold tabular-nums text-brand-deep">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="font-semibold tracking-tight">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-ink/65">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <Link href="/bootcamp/experiencia" className={`${ctaSetaLight} mt-9`}>
                  Viva a experiência
                  <span aria-hidden="true" className={setaClasse}>→</span>
                </Link>
              </div>

              {/* [FOTO 02] Uma fotografia forte basta */}
              <Foto
                slot={bootcampMedia.experiencia}
                sizes="(max-width: 1024px) 92vw, 46vw"
              />
            </div>
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

            {/* [FOTO 03A–C] Tríptico editorial: começo → desenvolvimento
                → Pitchbook final. Se só uma foto for usada depois, as
                células sem src somem e a que sobrou ocupa a linha. */}
            {(() => {
              const tript = [
                { rotulo: "Começo", foto: bootcampMedia.jornada.inicio },
                { rotulo: "Desenvolvimento", foto: bootcampMedia.jornada.desenvolvimento },
                { rotulo: "Pitchbook final", foto: bootcampMedia.jornada.apresentacao },
              ];
              const comFoto = tript.filter((t) => t.foto.src);
              const mostrar = comFoto.length > 0 ? comFoto : tript;
              return (
                <ul className={`mt-12 grid gap-4 ${mostrar.length > 1 ? "sm:grid-cols-3" : ""}`}>
                  {mostrar.map((t, i) => (
                    <li key={t.rotulo}>
                      <figure>
                        <Foto slot={t.foto} sizes="(max-width: 640px) 92vw, 31vw" rounded="rounded-2xl" />
                        <figcaption className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/60">
                          {i > 0 ? <span aria-hidden="true" className="text-brand-deep">→</span> : null}
                          {t.rotulo}
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              );
            })()}

            <Link href="/bootcamp/jornada" className={`${ctaSetaLight} mt-10`}>
              Conheça a jornada
              <span aria-hidden="true" className={setaClasse}>→</span>
            </Link>
          </div>
        </section>

        {/* ═══════════ D. RESULTADO — imagem do material + entregas ═══════════ */}
        <section aria-labelledby="constroi-t" className="bg-surface-alt py-20 lg:py-24">
          <div className={shell}>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* [IMAGEM 04] Pitchbook / notebook / material real — nada de
                  mockup inventado */}
              <div className="lg:col-span-5">
                <Foto
                  slot={bootcampMedia.pitchbook}
                  sizes="(max-width: 1024px) 80vw, 34vw"
                  className="mx-auto max-w-sm lg:max-w-none"
                />
              </div>

              <div className="lg:col-span-7">
                <p className={eyebrowLight}>O que você constrói</p>

                <h2 id="constroi-t" className="mt-4 text-4xl font-semibold sm:text-5xl">
                  No fim, você tem
                  <span className="block text-ink/55">o trabalho na mão.</span>
                </h2>

                <ul className="mt-8 space-y-4 border-t border-line pt-8 text-lg font-semibold tracking-tight">
                  {["Análise de setor", "Modelagem e valuation", "Pitchbook final"].map((e) => (
                    <li key={e} className="flex items-center gap-3">
                      <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-brand-deep" />
                      {e}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 max-w-xl leading-8 text-ink/70">
                  Construído por você e apresentado a profissionais do mercado.
                </p>

                <Link href="/bootcamp/jornada" className={`${ctaSetaLight} mt-8`}>
                  Veja o que você constrói
                  <span aria-hidden="true" className={setaClasse}>→</span>
                </Link>
              </div>
            </div>
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

            {/* [FOTO ALUMNI 01–03] No máximo três em destaque. Quem entra
                aqui é decisão da Bankers Academy: preencher alumniDestaque
                em _data/media.ts com o id do alumni + foto confirmada.
                Enquanto vazio, três espaços reservados neutros — nenhum
                nome é escolhido por conta própria, nada fictício. */}
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bootcampMedia.alumniDestaque.length > 0
                ? bootcampMedia.alumniDestaque.slice(0, 3).map((d) => {
                    const pessoa = ibbcAlumni.find((a) => a.id === d.alumniId);
                    if (!pessoa) return null;
                    return (
                      <li key={d.alumniId}>
                        <article className="h-full overflow-hidden rounded-3xl border border-line bg-white">
                          <Foto
                            slot={{
                              slot: "FOTO ALUMNI",
                              src: d.foto,
                              alt: `Retrato de ${pessoa.name}`,
                              pendente: "",
                              ratio: "aspect-square",
                              ratioLabel: "1:1",
                              position: d.position,
                            }}
                            sizes="(max-width: 640px) 92vw, 30vw"
                            rounded="rounded-none"
                          />
                          <div className="p-6">
                            <h3 className="text-lg font-semibold">{pessoa.name}</h3>
                            <p className="mt-1 text-sm text-brand-deep">
                              Turma {pessoa.cohort} · {pessoa.term} {pessoa.year}
                            </p>
                            {pessoa.winner || pessoa.finalist || pessoa.mentor ? (
                              <p className="mt-2 text-sm text-ink/70">
                                {[
                                  pessoa.winner ? "Winner" : null,
                                  pessoa.finalist ? "Finalist" : null,
                                  pessoa.mentor ? "Voltou como mentor" : null,
                                ]
                                  .filter(Boolean)
                                  .join(" · ")}
                              </p>
                            ) : null}
                          </div>
                        </article>
                      </li>
                    );
                  })
                : [1, 2, 3].map((n) => (
                    <li key={n}>
                      <article className="h-full overflow-hidden rounded-3xl border border-line bg-white">
                        <Foto
                          slot={{
                            slot: `FOTO ALUMNI 0${n}`,
                            src: null,
                            alt: "",
                            pendente: "Alumni em destaque — pessoa a definir pela Bankers Academy",
                            ratio: "aspect-square",
                            ratioLabel: "1:1",
                          }}
                          sizes="(max-width: 640px) 92vw, 30vw"
                          rounded="rounded-none"
                        />
                        <div className="p-6">
                          <p className="text-sm leading-6 text-ink/60">
                            foto · nome · edição · destaque comprovado
                          </p>
                        </div>
                      </article>
                    </li>
                  ))}
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

              <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,19rem)_1fr] lg:gap-12">
                {/* [VÍDEO 06] O depoimento em vídeo abre a seção; enquanto
                    o arquivo não chega, o poster reservado ocupa o lugar. */}
                <VideoDepoimento
                  video={bootcampMedia.videoDepoimento}
                  className="mx-auto w-full max-w-[17rem] lg:mx-0 lg:max-w-none"
                />

              <ul className="grid content-start gap-5 md:grid-cols-2">
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
            </div>
          </section>
        ) : null}

        {/* ═══════════ G. DESDE 2018 — collage editorial ═══════════ */}
        <section aria-labelledby="hist-t" className="bg-surface py-20 lg:py-24">
          <div className={shell}>
            <p className={eyebrowLight}>Desde {ibbcFacts.firstEditionYear}</p>
            <h2 id="hist-t" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Uma experiência que evolui a cada edição.
            </h2>
            <p className="mt-5 max-w-2xl text-ink/70">
              {realizadas} edições realizadas, duas por ano — em janeiro e em
              julho.
              {proxima
                ? ` A próxima é o IBBC ${proxima.cohort}, em ${proxima.term.toLowerCase()} de ${proxima.year}.`
                : ""}
            </p>

            {/* [FOTO 08A–C] Da edição mais antiga para a mais recente —
                a collage deve ler como evolução histórica */}
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { rotulo: `Primeiras turmas`, foto: bootcampMedia.edicoes.antiga },
                { rotulo: "O programa crescendo", foto: bootcampMedia.edicoes.meio },
                { rotulo: "Edição recente", foto: bootcampMedia.edicoes.recente },
              ].map((e) => (
                <li key={e.foto.slot}>
                  <figure>
                    <Foto slot={e.foto} sizes="(max-width: 640px) 92vw, 31vw" rounded="rounded-2xl" />
                    <figcaption className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-ink/60">
                      {e.rotulo}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>

            <Link href="/bootcamp/edicoes" className={`${ctaSetaLight} mt-9`}>
              Ver edições anteriores
              <span aria-hidden="true" className={setaClasse}>→</span>
            </Link>
          </div>
        </section>

        {/* ═══════════ H. MENTORES — retratos ═══════════ */}
        <section aria-labelledby="ment-t" className="border-t border-line bg-surface-alt py-20 lg:py-24">
          <div className={shell}>
            <p className={eyebrowLight}>Mentoria</p>
            <h2 id="ment-t" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Aprenda com quem conhece o outro lado da mesa.
            </h2>

            {/* [FOTO MENTOR 01–03] Só mentores confirmados viram card —
                hoje, um. Os outros dois slots existem em _data/media.ts e
                entram quando a Bankers Academy confirmar as pessoas;
                nenhum card "a confirmar" vai ao ar. */}
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ibbcMentors.map((m) => (
                <li key={m.id}>
                  <article className="h-full overflow-hidden rounded-3xl border border-line bg-white">
                    {bootcampMedia.mentores[m.id] ? (
                      <Foto
                        slot={bootcampMedia.mentores[m.id]}
                        sizes="(max-width: 640px) 92vw, 30vw"
                        rounded="rounded-none"
                      />
                    ) : null}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{m.name}</h3>
                      <p className="mt-1 text-sm text-brand-deep">{m.role}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-ink/60">
              Com o apoio de mentores do time da SP Advisors, boa parte deles
              ex-campers do próprio programa.
            </p>

            <Link href="/bootcamp/mentores" className={`${ctaSetaLight} mt-7`}>
              Conheça os mentores
              <span aria-hidden="true" className={setaClasse}>→</span>
            </Link>
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

        {/* ═══════════ I. CTA FINAL — fechamento emocional ═══════════ */}
        <section aria-labelledby="cta-t" className="on-dark bg-ink text-center text-white">
          {/* [FOTO 10] A turma fechando a página; o véu escuro desce para
              a seção de texto e sobe do topo, integrando a foto ao ink */}
          <div className="relative">
            <Foto
              slot={bootcampMedia.ctaFinal}
              sizes="100vw"
              tone="dark"
              rounded="rounded-none"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"
            />
          </div>

          <div className={`${shell} pb-28 pt-16`}>
            <p className={eyebrow}>Investment Banking Boot Camp</p>

            <h2 id="cta-t" className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Você pode assistir de fora.
              <span className="block text-brand">Ou viver a experiência.</span>
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
                Quero participar do IBBC
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
