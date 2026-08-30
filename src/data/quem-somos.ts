/**
 * Conteúdo da página Quem Somos.
 *
 * Transcrito da página publicada em bankersacademy.com.br/quem-somos.
 * Textos verbatim — não reescrever sem validar com a Bankers Academy.
 */

export type Marco = {
  id: string;
  periodo: string;
  titulo: string;
  texto: string;
};

export type Parceiro = {
  id: string;
  nome: string;
  descricao: string;
};

/** Os três pilares citados no texto de abertura. */
export const pilares = ["Confiança", "Inovação", "Comunidade"] as const;

export const missao =
  "Transformar qualquer pessoa para maximizar o seu potencial profissional.";

export const valores = [
  "Excelência precede o sucesso",
  "Fazer para evoluir",
  "Consistência, consistência, consistência",
  "Conhecimento aplicado",
  "Atitude é melhor que expertise",
  "Inconformismo",
  "Purpose driven",
  "Pertencer transforma",
] as const;

export const historia: Marco[] = [
  {
    id: "jornada",
    periodo: "1995–2018",
    titulo: "Jornada",
    texto:
      "A trajetória de ensino de JR Securato Jr começou antes mesmo da Bankers Academy, com uma atuação marcada por educação, mercado financeiro e formação prática. Sua experiência como professor, executivo e mentor ajudou a construir a base da metodologia que hoje orienta os programas.",
  },
  {
    id: "ibbc",
    periodo: "2018",
    titulo: "Investment Banking Boot Camp",
    texto:
      "Em 2018 nasceu a primeira edição do Investment Banking Boot Camp, criado para capacitar gratuitamente profissionais interessados em Investment Banking. O programa aproximou jovens talentos da rotina prática do mercado financeiro e se tornou uma das bases da atuação da escola.",
  },
  {
    id: "site-ib",
    periodo: "2019",
    titulo: "Site Investment Banking Brasil",
    texto:
      "Em 2019 foi criado o site Investment Banking Brasil para consolidar conteúdos, treinamentos e informações sobre o mercado financeiro em um só lugar, tornando o conhecimento sobre Investment Banking mais acessível e organizado.",
  },
  {
    id: "midia",
    periodo: "2021",
    titulo: "Canal de mídia social",
    texto:
      "A partir de 2021, a atuação digital ganhou força, ampliando o alcance dos conteúdos sobre mercado financeiro, carreira e educação. A presença nas redes permitiu entender melhor as dores dos universitários brasileiros e apoiar milhares de pessoas em sua jornada profissional.",
  },
  {
    id: "ba",
    periodo: "2022",
    titulo: "Bankers Academy",
    texto:
      "Com o sucesso dos treinamentos e o lançamento de cursos complementares, a Bankers Academy nasceu como uma escola dedicada a colocar universitários e jovens profissionais no mercado financeiro, unindo conteúdo técnico, prática e orientação de carreira.",
  },
  {
    id: "yib",
    periodo: "2023",
    titulo: "You in Banking",
    texto:
      "Com o patrocínio do J.P. Morgan, foi lançado o You in Banking, programa de inclusão de negros e mulheres no mercado financeiro através da educação. A iniciativa impactou mais de 1.000 pessoas e formou 25 participantes.",
  },
  {
    id: "pulo",
    periodo: "2024",
    titulo: "O grande pulo!",
    texto:
      "Em 2024, a Bankers Academy expandiu sua atuação com novas iniciativas, conteúdos e programas, consolidando sua presença como uma referência em educação financeira aplicada ao mercado.",
  },
];

export const securatoParagrafos = [
  "Com mais de 20 anos de experiência em finanças corporativas, JR Securato Jr executou e liderou transações complexas em diferentes setores e geografias, incluindo fusões e aquisições, ofertas públicas iniciais, private equity, dívida e capital de risco.",
  "Após anos dedicados ao Investment Banking, com passagens por instituições como Deutsche Bank e BNP Paribas, fundou a SP Advisors e a SP Capital Partners, atuando como sócio fundador e liderando projetos de assessoria financeira corporativa, M&A, captação de capital privado e estratégia.",
  "Sua paixão por educação e inovação levou à criação da Bankers Academy, uma escola voltada a preencher a lacuna entre a formação dos estudantes e as demandas reais do mercado financeiro.",
];

export const securatoIniciativas = [
  "Tabula, plataforma de treinamento online e marketplace fundada em 2015",
  "CDI — Clube de Investimento, programa de treinamento em finanças para jovens",
  "You, She and Black in Banking, programa de inclusão social em parceria com a Bankers Academy e o J.P. Morgan",
  "Liga das Ligas de Finanças",
  "Investment Banking Boot Camp",
  "Professor regular da Saint Paul Escola de Negócios e da FIA",
];

export const parceiros: Parceiro[] = [
  {
    id: "you-in-banking",
    nome: "You in Banking",
    descricao:
      "Programa de inclusão de negros e mulheres no mercado financeiro através da educação.",
  },
  {
    id: "tabula",
    nome: "Tabula",
    descricao:
      "Plataforma de treinamento online e marketplace de cursos do mercado financeiro.",
  },
  {
    id: "sp-locus",
    nome: "SP Locus",
    descricao:
      "Iniciativa voltada à formação executiva e desenvolvimento profissional.",
  },
  {
    id: "superrico",
    nome: "SuperRico",
    descricao:
      "Conteúdo de educação financeira e investimentos para o público brasileiro.",
  },
  {
    id: "ib-brasil",
    nome: "Site Investment Banking Brasil",
    descricao:
      "Hub de conteúdos, treinamentos e informações sobre Investment Banking.",
  },
  {
    id: "digital-com-sal",
    nome: "Digital com Sal",
    descricao: "Parceiro de comunicação e estratégia digital.",
  },
  {
    id: "eolica",
    nome: "Eólica",
    descricao: "Parceiro institucional em projetos educacionais e de carreira.",
  },
  {
    id: "oficina-do-livro",
    nome: "Oficina do Livro",
    descricao:
      "Parceiro editorial em projetos de educação e conhecimento aplicado.",
  },
  {
    id: "duotalk",
    nome: "DuoTalk",
    descricao: "Tecnologia conversacional e atendimento digital.",
  },
  {
    id: "tikkanen",
    nome: "Tikkanen",
    descricao:
      "Parceiro estratégico em iniciativas de mercado e desenvolvimento.",
  },
];
