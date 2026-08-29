/**
 * Explicitly-marked slot for photography from the IBBC archive that has
 * not been supplied yet. Deliberately visible (not a silent grey box) so
 * no placeholder can ship to production unnoticed.
 *
 * To replace: drop the file in /public/images/bootcamp and swap this
 * component for <Image /> at the same call site.
 */
export default function AssetPlaceholder({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para fotografia: ${label}`}
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-ink/25 bg-surface-alt ${ratio} ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0 1px, transparent 1px 9px)",
        }}
      />
      <div className="relative px-5 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Foto pendente
        </p>
        <p className="mt-2 text-sm font-medium leading-snug text-ink">{label}</p>
      </div>
    </div>
  );
}
