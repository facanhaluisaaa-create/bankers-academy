/**
 * REGISTRO CENTRAL DAS IMAGENS DO BOOT CAMP
 * ─────────────────────────────────────────
 * Toda fotografia e vídeo da frente /bootcamp aponta para cá — nenhum
 * caminho de imagem espalhado por componente. Para colocar uma foto real:
 *
 *   1. salve o arquivo em  public/images/bootcamp/  com o nome sugerido
 *      no comentário do slot;
 *   2. troque o `src: null` pelo caminho ("/images/bootcamp/arquivo.jpg");
 *   3. ajuste `position` se o enquadramento cortar algo importante
 *      (é o object-position: "50% 30%" puxa o foco para cima etc.).
 *
 * Enquanto `src` é null, o componente <Foto> renderiza um espaço
 * reservado elegante com o nome do slot e a proporção esperada.
 *
 * NENHUMA foto de banco de imagens, gerada por IA ou de pessoa não
 * confirmada entra aqui.
 */

export type MediaSlot = {
  /** Código do slot, mostrado no placeholder (ex.: "FOTO 01"). */
  slot: string;
  /** null = ainda sem foto; o placeholder ocupa o lugar. */
  src: string | null;
  /** Vira o alt quando a imagem existir. */
  alt: string;
  /** O que a foto precisa mostrar — orienta quem vai escolher. */
  pendente: string;
  /** Classe de proporção reservada no layout. */
  ratio: string;
  /** Proporção em texto, para o rótulo do placeholder. */
  ratioLabel: string;
  /** object-position da foto real (default "50% 50%"). */
  position?: string;
};

const slot = (s: Omit<MediaSlot, "src" | "position">): MediaSlot => ({
  ...s,
  src: null,
});

/* ═══════════════ /bootcamp (landing) ═══════════════ */

export const bootcampMedia = {
  /** [FOTO 01] Hero — arquivo sugerido: hero-bootcamp.jpg */
  hero: {
    slot: "FOTO 01",
    src: "/images/bootcamp/aula-hero.jpg",
    alt: "Aula do Investment Banking Boot Camp: instrutor ao púlpito e a turma acompanhando",
    pendente: "Hero — turma, aula ou apresentação do IBBC",
    ratio: "aspect-[16/9] lg:aspect-[21/9]",
    ratioLabel: "16:9 ou 3:2 horizontal",
    position: "50% 42%",
  },

  /** [FOTO 02] Experiência — arquivo sugerido: experiencia.jpg */
  experiencia: {
    slot: "FOTO 02",
    src: "/images/bootcamp/aula-experiencia.jpg",
    alt: "Instrutor conduz a aula para a turma do IBBC na sala da Bankers Academy",
    pendente: "Experiência prática — participante trabalhando, modelagem, mentor acompanhando",
    ratio: "aspect-[4/3]",
    ratioLabel: "4:3",
  },

  /** [FOTO 03A–C] Tríptico da jornada — jornada-inicio.jpg / -desenvolvimento.jpg / -apresentacao.jpg.
      Se depois só uma fotografia for usada, preencha uma e deixe as
      outras null: a landing renderiza só as preenchidas sem quebrar. */
  jornada: {
    inicio: {
      slot: "FOTO 03A",
      src: "/images/bootcamp/aula-inicio.jpg",
      alt: "Instrutor de pé diante da turma no IBBC",
      pendente: "Começo — primeiros dias, nivelamento",
      ratio: "aspect-[4/3]",
      ratioLabel: "4:3",
      position: "50% 45%",
    },
    desenvolvimento: {
      slot: "FOTO 03B",
      /* Sala durante uma atividade do boot camp — participantes
         trabalhando em notebooks (foto enviada pelo cliente, 31/08). */
      src: "/images/bootcamp/aula-trabalho.jpg",
      alt: "Participantes trabalham em notebooks durante uma atividade do IBBC",
      pendente: "Desenvolvimento — análise e modelagem em andamento",
      ratio: "aspect-[4/3]",
      ratioLabel: "4:3",
    },
    apresentacao: {
      slot: "FOTO 03C",
      src: "/images/bootcamp/aula-apresentacao.jpg",
      alt: "Apresentação diante da turma no IBBC",
      pendente: "Apresentação final do Pitchbook",
      ratio: "aspect-[4/3]",
      ratioLabel: "4:3",
      position: "50% 45%",
    },
  },

  /** [IMAGEM 04] O que você constrói / resultado — hoje a foto dos
      GANHADORES DA 8ª EDIÇÃO com o troféu (conquista, único dado
      confirmado pelo cliente; sem nomes, sem data). A proporção do slot
      virou 1:1 porque a foto é quase quadrada e um corte 4:5 tiraria as
      duas pessoas das pontas. Se um dia chegar foto do Pitchbook/material
      real, ela pode dividir ou assumir este lugar. */
  resultado: {
    slot: "IMAGEM 04",
    src: "/images/bootcamp/vencedores-edicao8.jpg",
    alt: "Ganhadores da 8ª edição do Investment Banking Boot Camp com o troféu",
    pendente: "Resultado — conquista ou material final real do programa",
    ratio: "aspect-square",
    ratioLabel: "1:1",
  } as MediaSlot,

  /** Legenda confirmada da foto do resultado — nada além disso. */
  resultadoLegenda: "Ganhadores da 8ª edição do Investment Banking Boot Camp.",

  /** Turma do boot camp (sem número de edição confirmado) — substitui os
      três cards reservados da prévia de alumni enquanto a Bankers
      Academy não escolhe pessoas para o alumniDestaque acima. Proporção
      natural: nenhum rosto cortado. */
  alumniTurma: {
    src: "/images/bootcamp/turma-bootcamp.jpg",
    alt: "Turma do Investment Banking Boot Camp reunida",
    width: 1114,
    height: 804,
  },

  /** Palestra durante o boot camp (panorâmica, sem edição confirmada) —
      teaser da seção "Desde 2018" no lugar da collage 08A–C, que volta
      quando houver fotos identificadas por edição. Proporção natural. */
  edicoesTeaser: {
    src: "/images/bootcamp/palestra.jpg",
    alt: "Palestra durante o Investment Banking Boot Camp, com os participantes em sala",
    legenda: "Palestra durante o boot camp.",
    width: 999,
    height: 447,
  },

  /* [IMAGEM 05] Certificado — SEM slot de foto: a prévia usa o próprio
     componente <Certificate>, que reproduz o diploma real em HTML. A
     versão interativa vive em /bootcamp/certificado. */

  /** [VÍDEO 06] Depoimento em vídeo — Ana Luísa Telöken.
      O arquivo original enviado pelo cliente tem 19,6s e termina numa
      cartela promocional com carga horária de pre-work ainda NÃO
      confirmada pela equipe; o vídeo publicado foi cortado em 12,45s
      (fade rápido), imediatamente antes da transição para essa cartela —
      só o depoimento vai ao ar. Turma e setor vêm gravados na cartela de
      identificação do próprio vídeo ("Depoimento de aluna da Turma 15 do
      IBBC!" / "Setor: Water Utilities"). As legendas são abertas,
      embutidas na própria imagem do vídeo. Poster: frame dos 5s. */
  videoDepoimento: {
    src: "/videos/bootcamp/depoimento-ana-luisa.mp4" as string | null,
    /** Variante VP9 do MESMO corte — navegadores que a suportam baixam
        menos; os demais (Safari antigo etc.) caem no mp4. */
    srcWebm: "/videos/bootcamp/depoimento-ana-luisa.webm" as string | null,
    poster: "/images/bootcamp/depoimento-ana-luisa-poster.jpg" as string | null,
    nome: "Ana Luísa Telöken" as string | null,
    /** Discreto, só o que o próprio vídeo confirma. */
    credencial: "Turma 15 do IBBC · Water Utilities" as string | null,
    frase:
      "Uma experiência para colocar conhecimento em prática e vivenciar a dinâmica real de um banker." as
        | string
        | null,
    /** Duração exibida (vídeo cortado antes da cartela final). */
    duracaoSegundos: 12 as number | null,
    ratio: "aspect-[9/16]",
    ratioLabel: "9:16 vertical",
  },

  /** [FOTO ALUMNI 01–03] Destaques da landing. Preencher com `alumniId`
      (o id em _data/alumni.ts) + foto confirmada da pessoa — os dados
      (nome, turma, badges) saem do próprio arquivo de alumni, nada é
      digitado aqui. Enquanto vazio, a landing mostra três cards
      reservados neutros. */
  alumniDestaque: [] as { alumniId: string; foto: string; position?: string }[],

  /** [FOTO 08A–C] Collage "Desde 2018" — edicao-antiga.jpg /
      edicao-meio.jpg / edicao-recente.jpg. Devem ler como evolução
      histórica: da edição mais antiga para a mais recente. Enquanto
      estes três seguem vazios, a landing mostra o edicoesTeaser acima;
      preenchendo qualquer um deles, a collage volta no lugar. */
  edicoes: {
    antiga: slot({
      slot: "FOTO 08A",
      alt: "Edição antiga do IBBC",
      pendente: "Edição antiga — primeiras turmas",
      ratio: "aspect-[4/3]",
      ratioLabel: "4:3",
    }),
    meio: slot({
      slot: "FOTO 08B",
      alt: "Edição intermediária do IBBC",
      pendente: "Outra edição — o programa crescendo",
      ratio: "aspect-[4/3]",
      ratioLabel: "4:3",
    }),
    recente: slot({
      slot: "FOTO 08C",
      alt: "Edição recente do IBBC",
      pendente: "Edição recente",
      ratio: "aspect-[4/3]",
      ratioLabel: "4:3",
    }),
  },

  /** [FOTO MENTOR 01–03] Retratos 4:5. O único mentor confirmado é o
      Securato (mentor-securato.jpg); os outros dois slots ficam aqui
      prontos e SÓ aparecem quando uma pessoa confirmada os preencher —
      nada de card "a confirmar" para o visitante. */
  mentores: {
    "jose-securato-jr": {
      slot: "FOTO MENTOR 01",
      /* Retrato de estúdio enviado pelo cliente (31/08), já em 4:5. */
      src: "/images/bootcamp/mentor-securato.jpg",
      alt: "Retrato de José Roberto Securato Jr.",
      pendente: "Retrato do Securato Jr.",
      ratio: "aspect-[4/5]",
      ratioLabel: "4:5 retrato",
    },
  } as Record<string, MediaSlot>,

  /** [FOTO 10] Fechamento — foto panorâmica de sala de aula do IBBC. */
  ctaFinal: {
    slot: "FOTO 10",
    src: "/images/bootcamp/aula-panoramica.jpg",
    alt: "Vista panorâmica de uma turma do IBBC trabalhando em sala",
    pendente: "Fechamento — turma, encerramento ou comunidade",
    /* A foto é muito larga (3:1); a faixa acompanha para cortar pouco. */
    ratio: "aspect-[16/9] lg:aspect-[21/9]",
    ratioLabel: "16:9 ou mais largo",
  },
};

/* ═══════════════ /bootcamp/experiencia ═══════════════ */

/** [EXP-01…04] — exp-grupo.jpg / exp-modelagem.jpg / exp-mentor.jpg /
    exp-apresentacao.jpg. Uma por bloco do arco ANALISAR→APRESENTAR. */
export const experienciaMedia: MediaSlot[] = [
  slot({
    slot: "EXP-01",
    alt: "Trabalho em grupo no IBBC",
    pendente: "Trabalho em grupo",
    ratio: "aspect-[4/3]",
    ratioLabel: "4:3",
  }),
  {
    slot: "EXP-02",
    /* Campers na mesa de trabalho com notebooks (foto do cliente, 31/08). */
    src: "/images/bootcamp/exp-modelagem.jpg",
    alt: "Campers na mesa de trabalho com notebooks durante o boot camp",
    pendente: "Modelagem — notebook, planilha",
    ratio: "aspect-[4/3]",
    ratioLabel: "4:3",
  },
  slot({
    slot: "EXP-03",
    alt: "Mentor acompanhando um participante",
    pendente: "Mentor ou professor acompanhando",
    ratio: "aspect-[4/3]",
    ratioLabel: "4:3",
  }),
  {
    slot: "EXP-04",
    /* Participante em pé apresentando diante da tela, com parte da
       audiência em primeiro plano (foto do cliente, 31/08). */
    src: "/images/bootcamp/exp-apresentacao.jpg",
    alt: "Participante apresenta diante da tela para a turma durante o boot camp",
    pendente: "Apresentação",
    ratio: "aspect-[4/3]",
    ratioLabel: "4:3",
  },
];

/* ═══════════════ /bootcamp/jornada ═══════════════ */

/** Foto por etapa da jornada, chaveada pelo id em _data/journey.ts.
    DESLIGADO por decisão do cliente (02/09): a página da Jornada não
    mostra mais espaço reservado nem foto de preenchimento — as etapas
    ganharam microelementos gráficos. O registro fica pronto para quando
    houver fotografias oficiais de etapas específicas. Arquivos
    sugeridos: jornada-<id>.jpg */
export const jornadaMedia: Record<string, MediaSlot> = {
  "pre-work": slot({
    slot: "JOR-PREWORK",
    alt: "Pre-Work do IBBC",
    pendente: "Preparação — Pre-Work",
    ratio: "aspect-[16/9]",
    ratioLabel: "16:9",
  }),
  analises: slot({
    slot: "JOR-ANALISE",
    alt: "Fase de análise no IBBC",
    pendente: "Análise setorial em andamento",
    ratio: "aspect-[16/9]",
    ratioLabel: "16:9",
  }),
  modelagem: slot({
    slot: "JOR-MODELAGEM",
    alt: "Fase de modelagem no IBBC",
    pendente: "Modelagem e valuation",
    ratio: "aspect-[16/9]",
    ratioLabel: "16:9",
  }),
  pitchbook: slot({
    slot: "JOR-PITCHBOOK",
    alt: "Construção do Pitchbook no IBBC",
    pendente: "Pitchbook em construção",
    ratio: "aspect-[16/9]",
    ratioLabel: "16:9",
  }),
  apresentacao: slot({
    slot: "JOR-FINAL",
    alt: "Apresentação final no IBBC",
    pendente: "Apresentação final",
    ratio: "aspect-[16/9]",
    ratioLabel: "16:9",
  }),
};

/* ═══════════════ /bootcamp/edicoes ═══════════════ */

/** Galeria por edição, chaveada pela turma (cohort). Edição sem entrada
    não mostra galeria nenhuma — foto não é obrigatória. Arquivos:
    edicao-<turma>-1.jpg, edicao-<turma>-2.jpg… */
export const edicoesMedia: Record<number, { src: string; alt: string }[]> = {};
