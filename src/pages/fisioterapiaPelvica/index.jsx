import "./styles.css";

import { Head } from "vite-react-ssg";
import { NavLink } from "react-router-dom";

import MedicalBusinessSchema from "../../components/medicalBusinessSchema";
import FaqPageSchema from "../../components/faqPageSchema";
import Container from "../../components/container";
import BoxAnimation from "../../components/boxAnimation";
import Hero from "../../components/hero";
import CtaAcc from "../../components/ctaAcc";
import CtaCard from "../../components/ctaCard";
import SpecCard from "../../components/specCard";
import LocationBlock from "../../components/locationBlock";
import LeadParagraph from "../../components/leadParagraph";

import slugAncora from "../../utils/slugAncora";

import heroImg from "../../assets/img/webp/bgTratamentosDesktop.webp";
import juliana from "../../assets/img/webp/juliana.webp";
import laura from "../../assets/img/webp/laura.webp";
import leila from "../../assets/img/webp/leila.webp";
import cibele from "../../assets/img/webp/cibele.webp";
import isadora from "../../assets/img/webp/isadora.webp";
import thipphane from "../../assets/img/webp/thipphane.webp";

import whatsappGreen from "../../assets/img/svgs/wppGreen.svg";
import whatsappBranco from "../../assets/img/svgs/whatsappBranco.svg";

const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma avaliação de Fisioterapia Pélvica. Estou buscando a clínica porque…";
const WHATSAPP_HREF = `https://wa.me/+5511913112992?text=${WHATSAPP_MESSAGE}`;

// Condições reaproveitadas de src/pages/tratamento/index.jsx (bloco "Fisioterapia
// Pélvica", hoje dentro de um Accordion) — aqui desacordeonizadas, sempre visíveis.
const CONDICOES = [
  {
    title: "Gestação e Pós-Parto",
    familia: "Gestação e pós-parto",
    paragraphs: [
      "Durante a gestação, a Fisioterapia tem como objetivo manter a qualidade de vida da gestante e preparar seu corpo para as alterações futuras, prevenindo as disfunções mais comuns, como as dores na coluna, a diástase abdominal e a incontinência urinária. O trabalho visa também favorecer uma melhor recuperação no período do pós-parto, independente da via (vaginal ou cesárea). Atuamos, também, mais especificamente no preparo corporal para o parto normal, através de técnicas e exercícios que facilitarão o processo e irão garantir um melhor desfecho para a saúde materna.",
      "No pós-parto, favorecemos principalmente a recuperação do assoalho pélvico e da musculatura abdominal e aliviamos os desconfortos físicos que podem aparecer em decorrência dos cuidados com o bebê. O objetivo é garantir que a mulher possa executar todas as suas tarefas diárias e retornar à prática de exercícios físicos com segurança.",
    ],
  },
  {
    title: "Diástase Abdominal",
    familia: "Gestação e pós-parto",
    paragraphs: [
      "A diástase abdominal é uma condição na qual os feixes do músculo reto abdominal afastam-se em decorrência do crescimento da barriga. Essa condição é fisiológica, ou seja, faz parte das alterações gestacionais. No entanto, uma diástase não tratada pode trazer outros comprometimentos à saúde, como dores e problemas de coluna e hérnias. Além disso, está relacionada também ao aparecimento de disfunções pélvicas, como a incontinência urinária e os prolapsos. Portanto, é extremamente importante que a mulher seja avaliada e receba orientações acerca dos cuidados diários e exercícios corretos para favorecer a recuperação da função dos músculos abdominais. A fisioterapia pélvica atua através de orientações, exercícios e técnicas direcionadas para esse objetivo.",
    ],
  },
  {
    title: "Incontinência Urinária de Esforço",
    familia: "Perdas urinárias",
    paragraphs: [
      "Incontinência urinária caracteriza-se por qualquer perda involuntária de urina e afeta mais de 50% das mulheres idosas. A incontinência urinária de esforço é aquela perda urinária em momentos de aumento da pressão abdominal, como na tosse, no espirro, na gargalhada ou durante a prática de exercícios físicos. O tratamento fisioterapêutico visa reeducar a musculatura do assoalho pélvico através de recursos específicos, como exercícios (cinesioterapia), eletroestimulação, biofeedback, entre outros, além de orientar sobre mudanças nos hábitos diários e incentivar a adoção de um estilo de vida mais saudável.",
    ],
  },
  {
    title: "Incontinência Urinária de Urgência",
    familia: "Perdas urinárias",
    paragraphs: [
      "A incontinência urinária de urgência caracteriza-se pela perda involuntária de urina acompanhada de um desejo súbito e incontrolável de urinar. A urgência geralmente é resultado de uma hiperatividade do músculo detrusor (músculo da bexiga). Essa situação normalmente é acompanhada pelo aumento da frequência miccional. O tratamento fisioterapêutico visa reeducar a musculatura do assoalho pélvico através de recursos específicos, como exercícios (cinesioterapia), eletroestimulação, biofeedback, entre outros, além de orientar sobre mudanças nos hábitos diários e incentivar a adoção de um estilo de vida mais saudável.",
    ],
  },
  {
    title: "Incontinência Urinária Mista",
    familia: "Perdas urinárias",
    paragraphs: [
      "São as perdas involuntárias de urina que envolvem a combinação dos dois tipos: urgência e esforço. Os sintomas podem ser variados e incluem a perda de urina ao tossir ou espirrar (incontinência de esforço) e também a urgência urinária com perda de urina antes de chegar ao banheiro (incontinência de urgência). O tratamento fisioterapêutico visa reeducar a musculatura do assoalho pélvico através de recursos específicos, como exercícios (cinesioterapia), eletroestimulação, biofeedback, entre outros, além de orientar sobre mudanças nos hábitos diários e incentivar a adoção de um estilo de vida mais saudável.",
    ],
  },
  {
    title: "Prolapsos de Órgãos Pélvicos (“Bexiga caída”)",
    familia: "Sustentação dos órgãos",
    paragraphs: [
      "Os prolapsos consistem em uma saliência ou protrusão dos órgãos pélvicos (a bexiga, o útero ou o reto) para dentro da vagina, ou seja, esses órgãos perdem a sua sustentação e acabam mudando para uma posição diferente da original. Isso pode ocorrer por conta do envelhecimento, fraqueza dos músculos do assoalho pélvico, gestação, parto, obesidade, tabagismo, tosse crônica, atividades de alto impacto e até mesmo por fatores genéticos. Nesses casos, a Fisioterapia consiste num tratamento conservador e atua reeducando e fortalecendo os músculos do assoalho pélvico com o objetivo de melhorar o suporte oferecido a esses órgãos, evitando que o quadro piore.",
    ],
  },
  {
    title: "Bexiga Hiperativa / Hiperatividade do Detrusor",
    familia: "Funcionamento da bexiga",
    paragraphs: [
      "É uma condição que está ligada ao surgimento da necessidade súbita e urgente de urinar e também a um aumento da frequência urinária ao longo do dia e durante a noite. Em muitos casos, está associada à incontinência urinária. A Fisioterapia utiliza recursos para tentar normalizar o funcionamento da bexiga, reeducar os músculos do assoalho pélvico e melhorar os hábitos diários que possam intensificar os sintomas.",
    ],
  },
  {
    title: "Incontinência Pós-Prostatectomia",
    familia: "Perdas urinárias",
    paragraphs: [
      "Pessoas que passam por procedimentos cirúrgicos envolvendo a retirada da próstata (por exemplo, no tratamento do câncer de próstata ou hiperplasia prostática benigna), podem apresentar sintomas após o procedimento, como é o caso da perda involuntária de urina. Nesses casos, o paciente passa por uma avaliação detalhada e a Fisioterapia visará reeducar a musculatura do assoalho pélvico através de recursos específicos, como exercícios (cinesioterapia), eletroestimulação, biofeedback, entre outros, além de orientar sobre mudanças nos hábitos diários e incentivar a adoção de um estilo de vida mais saudável.",
    ],
  },
  {
    title: "Síndrome da Bexiga Dolorosa / Cistite Intersticial",
    familia: "Funcionamento da bexiga",
    paragraphs: [
      "É uma inflamação crônica da parede da bexiga que leva a dor pélvica, urgência miccional, aumento da frequência urinária e noctúria, na ausência de outras causas identificáveis. Alguns dos fatores desencadeantes podem ser o stresse, hábitos alimentares (bebidas alcoólicas, bebidas e alimentos contendo cafeína, alimentos apimentados ou cítricos, refrigerantes, soja), cigarro e relações sexuais. O tratamento demanda bastante disciplina e paciência e é sempre multidisciplinar, com Fisioterapia, psicoterapia, prática de exercícios físicos e medicamentos. A Fisioterapia utiliza diversas técnicas para alívio da dor, além de exercícios e orientações.",
    ],
  },
  {
    title: "Vaginismo",
    familia: "Dor e função sexual",
    paragraphs: [
      "O vaginismo é uma disfunção sexual na mulher que ocasiona dor na penetração vaginal. Trata-se de uma contração involuntária dos músculos do assoalho pélvico ao tentar a penetração vaginal, por exemplo, com o pênis, o dedo, o tampão ou o espéculo. Sua intensidade pode variar de ligeira, tolerando algum tipo de penetração, a grave, impossibilitando qualquer penetração. A contração dos músculos do assoalho pélvico acontece como um ciclo: a dor na relação gera mais contração, que gera mais dor e mais recusa em ter a relação. Em muitos casos, só de imaginar em ter relação sexual, a mulher pode contrair a musculatura e sentir dor. Por isso, a avaliação e o tratamento por uma equipe multidisciplinar são de extrema importância. O tratamento envolve, geralmente, o ginecologista especializado em sexualidade, o psicólogo e o fisioterapeuta especialista. Alguns dos recursos de fisioterapia são técnicas de terapia manual, dessensibilização associada ao uso de dilatadores, respiração diafragmática, exercícios para o assoalho pélvico, diferentes modalidades de estimulação elétrica e termoterapia.",
    ],
  },
  {
    title: "Vulvodínia",
    familia: "Dor e função sexual",
    paragraphs: [
      "É um desconforto vulvar, na maioria das vezes descrito como dor em queimação, que ocorre na ausência de achados visíveis específicos, clinicamente identificáveis ou de distúrbio neurológico. É uma dor vulvar com pelo menos 3 meses de duração, sem uma causa identificável. O diagnóstico é difícil e deve ser feito através da exclusão de outros distúrbios. A dor pode ser generalizada ou em um local mais específico da vulva e pode ser provocada (ao toque, por exemplo) ou espontânea. Apesar de não possuir uma causa definida, pode estar associada a infecções urinárias ou vaginais de repetição, traumas na região genital, genética ou alergias. O tratamento é multidisciplinar, com médico ginecologista, nutricionista, psicólogo e fisioterapeuta. A Fisioterapia utiliza os recursos físicos para aliviar a dor e dessensibilizar a região, evitando recidivas, além de orientações.",
    ],
  },
  {
    title: "Flatos Vaginais / Flacidez Vaginal",
    familia: "Sustentação dos órgãos",
    paragraphs: [
      "Os flatos vaginais são caracterizados pela saída de ar do canal vaginal, ocasionando um ruído semelhante a uma flatulência comum. Podem ocorrer durante a atividade sexual, mudanças de posição ou prática de atividade física. Na maioria das vezes, os flatos vaginais são um evento natural e não trazem malefícios à saúde. Porém, quando muito frequente, além de causar constrangimento, os flatos vaginais podem indicar fraqueza dos músculos do assoalho pélvico. Neste caso, é importante realizar o tratamento junto a um Fisioterapeuta Pélvico, não só para tratar os flatos vaginais, mas também para prevenir outras complicações, como incontinência urinária e prolapso dos órgãos pélvicos. O tratamento visa, principalmente, o fortalecimento dos músculos do assoalho pélvico através dos exercícios de kegel, eletroterapia, biofeedback e cones vaginais.",
    ],
  },
  {
    title: "Incontinência Anal (fezes ou flatos)",
    familia: "Intestino e outros",
    paragraphs: [
      "A incontinência anal é uma condição em que uma pessoa não consegue controlar a eliminação de gases e/ou fezes pelo ânus. A incontinência fecal, por sua vez, é uma forma específica de incontinência anal que se refere à incapacidade de controlar a eliminação de fezes, independentemente de sua consistência. Existem várias causas possíveis para a incontinência anal, incluindo fraqueza dos músculos do esfíncter anal, lesões neurológicas, cirurgias, doenças intestinais, entre outras. É uma condição que pode causar desconforto e constrangimento significativos, sendo necessário um tratamento específico que pode incluir exercícios para fortalecer os músculos do assoalho pélvico, eletroterapia, biofeedback anorretal e terapia comportamental.",
    ],
  },
  {
    title: "Constipação Intestinal / Anismo",
    familia: "Intestino e outros",
    paragraphs: [
      "A constipação intestinal, também conhecida como \"prisão de ventre\", é uma condição em que ocorre dificuldade em evacuar regularmente, com fezes duras e evacuações infrequentes. A constipação intestinal pode ser acompanhada de sintomas, como esforço excessivo para evacuar, sensação de evacuação incompleta, desconforto abdominal e, em alguns casos, dor. A longo prazo, pode causar danos e enfraquecimento dos músculos do assoalho pélvico.",
      "Anismo é uma condição em que os músculos do assoalho pélvico não relaxam adequadamente durante uma evacuação, tornando difícil ou impossível a passagem das fezes. Isso pode levar a problemas de constipação crônica.",
      "Se alguém sofre de constipação crônica ou persistente, é importante procurar um profissional especializado para avaliação e tratamento adequado, a fim de evitar complicações e melhorar a qualidade de vida. O tratamento inclui treino de coordenação e relaxamento dos músculos do assoalho pélvico, além de mudanças comportamentais.",
    ],
  },
  {
    title: "Dor Pélvica Crônica / Endometriose",
    familia: "Dor e função sexual",
    paragraphs: [
      "A Dor Pélvica Crônica é uma dor persistente na região inferior do abdômen ou da pelve, com duração de pelo menos seis meses e que interfere nas atividades do dia a dia. A causa da Dor Pélvica Crônica não é bem definida, podendo incluir problemas ginecológicos, como a endometriose, problemas gastrintestinais, urinários, musculoesquelético, neurológico e até mesmo psicológico. A fisioterapia pélvica atua no reequilíbrio do sistema musculoesquelético global, envolvendo músculos posturais, e na função dos músculos e órgãos pélvicos, auxiliando na redução da dor.",
    ],
  },
  {
    title: "Dismenorréia / Cólica menstrual",
    familia: "Dor e função sexual",
    paragraphs: [
      "É a dor pélvica associada à menstruação (cólica menstrual) comum na adolescência e pode vir acompanhada de outras manifestações como lombalgia, fadiga, náuseas, dor de cabeça, entre outros. A fisioterapia pélvica irá atuar no alívio e controle da dor por meio de recursos eletroterapêuticos e de um programa de exercícios direcionado. A acupuntura é outro ótimo recurso para a melhora da dor.",
    ],
  },
  {
    title: "Redesignação sexual",
    familia: "Intestino e outros",
    paragraphs: [
      "Pessoas transgênero que passam pela cirurgia de redesignação sexual podem ser atendidas pela Fisioterapia Pélvica com o objetivo de reeducar ou recuperar as funções de toda a região pélvica. Utilizamos técnicas direcionadas ao tratamento das disfunções do assoalho pélvico, para adequação da musculatura pélvica à sua nova inserção e à nova função, orientações e exercícios para manutenção do canal vaginal, além de promover o incremento funcional e/ou minimizar as queixas relacionadas às consequências do pós-operatório.",
    ],
  },
];

// Ordem das famílias no índice de navegação (F5.3). O agrupamento existe SÓ no
// índice: no corpo as 17 condições continuam numa sequência plana, cada uma com
// seu próprio <h3>. Agrupar no corpo exigiria um heading de família e rebaixaria
// as condições de <h3> para <h4>, divergindo da spec (docs/seo-landing-pages/
// template.md manda <h2> na seção e <h3> por condição) e enfraquecendo 17
// headings em SEO. O índice é navegação, não conteúdo — por isso pode agrupar.
const FAMILIAS = [
  "Gestação e pós-parto",
  "Perdas urinárias",
  "Funcionamento da bexiga",
  "Sustentação dos órgãos",
  "Dor e função sexual",
  "Intestino e outros",
];

// Rótulo curto SÓ no índice. Quatro itens seguidos começavam com "Incontinência
// Urinária de…" e quebravam em duas linhas cada; sob a família "Perdas
// urinárias" o contexto já está dado e "De esforço" basta. O <h3> de cada bloco
// no corpo continua com o nome clínico completo e o texto não muda — isto é
// rótulo de navegação, não conteúdo.
const ROTULO_CURTO = {
  "Gestação e Pós-Parto": "Gestação e pós-parto",
  "Diástase Abdominal": "Diástase abdominal",
  "Incontinência Urinária de Esforço": "De esforço",
  "Incontinência Urinária de Urgência": "De urgência",
  "Incontinência Urinária Mista": "Mista",
  "Incontinência Pós-Prostatectomia": "Pós-prostatectomia",
  "Bexiga Hiperativa / Hiperatividade do Detrusor": "Bexiga hiperativa",
  "Síndrome da Bexiga Dolorosa / Cistite Intersticial": "Bexiga dolorosa",
  "Prolapsos de Órgãos Pélvicos (“Bexiga caída”)": "Prolapsos",
  "Flatos Vaginais / Flacidez Vaginal": "Flatos e flacidez",
  Vaginismo: "Vaginismo",
  Vulvodínia: "Vulvodínia",
  "Dor Pélvica Crônica / Endometriose": "Dor crônica e endometriose",
  "Dismenorréia / Cólica menstrual": "Cólica menstrual",
  "Incontinência Anal (fezes ou flatos)": "Incontinência anal",
  "Constipação Intestinal / Anismo": "Constipação e anismo",
  "Redesignação sexual": "Redesignação sexual",
};

const INDICE = FAMILIAS.map((familia) => ({
  familia,
  condicoes: CONDICOES.filter((condicao) => condicao.familia === familia),
}));

// O destaque do item ativo do índice mora em styles.css, com um seletor por
// condição. Tentei gerar essas regras aqui a partir de CONDICOES e injetá-las
// num <style> — parecia melhor, porque tira 17 slugs escritos à mão. Não dá:
// o <style> renderizado pelo React quebra a hidratação (erros #418/#425), o
// React descarta o HTML do servidor e recria os nós, e aí o `:target` do
// navegador — que aponta para o nó ORIGINAL — deixa de casar. Resultado
// medido: abrir /fisioterapia-pelvica#vaginismo direto mostrava a primeira
// condição em vez de Vaginismo. Com o CSS estático a hidratação fica limpa e o
// `:target` sobrevive. Não reintroduza a geração em runtime.

// FAQ PROVISÓRIA — as 6 perguntas/respostas ainda não foram entregues pela
// cliente (subtask DEP s-f48de7337a, bloqueada). Os temas abaixo vêm de
// docs/seo-landing-pages/dados-por-pagina.md; o texto de pergunta/resposta é
// um provisório razoável para não travar a publicação da página, e deve ser
// substituído pelo texto real assim que a cliente entregar.
const FAQS = [
  {
    pergunta: "O que é fisioterapia pélvica e para quem ela é indicada?",
    resposta:
      "É a área da fisioterapia que cuida do assoalho pélvico. É indicada para quem apresenta escape de urina ao tossir ou se exercitar, dor na relação sexual, diástase abdominal, sensação de peso ou bola na vagina, intestino preso ou dores pélvicas sem explicação — além de gestantes e mulheres no pós-parto.",
  },
  {
    pergunta:
      "Quais sinais indicam que uma avaliação de fisioterapia pélvica é necessária?",
    resposta:
      "Escape de urina ao tossir, rir ou treinar, dor durante a relação sexual, sensação de peso ou bola na vagina (prolapso), intestino preso e dores pélvicas persistentes são os principais sinais. Se algum desses sintomas está presente, o ideal é passar por uma avaliação detalhada antes de qualquer tratamento.",
  },
  {
    pergunta: "Como funciona a primeira consulta/avaliação?",
    resposta:
      "A avaliação é o momento mais importante do tratamento: entrevista inicial, exame físico e entendimento completo do seu caso antes de propor qualquer conduta. Ao final, você recebe um Plano de Tratamento personalizado, com exercícios específicos, terapias manuais e recursos como biofeedback e eletroestimulação.",
  },
  {
    pergunta: "Quantas sessões são necessárias e qual a duração do tratamento?",
    resposta:
      "Varia de acordo com o diagnóstico de cada paciente. Depois da avaliação inicial, a fisioterapeuta estima a duração do tratamento e a frequência das sessões mais adequadas ao seu caso, reajustando o plano conforme sua evolução.",
  },
  {
    pergunta: "A fisioterapia pélvica atende gestantes e mulheres no pós-parto?",
    resposta:
      "Sim. Durante a gestação, o trabalho ajuda a prevenir dores na coluna, diástase abdominal e incontinência urinária, além de preparar o corpo para o parto normal. No pós-parto, favorece a recuperação do assoalho pélvico e da musculatura abdominal.",
  },
  {
    pergunta:
      "Onde fica a clínica e como agendar uma avaliação de fisioterapia pélvica perto de mim, no Brooklin, São Paulo?",
    resposta:
      "A PELVIE fica na Rua James Watt, 142, Sala 42, no Brooklin, São Paulo/SP. O agendamento é feito pelo WhatsApp — é só clicar em um dos botões desta página para conversar com a nossa equipe.",
  },
];

const FisioterapiaPelvica = () => {
  return (
    <>
      <Head>
        <title>Fisioterapia Pélvica no Brooklin, São Paulo | PELVIE</title>
        <meta
          name="description"
          content="Tratamento de incontinência urinária, diástase abdominal, vaginismo e endometriose. Fisioterapia pélvica no Brooklin, São Paulo. Agende sua avaliação."
        />
        <link
          rel="canonical"
          href="https://www.pelviefisioterapia.com.br/fisioterapia-pelvica"
        />
      </Head>
      <MedicalBusinessSchema />
      <FaqPageSchema faqs={FAQS} />

      <Hero
        titleTextBe="Fisioterapia Pélvica"
        titleSpan="em São Paulo"
        pText="O que é fisioterapia pélvica? É a área da fisioterapia que cuida do assoalho pélvico. Quando esses músculos perdem força ou coordenação, o corpo avisa: escape de urina ao tossir, rir ou treinar (incontinência urinária), dor na relação sexual, a barriga que não volta depois da gestação (diástase abdominal), sensação de peso ou de bola na vagina (prolapso), intestino preso e dores pélvicas que ninguém consegue explicar. A fisioterapia pélvica também prepara o corpo para o parto e organiza a recuperação no pós-parto. O tratamento é individual e tudo começa com uma avaliação detalhada. São utilizados exercícios específicos, terapias manuais e recursos como biofeedback e eletroestimulação. O tratamento é conduzido por fisioterapeutas especializadas na área. A avaliação é o momento mais importante pois é quando entenderemos o seu caso antes de propor qualquer conduta. Após a avaliação, você recebe seu Plano de Tratamento personalizado."
        imgBg={heroImg}
        bgClass="bgHeroOverlay"
      >
        <a href={WHATSAPP_HREF} className="ctaBtnZap heroCta" target="noreferrer">
          Agendar avaliação pelo WhatsApp
          <img
            src={whatsappBranco}
            alt="logo do whatsapp"
            width="20"
            height="20"
            loading="lazy"
          />
        </a>
      </Hero>

      <Container mainClass="fisioContent">
        <BoxAnimation animation="opacity">
          <h2>Condições tratadas pela fisioterapia pélvica</h2>
        </BoxAnimation>
        <div className="fisioLayout">
          {/* Índice de navegação: só HTML + CSS (href="#id" e position: sticky).
              Nenhum conteúdo fica escondido atrás dele — as 17 condições seguem
              inteiras logo ao lado, sempre visíveis. */}
          <nav className="fisioIndice" aria-label="Índice das condições tratadas">
            <p className="fisioIndiceTitulo">Ir direto para</p>
            <div className="fisioIndiceGrupos">
              {INDICE.map((grupo) => (
                <div className="fisioIndiceGrupo" key={grupo.familia}>
                  <p className="fisioIndiceFamilia">{grupo.familia}</p>
                  <ul>
                    {grupo.condicoes.map((condicao) => (
                      <li key={condicao.title}>
                        <a href={`#${slugAncora(condicao.title)}`}>
                          {ROTULO_CURTO[condicao.title] ?? condicao.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          <div className="fisioCondicoes">
            {CONDICOES.map((condicao) => (
              <BoxAnimation animation="opacity" key={condicao.title}>
                <div
                  className="fisioCondicao"
                  id={slugAncora(condicao.title)}
                >
                  <h3>{condicao.title}</h3>
                  {condicao.paragraphs.map((paragrafo, indice) =>
                    indice === 0 ? (
                      <LeadParagraph key={paragrafo.slice(0, 40)}>
                        {paragrafo}
                      </LeadParagraph>
                    ) : (
                      <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
                    )
                  )}
                </div>
              </BoxAnimation>
            ))}
          </div>
        </div>

        <CtaAcc
          aText="Agendar Fisioterapia Pélvica"
          href={WHATSAPP_HREF}
          img={whatsappGreen}
        />
      </Container>

      <Container mainClass="comoFuncionaResumo">
        <BoxAnimation animation="opacity">
          <h2>Como funciona o atendimento</h2>
          <p>
            O atendimento começa com uma avaliação detalhada, feita por uma
            fisioterapeuta especializada em saúde pélvica. Nessa consulta
            inicial, entendemos sua queixa, sua história e realizamos um exame
            físico completo antes de propor qualquer conduta. A partir disso,
            você recebe um Plano de Tratamento individual, com exercícios
            específicos, terapias manuais e recursos como biofeedback e
            eletroestimulação, ajustado conforme sua evolução ao longo das
            sessões. Agendamentos de 90 minutos garantem tempo suficiente para
            um atendimento cuidadoso e resolutivo, do início ao fim do
            tratamento.
          </p>
          <NavLink to="/ComoFunciona" className="ctaBtn2">
            Veja como funciona o atendimento
          </NavLink>
        </BoxAnimation>
      </Container>

      <LocationBlock>
        Rua James Watt, 142, Sala 42 — Brooklin, São Paulo/SP — CEP 04576-050
      </LocationBlock>

      <Container mainClass="ctaLocalizacao">
        <CtaAcc
          aText="Agendar avaliação pelo WhatsApp"
          href={WHATSAPP_HREF}
          img={whatsappGreen}
        />
      </Container>

      <Container sectionClass="bgOurTeam" mainClass="ourTeam" id="equipe">
        <span className="spanLabelLeaked">
          Atendimento empático e escuta ativa
        </span>
        <h2>Conheça nossa equipe</h2>
        <div className="ourTeamCards ourTeamCardsLanding">
          <BoxAnimation animation="top">
            <SpecCard
              h3="Juliana de Sá"
              img={juliana}
              p="Fisioterapeuta especializada em Saúde da Mulher e Instrutora do Método Pilates"
              span="CREFITO-3/226407-F"
              id="DraJuliana"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <SpecCard
              h3="Laura Noronha"
              img={laura}
              p="Fisioterapeuta especializada em Saúde da Mulher e Terapia do Movimento"
              span="CREFITO-3/309697-F"
              id="DraLaura"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <SpecCard
              h3="Leila Cristina"
              img={leila}
              p="Fisioterapeuta especializada em Saúde da Mulher"
              span="CREFITO-3/322756-F"
              id="DraLeila"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <SpecCard
              h3="Cibele Ferrari"
              img={cibele}
              p="Fisioterapeuta Acupunturista especializada em Saúde da Mulher e Gestantes"
              span="CREFITO-3/111858-F"
              id="DraCibele"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <SpecCard
              h3="Thipphane Yuka"
              img={thipphane}
              p="Fisioterapeuta e Massoterapeuta"
              span="CREFITO-3/439481-F"
              id="Dra. Thipphane Yuka"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <SpecCard
              h3="Isadora Savi"
              img={isadora}
              p="Fisioterapeuta especializada em Saúde Pélvica e Obstétrica"
              span="CREFITO-3/402185-F"
              id="Dra. Isadora Savi"
            />
          </BoxAnimation>
        </div>
        <NavLink to="/QuemSomos" className="ctaBtn2 fisioEquipeCta">
          Saiba mais sobre a PELVIE
        </NavLink>
      </Container>

      <Container mainClass="faqSection" id="faq">
        <span className="spanLabel">Tire suas dúvidas</span>
        <h2>Perguntas frequentes sobre fisioterapia pélvica</h2>
        {FAQS.map((faq) => (
          <BoxAnimation animation="opacity" key={faq.pergunta}>
            <div className="faqItem">
              <h3>{faq.pergunta}</h3>
              <p>{faq.resposta}</p>
            </div>
          </BoxAnimation>
        ))}
      </Container>

      <Container>
        <CtaCard googleBtn={true} url={WHATSAPP_HREF}>
          <p>Agende sua avaliação de fisioterapia pélvica!</p>
        </CtaCard>
      </Container>
    </>
  );
};

export default FisioterapiaPelvica;
