import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/ui/Reveal";
import AssetPlaceholder from "@/components/ui/AssetPlaceholder";
import SubHero from "../_components/SubHero";
import { btnSolid, eyeDark, eyeLight, shell } from "../_components/estilos";

import {
  equipeExecucao,
  fundadorTitulo,
  galeriaCultura,
  lideranca,
  links,
  ponte2018,
  rotas,
  securatoCargo,
  securatoDestaques,
  securatoFotoAula,
  securatoNome,
  securatoPilares,
  securatoResumo,
  securatoResumo2,
  valores,
} from "@/data/quem-somos";

const description =
  "José Roberto Securato Junior, os sócios e o time por trás da Bankers Academy — quem executou transações antes de ensinar sobre elas.";

export const metadata: Metadata = {
  title: "Liderança | Bankers Academy",
  description,
  alternates: { canonical: "/quem-somos/lideranca" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Liderança | Bankers Academy",
    description,
  },
};

/**
 * Quem está por trás da escola: o fundador com protagonismo, os sócios em
 * cards, o time de execução e a cultura — tudo que era das seções
 * "Liderança" e "Equipe & Cultura" do /quem-somos antigo. Cargos vêm de
 * src/data/quem-somos.ts e de lá não saem: nada de inventar título.
 */
export default function LiderancaPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrow="Liderança"
          titulo="Quem conhece o outro lado da mesa."
          texto="Uma escola fundada e conduzida por quem viveu o mercado antes de ensiná-lo."
        />

        {/* ═══════════ FUNDADOR — seção editorial ═══════════
            A escola apresenta o fundador como a principal autoridade, sem
            virar site pessoal: fotografia grande dele ensinando, texto
            curto e os destaques confirmados. Depois vêm os pilares, a
            ponte para 2018 e — menores — os sócios. */}
        <section aria-labelledby="fundador-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-24 lg:py-32`}>
            <Reveal>
              <p className={eyeDark}>Fundador</p>
              <h2
                id="fundador-t"
                className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl"
              >
                {fundadorTitulo}
              </h2>
              <p className="mt-6 text-xl font-semibold text-brand sm:text-2xl">
                {securatoNome}
              </p>
              <p className="mt-1 text-white/60">{securatoCargo}</p>
            </Reveal>

            {/* A fotografia dele ensinando, com protagonismo — não é card */}
            <Reveal>
              <Image
                src={securatoFotoAula.src}
                alt={securatoFotoAula.alt}
                width={securatoFotoAula.width}
                height={securatoFotoAula.height}
                sizes="(max-width: 1024px) 92vw, 1216px"
                className="mt-14 max-h-[720px] w-full rounded-3xl object-cover"
                style={{ objectPosition: "50% 38%" }}
              />
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-6">
                <p className="max-w-xl text-pretty text-lg leading-8 text-white/70">
                  {securatoResumo}
                </p>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-white/70">
                  {securatoResumo2}
                </p>
                <a
                  href={links.securatoLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-1 py-2 text-sm font-semibold text-brand underline decoration-brand/40 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                >
                  LinkedIn ↗
                  <span className="sr-only"> de {securatoNome} (abre em nova aba)</span>
                </a>
              </Reveal>

              {/* Destaques visuais — só o confirmado no material */}
              <Reveal delay={100} className="lg:col-span-6">
                <dl className="grid gap-x-8 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-2">
                  {securatoDestaques.map((d) => (
                    <div key={d.id}>
                      <dt className="sr-only">{d.rotulo}</dt>
                      <dd>
                        <span className="block text-xl font-semibold tracking-tight text-brand">
                          {d.valor}
                        </span>
                        <span className="mt-1 block text-sm leading-snug text-white/60">
                          {d.rotulo}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════ MAIS DO QUE UMA TRAJETÓRIA DE MERCADO ═══════════ */}
        <section aria-labelledby="pilares-t" className="bg-surface">
          <div className={`${shell} py-20 lg:py-24`}>
            <Reveal>
              <p className={eyeLight}>Mais do que uma trajetória de mercado</p>
              <h2 id="pilares-t" className="sr-only">
                Mais do que uma trajetória de mercado
              </h2>
            </Reveal>
            <dl className="mt-10 grid gap-x-10 gap-y-10 border-t border-line pt-10 md:grid-cols-3">
              {securatoPilares.map((pilar, i) => (
                <Reveal key={pilar.id} delay={i * 70}>
                  <dt className="text-2xl font-semibold uppercase tracking-tight">
                    {pilar.palavra}
                  </dt>
                  <dd className="mt-3 leading-7 text-ink/70">{pilar.texto}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ═══════════ PONTE PARA 2018 ═══════════
            O mesmo fato do marco da linha do tempo, contado do ponto de
            vista do fundador. Rota real para /bootcamp, sem âncora. */}
        <section aria-labelledby="ponte-t" className="bg-brand text-ink">
          <div className={`${shell} py-20 text-center lg:py-24`}>
            <Reveal>
              <p className="text-6xl font-semibold tracking-tight sm:text-7xl">
                {ponte2018.ano}
              </p>
              <h2
                id="ponte-t"
                className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
              >
                {ponte2018.titulo}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-8 text-ink/75">
                {ponte2018.texto}
              </p>
              <div className="mt-9">
                <Link
                  href={ponte2018.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.6)] active:translate-y-0 active:shadow-none"
                >
                  {ponte2018.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ SÓCIOS E LIDERANÇA ═══════════
            Cards com o retrato grande: numa página dedicada, o rosto pode
            ter o tamanho que a faixa apertada do hub não dava. */}
        <section aria-labelledby="socios-t" className="bg-surface-alt">
          <div className={`${shell} py-24 lg:py-28`}>
            <Reveal>
              <p className={eyeLight}>Sócios e liderança</p>
              <h2
                id="socios-t"
                className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Quem conduz a escola no dia a dia.
              </h2>
            </Reveal>

            {/* Cards deliberadamente menores que a seção do fundador:
                retrato compacto ao lado do nome, sem bloco de foto grande */}
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {lideranca.map((l, i) => (
                <Reveal as="li" key={l.id} delay={i * 70} className="block">
                  <article className="flex h-full items-center gap-5 rounded-3xl border border-line bg-white p-5">
                    {l.foto ? (
                      <Image
                        src={l.foto}
                        alt={`Retrato de ${l.nome}`}
                        width={200}
                        height={200}
                        sizes="96px"
                        className="h-24 w-24 shrink-0 rounded-2xl object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="h-24 w-24 shrink-0 rounded-2xl border border-dashed border-ink/25 bg-surface-alt"
                      />
                    )}
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-tight tracking-tight">
                        {l.nome}
                      </h3>
                      <p className="mt-1 text-sm text-ink/60">{l.cargo}</p>
                      {l.linkedin ? (
                        <a
                          href={l.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 py-1 text-sm font-semibold text-brand-deep underline decoration-brand-deep/35 decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                        >
                          LinkedIn ↗
                          <span className="sr-only"> de {l.nome} (abre em nova aba)</span>
                        </a>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══════════ EQUIPE & CULTURA ═══════════ */}
        <section aria-labelledby="cultura-t" className="bg-surface">
          <div className={`${shell} py-24 lg:py-28`}>
            <Reveal>
              <p className={eyeLight}>Equipe &amp; cultura</p>
              <h2
                id="cultura-t"
                className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl"
              >
                Uma escola feita por quem viveu o mercado.
              </h2>
            </Reveal>

            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galeriaCultura.map((f, i) => (
                <Reveal
                  as="li"
                  key={f.id}
                  delay={Math.min(i, 5) * 50}
                  className={`block ${f.larga ? "sm:col-span-2" : ""}`}
                >
                  {f.src ? (
                    <Image
                      src={f.src}
                      alt={f.alt}
                      width={1536}
                      height={1024}
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                      /* `inteira`: a foto aparece completa, sem corte — a
                         célula assume a proporção dela. As demais seguem
                         preenchendo a célula com object-cover. */
                      className={
                        f.inteira
                          ? "h-auto w-full rounded-2xl"
                          : "h-full w-full rounded-2xl object-cover"
                      }
                    />
                  ) : (
                    <AssetPlaceholder
                      label={f.pendente ?? f.alt}
                      ratio="aspect-[4/3]"
                      className="h-full w-full"
                    />
                  )}
                </Reveal>
              ))}
            </ul>

            <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
                  Time de execução
                </h3>
                <p className="mt-4 text-pretty leading-7 text-ink/75">
                  {equipeExecucao.join(" · ")}
                </p>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
                  Valores
                </h3>
                <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                  {valores.map((v) => (
                    <li key={v} className="flex gap-3 text-[15px] leading-6 text-ink/80">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-deep"
                      />
                      {v}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Próxima porta */}
        <section aria-labelledby="lid-cta-t" className="bg-brand text-ink">
          <div className={`${shell} py-20 text-center lg:py-24`}>
            <Reveal>
              <h2
                id="lid-cta-t"
                className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
              >
                E quem dá aula?
              </h2>
              <div className="mt-8">
                <Link href={rotas.especialistas} className={btnSolid}>
                  Conheça os especialistas
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
