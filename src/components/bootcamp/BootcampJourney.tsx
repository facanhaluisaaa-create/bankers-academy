import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ibbcJourney } from "@/data/bootcamp/journey";
import { ibbcFacts } from "@/data/bootcamp/config";

export default function BootcampJourney() {
  return (
    <section
      id="jornada"
      aria-labelledby="jornada-titulo"
      className="scroll-mt-20 bg-surface-alt py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="A jornada do camper"
            id="jornada-titulo"
            title={`${ibbcFacts.weeks} semanas. Uma experiência completa.`}
            lead={`O programa é organizado em ${ibbcFacts.stages} etapas com entregas diárias. Abaixo, a progressão da experiência: do nivelamento que antecede a largada até o Pitchbook apresentado no encerramento.`}
          />
        </Reveal>

        <ol className="relative mt-16 lg:mt-20">
          {/* Continuous rail behind the markers */}
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-2 bottom-2 w-px bg-line lg:left-1/2 lg:-translate-x-1/2"
          />

          {ibbcJourney.map((stage, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal as="li" key={stage.id} className="relative block">
                <div
                  className={`relative flex gap-6 pb-12 last:pb-0 lg:gap-0 ${
                    right ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Marker */}
                  <div className="relative z-10 shrink-0 lg:absolute lg:left-1/2 lg:top-1 lg:-translate-x-1/2">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white shadow-sm"
                    >
                      <span className="h-2 w-2 rounded-full bg-brand" />
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`min-w-0 flex-1 lg:w-1/2 lg:flex-none ${
                      right ? "lg:pl-16" : "lg:pr-16 lg:text-right"
                    }`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-deep">
                      {stage.label}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-pretty text-[15px] leading-relaxed text-ink-muted">
                      {stage.description}
                    </p>
                  </div>

                  {/* Spacer so the opposite column stays empty on desktop */}
                  <div aria-hidden="true" className="hidden lg:block lg:w-1/2" />
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
