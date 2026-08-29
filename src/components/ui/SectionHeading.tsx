import type { ReactNode } from "react";

/** Eyebrow + H2 + optional lead, used by every bootcamp section. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  id?: string;
}) {
  const centered = align === "center";
  return (
    <header className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${
            dark ? "text-brand" : "text-brand-deep"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-pretty text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/70" : "text-ink-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}
