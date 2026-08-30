import type { IbbcFaqItem } from "./types";

/**
 * Only questions whose answers are confirmed by official Bankers Academy
 * / SP Advisors material or by the physical certificate.
 *
 * NOT PUBLISHED (answers not confirmed — add once validated):
 *   · valor e condições de pagamento
 *   · datas exatas de cada edição
 *   · política de bolsas
 *   · pré-requisitos formais de curso/período
 */
export const ibbcFaq: IbbcFaqItem[] = [
  {
    id: "o-que-e",
    question: "O que é o Investment Banking Boot Camp?",
    answer:
      "É um treinamento intensivo de 5 semanas que simula o dia a dia de um analista de Investment Banking. A experiência é organizada em 9 etapas com entregas diárias e culmina na construção e apresentação de um Pitchbook final.",
  },
  {
    id: "para-quem",
    question: "Para quem é o programa?",
    answer:
      "Para universitários e jovens profissionais que querem entrar ou se preparar para Investment Banking e buscam transformar teoria em experiência prática antes de encarar um processo seletivo.",
  },
  {
    id: "duracao",
    question: "Quanto tempo dura?",
    answer:
      "São 5 semanas de imersão. O certificado emitido ao final corresponde a 250 horas de treinamento prático em Investment Banking.",
  },
  {
    id: "como-funciona",
    question: "Como funciona na prática?",
    answer:
      "Cada camper recebe um setor para cobrir e avança pelas 9 etapas do programa: análise do setor e das companhias, comparáveis, modelagem financeira, valuation, construção do material e, por fim, o Pitchbook. As entregas são diárias e acompanhadas por mentores da SP Advisors.",
  },
  {
    id: "pre-work",
    question: "O que é o Pre-Work?",
    answer:
      "É o conteúdo de nivelamento que antecede a imersão, com fundamentos de finanças, contabilidade, valuation, modelagem financeira e M&A. Ele garante que todos os campers comecem a primeira semana no mesmo ponto de partida.",
  },
  {
    id: "experiencia-previa",
    question: "Preciso ter experiência prévia?",
    answer:
      "Não é exigida experiência prévia em Investment Banking: os cursos de nivelamento estão incluídos e devem ser concluídos antes da imersão. O que o programa exige é dedicação para acompanhar o ritmo de entregas.",
  },
  {
    id: "selecao",
    question: "Como funciona o processo seletivo?",
    answer:
      "A participação passa por uma entrevista online. A matrícula é concluída após a aprovação nessa etapa.",
  },
  {
    id: "dedicacao",
    question: "Qual é a dedicação exigida?",
    answer:
      "O boot camp exige disponibilidade em tempo integral durante o período da edição, que acontece em janeiro ou em julho. São entregas diárias ao longo das 5 semanas.",
  },
  {
    id: "constroi",
    question: "O que o participante constrói?",
    answer:
      "Uma análise setorial completa, comparáveis, um modelo financeiro, o valuation do setor coberto e o Pitchbook final, que é apresentado no encerramento da experiência.",
  },
  {
    id: "certificado",
    question: "Existe certificado?",
    answer:
      "Sim. Ao concluir a experiência, o camper recebe o certificado do Investment Banking Boot Camp, referente a 250 horas de Practical Investment Banking Training, assinado por José Securato e emitido pela Bankers Academy.",
  },
  {
    id: "participar",
    question: "Como participar?",
    answer:
      "O primeiro passo é falar com a equipe da Bankers Academy para agendar a entrevista online do processo seletivo.",
  },
];
