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

import AssetPlaceholder from "@/components/ui/AssetPlaceholder";
import {
  autoridade,
  comunidadeTexto,
  comunidadeTitulo,
  ecossistemaPrevia,
  fundadorTitulo,
  heroTexto,
  heroTitulo,
  missao,
  pilares,
  links,
  ponteHub,
  porqueSubtitulo,
  porqueTitulo,
  qsMedia,
  rotas,
  securatoCargo,
  securatoDestaques,
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

          {/* Fotografia institucional de ponta a ponta — o cliente indicou
              o arquivo 0156.jpg para cá; até chegar, fica a equipe.jpg */}
          {qsMedia.hero.src ? (
            <Image
              src={qsMedia.hero.src}
              alt={qsMedia.hero.alt}
              width={2000}
              height={1333}
              priority
              sizes="100vw"
              className="h-[52vw] max-h-[640px] min-h-[240px] w-full object-cover"
            />
          ) : null}
        </section>

        {/* ═══════════ FUNDADOR — ATALHO CLICÁVEL, LOGO NO INÍCIO ═══════════
            Pedido do cliente: já na abertura, um lugar para clicar e
            saber mais sobre o Securato. O cartão inteiro é o link. */}
        <section aria-label="Sobre o fundador" className="on-dark bg-ink text-white">
          <div className={`${shell} pt-10`}>
            <Link
              href={rotas.fundador}
              className="group flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-white/[0.07] hover:shadow-[0_18px_44px_-18px_rgba(0,0,0,0.7)] active:translate-y-0 sm:flex-row sm:items-center sm:gap-8 sm:p-7"
            >
              <Image
                src={securatoFotoRecorte.src}
                alt=""
                width={securatoFotoRecorte.width}
                height={securatoFotoRecorte.height}
                sizes="112px"
                className="h-28 w-28 shrink-0 self-center rounded-2xl bg-white/[0.06] object-cover object-top sm:self-auto"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  Fundador
                </span>
                <span className="mt-2 block text-xl font-semibold tracking-tight sm:text-2xl">
                  {securatoNome}
                </span>
                <span className="mt-1 block text-sm leading-snug text-white/60">
                  PhD em Finanças · +20 anos de mercado · Deutsche Bank e BNP
                  Paribas · SP Advisors e SP Capital Partners
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-brand">
                Saiba mais sobre ele
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </div>
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

        {/* ═══════════ FUNDADOR — uma das maiores seções da página ═══════════
            Bankers Academy → Securato Jr. como principal autoridade →
            história → liderança. Fotografia grande dele ensinando,
            destaques confirmados e a trajetória completa em ./lideranca. */}
        <section aria-labelledby="fundador-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-24 lg:py-28`}>
            <Reveal>
              <p className={eyeDark}>Fundador</p>
              <h2
                id="fundador-t"
                className="mt-5 max-w-4xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl"
              >
                {fundadorTitulo}
              </h2>
              <p className="mt-5 text-lg font-semibold text-brand sm:text-xl">
                {securatoNome}
              </p>
              <p className="mt-1 text-sm text-white/60">{securatoCargo}</p>
            </Reveal>

            {/* A fotografia grande dele ensinando — o cliente indicou
                SECURATO_aula_melhorada; até chegar, a aula-securato.jpg */}
            <Reveal>
              {qsMedia.fundadorAula.src ? (
                <Image
                  src={qsMedia.fundadorAula.src}
                  alt={qsMedia.fundadorAula.alt}
                  width={1086}
                  height={1448}
                  sizes="(max-width: 1024px) 92vw, 1216px"
                  className="mt-12 max-h-[600px] w-full rounded-3xl object-cover"
                  style={{ objectPosition: qsMedia.fundadorAula.position ?? "50% 50%" }}
                />
              ) : (
                <AssetPlaceholder
                  tone="dark"
                  label={`Securato Jr. ensinando — arquivo ${qsMedia.fundadorAula.arquivoEsperado}`}
                  ratio="aspect-[21/9]"
                  className="mt-12 w-full"
                />
              )}
            </Reveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <p className="max-w-xl text-pretty text-lg leading-8 text-white/70">
                  {securatoResumo}
                </p>
                <Link
                  href={rotas.fundador}
                  className="group mt-7 inline-flex items-center gap-2 py-2 text-sm font-bold uppercase tracking-[0.08em] text-brand underline decoration-brand/40 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                >
                  Conheça a trajetória
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </Reveal>

              {/* Destaques curtos — credenciais já confirmadas no projeto */}
              <Reveal delay={100} className="lg:col-span-7">
                <dl className="grid gap-x-8 gap-y-7 border-t border-white/15 pt-7 sm:grid-cols-2 lg:grid-cols-3">
                  {securatoDestaques.map((d) => (
                    <div key={d.id}>
                      <dt className="sr-only">{d.rotulo}</dt>
                      <dd>
                        <span className="block font-semibold tracking-tight text-brand">
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

        {/* ═══════════ PONTE HISTÓRICA — 2018 ═══════════ */}
        <section aria-labelledby="ponte-t" className="bg-brand text-ink">
          <div className={`${shell} py-20 lg:py-24`}>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className="lg:col-span-6">
                <p className={eyeBrand}>{ponteHub.eyebrow}</p>
                <h2
                  id="ponte-t"
                  className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl"
                >
                  {ponteHub.titulo.map((linha) => (
                    <span key={linha} className="block">
                      {linha}
                    </span>
                  ))}
                </h2>
                <p className="mt-5 max-w-xl text-pretty leading-8 text-ink/75">
                  {ponteHub.texto}
                </p>
                <div className="mt-8">
                  <Link
                    href={ponteHub.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.6)] active:translate-y-0 active:shadow-none"
                  >
                    {ponteHub.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>

              {/* Fotografia real de aula/treinamento — arquivo indicado
                  pelo cliente ainda não recebido */}
              <Reveal delay={80} className="lg:col-span-6">
                {qsMedia.ponteAula.src ? (
                  <Image
                    src={qsMedia.ponteAula.src}
                    alt={qsMedia.ponteAula.alt}
                    width={1600}
                    height={1067}
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="aspect-[4/3] w-full rounded-3xl object-cover"
                    style={{ objectPosition: qsMedia.ponteAula.position ?? "50% 50%" }}
                  />
                ) : (
                  <AssetPlaceholder
                    label={`Aula do Boot Camp — arquivo ${qsMedia.ponteAula.arquivoEsperado}`}
                    ratio="aspect-[4/3]"
                    className="w-full"
                  />
                )}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════ COMUNIDADE ═══════════ */}
        <section aria-labelledby="comunidade-t" className="bg-surface">
          <div className={`${shell} py-20 lg:py-24`}>
            <Reveal>
              <p className={eyeLight}>Comunidade</p>
              <h2
                id="comunidade-t"
                className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
              >
                {comunidadeTitulo.map((linha) => (
                  <span key={linha} className="block">
                    {linha}
                  </span>
                ))}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-ink/70">
                {comunidadeTexto}
              </p>
            </Reveal>

            {/* Fotografia grande de turma — o cliente indicou _M3A1784.jpg;
                até chegar, fica a turma.jpg */}
            <Reveal>
              {qsMedia.comunidade.src ? (
                <Image
                  src={qsMedia.comunidade.src}
                  alt={qsMedia.comunidade.alt}
                  width={2000}
                  height={1095}
                  sizes="(max-width: 1024px) 92vw, 1216px"
                  className="mt-10 max-h-[560px] w-full rounded-3xl object-cover"
                />
              ) : (
                <AssetPlaceholder
                  label={`Turma/equipe — arquivo ${qsMedia.comunidade.arquivoEsperado}`}
                  ratio="aspect-[16/9]"
                  className="mt-10 w-full"
                />
              )}
            </Reveal>
          </div>
        </section>

        {/* ═══════════ AS QUATRO PORTAS ═══════════ */}
        <HubCards />

        {/* ═══════════ ECOSSISTEMA (prévia) ═══════════
            Só alguns nomes confirmados — o catálogo completo, com os
            links de cada programa, vive em ./ecossistema */}
        <section aria-labelledby="ecoprev-t" className="border-t border-line bg-surface">
          <div className={`${shell} py-16 lg:py-20`}>
            <p className={eyeLight}>Ecossistema</p>
            <h2
              id="ecoprev-t"
              className="mt-4 max-w-2xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Muitas portas. Um mesmo objetivo.
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {ecossistemaPrevia.map((nome) => (
                <li
                  key={nome}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink/80"
                >
                  {nome}
                </li>
              ))}
              <li className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-ink">
                e mais
              </li>
            </ul>
            <Link
              href={rotas.ecossistema}
              className="group mt-8 inline-flex items-center gap-2 py-2 text-sm font-bold uppercase tracking-[0.08em] text-brand-deep underline decoration-brand-deep/35 decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              Explore o ecossistema
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
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
          {/* Fechamento/cultura — 0158.jpg (cultura-time.jpg): editorial de
              comunidade na largura do bloco, proporção natural do recorte
              para nenhum rosto ser cortado de novo, cantos arredondados,
              sem caixa nem véu por cima. */}
          {qsMedia.cultura.src ? (
            <div className={`${shell} pt-16`}>
              <Image
                src={qsMedia.cultura.src}
                alt={qsMedia.cultura.alt}
                width={2200}
                height={1455}
                sizes="(max-width: 1024px) 92vw, 1216px"
                className="h-auto w-full rounded-3xl"
              />
            </div>
          ) : (
            <div className={`${shell} pt-16`}>
              <AssetPlaceholder
                label={`Fechamento/cultura — arquivo ${qsMedia.cultura.arquivoEsperado}`}
                ratio="aspect-[21/9]"
                className="w-full"
              />
            </div>
          )}
          <div className={`${shell} py-24 text-center lg:py-28`}>
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
