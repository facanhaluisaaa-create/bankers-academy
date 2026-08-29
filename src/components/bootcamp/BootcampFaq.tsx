import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ibbcFaq } from "@/data/bootcamp/faq";

export default function BootcampFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-titulo"
      className="scroll-mt-20 bg-surface-alt py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                eyebrow="Perguntas frequentes"
                id="faq-titulo"
                title="O que costumam perguntar."
              />
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <ul className="divide-y divide-line border-y border-line">
                {ibbcFaq.map((item) => (
                  <li key={item.id}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[15px] font-semibold tracking-tight transition-colors hover:text-brand-deep sm:text-base [&::-webkit-details-marker]:hidden">
                        <h3>{item.question}</h3>
                        <span
                          aria-hidden="true"
                          className="relative h-4 w-4 shrink-0"
                        >
                          <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                          <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                        </span>
                      </summary>
                      <div className="pb-6 pr-10">
                        <p className="text-pretty text-[15px] leading-relaxed text-ink-muted">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
