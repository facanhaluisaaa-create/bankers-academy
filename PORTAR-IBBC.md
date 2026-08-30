# Portar a página do IBBC para o site real

> ⚡ **Atalho:** a pasta `src/app/bootcamp/` já é a versão pronta para o site
> real — colocada, com imports relativos e só classes Tailwind de estoque.
> Mova-a para `app/bootcamp/` e leve `public/images/bootcamp/`. Sem alias,
> sem token, sem config. O resto deste guia é para entender as decisões.

> **Para a sessão que abrir `leticia011/Bankers-Academy`.**
> Este documento é auto-suficiente: não depende do histórico da conversa
> em que a página foi construída.

## Contexto

A página do Investment Banking Boot Camp foi construída **antes** de o site
real estar acessível. O repositório de origem estava vazio, então junto com a
página veio um scaffold provisório (Next.js App Router + Tailwind v4) só para
ter onde rodá-la.

**O scaffold é descartável. O conteúdo e a estrutura não.**

A decisão tomada com o cliente foi: **reaproveitar o máximo possível** —
manter dados, estrutura de seções, copy, certificado, SEO e acessibilidade,
e trocar apenas a camada visual pelos componentes e tokens reais do site.

## O que é 100% portável (copiar como está)

Estes arquivos não têm nada de visual. Vão direto para o site real, só
ajustando o caminho do import.

```
src/data/bootcamp/types.ts          Tipos compartilhados
src/data/bootcamp/config.ts         Links, WhatsApp, rota, números confirmados
src/data/bootcamp/alumni.ts         135 campers reais (nome, turma, ano, setor)
src/data/bootcamp/editions.ts       16 edições desde 2018, com mentores
src/data/bootcamp/journey.ts        Progressão da experiência
src/data/bootcamp/outcomes.ts       O que o camper constrói
src/data/bootcamp/faq.ts            11 perguntas com respostas confirmadas
src/data/bootcamp/testimonials.ts   5 nomes do IBBC (textos ainda pendentes)
src/data/bootcamp/mentors.ts        Securato Jr.
```

Também portáveis, com adaptação mínima:

```
public/brand/*                                   Logos oficiais
public/images/bootcamp/certificado-*             Diploma + gravura extraída
```

> ⚠️ `certificado-gravura-touro-urso.png` é a gravura do touro e do urso
> **extraída da fotografia do diploma físico** e limpa em PNG transparente.
> Não é arte genérica e não dá para regerar sem a foto original. Leve o
> arquivo junto.

## O que é scaffold provisório (substituir pelo real)

```
src/app/layout.tsx            Trocar pelo layout do site real
src/app/page.tsx              Home provisória — descartar
src/app/globals.css           Ver "Tokens" abaixo
src/components/site/Header.tsx    Usar o Header REAL
src/components/site/Footer.tsx    Usar o Footer REAL
src/components/ui/*           Usar os primitivos REAIS, se existirem
package.json / tsconfig / next.config / eslint / postcss   Descartar
```

## Tokens — extraídos do site no ar

As cores e a tipografia **não** foram escolhidas aqui. Vieram do CSS
publicado em `bankersacademy.com.br/assets/styles-*.css`:

| Token | Valor | Papel no site real |
|---|---|---|
| `--color-brand` | `#6FDF11` | acento vívido — só em seção escura |
| `--color-brand-soft` | `#C4EF7C` | fundo do botão primário |
| `--color-brand-deep` | `#437E12` | derivado, para acento em seção clara |
| `--color-ink` | `oklch(20% .005 260)` | `#151618` — fundo escuro e texto |
| `--color-line` | `oklch(92% .01 255)` | bordas |
| `--color-surface-alt` | `#F6F7F5` | seção clara alternada |
| tipografia | **Mulish** | `--font-sans` e `--font-display` |

⚠️ **`#6FDF11` só funciona sobre fundo escuro** — 10,5:1 sobre o ink, mas
1,7:1 sobre branco. Por isso existe o `--color-brand-deep` (`#437E12`),
de mesmo matiz 93°, que passa AA em texto pequeno sobre fundo claro.
Não troque um pelo outro sem checar o fundo.

O certificado usa paleta própria (`--color-cert-*`), tirada do diploma
físico. Essa não deve seguir o site — é a cor do papel e da tinta reais.

## Ritmo das seções

Copiado da página irmã `/investmentbanking` do site real, que alterna:

```
bg-ink text-white     ← hero
bg-neutral-50 / bg-white  ← miolo, alternando
bg-ink text-white     ← CTA final
```

A página do Boot Camp segue o mesmo padrão, com uma exceição deliberada:
a seção do **certificado também é escura**, para o papel creme do diploma
saltar. Hero e CTA escuros, miolo claro.

## Menu principal

No site real, **não substitua** o array do menu. Adicione **uma linha** ao
array existente, na posição que fizer sentido visualmente:

```tsx
const nav = [
  { href: "/programas",  label: "PROGRAMAS" },
  { href: "/bootcamp",   label: "BOOTCAMP" },   // ← só esta linha
  { href: "/agenda",     label: "AGENDA" },
  { href: "/quem-somos", label: "QUEM SOMOS" },
];
```

O item herda fonte, tamanho, espaçamento, hover e o comportamento do menu
mobile automaticamente, porque desktop e mobile renderizam do mesmo array —
não crie estilo próprio para o BOOTCAMP.

Verificado neste projeto: o item aparece no menu desktop e dentro do menu
sanduíche no mobile, e em ambos o clique abre `/bootcamp`.

## Rota

Canônica: `/programas/investment-banking-bootcamp`
Atalho: `/bootcamp` → 308 para a canônica

Se o site real já tiver convenção de rotas para programas, **use a dele** e
atualize `IBBC_PATH` em `config.ts` (um lugar só — sitemap, canonical, JSON-LD
e navegação leem de lá).

## SEO / GEO

Em `src/app/programas/investment-banking-bootcamp/page.tsx`:

- metadata com title, description, canonical, Open Graph e Twitter
- 3 blocos JSON-LD: `Course`, `FAQPage`, `BreadcrumbList`
- um parágrafo-resumo em HTML no topo, escrito para responder em texto o que
  é o IBBC, quem conduz, quanto dura e o que é produzido (legível por
  mecanismos de IA, não só por humanos)

Ajustar o domínio: hoje assume `https://www.bankersacademy.com.br` em
`metadataBase`, `sitemap.ts` e no JSON-LD.

## Checklist antes de fechar o port

O estado atual passa em tudo abaixo. Rode de novo depois de portar:

- [ ] `npm run lint` e typecheck limpos
- [ ] build de produção sem erro
- [ ] axe-core sem violações WCAG 2.1/2.2 AA (desktop e mobile)
- [ ] sem scroll horizontal em 375, 390, 768, 1024 e 1440
- [ ] um único `<h1>`
- [ ] contraste AA em toda a paleta usada
- [ ] `prefers-reduced-motion` respeitado (as animações usam `.reveal`)
- [ ] nenhum `AssetPlaceholder` sobrando quando as fotos chegarem

## Ainda pendente de conteúdo

Ver `CONTEUDO-PENDENTE-IBBC.md`. Resumo: **nenhuma foto de edição** foi
fornecida (8 slots marcados "FOTO PENDENTE" em tela), faltam os **textos dos
depoimentos**, os **nomes das 9 etapas**, e os campos `finalist` / `winner`
dos alumni — que são a prova social mais forte da seção.
