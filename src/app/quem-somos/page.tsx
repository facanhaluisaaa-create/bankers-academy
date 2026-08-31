import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/ui/Reveal";
import AssetPlaceholder from "@/components/ui/AssetPlaceholder";
import BrandMark from "@/components/ui/BrandMark";
import Timeline from "./_components/Timeline";

import {
  autoridade,
  comoEnsinamos,
  equipeExecucao,
  galeriaCultura,
  heroFoto,
  heroTexto,
  heroTitulo,
  historia,
  iniciativas,
  lideranca,
  links,
  missao,
  outrasIniciativas,
  parceiros,
  pilares,
  porqueSubtitulo,
  porqueTitulo,
  professores,
  securatoCargo,
  securatoCredenciais,
  securatoFotoRecorte,
  securatoNome,
  securatoResumo,
  valores,
} from "@/data/quem-somos";

const description =
  "Formação prática em mercado financeiro. Conheça a história, a liderança e o time por trás da Bankers Academy.";

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
const eyeDark = "text-sm font-semibold uppercase tracking-[0.3em] text-brand";
const eyeLight = "text-sm font-semibold uppercase tracking-[0.3em] text-brand-deep";
/* Sobre o verde da marca o texto é ink — o verde é claro demais para branco. */
const eyeBrand = "text-sm font-semibold uppercase tracking-[0.3em] text-ink/70";

export default function QuemSomosPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        {/* ═══════════ 1. HERO INSTITUCIONAL ═══════════ */}
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
              <Link
                href="#ecossistema"
                className="rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:opacity-90"
              >
                Nossas iniciativas
              </Link>
              <Link
                href="#lideranca"
                className="rounded-full border border-ink/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-ink transition hover:bg-ink hover:text-white"
              >
                Quem está por trás
              </Link>
            </div>
          </div>

          {/* Foto de ponta a ponta — o bloco visual maior da página */}
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

        {/* ═══════════ 2. POR QUE EXISTIMOS ═══════════ */}
        <section aria-labelledby="porque-t" className="bg-surface">
          <div className={`${shell} py-24 lg:py-32`}>
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

            {/* Blocos separados por régua, não cards */}
            <dl className="mt-20 divide-y divide-line border-y border-line">
              {pilares.map((p, i) => (
                /* O Reveal renderiza a própria div da grade: um nível só de
                   div dentro do <dl>, como o HTML exige para agrupar dt/dd. */
                <Reveal
                  key={p.id}
                  delay={i * 80}
                  className="grid gap-4 py-10 md:grid-cols-12 md:gap-10"
                >
                  <dt className="md:col-span-5">
                    <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {p.palavra}
                    </span>
                  </dt>
                  <dd className="text-pretty text-lg leading-8 text-ink/70 md:col-span-7">
                    {p.texto}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ═══════════ 3. NOSSA HISTÓRIA ═══════════ */}
        <section aria-labelledby="historia-t" className="bg-surface-alt">
          <div className={`${shell} py-24 lg:py-32`}>
            <Reveal>
              <p className={eyeLight}>Trajetória</p>
              <h2
                id="historia-t"
                className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Nossa história
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                Quase três décadas conectando educação, mercado e propósito.
              </p>
            </Reveal>

            <Timeline marcos={historia} />
          </div>
        </section>

        {/* ═══════════ 4. LIDERANÇA ═══════════ */}
        <section
          id="lideranca"
          aria-labelledby="lideranca-t"
          className="on-dark scroll-mt-20 bg-ink text-white"
        >
          <div className={`${shell} py-24 lg:py-32`}>
            <Reveal>
              <p className={eyeDark}>Liderança</p>
              <h2
                id="lideranca-t"
                className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl"
              >
                Quem conhece o outro lado da mesa.
              </h2>
            </Reveal>

            {/* Fundador com protagonismo */}
            <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
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
                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {securatoNome}
                </h3>
                <p className="mt-2 text-brand">{securatoCargo}</p>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/70">
                  {securatoResumo}
                </p>

                <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                  {securatoCredenciais.map((c) => (
                    <li
                      key={c.id}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <p className="text-base font-semibold text-brand">{c.valor}</p>
                      <p className="mt-1 text-sm leading-snug text-white/60">
                        {c.rotulo}
                      </p>
                    </li>
                  ))}
                </ul>

                <a
                  href={links.securatoLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex py-1 text-sm font-semibold text-brand transition-colors hover:text-white"
                >
                  LinkedIn ↗
                  <span className="sr-only"> de {securatoNome} (abre em nova aba)</span>
                </a>
              </Reveal>
            </div>

            {/* Demais lideranças */}
            <Reveal>
              <div className="mt-20 border-t border-white/15 pt-12">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Sócios e liderança
                </h3>
                <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                  {lideranca.map((l) => (
                    <li key={l.id} className="flex items-center gap-4">
                      {l.foto ? (
                        <Image
                          src={l.foto}
                          alt={`Retrato de ${l.nome}`}
                          width={200}
                          height={200}
                          sizes="72px"
                          className="h-16 w-16 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="h-16 w-16 shrink-0 rounded-full border border-dashed border-white/25 bg-white/[0.03]"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="text-lg font-semibold leading-tight">{l.nome}</p>
                        <p className="mt-1 text-sm text-white/60">{l.cargo}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ 5. PROFESSORES & ESPECIALISTAS ═══════════ */}
        <section aria-labelledby="professores-t" className="bg-surface">
          <div className={`${shell} py-24 lg:py-32`}>
            <Reveal>
              <p className={eyeLight}>Professores &amp; especialistas</p>
              <h2
                id="professores-t"
                className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl"
              >
                Quem ensina, executa.
              </h2>
            </Reveal>

            <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {professores.map((p, i) => (
                <Reveal as="li" key={p.id} delay={i * 60} className="block">
                  <article className="h-full">
                    {p.foto ? (
                      <Image
                        src={p.foto}
                        alt={`Retrato de ${p.nome}`}
                        width={600}
                        height={800}
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                        className="h-auto w-full rounded-2xl"
                      />
                    ) : (
                      <AssetPlaceholder
                        label="Retrato do professor"
                        ratio="aspect-[3/4]"
                        className="w-full"
                      />
                    )}

                    <div className="mt-5">
                      {p.nome ? (
                        <>
                          <h3 className="text-lg font-semibold tracking-tight">
                            {p.nome}
                          </h3>
                          {p.especialidade ? (
                            <p className="mt-1 text-sm font-medium text-brand-deep">
                              {p.especialidade}
                            </p>
                          ) : null}
                          {p.credencial ? (
                            <p className="mt-2 text-sm leading-6 text-ink/70">
                              {p.credencial}
                            </p>
                          ) : null}
                        </>
                      ) : (
                        /* Nada de nome inventado: o card mostra os campos. */
                        <p className="text-sm leading-6 text-ink/65">
                          Nome · especialidade · credencial
                        </p>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>

            <p className="mt-10 max-w-2xl text-sm leading-6 text-ink/70">
              Grid pronto para foto, nome, especialidade e credencial. Os nomes
              entram depois da validação da Bankers Academy.
            </p>
          </div>
        </section>

        {/* ═══════════ 6. COMO ENSINAMOS ═══════════ */}
        <section aria-labelledby="ensinamos-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-24 lg:py-32`}>
            <Reveal>
              <p className={eyeDark}>Como ensinamos</p>
              <h2
                id="ensinamos-t"
                className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl"
              >
                Não é só sobre saber.
                <span className="block text-white/55">É sobre saber fazer.</span>
              </h2>
            </Reveal>

            <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {comoEnsinamos.map((b, i) => (
                <Reveal as="li" key={b.id} delay={i * 70} className="block">
                  <article className="h-full">
                    <AssetPlaceholder
                      tone="dark"
                      label={b.fotoPendente}
                      ratio="aspect-[4/5]"
                      className="w-full"
                    />
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                      {b.palavra}
                    </h3>
                    <p className="mt-3 text-[15px] leading-6 text-white/65">
                      {b.texto}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══════════ 7. ECOSSISTEMA ═══════════ */}
        <section
          id="ecossistema"
          aria-labelledby="ecossistema-t"
          className="scroll-mt-20 bg-surface-alt"
        >
          <div className={`${shell} py-24 lg:py-32`}>
            <Reveal>
              <p className={eyeLight}>Ecossistema</p>
              <h2
                id="ecossistema-t"
                className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Muitas portas. Um mesmo objetivo.
              </h2>
              <p className="mt-5 text-xl text-ink/70 sm:text-2xl">
                Entrar no mercado mais preparado.
              </p>
            </Reveal>

            <ul className="mt-16 divide-y divide-line border-y border-line">
              {iniciativas.map((it, i) => {
                const conteudo = (
                  <div className="grid items-baseline gap-3 py-8 md:grid-cols-12 md:gap-10">
                    <h3
                      className={`font-semibold tracking-tight md:col-span-5 ${
                        it.destaque ? "text-2xl sm:text-3xl" : "text-xl"
                      }`}
                    >
                      {it.nome}
                      {it.destaque ? (
                        <span className="ml-3 inline-block translate-y-[-0.15em] rounded-full bg-brand px-3 py-1 align-middle text-[11px] font-bold uppercase tracking-[0.08em] text-ink">
                          Desde 2018
                        </span>
                      ) : null}
                    </h3>
                    <p className="text-pretty leading-7 text-ink/70 md:col-span-6">
                      {it.descricao}
                    </p>
                    {it.href ? (
                      <span className="text-sm font-semibold text-brand-deep md:col-span-1 md:text-right">
                        {it.externo ? "↗" : "→"}
                      </span>
                    ) : null}
                  </div>
                );

                return (
                  <Reveal as="li" key={it.id} delay={Math.min(i, 5) * 40} className="block">
                    {it.href ? (
                      it.externo ? (
                        <a
                          href={it.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block transition-colors hover:bg-white"
                        >
                          {conteudo}
                        </a>
                      ) : (
                        <Link href={it.href} className="block transition-colors hover:bg-white">
                          {conteudo}
                        </Link>
                      )
                    ) : (
                      conteudo
                    )}
                  </Reveal>
                );
              })}
            </ul>

            <Reveal>
              <div className="mt-14 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
                    Outras iniciativas
                  </h3>
                  <p className="mt-4 text-pretty leading-7 text-ink/75">
                    {outrasIniciativas.join(" · ")}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
                    Parceiros
                  </h3>
                  <p className="mt-4 text-pretty leading-7 text-ink/75">
                    {parceiros.join(" · ")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ 8. EQUIPE & CULTURA ═══════════ */}
        <section aria-labelledby="cultura-t" className="bg-surface">
          <div className={`${shell} py-24 lg:py-32`}>
            <Reveal>
              <p className={eyeLight}>Equipe &amp; cultura</p>
              <h2
                id="cultura-t"
                className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl"
              >
                Uma escola feita por quem viveu o mercado.
              </h2>
            </Reveal>

            <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  ) : (
                    <AssetPlaceholder
                      label={f.pendente ?? f.alt}
                      ratio="aspect-[4/3]"
                      className="w-full"
                    />
                  )}
                </Reveal>
              ))}
            </ul>

            {/* Missão, valores e time de execução */}
            <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
                  Missão
                </h3>
                <p className="mt-5 text-balance text-2xl font-semibold leading-snug">
                  {missao}
                </p>

                <h3 className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
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

        {/* ═══════════ 9. CTA FINAL ═══════════ */}
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
                <Link
                  href="#ecossistema"
                  className="rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:opacity-90"
                >
                  Ver as iniciativas
                </Link>
                <Link
                  href={links.bootcamp}
                  className="rounded-full border border-ink/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-ink transition hover:bg-ink hover:text-white"
                >
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
