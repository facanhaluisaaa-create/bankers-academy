# IBBC — conteúdo pendente

Tudo que está publicado na página vem de material oficial da Bankers Academy /
SP Advisors ou do próprio diploma físico. A lista abaixo é o que **ainda falta**
para a página ficar completa. Nada aqui foi preenchido por suposição.

## 1. Fotografias (prioridade alta)

Não veio nenhuma foto de edição no pacote de assets — só o diploma e os logos.
Cada slot está marcado na página com o componente `AssetPlaceholder`
("FOTO PENDENTE"), então é impossível subir para produção sem perceber.

| Onde | O que a foto precisa mostrar |
|---|---|
| Hero | Campers trabalhando durante uma edição (foto ou vídeo de abertura) |
| Experiência · ANALISAR | Camper analisando dados de um setor |
| Experiência · MODELAR | Campers nos computadores, construindo o modelo |
| Experiência · AVALIAR | Mentor revisando o valuation com um camper |
| Experiência · APRESENTAR | Apresentação final do Pitchbook para a banca |
| Mentores | Retrato de José Roberto Securato Jr. |
| Edições | Foto de turma por edição (campo `image` em `editions.ts`) |
| Alumni | Foto individual (campo `image` em `alumni.ts`) |

Como substituir: colocar o arquivo em `public/images/bootcamp/` e trocar
`<AssetPlaceholder … />` por `<Image … />` no mesmo ponto do componente.

## 2. Depoimentos (prioridade alta — a seção está oculta)

`src/data/bootcamp/testimonials.ts` já tem os **cinco nomes do IBBC**
(Ana Luísa Telöken, André Cavalcante, Gustavo Campoi, Pedro Henrique Canano,
Rafael Aguirre), separados dos depoimentos de outros programas.

Faltam duas coisas, e **enquanto faltarem a seção inteira não renderiza**:

1. **O texto autorizado de cada depoimento** (`quote`). O .docx trazia só links.
2. **Um permalink público do LinkedIn** (`linkedin` + `linkVerified: true`).
   As URLs enviadas são do tipo `/feed/?highlightedUpdateUrn=…`, que só abrem
   para a conta que recebeu a notificação — para um visitante elas não
   funcionam. As originais ficaram guardadas em
   `ibbcTestimonialSourceUrlsUnverified` só para localizar os posts.
   O formato certo é `linkedin.com/posts/…`.

## 3. As 9 etapas oficiais

O material oficial confirma que o programa tem **9 etapas**, mas não publica o
nome de cada uma. Por isso a timeline mostra a **progressão** da experiência
(sem numerar as etapas, para não afirmar o que não foi confirmado).

Quando a Bankers Academy passar os nomes oficiais, basta substituir o array em
`src/data/bootcamp/journey.ts` — o componente renderiza qualquer quantidade.

## 4. Alumni — campos vazios

`src/data/bootcamp/alumni.ts` tem **135 campers reais** (nome, turma, ano e setor
coberto), extraídos do arquivo oficial de edições anteriores. Os campos abaixo
estão vazios de propósito e **ficam ocultos no card enquanto vazios**:

- `currentCompany`, `currentRole` — onde a pessoa trabalha hoje
- `linkedin` — perfil
- `image` — foto
- `finalist`, `winner` — quem foi finalista/vencedor de cada edição

> `finalist` e `winner` são justamente a prova social mais forte da seção.
> O arquivo oficial não indica quem foram — vale confirmar internamente.

## 5. Outras informações não confirmadas

- **Valor e condições de pagamento** — não publicados na página.
- **Datas exatas** de cada edição.
- **Política de bolsas / descontos.**
- **Pré-requisitos formais** (curso, período da faculdade).
- **Mentores além do Securato Jr.**: chegaram os LinkedIn de Alexandre Paixão,
  Marcus Piellusch, Walter Eclache e Tatiana Tafarello, mas nada no material
  confirma que eles atuam **no IBBC especificamente**. Por isso não entraram em
  `mentors.ts`. Confirmando o vínculo e o cargo, é só adicionar lá.
- **Foto de turma por edição** para `editions.ts`.

## 6. Links a confirmar

- **CTA principal**: hoje aponta para o WhatsApp oficial
  (+55 11 99007-0784), porque o pacote informa que o IBBC **não tem link de
  carrinho** ("IB Boot Camp: não tem") e a entrada é por entrevista.
  Se existir um formulário de inscrição/entrevista, trocar `ibbcLinks.apply`
  em `src/data/bootcamp/config.ts`.
- **Domínio**: o `metadataBase`, o canonical e o sitemap assumem
  `https://www.bankersacademy.com.br`. Confirmar antes de ir para produção.
