# Migração dos Artifacts Claude → Bankers Academy Oficial

Guia humano e operacional. **Não substitui** o manifesto
`bankers-academy-artifacts-manifest.json` (mesma pasta): o JSON é a fonte
completa (listas de arquivos, assets com md5 e dimensões, commits,
conflitos, estado final). Este .md é a leitura de quem vai executar.

Este documento é uma **especificação**. A migração **não foi executada**.

## Leia antes de tudo

1. **Os dois artifacts vivem na mesma branch e no mesmo commit.**
   Repositório de trabalho: `https://github.com/facanhaluisaaa-create/bankers-academy`,
   branch `claude/ibbc-page-kzoqyc`, HEAD `3661e13e0edcfda8565af78c54bcc0dcdfcf7e89`
   (58 commits, árvore limpa, sem arquivos untracked, em sincronia com a origem).
   Não existe `main` nesse repositório (o remoto só tem essa branch), logo não há
   merge-base: a base de tudo é o root commit `ee766bb`.
2. **Esse repositório é um scaffold, não o site oficial.** Ele foi criado vazio
   no root commit só para ter onde rodar as páginas. O "site real" é citado nos
   guias antigos como `leticia011/Bankers-Academy`, mas **não foi acessado nem
   verificado** nesta sessão. Framework, layout, Header e Footer oficiais são
   desconhecidos aqui → `resolution_status: unresolved` no JSON.
3. **Nomes dos artifacts.** Publicados como "Quem Somos — Bankers Academy"
   (`https://claude.ai/code/artifact/621f3077-85ae-4356-9b72-9ca47d41889a`) e
   "Investment Banking Boot Camp"
   (`https://claude.ai/code/artifact/0eb0676a-9918-4af2-8ce1-1293bb2de696`).
   São os únicos dois artifacts da conta e correspondem um a um a
   "Quem Somos" e "Investment Bootcamp". As prévias são composições HTML
   estáticas geradas do build **deste** commit; o código-fonte de cada uma é a
   lista de arquivos abaixo.
4. **Como pegar arquivos inteiros:** `git show 3661e13:<caminho>` ou
   `git archive 3661e13 <pastas> | tar -x -C <destino>`. Só os arquivos
   compartilhados têm patch (`patches/`).

## Artifact 1 — Quem Somos

### Branch e commits
- Branch `claude/ibbc-page-kzoqyc`; HEAD `3661e13`; base `ee766bb`.
- Primeiro commit da frente: `9d65861` (30/08) "recria a página a partir do site publicado".
- Último commit da frente: `429d9cc` (02/09) "hero com o símbolo da marca e 'Quem somos' maior".
- 36 commits classificados como Quem Somos (lista em `artifacts.quem_somos.commits`), mais 4 commits globais que também afetam a frente (`8965f12`, `79f649b` verde fechado; `bd234e4` CLAUDE.md; `375bef7` foto de aula nas duas frentes).

### Rotas (confirmadas pelo `next build`, todas estáticas)
| Rota | Arquivo | Título (metadata) |
|---|---|---|
| `/quem-somos` | `src/app/quem-somos/page.tsx` | Quem Somos \| Bankers Academy |
| `/quem-somos/historia` | `src/app/quem-somos/historia/page.tsx` | Nossa História \| Bankers Academy |
| `/quem-somos/lideranca` | `src/app/quem-somos/lideranca/page.tsx` | Liderança \| Bankers Academy |
| `/quem-somos/especialistas` | `src/app/quem-somos/especialistas/page.tsx` | Professores & Especialistas \| Bankers Academy |
| `/quem-somos/ecossistema` | `src/app/quem-somos/ecossistema/page.tsx` | Ecossistema \| Bankers Academy |
| `/quem-somos/fundador` | `src/app/quem-somos/fundador/page.tsx` | José Roberto Securato Junior \| Bankers Academy |

Cada página tem `alternates.canonical` = a própria rota e `openGraph`
(website, pt_BR, siteName Bankers Academy). Não há JSON-LD no Quem Somos.

### Arquivos (origem `Quem Somos`)
- `src/app/quem-somos/page.tsx` (hub) e as 5 internas acima.
- `src/app/quem-somos/_components/HubCards.tsx`, `SubHero.tsx`, `estilos.ts`.
- `src/data/quem-somos.ts` — **todo** o conteúdo (rotas, links, cards, hero,
  números, pilares, 7 marcos da história, dados do fundador, `qsMedia`,
  liderança [3], professores [6], Securato Master, iniciativas [9], parceiros,
  galeria, missão, valores).
- `src/components/ui/BrandMark.tsx` (símbolo em SVG, usado no hub).
- **Não levar:** `src/app/quem-somos/_components/Timeline.tsx` — não é importado
  por nenhuma página desde a reescrita da História (código morto).

Depende dos compartilhados: `globals.css`, `layout.tsx` (Mulish),
`Header.tsx`/`Footer.tsx` (incluídos em cada página), `ui/Reveal.tsx`,
`ui/AssetPlaceholder.tsx`, `sitemap.ts`. Imports por alias `@/…`.

### Assets (renderizados)
`public/brand/marca-bankers-academy-branca.png` (hero) e, em
`public/images/quem-somos/`: `equipe.jpg`, `securato-em-pe.png`,
`aula-securato.jpg`, `aula-turma.jpg`, `turma.jpg`, `cultura-time.jpg`,
`time-grupo.jpg`, `marco-2024-livro.jpg`, `lideranca-andrea-securato.jpg`,
`lideranca-arnaldo-mello.jpg`, `lideranca-jaqueline-sanches.jpg`,
`especialistas/jose-securato-jr.jpg`, `especialistas/jose-roberto-securato.jpg`,
`especialistas/marcos-piellusch.jpg`, `especialistas/walter-eclache.jpg`,
`especialistas/alexandre-paixao.jpg`, `especialistas/fernando-fegyveres.jpg`.

Ficam **fora** do site oficial: `a-identificar/*` (pessoas não identificadas),
`securato-jr.jpg`, `securato-recorte.png`, `valores.jpg` (não usados),
`logo-bankers-academy-branca.png` (substituída pelo símbolo). Os `.txt` são
documentação.

### O que a frente contém (resumo)
- Hero escuro: símbolo + "Quem somos" + h1 em duas linhas + botões para
  História e Liderança; verde só como acento. Logo completa retirada a pedido.
- Fundador: cartão clicável no topo, bloco compacto e página própria
  (`/fundador`) com trajetória, transações, iniciativas, conselhos, formação.
- Securato Master: bloco próprio em `/especialistas` (foto enviada pelo
  cliente, credencial "Doutor em Administração (Finanças) pela FEA/USP").
- História: 7 marcos (1995–2018, 2018 "5 alunos", 2019, 2021, 2022 com a
  divergência 2022×2023 anotada, 2023 You in Banking × J.P. Morgan só texto,
  2024 com a foto do livro), ponte para `/bootcamp`, missão.
- Liderança: Andrea Securato (Co-founder), Arnaldo Mello (Partner da Tabula),
  Jaqueline Sanches (Partner), com retratos.
- Professores: 4 com retrato oficial (Tabula) e LinkedIn onde havia;
  Agostinho Cavalcanti e Tatiana Tafarello sem foto (slot reservado).
- Ecossistema: 9 linhas com links oficiais (Tabula/BA) em nova aba; links de
  carrinho guardados no campo `carrinho` e **não renderizados**.
- Textos visíveis sem "·" nem "—".

### Alterações compartilhadas vindas desta frente
- `Header.tsx`: item `{ href: "/quem-somos", label: "QUEM SOMOS" }` (`9d65861`).
- `sitemap.ts`: 6 URLs `/quem-somos*` (`025b4ed`, `040d523`).
- `ui/AssetPlaceholder.tsx`: prop `tone` (`ce48db7`).

## Artifact 2 — Investment Bootcamp

### Branch e commits
- Mesma branch e HEAD. Base `ee766bb` (root: scaffold + v1 em
  `/programas/investment-banking-bootcamp`, hoje superada).
- A versão que o artifact mostra começa em `5b89b86` (drop-in em
  `src/app/bootcamp`), vira hub com rotas reais em `7019de3` e termina em
  `3661e13` (jornada sem placeholders + certificado logo abaixo).
- 18 commits (root + 17) em `artifacts.investment_bootcamp.commits`, mais os
  4 globais.

### Rotas (confirmadas pelo `next build`, todas estáticas)
| Rota | Arquivo | Título (metadata) |
|---|---|---|
| `/bootcamp` | `src/app/bootcamp/page.tsx` | Investment Banking Boot Camp \| Bankers Academy (+ JSON-LD Course, FAQPage, BreadcrumbList) |
| `/bootcamp/experiencia` | `src/app/bootcamp/experiencia/page.tsx` | A Experiência \| … |
| `/bootcamp/jornada` | `src/app/bootcamp/jornada/page.tsx` | A Jornada \| … |
| `/bootcamp/certificado` | `src/app/bootcamp/certificado/page.tsx` | Seu Certificado \| … |
| `/bootcamp/alumni` | `src/app/bootcamp/alumni/page.tsx` | Alumni \| … |
| `/bootcamp/edicoes` | `src/app/bootcamp/edicoes/page.tsx` | Edições \| … |
| `/bootcamp/mentores` | `src/app/bootcamp/mentores/page.tsx` | Mentores \| … |

**Não faz parte do artifact:** `/programas/investment-banking-bootcamp`
(v1, montada com `src/components/bootcamp/*`). Ver "O que NÃO alterar".

### Arquivos (origem `Investment Bootcamp`)
- `src/app/bootcamp/page.tsx` + 6 internas.
- `src/app/bootcamp/_components/`: `InteractiveCertificate.tsx`,
  `Certificate.tsx`, `JornadaEtapas.tsx`, `PlayerDepoimento.tsx`, `Foto.tsx`,
  `AlumniBrowser.tsx`, `SubHero.tsx`, `estilos.ts`.
- `src/app/bootcamp/_data/`: `config.ts`, `media.ts`, `journey.ts`,
  `testimonials.ts`, `alumni.ts`, `editions.ts`, `faq.ts`, `mentors.ts`,
  `outcomes.ts`, `types.ts`.
- Imports: só `@/components/site/Header` e `Footer` usam alias; todo o resto
  é relativo dentro de `src/app/bootcamp`.

### Assets (renderizados)
`public/images/bootcamp/`: `certificado-gravura-touro-urso.png` (gravura
extraída do diploma físico, não regerável), `aula-hero.jpg`,
`aula-experiencia.jpg`, `aula-inicio.jpg`, `aula-trabalho.jpg`,
`aula-apresentacao.jpg`, `vencedores-edicao8.jpg`, `turma-bootcamp.jpg`,
`palestra.jpg`, `mentor-securato.jpg`, `aula-panoramica.jpg`,
`depoimento-ana-luisa-poster.jpg`, `exp-modelagem.jpg`, `exp-apresentacao.jpg`.
`public/videos/bootcamp/`: `depoimento-ana-luisa.mp4` e `.webm` (12 s, cortado
antes da cartela promocional).

Ficam **fora**: `certificado-ibbc-referencia.jpg` (foto-fonte do diploma) e
`reservas/grupo-campers.jpg` (reservada).

### Sequência da landing (`/bootcamp`)
hero → resumo em texto → experiência → jornada (tríptico + trilho de 8 etapas)
→ o que você constrói → **certificado interativo** → prova social (vídeo +
3 reforços) → alumni → desde 2018 → mentores → FAQ → CTA final.

### Certificado
- **Já existe e funciona.** Não recriar. Arquivos:
  `_components/InteractiveCertificate.tsx` (client), `_components/Certificate.tsx`
  (arte estática em HTML/SVG, cores literais), bloco `.cert-*` em
  `src/app/globals.css`, `public/images/bootcamp/certificado-gravura-touro-urso.png`.
- Estado: `name`, `open`, `draft`, `swap` em `useState`; `MAX_NAME = 48`;
  **nenhuma** persistência, rede, PDF, número, e-mail ou login.
- Interação: clique em "SEU NOME AQUI" ou na dica ("Clique para personalizar" /
  "Trocar o nome") abre o painel; input `#ibbc-nome` ("Nome completo",
  placeholder "Luísa Façanha"); Enter ou "Visualizar no certificado" aplica;
  "Cancelar", Escape ou clique fora fecha; foco preso ao painel e devolvido ao
  gatilho.
- Painel: `role="dialog" aria-modal="true"`, título "Como seu nome apareceria no
  certificado?", nota "O nome fica só no seu navegador…".
- Disclaimer exato (3 páginas): **"Prévia ilustrativa. O certificado oficial é
  concedido após a conclusão do Investment Banking Boot Camp."**
- Responsivo: abaixo de `sm` o certificado rola na horizontal (mín. 560px) com
  o aviso "Arraste o certificado para o lado…"; tipografia por container query.
- Onde aparece: landing (seção E, eyebrow "Certificação IBBC", h2 "O resultado
  também leva o seu nome.", `max-w-5xl`, link "Explore seu certificado" →
  `/bootcamp/certificado`), `/bootcamp/jornada` (logo após as etapas) e
  `/bootcamp/certificado`. Uma instância por página (o input tem id fixo).
- Dependências: React + Tailwind + o bloco `.cert-*` do CSS global. Sem libs.

### Alterações compartilhadas vindas desta frente
- `Header.tsx`: item `{ href: "/bootcamp", label: "BOOTCAMP" }` (`dfe1a22`, `d09ede0`).
- `globals.css`: tokens do site no ar + Mulish (`f0d8cc8`); bloco `.cert-*` (`39ab0d7`).
- `layout.tsx`: Poppins → Mulish (`f0d8cc8`).
- `ui/Button.tsx`: `bg-brand` → `bg-brand-soft` (`f0d8cc8`; só o scaffold usa).
- `sitemap.ts`: 7 URLs `/bootcamp*` (`7019de3`).
- Espelho `src/data/bootcamp/*` mantido idêntico ao `_data` (`db109ec`, `60a4c42`, `3661e13`) — legado, não levar.

## Arquivos alterados pelos dois artifacts

| Arquivo | Quem Somos | Investment Bootcamp | Levar? |
|---|---|---|---|
| `src/components/site/Header.tsx` | +QUEM SOMOS | +BOOTCAMP | **Não** o arquivo; só a linha BOOTCAMP e a rota de QUEM SOMOS no Header oficial |
| `src/app/globals.css` | consome tokens | tokens, Mulish, `.cert-*` | **Sim**, mesclar íntegro (patch) |
| `src/app/layout.tsx` | consome Mulish | Mulish | Só a fonte (`--font-mulish`) |
| `src/app/sitemap.ts` | 6 URLs | 7 URLs | As 13 URLs |
| `src/components/ui/AssetPlaceholder.tsx` | prop `tone` | criou (scaffold) | Sim (só o QS usa) |
| `src/components/ui/Reveal.tsx` | usa | criou (scaffold) | Sim (só o QS usa) + regra `.reveal` |
| `src/components/site/Footer.tsx` | inclui | inclui | Não (scaffold) |
| `src/data/bootcamp/config.ts` | — | duplicata de `_data/config.ts` | Não (fonte única em `_data`) |
| `public/images/quem-somos/aula-turma.jpg` = `public/images/bootcamp/aula-experiencia.jpg` | ponte 2018 | experiência | As duas cópias (md5 iguais) |
| `CLAUDE.md`, `README.md`, `PORTAR-IBBC.md` | regras | guias antigos | Não (este manifesto substitui) |

Commits globais: `8965f12` e `79f649b` (verde `#C4EF7C` fechado pelo cliente,
vale para as duas), `bd234e4` (CLAUDE.md), `375bef7` (foto nas duas frentes).

## Conflitos

Nenhum conflito real de conteúdo: as duas frentes editaram **linhas
diferentes** dos mesmos arquivos e o resultado combinado já é o HEAD. Os riscos
estão no encontro com o site oficial:

1. **Header oficial** — se já existir "QUEM SOMOS" apontando para a página
   antiga, trocar para `/quem-somos`. Adicionar `BOOTCAMP` como **uma linha** no
   array existente; não substituir o menu, não criar estilo próprio.
2. **Tokens** — as classes das páginas (`bg-brand`, `text-brand-deep`,
   `border-line`, `bg-surface-alt`, `bg-ink`, `bg-brand-soft`…) só existem se o
   `@theme` oficial tiver os tokens com **esses nomes e valores**. Se o site
   oficial tiver seu próprio `@theme`, mesclar sem renomear.
3. **Header/Footer duplicados** — as 13 páginas incluem `<Header />` e
   `<Footer />`. Se o layout oficial já os injeta, remover as duas linhas (e os
   imports) em cada página. Nunca os dois.
4. **Fonte** — o `@theme` espera `var(--font-mulish)`; o layout oficial precisa
   expor essa variável (ou ajustar `--font-sans` para a Mulish já carregada).
5. **Alias `@/*`** — `tsconfig.paths` deve mapear `@/*` → `src/*` (ou
   reescrever os imports `@/components/site/*`, `@/components/ui/*`,
   `@/data/quem-somos`).
6. **Classe `text-ink-muted`** — sem token desde `f0d8cc8`; só afeta Header do
   scaffold, home e legado. Não afeta as 13 páginas.

## Ordem correta de migração

1. Confirmar o repositório oficial, o framework (Next App Router esperado) e
   onde vivem layout/Header/Footer.
2. **CSS global + fonte:** aplicar `patches/src_app_globals.css.patch` (ou
   copiar `src/app/globals.css` inteiro) e garantir Mulish como
   `--font-mulish` no layout (`patches/src_app_layout.tsx.patch` mostra a
   mudança).
3. **Primitivos:** `src/components/ui/Reveal.tsx`, `AssetPlaceholder.tsx`,
   `BrandMark.tsx`.
4. **Assets:** `public/brand/marca-bankers-academy-branca.png`,
   `public/images/quem-somos/**` (só os renderizados), `public/images/bootcamp/**`
   (só os renderizados), `public/videos/bootcamp/**`.
5. **Quem Somos:** `src/data/quem-somos.ts` + `src/app/quem-somos/**` (sem `Timeline.tsx`).
6. **Investment Bootcamp:** `src/app/bootcamp/**` inteiro.
7. **Header oficial:** +1 linha BOOTCAMP; QUEM SOMOS → `/quem-somos`.
   **Sitemap:** +13 URLs (sem `/programas/investment-banking-bootcamp`).
8. Se o layout injeta Header/Footer: retirar das 13 páginas.
9. Rodar as validações abaixo.

Nada nos 58 commits adicionou dependência: `package.json` e o lock só existem
no root. Versões usadas: next 16.3.3, react 19.1.1, tailwindcss 4.3.3 (lock;
`^4.1.13` no package), typescript 5.9.3, `@tailwindcss/postcss`.

## O que NÃO alterar

- Nada fora de `/quem-somos*` e `/bootcamp*` no site oficial.
- **Não** levar: `src/app/page.tsx` (home provisória),
  `src/app/programas/investment-banking-bootcamp/page.tsx` (v1),
  `src/components/bootcamp/*` (13 componentes da v1), `src/data/bootcamp/*`
  (espelho), `src/components/ui/SectionHeading.tsx`, `Container.tsx`,
  `Button.tsx`, `src/components/site/Header.tsx`/`Footer.tsx` do scaffold,
  `Timeline.tsx`, `README.md`, `CLAUDE.md`, `AGENTS.md`, `PORTAR-IBBC.md`,
  `CONTEUDO-PENDENTE-IBBC.md`, configs do scaffold.
- **Não** publicar: `public/images/quem-somos/a-identificar/*`,
  `certificado-ibbc-referencia.jpg`, `reservas/grupo-campers.jpg`,
  `securato-jr.jpg`, `securato-recorte.png`, `valores.jpg`,
  `logo-bankers-academy-branca.png`, `logo-sp-advisors.png`.
- **Não** mexer na cor: `#C4EF7C` é fechada pelo cliente; `--color-brand-deep`
  `#5D792E` só para texto verde em fundo claro. Nada de `#6FDF11`, `#C4EF78`,
  `#437E12`.
- **Não** inventar conteúdo para os slots vazios (EXP-01/03, alumni em
  destaque, collage de edições, fotos de Agostinho e Tatiana, arquivos
  0156/SECURATO_aula_melhorada/3e01846c/_M3A1784/3C39E18F ainda não recebidos).
- **Não** mudar 2022 → 2023 na História sem decisão do cliente.
- **Não** alterar domínio, Vercel ou variáveis de ambiente; **não** fazer merge
  na main nem force push no repositório de trabalho.

## Checklist visual

- [ ] `/quem-somos`: hero escuro com o símbolo + "Quem somos" e o h1 em duas linhas (2ª em verde); nenhuma faixa verde chapada no topo; foto da equipe com véu.
- [ ] Cartão do fundador clicável; bloco compacto com foto 4:5; ponte 2018 verde com foto de aula; 4 cards com foto de fundo e véu; comunidade; CTA final com `cultura-time.jpg` em largura total e cantos arredondados.
- [ ] `/quem-somos/historia`: sequência convicção → 1995–2018 → 2018 "5" → 2019/2021 → 2022 → 2023 (só texto) → 2024 com a foto do livro → ponte verde → missão → "A história continua".
- [ ] `/quem-somos/lideranca`: 3 retratos; `/especialistas`: Jr. em destaque, Master em bloco escuro, grid com 4 retratos + 2 slots reservados; `/ecossistema`: 9 linhas com seta visível; `/fundador`: foto do livro ≈ 26rem com respiro.
- [ ] Nenhum "·" ou "—" visível no Quem Somos.
- [ ] `/bootcamp`: ordem hero → resumo → experiência → jornada (tríptico + trilho 01–08) → constrói (foto dos ganhadores 1:1 com legenda) → certificado → prova social (vídeo 9:16 + 3 cards, sem buraco no grid) → alumni (foto da turma) → desde 2018 (palestra) → mentores (retrato) → FAQ → CTA.
- [ ] `/bootcamp/jornada`: 8 etapas com microelementos, sem "foto pendente"; certificado logo abaixo; "O que você constrói" como lista sem caixas.
- [ ] `/bootcamp/experiencia`: 4 linhas alternadas; EXP-02 e EXP-04 com foto real; EXP-01/03 como reservado.
- [ ] Certificado: papel creme, gravura touro/urso, "SEU NOME AQUI" sublinhado; nome longo (48) truncado sem estourar.
- [ ] Menu: BOOTCAMP e QUEM SOMOS no desktop e no sanduíche.

## Checklist funcional

- [ ] Todo link interno navega para outra rota na mesma aba (`<Link>`); nenhum `href="#…"`, `scrollIntoView` ou hash.
- [ ] Todo link externo (LinkedIn, Tabula, WhatsApp, bankersacademy.com.br) abre em nova aba com `rel="noopener noreferrer"`.
- [ ] "← Quem somos" e "← Voltar para o Bootcamp" levam ao hub certo.
- [ ] Certificado: abre painel, aplica com Enter, fecha com Escape/Cancelar/clique fora, devolve o foco; DevTools → sem requisição de rede, `localStorage`/`sessionStorage`/cookies vazios após interagir; sem PDF, sem número.
- [ ] Vídeo: só o poster carrega antes do clique; após o clique o `<video>` toca com controles (webm no Chromium, mp4 no Safari); nada da cartela "120h" aparece.
- [ ] Alumni: filtro por ano funciona, "mostrar mais" avança de 12 em 12, contador `aria-live` atualiza.
- [ ] FAQ: `<details>` abre/fecha.
- [ ] WhatsApp abre com a mensagem pré-preenchida; Tabula abre a página do curso; número `+55 11 99007-0784` visível.
- [ ] `robots.txt` e `sitemap.xml` incluem as 13 rotas com o domínio oficial.

## Checklist mobile

- [ ] Larguras 375, 390, 768, 1024 e 1440: sem scroll horizontal em nenhuma das 13 rotas.
- [ ] Hero do Quem Somos: símbolo `h-8`, "Quem somos" legível, botões empilhados.
- [ ] Lockup "You in Banking × J.P. Morgan" quebra em linhas (não estoura).
- [ ] Certificado abaixo de `sm`: rola na horizontal dentro do quadro com o aviso "Arraste…"; nome legível (~14px).
- [ ] Painel do certificado ancorado na base (`items-end`) no mobile, centrado no desktop.
- [ ] JornadaTrilho em 2 colunas; etapas empilham (texto acima do microelemento).
- [ ] Prova social: vídeo 9:16 acima dos cards.
- [ ] Menu sanduíche abre/fecha, trava o scroll do body enquanto aberto, itens navegam.
- [ ] axe-core (wcag2a/aa/21aa/22aa) sem violações em 375×812 e 1440×900.

## Comandos de validação

```bash
npm install
npm run lint          # 0 erros
npm run typecheck     # 0 erros
npm run build         # 13 rotas ○ (static): /quem-somos(+5) e /bootcamp(+6)

# nenhuma navegação por âncora/hash nas duas frentes (ignora comentários)
grep -rn 'href="#' src/app/quem-somos src/app/bootcamp | grep -v '{/\*\|^\s*//\|/\*'   # vazio
grep -rn 'scrollIntoView' src/app/quem-somos src/app/bootcamp                          # vazio

# cor da marca fechada; verdes antigos ausentes
grep -in 'c4ef7c' src/app/globals.css
grep -rni '6fdf11\|c4ef78\|437e12\|5c7433' src

# separadores de máquina ("·" e "—") no texto VISÍVEL do Quem Somos, medido no
# HTML prerenderizado pelo build (comentários do código não contam)
for f in .next/server/app/quem-somos.html .next/server/app/quem-somos/*.html; do python3 - "$f" <<'PY'
import sys,re,html
t=open(sys.argv[1],encoding='utf-8').read()
t=re.sub(r'<script.*?</script>','',t,flags=re.S); t=re.sub(r'<style.*?</style>','',t,flags=re.S)
txt=html.unescape(re.sub(r'<[^>]+>',' ',t))
print(sys.argv[1], 'ocorrências visíveis:', len(re.findall('·|—',txt)))   # esperado: 0 em todas
PY
done

# certificado sem persistência
grep -rn 'localStorage\|sessionStorage\|document.cookie\|fetch(' src/app/bootcamp/_components/InteractiveCertificate.tsx   # vazio

# links externos seguros: todo <a target="_blank"> (JSX multilinha) tem rel="noopener noreferrer"
python3 - <<'PY'
import re,glob
bad=0
for f in glob.glob('src/app/quem-somos/**/*.tsx',recursive=True)+glob.glob('src/app/bootcamp/**/*.tsx',recursive=True):
    for m in re.finditer(r'<a\b[^>]*target="_blank"[^>]*>', open(f,encoding='utf-8').read(), re.S):
        if 'rel="noopener noreferrer"' not in m.group(0): bad+=1; print('SEM rel:', f)
print('anchors externos sem rel:', bad)   # esperado: 0 (na branch: 22 anchors, 22 com rel)
PY

# prévia local
npm run start -- -p 3000
```

Auditoria automatizada usada na sessão (Playwright + axe-core, Chromium):
para cada rota, `axe.run` com as tags wcag2a/wcag2aa/wcag21aa/wcag22aa,
`document.documentElement.scrollWidth <= innerWidth` em 375/390/768/1024/1440,
exatamente um `h1`, zero erros de console.

## Estado final esperado

- **13 rotas novas** no site oficial, todas estáticas:
  `/quem-somos`, `/quem-somos/historia`, `/quem-somos/lideranca`,
  `/quem-somos/especialistas`, `/quem-somos/ecossistema`, `/quem-somos/fundador`,
  `/bootcamp`, `/bootcamp/experiencia`, `/bootcamp/jornada`,
  `/bootcamp/certificado`, `/bootcamp/alumni`, `/bootcamp/edicoes`,
  `/bootcamp/mentores`.
- **Arquivos:** 38 (lista `final_combined_state.files_final` no JSON):
  `src/app/quem-somos/**` (9, sem Timeline), `src/data/quem-somos.ts`,
  `src/components/ui/{BrandMark,Reveal,AssetPlaceholder}.tsx`,
  `src/app/bootcamp/**` (25) — mais o `globals.css` mesclado e a fonte no layout.
- **Assets:** 34 renderizados (17 Quem Somos + 1 símbolo, 14 imagens + 2 vídeos
  do Bootcamp), com md5 e dimensões no JSON.
- **Header:** menu oficial + 1 item `BOOTCAMP → /bootcamp`; `QUEM SOMOS → /quem-somos`.
- **CSS global:** tokens `brand #c4ef7c 🔒`, `brand-soft`, `brand-deep #5d792e`,
  `ink`, `line`, `surface*`, `cert-*`, `--font-sans` Mulish; regras
  `:focus-visible`, `.on-dark`, `.reveal`, reduced-motion e o bloco `.cert-*`.
- **Sitemap:** +13 URLs. **Dependências:** nenhuma nova. **Env vars:** nenhuma.
- **Fora:** home provisória, rota `/programas/...`, componentes/dados legados,
  Header/Footer do scaffold, assets não renderizados e material-fonte.
- **Pendências de conteúdo (decisão do cliente, não do executor):** fotos de
  Agostinho Cavalcanti e Tatiana Tafarello; ano 2022 × 2023; arquivos de foto
  indicados e não recebidos; EXP-01/03; alumni em destaque; collage/fotos por
  edição; nomes oficiais das 9 etapas.
