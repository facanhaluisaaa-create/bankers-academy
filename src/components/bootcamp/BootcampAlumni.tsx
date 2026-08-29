"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AlumniCard from "./AlumniCard";
import { ibbcAlumni, ibbcAlumniYears } from "@/data/bootcamp/alumni";

const STEP = 12;

export default function BootcampAlumni() {
  const [year, setYear] = useState<number | "all">("all");
  const [shown, setShown] = useState(STEP);

  const filtered = useMemo(
    () =>
      year === "all" ? ibbcAlumni : ibbcAlumni.filter((a) => a.year === year),
    [year],
  );

  const visible = filtered.slice(0, shown);
  const filters: (number | "all")[] = ["all", ...ibbcAlumniYears];

  function pick(next: number | "all") {
    setYear(next);
    setShown(STEP);
  }

  return (
    <section
      id="alumni"
      aria-labelledby="alumni-titulo"
      className="scroll-mt-20 bg-surface-alt py-20 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Alumni"
            id="alumni-titulo"
            title="Quem já passou por aqui."
            lead={`${ibbcAlumni.length} campers já viveram o Investment Banking Boot Camp desde 2018 — cada um responsável por cobrir um setor durante a sua edição. Vários voltaram depois como mentores de turmas seguintes.`}
          />
        </Reveal>

        {/* Year filter */}
        <div className="mt-10">
          <h3 id="alumni-filtro" className="sr-only">
            Filtrar alumni por ano
          </h3>
          <ul
            aria-labelledby="alumni-filtro"
            className="-mx-1 flex flex-wrap gap-2 px-1"
          >
            {filters.map((f) => {
              const active = year === f;
              return (
                <li key={String(f)}>
                  <button
                    type="button"
                    onClick={() => pick(f)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "border-ink bg-ink text-white"
                        : "border-line bg-white text-ink-muted hover:border-ink/30 hover:text-ink"
                    }`}
                  >
                    {f === "all" ? "Todos" : f}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <p aria-live="polite" className="mt-6 text-sm text-ink-muted">
          {filtered.length}{" "}
          {filtered.length === 1 ? "camper" : "campers"}
          {year === "all" ? "" : ` em ${year}`}
        </p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((a) => (
            <li key={a.id} className="min-w-0">
              <AlumniCard alumni={a} />
            </li>
          ))}
        </ul>

        {shown < filtered.length ? (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShown((n) => n + STEP * 2)}
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              Ver mais campers ({filtered.length - shown} restantes)
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
