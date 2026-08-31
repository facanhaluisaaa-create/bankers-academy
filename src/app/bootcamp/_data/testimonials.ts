import type { IbbcTestimonial } from "./types";

/**
 * IBBC testimonials ONLY.
 *
 * The asset pack ("Depoimentos - linkedin.docx") groups posts by
 * programme. The five people below are the ones listed under
 * "Investment Banking Boot Camp". Participants listed under
 * "Curso Intensivo de Férias em IB" and "Workshop de Modelagem
 * Financeira" are deliberately NOT included here.
 *
 * PROVENANCE — how each field was obtained:
 *
 *  - The client supplied session-scoped feed links
 *    (…/feed/?highlightedUpdateUrn=urn:li:…&…MENTIONING_YOU…), which only
 *    resolve for the account that received the notification. The URN was
 *    extracted from each and rewritten as the canonical public permalink
 *    https://www.linkedin.com/feed/update/<urn>/ — every one of the five
 *    was then fetched and confirmed to 307-redirect to the author's own
 *    public post (the redirect slug carries the author's name), while a
 *    made-up URN 404s. That check is what linkVerified means.
 *
 *  - `quote` is the VERBATIM text of the public post, taken from the
 *    page's own og:description — nothing was written or paraphrased
 *    here. Excerpts skip passages with " […] ". Full text at the link.
 *
 *  - Rafael Aguirre's entry uses the permalink of his OWN post, sent by
 *    the client afterwards — the asset-pack link pointed to a login-walled
 *    repost on Jose Securato's profile.
 *
 *  - `pull` is a verbatim contiguous sentence lifted from `quote`, used
 *    by the landing's compact social-proof cards — never a paraphrase.
 *
 *  - Ana Luísa's VIDEO testimonial arrived and leads the landing's
 *    social-proof section (see bootcampMedia.videoDepoimento); her
 *    written card stays here for the fuller listing.
 *
 *  - `edition` only where the author states it ("T15"); no cohort is
 *    inferred for the others.
 */
export const ibbcTestimonials: IbbcTestimonial[] = [
  {
    id: "ana-luisa-teloken",
    name: "Ana Luísa Telöken",
    quote:
      "Tive a oportunidade de participar do Investment Banking Bootcamp intensivo e hands-on da Bankers Academy — uma experiência que, sem dúvida, esteve entre os maiores desafios que já enfrentei e também entre os períodos em que mais evoluí. […] o Bootcamp me desafiou a desenvolver raciocínio analítico, atenção aos detalhes, capacidade de trabalhar sob pressão e, principalmente, a transformar números e análises em uma narrativa de investimento.",
    role: "Cobriu Water Utilities — valuation da Sabesp",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7493378387793735682/",
    linkVerified: true,
  },
  {
    id: "andre-cavalcante",
    name: "André Cavalcante",
    quote:
      "Concluí o Investment Banking Bootcamp T15 (250h), um programa imersivo e focado em Investment Banking. […] O trabalho foi finalizado com a apresentação das principais conclusões aos monitores, mentor e chairman, consolidando na prática conceitos essenciais de análise financeira, tomada de decisão e aprendizagem na resolução de problemas.",
    role: "Cobriu Transporte e Logística",
    edition: "IBBC T15",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7492026410119753728/",
    linkVerified: true,
  },
  {
    id: "gustavo-campoi",
    name: "Gustavo Campoi",
    quote:
      "Durante o programa, cobri o setor de Fintechs, tendo feito uma análise setorial completa, um estudo comparativo de múltiplos, além de um valuation do Nubank, feito a partir do método de Lucros Residuais. Ao fim do programa, tive a felicidade de estar entre os 6 finalistas da edição, realizando uma apresentação final a profissionais do mercado.",
    pull: "Durante o programa, cobri o setor de Fintechs, tendo feito uma análise setorial completa, um estudo comparativo de múltiplos, além de um valuation do Nubank, feito a partir do método de Lucros Residuais.",
    role: "Finalista da edição",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7492659705790533632/",
    linkVerified: true,
  },
  {
    id: "pedro-henrique-canano",
    name: "Pedro Henrique Canano",
    quote:
      "Recentemente, concluí o Investment Banking Boot Camp T15 (IBBC), da Bankers Academy. […] Ao final do programa, apresentei o trabalho a profissionais do mercado e tive a satisfação de ser escolhido como vencedor da edição.",
    pull: "Ao final do programa, apresentei o trabalho a profissionais do mercado e tive a satisfação de ser escolhido como vencedor da edição.",
    role: "Vencedor da edição",
    edition: "IBBC T15",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7492676222007762944/",
    linkVerified: true,
  },
  {
    id: "rafael-aguirre",
    name: "Rafael Aguirre",
    quote:
      "Eu recebi um novo certificado! Finalista do Investment Banking Boot Camp T15 (250h). Programa intensivo em Investment Banking, Financial Modeling e Valuation. Cobri o setor bancário por 1 mês realizando uma análise setorial, comparação por múltiplos e valuation do Banco Pine via (DDM), com apresentação das conclusões para profissionais do mercado.",
    pull: "Cobri o setor bancário por 1 mês realizando uma análise setorial, comparação por múltiplos e valuation do Banco Pine via (DDM), com apresentação das conclusões para profissionais do mercado.",
    role: "Finalista da edição",
    edition: "IBBC T15",
    // O link do pacote apontava para o repost no perfil do Securato
    // (atrás de login). O cliente enviou depois o permalink do post do
    // próprio Rafael — buscado e confirmado público, texto no
    // og:description.
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7490260326077075456/",
    linkVerified: true,
  },
];

/**
 * Original (non-public) URLs from the asset pack, kept only as the
 * provenance trail for the permalinks above.
 */
export const ibbcTestimonialSourceUrlsUnverified: Record<string, string> = {
  "ana-luisa-teloken":
    "https://www.linkedin.com/feed/?highlightedUpdateUrn=urn%3Ali%3AugcPost%3A7493378387793735682",
  "andre-cavalcante":
    "https://www.linkedin.com/feed/?highlightedUpdateUrn=urn%3Ali%3AugcPost%3A7492026410119753728",
  "gustavo-campoi":
    "https://www.linkedin.com/feed/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7492659705790533632",
  "pedro-henrique-canano":
    "https://www.linkedin.com/feed/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7492676222007762944",
  "rafael-aguirre":
    "https://www.linkedin.com/feed/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7490901588648263680",
};

/**
 * A testimonial is publishable once it carries a real quote or, at
 * minimum, a verified public link (link-only cards render compactly).
 */
export const publishableTestimonials = ibbcTestimonials.filter(
  (t) =>
    (typeof t.quote === "string" && t.quote.trim().length > 0) ||
    (typeof t.linkedin === "string" && t.linkVerified === true),
);
