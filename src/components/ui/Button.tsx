import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-soft text-ink hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white",
  ghost:
    "border border-white/25 bg-transparent text-white hover:border-brand hover:text-brand",
};

/**
 * Renders an <a> for external links (with safe rel) and a Next <Link>
 * for internal ones, so anchors stay semantically correct.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("mailto:"));

  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
