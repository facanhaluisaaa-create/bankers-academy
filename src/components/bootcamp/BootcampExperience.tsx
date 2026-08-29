import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AssetPlaceholder from "@/components/ui/AssetPlaceholder";
import Reveal from "@/components/ui/Reveal";

const actions = [
  {
    word: "ANALISAR",
    text: "Um setor inteiro é seu. Você cobre a dinâmica competitiva, os drivers e os players que movem o mercado.",
    photo: "Camper analisando dados de um setor durante a imersão",
  },
  {
    word: "MODELAR",
    text: "Projeções, modelo integrado, premissas defendidas linha a linha. Do zero, na sua planilha.",
    photo: "Campers em frente aos computadores, construindo o modelo financeiro",
  },
  {
    word: "AVALIAR",
    text: "Comparáveis, múltiplos e valuation. O número precisa se sustentar quando alguém pergunta por quê.",
    photo: "Mentor revisando o valuation com um camper",
  },
  {
    word: "APRESENTAR",
    text: "O Pitchbook na mesa e você de pé, defendendo a recomendação diante de quem vive isso todo dia.",
    photo: "Apresentação final do Pitchbook para a banca",
  },
];

export default function BootcampExperience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-titulo"
      className="scroll-mt-20 bg-surface py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="A experiência"
            id="experiencia-titulo"
            title="Você não vem só assistir."
            lead="O Investment Banking Boot Camp simula o dia a dia de um analista de Investment Banking. São entregas diárias, mentores acompanhando o trabalho e um setor real sob a sua responsabilidade — do primeiro dia até a apresentação final."
          />
        </Reveal>

        <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-24">
          {actions.map((a, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={a.word}>
                <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  <div
                    className={`lg:col-span-5 ${
                      flipped ? "lg:order-2 lg:col-start-8" : ""
                    }`}
                  >
                    <p
                      aria-hidden="true"
                      className="text-[11px] font-semibold tracking-[0.2em] text-brand-deep"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                      {a.word}
                    </h3>
                    <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-muted">
                      {a.text}
                    </p>
                  </div>

                  <div
                    className={`lg:col-span-7 ${flipped ? "lg:order-1 lg:col-start-1" : ""}`}
                  >
                    <AssetPlaceholder
                      label={a.photo}
                      ratio="aspect-[16/10]"
                      className="w-full"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
