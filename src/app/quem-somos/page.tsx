import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/ui/Reveal";
import {
  historia,
  missao,
  parceiros,
  pilares,
  securatoIniciativas,
  securatoParagrafos,
  valores,
} from "@/data/quem-somos";
import { ibbcLinks } from "@/data/bootcamp/config";

const description =
  "A Bankers Academy nasceu para transformar conhecimento financeiro em oportunidade real de carreira. Conheça a missão, os valores, a história e as pessoas por trás da escola.";

export const metadata: Metadata = {
  title: "Quem Somos | Bankers Academy",
  description,
  alternates: { canonical: "/quem-somos" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Quem Somos | Bankers Academy",
    description,
  },
};

const shell = "mx-auto max-w-7xl px-6 lg:px-8";
const eyebrowDark = "text-sm font-semibold uppercase tracking-[0.3em] text-brand";
const eyebrowLight =
  "text-sm font-semibold uppercase tracking-[0.3em] text-brand-deep";
/* Sobre o verde da marca o texto é sempre ink — o verde é claro demais
   para carregar texto branco. */
const eyebrowOnBrand =
  "text-sm font-semibold uppercase tracking-[0.3em] text-ink/70";

export default function QuemSomosPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        {/* HERO — bloco em verde da marca, como no site */}
        <section className="bg-brand text-ink">
          <div className={`${shell} py-20 lg:py-28`}>
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className={eyebrowOnBrand}>Bankers Academy</p>
                <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Quem somos
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-ink/80 sm:text-xl">
                  A Bankers Academy nasceu para transformar conhecimento
                  financeiro em oportunidade real de carreira.
                </p>
              </div>

              <div className="lg:col-span-5">
                <Image
                  src="/images/quem-somos/equipe.png"
                  alt="Equipe da Bankers Academy"
                  width={685}
                  height={583}
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROPÓSITO · MISSÃO · VALORES */}
        <section aria-labelledby="proposito-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-20 lg:py-24`}>
            <Reveal>
              <p className={eyebrowDark}>Propósito</p>
              <h2
                id="proposito-t"
                className="mt-4 max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              >
                A Bankers Academy é impulsionada por um propósito claro:
                capacitar indivíduos e transformar vidas através da educação e
                do conhecimento.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div className="space-y-6 text-lg leading-8 text-white/70">
                  <p>
                    Ao longo dos anos, a Bankers Academy se consolidou como uma
                    marca que representa experiência, excelência e compromisso
                    com a formação de pessoas para o mercado financeiro. Nossa
                    atuação combina conhecimento técnico, visão prática e uma
                    comunidade voltada ao desenvolvimento de talentos.
                  </p>
                  <p>
                    Em sua essência, a Bankers Academy se baseia em três pilares
                    fundamentais: confiança, inovação e comunidade. Buscamos
                    tornar o aprendizado mais acessível, prático e relevante,
                    aproximando estudantes e profissionais das competências
                    exigidas pelo mercado financeiro.
                  </p>
                </div>

                <ul className="mt-10 flex flex-wrap gap-3">
                  {pilares.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Missão
                  </h3>
                  <p className="mt-4 text-balance text-2xl font-semibold leading-snug">
                    {missao}
                  </p>

                  <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Valores
                  </h3>
                  <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {valores.map((v) => (
                      <li
                        key={v}
                        className="flex gap-3 text-[15px] leading-6 text-white/75"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                        />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HISTÓRIA */}
        <section aria-labelledby="historia-t" className="bg-surface-alt">
          <div className={`${shell} py-20 lg:py-24`}>
            <Reveal>
              <p className={eyebrowLight}>Trajetória</p>
              <h2
                id="historia-t"
                className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Nossa História
                <span className="mt-2 block text-xl font-normal text-ink/55 sm:text-2xl">
                  Quase três décadas conectando educação, mercado e propósito.
                </span>
              </h2>
            </Reveal>

            <ol className="mt-14 space-y-px overflow-hidden rounded-3xl bg-line">
              {historia.map((m, i) => (
                <Reveal
                  as="li"
                  key={m.id}
                  delay={Math.min(i, 5) * 50}
                  className="block bg-white"
                >
                  <article className="grid gap-4 p-7 sm:grid-cols-12 sm:gap-8 lg:p-8">
                    <p className="sm:col-span-3 lg:col-span-2">
                      <span className="text-sm font-bold tabular-nums text-brand-deep">
                        {m.periodo}
                      </span>
                    </p>
                    <div className="sm:col-span-9 lg:col-span-10">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {m.titulo}
                      </h3>
                      <p className="mt-3 max-w-3xl text-pretty leading-7 text-ink/70">
                        {m.texto}
                      </p>
                      {m.id === "ibbc" ? (
                        <Link
                          href="/bootcamp"
                          className="mt-4 inline-flex py-1 text-sm font-semibold text-brand-deep transition-colors hover:text-ink"
                        >
                          Conheça o Investment Banking Boot Camp →
                        </Link>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SECURATO JR. */}
        <section
          aria-labelledby="securato-t"
          className="on-dark bg-ink text-white"
        >
          <div className={`${shell} py-20 lg:py-24`}>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <Image
                  src="/images/quem-somos/securato-jr.png"
                  alt="JR Securato Jr — fundador da Bankers Academy"
                  width={672}
                  height={704}
                  sizes="(max-width: 1024px) 80vw, 38vw"
                  className="h-auto w-full max-w-md"
                />
              </Reveal>

              <Reveal delay={100} className="lg:col-span-7">
                <p className={eyebrowDark}>Fundador</p>
                <h2
                  id="securato-t"
                  className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
                >
                  Conheça melhor o Securato Jr
                </h2>

                <div className="mt-8 space-y-5 text-lg leading-8 text-white/70">
                  {securatoParagrafos.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>

                <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Iniciativas relevantes
                </h3>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {securatoIniciativas.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-6 text-white/75"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={ibbcLinks.securatoLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex py-1 text-sm font-semibold text-brand transition-colors hover:text-white"
                >
                  LinkedIn ↗
                  <span className="sr-only"> de JR Securato Jr (abre em nova aba)</span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PARCEIROS */}
        <section aria-labelledby="parceiros-t" className="bg-surface">
          <div className={`${shell} py-20 lg:py-24`}>
            <Reveal>
              <p className={eyebrowLight}>Parceiros</p>
              <h2
                id="parceiros-t"
                className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Quem caminha com a gente
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                Organizações que caminham conosco na missão de transformar a
                educação financeira no Brasil.
              </p>
            </Reveal>

            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {parceiros.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.id}
                  delay={Math.min(i, 6) * 40}
                  className="block"
                >
                  <article className="h-full rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-lg hover:shadow-black/5">
                    <span
                      aria-hidden="true"
                      className="block h-1 w-8 rounded-full bg-brand-deep"
                    />
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">
                      {p.nome}
                    </h3>
                    <p className="mt-2.5 text-sm leading-6 text-ink/70">
                      {p.descricao}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA — bloco em verde da marca, fechando como no site */}
        <section aria-labelledby="cta-t" className="bg-brand text-ink">
          <div className={`${shell} py-20 text-center lg:py-24`}>
            <Reveal>
              <h2
                id="cta-t"
                className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Quer fazer parte dessa jornada?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-ink/75">
                Conheça os cursos, programas e iniciativas da Bankers Academy e
                dê o próximo passo na sua formação para o mercado financeiro.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/bootcamp"
                  className="rounded-full bg-ink px-8 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  Conhecer o Boot Camp
                </Link>
                <a
                  href={ibbcLinks.coursePage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/25 px-8 py-4 font-semibold text-ink transition hover:bg-ink hover:text-white"
                >
                  Ver todos os cursos
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
