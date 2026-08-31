import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/ui/Reveal";
import BrandMark from "@/components/ui/BrandMark";
import HubCards from "./_components/HubCards";
import {
  btnOutline,
  btnSolid,
  eyeBrand,
  eyeDark,
  eyeLight,
  shell,
} from "./_components/estilos";

import {
  autoridade,
  heroFoto,
  heroTexto,
  heroTitulo,
  links,
  missao,
  pilares,
  porqueSubtitulo,
  porqueTitulo,
  rotas,
  securatoCargo,
  securatoFotoRecorte,
  securatoNome,
  securatoResumo,
} from "@/data/quem-somos";

const description =
  "Formação prática em mercado financeiro. Conheça a história, a liderança, os especialistas e o ecossistema da Bankers Academy.";

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

/**
 * Página-hub.
 *
 * Curta de propósito: apresenta a escola, oferece as quatro portas e sai
 * da frente. História, liderança, especialistas e ecossistema — que antes
 * viviam nesta mesma rolagem — passaram para as páginas irmãs em
 * ./historia, ./lideranca, ./especialistas e ./ecossistema. Nada foi
 * descartado no caminho.
 */
export default function QuemSomosPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        {/* ═══════════ HERO ═══════════ */}
        <section className="bg-brand text-ink">
          <div className={`${shell} pb-16 pt-20 lg:pb-20 lg:pt-28`}>
            <p className={eyeBrand}>Quem somos</p>
            <h1 className="mt-6 max-w-4xl text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {heroTitulo.map((linha) => (
                <span key={linha} className="block">
                  {linha}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-ink/80 sm:text-xl">
              {heroTexto}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#conheca-t" className={btnSolid}>
                Conheça a escola
              </Link>
              <Link href={rotas.lideranca} className={btnOutline}>
                Quem está por trás
              </Link>
            </div>
          </div>

          {/* Fotografia institucional de ponta a ponta */}
          <Image
            src={heroFoto.src}
            alt={heroFoto.alt}
            width={heroFoto.width}
            height={heroFoto.height}
            priority
            sizes="100vw"
            className="h-[52vw] max-h-[640px] min-h-[240px] w-full object-cover"
          />
        </section>

        {/* Barra de autoridade */}
        <section aria-label="Números da Bankers Academy" className="on-dark bg-ink text-white">
          <div className={shell}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 lg:grid-cols-4">
              {autoridade.map((c) => (
                <div key={c.id}>
                  <dt className="sr-only">{c.rotulo}</dt>
                  <dd>
                    <span className="block text-4xl font-semibold tracking-tight text-brand sm:text-5xl">
                      {c.valor}
                    </span>
                    <span className="mt-3 block max-w-[14rem] text-sm leading-snug text-white/60">
                      {c.rotulo}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ═══════════ POR QUE EXISTIMOS ═══════════
            Os três pilares vinham em blocos altos separados por régua, um
            embaixo do outro. Numa página-hub isso é rolagem cara: viraram
            três colunas, mesmo texto, altura de uma tela. */}
        <section aria-labelledby="porque-t" className="bg-surface">
          <div className={`${shell} py-24 lg:py-28`}>
            <Reveal>
              <BrandMark className="h-11 w-11" />
              <h2
                id="porque-t"
                className="mt-10 max-w-4xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl"
              >
                {porqueTitulo}
              </h2>
              <p className="mt-6 text-2xl font-semibold text-brand-deep sm:text-3xl">
                {porqueSubtitulo}
              </p>
            </Reveal>

            <dl className="mt-16 grid gap-x-10 gap-y-12 border-t border-line pt-12 md:grid-cols-3">
              {pilares.map((p, i) => (
                <Reveal key={p.id} delay={i * 70}>
                  <dt className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {p.palavra}
                  </dt>
                  <dd className="mt-3 text-pretty leading-7 text-ink/70">{p.texto}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ═══════════ AS QUATRO PORTAS ═══════════ */}
        <HubCards />

        {/* ═══════════ SECURATO JR — APRESENTAÇÃO CURTA ═══════════
            Só o suficiente para saber quem fundou a escola. O perfil
            completo, com credenciais e LinkedIn, está em ./lideranca. */}
        <section aria-labelledby="fundador-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-24 lg:py-28`}>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
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
                    sizes="(max-width: 1024px) 70vw, 32vw"
                    className="relative mx-auto h-auto w-full max-w-xs"
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
                <Link
                  href={rotas.lideranca}
                  className="group mt-8 inline-flex items-center gap-2 py-2 text-sm font-bold uppercase tracking-[0.08em] text-brand underline decoration-brand/40 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                >
                  Perfil completo e liderança
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

        {/* ═══════════ MISSÃO ═══════════ */}
        <section aria-labelledby="missao-t" className="bg-surface-alt">
          <div className={`${shell} py-20 lg:py-24`}>
            <Reveal>
              <h2 id="missao-t" className={eyeLight}>
                Missão
              </h2>
              <p className="mt-6 max-w-4xl text-balance text-2xl font-semibold leading-snug sm:text-4xl">
                {missao}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ CTA FINAL ═══════════ */}
        <section aria-labelledby="cta-t" className="bg-brand text-ink">
          <div className={`${shell} py-24 text-center lg:py-32`}>
            <Reveal>
              <h2
                id="cta-t"
                className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Sua carreira pode ser o próximo capítulo.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-8 text-ink/75">
                Conheça as iniciativas da Bankers Academy e escolha por onde
                começar.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={rotas.ecossistema} className={`${btnSolid} px-8`}>
                  Ver as iniciativas
                </Link>
                <Link href={links.bootcamp} className={`${btnOutline} px-8`}>
                  Conheça o Boot Camp
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
