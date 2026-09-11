# Template de página — landing pages de serviço (Google Ads)

> Artefato (a) da subtask **"Criação da spec"** (`s-8d3d8b2d1c`), task **"Pelvie - novas alterações"** (`t-0539886b9c`).
> Define estrutura de componentes e ordem de seções reutilizável nas 4 páginas novas:
> `/fisioterapia-pelvica`, `/acupuntura`, `/pilates`, `/massagem-e-drenagem-linfatica`.
> Dados concretos (title/meta/H1/mensagem WhatsApp/FAQ) de cada página estão em
> [`dados-por-pagina.md`](./dados-por-pagina.md) — este arquivo só descreve a *forma*.
>
> Este documento **não é código**. Nenhuma página foi criada em `src/pages/`, nenhum componente
> foi alterado. As referências a "criar componente X" / "editar componente Y" são instruções para
> as subtasks F1.x–F4.x, não algo já feito aqui.

## Pré-requisito herdado do spike F0

Formato de saída do SSG é **flat** (`/fisioterapia-pelvica.html`). O `.htaccess` atual
(`public/.htaccess`) só tem a regra de fallback do SPA (tudo cai em `/index.html`) — isso
**precisa mudar** em F1.3 para servir os `.html` gerados nas URLs limpas, senão as 4 páginas
novas dão 404 real no Apache da Locaweb assim que o build for estático. Fora de escopo aqui, só
registrando a dependência.

## Como este template foi construído

Auditei os componentes existentes em `src/` antes de propor qualquer estrutura nova (ver seção
"Auditoria de componentes reaproveitáveis" abaixo). A ordem de seções segue o que o briefing pede
na seção 5 (R1–R24) e no checklist de aceite (seção 9), na sequência que faz mais sentido para SEO
(H1 cedo, texto real logo abaixo, sinais de relevância local) e para conversão (CTA visível sem
rolar, repetido, nunca mais de 2 seções sem um).

---

## 1. Ordem de seções (visão geral)

| # | Seção | H-level | CTA WhatsApp? | Requisitos do briefing cobertos |
|---|-------|---------|----------------|----------------------------------|
| 0 | `<head>` (não visual) | — | — | R2, R3, R4, R17 |
| 1 | Header/Menu global | — | — | (layout existente, fora do escopo da página) |
| 2 | Hero (H1 + parágrafo de abertura) | H1 | **CTA #1 — acima da dobra** | R1, R8, R11, R12 |
| 3 | Conteúdo do serviço (condições/técnicas) | H2 + H3 | — | R6, R7, R8 |
| — | *(CTA a cada 2 seções)* | — | **CTA #2** | R15 |
| 4 | Como funciona o atendimento | H2 + H3 | — | R7, R8 |
| 5 | Localização | H2 | **CTA #3** | R9 |
| — | *(CTA a cada 2 seções)* | — | *(cai dentro da seção 5, ver nota)* | R15 |
| 6 | Equipe | H2 | — | (equipe, link para /quem-somos) |
| 7 | FAQ (≥6 perguntas) | H2 + H3 por pergunta | — | R6, R10, R17 |
| 8 | CTA final (card fechamento) | — | **CTA #4** | R15 |
| — | Footer global | — | — | (layout existente) |
| — | Botão WhatsApp sticky mobile | — | **CTA persistente** | R13, R14 |

Total de CTAs de WhatsApp não-sticky: **4** (mínimo exigido pelo R15), intercalados a cada 2
seções de conteúdo (3→4 e 5→6, com o CTA final fechando a página). O sticky mobile (R13) é
persistente e não conta como um dos "4 no total ao longo da página" — é uma camada à parte.

Um único `<h1>` (seção 2), um `<h2>` por seção nomeada 3–8, `<h3>` só dentro delas — sem pular
nível (R5).

---

## 2. Seção a seção

### 0. `<head>` (não visual)

Cada página precisa emitir, por rota: `<title>` (50–60 car., começando pelo termo principal —
R2), `<meta name="description">` (140–155 car. — R3), `<link rel="canonical">` apontando para a
própria URL (R4), e dois blocos `<script type="application/ld+json">`: `MedicalBusiness` (site-wide,
dados da seção 8 do briefing, idênticos em todas as páginas — R22) e `FAQPage` (por página,
`mainEntity` espelhando exatamente o texto visível da seção 7 — R17).

**Não existe hoje** nenhum mecanismo de `<head>` por rota neste projeto (sem `react-helmet`, sem
nada — conferi `package.json` e não achei `helmet`/`ld+json` em lugar nenhum do código). Isso é
decisão de implementação de F1.2, amarrada à API de `<Head>` que o `vite-react-ssg` oferece (ou
equivalente). O que a spec fixa aqui é o *contrato*: cada página do template precisa expor um
objeto `{ title, description, canonical, jsonLd: [MedicalBusiness, FAQPage] }` que F1.2 consome —
os valores concretos de title/description/canonical por página estão em `dados-por-pagina.md`.

### 1. Header/Menu global

Componente: `src/components/header` + `src/components/menu` (via `App.jsx`, fora do componente de
página — nenhuma mudança de estrutura aqui). G9 (adicionar as 4 páginas novas no submenu
"Tratamentos") é escopo de F4.4, não desta spec — só sinalizando que o menu atual
(`src/components/menu/index.jsx:49-62`) tem links fixos para Home/QuemSomos/Tratamento/ComoFunciona
e precisará de um submenu novo.

### 2. Hero — H1 + parágrafo de abertura + CTA acima da dobra

**Reaproveita:** `src/components/hero` (`Hero`), que já aceita `titleTextBe/titleSpan/titleTextAf`,
`pText`, `imgBg` e `children` (para o CTA). **Não reaproveita** `HeroCarrossel`
(`src/components/HeroCarrossel`) — esse é o carrossel Swiper da Home, correto para a home, mas
teria duas desvantagens aqui: (1) dificulta garantir R12 (hero ≤45% da viewport mobile, altura
previsível) porque o carrossel tem crop/aspect-ratio próprios pensados para tela cheia; (2) uma
imagem estática de hero é mais fácil de otimizar para LCP < 2,5s mobile (R20) do que um componente
com JS de terceiro (swiper) no caminho crítico. Recomendo hero estático com uma foto por página
(ex.: atendimento de fisioterapia pélvica, sessão de acupuntura, aula de pilates, sessão de
massagem/drenagem).

- **H1**: vem pronto do briefing (seção 6 / `dados-por-pagina.md`), contém o termo principal do
  serviço (R1, R8).
- **Parágrafo de abertura**: as 100 primeiras palavras vêm prontas do briefing para
  `/fisioterapia-pelvica`; para as outras 3 páginas, o texto-base da seção 6 do briefing serve de
  ponto de partida e deve ser adaptado ao mesmo formato (resposta direta ao "o que é [serviço]"
  nas primeiras frases, termo principal cedo) — isso é trabalho de redação de F2.1/F3.1/F3.2, não
  desta spec.
- **CTA #1 (acima da dobra)**: um `<a>` estilo `ctaBtnZap` (mesma classe usada em
  `src/pages/home/index.jsx:248-262` e no `CtaCard`) dentro do `children` do `Hero`, com o texto
  literal "Agendar avaliação pelo WhatsApp" (R11) e o `href` `wa.me` com a mensagem pré-preenchida
  específica da página (R14, ver `dados-por-pagina.md`).
- **Ajuste de CSS necessário (F1.4/F1.5)**: `src/components/hero/styles.css` define `.bgHero` sem
  limite de altura em mobile — precisa de um `max-height: 45vh` (ou equivalente) no breakpoint
  mobile para satisfazer R12. Confirmar com viewport 390×844 (iPhone 12/13 de referência do
  briefing).

### 3. Conteúdo do serviço — condições/técnicas (sem accordion)

**Não reaproveita** `src/components/accordion` (`Accordion`/`BoxAnimation` com
`accordionHeader`/`open`/`closed`) para o corpo principal — é exatamente o padrão que R6 e a
seção 10 ("Não propor accordion/aba/carrossel pro conteúdo principal") proíbem, e é o padrão hoje
usado em `src/pages/tratamento/index.jsx`, que é a causa provável da nota "Abaixo da média" da
experiência de página nos anúncios. O conteúdo (mesmo texto-fonte hoje dentro do `<Accordion>`)
deve ser renderizado **sempre visível**, em HTML semântico simples: `<h2>` da seção, `<h3>` por
condição/subtópico, `<p>` do texto.

- **Fisioterapia Pélvica**: o briefing pede explicitamente manter "as demais seções do conteúdo
  atual do site tirando os accordions" — ou seja, as 17 condições hoje dentro do
  `<Accordion title="Fisioterapia Pélvica">` em `tratamento/index.jsx:35-474` viram `<h3>`+`<p>`
  soltos aqui. **Risco a registrar, não a resolver aqui**: isso duplica texto quase 1:1 entre
  `/tratamento` (que continua no ar como institucional, R24) e `/fisioterapia-pelvica` — conteúdo
  duplicado entre duas URLs indexáveis é um risco de SEO (canibalização/dedupe do Google), mas é
  uma instrução explícita do cliente. Sinalizar para o cliente ou, na falta de resposta, priorizar
  ao menos variar a introdução/H1/meta (já são únicos) e considerar `rel=canonical` cruzado — decisão
  de F1.5, fora do escopo desta spec.
- **Acupuntura / Pilates / Massagem e Drenagem**: mesmo padrão, usando o texto-base da seção 6 do
  briefing (que para acupuntura já pede complementar com fertilidade/Protocolo de Paulus e preparo
  para o parto) mais o texto que já existe no `tratamento/index.jsx` para essas 3 especialidades
  (linhas 486–650 acupuntura, 662–680 pilates, 692–768 massagem/drenagem), desacordeonizado.
- **Contagem de 600 palavras (R7)**: para Pilates e Massagem/Drenagem o texto-base do briefing é
  mais curto que o de Fisioterapia Pélvica — F3.1/F3.2 provavelmente precisam complementar com
  parágrafos adicionais (benefícios, indicações, o que esperar da primeira sessão) usando os
  termos de busca reais das pacientes (R8) para fechar a contagem sem enchimento artificial.
- **Componentes de apoio**: `BoxAnimation` (`src/components/boxAnimation`) pode envolver blocos
  para manter a mesma microanimação de entrada que o site já usa — não afeta visibilidade
  (permanece no DOM, sem `display:none` condicional a interação), então não conflita com R6.

**CTA #2** logo após esta seção: reaproveita `CtaAcc` (`src/components/ctaAcc`), já usado nesse
exato padrão em `tratamento/index.jsx:477-481` (`aText`, `href`, `img` — sem mudança de API
necessária).

### 4. Como funciona o atendimento

Seção curta (H2 "Como funciona o atendimento" ou similar + 2-3 parágrafos/H3: avaliação inicial,
plano de tratamento, frequência) — o briefing pede manter, ao final da página, "botão pra página
como funciona" (não necessariamente replicar todo o conteúdo de `/como-funciona` aqui). Proposta:
um resumo de ~80-120 palavras (contribui para R7) + um `NavLink` para `/como-funciona`, no mesmo
padrão do botão da equipe em `tratamento/index.jsx:849-851` (`className="ctaBtn2 ..."`).

### 5. Localização (bloco obrigatório R9)

**Reaproveita:** `src/components/maps` (`Maps`, iframe do Google Maps já embedado e apontando
para o endereço certo — `maps/index.jsx:7`) + o padrão de marcação já usado na Home
(`src/pages/home/index.jsx:328-351`, bloco `googleMaps`/`adressMaps`), que hoje é markup solto
dentro da página. **Proposta**: extrair esse padrão para um componente novo `LocationBlock` (não
existe ainda) recebendo como children/props o texto do endereço, para não duplicar a marcação 4
vezes — decisão de extração é de F1.4, aqui só descrevo o conteúdo que a seção precisa ter:

- Endereço por extenso, idêntico à seção 8 do briefing: "Rua James Watt, 142, Sala 42 — Brooklin,
  São Paulo/SP — CEP 04576-050" (R9, R22 — NAP idêntico).
- Mapa incorporado (`Maps`).
- Link "Como chegar" explícito (texto literal, não só o link do endereço) apontando pro Google
  Maps — hoje a Home só tem o endereço como link, sem o rótulo "Como chegar"; esta seção deve ter
  as duas coisas (texto do endereço + CTA separado "Como chegar").
- Referências de proximidade (bairro Brooklin, pontos de referência) — texto livre, reforça
  também o termo de melhor desempenho do briefing ("fisioterapia pélvica perto de mim", 14,81%
  CTR) de forma natural (R8).

**CTA #3** cai dentro ou logo após esta seção (ver nota da tabela da seção 1 — a localização em
si não é um CTA de agendamento, mas fecha o padrão "a cada 2 seções").

⚠️ **Inconsistência de NAP encontrada na auditoria** (não é escopo desta spec resolver, mas
precisa entrar em F4.1/G-series): o horário de funcionamento aparece **diferente em 3 lugares**
do código hoje —
`src/components/footer/index.jsx:52` diz "Segunda a Sexta das 7h às 21h",
`src/components/menu/index.jsx:99` diz "Seg à Sex - 8h às 18h", e a seção 8 do briefing (fonte de
verdade) diz "Segunda a sexta, 7h às 20h30". O bairro também diverge:
`src/components/menu/index.jsx:103` diz "Cidade Monções", enquanto o briefing e o footer dizem
"Brooklin". R22 exige NAP idêntico em todas as páginas e igual ao Google Meu Negócio — isso já
falha *hoje*, antes mesmo das páginas novas existirem. Registrando para não se perder: F4.1 (ou
uma correção pontual antes disso) precisa igualar os três.

### 6. Equipe

**Reaproveita:** `SpecCard` (`src/components/specCard`) no mesmo padrão de grid usado em
`tratamento/index.jsx:789-847` (`ourTeamCards`) e `home/index.jsx:172-232` — 6 cards com
nome completo + CREFITO (dados exatos na seção 8 do briefing/`dados-por-pagina.md`). Fecha com o
mesmo botão para `/quem-somos` (`NavLink to="/QuemSomos"`, padrão `tratamento/index.jsx:849`).
Sem CTA de WhatsApp nesta seção — o próximo CTA é o da seção 7/8.

*(Opcional por página, decisão de F1.5+: em vez do time completo, destacar primeiro a(s)
profissional(is) mais ligada(s) ao serviço — ex. Dra. Cibele Ferrari em `/acupuntura` — e depois o
link "conheça toda a equipe". Não é requisito do briefing, é só uma sugestão de conversão; o
requisito mínimo é ter o bloco da equipe presente.)*

### 7. FAQ (mínimo 6 perguntas — R10)

**Não reaproveita** `Accordion` pelo mesmo motivo da seção 3 (R6 veta accordion pro conteúdo
principal, e esconder a resposta atrás de clique é exatamente o padrão hoje reprovado pelo Google
Ads). Proposta: componente novo `FaqSection` (não existe ainda) — cada pergunta é um `<h3>`, cada
resposta um `<p>` **sempre visível**, sem toggle. Isso também resolve de graça o item do checklist
"conteúdo presente no HTML sem JS (Ctrl+U)" para a seção de FAQ.

- Estrutura de dados: lista de `{ pergunta, resposta }` por página (`dados-por-pagina.md`), com
  no mínimo 6 pares.
- O mesmo array alimenta o `<h3>/<p>` visível **e** o JSON-LD `FAQPage.mainEntity` do `<head>`
  (seção 0) — texto tem que ser idêntico nos dois lugares, senão o Rich Results Test reprova por
  divergência entre schema e conteúdo visível.
- **As perguntas ainda não foram entregues pela cliente** (subtask `s-f48de7337a`, bloqueada). Ver
  `dados-por-pagina.md` para os placeholders — a estrutura (6 slots por página, mapeados pra
  `<h3>`/`<p>`) já está pronta para receber o texto assim que chegar, sem exigir mudança de
  componente.

### 8. CTA final

**Reaproveita:** `CtaCard` (`src/components/ctaCard`), mesmo componente usado ao fechar
`tratamento/index.jsx:854-861` e `home/index.jsx:353-362` (`googleBtn` opcional + botão WhatsApp
`ctaBtnZap`). **CTA #4** — fecha a contagem mínima de 4 exigida por R15.

### Footer global + botão sticky mobile

Footer: `src/components/footer`, sem mudança estrutural (fora do escopo da página) — mas ver a
inconsistência de horário sinalizada na seção 5 acima, que vive dentro deste componente.

Sticky mobile (R13/R14): reaproveita `FixedButton` (`src/components/fixedButton`), mas esse
componente **hoje tem `href` e mensagem hardcoded** (`fixedButton/index.jsx:12`, mensagem
genérica fixa, igual em todas as páginas). Para R14 (mensagem pré-preenchida diferente por
página), `FixedButton` precisa aceitar `href`/mensagem como prop — mudança pontual necessária em
F1.4, cada página passando sua própria mensagem (mesma tabela de `dados-por-pagina.md`).

---

## 3. Auditoria de componentes reaproveitáveis — resumo

| Componente | Reaproveita como está? | Observação |
|---|---|---|
| `container` | ✅ sim | wrapper de seção, sem mudança |
| `boxAnimation` | ✅ sim | microanimações de entrada, não esconde conteúdo |
| `hero` | ✅ sim (props já cobrem H1/parágrafo/CTA via children) | precisa de CSS novo pro limite de 45vh mobile (R12) |
| `HeroCarrossel` | ❌ não recomendado aqui | mantido só para a Home; ver seção 2 |
| `ctaAcc` | ✅ sim | CTA inline repetido, já usado assim em `tratamento` |
| `ctaCard` | ✅ sim | CTA final, já usado assim em `tratamento`/`home` |
| `fixedButton` | ⚠️ precisa de mudança pontual | hoje mensagem hardcoded; precisa aceitar prop por página (R14) |
| `maps` | ✅ sim | iframe já aponta pro endereço certo |
| `specCard` | ✅ sim | grid de equipe, já usado assim em `tratamento`/`home` |
| `accordion` | ❌ não usar no corpo principal nem no FAQ | é o padrão que R6 proíbe |
| `googleCard` | opcional | reaproveitável se alguma página quiser reforçar prova social com depoimento específico do serviço; não é requisito |
| `EspecialidadesCard` | não aplicável aqui | é o card-resumo da Home que linka pra `/tratamento`; nas páginas novas o conteúdo já é o serviço inteiro, não um resumo |
| `LocationBlock` (novo) | 🆕 precisa ser criado | extrai o padrão hoje solto em `home/index.jsx:328-351` |
| `FaqSection` (novo) | 🆕 precisa ser criado | H3/p sempre visível + alimenta o JSON-LD FAQPage |
| Mecanismo de `<head>` por rota (novo) | 🆕 precisa ser criado | amarrado à decisão de API do `vite-react-ssg`, escopo de F1.2 |

---

## 4. Checklist de aceite (seção 9 do briefing) → onde é satisfeito

| Item do checklist | Satisfeito por |
|---|---|
| H1 único com termo principal | Seção 2 (Hero), 1 por página — dado pronto em `dados-por-pagina.md` |
| `<title>` 50–60 car. | Seção 0 (`<head>`) — valor em `dados-por-pagina.md` |
| Meta description 140–155 car. | Seção 0 — valor em `dados-por-pagina.md` |
| Canonical presente | Seção 0 |
| Nada em accordion/aba | Seções 3 e 7 explicitamente fora do `Accordion` |
| Mínimo 600 palavras visíveis | Soma de seções 2–7 (texto real, não placeholder) |
| Termos de busca da seção 6/8 no texto | Redação de F1.5/F2.1/F3.1/F3.2, usando o texto-base do briefing |
| CTA WhatsApp visível sem rolagem (1366×768 e 390×844) | Seção 2, CTA #1 no Hero |
| Botão WhatsApp sticky mobile | `FixedButton` (ajustado), fora da seção de página |
| Mensagem pré-preenchida específica | CTAs #1–#4 + sticky, todos usando a mensagem da página (`dados-por-pagina.md`) |
| CTA repetido ≥4× | Tabela da seção 1 (#1 Hero, #2 pós-conteúdo, #3 pós-localização, #4 final) |
| Bloco de localização com mapa e "como chegar" | Seção 5 |
| FAQ com ≥6 perguntas | Seção 7 |
| Conteúdo presente no HTML sem JS (Ctrl+U) | Consequência direta de não usar `Accordion` (SSG garante isso desde que nada dependa de `useState`/clique pra aparecer) |
| Schema MedicalBusiness + FAQPage válidos | Seção 0, dados de MedicalBusiness = seção 8 do briefing (idênticos entre páginas), FAQPage = seção 7 |
| LCP < 2,5s mobile | Hero estático (seção 2) em vez de carrossel/swiper; imagens WebP com dimensões declaradas |
| Imagens WebP com alt | Todas as imagens de conteúdo (hero, equipe) — já é o padrão do projeto (`assets/img/webp`) |
| NAP idêntico à seção 8 | Seção 5 — ⚠️ ver inconsistência já existente sinalizada acima, precisa correção antes/junto de F4.1 |
| URL minúscula/hífen | Já cumprido pelas 4 URLs definidas no briefing |
| Sem erro no console | Verificação de QA em F1.6/F2.3/F3.3, não uma seção do template |
| Página no menu "Tratamentos" | F4.4, fora do escopo da página em si |
| 404 real pra URL inexistente | F1.3 (gap já mapeado no spike F0 — rota `*` não sai pré-renderizada do `vite-react-ssg`) |

---

## 5. O que esta spec deliberadamente não decide

- Qual mecanismo exato de `<head>`/JSON-LD por rota o `vite-react-ssg` vai usar (F1.2).
- Regras finais do `.htaccess` para URL limpa → arquivo flat, e para 404 real (F1.3).
- Se a duplicação de conteúdo entre `/tratamento` e `/fisioterapia-pelvica` precisa de mitigação
  além do que o briefing já pediu (sinalizado como risco, não resolvido).
- Texto final de preenchimento das seções 3/4 para Pilates e Massagem/Drenagem além do que o
  briefing já forneceu (redação é da fase de implementação de cada página).
- As 24 perguntas de FAQ (dependem da cliente, `s-f48de7337a`).
