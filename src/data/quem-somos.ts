/**
 * Conteúdo da página Quem Somos.
 *
 * PROCEDÊNCIA DOS DADOS
 * ─────────────────────
 * ✅ CONFIRMADO  = publicado hoje em bankersacademy.com.br/quem-somos
 * ⚠️  A CONFIRMAR = fornecido pelo cliente no briefing, mas não consta em
 *                  nenhuma fonte publicada a que temos acesso. Validar com
 *                  a Bankers Academy antes de ir ao ar.
 */

export type Marco = {
  id: string;
  periodo: string;
  titulo: string;
  texto: string;
  /** Caminho da foto do marco. A timeline já suporta; preencher depois. */
  imagem?: string;
  /** Marca visualmente o marco como divisor de águas. */
  destaque?: boolean;
  /** Rota interna relacionada ao marco. */
  href?: string;
  periodoAConfirmar?: boolean;
};

export type Pilar = { id: string; titulo: string; texto: string };

export type Credencial = { id: string; valor: string; rotulo: string; aConfirmar?: boolean };

export type Programa = {
  id: string;
  nome: string;
  descricao: string;
  href: string;
  externo?: boolean;
  destaque?: boolean;
};

export type Mentor = {
  id: string;
  nome?: string;
  cargo?: string;
  instituicao?: string;
  especialidade?: string;
  foto?: string;
  linkedin?: string;
};

export type Depoimento = {
  id: string;
  nome: string;
  programa?: string;
  texto?: string;
  foto?: string;
  linkedin?: string;
};

export type Parceiro = { id: string; nome: string; descricao: string; logo?: string };

/* ────────────────────────── 1. HERO ────────────────────────── */

export const heroTitulo = ["Do mercado para a sala.", "Da sala para a carreira."];

export const heroTexto =
  "A Bankers Academy aproxima universitários e jovens profissionais da realidade do mercado financeiro por meio de formação prática, experiência e orientação de carreira.";

/** Barra de autoridade logo abaixo do hero. */
export const autoridade: Credencial[] = [
  { id: "anos", valor: "+20 anos", rotulo: "de experiência em finanças corporativas" },
  { id: "ib", valor: "14 anos", rotulo: "em Investment Banking", aConfirmar: true },
  { id: "ibbc", valor: "Desde 2018", rotulo: "o Investment Banking Boot Camp" },
  { id: "pratica", valor: "Formação", rotulo: "prática, do primeiro dia" },
];

/* ─────────────────── 2. POR QUE EXISTIMOS ─────────────────── */

export const pilares: Pilar[] = [
  {
    id: "conhecimento",
    titulo: "Conhecimento aplicado",
    texto:
      "Contabilidade, valuation e modelagem ensinados do jeito que são usados numa mesa de trabalho.",
  },
  {
    id: "experiencia",
    titulo: "Experiência",
    texto:
      "Entregas reais, prazos reais e feedback de quem vive o mercado todo dia.",
  },
  {
    id: "carreira",
    titulo: "Carreira",
    texto:
      "Repertório para o processo seletivo e uma rede de pessoas que já atravessou o mesmo caminho.",
  },
];

/* ───────────────────── 3. NOSSA HISTÓRIA ───────────────────── */

export const historia: Marco[] = [
  {
    id: "jornada",
    periodo: "1995–2018",
    titulo: "Trajetória de mercado, ensino e mentoria",
    texto:
      "A atuação de JR Securato Jr como professor, executivo e mentor construiu a base da metodologia que orienta os programas até hoje.",
  },
  {
    id: "ibbc",
    periodo: "2018",
    titulo: "Nasce o Investment Banking Boot Camp",
    texto:
      "A primeira edição do IBBC aproximou jovens talentos da rotina prática do mercado financeiro e virou uma das bases da escola.",
    destaque: true,
    href: "/bootcamp",
  },
  {
    id: "site-ib",
    periodo: "2019",
    titulo: "Investment Banking Brasil",
    texto:
      "Conteúdos, treinamentos e informações sobre o mercado reunidos em um só lugar, tornando o tema mais acessível e organizado.",
  },
  {
    id: "digital",
    periodo: "2021",
    titulo: "Expansão digital e comunidade",
    texto:
      "A presença nas redes ampliou o alcance dos conteúdos e permitiu entender de perto as dores dos universitários brasileiros.",
  },
  {
    id: "ba",
    // ⚠️ A CONFIRMAR: o site publica 2022; o briefing indica 2022/2023.
    periodo: "2022",
    periodoAConfirmar: true,
    titulo: "Bankers Academy",
    texto:
      "A escola nasce dedicada a colocar universitários e jovens profissionais no mercado, unindo conteúdo técnico, prática e orientação de carreira.",
  },
  {
    id: "yib",
    periodo: "2023",
    titulo: "You in Banking",
    texto:
      "Com patrocínio do J.P. Morgan, o programa de inclusão de negros e mulheres no mercado financeiro impactou mais de 1.000 pessoas e formou 25 participantes.",
    destaque: true,
  },
  {
    id: "hoje",
    periodo: "2024 → hoje",
    titulo: "Expansão do ecossistema",
    texto:
      "Novas iniciativas, conteúdos e programas consolidam a Bankers Academy como referência em educação financeira aplicada ao mercado.",
  },
];

/* ────────────────────── 4. SECURATO JR. ────────────────────── */

export const securatoNome = "José Roberto Securato Junior";

export const securatoResumo =
  "Depois de anos executando e liderando transações complexas — M&A, IPOs, private equity, dívida e capital de risco — levou a experiência de mesa para a sala de aula, e fundou a Bankers Academy para encurtar a distância entre a formação dos estudantes e o que o mercado realmente cobra.";

export const securatoCredenciais: Credencial[] = [
  { id: "financas", valor: "+20 anos", rotulo: "em finanças corporativas" },
  { id: "ib", valor: "14 anos", rotulo: "em Investment Banking", aConfirmar: true },
  {
    id: "db",
    valor: "Deutsche Bank",
    rotulo: "São Paulo e Nova Iorque",
    aConfirmar: true, // ⚠️ o site confirma o banco, não as praças
  },
  { id: "bnp", valor: "BNP Paribas", rotulo: "Investment Banking" },
  { id: "spa", valor: "SP Advisors", rotulo: "e SP Capital Partners — sócio fundador" },
  { id: "phd", valor: "PhD", rotulo: "em Finanças", aConfirmar: true },
];

export const securatoPonte =
  "Em 2018, essa combinação de mercado e educação deu origem ao Investment Banking Boot Camp.";

/* ─────────────────── 5. PROFESSORES / MENTORES ─────────────── */

/**
 * Grid preparado, sem nomes inventados.
 *
 * Existem quatro perfis do LinkedIn no acervo enviado (Alexandre Paixão,
 * Marcus Piellusch, Walter Eclache e Tatiana Tafarello), mas nada no
 * material confirma cargo, instituição ou especialidade de cada um — nem
 * que atuem como professores. Preencher só depois de validar.
 */
export const mentores: Mentor[] = [
  { id: "mentor-1" },
  { id: "mentor-2" },
  { id: "mentor-3" },
  { id: "mentor-4" },
];

/* ──────────────────── 6. APRENDER FAZENDO ─────────────────── */

export const aprenderFazendo: Pilar[] = [
  {
    id: "modelar",
    titulo: "Modelar",
    texto: "Projeções e modelo integrado construídos do zero, na sua planilha.",
  },
  {
    id: "avaliar",
    titulo: "Avaliar",
    texto: "Comparáveis, múltiplos e valuation — com as premissas defendidas.",
  },
  {
    id: "apresentar",
    titulo: "Apresentar",
    texto: "A análise vira material, e o material vira uma defesa de pé.",
  },
  {
    id: "decidir",
    titulo: "Decidir",
    texto: "Recomendar um caminho e sustentar o porquê diante de quem pergunta.",
  },
];

/* ───────────────── 7. ECOSSISTEMA / PROGRAMAS ─────────────── */

export const programas: Programa[] = [
  {
    id: "ibbc",
    nome: "Investment Banking Boot Camp",
    descricao:
      "5 semanas de imersão, 9 etapas e um Pitchbook final apresentado. A experiência mais completa da escola.",
    href: "/bootcamp",
    destaque: true,
  },
  {
    id: "modelagem",
    nome: "Modelagem Financeira",
    descricao: "Construção de modelos financeiros aplicados ao mercado.",
    href: "https://www.bankersacademy.com.br/modelagemfinanceira",
    externo: true,
  },
  {
    id: "ib",
    nome: "Investment Banking",
    descricao: "Formação em Investment Banking, do nivelamento ao avançado.",
    href: "https://www.bankersacademy.com.br/investmentbanking",
    externo: true,
  },
  {
    id: "masterclass",
    nome: "Masterclass M&A",
    descricao: "Fusões e aquisições na prática de quem executa transações.",
    href: "https://www.bankersacademy.com.br/masterclass",
    externo: true,
  },
  {
    id: "credito",
    nome: "Crédito & DCM",
    descricao: "Crédito corporativo e mercado de dívida.",
    href: "https://www.bankersacademy.com.br/credito-dcm",
    externo: true,
  },
  {
    id: "yib",
    nome: "You in Banking",
    descricao:
      "Programa de inclusão de negros e mulheres no mercado financeiro através da educação, com patrocínio do J.P. Morgan.",
    href: "https://www.bankersacademy.com.br/quem-somos",
    externo: true,
  },
];

/* ───────────────────── 8. PROVA SOCIAL ────────────────────── */

/**
 * Vazio de propósito. Os cinco depoimentos do IBBC que temos
 * (src/data/bootcamp/testimonials.ts) ainda não têm texto autorizado, e a
 * seção não deve exibir frase inventada. Ao receber os textos, basta
 * preencher aqui — o componente já renderiza.
 */
export const depoimentos: Depoimento[] = [];

/* ─────────────────────── 9. PARCEIROS ─────────────────────── */

/** `logo` fica vazio até chegarem os arquivos reais. */
export const parceiros: Parceiro[] = [
  { id: "you-in-banking", nome: "You in Banking", descricao: "Inclusão no mercado financeiro pela educação." },
  { id: "tabula", nome: "Tabula", descricao: "Plataforma de treinamento online e marketplace de cursos." },
  { id: "sp-locus", nome: "SP Locus", descricao: "Formação executiva e desenvolvimento profissional." },
  { id: "superrico", nome: "SuperRico", descricao: "Educação financeira e investimentos." },
  { id: "ib-brasil", nome: "Investment Banking Brasil", descricao: "Hub de conteúdos sobre Investment Banking." },
  { id: "digital-com-sal", nome: "Digital com Sal", descricao: "Comunicação e estratégia digital." },
  { id: "eolica", nome: "Eólica", descricao: "Projetos educacionais e de carreira." },
  { id: "oficina-do-livro", nome: "Oficina do Livro", descricao: "Projetos editoriais e de conhecimento aplicado." },
  { id: "duotalk", nome: "DuoTalk", descricao: "Tecnologia conversacional e atendimento digital." },
  { id: "tikkanen", nome: "Tikkanen", descricao: "Iniciativas de mercado e desenvolvimento." },
];

/* ─────────────────────── Missão e valores ─────────────────── */

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
