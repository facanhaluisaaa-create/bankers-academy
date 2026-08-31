import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/ui/Reveal";
import SubHero from "../_components/SubHero";
import { eyeDark, eyeLight, shell } from "../_components/estilos";

import {
  fundadorTitulo,
  links,
  ponte2018,
  qsMedia,
  rotas,
  securatoCargo,
  securatoConselhos,
  securatoDestaques,
  securatoFormacao,
  securatoTransacoes,
  securatoFotoRecorte,
  securatoIniciativas,
  securatoNome,
  securatoPilares,
  securatoResumo,
  securatoResumo2,
  securatoTrajetoria,
} from "@/data/quem-somos";

const description =
  "José Roberto Securato Junior: PhD em Finanças, mais de 20 anos de mercado, Deutsche Bank e BNP Paribas, fundador da SP Advisors, da SP Capital Partners e da Bankers Academy.";

export const metadata: Metadata = {
  title: "José Roberto Securato Junior | Bankers Academy",
  description,
  alternates: { canonical: "/quem-somos/fundador" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "José Roberto Securato Junior | Bankers Academy",
    description,
  },
};

/**
 * A página dedicada do fundador — o lugar mais detalhado do site sobre
 * ele. Cada informação vem da seção "Sobre o fundador" do mapa de
 * conteúdo ou do texto publicado no site da escola; nada foi acrescentado
 * por conta própria, e linha sem ano no material fica sem ano aqui.
 */
export default function FundadorPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrow="Fundador"
          titulo={fundadorTitulo}
          texto={`${securatoNome}, ${securatoCargo}.`}
        />

        {/* ═══════════ APRESENTAÇÃO ═══════════ */}
        <section aria-labelledby="perfil-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-24 lg:py-28`}>
            <h2 id="perfil-t" className="sr-only">
              Perfil de {securatoNome}
            </h2>

            {/* A fotografia grande dele ensinando */}
            <Reveal>
              {qsMedia.fundadorAula.src ? (
                <Image
                  src={qsMedia.fundadorAula.src}
                  alt={qsMedia.fundadorAula.alt}
                  width={1086}
                  height={1448}
                  priority
                  sizes="(max-width: 1024px) 92vw, 1216px"
                  className="max-h-[620px] w-full rounded-3xl object-cover"
                  style={{ objectPosition: qsMedia.fundadorAula.position ?? "50% 50%" }}
                />
              ) : null}
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-7">
                <p className={eyeDark}>Quem é</p>
                <p className="mt-6 max-w-2xl text-pretty text-xl leading-9 text-white/80">
                  {securatoResumo}
                </p>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-white/70">
                  {securatoResumo2}
                </p>
                <a
                  href={links.securatoLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-1 py-2 text-sm font-semibold text-brand underline decoration-brand/40 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                >
                  LinkedIn ↗
                  <span className="sr-only"> de {securatoNome} (abre em nova aba)</span>
                </a>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-5">
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
                    sizes="(max-width: 1024px) 70vw, 30vw"
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
            </div>

            {/* Destaques */}
            <Reveal>
              <dl className="mt-14 grid gap-x-8 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
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
        </section>

        {/* ═══════════ TRAJETÓRIA ═══════════ */}
        <section aria-labelledby="trajetoria-t" className="bg-surface-alt">
          <div className={`${shell} py-20 lg:py-28`}>
            <Reveal>
              <p className={eyeLight}>Trajetória</p>
              <h2
                id="trajetoria-t"
                className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
              >
                Do outro lado da mesa à sala de aula.
              </h2>
            </Reveal>

            <ol className="relative mt-14">
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-[11px] top-2 w-px bg-line"
              />
              {securatoTrajetoria.map((m, i) => (
                <Reveal as="li" key={m.id} delay={Math.min(i, 5) * 50} className="block">
                  <article className="relative flex gap-6 pb-11 last:pb-0 sm:gap-8">
                    <span
                      aria-hidden="true"
                      className={`mt-1 block h-[23px] w-[23px] shrink-0 rounded-full border-2 ${
                        i === securatoTrajetoria.length - 1
                          ? "border-brand-deep bg-brand"
                          : "border-line bg-white"
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-deep">
                        {m.periodo}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                        {m.titulo}
                      </h3>
                      <p className="mt-2 max-w-2xl leading-7 text-ink/70">{m.texto}</p>
                      {m.id === "livro" && qsMedia.livro.src ? (
                        <Image
                          src={qsMedia.livro.src}
                          alt={qsMedia.livro.alt}
                          width={1170}
                          height={1462}
                          sizes="(max-width: 768px) 80vw, 360px"
                          className="mt-5 w-full max-w-[22rem] rounded-2xl"
                        />
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══════════ TRANSAÇÕES E FORMAÇÃO ═══════════
            Direto do perfil publicado por ele: a autoridade em números
            e nomes que o mercado reconhece. */}
        <section aria-labelledby="transacoes-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-20 lg:py-24`}>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <p className={eyeDark}>Transações selecionadas</p>
                <h2 id="transacoes-t" className="sr-only">
                  Transações selecionadas e formação
                </h2>
                <ul className="mt-8 space-y-4">
                  {securatoTransacoes.map((t) => (
                    <li key={t} className="flex gap-3 leading-7 text-white/75">
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={80}>
                <p className={eyeDark}>Formação</p>
                <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                  {securatoFormacao.map((f) => (
                    <li key={f.id} className="flex flex-wrap items-baseline gap-x-3 py-4">
                      <span className="font-semibold tracking-tight">{f.curso}</span>
                      <span className="text-sm text-white/60">
                        {f.escola}, {f.periodo}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════ INICIATIVAS E CONSELHOS ═══════════ */}
        <section aria-labelledby="inic-t" className="border-y border-line bg-surface">
          <div className={`${shell} py-20 lg:py-24`}>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <p className={eyeLight}>Iniciativas que criou</p>
                <h2 id="inic-t" className="sr-only">
                  Iniciativas educacionais e conselhos
                </h2>
                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {securatoIniciativas.map((ini) => (
                    <li key={ini.id} className="flex flex-wrap items-baseline gap-x-3 py-4">
                      <span className="font-semibold tracking-tight">{ini.nome}</span>
                      {ini.desc ? (
                        <span className="text-sm text-ink/60">{ini.desc}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={80}>
                <p className={eyeLight}>Conselhos</p>
                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {securatoConselhos.map((c) => (
                    <li key={c.id} className="py-4">
                      <p className="font-semibold tracking-tight">
                        {c.empresa}
                        <span className="ml-2 text-sm font-normal text-ink/60">
                          {c.desde}
                        </span>
                      </p>
                      <p className="mt-1 text-sm text-ink/60">{c.desc}</p>
                    </li>
                  ))}
                </ul>

                <p className={`${eyeLight} mt-12`}>Mais do que uma trajetória de mercado</p>
                <dl className="mt-6 space-y-5">
                  {securatoPilares.map((pilar) => (
                    <div key={pilar.id}>
                      <dt className="text-lg font-semibold uppercase tracking-tight">
                        {pilar.palavra}
                      </dt>
                      <dd className="mt-1 leading-7 text-ink/70">{pilar.texto}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════ PONTE 2018 → BOOTCAMP ═══════════ */}
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
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={ponte2018.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.6)] active:translate-y-0 active:shadow-none"
                >
                  {ponte2018.cta}
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href={rotas.lideranca}
                  className="inline-flex items-center justify-center rounded-full border border-ink/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white active:translate-y-0"
                >
                  Conheça toda a liderança
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
