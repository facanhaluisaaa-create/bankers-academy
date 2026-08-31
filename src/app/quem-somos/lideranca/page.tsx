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
  qsMedia,
  rotas,
  securatoCargo,
  securatoNome,
  securatoResumo,
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

        {/* ═══════════ FUNDADOR — bloco médio ═══════════
            A liderança apresenta todo mundo; o mergulho detalhado no
            fundador vive na página própria dele (../fundador). */}
        <section aria-labelledby="fundador-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-24 lg:py-28`}>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                {qsMedia.fundadorAula.src ? (
                  <Image
                    src={qsMedia.fundadorAula.src}
                    alt={qsMedia.fundadorAula.alt}
                    width={1086}
                    height={1448}
                    sizes="(max-width: 1024px) 92vw, 40vw"
                    className="aspect-[4/3] w-full rounded-3xl object-cover lg:aspect-[4/5]"
                    style={{ objectPosition: qsMedia.fundadorAula.position ?? "50% 50%" }}
                  />
                ) : null}
              </Reveal>

              <Reveal delay={100} className="lg:col-span-7">
                <p className={eyeDark}>Fundador</p>
                <h2
                  id="fundador-t"
                  className="mt-5 max-w-xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
                >
                  {fundadorTitulo}
                </h2>
                <p className="mt-5 text-lg font-semibold text-brand">{securatoNome}</p>
                <p className="mt-1 text-sm text-white/60">{securatoCargo}</p>
                <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-white/70">
                  {securatoResumo}
                </p>
                <Link
                  href={rotas.fundador}
                  className="group mt-7 inline-flex items-center gap-2 py-2 text-sm font-bold uppercase tracking-[0.08em] text-brand underline decoration-brand/40 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                >
                  Perfil completo do fundador
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            </div>
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
