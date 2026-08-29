import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ibbcLinks,
  IBBC_PATH,
  BA_WHATSAPP_DISPLAY,
  BA_WHATSAPP_E164,
} from "@/data/bootcamp/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark border-t border-white/10 bg-ink text-white">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <Image
              src="/brand/logo-bankers-academy-mark.png"
              alt="Bankers Academy"
              width={1920}
              height={342}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Formação prática em Investment Banking. O Investment Banking Boot
              Camp acontece desde 2018.
            </p>
          </div>

          <nav aria-label="Programas">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Programas
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href={IBBC_PATH}
                  className="inline-block py-1.5 text-white/70 transition-colors hover:text-white"
                >
                  Investment Banking Boot Camp
                </Link>
              </li>
              <li>
                <a
                  href={ibbcLinks.coursePage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 text-white/70 transition-colors hover:text-white"
                >
                  Todos os cursos
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Contato
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`https://wa.me/${BA_WHATSAPP_E164}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 text-white/70 transition-colors hover:text-white"
                >
                  WhatsApp {BA_WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={ibbcLinks.securatoLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 text-white/70 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-xs text-white/55">
            © {year} Bankers Academy. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
