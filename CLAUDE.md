@AGENTS.md

# Bankers Academy — como este trabalho está organizado

## Duas frentes, sempre separadas

São **dois trabalhos distintos**, nunca unificados:

| Frente | O que é | Prévia (link fixo) |
|---|---|---|
| **Quem Somos** | a página `/quem-somos` | https://claude.ai/code/artifact/621f3077-85ae-4356-9b72-9ca47d41889a |
| **Investment Banking Boot Camp** | a página `/bootcamp`, com o certificado interativo | https://claude.ai/code/artifact/0eb0676a-9918-4af2-8ce1-1293bb2de696 |

Regras que valem sempre:

- **Nunca juntar as duas numa prévia só.** Cada uma tem o seu link e continua tendo.
- **Cada link é fixo.** Atualizar sempre republicando na mesma URL (`url:` no
  Artifact), nunca criando link novo. O cliente guarda esses endereços.
- **O cliente diz qual das duas está em edição no momento.** Se não estiver
  claro, perguntar antes de mexer — não deduzir pelo assunto.
- Editar uma **não** autoriza editar a outra. Se uma mudança em arquivo
  compartilhado (ex.: `src/app/globals.css`) atingir as duas, avisar.
- O Boot Camp também é desenvolvido **em outro projeto**, à parte. No Quem
  Somos ele só pode aparecer como marco de 2018 na linha do tempo, como um
  card no ecossistema e como link no CTA — nunca com seções próprias.

## Cor da marca — fechada

`#C4EF7C`. O cliente pediu exatamente essa cor e esse estilo visual.
Não substituir, não "ajustar", não derivar uma variante para usar no lugar.
Detalhes e contrastes em `src/app/globals.css`.

## Conteúdo

- **Nunca inventar informação.** Nome, cargo, vínculo, número ou data que não
  esteja confirmado fica vazio — e não vira "a confirmar" para o visitante.
- **Fotos são organizadas pelo nome do arquivo, nunca por aparência.**
  Ninguém é identificado olhando a foto. Ver
  `public/images/quem-somos/COMO-NOMEAR.txt`.

## Limites de operação

Não publicar em produção. Não alterar domínio, configurações da Vercel nem
variáveis de ambiente. Não apagar assets. Não fazer force push. Não fazer
merge para a main. Desenvolvimento na branch `claude/ibbc-page-kzoqyc`.
