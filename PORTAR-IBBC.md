# Portar a página do IBBC para o site real

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

## Tokens — o ponto de atenção

`src/app/globals.css` define os tokens num bloco `@theme`. As cores foram
**amostradas dos PNGs oficiais de logo**, não escolhidas à mão:

| Token | Valor | Origem |
|---|---|---|
| `--color-brand` | `#c4ef78` | verde do logo Bankers Academy |
| `--color-brand-strong` | `#a5dc47` | hover |
| `--color-brand-deep` | `#5c7433` | verde escuro, AA em texto pequeno |
| `--color-spa` | `#118336` | logo SP Advisors |
| `--color-ink` | `#0a0a0a` | preto das seções escuras |

**Se o site real já tiver tokens equivalentes, use os dele.** Os componentes
do bootcamp referenciam os nomes acima (`bg-brand`, `text-ink-muted`,
`border-line`…) — o mais rápido é mapear nome-a-nome para o sistema real.

`--color-brand-deep` merece cuidado: o verde original do logo reprova
contraste em texto pequeno (3,87:1). O `#5c7433` existe justamente para isso
(5,25:1 no branco). **Não troque de volta pelo verde claro em texto.**

O certificado usa uma paleta própria (`--color-cert-*`), tirada do diploma.
Essa não deve ser alinhada ao site — é a cor do papel e da tinta reais.

## Componentes do bootcamp

Em `src/components/bootcamp/`. Cada um tem a estrutura semântica, a copy e o
comportamento prontos; o que muda é a classe visual.

| Componente | Observação ao portar |
|---|---|
| `BootcampHero` | Stats de 5 semanas / 9 etapas / Pitchbook / Certificado |
| `BootcampExperience` | ANALISAR · MODELAR · AVALIAR · APRESENTAR |
| `BootcampJourney` | Timeline alternada. **Marcadores sem número** — ver "Regras" |
| `BootcampOutcomes` | Grid de 8 entregas |
| `BootcampCertificate` + `CertificateArtwork` | **Portar praticamente intacto** |
| `BootcampAlumni` + `AlumniCard` | Filtro por ano, paginação incremental |
| `BootcampTestimonials` | **Não renderiza sem `quote`** — ver "Regras" |
| `BootcampEditions` | 16 edições, conecta campers por turma |
| `BootcampMentors` | Securato Jr. + mentores creditados por edição |
| `BootcampFaq` | `<details>` nativo, acessível sem JS |
| `BootcampCta` | CTA para WhatsApp |

`CertificateArtwork` é o único que **não** deve ser redesenhado: é uma
reprodução do diploma físico (borda guilhoché, cartelas "Class No." e
"250 hours", texto do documento, selo, assinatura). Ele tem paleta própria e
não deve seguir o visual do site. Só garanta que `--color-cert-*` continue
definido.

## Regras que não podem se perder no port

Foram decisões deliberadas, não acidentes:

1. **Nada de dado inventado.** Todo número e nome vem de material oficial da
   Bankers Academy / SP Advisors ou do próprio diploma. Campo não confirmado
   fica vazio e o componente **oculta** — nunca exibir "a confirmar".
2. **Depoimentos não renderizam sem texto autorizado.** A seção inteira some
   se nenhum item tiver `quote`. É proposital: evita subir uma parede de
   depoimentos vazia. Não "conserte" isso com texto de exemplo.
3. **Links do LinkedIn dos depoimentos estão quebrados de origem.** As URLs
   recebidas são `/feed/?highlightedUpdateUrn=…`, que só abrem para a conta
   que recebeu a notificação. Só renderizam com `linkVerified: true`.
4. **A timeline não numera as etapas.** O material confirma que são 9 etapas,
   mas não publica o nome de cada uma. A timeline mostra a *progressão*; se
   numerasse, afirmaria conhecer as 9 etapas oficiais. Ao receber os nomes
   reais, substituir o array em `journey.ts`.
5. **Um único `<h1>`** na página.
6. **`target="_blank"` sempre com `rel="noopener noreferrer"`.**

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
