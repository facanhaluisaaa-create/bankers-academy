import type { IbbcEdition } from "./types";

/**
 * Every IBBC edition since the first one in July 2018, as published on
 * the official "Edições anteriores" archive. Mentors are listed exactly
 * as credited there. `image` is intentionally unset — no edition
 * photography was supplied with the asset pack.
 */
export const ibbcEditions: IbbcEdition[] = [
  { cohort: 16, year: 2027, term: "Jan", upcoming: true },
  { cohort: 15, year: 2026, term: "Jul", upcoming: true },
  { cohort: 14, year: 2026, term: "Jan", mentors: ["Gabriel Charmillot", "Felipe Diniz", "Bernardo Goulart"] },
  { cohort: 13, year: 2025, term: "Jul", mentors: ["Beatriz Ueda", "Renzo Birolini", "Giovanna Giorgio", "Gabriel Charmillot"] },
  { cohort: 12, year: 2025, term: "Jan", mentors: ["Pedro Vasconcelos", "João Ferreira", "Giovanna Giorgio", "Renzo Birolini", "Gabriel Cidrão"] },
  { cohort: 11, year: 2024, term: "Jul", mentors: ["João Pedro Cruz", "João Ferreira", "Pedro Vasconcelos", "Leonardo Ovuka"] },
  { cohort: 10, year: 2024, term: "Jan", mentors: ["Pedro Rocha", "João Ferreira", "João Pedro Cruz", "Pedro Vasconcelos"] },
  { cohort: 9, year: 2023, term: "Jul", mentors: ["Victor Naoki", "Pedro Rocha", "João Pedro Cruz", "Pedro Vasconcelos"] },
  { cohort: 8, year: 2023, term: "Jan", mentors: ["Victor Morkoski", "Kalani Rocha", "Victor Naoki"] },
  { cohort: 7, year: 2022, term: "Jul", mentors: ["Thomas Dreyer", "Vinícius Guimarães"] },
  { cohort: 6, year: 2022, term: "Jan", mentors: ["Victor Morkoski"] },
  { cohort: 5, year: 2021, term: "Jan", mentors: ["Arthur Biage"] },
  { cohort: 4, year: 2020, term: "Jul", mentors: ["Ana Leopassi", "Álvaro Chagas", "Antônio César", "Paulo Rizzo"] },
  { cohort: 3, year: 2020, term: "Jan" },
  { cohort: 2, year: 2019, term: "Jul" },
  { cohort: 1, year: 2018, term: "Jul" },
];
