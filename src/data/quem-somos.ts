/**
 * Conteúdo da página Quem Somos.
 *
 * ESCOPO
 * ──────
 * Esta página é autônoma. Não importa nada de src/data/bootcamp nem de
 * qualquer outro projeto: o Investment Banking Boot Camp é desenvolvido
 * separadamente e aqui aparece só em três lugares — o marco de 2018, um
 * card no ecossistema e o link do CTA.
 *
 * PROCEDÊNCIA DOS DADOS
 * ─────────────────────
 * ✅ publicado em bankersacademy.com.br/quem-somos, ou no mapa de conteúdo
 *    enviado pela Bankers Academy.
 * ⚠️ `aConfirmar: true` marca o que não consta em nenhuma fonte a que
 *    temos acesso. Validar antes de ir ao ar.
 */

/* ─────────────────────────── Tipos ─────────────────────────── */

export type Marco = {
  id: string;
  periodo: string;
  titulo: string;
  texto: string;
  /** Foto do marco. A timeline já suporta; preencher quando chegar. */
  imagem?: string;
  /** Texto alternativo da foto do marco; sem ele a foto é decorativa. */
  imagemAlt?: string;
  destaque?: boolean;
  href?: string;
};

export type Credencial = {
  id: string;
  valor: string;
  rotulo: string;
  aConfirmar?: boolean;
};

export type Lider = {
  id: string;
  nome: string;
  cargo: string;
  foto?: string;
  linkedin?: string;
};

export type Professor = {
  id: string;
  nome?: string;
  especialidade?: string;
  credencial?: string;
  foto?: string;
  linkedin?: string;
};

export type Iniciativa = {
  id: string;
  nome: string;
  descricao: string;
  href?: string;
  externo?: boolean;
  destaque?: boolean;
};

export type FotoCultura = {
  id: string;
  src?: string;
  alt: string;
  /** Descreve o que a foto precisa mostrar enquanto ela não existe. */
  pendente?: string;
  /** Ocupa duas colunas na galeria. */
  larga?: boolean;
  /** Mostra a foto completa, sem corte por object-cover. */
  inteira?: boolean;
};

/* ───────────────────── Links próprios da página ───────────────── */

export const links = {
  bootcamp: "/bootcamp",
  securatoLinkedin: "https://www.linkedin.com/in/josesecurato/",
  site: "https://www.bankersacademy.com.br",
} as const;

/* ─────────────── Rotas do hub Quem Somos ─────────────── */

/**
 * O Quem Somos é uma página-hub curta; o conteúdo longo vive nestas
 * quatro páginas internas.
 *
 * ⚠️ Sobre `ecossistema`: o pedido era apontar o quarto card para "a
 * página existente de Programas". Ela não existe — nem neste projeto
 * (só há /programas/investment-banking-bootcamp, sem índice) nem no site
 * no ar, cujo menu leva direto a /modelagemfinanceira, /investmentbanking,
 * /masterclass, /credito-dcm e /calendario, sem um /programas. Como
 * apontar para uma rota inexistente daria 404, o ecossistema virou página
 * interna: cada iniciativa dentro dela continua levando à página própria
 * no site, então nada é duplicado. Se a Bankers Academy criar /programas,
 * é só trocar o href deste card.
 */
export const rotas = {
  hub: "/quem-somos",
  historia: "/quem-somos/historia",
  lideranca: "/quem-somos/lideranca",
  especialistas: "/quem-somos/especialistas",
  ecossistema: "/quem-somos/ecossistema",
  /** Página dedicada e detalhada do fundador. */
  fundador: "/quem-somos/fundador",
} as const;

export type CardHub = {
  id: string;
  titulo: string;
  descricao: string;
  cta: string;
  href: string;
  /** Imagem de capa do card; sem ela o card usa fundo chapado. */
  imagem?: string;
};

export const hubCards: CardHub[] = [
  {
    id: "historia",
    titulo: "Nossa história",
    descricao:
      "De uma turma de cinco alunos em 2018 a uma escola com auditório próprio, livro publicado e milhares de universitários formados.",
    cta: "Conheça nossa história",
    href: rotas.historia,
  },
  {
    id: "lideranca",
    titulo: "Liderança",
    descricao:
      "O fundador, os sócios e o time que faz a escola acontecer — gente que executou transações antes de ensinar sobre elas.",
    cta: "Conheça quem está por trás",
    href: rotas.lideranca,
    imagem: "/images/quem-somos/time-grupo.jpg",
  },
  {
    id: "especialistas",
    titulo: "Professores & especialistas",
    descricao:
      "Quem ensina, executa. E o método: modelar, avaliar, apresentar e defender uma recomendação.",
    cta: "Conheça os especialistas",
    href: rotas.especialistas,
    imagem: "/images/quem-somos/turma.jpg",
  },
  {
    id: "ecossistema",
    titulo: "Ecossistema",
    descricao:
      "Boot Camp, modelagem, valuation, M&A, crédito e os programas de inclusão. Muitas portas, um mesmo objetivo.",
    cta: "Explore nossos programas",
    href: rotas.ecossistema,
  },
];

/* ─────────────────────────── 1. HERO ───────────────────────── */

export const heroTitulo = ["Do mercado para a sala.", "Da sala para a carreira."];

export const heroTexto =
  "Formação prática em mercado financeiro para quem quer entrar preparado.";

export const heroFoto = {
  src: "/images/quem-somos/equipe.jpg",
  alt: "Time da Bankers Academy reunido no escritório",
  width: 2000,
  height: 1333,
};

/** Números da barra de autoridade. Poucos, grandes, verificáveis. */
export const autoridade: Credencial[] = [
  { id: "anos", valor: "+20", rotulo: "anos de mercado financeiro" },
  { id: "ib", valor: "14", rotulo: "anos em Investment Banking" },
  { id: "desde", valor: "2018", rotulo: "formando universitários" },
  { id: "seguidores", valor: "+12 mil", rotulo: "na comunidade" },
];

/* ─────────────────── 2. POR QUE EXISTIMOS ─────────────────── */

export const porqueTitulo =
  "Existe uma distância entre aprender finanças e viver o mercado.";
export const porqueSubtitulo =
  "A Bankers Academy nasceu para diminuir essa distância.";

export const pilares = [
  {
    id: "conhecimento",
    palavra: "Conhecimento aplicado",
    texto:
      "Contabilidade, valuation e modelagem do jeito que são usados numa mesa de trabalho.",
  },
  {
    id: "experiencia",
    palavra: "Experiência",
    texto: "Entregas reais, prazos reais, feedback de quem vive o mercado.",
  },
  {
    id: "carreira",
    palavra: "Carreira",
    texto: "Repertório para o processo seletivo e uma rede que já fez o caminho.",
  },
] as const;

/* ───────────────────── 3. NOSSA HISTÓRIA ───────────────────── */

export const historia: Marco[] = [
  {
    id: "jornada",
    periodo: "1995–2018",
    titulo: "Trajetória de mercado, ensino e mentoria",
    texto:
      "JR Securato Jr começa como educador na FIA e na Saint Paul, e conduz treinamentos em bancos como o Deutsche Bank em Nova Iorque.",
  },
  {
    id: "ibbc",
    periodo: "2018",
    titulo: "Nasce o Investment Banking Boot Camp",
    texto:
      "A primeira edição começa com 5 alunos, voltada à formação interna da SP Advisors, e vira uma das bases da escola.",
    destaque: true,
    href: links.bootcamp,
  },
  {
    id: "site-ib",
    periodo: "2019",
    titulo: "Investment Banking Brasil",
    texto:
      "Nasce o investmentbanking.com.br, reunindo conteúdos para universitários interessados no setor.",
  },
  {
    id: "digital",
    periodo: "2021",
    titulo: "Comunidade digital",
    texto:
      "A base salta de 800 para mais de 12 mil seguidores, e passa a mostrar de perto as dores dos universitários brasileiros.",
  },
  {
    id: "ba",
    // ⚠️ CONFLITO DE FONTES: /quem-somos e o mapa de conteúdo dizem 2022;
    // o texto do fundador na home do site diz 2023. Confirmar antes de publicar.
    periodo: "2022",
    titulo: "Bankers Academy",
    texto:
      "Os treinamentos viram uma escola estruturada, dedicada a colocar universitários e jovens profissionais no mercado.",
  },
  {
    id: "yib",
    periodo: "2023",
    titulo: "You in Banking",
    texto:
      "Com patrocínio do J.P. Morgan, o programa de inclusão impactou mais de 1.000 pessoas e formou 25 participantes.",
    destaque: true,
  },
  {
    id: "hoje",
    periodo: "2024 → hoje",
    titulo: "Auditório próprio e livro",
    texto:
      "Inauguração de auditório próprio e publicação de “De cabeça no Mercado Financeiro”.",
    imagem: "/images/quem-somos/marco-2024-livro.jpg",
    imagemAlt:
      "JR Securato Jr autografa exemplares de “De cabeça no Mercado Financeiro”",
  },
];

/* ───────────────────────── 4. LIDERANÇA ────────────────────── */

export const securatoNome = "José Roberto Securato Junior";
export const securatoCargo = "Fundador da Bankers Academy";

export const securatoResumo =
  "Mais de 20 anos em finanças corporativas, com execução de transações complexas, liderança de equipes e assessoria a executivos C-level e conselhos de administração.";

/** Segundo parágrafo, na linha do texto publicado na home do site. */
export const securatoResumo2 =
  "Foram 14 anos dedicados a investment banking, com passagens pelo Deutsche Bank em São Paulo e Nova Iorque e pelo BNP Paribas. Em 2013 fundou a SP Advisors (M&A) e a SP Capital Partners (capital de risco).";

export const securatoCredenciais: Credencial[] = [
  { id: "financas", valor: "+20 anos", rotulo: "em finanças corporativas" },
  { id: "ib", valor: "14 anos", rotulo: "em Investment Banking" },
  { id: "db", valor: "Deutsche Bank", rotulo: "São Paulo e Nova Iorque" },
  { id: "bnp", valor: "BNP Paribas", rotulo: "Investment Banking" },
  { id: "spa", valor: "SP Advisors", rotulo: "e SP Capital Partners, desde 2013" },
  { id: "professor", valor: "FIA e Saint Paul", rotulo: "professor desde os anos 2000" },
  { id: "phd", valor: "PhD", rotulo: "em Finanças" },
];

/**
 * Retrato recortado enviado pelo cliente em alta resolução (o original tem
 * 3648x5472; aqui aparado pelo alpha e reduzido). O recorte anterior,
 * securato-recorte.png, continua na pasta — nada foi apagado.
 */
/* ───────── Slots de imagem do hub Quem Somos ─────────
   O cliente indicou os arquivos por nome; os que ainda não chegaram ao
   repositório ficam null e renderizam espaço reservado com o nome
   esperado. Ao receber cada arquivo: salvar em public/images/quem-somos/
   e preencher o src. Nada de stock, nada gerado. */

export type SlotFoto = {
  src: string | null;
  alt: string;
  /** Nome do arquivo que o cliente indicou para este lugar. */
  arquivoEsperado: string;
  position?: string;
};

export const qsMedia = {
  /** Hero — o cliente indicou 0156.jpg; até chegar, fica a equipe.jpg. */
  hero: {
    src: "/images/quem-somos/equipe.jpg",
    alt: "Time da Bankers Academy reunido no escritório",
    arquivoEsperado: "0156.jpg",
  } as SlotFoto,
  /** Fundador — o cliente indicou SECURATO_aula_melhorada; até chegar,
      fica a aula-securato.jpg (a mesma cena, versão anterior). */
  fundadorAula: {
    src: "/images/quem-somos/aula-securato.jpg",
    alt: "José Roberto Securato Junior dando aula para uma turma na Bankers Academy",
    arquivoEsperado: "SECURATO_aula_melhorada",
    position: "50% 38%",
  } as SlotFoto,
  /** Ponte 2018 — preenchida com foto real de aula do pacote
      "Fotos_Aulas_IBBC"; se o arquivo 3e01846c… indicado antes for outro,
      é só trocar o src. */
  ponteAula: {
    src: "/images/quem-somos/aula-turma.jpg",
    alt: "Instrutor conduz a aula para a turma do IBBC",
    arquivoEsperado: "3e01846c…",
  } as SlotFoto,
  /** Comunidade — o cliente indicou _M3A1784.jpg; até chegar, a turma.jpg. */
  comunidade: {
    src: "/images/quem-somos/turma.jpg",
    alt: "Turma reunida em sala de aula na Bankers Academy",
    arquivoEsperado: "_M3A1784.jpg",
  } as SlotFoto,
  /** Marco do livro em /historia — o cliente indicou 3C39E18F…; hoje está
      a foto real do autógrafo (marco-2024-livro.jpg), já no marco 2024. */
  livro: {
    src: "/images/quem-somos/marco-2024-livro.jpg",
    alt: "JR Securato Jr autografa exemplares de “De cabeça no Mercado Financeiro”",
    arquivoEsperado: "3C39E18F…",
  } as SlotFoto,
  /** Fechamento/cultura — a 0158.jpg do cliente, recortada na horizontal
      aproximando o grupo (todos os rostos preservados, sem filtro). */
  cultura: {
    src: "/images/quem-somos/cultura-time.jpg",
    alt: "Time da Bankers Academy reunido no escritório, com José Roberto Securato Junior saltando ao centro",
    arquivoEsperado: "0158.jpg",
  } as SlotFoto,
};

/** Ponte histórica do hub — headline estendida. */
export const ponteHub = {
  eyebrow: "2018",
  titulo: ["Da experiência nasceu o Bootcamp.", "Do Bootcamp cresceu um ecossistema."],
  texto:
    "O primeiro Investment Banking Boot Camp começou com cinco participantes, voltado à formação interna da SP Advisors. Das edições seguintes vieram os demais programas da escola.",
  cta: "Conheça o Investment Banking Boot Camp",
  href: links.bootcamp,
} as const;

/** Comunidade — seção curta do hub. */
export const comunidadeTitulo = ["O mercado é feito de pessoas.", "E aprender também."] as const;
export const comunidadeTexto =
  "Turmas pequenas, entregas em grupo, mentores que voltam edição após edição e uma comunidade de mais de 12 mil pessoas em torno da escola.";

/** Prévia do ecossistema no hub — só nomes confirmados no material. */
export const ecossistemaPrevia = [
  "Investment Banking Boot Camp",
  "You in Banking",
  "Modelagem Financeira",
  "Tabula",
] as const;

/* ───────── Seção editorial do fundador (hub e /lideranca) ───────── */

export const fundadorTitulo = "Experiência de mercado transformada em educação.";

/**
 * A foto grande do fundador ensinando. Hoje aponta para a aula-securato
 * enviada pelo cliente (vertical, 1086x1448); se chegar uma fotografia
 * horizontal dele falando com alunos, é só trocar o src aqui — o layout
 * usa object-cover e aceita as duas orientações.
 */
export const securatoFotoAula = {
  src: "/images/quem-somos/aula-securato.jpg",
  alt: "José Roberto Securato Junior dando aula para uma turma na Bankers Academy",
  width: 1086,
  height: 1448,
};

/** Destaques visuais do fundador — todos confirmados no material. */
export const securatoDestaques: Credencial[] = [
  { id: "anos", valor: "+20 anos", rotulo: "Mercado financeiro" },
  { id: "ib", valor: "Investment Banking", rotulo: "Deutsche Bank · BNP Paribas" },
  { id: "pracas", valor: "São Paulo + Nova Iorque", rotulo: "Transações complexas, inclusive cross-border" },
  { id: "phd", valor: "PhD", rotulo: "em Finanças" },
  { id: "empresas", valor: "SP Advisors + SP Capital Partners", rotulo: "Fundador" },
  { id: "educacao", valor: "Educação", rotulo: "FIA · Saint Paul · Bankers Academy" },
];

/**
 * Trajetória detalhada do fundador.
 *
 * Fonte: o PDF do perfil do LinkedIn dele, enviado pelo cliente — datas
 * e cargos como ele mesmo publica. Onde o perfil e o mapa de conteúdo
 * divergem, vale o perfil (é dele) e o conflito está anotado.
 */
export const securatoTrajetoria = [
  {
    id: "inicio",
    periodo: "1998–2000",
    titulo: "Início em M&A",
    texto:
      "Associate em boutique de M&A, responsável por análises independentes de valuation para os grupos Itaú e Rede.",
  },
  {
    id: "db1",
    periodo: "2000–2003",
    titulo: "Deutsche Bank — São Paulo e Nova Iorque",
    texto:
      "De analyst a associate, executando M&A, mercado de capitais e structured finance.",
  },
  {
    id: "bnp",
    periodo: "2003–2005",
    titulo: "BNP Paribas",
    texto:
      "Investment Banking Associate no grupo de Corporate Finance para a América Latina — mídia, energia, instituições financeiras e consumo.",
  },
  {
    id: "db2",
    periodo: "2005–2012",
    titulo: "Deutsche Bank — Vice President (NY) e Director (SP)",
    texto:
      "Sete anos e meio entre Nova Iorque e São Paulo, cobrindo Power & Utilities e Pharma e executando transações complexas, inclusive cross-border.",
  },
  {
    id: "saintpaul",
    periodo: "Desde 2009",
    titulo: "Saint Paul Escola de Negócios",
    texto:
      "Professor convidado de M&A, mercado de capitais, private equity e valuation — e head do SP Institute of Finance. O mapa de conteúdo também registra docência na FIA.",
  },
  {
    id: "spa",
    periodo: "2013",
    titulo: "SP Advisors e SP Capital Partners",
    texto:
      "Funda a boutique de M&A e a de venture capital, dedicadas a clientes mid e large-cap no Brasil. Em 2015, funda a Tabula, plataforma de treinamento online.",
  },
  {
    id: "ibbc",
    periodo: "2018",
    titulo: "Investment Banking Boot Camp",
    texto:
      "Cria o boot camp — a primeira edição, com cinco participantes, voltada à formação interna da SP Advisors. No mesmo período, inicia o PhD em Finanças na USP (2018–2021).",
  },
  {
    id: "digio",
    periodo: "2020–2021",
    titulo: "CFO interino do digio",
    texto:
      "Lidera a reestruturação do departamento financeiro do banco digital controlado por Bradesco e Banco do Brasil via Elopar.",
  },
  {
    // ⚠️ CONFLITO DE FONTES mantido: o LinkedIn dele e a home do site
    // dizem 2023; o mapa de conteúdo e o /quem-somos no ar dizem 2022.
    // A página usa 2022 até o cliente bater o martelo.
    id: "ba",
    periodo: "2022",
    titulo: "Bankers Academy",
    texto:
      "Funda a escola para aproximar estudantes das demandas reais do mercado financeiro.",
  },
  {
    id: "livro",
    periodo: "2024",
    titulo: "“De cabeça no Mercado Financeiro”",
    texto:
      "Publica o livro — 6 passos para se tornar um banker — e vende participação minoritária da Saint Paul Escola de Negócios para Exame|BTG.",
  },
  {
    id: "podcast",
    periodo: "2025",
    titulo: "Diário de um Banker",
    texto:
      "Cria e apresenta o podcast que revela as histórias por trás das transações, com bankers, executivos C-level, fundadores e investidores.",
  },
] as const;

/**
 * Transações selecionadas — como listadas no perfil dele.
 */
export const securatoTransacoes = [
  "Fusão de US$ 2,9 bi dos ativos renováveis da CPFL com a ERSA, criando a CPFL Renováveis",
  "Assessoria a Ultrapar, Petrobras e Braskem na aquisição do Grupo Ipiranga",
  "Follow-on de R$ 3 bi do Banco do Brasil",
  "Assessoria à Ashmore na aquisição de US$ 2,9 bi dos ativos da Enron International",
  "IPO de R$ 530 mi da Klabin Segall",
] as const;

/** Formação, conforme o perfil. */
export const securatoFormacao = [
  { id: "phd", curso: "PhD em Finanças", escola: "FEA-USP", periodo: "2018–2021" },
  { id: "postmba", curso: "PostMBA em Inteligência Artificial", escola: "Saint Paul", periodo: "2024–2025" },
  { id: "mba", curso: "MBA em Gestão Atuarial e Financeira", escola: "USP", periodo: "1998–1999" },
  { id: "grad", curso: "Bacharelado em Administração", escola: "FGV", periodo: "1993–1998" },
] as const;

/** Iniciativas educacionais criadas por ele. */
export const securatoIniciativas = [
  { id: "ibbc", nome: "Investment Banking Boot Camp", desc: "desde 2018" },
  { id: "yib", nome: "You, She and Black in Banking", desc: "com o J.P. Morgan" },
  { id: "cdi", nome: "CDI", desc: "Clube de Investimento para jovens" },
  { id: "liga", nome: "Liga das Ligas de Finanças", desc: "" },
  { id: "tabula", nome: "Tabula", desc: "plataforma de treinamento online, desde 2015" },
  { id: "podcast", nome: "Diário de um Banker", desc: "podcast, desde 2025" },
] as const;

/**
 * Conselhos e comitês, conforme o perfil dele (datas do LinkedIn; o mapa
 * de conteúdo dizia Brasilata desde 2014 e SuperRico desde 2023 — o
 * perfil registra 2015 e 2022–2025).
 */
export const securatoConselhos = [
  { id: "brasilata", empresa: "Brasilata", desde: "desde 2015", desc: "conselho de administração — embalagens de aço" },
  { id: "superrico", empresa: "SuperRico", desde: "2022–2025", desc: "conselho de administração — planejamento financeiro" },
  { id: "cogna", empresa: "Cogna Educação", desde: "2021–2022", desc: "conselho fiscal" },
  { id: "kroton", empresa: "Kroton", desde: "2017–2020", desc: "conselho fiscal" },
  { id: "anbima", empresa: "ANBIMA", desde: "2009–2012", desc: "comitê de Corporate Finance, pelo Deutsche Bank" },
] as const;

/** Mais do que uma trajetória de mercado — os três pilares. */
export const securatoPilares = [
  {
    id: "executar",
    palavra: "Executar",
    texto: "Experiência prática em Investment Banking e transações.",
  },
  {
    id: "ensinar",
    palavra: "Ensinar",
    texto: "Experiência combinando mercado e educação.",
  },
  {
    id: "construir",
    palavra: "Construir",
    texto: "Empresas, programas e iniciativas educacionais.",
  },
] as const;

/**
 * A ponte para 2018 — o mesmo fato do marco da linha do tempo, contado
 * do ponto de vista do fundador. Números confirmados: primeira edição
 * com 5 alunos, voltada à formação interna da SP Advisors.
 */
export const ponte2018 = {
  ano: "2018",
  titulo: "Da experiência nasceu o Bootcamp.",
  texto:
    "O primeiro Investment Banking Boot Camp começou com cinco participantes, voltado à formação interna da SP Advisors — e virou uma das bases da escola.",
  cta: "Conheça o Investment Banking Boot Camp",
  href: links.bootcamp,
} as const;

export const securatoFotoRecorte = {
  src: "/images/quem-somos/securato-em-pe.png",
  width: 900,
  height: 1551,
};

/**
 * Demais lideranças.
 *
 * Fonte: o mapa de conteúdo enviado pela Bankers Academy, seção
 * "Nosso time", que lista JR Securato JR (Founder), Andrea Securato
 * (Co-founder), Arnaldo Mello (Partner, Tabula) e Jaqueline Sanches
 * (Partner).
 *
 * Andrea Securato chegou a sair da lista quando o cliente levantou dúvida
 * sobre o nome — o mapa de conteúdo era a única fonte que a citava. Ele
 * confirmou depois, enviando o retrato dela, e ela voltou.
 */
export const lideranca: Lider[] = [
  {
    id: "andrea",
    nome: "Andrea Securato",
    cargo: "Co-founder",
    foto: "/images/quem-somos/lideranca-andrea-securato.jpg",
  },
  {
    id: "arnaldo",
    nome: "Arnaldo Mello",
    cargo: "Partner — Tabula",
    foto: "/images/quem-somos/lideranca-arnaldo-mello.jpg",
  },
  {
    id: "jaqueline",
    nome: "Jaqueline Sanches",
    cargo: "Partner",
    foto: "/images/quem-somos/lideranca-jaqueline-sanches.jpg",
  },
];

/* ────────────── 5. PROFESSORES & ESPECIALISTAS ────────────── */

/**
 * Grid preparado, vazio de propósito.
 *
 * O acervo traz quatro perfis do LinkedIn (Alexandre Paixão, Marcus
 * Piellusch, Walter Eclache e Tatiana Tafarello), mas nada confirma
 * especialidade, credencial — nem que atuem como professores da escola.
 * Preencher só depois da validação.
 */
export const professores: Professor[] = [
  { id: "prof-1" },
  { id: "prof-2" },
  { id: "prof-3" },
  { id: "prof-4" },
];

/* ─────────────── 6. COMO ENSINAMOS ─────────────── */

export const comoEnsinamos = [
  {
    id: "modelar",
    palavra: "Modelar",
    texto: "Projeções e modelo integrado construídos do zero.",
    fotoPendente: "Aluno construindo um modelo financeiro na planilha",
  },
  {
    id: "avaliar",
    palavra: "Avaliar",
    texto: "Comparáveis, múltiplos e valuation com premissas defendidas.",
    fotoPendente: "Discussão de valuation entre professor e aluno",
  },
  {
    id: "apresentar",
    palavra: "Apresentar",
    texto: "A análise vira material, e o material vira uma defesa de pé.",
    fotoPendente: "Aluno apresentando para a turma",
  },
  {
    id: "decidir",
    palavra: "Decidir",
    texto: "Recomendar um caminho e sustentar o porquê.",
    fotoPendente: "Turma em debate na sala de aula",
  },
] as const;

/* ─────────────── 7. ECOSSISTEMA / INICIATIVAS ─────────────── */

export const iniciativas: Iniciativa[] = [
  {
    id: "ibbc",
    nome: "Investment Banking Boot Camp",
    descricao:
      "Imersão prática em Investment Banking, realizada desde 2018.",
    href: links.bootcamp,
    destaque: true,
  },
  {
    id: "modelagem",
    nome: "Modelagem Financeira",
    descricao: "Construção de modelos aplicados ao mercado.",
    href: "https://www.bankersacademy.com.br/modelagemfinanceira",
    externo: true,
  },
  {
    id: "ib",
    nome: "Investment Banking",
    descricao: "Formação em IB, do nivelamento ao avançado.",
    href: "https://www.bankersacademy.com.br/investmentbanking",
    externo: true,
  },
  {
    id: "masterclass",
    nome: "Masterclass M&A",
    descricao: "Fusões e aquisições com quem executa transações.",
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
      "Inclusão de negros e mulheres no mercado financeiro, com o J.P. Morgan.",
  },
];

/** Iniciativas citadas no mapa de conteúdo, ainda sem página própria. */
export const outrasIniciativas = [
  "Tabula",
  "CDI — Clube de Investimento",
  "Tino Econômico",
  "Bankers Academy Fênix",
  "Liga das Ligas de Finanças",
];

export const parceiros = [
  "You in Banking",
  "Tabula",
  "SP Locus",
  "SuperRico",
  "Investment Banking Brasil",
  "Digital com Sal",
  "Eólica",
  "Oficina do Livro",
  "DuoTalk",
  "Tikkanen",
];

/* ─────────────────── 8. EQUIPE & CULTURA ─────────────────── */

/**
 * Galeria de bastidores. Não identifica ninguém individualmente — de
 * propósito, e porque identificar por aparência não é aceitável.
 *
 * Ao receber o ZIP de fotos, mapear pelo NOME DO ARQUIVO para os `src`
 * abaixo; os itens sem `src` renderizam como espaço reservado.
 */
export const galeriaCultura: FotoCultura[] = [
  {
    id: "turma",
    src: "/images/quem-somos/turma.jpg",
    alt: "Turma reunida em sala de aula",
    /* `larga` é do lugar, não da foto: é a primeira célula que ocupa duas
       colunas. Ao trocar as duas de posição, a marca acompanha a posição —
       senão o bloco de duas colunas começaria na coluna 2 de 3 e quebraria
       a linha. */
    larga: true,
    /* Pedido do cliente: esta aparece completa, sem o corte do
       object-cover — a turma inteira no quadro. */
    inteira: true,
  },
  {
    id: "time-escritorio",
    src: "/images/quem-somos/time-grupo.jpg",
    alt: "Parte do time da Bankers Academy na sala de reuniões",
  },
  {
    /* O cliente reprovou a foto que estava aqui (valores.jpg, duas pessoas
       diante da parede "Excellence precedes success") e vai escolher outra.
       O arquivo continua em public/images/quem-somos/ — nada foi apagado.
       Ao receber a substituta: nomear valores.jpg, apontar o `src` e tirar
       o `pendente`. */
    id: "valores",
    alt: "Parede do escritório com a frase Excellence precedes success",
    pendente: "A parede Excellence precedes success — foto a escolher",
  },
  {
    /* A aula-securato.jpg subiu para a seção do fundador (securatoFotoAula);
       este espaço volta a aguardar outra foto de evento/aula para a mesma
       imagem não aparecer duas vezes na página de Liderança. */
    id: "evento",
    alt: "Evento da Bankers Academy",
    pendente: "Evento, palestra ou aula no auditório",
  },
  {
    id: "bastidores",
    alt: "Bastidores da Bankers Academy",
    pendente: "Bastidores — gravação, preparação de aula, dia a dia",
  },
];

/** Time de execução, conforme o mapa de conteúdo. */
export const equipeExecucao = [
  "Giovanna Giorgio",
  "Nayarah Aiko",
  "Sophia Torrezan",
  "Rayara Rodrigues",
  "Ana Clara Dezorzi",
];

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
