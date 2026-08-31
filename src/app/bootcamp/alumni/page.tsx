import type { Metadata } from "next";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SubHero from "../_components/SubHero";
import AlumniBrowser from "../_components/AlumniBrowser";
import { shell } from "../_components/estilos";
import { ibbcAlumni } from "../_data/alumni";
import { ibbcFacts } from "../_data/config";

const description =
  "Os campers que já viveram o Investment Banking Boot Camp desde 2018 — cada um responsável por cobrir um setor durante a sua edição.";

export const metadata: Metadata = {
  title: "Alumni | Investment Banking Boot Camp",
  description,
  alternates: { canonical: "/bootcamp/alumni" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bankers Academy",
    title: "Alumni | Investment Banking Boot Camp",
    description,
  },
};

/**
 * A comunidade completa, com filtro por ano — o AlumniBrowser veio da
 * landing intacto. Os cards mostram somente o que o arquivo oficial de
 * edições confirma: nome, turma, ano e retorno como mentor quando houve.
 * Setor coberto, cargo atual e LinkedIn entram pelos mesmos dados quando
 * a Bankers Academy os confirmar — nada é inferido aqui.
 */
export default function AlumniPage() {
  return (
    <>
      <Header />

      <main className="bg-surface text-ink">
        <SubHero
          eyebrowTexto="Alumni"
          titulo={
            <>
              Quem já passou
              <span className="block text-white/55">por aqui.</span>
            </>
          }
          texto={`${ibbcAlumni.length} campers já viveram o Investment Banking Boot Camp desde ${ibbcFacts.firstEditionYear} — cada um responsável por cobrir um setor durante a sua edição. Vários voltaram depois como mentores de turmas seguintes.`}
        />

        <section aria-label="Comunidade de alumni" className="bg-surface">
          <div className={`${shell} pb-24 pt-4 lg:pb-28`}>
            <AlumniBrowser />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
