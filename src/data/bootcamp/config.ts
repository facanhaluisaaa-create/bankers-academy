/**
 * Configurable endpoints for the IBBC page.
 *
 * The IBBC has no direct checkout link — the asset pack states
 * "IB Boot Camp: não tem" for the cart. Entry is by online interview,
 * so the primary CTA opens WhatsApp.
 */

/** Official WhatsApp number supplied by Bankers Academy. */
export const BA_WHATSAPP_E164 = "5511990070784";
export const BA_WHATSAPP_DISPLAY = "+55 11 99007-0784";

const whatsappMessage =
  "Olá! Tenho interesse no Investment Banking Boot Camp e gostaria de saber como participar do processo seletivo.";

export const ibbcLinks = {
  /** Primary CTA — schedule the selection interview. */
  apply: `https://wa.me/${BA_WHATSAPP_E164}?text=${encodeURIComponent(whatsappMessage)}`,
  /** Official course page. */
  coursePage: "https://tabula.com.br/curso/destaque/investmentbankingbootcamp",
  /** Official archive of previous editions. */
  previousEditions:
    "https://www.investmentbanking.com.br/edi%C3%A7%C3%B5es-anteriores-ibbc",
  securatoLinkedin: "https://www.linkedin.com/in/josesecurato/",
} as const;

/** Canonical route for the page. */
export const IBBC_PATH = "/programas/investment-banking-bootcamp";

/**
 * Headline facts. Every value below is sourced from official Bankers
 * Academy / SP Advisors material or from the physical diploma:
 *  - 5 semanas, 9 etapas, Pitchbook final → course page + editions page
 *  - 250 horas → printed on the certificate itself
 */
export const ibbcFacts = {
  weeks: 5,
  stages: 9,
  hours: 250,
  firstEditionYear: 2018,
} as const;
