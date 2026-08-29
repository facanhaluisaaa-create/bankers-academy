import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import AssetPlaceholder from "@/components/ui/AssetPlaceholder";
import { ibbcLinks, ibbcFacts } from "@/data/bootcamp/config";

const stats = [
  { value: `${ibbcFacts.weeks} semanas`, label: "de imersão" },
  { value: `${ibbcFacts.stages} etapas`, label: "com entregas diárias" },
  { value: "Pitchbook", label: "final apresentado" },
  { value: "Certificado", label: `${ibbcFacts.hours} horas` },
];

export default function BootcampHero() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink text-white">
      {/* Ambient brand wash — decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-[0.10] blur-3xl"
        style={{ background: "var(--color-brand)" }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-28">
          <div className="lg:col-span-6">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Desde {ibbcFacts.firstEditionYear} · Bankers Academy
            </p>

            <h1 className="text-balance text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-[3.75rem]">
              Investment Banking
              <span className="block text-brand">Boot Camp</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg font-medium leading-snug text-white sm:text-xl">
              Viva na prática a experiência de Investment Banking.
            </p>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/65">
              Da análise de um setor à construção e apresentação do Pitchbook
              final.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={ibbcLinks.apply}>Quero participar</Button>
              <Button href="#experiencia" variant="ghost" external={false}>
                Conheça a experiência
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-8 sm:grid-cols-4 lg:gap-x-4">
              {stats.map((s) => (
                <div key={s.value}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-xl font-semibold tracking-tight text-brand sm:text-2xl">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-[13px] leading-tight text-white/50">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <AssetPlaceholder
              label="Foto ou vídeo de abertura — campers trabalhando durante uma edição do IBBC"
              ratio="aspect-[4/3] lg:aspect-[5/4]"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
