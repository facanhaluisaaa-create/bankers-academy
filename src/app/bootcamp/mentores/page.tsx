import type { Metadata } from "next";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SubHero from "../_components/SubHero";
import Foto from "../_components/Foto";
import { bootcampMedia } from "../_data/media";
import { shell } from "../_components/estilos";
import { ibbcEditions } from "../_data/editions";
import { ibbcMentors } from "../_data/mentors";

const description =
  "Quem conduz e mentora o Investment Banking Boot Camp: José Roberto Securato Jr. e os mentores creditados nas edições do programa.";

export const metadata: Metadata = {
  title: "Mentores | Investment Banking Boot Camp",
  description,
  alternates: { canonical: "/bootcamp/mentores" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Mentores | Investment Banking Boot Camp",
    description,
  },
};

/**
 * Quem orienta durante a experiência — conteúdo vindo da landing intacto.
 * Só entram pessoas cuja ligação com o IBBC o material oficial confirma:
 * o condutor do programa e os mentores creditados edição a edição. Os
 * professores do acervo geral da Bankers Academy NÃO entram aqui até a
 * escola confirmar o papel de cada um no boot camp (ver _data/mentors.ts).
 */
export default function MentoresPage() {
  const creditedMentors = Array.from(
    new Set(ibbcEditions.flatMap((e) => e.mentors ?? [])),
  ).sort((a, b) => a.localeCompare(b, "pt-BR"));

  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrowTexto="Mentoria"
          titulo={
            <>
              Com quem você vai
              <span className="block text-white/55">viver essa experiência.</span>
            </>
          }
          texto="Mentoria de quem executa: o programa é conduzido pelo idealizador e acompanhado por mentores do time da SP Advisors — boa parte deles ex-campers."
        />

        <section aria-label="Mentores do programa" className="bg-surface">
          <div className={`${shell} py-20 lg:py-28`}>
            <div className="grid gap-10 lg:grid-cols-2">
              {ibbcMentors.map((m) => (
                <article key={m.id} className="overflow-hidden rounded-3xl border border-line bg-white p-7">
                  {/* [FOTO MENTOR] Retrato 4:5, do registro central */}
                  {bootcampMedia.mentores[m.id] ? (
                    <Foto
                      slot={bootcampMedia.mentores[m.id]}
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      rounded="rounded-2xl"
                      className="mb-7 max-w-xs"
                    />
                  ) : null}
                  <h2 className="text-2xl font-semibold">{m.name}</h2>
                  <p className="mt-2 text-sm text-brand-deep">{m.role}</p>
                  {m.bio ? <p className="mt-5 leading-7 text-ink/70">{m.bio}</p> : null}
                  {m.linkedin ? (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex py-1 text-sm font-semibold text-brand-deep underline decoration-brand-deep/35 decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                    >
                      LinkedIn ↗
                      <span className="sr-only"> de {m.name} (abre em nova aba)</span>
                    </a>
                  ) : null}
                </article>
              ))}

              {creditedMentors.length > 0 ? (
                <div className="rounded-3xl border border-line bg-white p-7">
                  <h2 className="text-lg font-semibold">Mentores das edições</h2>
                  <p className="mt-3 text-sm leading-6 text-ink/70">
                    Profissionais que acompanharam as turmas do boot camp — boa
                    parte deles ex-campers do próprio programa.
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {creditedMentors.map((name) => (
                      <li
                        key={name}
                        className="rounded-full border border-line px-3 py-1.5 text-xs text-ink/75"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
