import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ibbcOutcomes } from "@/data/bootcamp/outcomes";

export default function BootcampOutcomes() {
  return (
    <section
      id="o-que-voce-constroi"
      aria-labelledby="constroi-titulo"
      className="scroll-mt-20 bg-surface py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="O que você constrói"
            id="constroi-titulo"
            title="No fim, você tem o trabalho na mão."
            lead="Não é uma grade cumprida. É um conjunto de entregas que você produziu e consegue defender numa entrevista."
          />
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {ibbcOutcomes.map((o, i) => (
            <Reveal as="li" key={o.id} delay={i * 40} className="block bg-white">
              <div className="group h-full p-7 transition-colors duration-300 hover:bg-surface-alt">
                <span
                  aria-hidden="true"
                  className="block h-1.5 w-8 rounded-full bg-brand transition-all duration-300 group-hover:w-12"
                />
                <h3 className="mt-5 text-base font-semibold tracking-tight">
                  {o.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {o.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
