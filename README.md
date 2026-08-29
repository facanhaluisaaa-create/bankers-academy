# Bankers Academy

Site da Bankers Academy. Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # build de produção
```

## Investment Banking Boot Camp

- Página: `/programas/investment-banking-bootcamp`
- Atalho: `/bootcamp` → redirect 308 para a rota acima

A página é montada em `src/app/programas/investment-banking-bootcamp/page.tsx`
a partir dos componentes em `src/components/bootcamp/`.

**Conteúdo e camada visual são separados.** Todo texto factual, alumni, edições,
FAQ e etapas vivem em `src/data/bootcamp/` — dá para atualizar o conteúdo sem
mexer em componente. Links e números configuráveis ficam em
`src/data/bootcamp/config.ts`.

O que ainda falta preencher (fotos, depoimentos, etc.) está em
[`CONTEUDO-PENDENTE-IBBC.md`](./CONTEUDO-PENDENTE-IBBC.md).

## Sistema visual

Os tokens (cores, tipografia, espaçamento) estão em `src/app/globals.css`, no
bloco `@theme`. As cores foram tiradas dos arquivos oficiais de logo em
`public/brand/`: o verde da marca é `#c4ef78`.

Alterar um token muda o site inteiro — evite cor solta em componente.
