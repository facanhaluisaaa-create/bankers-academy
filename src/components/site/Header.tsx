"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ibbcLinks } from "@/data/bootcamp/config";

/** Rota curta do Boot Camp, usada no menu principal. */
const BOOTCAMP_PATH = "/bootcamp";

const nav = [
  { href: BOOTCAMP_PATH, label: "BOOTCAMP" },
  { href: `${BOOTCAMP_PATH}#experiencia`, label: "Experiência" },
  { href: `${BOOTCAMP_PATH}#certificado`, label: "Certificado" },
  { href: `${BOOTCAMP_PATH}#alumni`, label: "Alumni" },
  { href: `${BOOTCAMP_PATH}#faq`, label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link href="/" className="shrink-0" aria-label="Bankers Academy — início">
            <Image
              src="/brand/logo-bankers-academy.png"
              alt="Bankers Academy"
              width={1920}
              height={342}
              priority
              className="h-6 w-auto sm:h-7"
            />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-block py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button href={ibbcLinks.apply}>Quero participar</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "top-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "top-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile sheet */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <Container>
          <nav aria-label="Principal (mobile)" className="py-4">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 text-base font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href={ibbcLinks.apply} className="mt-5 w-full">
              Quero participar
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
