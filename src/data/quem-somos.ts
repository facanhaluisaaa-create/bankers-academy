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

export type Membro = {
  id: string;
  nome: string;
  cargo: string;
  grupo: "lideranca" | "execucao";
  foto?: string;
  linkedin?: string;
  /** Turma do IBBC, quando a pessoa passou pelo boot camp antes de entrar. */
  ibbcTurma?: number;
  /** Voltou como mentor de uma edição seguinte. */
  ibbcMentor?: boolean;
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
      "JR Securato Jr começa como educador na FIA e na Saint Paul, e conduz treinamentos em bancos como o Deutsche Bank em Nova Iorque. É essa base que vira a metodologia dos programas.",
  },
  {
    id: "ibbc",
    periodo: "2018",
    titulo: "Nasce o Investment Banking Boot Camp",
    texto:
      "A primeira edição nasce com 5 alunos, voltada à formação interna da SP Advisors. Vira uma das bases da escola — e, mais tarde, a porta de entrada de parte do próprio time.",
    destaque: true,
    href: "/bootcamp",
  },
  {
    id: "site-ib",
    periodo: "2019",
    titulo: "Investment Banking Brasil",
    texto:
      "Nasce o investmentbanking.com.br, reunindo conteúdos voltados a universitários interessados em Investment Banking.",
  },
  {
    id: "digital",
    periodo: "2021",
    titulo: "Expansão digital e comunidade",
    texto:
      "A presença digital se expande e a base salta de 800 para mais de 12 mil seguidores — e passa a mostrar de perto as dores dos universitários brasileiros.",
  },
  {
    id: "ba",
    periodo: "2022",
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
      "Inauguração de auditório próprio e publicação do livro “De cabeça no Mercado Financeiro”, com os conteúdos integrados ao site oficial.",
  },
];

/* ────────────────────── 4. SECURATO JR. ────────────────────── */

export const securatoNome = "José Roberto Securato Junior";

export const securatoResumo =
  "Depois de anos executando e liderando transações complexas — M&A, IPOs, private equity, dívida e capital de risco — levou a experiência de mesa para a sala de aula, e fundou a Bankers Academy para encurtar a distância entre a formação dos estudantes e o que o mercado realmente cobra.";

export const securatoCredenciais: Credencial[] = [
  { id: "financas", valor: "+20 anos", rotulo: "em finanças corporativas" },
  { id: "ib", valor: "14 anos", rotulo: "em Investment Banking", aConfirmar: true },
  { id: "db", valor: "Deutsche Bank", rotulo: "São Paulo e Nova Iorque" },
  { id: "bnp", valor: "BNP Paribas", rotulo: "Investment Banking" },
  { id: "spa", valor: "SP Advisors", rotulo: "M&A — e SP Capital Partners, capital de risco" },
  { id: "professor", valor: "FIA e Saint Paul", rotulo: "professor desde os anos 2000" },
  { id: "phd", valor: "PhD", rotulo: "em Finanças" },
];

/** Conselhos de administração, conforme o mapa de conteúdo. */
export const securatoConselhos = [
  { nome: "Brasilata", desde: 2014, o_que: "indústria de embalagens de aço" },
  { nome: "Super Rico", desde: 2023, o_que: "planejamento financeiro" },
];

export const securatoPonte =
  "Em 2018, essa combinação de mercado e educação deu origem ao Investment Banking Boot Camp.";

/* ─────────────────────── 5. NOSSO TIME ────────────────────── */

/**
 * Time da Bankers Academy, conforme o mapa de conteúdo do cliente.
 *
 * `ibbcTurma` foi cruzado com o arquivo oficial de edições anteriores
 * (src/data/bootcamp/alumni.ts): três pessoas do time de execução são
 * ex-campers do próprio boot camp, e uma delas voltou como mentora.
 * Nada aqui é inferido — os dois lados vêm de fonte documentada.
 *
 * `foto` e `linkedin` ficam vazios até chegarem; o card se adapta.
 */
export const time: Membro[] = [
  { id: "securato", nome: "JR Securato Jr", cargo: "Founder", grupo: "lideranca", foto: "/images/quem-somos/securato-jr.jpg" },
  { id: "andrea", nome: "Andrea Securato", cargo: "Co-founder", grupo: "lideranca" },
  { id: "arnaldo", nome: "Arnaldo Mello", cargo: "Partner (Tabula)", grupo: "lideranca" },
  { id: "jaqueline", nome: "Jaqueline Sanches", cargo: "Partner", grupo: "lideranca" },

  { id: "giovanna", nome: "Giovanna Giorgio", cargo: "Execution Team", grupo: "execucao", ibbcTurma: 11, ibbcMentor: true },
  { id: "nayarah", nome: "Nayarah Aiko", cargo: "Execution Team", grupo: "execucao", ibbcTurma: 13 },
  { id: "sophia", nome: "Sophia Torrezan", cargo: "Execution Team", grupo: "execucao" },
  { id: "rayara", nome: "Rayara Rodrigues", cargo: "Execution Team", grupo: "execucao" },
  { id: "anaclara", nome: "Ana Clara Dezorzi", cargo: "Execution Team", grupo: "execucao", ibbcTurma: 11 },
];

/** Quantos do time entraram pela porta do próprio boot camp. */
export const timeExCampers = time.filter((m) => m.ibbcTurma !== undefined).length;

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
