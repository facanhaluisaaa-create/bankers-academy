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
  aprenderFazendo,
  autoridade,
  depoimentos,
  heroTexto,
  heroTitulo,
  historia,
  time,
  timeExCampers,
  missao,
  parceiros,
  pilares,
  programas,
  securatoCredenciais,
  securatoNome,
  securatoPonte,
  securatoResumo,
  valores,
} from "@/data/quem-somos";
import { ibbcAlumni } from "@/data/bootcamp/alumni";
import { ibbcLinks } from "@/data/bootcamp/config";

const description =
  "A Bankers Academy aproxima universitários e jovens profissionais da realidade do mercado financeiro por meio de formação prática, experiência e orientação de carreira.";

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
        {/* ─────────────── 1. HERO ─────────────── */}
        <section className="bg-brand text-ink">
          <div className={`${shell} py-20 lg:py-28`}>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <p className={eyeBrand}>Quem somos</p>

                <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                  {heroTitulo.map((linha) => (
                    <span key={linha} className="block">
                      {linha}
                    </span>
                  ))}
                </h1>

                <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-ink/80">
                  {heroTexto}
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="#programas"
                    className="rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:opacity-90"
                  >
                    Conheça nossos programas
                  </Link>
                  <Link
                    href="/bootcamp"
                    className="rounded-full border border-ink/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-ink transition hover:bg-ink hover:text-white"
                  >
                    Conheça o Bootcamp
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <Image
                  src="/images/quem-somos/equipe.jpg"
                  alt="Time da Bankers Academy reunido no escritório"
                  width={2000}
                  height={1333}
                  priority
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Barra de autoridade */}
        <section aria-label="Credenciais da Bankers Academy" className="on-dark bg-ink text-white">
          <div className={shell}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 lg:grid-cols-4">
              {autoridade.map((c) => (
                <div key={c.id}>
                  <dt className="sr-only">{c.rotulo}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
                      {c.valor}
                    </span>
                    <span className="mt-2 block text-sm leading-snug text-white/60">
                      {c.rotulo}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ─────────── 2. POR QUE EXISTIMOS ─────────── */}
        <section aria-labelledby="porque-t" className="bg-surface">
          <div className={`${shell} py-20 lg:py-28`}>
            <Reveal>
              <BrandMark className="h-12 w-12" />
              <p className={`mt-8 ${eyeLight}`}>Por que existimos</p>
              <h2
                id="porque-t"
                className="mt-4 max-w-4xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
              >
                Existe uma distância entre estudar finanças e trabalhar com
                finanças.
              </h2>
              <p className="mt-5 text-2xl font-semibold text-brand-deep sm:text-3xl">
                Nós existimos para diminuir essa distância.
              </p>
            </Reveal>

            <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-line lg:grid-cols-3">
              {pilares.map((p, i) => (
                <Reveal as="li" key={p.id} delay={i * 80} className="block bg-white">
                  <div className="h-full p-8 lg:p-10">
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-10 rounded-full bg-brand-deep"
                    />
                    <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                      {p.titulo}
                    </h3>
                    <p className="mt-4 text-pretty leading-7 text-ink/70">
                      {p.texto}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────── 3. NOSSA HISTÓRIA ─────────── */}
        <section aria-labelledby="historia-t" className="bg-surface-alt">
          <div className={`${shell} py-20 lg:py-28`}>
            <Reveal>
              <p className={eyeLight}>Trajetória</p>
              <h2
                id="historia-t"
                className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
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

        {/* ─────────── 4. SECURATO JR. ─────────── */}
        <section aria-labelledby="fundador-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-20 lg:py-28`}>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                {/* Recorte com fundo transparente: flutua sobre o ink em vez
                    de ficar preso numa caixa. O halo verde atrás dá o assento. */}
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-6 bottom-0 top-16 rounded-full bg-brand/12 blur-3xl"
                  />
                  <Image
                    src="/images/quem-somos/securato-recorte.png"
                    alt={`Retrato de ${securatoNome}, fundador da Bankers Academy`}
                    width={603}
                    height={1100}
                    sizes="(max-width: 1024px) 70vw, 34vw"
                    className="relative mx-auto h-auto w-full max-w-sm"
                    /* O recorte termina numa linha reta na altura do quadril;
                       a máscara dissolve essa borda no fundo da seção. */
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
                <p className={eyeDark}>Fundador</p>
                <h2
                  id="fundador-t"
                  className="mt-4 text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl"
                >
                  Experiência de mercado transformada em educação.
                </h2>

                <p className="mt-6 text-lg font-semibold">{securatoNome}</p>
                <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-white/70">
                  {securatoResumo}
                </p>

                <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                  {securatoCredenciais.map((c) => (
                    <li
                      key={c.id}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <p className="text-base font-semibold text-brand">
                        {c.valor}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-white/60">
                        {c.rotulo}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-l-2 border-brand pl-6">
                  <p className="text-pretty text-lg leading-8">
                    {securatoPonte}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/bootcamp"
                    className="rounded-full bg-brand-soft px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-ink transition hover:brightness-95"
                  >
                    Conheça o IBBC
                  </Link>
                  <a
                    href={ibbcLinks.securatoLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/25 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
                  >
                    LinkedIn
                    <span className="sr-only"> de {securatoNome} (abre em nova aba)</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────── 5. NOSSO TIME ─────────── */}
        <section aria-labelledby="time-t" className="bg-surface">
          <div className={`${shell} py-20 lg:py-28`}>
            <Reveal>
              <p className={eyeLight}>Nosso time</p>
              <h2
                id="time-t"
                className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
              >
                Aprenda com quem conhece o outro lado da mesa.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                {timeExCampers} das pessoas que hoje tocam a escola entraram
                pela porta do próprio Investment Banking Boot Camp.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <Image
                src="/images/quem-somos/time-grupo.jpg"
                alt="Parte do time da Bankers Academy reunida na sala de reuniões"
                width={1536}
                height={842}
                sizes="(max-width: 1024px) 92vw, 80vw"
                className="mt-12 h-auto w-full rounded-2xl"
              />
            </Reveal>

            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {time.map((m, i) => (
                <Reveal as="li" key={m.id} delay={Math.min(i, 7) * 50} className="block">
                  <article className="h-full">
                    {m.foto ? (
                      <Image
                        src={m.foto}
                        alt={`Retrato de ${m.nome}`}
                        width={600}
                        height={800}
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                        className="h-auto w-full rounded-2xl"
                      />
                    ) : (
                      <AssetPlaceholder
                        label={`Retrato de ${m.nome}`}
                        ratio="aspect-[3/4]"
                        className="w-full"
                      />
                    )}

                    <div className="mt-5">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {m.nome}
                      </h3>
                      <p className="mt-1 text-sm text-ink/70">{m.cargo}</p>

                      {/* O vínculo com o boot camp é o ponto da seção */}
                      {m.ibbcTurma ? (
                        <p className="mt-3 inline-flex rounded-full bg-surface-alt px-3 py-1.5 text-xs font-semibold text-brand-deep">
                          {m.ibbcMentor
                            ? `IBBC turma ${m.ibbcTurma} · voltou como mentora`
                            : `IBBC turma ${m.ibbcTurma}`}
                        </p>
                      ) : null}

                      {m.linkedin ? (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 block py-1 text-sm font-semibold text-brand-deep hover:underline"
                        >
                          LinkedIn ↗
                          <span className="sr-only"> de {m.nome} (abre em nova aba)</span>
                        </a>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────── 6. APRENDER FAZENDO ─────────── */}
        <section aria-labelledby="fazendo-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-20 lg:py-28`}>
            <Reveal>
              <p className={eyeDark}>Aprender fazendo</p>
              <h2
                id="fazendo-t"
                className="mt-4 text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl"
              >
                Não é só sobre saber.
                <span className="block text-white/55">É sobre saber fazer.</span>
              </h2>
            </Reveal>

            <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {aprenderFazendo.map((b, i) => (
                <Reveal as="li" key={b.id} delay={i * 70} className="block">
                  <article className="h-full">
                    <AssetPlaceholder
                      tone="dark"
                      label={`Foto: campers em ${b.titulo.toLowerCase()}`}
                      ratio="aspect-[4/3]"
                      className="w-full"
                    />
                    <h3 className="mt-6 text-xl font-semibold uppercase tracking-tight">
                      {b.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {b.texto}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────── 7. ECOSSISTEMA ─────────── */}
        <section id="programas" aria-labelledby="programas-t" className="scroll-mt-20 bg-surface-alt">
          <div className={`${shell} py-20 lg:py-28`}>
            <Reveal>
              <p className={eyeLight}>Ecossistema</p>
              <h2
                id="programas-t"
                className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Muitas portas. Um mesmo objetivo.
              </h2>
              <p className="mt-5 text-xl text-ink/70 sm:text-2xl">
                Entrar no mercado mais preparado.
              </p>
            </Reveal>

            <ul className="mt-14 grid gap-5 lg:grid-cols-3">
              {programas.map((p, i) => {
                const conteudo = (
                  <>
                    <h3
                      className={`font-semibold tracking-tight ${
                        p.destaque ? "text-2xl sm:text-3xl" : "text-lg"
                      }`}
                    >
                      {p.nome}
                    </h3>
                    <p
                      className={`mt-3 text-pretty leading-7 ${
                        p.destaque ? "text-white/70" : "text-sm text-ink/70"
                      }`}
                    >
                      {p.descricao}
                    </p>
                    <span
                      className={`mt-6 inline-flex text-sm font-semibold ${
                        p.destaque ? "text-brand" : "text-brand-deep"
                      }`}
                    >
                      {p.externo ? "Ver programa ↗" : "Conhecer →"}
                    </span>
                  </>
                );

                const classe = p.destaque
                  ? "on-dark flex h-full flex-col rounded-3xl bg-ink p-8 text-white transition hover:opacity-95 lg:p-10"
                  : "flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-lg hover:shadow-black/5";

                return (
                  <Reveal
                    as="li"
                    key={p.id}
                    delay={Math.min(i, 5) * 50}
                    className={`block ${p.destaque ? "lg:col-span-3" : ""}`}
                  >
                    {p.externo ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className={classe}>
                        {conteudo}
                      </a>
                    ) : (
                      <Link href={p.href} className={classe}>
                        {conteudo}
                      </Link>
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ─────────── 8. PROVA SOCIAL ─────────── */}
        <section aria-labelledby="prova-t" className="bg-surface">
          <div className={`${shell} py-20 lg:py-28`}>
            <Reveal>
              <p className={eyeLight}>Prova social</p>
              <h2
                id="prova-t"
                className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
              >
                Quem passou pela Bankers conta melhor.
              </h2>
            </Reveal>

            {depoimentos.length > 0 ? (
              <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {depoimentos.map((d, i) => (
                  <Reveal as="li" key={d.id} delay={i * 60} className="block">
                    <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                      <blockquote className="flex-1 text-pretty leading-7 text-ink/80">
                        <p>{d.texto}</p>
                      </blockquote>
                      <figcaption className="mt-6 border-t border-line pt-5">
                        <p className="font-semibold">{d.nome}</p>
                        {d.programa ? (
                          <p className="mt-1 text-sm text-brand-deep">{d.programa}</p>
                        ) : null}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </ul>
            ) : (
              /* Sem depoimento autorizado, a prova social é o número real de
                 campers já formados pelo IBBC — dado que já existe no projeto. */
              <Reveal>
                <div className="mt-14 grid gap-8 rounded-3xl border border-line bg-surface-alt p-8 lg:grid-cols-12 lg:items-center lg:p-12">
                  <div className="lg:col-span-5">
                    <p className="text-5xl font-semibold tracking-tight text-brand-deep sm:text-6xl">
                      {ibbcAlumni.length}
                    </p>
                    <p className="mt-3 text-lg font-semibold">
                      campers já viveram o Investment Banking Boot Camp
                    </p>
                    <p className="mt-2 text-sm text-ink/65">
                      Desde 2018, ao longo de 16 edições. Vários voltaram depois
                      como mentores de turmas seguintes.
                    </p>
                    <Link
                      href="/bootcamp#alumni"
                      className="mt-6 inline-flex py-1 text-sm font-semibold text-brand-deep transition-colors hover:text-ink"
                    >
                      Ver todos os alumni →
                    </Link>
                  </div>

                  <div className="lg:col-span-7">
                    <Image
                      src="/images/quem-somos/turma.jpg"
                      alt="Turma da Bankers Academy reunida em sala de aula"
                      width={2000}
                      height={1095}
                      sizes="(max-width: 1024px) 90vw, 55vw"
                      className="h-auto w-full rounded-2xl"
                    />
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ─────────── 9. PARCEIROS ─────────── */}
        <section aria-labelledby="parceiros-t" className="bg-surface-alt">
          <div className={`${shell} py-20 lg:py-24`}>
            <Reveal>
              <p className={eyeLight}>Parceiros</p>
              <h2
                id="parceiros-t"
                className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Quem caminha com a gente
              </h2>
            </Reveal>

            {/* Estrutura pronta para logo; enquanto não há arquivo, o nome
                carrega o card — sem selo de "logo em breve". */}
            <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-3 lg:grid-cols-5">
              {parceiros.map((p, i) => (
                <Reveal as="li" key={p.id} delay={Math.min(i, 9) * 30} className="block bg-white">
                  <div className="flex h-full min-h-[7.5rem] flex-col justify-center p-6 text-center">
                    <p className="text-sm font-semibold tracking-tight">{p.nome}</p>
                    <p className="mt-2 text-xs leading-5 text-ink/55">
                      {p.descricao}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────── Missão e valores ─────────── */}
        <section aria-labelledby="valores-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-20 lg:py-24`}>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <p className={eyeDark}>Missão</p>
                <h2
                  id="valores-t"
                  className="mt-4 text-balance text-2xl font-semibold leading-snug sm:text-3xl"
                >
                  {missao}
                </h2>

                {/* O primeiro valor da lista está escrito na parede da foto —
                    ela comprova o texto ao lado, não decora. */}
                <figure className="mt-10">
                  <Image
                    src="/images/quem-somos/valores.jpg"
                    alt="Parede do escritório da Bankers Academy com a frase Excellence precedes success"
                    width={1800}
                    height={1279}
                    sizes="(max-width: 1024px) 90vw, 38vw"
                    className="h-auto w-full rounded-2xl"
                  />
                </figure>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Valores
                </h3>
                <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {valores.map((v) => (
                    <li key={v} className="flex gap-3 text-[15px] leading-6 text-white/75">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      />
                      {v}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────── 10. CTA FINAL ─────────── */}
        <section aria-labelledby="cta-t" className="bg-brand text-ink">
          <div className={`${shell} py-20 text-center lg:py-28`}>
            <Reveal>
              <h2
                id="cta-t"
                className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Sua carreira pode ser o próximo capítulo.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-8 text-ink/75">
                Conheça os programas da Bankers Academy e escolha por onde
                começar.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="#programas"
                  className="rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:opacity-90"
                >
                  Conheça os programas
                </Link>
                <Link
                  href="/bootcamp"
                  className="rounded-full border border-ink/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-ink transition hover:bg-ink hover:text-white"
                >
                  Conheça o Bootcamp
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
