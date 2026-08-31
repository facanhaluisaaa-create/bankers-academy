import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/ui/Reveal";
import SubHero from "../_components/SubHero";
import {
  btnOutlineDark,
  btnSolid,
  btnSolidDark,
  eyeDark,
  eyeLight,
  shell,
} from "../_components/estilos";
import { historia, links, missao, rotas } from "@/data/quem-somos";

const description =
  "A história da Bankers Academy: da experiência de mercado do fundador ao primeiro boot camp com cinco alunos, e do boot camp a uma escola inteira.";

export const metadata: Metadata = {
  title: "Nossa História | Bankers Academy",
  description,
  alternates: { canonical: "/quem-somos/historia" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Nossa História | Bankers Academy",
    description,
  },
};

/** Marco da linha do tempo por id — os FATOS continuam vindo do registro
    central; esta página só decide a apresentação. */
const marco = (id: string) => {
  const m = historia.find((x) => x.id === id);
  if (!m) throw new Error(`marco ausente na história: ${id}`);
  return m;
};

/**
 * Nossa história como narrativa editorial, não como timeline de
 * PowerPoint: anos grandes, um número protagonista por momento, frases
 * curtas e UM texto pequeno por marco. Os fatos são exatamente os dos
 * marcos em src/data/quem-somos.ts — nada foi inventado, e o conflito
 * 2022×2023 da fundação segue anotado lá. A única fotografia datada com
 * evidência é a do livro (marco 2024); nenhuma foto atual é apresentada
 * como registro de 2018.
 */
export default function HistoriaPage() {
  const m2018 = marco("ibbc");
  const m2019 = marco("site-ib");
  const m2021 = marco("digital");
  const m2022 = marco("ba");
  const m2023 = marco("yib");
  const m2024 = marco("hoje");

  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrow="Trajetória"
          titulo="Nossa história"
          texto="Quase três décadas conectando educação, mercado e propósito: de uma turma de cinco alunos a uma escola inteira."
        />

        {/* ═══════════ A CONVICÇÃO — o fio da narrativa ═══════════ */}
        <section aria-label="A convicção que deu origem à escola" className="bg-surface">
          <div className={`${shell} py-20 lg:py-24`}>
            <Reveal>
              <p className="max-w-3xl text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-4xl">
                Antes de existir a Bankers Academy, já existia uma convicção:
                existe uma distância entre aprender finanças e viver o mercado.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/60">
                Esta é a história de como essa distância foi sendo encurtada,
                ano a ano.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ PRÓLOGO 1995–2018 — MERCADO × EDUCAÇÃO ═══════════ */}
        <section aria-labelledby="hist-prologo" className="border-t border-line bg-surface">
          <div className={`${shell} py-20 lg:py-24`}>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <p className={eyeLight}>1995–2018</p>
                <h2
                  id="hist-prologo"
                  className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl"
                >
                  Mercado
                  <span aria-hidden="true" className="mx-3 text-brand-deep">
                    ×
                  </span>
                  <span className="block sm:inline">educação</span>
                </h2>
              </Reveal>
              <Reveal delay={80} className="lg:col-span-7 lg:pt-2">
                <p className="max-w-xl text-lg leading-8 text-ink/75">
                  A escola não começou num site. Antes dela, José Roberto
                  Securato Jr. viveu os dois lados: 14 anos em Investment
                  Banking, entre Deutsche Bank, em São Paulo e Nova Iorque, e
                  BNP Paribas, e a sala de aula como professor na FIA e na
                  Saint Paul.
                </p>
                <p className="mt-4 max-w-xl leading-7 text-ink/60">
                  Em 2013 funda a SP Advisors, butique de M&A. É dessa
                  interseção, transação de um lado, turma do outro, que a
                  história a seguir nasce.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════ 2018 — O NÚMERO QUE COMEÇOU TUDO ═══════════ */}
        <section aria-labelledby="hist-2018" className="on-dark bg-ink text-white">
          <div className={`${shell} py-24 text-center lg:py-32`}>
            <Reveal>
              <p className={eyeDark}>2018</p>
              <p
                aria-hidden="true"
                className="mt-4 text-[7rem] font-semibold leading-none tracking-tight text-brand sm:text-[11rem]"
              >
                5
              </p>
              <h2
                id="hist-2018"
                className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
              >
                Cinco alunos. Uma experiência.
                <span className="block text-white/55">O começo de algo maior.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty leading-8 text-white/65">
                {m2018.texto}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ 2019 + 2021 — o conhecimento sai da sala ═══════════ */}
        <section aria-label="2019 e 2021" className="bg-surface">
          <div className={`${shell} grid gap-x-16 gap-y-16 py-20 lg:grid-cols-2 lg:py-24`}>
            <Reveal>
              <p className={eyeLight}>2019</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                O conhecimento ganha
                <span className="block text-ink/55">um endereço próprio.</span>
              </h2>
              <p className="mt-2 text-sm font-semibold text-brand-deep">
                investmentbanking.com.br
              </p>
              <p className="mt-5 max-w-md leading-7 text-ink/65">{m2019.texto}</p>
            </Reveal>

            <Reveal delay={80}>
              <p className={eyeLight}>2021</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                A sala ficou pequena.
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-brand-deep sm:text-4xl">
                800 <span aria-hidden="true">→</span> +12 mil
              </p>
              <p className="sr-only">De 800 para mais de 12 mil seguidores.</p>
              <p className="mt-5 max-w-md leading-7 text-ink/65">{m2021.texto}</p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ 2022 — NASCE A MARCA ═══════════
            O ano segue o registro interno do projeto (2022); o conflito
            com a fonte que diz 2023 está anotado no marco, em
            src/data/quem-somos.ts, aguardando decisão do cliente. */}
        <section aria-labelledby="hist-2022" className="border-y border-line bg-surface-alt">
          <div className={`${shell} py-20 lg:py-28`}>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-6">
                <p className={eyeLight}>{m2022.periodo}</p>
                <h2
                  id="hist-2022"
                  className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl"
                >
                  Bankers
                  <span className="block text-brand-deep">Academy.</span>
                </h2>
              </Reveal>
              <Reveal delay={80} className="lg:col-span-6">
                <p className="max-w-xl text-lg leading-8 text-ink/75">{m2022.texto}</p>
                <p className="mt-4 max-w-xl leading-7 text-ink/60">
                  O que era uma experiência de Investment Banking passa a ser
                  um ecossistema de educação, com programas, comunidade e
                  professores que vêm do mercado.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════ 2023 — YOU IN BANKING ═══════════
            Parceria em texto, sem logotipos: não temos os assets nem a
            autorização das marcas. */}
        <section aria-labelledby="hist-2023" className="on-dark bg-ink text-white">
          <div className={`${shell} py-20 lg:py-28`}>
            <Reveal>
              <p className={eyeDark}>{m2023.periodo}</p>
              <h2
                id="hist-2023"
                className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl"
              >
                You in Banking
                <span className="block">
                  <span className="mr-3 text-brand" aria-hidden="true">
                    ×
                  </span>
                  J.P. Morgan
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-white/70">
                O mercado também precisava de portas novas: um programa de
                inclusão para pessoas negras e mulheres no mercado financeiro.
              </p>
              <p className="mt-3 max-w-xl leading-7 text-white/55">{m2023.texto}</p>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ 2024 — DO DIGITAL AO ESPAÇO FÍSICO ═══════════ */}
        <section aria-labelledby="hist-2024" className="bg-surface">
          <div className={`${shell} py-20 lg:py-28`}>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-6">
                <p className={eyeLight}>{m2024.periodo}</p>
                <h2
                  id="hist-2024"
                  className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl"
                >
                  Do digital
                  <span className="block text-ink/55">ao espaço físico.</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-ink/75">
                  A comunidade ganha um lugar de encontro: a escola inaugura
                  auditório próprio para aulas, eventos e troca.
                </p>
                <p className="mt-4 max-w-xl leading-7 text-ink/60">
                  E o conhecimento também virou livro: José Roberto Securato
                  Jr. publica “De cabeça no Mercado Financeiro”.
                </p>
              </Reveal>

              {/* A única fotografia datada com evidência: a sessão de
                  autógrafos do livro, já usada no marco desde o início */}
              {m2024.imagem ? (
                <Reveal delay={80} className="lg:col-span-6">
                  <figure>
                    {/* Retrato 4:5 nativo: proporção natural, sem corte */}
                    <Image
                      src={m2024.imagem}
                      alt={m2024.imagemAlt ?? ""}
                      width={1170}
                      height={1462}
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="mx-auto h-auto w-full max-w-md rounded-3xl lg:max-w-lg"
                    />
                    <figcaption className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-ink/60">
                      Conhecimento que também virou livro.
                    </figcaption>
                  </figure>
                </Reveal>
              ) : null}
            </div>
          </div>
        </section>

        {/* ═══════════ PONTE — O BOOT CAMP COMO FIO CONDUTOR ═══════════ */}
        <section aria-labelledby="hist-ponte" className="bg-brand text-ink">
          <div className={`${shell} py-20 lg:py-24`}>
            <Reveal>
              <h2
                id="hist-ponte"
                className="max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
              >
                O que começou com cinco alunos virou uma das experiências que
                construíram a identidade da escola.
              </h2>
              <div className="mt-8">
                {/* Rota real, mesma aba */}
                <Link href={links.bootcamp} className={btnSolid}>
                  Conheça o Investment Banking Boot Camp
                  <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════ MISSÃO ═══════════ */}
        <section aria-labelledby="missao-t" className="bg-surface">
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

        {/* ═══════════ HOJE — A HISTÓRIA CONTINUA ═══════════ */}
        <section aria-labelledby="hist-hoje" className="on-dark bg-ink text-white">
          <div className={`${shell} py-24 text-center lg:py-28`}>
            <Reveal>
              <h2
                id="hist-hoje"
                className="mx-auto max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
              >
                A história continua.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/65">
                Hoje, a Bankers Academy reúne educação e mercado no mesmo
                lugar: professores, especialistas, programas e uma comunidade
                que segue crescendo.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={rotas.lideranca} className={btnSolidDark}>
                  Conheça quem constrói essa história
                </Link>
                <Link href={rotas.especialistas} className={btnOutlineDark}>
                  Aprenda com quem vive o mercado
                </Link>
              </div>
              <p className="mt-8">
                <Link
                  href={rotas.hub}
                  className="py-2 text-sm font-semibold text-white/55 underline decoration-white/25 decoration-2 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                >
                  ← Voltar para Quem Somos
                </Link>
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
