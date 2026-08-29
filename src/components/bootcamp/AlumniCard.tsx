import type { IbbcAlumni } from "@/data/bootcamp/types";

/** Initials fallback while alumni photography is not available. */
function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/**
 * Renders only the fields that are actually populated — no
 * "a confirmar" placeholders ever reach the visitor.
 */
export default function AlumniCard({ alumni }: { alumni: IbbcAlumni }) {
  const hasCurrent = Boolean(alumni.currentRole || alumni.currentCompany);

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-lg hover:shadow-black/5">
      <div className="flex items-start gap-4">
        {alumni.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={alumni.image}
            alt={alumni.name}
            loading="lazy"
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-alt text-[13px] font-semibold text-ink-muted"
          >
            {initials(alumni.name)}
          </span>
        )}

        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-semibold leading-snug tracking-tight">
            {alumni.name}
          </h3>
          <p className="mt-0.5 text-xs text-ink-muted">
            Turma {alumni.cohort} · {alumni.term ? `${alumni.term} ` : ""}
            {alumni.year}
          </p>
        </div>
      </div>

      {alumni.sector ? (
        <p className="mt-4 text-sm leading-snug text-ink">
          <span className="text-ink-muted">Setor coberto: </span>
          {alumni.sector}
        </p>
      ) : null}

      {hasCurrent ? (
        <p className="mt-2 text-sm leading-snug text-ink">
          {alumni.currentRole}
          {alumni.currentRole && alumni.currentCompany ? " · " : ""}
          {alumni.currentCompany}
        </p>
      ) : null}

      {(alumni.winner || alumni.finalist || alumni.mentor) && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {alumni.winner ? <Badge tone="brand">Winner</Badge> : null}
          {alumni.finalist ? <Badge>Finalist</Badge> : null}
          {alumni.mentor ? <Badge>Voltou como mentor</Badge> : null}
        </ul>
      )}

      {alumni.linkedin ? (
        <a
          href={alumni.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 pb-1 text-xs font-semibold text-ink-muted transition-colors hover:text-ink"
        >
          LinkedIn
          <span aria-hidden="true">↗</span>
          <span className="sr-only">de {alumni.name} (abre em nova aba)</span>
        </a>
      ) : null}
    </article>
  );
}

function Badge({
  children,
  tone = "neutral",
}: {
  children: string;
  tone?: "neutral" | "brand";
}) {
  return (
    <li
      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${
        tone === "brand"
          ? "bg-brand text-ink"
          : "border border-line text-ink-muted"
      }`}
    >
      {children}
    </li>
  );
}
