import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { publishableTestimonials } from "@/data/bootcamp/testimonials";

/**
 * Renders nothing until at least one authorised quote exists, so the page
 * never ships a half-empty testimonial wall. See data/bootcamp/testimonials.ts.
 */
export default function BootcampTestimonials() {
  if (publishableTestimonials.length === 0) return null;

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-titulo"
      className="scroll-mt-20 bg-surface-alt py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos"
            id="depoimentos-titulo"
            title="Nas palavras de quem viveu."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {publishableTestimonials.map((t, i) => (
            <Reveal as="li" key={t.id} delay={i * 60} className="block">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                {t.quote ? (
                  <blockquote className="flex-1 text-pretty text-[15px] leading-relaxed text-ink">
                    <p>“{t.quote}”</p>
                  </blockquote>
                ) : (
                  <p className="flex-1 text-[15px] leading-relaxed text-ink-muted">
                    Depoimento publicado no LinkedIn.
                  </p>
                )}
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  {t.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.image}
                      alt=""
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : null}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold tracking-tight">
                      {t.name}
                    </p>
                    {t.edition || t.role ? (
                      <p className="mt-0.5 text-xs text-ink-muted">
                        {[t.role, t.edition].filter(Boolean).join(" · ")}
                      </p>
                    ) : null}
                  </div>
                  {t.linkedin && t.linkVerified ? (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto shrink-0 py-2 text-xs font-semibold text-ink-muted transition-colors hover:text-ink"
                    >
                      LinkedIn
                      <span className="sr-only">
                        {" "}
                        de {t.name} (abre em nova aba)
                      </span>
                    </a>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
