import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CertificateArtwork from "./CertificateArtwork";
import { ibbcFacts } from "@/data/bootcamp/config";

const marks = [
  { value: `${ibbcFacts.weeks} semanas`, label: "de imersão concluídas" },
  { value: `${ibbcFacts.stages} etapas`, label: "percorridas" },
  { value: "Pitchbook", label: "final apresentado" },
  { value: `${ibbcFacts.hours} horas`, label: "de treinamento prático" },
];

export default function BootcampCertificate() {
  return (
    <section
      id="certificado"
      aria-labelledby="certificado-titulo"
      className="on-dark scroll-mt-20 bg-ink py-20 text-white lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                dark
                eyebrow="O certificado"
                id="certificado-titulo"
                title="Leve sua experiência com você."
                lead="A jornada termina com a apresentação do Pitchbook — e com um documento que registra o que você construiu. O certificado do Investment Banking Boot Camp atesta 250 horas de Practical Investment Banking Training e é assinado por José Securato."
              />

              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-8">
                {marks.map((m) => (
                  <div key={m.value}>
                    <dt className="sr-only">{m.label}</dt>
                    <dd>
                      <span className="block text-lg font-semibold tracking-tight text-brand sm:text-xl">
                        {m.value}
                      </span>
                      <span className="mt-1 block text-[13px] leading-tight text-white/50">
                        {m.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <figure className="lg:rotate-[-1.1deg]">
                <CertificateArtwork />
                <figcaption className="mt-5 text-center text-xs leading-relaxed text-white/40">
                  Representação do certificado entregue ao final do Investment
                  Banking Boot Camp.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
