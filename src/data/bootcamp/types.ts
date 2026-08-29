/** Shared types for the Investment Banking Boot Camp (IBBC) content. */

export type IbbcAlumni = {
  id: string;
  name: string;
  cohort: number;
  year: number;
  /** Semester the edition ran, used for the "Jan/Jul" label. */
  term?: "Jan" | "Jul";
  /** Sector the camper covered during the edition. */
  sector?: string;
  /** Camper who returned as a mentor in a later edition. */
  mentor?: boolean;
  finalist?: boolean;
  winner?: boolean;
  currentCompany?: string;
  currentRole?: string;
  linkedin?: string;
  image?: string;
};

export type IbbcEdition = {
  cohort: number;
  year: number;
  term: "Jan" | "Jul";
  /** Mentors who accompanied the edition. */
  mentors?: string[];
  /** Set true only for editions that have not run yet. */
  upcoming?: boolean;
  image?: string;
};

export type IbbcJourneyStage = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type IbbcOutcome = {
  id: string;
  title: string;
  description: string;
};

export type IbbcTestimonial = {
  id: string;
  name: string;
  /** Verbatim quote. Cards render only once this is filled in. */
  quote?: string;
  edition?: string;
  role?: string;
  image?: string;
  /** Public LinkedIn permalink. See linkVerified before rendering. */
  linkedin?: string;
  /**
   * The URLs supplied in the asset pack are session-scoped LinkedIn feed
   * links that only resolve for the original account. Until a public
   * permalink replaces them, the card renders without a link.
   */
  linkVerified?: boolean;
};

export type IbbcFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type IbbcMentor = {
  id: string;
  name: string;
  role: string;
  linkedin?: string;
  image?: string;
  bio?: string;
};
