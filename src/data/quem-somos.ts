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
};

/* ───────────────────── Links próprios da página ───────────────── */

export const links = {
  bootcamp: "/bootcamp",
  securatoLinkedin: "https://www.linkedin.com/in/josesecurato/",
  site: "https://www.bankersacademy.com.br",
} as const;

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
  "Existe uma distância entre estudar finanças e trabalhar com finanças.";
export const porqueSubtitulo = "Nós existimos para diminuir essa distância.";

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

export const securatoFotoRecorte = {
  src: "/images/quem-somos/securato-recorte.png",
  width: 603,
  height: 1100,
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
    id: "time-escritorio",
    src: "/images/quem-somos/time-grupo.jpg",
    alt: "Parte do time da Bankers Academy na sala de reuniões",
    larga: true,
  },
  {
    id: "turma",
    src: "/images/quem-somos/turma.jpg",
    alt: "Turma reunida em sala de aula",
  },
  {
    id: "valores",
    src: "/images/quem-somos/valores.jpg",
    alt: "Parede do escritório com a frase Excellence precedes success",
  },
  {
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
