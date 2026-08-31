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
  galeriaCultura,
  lideranca,
  links,
  rotas,
  securatoCargo,
  securatoCredenciais,
  securatoFotoRecorte,
  securatoNome,
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

        {/* ═══════════ FUNDADOR ═══════════ */}
        <section aria-labelledby="fundador-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-24 lg:py-32`}>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-6 bottom-0 top-16 rounded-full bg-brand/12 blur-3xl"
                  />
                  <Image
                    src={securatoFotoRecorte.src}
                    alt={`Retrato de ${securatoNome}`}
                    width={securatoFotoRecorte.width}
                    height={securatoFotoRecorte.height}
                    priority
                    sizes="(max-width: 1024px) 70vw, 34vw"
                    className="relative mx-auto h-auto w-full max-w-sm"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, #000 82%, transparent 99%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, #000 82%, transparent 99%)",
                    }}
                  />
                </div>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-7">
                <p className={eyeDark}>O fundador</p>
                <h2
                  id="fundador-t"
                  className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  {securatoNome}
                </h2>
                <p className="mt-2 text-brand">{securatoCargo}</p>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/70">
                  {securatoResumo}
                </p>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-white/70">
                  {securatoResumo2}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {securatoCredenciais.map((c) => (
                    <li
                      key={c.id}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/80"
                    >
                      {c.valor}
                      <span className="font-normal text-white/55"> · {c.rotulo}</span>
                    </li>
                  ))}
                </ul>

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
            </div>
          </div>
        </section>

        {/* ═══════════ SÓCIOS E LIDERANÇA ═══════════
            Cards com o retrato grande: numa página dedicada, o rosto pode
            ter o tamanho que a faixa apertada do hub não dava. */}
        <section aria-labelledby="socios-t" className="bg-surface">
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

            <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {lideranca.map((l, i) => (
                <Reveal as="li" key={l.id} delay={i * 70} className="block">
                  <article className="h-full overflow-hidden rounded-3xl border border-line bg-white">
                    {l.foto ? (
                      <Image
                        src={l.foto}
                        alt={`Retrato de ${l.nome}`}
                        width={800}
                        height={800}
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                        className="aspect-square w-full object-cover"
                      />
                    ) : (
                      <AssetPlaceholder
                        label={`Retrato de ${l.nome}`}
                        ratio="aspect-square"
                        className="w-full rounded-none border-0"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold tracking-tight">{l.nome}</h3>
                      <p className="mt-1 text-sm text-ink/60">{l.cargo}</p>
                      {l.linkedin ? (
                        <a
                          href={l.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1 py-1 text-sm font-semibold text-brand-deep underline decoration-brand-deep/35 decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
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
        <section aria-labelledby="cultura-t" className="bg-surface-alt">
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
