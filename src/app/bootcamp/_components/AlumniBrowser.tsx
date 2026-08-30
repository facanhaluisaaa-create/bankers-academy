"use client";

import { useMemo, useState } from "react";
import { ibbcAlumni, ibbcAlumniYears } from "../_data/alumni";

const STEP = 12;

/** Iniciais, enquanto não há foto dos alumni. */
function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

export default function AlumniBrowser() {
  const [year, setYear] = useState<number | "all">("all");
  const [shown, setShown] = useState(STEP);

  const filtered = useMemo(
    () => (year === "all" ? ibbcAlumni : ibbcAlumni.filter((a) => a.year === year)),
    [year],
  );

  const filters: (number | "all")[] = ["all", ...ibbcAlumniYears];

  return (
    <>
      <div className="mt-10">
        <h3 id="alumni-filtro" className="sr-only">
          Filtrar alumni por ano
        </h3>
        <ul aria-labelledby="alumni-filtro" className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = year === f;
            return (
              <li key={String(f)}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setYear(f);
                    setShown(STEP);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "border-green-400 bg-green-400 text-black"
                      : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {f === "all" ? "Todos" : f}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-white/50">
        {filtered.length} {filtered.length === 1 ? "camper" : "campers"}
        {year === "all" ? "" : ` em ${year}`}
      </p>

      <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, shown).map((person) => (
          <li key={person.id}>
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-black p-6 transition hover:border-white/25">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-sm font-semibold text-white/60"
                >
                  {initials(person.name)}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug">{person.name}</h3>
                  <p className="mt-1 text-sm text-green-400">
                    Turma {person.cohort} · {person.term} {person.year}
                  </p>
                </div>
              </div>

              {/* Só renderiza o que está confirmado — nada de "a confirmar" */}
              {person.sector ? (
                <p className="mt-5 text-sm text-white/60">
                  Setor coberto: <span className="text-white/85">{person.sector}</span>
                </p>
              ) : null}

              {person.currentRole || person.currentCompany ? (
                <p className="mt-2 text-sm text-white/60">
                  {[person.currentRole, person.currentCompany].filter(Boolean).join(" · ")}
                </p>
              ) : null}

              {person.winner || person.finalist || person.mentor ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {person.winner ? <Badge highlight>Winner</Badge> : null}
                  {person.finalist ? <Badge>Finalist</Badge> : null}
                  {person.mentor ? <Badge>Voltou como mentor</Badge> : null}
                </ul>
              ) : null}

              {person.linkedin ? (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit pt-6 text-sm font-semibold text-green-400 hover:underline"
                >
                  LinkedIn ↗<span className="sr-only"> de {person.name} (abre em nova aba)</span>
                </a>
              ) : null}
            </article>
          </li>
        ))}
      </ul>

      {shown < filtered.length ? (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShown((n) => n + STEP * 2)}
            className="rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Ver mais campers ({filtered.length - shown} restantes)
          </button>
        </div>
      ) : null}
    </>
  );
}

function Badge({ children, highlight }: { children: string; highlight?: boolean }) {
  return (
    <li
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        highlight ? "bg-green-400 text-black" : "border border-white/20 text-white/70"
      }`}
    >
      {children}
    </li>
  );
}
