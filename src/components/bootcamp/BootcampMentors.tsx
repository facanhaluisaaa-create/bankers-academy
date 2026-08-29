import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AssetPlaceholder from "@/components/ui/AssetPlaceholder";
import { ibbcMentors } from "@/data/bootcamp/mentors";
import { ibbcEditions } from "@/data/bootcamp/editions";

/** Distinct mentors credited across all published editions. */
const creditedMentors = Array.from(
  new Set(ibbcEditions.flatMap((e) => e.mentors ?? [])),
).sort((a, b) => a.localeCompare(b, "pt-BR"));

export default function BootcampMentors() {
  return (
    <section
      id="mentores"
      aria-labelledby="mentores-titulo"
      className="scroll-mt-20 bg-surface py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Quem conduz"
            id="mentores-titulo"
            title="Com quem você vai viver essa experiência."
            lead="O boot camp é conduzido por José Roberto Securato Jr. e acompanhado por mentores da SP Advisors ao longo das entregas diárias."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {ibbcMentors.map((m) => (
            <Reveal key={m.id} className="lg:col-span-7">
              <article className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={160}
                    height={160}
                    className="h-32 w-32 shrink-0 rounded-2xl object-cover"
                  />
                ) : (
                  <AssetPlaceholder
                    label={`Retrato de ${m.name}`}
                    ratio="aspect-square"
                    className="w-32 shrink-0"
                  />
                )}

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-deep">
                    {m.role}
                  </p>
                  {m.bio ? (
                    <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink-muted">
                      {m.bio}
                    </p>
                  ) : null}
                  {m.linkedin ? (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 py-1.5 text-sm font-semibold text-ink transition-colors hover:text-brand-deep"
                    >
                      LinkedIn
                      <span aria-hidden="true">↗</span>
                      <span className="sr-only">
                        {" "}
                        de {m.name} (abre em nova aba)
                      </span>
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}

          {creditedMentors.length > 0 ? (
            <Reveal delay={120} className="lg:col-span-5">
              <div className="rounded-2xl border border-line bg-surface-alt p-7">
                <h3 className="text-sm font-semibold tracking-tight">
                  Mentores das edições
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Profissionais que acompanharam as turmas do boot camp — boa
                  parte deles ex-campers do próprio programa.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {creditedMentors.map((name) => (
                    <li
                      key={name}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
