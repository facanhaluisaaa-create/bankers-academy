import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ibbcEditions } from "@/data/bootcamp/editions";
import { ibbcAlumni } from "@/data/bootcamp/alumni";
import { ibbcLinks } from "@/data/bootcamp/config";

/** Campers published for a given cohort. */
function campersOf(cohort: number) {
  return ibbcAlumni.filter((a) => a.cohort === cohort);
}

export default function BootcampEditions() {
  return (
    <section
      id="edicoes"
      aria-labelledby="edicoes-titulo"
      className="scroll-mt-20 bg-surface py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Edições anteriores"
            id="edicoes-titulo"
            title="Uma história que começa em 2018."
            lead="O boot camp acontece duas vezes por ano, em janeiro e em julho. Cada edição forma uma turma nova — e uma parte dela volta como mentora da seguinte."
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {ibbcEditions.map((e, i) => {
            const campers = campersOf(e.cohort);
            return (
              <Reveal
                as="li"
                key={`${e.cohort}-${e.year}-${e.term}`}
                delay={Math.min(i, 6) * 40}
                className="block"
              >
                <article
                  className={`flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ${
                    e.upcoming
                      ? "border-brand bg-brand/10"
                      : "border-line bg-white hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-lg hover:shadow-black/5"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">
                      IBBC {e.cohort}
                    </h3>
                    <p className="text-sm font-medium tabular-nums text-ink-muted">
                      {e.term} {e.year}
                    </p>
                  </div>

                  {e.upcoming ? (
                    <p className="mt-3 text-sm font-semibold text-brand-deep">
                      Próxima edição
                    </p>
                  ) : null}

                  {campers.length > 0 ? (
                    <p className="mt-3 text-sm text-ink-muted">
                      {campers.length}{" "}
                      {campers.length === 1 ? "camper" : "campers"}
                    </p>
                  ) : null}

                  {e.mentors && e.mentors.length > 0 ? (
                    <div className="mt-4 border-t border-line pt-4">
                      <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                        Mentores
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink">
                        {e.mentors.join(" · ")}
                      </p>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </ul>

        <Reveal>
          <div className="mt-12 text-center">
            <Button href={ibbcLinks.previousEditions} variant="secondary">
              Ver o arquivo completo de edições
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
