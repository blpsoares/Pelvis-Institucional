# Dados por página — landing pages de serviço (Google Ads)

> Artefato (b) da subtask **"Criação da spec"** (`s-8d3d8b2d1c`), task **"Pelvie - novas alterações"**
> (`t-0539886b9c`). Preenche o template descrito em [`template.md`](./template.md) com os dados
> concretos de cada uma das 4 páginas novas. Title/meta description/H1/texto-base vêm prontos da
> seção 6 do briefing da cliente — transcritos aqui sem alteração. Mensagens de WhatsApp são
> propostas novas (o briefing só exige R14 — mensagem diferente por página — sem fornecer o texto
> exato; adaptei do padrão já usado em `src/pages/tratamento/index.jsx`, que tem uma mensagem
> distinta por especialidade). As perguntas de FAQ **ainda não foram entregues pela cliente**
> (subtask `s-f48de7337a`, bloqueada) — os placeholders abaixo têm a pergunta como
> `[aguardando FAQ da cliente]`, com um tema sugerido entre parênteses só para orientar quem for
> cobrar/organizar o recebimento; não é copy final.

## Dados fixos (NAP) — idênticos nas 4 páginas (R22)

- **Nome:** PELVIE - Fisioterapia Pélvica Funcional
- **Endereço:** Rua James Watt, 142, Sala 42 — Brooklin, São Paulo/SP — CEP 04576-050
- **Telefone/WhatsApp:** (11) 91311-2992
- **E-mail:** secretaria@pelviefisioterapia.com.br
- **Horário:** Segunda a sexta, 7h às 20h30 · Sábados, 8h às 14h

⚠️ Ver `template.md`, seção 2 (Localização) — o horário e o bairro hoje **divergem** entre
`footer`, `menu` e este NAP oficial. Usar **só os valores acima** como fonte de verdade nas 4
páginas novas; a correção do que já está no ar é escopo de F4.1/G-series, não desta spec.

**Equipe** (nome completo + CREFITO, mesmo texto em todas as páginas que exibirem o bloco):

| Nome | Especialização | CREFITO |
|---|---|---|
| Dra. Juliana de Sá | Saúde da Mulher e Instrutora do Método Pilates | CREFITO-3/226407-F |
| Dra. Laura Noronha | Saúde da Mulher e Terapia do Movimento | CREFITO-3/309697-F |
| Dra. Leila Cristina | Saúde da Mulher | CREFITO-3/322756-F |
| Dra. Cibele Ferrari | Acupunturista, Saúde da Mulher e Gestantes | CREFITO-3/111858-F |
| Dra. Thipphane Yuka | Saúde da Mulher, Massoterapeuta e Instrutora do Método Pilates | CREFITO-3/439481-F |
| Dra. Isadora Savi | Saúde Pélvica e Obstétrica e Instrutora do Método Pilates | CREFITO-3/402185-F |

---

## 1. `/fisioterapia-pelvica` — Prioridade 1

| Campo | Valor |
|---|---|
| **URL** | `/fisioterapia-pelvica` |
| **Title** (52 car.) | Fisioterapia Pélvica no Brooklin, São Paulo \| PELVIE |
| **Meta description** (148 car.) | Tratamento de incontinência urinária, diástase abdominal, vaginismo e endometriose. Fisioterapia pélvica no Brooklin, São Paulo. Agende sua avaliação. |
| **H1** | Fisioterapia Pélvica em São Paulo |
| **Mensagem WhatsApp** (todos os CTAs da página) | `Olá! Gostaria de agendar uma avaliação de Fisioterapia Pélvica. Estou buscando a clínica porque…` |

**Parágrafo de abertura** (pronto, 100 primeiras palavras — briefing seção 6.1):

> O que é fisioterapia pélvica? É a área da fisioterapia que cuida do assoalho pélvico. Quando
> esses músculos perdem força ou coordenação, o corpo avisa: escape de urina ao tossir, rir ou
> treinar (incontinência urinária), dor na relação sexual, a barriga que não volta depois da
> gestação (diástase abdominal), sensação de peso ou de bola na vagina (prolapso), intestino preso
> e dores pélvicas que ninguém consegue explicar. A fisioterapia pélvica também prepara o corpo
> para o parto e organiza a recuperação no pós-parto. O tratamento é individual e tudo começa com
> uma avaliação detalhada. São utilizados exercícios específicos, terapias manuais e recursos como
> biofeedback e eletroestimulação. O tratamento é conduzido por fisioterapeutas especializadas na
> área. A avaliação é o momento mais importante pois é quando entenderemos o seu caso antes de
> propor qualquer conduta. Após a avaliação, você recebe seu Plano de Tratamento personalizado.

**Corpo (seção 3 do template):** manter as demais seções do conteúdo atual de `/tratamento`
(condições hoje dentro do `<Accordion title="Fisioterapia Pélvica">`, `tratamento/index.jsx:35-474`
— 17 condições), desacordeonizadas. Ver risco de duplicação de conteúdo anotado em `template.md`.

**Final da página:** bloco da equipe (seção 6 do template) + botão para `/como-funciona` (seção 4).

**FAQ (6 perguntas mínimas — placeholders):**

| # | Pergunta | Tema sugerido |
|---|---|---|
| 1 | [aguardando FAQ da cliente] | O que é / para quem é indicada a fisioterapia pélvica |
| 2 | [aguardando FAQ da cliente] | Sinais de que a avaliação é necessária (incontinência, dor, prolapso) |
| 3 | [aguardando FAQ da cliente] | Como funciona a primeira consulta/avaliação |
| 4 | [aguardando FAQ da cliente] | Quantas sessões / duração do tratamento |
| 5 | [aguardando FAQ da cliente] | Atende gestantes e pós-parto? |
| 6 | [aguardando FAQ da cliente] | Atendimento no Brooklin, São Paulo — "perto de mim" |

---

## 2. `/acupuntura` — Prioridade 2

| Campo | Valor |
|---|---|
| **URL** | `/acupuntura` |
| **Title** (49 car.) | Acupuntura para Fertilidade e Gestação \| PELVIE SP |
| **Meta description** (148 car.) | Acupuntura para fertilidade, gestação, ansiedade, enxaqueca e dores crônicas. Fisioterapeuta acupunturista no Brooklin, São Paulo. Agende sua sessão. |
| **H1** | Acupuntura em São Paulo |
| **Mensagem WhatsApp** (todos os CTAs da página) | `Olá! Gostaria de agendar uma sessão de Acupuntura. Estou buscando a clínica porque…` |

**Corpo (seção 3 do template):** manter o texto que já existe no site sobre acupuntura
(`tratamento/index.jsx:486-650`), desacordeonizado, **acrescentando**:
- "Estímulo à fertilidade e realização do Protocolo de Paulus - aplicado antes e depois da
  transferência embrionária em FIV (Fertilização In Vitro)";
- "Gestação e preparo para o parto (favorece o início do trabalho de parto de forma espontânea)".

**Final da página:** bloco da equipe (destacar Dra. Cibele Ferrari, fisioterapeuta acupunturista)
+ botão para `/como-funciona`.

**FAQ (6 perguntas mínimas — placeholders):**

| # | Pergunta | Tema sugerido |
|---|---|---|
| 1 | [aguardando FAQ da cliente] | O que a acupuntura trata na saúde da mulher |
| 2 | [aguardando FAQ da cliente] | Acupuntura para fertilidade / Protocolo de Paulus — como funciona |
| 3 | [aguardando FAQ da cliente] | É segura na gestação? |
| 4 | [aguardando FAQ da cliente] | Dói a aplicação das agulhas? |
| 5 | [aguardando FAQ da cliente] | Quantas sessões / com que frequência |
| 6 | [aguardando FAQ da cliente] | Quem aplica (formação da profissional) |

---

## 3. `/pilates` — Prioridade 3 (campanha pausada, reativação prevista)

| Campo | Valor |
|---|---|
| **URL** | `/pilates` |
| **Title** (54 car.) | Pilates para Gestantes e Pós-Parto \| PELVIE Brooklin SP |
| **Meta description** (155 car.) | Pilates conduzido por fisioterapeuta, em grupos reduzidos. Para gestantes, pós-parto e diástase abdominal. Brooklin, São Paulo. Agende sua aula experimental. |
| **H1** | Pilates em São Paulo |
| **Mensagem WhatsApp** (todos os CTAs da página) | `Olá! Gostaria de agendar uma aula experimental de Pilates. Estou buscando a clínica porque…` |

**Corpo (seção 3 do template)** (pronto — briefing seção 6.3):

> Pilates especializado em Gestação e Pós-Parto (Diástase Abdominal). É um método de exercícios
> desenvolvido por Joseph Pilates na década de 1920 que visa trabalhar a conexão entre mente e
> corpo, como uma unidade, de modo a melhorar a consciência corporal. Pode ser feito com
> equipamentos (studio) ou em solo. Utiliza-se acessórios como a bola de pilates, faixas elásticas
> e halteres. Sua prática traz diversos benefícios, como melhora da flexibilidade e da mobilidade,
> ganho de força muscular e alívio de dores. Aqui na PELVIE oferecemos aulas de Pilates com
> fisioterapeuta especialista. As aulas são INDIVIDUAIS e totalmente focadas em gestantes e
> mulheres no pós-parto, contribuindo para a manutenção da qualidade de vida nesse período,
> aliviando dores e preparando a mulher para lidar com todas as alterações corporais desse período.

Texto-base é mais curto que o das outras 3 páginas — ver nota em `template.md` seção 3 sobre
precisar complementar para fechar as 600 palavras mínimas (R7) sem enchimento artificial.

**Final da página:** bloco da equipe (destacar instrutoras do Método Pilates: Dra. Juliana de Sá,
Dra. Thipphane Yuka, Dra. Isadora Savi) + botão para `/como-funciona`.

**FAQ (6 perguntas mínimas — placeholders):**

| # | Pergunta | Tema sugerido |
|---|---|---|
| 1 | [aguardando FAQ da cliente] | Pilates é seguro durante a gravidez? |
| 2 | [aguardando FAQ da cliente] | Diferença entre pilates comum e pilates com fisioterapeuta |
| 3 | [aguardando FAQ da cliente] | Ajuda na diástase abdominal pós-parto? |
| 4 | [aguardando FAQ da cliente] | Como são as aulas (individuais, com equipamento/solo) |
| 5 | [aguardando FAQ da cliente] | Preciso de liberação médica? |
| 6 | [aguardando FAQ da cliente] | Quando posso começar no pós-parto |

---

## 4. `/massagem-e-drenagem-linfatica` — Prioridade 4 (campanha pausada, reativação prevista)

| Campo | Valor |
|---|---|
| **URL** | `/massagem-e-drenagem-linfatica` |
| **Title** (50 car.) | Massagem e Drenagem Linfática \| PELVIE Brooklin, SP |
| **Meta description** (147 car.) | Massagem relaxante e drenagem linfática com fisioterapeuta. Pós-operatório, gestantes e retenção de líquido. Brooklin, São Paulo. Agende seu horário. |
| **H1** | Massagem Relaxante e Drenagem Linfática em São Paulo |
| **Mensagem WhatsApp** (todos os CTAs da página) | `Olá! Gostaria de agendar um horário de Massagem ou Drenagem Linfática. Estou buscando a clínica porque…` |

**Corpo (seção 3 do template)** — dois blocos H3 dentro da seção H2, prontos (briefing seção 6.4):

*Massagem Relaxante:*
> A saúde vai muito além da ausência de dor. Cuidar do corpo é também cuidar da mente — e a
> massagem relaxante é uma das formas mais eficazes de promover esse equilíbrio. Com técnicas
> suaves, movimentos rítmicos e foco no relaxamento muscular, a massagem relaxante proporciona
> alívio imediato do estresse, ansiedade e tensões acumuladas no dia a dia. Benefícios: redução do
> estresse e da ansiedade; alívio de dores musculares e tensões; melhora da circulação sanguínea;
> melhora da qualidade do sono; sensação profunda de bem-estar e relaxamento. A sessão é realizada
> por uma fisioterapeuta especializada, em um ambiente calmo, confortável e seguro.

*Drenagem Linfática:*
> A drenagem linfática é uma técnica manual suave, indicada para estimular o sistema linfático —
> responsável por eliminar toxinas, líquidos retidos e resíduos metabólicos do corpo. Muito bem
> indicada para gestantes e outras situações clínicas. Benefícios: redução do inchaço (edema) e da
> retenção de líquidos; melhora da circulação sanguínea e linfática; auxílio no pós-operatório
> (cirurgias plásticas, ortopédicas etc.); alívio de dores e sensação de peso nas pernas; estímulo
> ao sistema imunológico; relaxamento corporal e redução do estresse. Aliada em casos de linfedema,
> celulite, TPM, gestação (com liberação médica) e outros quadros de acúmulo de líquidos ou
> inflamação leve. Realizada por fisioterapeuta especializada.

Mesma nota de F3.2 precisar complementar para as 600 palavras mínimas (R7) que a página de Pilates.

**Final da página:** bloco da equipe + botão para `/como-funciona`.

**FAQ (6 perguntas mínimas — placeholders):**

| # | Pergunta | Tema sugerido |
|---|---|---|
| 1 | [aguardando FAQ da cliente] | Diferença entre massagem relaxante e drenagem linfática |
| 2 | [aguardando FAQ da cliente] | Drenagem linfática é indicada na gestação? |
| 3 | [aguardando FAQ da cliente] | Ajuda no pós-operatório de quais cirurgias? |
| 4 | [aguardando FAQ da cliente] | Quantas sessões para reduzir inchaço/retenção |
| 5 | [aguardando FAQ da cliente] | Contraindicações |
| 6 | [aguardando FAQ da cliente] | Quem realiza a sessão |

---

## Resumo — o que falta para fechar cada tabela

| Página | Title/meta/H1 | Texto-base do corpo | FAQ (6 perguntas) |
|---|---|---|---|
| `/fisioterapia-pelvica` | ✅ pronto | ✅ pronto (reaproveita `/tratamento`) | ⏳ bloqueado por `s-f48de7337a` |
| `/acupuntura` | ✅ pronto | ✅ pronto (reaproveita `/tratamento` + 2 adições) | ⏳ bloqueado por `s-f48de7337a` |
| `/pilates` | ✅ pronto | ⚠️ pronto mas curto — precisa complemento em F3.1 | ⏳ bloqueado por `s-f48de7337a` |
| `/massagem-e-drenagem-linfatica` | ✅ pronto | ⚠️ pronto mas curto — precisa complemento em F3.2 | ⏳ bloqueado por `s-f48de7337a` |
