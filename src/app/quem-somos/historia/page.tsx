import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/ui/Reveal";
import Timeline from "../_components/Timeline";
import SubHero from "../_components/SubHero";
import { btnOutline, btnSolid, eyeLight, shell } from "../_components/estilos";

import { historia, links, missao, rotas } from "@/data/quem-somos";

const description =
  "Do primeiro Investment Banking Boot Camp com 5 alunos em 2018 à escola com auditório próprio: os marcos da Bankers Academy.";

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

/**
 * História completa da escola — a timeline que vivia no meio do
 * /quem-somos. Cada marco já aceita fotografia de época (campo `imagem`
 * em src/data/quem-somos.ts); os marcos sem foto renderizam só em texto.
 */
export default function HistoriaPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrow="Trajetória"
          titulo="Nossa história"
          texto="Quase três décadas conectando educação, mercado e propósito — de uma turma de cinco alunos a uma escola inteira."
        />

        <section aria-label="Linha do tempo" className="bg-surface-alt">
          <div className={`${shell} py-20 lg:py-28`}>
            <Timeline marcos={historia} />
          </div>
        </section>

        {/* ═══════════ MISSÃO ═══════════
            Veio do hub: a história desemboca no que ela construiu. */}
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

        {/* Para onde ir depois da história */}
        <section aria-labelledby="hist-cta-t" className="on-dark bg-ink text-white">
          <div className={`${shell} py-20 text-center lg:py-24`}>
            <Reveal>
              <h2
                id="hist-cta-t"
                className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
              >
                A próxima parte dessa história é escrita em sala.
              </h2>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={links.bootcamp}
                  className={`${btnSolid} border border-white/25`}
                >
                  Conheça o Boot Camp
                </Link>
                <Link
                  href={rotas.lideranca}
                  className={`${btnOutline} border-white/30 text-white hover:border-white hover:bg-white hover:text-ink`}
                >
                  Quem está por trás
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
