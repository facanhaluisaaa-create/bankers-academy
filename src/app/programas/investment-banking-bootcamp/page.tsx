import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import BootcampHero from "@/components/bootcamp/BootcampHero";
import BootcampExperience from "@/components/bootcamp/BootcampExperience";
import BootcampJourney from "@/components/bootcamp/BootcampJourney";
import BootcampOutcomes from "@/components/bootcamp/BootcampOutcomes";
import BootcampCertificate from "@/components/bootcamp/BootcampCertificate";
import BootcampAlumni from "@/components/bootcamp/BootcampAlumni";
import BootcampTestimonials from "@/components/bootcamp/BootcampTestimonials";
import BootcampEditions from "@/components/bootcamp/BootcampEditions";
import BootcampMentors from "@/components/bootcamp/BootcampMentors";
import BootcampFaq from "@/components/bootcamp/BootcampFaq";
import BootcampCta from "@/components/bootcamp/BootcampCta";
import { IBBC_PATH, ibbcFacts, ibbcLinks } from "@/data/bootcamp/config";
import { ibbcFaq } from "@/data/bootcamp/faq";

const title = "Investment Banking Boot Camp";
const description =
  "Treinamento intensivo de 5 semanas que simula o dia a dia de um analista de Investment Banking: 9 etapas, entregas diárias, mentoria da SP Advisors e um Pitchbook final. Certificado de 250 horas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: IBBC_PATH },
  keywords: [
    "Investment Banking Boot Camp",
    "IBBC",
    "Bankers Academy",
    "Investment Banking",
    "valuation",
    "modelagem financeira",
    "pitchbook",
    "Securato",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: IBBC_PATH,
    siteName: "Bankers Academy",
    title: `${title} | Bankers Academy`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Bankers Academy`,
    description,
  },
};

/**
 * Structured data. Kept to facts stated on official Bankers Academy /
 * SP Advisors material and on the printed certificate — no ratings,
 * enrolment counts or price claims.
 */
function StructuredData() {
  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Investment Banking Boot Camp",
    alternateName: "IBBC",
    description,
    url: `https://www.bankersacademy.com.br${IBBC_PATH}`,
    inLanguage: "pt-BR",
    provider: {
      "@type": "Organization",
      name: "Bankers Academy",
      url: "https://www.bankersacademy.com.br",
    },
    educationalCredentialAwarded:
      "Certificado de 250 horas de Practical Investment Banking Training",
    teaches: [
      "Análise setorial",
      "Comparáveis e múltiplos",
      "Modelagem financeira",
      "Valuation",
      "Construção de Pitchbook",
    ],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      courseWorkload: "P5W",
      instructor: {
        "@type": "Person",
        name: "José Roberto Securato Jr.",
        sameAs: ibbcLinks.securatoLinkedin,
      },
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ibbcFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://www.bankersacademy.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Programas",
        item: "https://www.bankersacademy.com.br/programas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://www.bankersacademy.com.br${IBBC_PATH}`,
      },
    ],
  };

  return (
    <>
      {[course, faq, breadcrumb].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Static, author-controlled JSON — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default function BootcampPage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <StructuredData />
      <Header />

      <main id="conteudo">
        <BootcampHero />

        {/*
          GEO / AI answerability: a plain-language summary of the programme
          that reads as the page's opening definition, so what the IBBC is,
          who runs it, how long it lasts and what is produced all exist as
          HTML text rather than only inside images or marketing copy.
        */}
        <section aria-labelledby="resumo-titulo" className="border-b border-line bg-surface">
          <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 id="resumo-titulo" className="sr-only">
              O que é o Investment Banking Boot Camp
            </h2>
            <p className="max-w-4xl text-pretty text-lg leading-relaxed text-ink sm:text-xl">
              O <strong>Investment Banking Boot Camp (IBBC)</strong> é um
              treinamento intensivo de <strong>{ibbcFacts.weeks} semanas</strong>{" "}
              da <strong>Bankers Academy</strong>, idealizado e conduzido por{" "}
              <strong>José Roberto Securato Jr.</strong>, que simula o dia a dia
              de um analista de Investment Banking. Realizado desde{" "}
              {ibbcFacts.firstEditionYear}, é organizado em{" "}
              <strong>{ibbcFacts.stages} etapas</strong> com entregas diárias e
              mentoria da equipe da SP Advisors. Cada participante — chamado de{" "}
              <em>camper</em> — cobre um setor da economia, produz a análise
              setorial, os comparáveis, a modelagem financeira e o valuation, e
              conclui a jornada construindo e apresentando um{" "}
              <strong>Pitchbook final</strong>. Ao final, recebe um certificado
              de <strong>{ibbcFacts.hours} horas</strong> de Practical
              Investment Banking Training. A participação é definida por
              entrevista online e exige dedicação em tempo integral durante a
              edição, que acontece em janeiro ou em julho.
            </p>
          </div>
        </section>

        <BootcampExperience />
        <BootcampJourney />
        <BootcampOutcomes />
        <BootcampCertificate />
        <BootcampAlumni />
        <BootcampTestimonials />
        <BootcampEditions />
        <BootcampMentors />
        <BootcampFaq />
        <BootcampCta />
      </main>

      <Footer />
    </>
  );
}
