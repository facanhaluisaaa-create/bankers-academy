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
 * ⚠️ TWO THINGS STILL MISSING — the section stays hidden until fixed:
 *  1. `quote` — the docx contains only links, no authorised text. Paste
 *     the verbatim quote each person published.
 *  2. `linkedin` — the URLs supplied are session-scoped feed links
 *     (…/feed/?highlightedUpdateUrn=…) that resolve only for the account
 *     that received the notification. They 404 for visitors, so they are
 *     recorded in `sourceUrlUnverified` for reference and NOT rendered.
 *     Replace with a public permalink (…/posts/…) and set
 *     linkVerified: true.
 */
export const ibbcTestimonials: IbbcTestimonial[] = [
  { id: "ana-luisa-teloken", name: "Ana Luísa Telöken", linkVerified: false },
  { id: "andre-cavalcante", name: "André Cavalcante", linkVerified: false },
  { id: "gustavo-campoi", name: "Gustavo Campoi", linkVerified: false },
  { id: "pedro-henrique-canano", name: "Pedro Henrique Canano", linkVerified: false },
  { id: "rafael-aguirre", name: "Rafael Aguirre", linkVerified: false },
];

/**
 * Original (non-public) URLs from the asset pack, kept only so the real
 * posts can be located and replaced with public permalinks.
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

/** A testimonial is publishable only once it carries a real quote. */
export const publishableTestimonials = ibbcTestimonials.filter(
  (t) => typeof t.quote === "string" && t.quote.trim().length > 0,
);
