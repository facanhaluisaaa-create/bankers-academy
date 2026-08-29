import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import {
  ibbcLinks,
  BA_WHATSAPP_DISPLAY,
  ibbcFacts,
} from "@/data/bootcamp/config";

export default function BootcampCta() {
  return (
    <section
      id="participar"
      aria-labelledby="cta-titulo"
      className="on-dark relative scroll-mt-20 overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "var(--color-brand)" }}
      />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="cta-titulo"
              className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Pronto para viver a sua edição?
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              A participação no Investment Banking Boot Camp passa por uma
              entrevista online. Fale com a equipe da Bankers Academy para
              agendar a sua e entender os próximos passos.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={ibbcLinks.apply}>Agendar entrevista</Button>
              <Button href={ibbcLinks.coursePage} variant="ghost">
                Ver a página oficial do programa
              </Button>
            </div>

            <p className="mt-8 text-sm text-white/55">
              Ou fale direto no WhatsApp {BA_WHATSAPP_DISPLAY} · {ibbcFacts.weeks}{" "}
              semanas · {ibbcFacts.stages} etapas · certificado de{" "}
              {ibbcFacts.hours} horas
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
