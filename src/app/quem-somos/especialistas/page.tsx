import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/ui/Reveal";
import AssetPlaceholder from "@/components/ui/AssetPlaceholder";
import SubHero from "../_components/SubHero";
import { btnSolid, eyeDark, shell } from "../_components/estilos";

import { comoEnsinamos, links, professores } from "@/data/quem-somos";

const description =
  "Professores, mentores e especialistas da Bankers Academy — e o método: modelar, avaliar, apresentar e defender uma recomendação.";

export const metadata: Metadata = {
  title: "Professores & Especialistas | Bankers Academy",
  description,
  alternates: { canonical: "/quem-somos/especialistas" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Professores & Especialistas | Bankers Academy",
    description,
  },
};

/**
 * Quem ensina e como ensina — as seções "Professores & Especialistas" e
 * "Como ensinamos" do /quem-somos antigo, agora em página própria.
 *
 * O grid de professores continua deliberadamente vazio: nomes,
 * especialidades e credenciais só entram validados pela Bankers Academy.
 * Nada de inventar pessoa, cargo ou vínculo.
 */
export default function EspecialistasPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrow="Professores &amp; especialistas"
          titulo="Quem ensina, executa."
          texto="Professores e mentores que vêm da mesa de trabalho — e um método construído para o aluno fazer, não só assistir."
        />

        {/* ═══════════ GRID DE ESPECIALISTAS ═══════════ */}
        <section aria-labelledby="grid-t" className="bg-surface">
          <div className={`${shell} py-24 lg:py-28`}>
            <h2 id="grid-t" className="sr-only">
              Professores e especialistas
            </h2>
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                          {p.linkedin ? (
                            <a
                              href={p.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex items-center gap-1 py-1 text-sm font-semibold text-brand-deep underline decoration-brand-deep/35 decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                            >
                              LinkedIn ↗
                              <span className="sr-only">
                                {" "}
                                de {p.nome} (abre em nova aba)
                              </span>
                            </a>
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

        {/* ═══════════ COMO ENSINAMOS ═══════════ */}
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

        {/* Próxima porta */}
        <section aria-labelledby="esp-cta-t" className="bg-brand text-ink">
          <div className={`${shell} py-20 text-center lg:py-24`}>
            <Reveal>
              <h2
                id="esp-cta-t"
                className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
              >
                Aprenda com quem faz.
              </h2>
              <div className="mt-8">
                <Link href={links.bootcamp} className={btnSolid}>
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
