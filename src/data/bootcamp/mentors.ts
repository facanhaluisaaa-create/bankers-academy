import type { IbbcMentor } from "./types";
import { ibbcLinks } from "./config";

/**
 * Only people whose connection to the IBBC is confirmed by official
 * material. The course page credits the programme to José Roberto
 * Securato Junior "com apoio de mentores do time SPA".
 *
 * NOT INCLUDED: other Bankers Academy professors whose LinkedIn profiles
 * came in the asset pack (Alexandre Paixão, Marcus Piellusch, Walter
 * Eclache, Tatiana Tafarello). Their role in the IBBC specifically is
 * not stated anywhere in the material supplied — add them here only
 * after Bankers Academy confirms their involvement and job title.
 */
export const ibbcMentors: IbbcMentor[] = [
  {
    id: "jose-securato-jr",
    name: "José Roberto Securato Jr.",
    role: "Idealizador e condutor do Investment Banking Boot Camp",
    linkedin: ibbcLinks.securatoLinkedin,
    bio: "Conduz o boot camp desde a primeira edição, em 2018, e assina o certificado entregue a cada camper ao final da jornada.",
  },
];
