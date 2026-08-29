import type { IbbcJourneyStage } from "./types";

/**
 * The progression arc of the boot camp.
 *
 * Confirmed by official material: the programme runs 5 weeks and is
 * organised in 9 stages culminating in the delivery of a final Pitchbook,
 * with daily deliverables and mentor accompaniment.
 *
 * NOTE: the official titles of the 9 individual stages are not published
 * in the material supplied. The phases below describe the confirmed
 * progression only. Replace this array with the 9 named stages once
 * Bankers Academy provides them — the component renders any length.
 */
export const ibbcJourney: IbbcJourneyStage[] = [
  {
    id: "pre-work",
    label: "Pre-Work",
    title: "Nivelamento antes da largada",
    description:
      "Antes da primeira semana, você percorre o conteúdo de nivelamento em finanças, contabilidade, valuation, modelagem e M&A. Todo mundo chega ao primeiro dia falando a mesma língua.",
  },
  {
    id: "setor",
    label: "Etapa inicial",
    title: "Entender o setor",
    description:
      "Cada camper recebe um setor para cobrir. O trabalho começa por entender a dinâmica competitiva, os drivers de receita e quem são os players relevantes.",
  },
  {
    id: "analises",
    label: "Análises",
    title: "Análise setorial e das companhias",
    description:
      "Leitura de releases, demonstrações e dados de mercado até transformar informação dispersa em uma tese de análise defensável.",
  },
  {
    id: "comparables",
    label: "Comparables",
    title: "Comparáveis e benchmarking",
    description:
      "Construção do universo de comparáveis, múltiplos e leitura crítica do que o mercado está de fato precificando.",
  },
  {
    id: "modelagem",
    label: "Modelagem",
    title: "Modelagem financeira e valuation",
    description:
      "Projeções, modelo integrado e valuation do seu setor — com entregas diárias e revisão de mentores da SP Advisors.",
  },
  {
    id: "material",
    label: "Construção",
    title: "Construção do material",
    description:
      "As análises viram páginas: gráficos, exhibits e a narrativa que sustenta a recomendação.",
  },
  {
    id: "pitchbook",
    label: "Pitchbook",
    title: "Pitchbook final",
    description:
      "O material consolidado no formato que um banco de investimento entrega ao cliente. É a peça que fecha a jornada.",
  },
  {
    id: "apresentacao",
    label: "Encerramento",
    title: "Apresentação final e certificado",
    description:
      "Você apresenta e defende o seu Pitchbook. Ao concluir a experiência, recebe o certificado de 250 horas de treinamento prático em Investment Banking.",
  },
];
