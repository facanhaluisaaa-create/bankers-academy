import type { IbbcJourneyStage } from "../_data/types";

/**
 * A Jornada do camper SEM fotografia — decisão do cliente (02/09): nada
 * de espaço reservado nem foto só para preencher. Cada etapa ganha um
 * microelemento gráfico ligado ao que ela é (palavras-chave, tabela
 * abstrata, blocos de modelo, páginas do Pitchbook), todos sem números
 * ou dados inventados. Os textos são os de _data/journey.ts.
 */

/* ── microelementos por etapa ─────────────────────────────────── */

const chip =
  "rounded-full border border-ink/15 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink/70";
const rotulo =
  "text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60";

function Chips({ itens }: { itens: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Temas">
      {itens.map((i) => (
        <li key={i} className={chip}>
          {i}
        </li>
      ))}
    </ul>
  );
}

/** Sequência de rótulos ligados por uma linha: SETOR → PLAYERS → DRIVERS */
function Sequencia({ itens, destaqueUltimo = false }: { itens: string[]; destaqueUltimo?: boolean }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-2" aria-label="Sequência">
      {itens.map((i, n) => (
        <li key={i} className="flex items-center gap-3">
          {n > 0 ? <span aria-hidden="true" className="block h-px w-6 bg-brand-deep/60" /> : null}
          <span
            className={`text-xs font-bold uppercase tracking-[0.18em] ${
              destaqueUltimo && n === itens.length - 1 ? "text-brand-deep" : "text-ink/70"
            }`}
          >
            {i}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** Tabela abstrata de comparáveis: cabeçalhos reais, linhas sem dado. */
function TabelaAbstrata() {
  const linhas = [
    ["w-10", "w-16", "w-12"],
    ["w-14", "w-10", "w-16"],
    ["w-8", "w-14", "w-10"],
  ];
  return (
    <div aria-label="Representação abstrata de uma tabela de comparáveis" role="img" className="rounded-2xl border border-line bg-white p-5">
      <div className="grid grid-cols-3 gap-4 border-b border-line pb-3">
        {["Peers", "Múltiplos", "Benchmarking"].map((h) => (
          <span key={h} className={rotulo}>
            {h}
          </span>
        ))}
      </div>
      <div className="mt-3 space-y-3">
        {linhas.map((l, i) => (
          <div key={i} className="grid grid-cols-3 gap-4">
            {l.map((w, j) => (
              <span key={j} className={`block h-2 rounded-full bg-ink/10 ${w}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Blocos empilhados e conectados: PROJEÇÕES → MODELO INTEGRADO → VALUATION */
function BlocosModelo() {
  const blocos = ["Projeções", "Modelo integrado", "Valuation"];
  return (
    <ol className="flex flex-col items-start" aria-label="Construção do modelo">
      {blocos.map((b, i) => (
        <li key={b} className="flex flex-col items-start">
          {i > 0 ? <span aria-hidden="true" className="ml-6 block h-6 w-px bg-brand-deep/60" /> : null}
          <span
            className={`rounded-xl border px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] ${
              i === blocos.length - 1
                ? "border-brand-deep bg-brand text-ink"
                : "border-line bg-white text-ink/75"
            }`}
          >
            {b}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** O Pitchbook como conjunto de páginas: representação da entrega, não um documento real. */
function PaginasPitchbook() {
  const paginas = ["Capa", "Setor", "Companhias", "Comparáveis", "Valuation", "Conclusão"];
  return (
    <figure>
      <ol className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-3" aria-label="Páginas do Pitchbook">
        {paginas.map((p, i) => (
          <li
            key={p}
            className={`flex aspect-[3/4] flex-col justify-between rounded-lg border p-3 shadow-sm ${
              i === 0 ? "border-ink bg-ink text-white" : "border-line bg-white text-ink"
            }`}
          >
            <span aria-hidden="true" className={`block h-1 w-6 rounded-full ${i === 0 ? "bg-brand" : "bg-brand-deep"}`} />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]">{p}</span>
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-xs text-ink/60">
        Representação da entrega final, não um documento real.
      </figcaption>
    </figure>
  );
}

/** O fechamento: CONSTRÓI → ORGANIZA → APRESENTA → DEFENDE O PITCHBOOK */
function RailFinal() {
  const passos = ["Constrói", "Organiza", "Apresenta", "Defende o Pitchbook"];
  return (
    <ol className="flex flex-wrap items-center gap-x-4 gap-y-3" aria-label="Encerramento">
      {passos.map((p, i) => (
        <li key={p} className="flex items-center gap-4">
          {i > 0 ? <span aria-hidden="true" className="text-brand-deep">→</span> : null}
          <span
            className={`text-lg font-semibold tracking-tight sm:text-2xl ${
              i === passos.length - 1 ? "text-brand-deep" : "text-ink"
            }`}
          >
            {p}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** Qual microelemento acompanha cada etapa (pelo id em _data/journey.ts). */
function Visual({ id }: { id: string }) {
  switch (id) {
    case "pre-work":
      return <Chips itens={["Finanças", "Contabilidade", "Valuation", "Modelagem", "M&A"]} />;
    case "setor":
      return <Sequencia itens={["Setor", "Players", "Drivers"]} />;
    case "analises":
      return <Sequencia itens={["Releases", "Demonstrações", "Dados", "Tese"]} destaqueUltimo />;
    case "comparables":
      return <TabelaAbstrata />;
    case "modelagem":
      return <BlocosModelo />;
    case "material":
      return <Sequencia itens={["Gráficos", "Exhibits", "Narrativa"]} />;
    case "pitchbook":
      return <PaginasPitchbook />;
    case "apresentacao":
      return <RailFinal />;
    default:
      return null;
  }
}

/* ── as etapas ────────────────────────────────────────────────── */

export default function JornadaEtapas({ etapas }: { etapas: IbbcJourneyStage[] }) {
  const ultima = etapas.length - 1;
  return (
    <ol className="relative border-l border-line">
      {etapas.map((stage, i) => {
        const final = i === ultima;
        const numero = String(i + 1).padStart(2, "0");
        return (
          <li key={stage.id} className="relative pb-16 pl-8 last:pb-0 sm:pl-12 lg:pb-20">
            {/* marcador sobre o trilho */}
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-2 block h-[13px] w-[13px] rounded-full border-2 ${
                final ? "border-brand-deep bg-brand" : "border-line bg-white"
              }`}
            />

            {final ? (
              /* A última etapa é um bloco cheio e limpo: texto + o rail. */
              <div>
                <p className="text-sm font-bold tabular-nums text-brand-deep">{numero}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                  {stage.title}
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">{stage.description}</p>
                <div className="mt-8 border-t border-line pt-8">
                  <Visual id={stage.id} />
                </div>
              </div>
            ) : (
              /* Demais etapas: texto e microelemento alternando de lado */
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                  <p className="text-sm font-bold tabular-nums text-brand-deep">
                    {numero}
                    <span className="ml-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
                      {stage.label}
                    </span>
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {stage.title}
                  </h2>
                  <p className="mt-3 max-w-xl leading-7 text-ink/70">{stage.description}</p>
                </div>
                <div className="lg:col-span-5 lg:self-center">
                  <Visual id={stage.id} />
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/** Trilho compacto de progressão: só números e nomes curtos, uma linha. */
export function JornadaTrilho({ etapas }: { etapas: IbbcJourneyStage[] }) {
  return (
    <ol className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-8 sm:grid-cols-4" aria-label="Progressão da jornada">
      {etapas.map((stage, i) => (
        <li key={stage.id} className="flex items-baseline gap-3">
          <span className="text-sm font-bold tabular-nums text-brand-deep">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-semibold tracking-tight">{stage.curto ?? stage.label}</span>
        </li>
      ))}
    </ol>
  );
}
