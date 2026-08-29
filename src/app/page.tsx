import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { IBBC_PATH } from "@/data/bootcamp/config";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="py-20 lg:py-28">
            <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Formação prática em Investment Banking.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Conheça o Investment Banking Boot Camp: 5 semanas de imersão, 9
              etapas e um Pitchbook final.
            </p>
            <div className="mt-9">
              <Button href={IBBC_PATH}>Conhecer o Boot Camp</Button>
            </div>
            <p className="mt-16 text-sm text-ink-muted">
              Página inicial provisória.{" "}
              <Link href={IBBC_PATH} className="underline underline-offset-4">
                Ir para o Investment Banking Boot Camp
              </Link>
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
