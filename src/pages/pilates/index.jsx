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
import heroImgMobile from "../../assets/img/webp/bgHeroTratamentoMobile.webp";
import juliana from "../../assets/img/webp/juliana.webp";
import thipphane from "../../assets/img/webp/thipphane.webp";
import isadora from "../../assets/img/webp/isadora.webp";
import laura from "../../assets/img/webp/laura.webp";
import leila from "../../assets/img/webp/leila.webp";
import cibele from "../../assets/img/webp/cibele.webp";

import whatsappGreen from "../../assets/img/svgs/wppGreen.svg";
import whatsappBranco from "../../assets/img/svgs/whatsappBranco.svg";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma aula experimental de Pilates. Estou buscando a clínica porque…";
export const WHATSAPP_HREF = `https://wa.me/+5511913112992?text=${WHATSAPP_MESSAGE}`;

export const PRECO_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de saber os valores do Pilates.";
export const PRECO_WHATSAPP_HREF = `https://wa.me/+5511913112992?text=${PRECO_WHATSAPP_MESSAGE}`;

// Texto-base reaproveitado de src/pages/tratamento/index.jsx (bloco "Pilates",
// hoje dentro de um Accordion) + docs/seo-landing-pages/dados-por-pagina.md
// (seção 3) — aqui desacordeonizado, sempre visível, e complementado com
// parágrafos adicionais (benefícios, indicações, primeira aula) para fechar
// as 600 palavras mínimas visíveis (R7) sem enchimento artificial.
const TOPICOS = [
  {
    title: "O que é o Método Pilates",
    paragraphs: [
      "É um método de exercícios desenvolvido por Joseph Pilates na década de 1920 que visa trabalhar a conexão entre mente e corpo, como uma unidade, de modo a melhorar a consciência corporal. Pode ser feito com equipamentos (studio) ou em solo. Utiliza-se acessórios como a bola de pilates, faixas elásticas e halteres. Sua prática traz diversos benefícios, como melhora da flexibilidade e da mobilidade, ganho de força muscular e alívio de dores.",
    ],
  },
  {
    title: "Pilates especializado em gestação e pós-parto",
    paragraphs: [
      "Aqui na PELVIE oferecemos aulas de Pilates com fisioterapeuta especialista. As aulas são individuais e totalmente focadas em gestantes e mulheres no pós-parto, contribuindo para a manutenção da qualidade de vida nesse período, aliviando dores e preparando a mulher para lidar com todas as alterações corporais desse período. O acompanhamento também é indicado para quem está com diástase abdominal, auxiliando na reeducação da musculatura abdominal junto com o restante do corpo.",
    ],
  },
  {
    title: "Benefícios do Pilates para gestantes e no pós-parto",
    paragraphs: [
      "Entre os principais benefícios estão o alívio de dores lombares e pélvicas comuns na gestação, o fortalecimento da musculatura abdominal e do assoalho pélvico, a melhora da postura e do equilíbrio — que mudam bastante com o crescimento da barriga — e a preparação do corpo para o parto. No pós-parto, o Pilates ajuda na recuperação da força abdominal, no manejo da diástase e no retorno seguro e gradual à atividade física, sempre respeitando os sinais do corpo e o tempo de cada paciente.",
    ],
  },
  {
    title: "Como são as aulas de Pilates na PELVIE",
    paragraphs: [
      "As aulas acontecem em atendimento individual, com fisioterapeuta especialista acompanhando cada movimento. Podem ser feitas em solo (mat pilates) ou com o auxílio de acessórios como bola suíça, faixas elásticas e halteres, sempre adaptados à fase da gestação ou do pós-parto e às queixas específicas de cada paciente. Como o acompanhamento é feito por fisioterapeuta, também é possível associar o Pilates a outras condutas de fisioterapia pélvica, quando necessário.",
    ],
  },
  {
    title: "O que esperar da primeira aula",
    paragraphs: [
      "Na primeira aula, a fisioterapeuta conversa sobre sua história, sua rotina e eventuais queixas — dores, diástase, incontinência, entre outras — antes de iniciar os exercícios. A partir dessa avaliação inicial, os movimentos são ajustados ao seu momento (gestação, trimestre, tipo de parto ou tempo de pós-parto) e vão evoluindo aula a aula, conforme sua condição física e sua evolução.",
    ],
  },
];

// Rótulo curto SÓ no índice. Quatro dos cinco títulos repetem "Pilates" e, numa
// coluna de 27rem, "Benefícios do Pilates para gestantes e no pós-parto"
// quebrava em três linhas. Na lista o assunto da página já está dado, então
// "Benefícios" basta. O <h3> de cada bloco no corpo continua com o título
// completo e o texto não muda — isto é rótulo de navegação, não conteúdo.
const ROTULO_CURTO = {
  "O que é o Método Pilates": "O que é o Método",
  "Pilates especializado em gestação e pós-parto": "Gestação e pós-parto",
  "Benefícios do Pilates para gestantes e no pós-parto": "Benefícios",
  "Como são as aulas de Pilates na PELVIE": "Como são as aulas",
  "O que esperar da primeira aula": "A primeira aula",
};

// SEM agrupamento por família, ao contrário da /fisioterapia-pelvica: lá são 17
// condições e as famílias são o que torna a lista varrível. Cinco itens não têm
// o que agrupar — um rótulo de família por item viraria ruído.

// FAQ OFICIAL da cliente (anexo PELVIE — Perguntas Frequentes, 11/09/2026).
// Rótulo curto SÓ para o índice de perguntas (proposta B, aprovada pelo
// usuário). O <h3> de cada pergunta no corpo continua com o texto completo,
// idêntico ao anexo; isto é navegação, não conteúdo.
const ROTULO_CURTO_FAQ = {
  "As aulas de Pilates são individuais ou em grupo?":
    "Individual ou em grupo?",
  "Posso fazer Pilates grávida?": "Posso fazer grávida?",
  "Quando posso voltar ao Pilates depois do parto?":
    "Quando voltar após o parto?",
  "O Pilates ajuda na diástase abdominal?": "Ajuda na diástase?",
  "Nunca fiz Pilates e estou sem preparo físico. Posso começar?":
    "Nunca fiz pilates?",
  "Quanto custa a aula de Pilates e qual a frequência recomendada?":
    "Quanto custa?",
};

// Texto literal, palavra por palavra — não editar sem novo anexo da cliente.
// O mesmo array alimenta o h3/p visível e o JSON-LD do FaqPageSchema (R17: o
// texto do schema precisa ser idêntico ao renderizado).
const FAQS = [
  {
    pergunta: "As aulas de Pilates são individuais ou em grupo?",
    resposta:
      "Todas as aulas de Pilates na PELVIE são individuais. Você fica sozinha na sala com a fisioterapeuta durante toda a aula, e o exercício é montado para o seu corpo naquela semana — o que muda bastante na gestação e no pós-parto. Não trabalhamos com turmas nem com aulas em grupo reduzido.",
  },
  {
    pergunta: "Posso fazer Pilates grávida?",
    resposta:
      "Sim. O Pilates na gestação é justamente o foco do nosso trabalho. Ele ajuda a aliviar e prevenir dores, manter a mobilidade, preparar o corpo para o parto e acompanhar as mudanças em cada trimestre. O Pilates pode ser realizado durante as diferentes fases da gestação, inclusive nos três trimestres, desde que a gestação esteja evoluindo bem, não existam contraindicações médicas e os exercícios sejam adaptados à fase gestacional e às necessidades de cada mulher.",
  },
  {
    pergunta: "Quando posso voltar ao Pilates depois do parto?",
    resposta:
      "Em geral, a partir da liberação do obstetra, o que costuma acontecer entre 30 e 45 dias após o parto. Antes disso, é válido começar pela fisioterapia pélvica, para que você possa ser avaliada e possamos iniciar o trabalho com foco na respiração, assoalho pélvico e parede abdominal. O retorno é sempre gradual e desenhado de acordo com seus objetivos e disponibilidade. Um detalhe importante: aqui na PELVIE, seu bebê é sempre bem-vindo. Somos um local que acolhe mães e crianças.",
  },
  {
    pergunta: "O Pilates ajuda na diástase abdominal?",
    resposta:
      "Ajuda, desde que os exercícios sejam escolhidos com critério. Na diástase, alguns movimentos abdominais clássicos aumentam a pressão sobre a linha alba e podem piorar o quadro — por isso a aula é individual e conduzida por fisioterapeuta. O trabalho parte da respiração e da ativação do transverso do abdômen e do assoalho pélvico, e só depois progride para exercícios mais avançados. Em muitos casos, o Pilates entra combinado com a fisioterapia pélvica, dentro do mesmo plano.",
  },
  {
    pergunta: "Nunca fiz Pilates e estou sem preparo físico. Posso começar?",
    resposta:
      "Pode. A maior parte das nossas alunas chega exatamente assim — grávida ou no pós-parto, há muito tempo sem se exercitar e com receio de fazer errado. Como a aula é individual, o ponto de partida é o seu: a fisioterapeuta ajusta carga, amplitude e número de repetições à sua condição naquele dia. Não é preciso experiência anterior nem condicionamento prévio.",
  },
  {
    pergunta: "Quanto custa a aula de Pilates e qual a frequência recomendada?",
    resposta:
      "A aula é individual, dura 55 minutos e é conduzida por fisioterapeutas especializadas em saúde da mulher, com formação completa no método Pilates. A frequência mais indicada é de uma a duas aulas por semana — o suficiente para gerar adaptação sem sobrecarregar, e o que a maior parte das gestantes consegue manter até o fim da gestação. O atendimento é particular e trabalhamos com planos que se adequam à frequência das aulas e o número de meses de treinamento. Para os valores, é só chamar no WhatsApp: a nossa equipe passa todas as informações junto com os horários disponíveis.",
    precoCta: true,
  },
];

const Pilates = () => {
  return (
    <>
      <Head>
        <title>Pilates para Gestantes e Pós-Parto | PELVIE Brooklin SP</title>
        <meta
          name="description"
          content="Pilates individual com fisioterapeuta, para gestantes, pós-parto e diástase abdominal. Aula exclusiva no Brooklin, São Paulo. Agende sua aula."
        />
        <link
          rel="canonical"
          href="https://www.pelviefisioterapia.com.br/pilates"
        />
        {/* F6.2 — imagem do hero é background-image (ver src/components/hero),
            então não herda fetchpriority de <img>; preload adianta a
            descoberta pelo preload scanner, que é o gargalo medido (~4s de
            atraso na auditoria de aceite desta página).
            F6.4 — o hero mobile agora usa uma imagem retrato diferente
            (ver src/components/hero/styles.css); preload por media query
            para o navegador buscar só a imagem que o breakpoint atual vai
            realmente pintar, senão o LCP mobile piora com 2 downloads. */}
        {/* eslint-disable-next-line react/no-unknown-property -- fetchpriority (minúsculo) é o
            atributo HTML real; React 18.2 já repassa props desconhecidas em minúsculo verbatim
            para o DOM, o plugin do eslint é que ainda não conhece o atributo. */}
        <link rel="preload" as="image" fetchpriority="high" href={heroImg} media="(min-width: 1001px)" />
        {/* eslint-disable-next-line react/no-unknown-property -- ver acima */}
        <link rel="preload" as="image" fetchpriority="high" href={heroImgMobile} media="(max-width: 1000px)" />
      </Head>
      <MedicalBusinessSchema />
      <FaqPageSchema faqs={FAQS} />

      <Hero
        titleTextBe="Pilates"
        titleSpan="em São Paulo"
        pText="O que é o Pilates na PELVIE? É um método de exercícios desenvolvido por Joseph Pilates na década de 1920, que trabalha a conexão entre mente e corpo como uma unidade, melhorando a consciência corporal, a força e a mobilidade. Aqui, as aulas são conduzidas por fisioterapeuta especialista e pensadas especialmente para gestantes e mulheres no pós-parto — incluindo quem está lidando com diástase abdominal. Cada aula é individual, respeitando o momento, as queixas e os limites do corpo de cada paciente, com exercícios que aliviam dores, preparam para o parto e ajudam na recuperação depois dele."
        imgBg={heroImg}
        imgBgMobile={heroImgMobile}
        bgClass="bgHeroOverlay"
      >
        <a href={WHATSAPP_HREF} className="ctaBtnZap heroCta" target="noreferrer">
          Agendar aula experimental pelo WhatsApp
          <img
            src={whatsappBranco}
            alt="logo do whatsapp"
            width="20"
            height="20"
            loading="lazy"
          />
        </a>
      </Hero>

      <Container mainClass="pilatesContent">
        <BoxAnimation animation="opacity">
          <h2>Pilates com fisioterapeuta na PELVIE</h2>
        </BoxAnimation>
        <div className="landingLayout landingLayoutAbas">
          {/* Índice de navegação: só HTML + CSS (href="#id" + :target), sem
              JavaScript. Os cinco tópicos continuam inteiros no HTML servido.
              As regras estão em src/index.css, compartilhadas com /acupuntura e
              /massagem-e-drenagem-linfatica. */}
          <nav
            className="landingIndice"
            aria-label="Índice dos tópicos sobre Pilates"
          >
            <p className="landingIndiceTitulo">Ir direto para</p>
            <ul>
              {TOPICOS.map((topico) => (
                <li key={topico.title}>
                  <a href={`#${slugAncora(topico.title)}`}>
                    {ROTULO_CURTO[topico.title] ?? topico.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="landingBlocos">
            {TOPICOS.map((topico) => (
              <BoxAnimation animation="opacity" key={topico.title}>
                <div
                  className="pilatesTopico landingBloco"
                  id={slugAncora(topico.title)}
                >
                  <h3>{topico.title}</h3>
                  {topico.paragraphs.map((paragrafo, indice) =>
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
          aText="Agendar Pilates"
          href={WHATSAPP_HREF}
          img={whatsappGreen}
        />
      </Container>

      <Container mainClass="comoFuncionaResumo">
        <BoxAnimation animation="opacity">
          <h2>Como funciona o atendimento</h2>
          <p>
            O atendimento começa com uma conversa sobre sua rotina, sua fase
            (gestação ou pós-parto) e suas queixas, feita por uma
            fisioterapeuta especializada em saúde pélvica e instrutora do
            Método Pilates. A partir disso, os exercícios são adaptados
            individualmente e evoluem ao longo das aulas, sempre respeitando
            o seu momento. Agendamentos garantem tempo suficiente para um
            atendimento cuidadoso, do início ao fim do acompanhamento.
          </p>
          <NavLink to="/como-funciona" className="ctaBtn2">
            Veja como funciona o atendimento
          </NavLink>
        </BoxAnimation>
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
              h3="Thipphane Yuka"
              img={thipphane}
              p="Fisioterapeuta e Massoterapeuta"
              span="CREFITO-3/439481-F"
              id="DraThipphane"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <SpecCard
              h3="Isadora Savi"
              img={isadora}
              p="Fisioterapeuta especializada em Saúde Pélvica e Obstétrica"
              span="CREFITO-3/402185-F"
              id="DraIsadora"
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
        </div>
        <NavLink to="/quem-somos" className="ctaBtn2 pilatesEquipeCta">
          Saiba mais sobre a PELVIE
        </NavLink>
      </Container>

      <Container mainClass="faqSection" id="faq">
        <span className="spanLabel">Tire suas dúvidas</span>
        <h2>Perguntas frequentes</h2>
        {/* Índice da FAQ: só links âncora, sem esconder nada — as 6
            perguntas e respostas continuam inteiras e visíveis logo abaixo,
            no carregamento da página. */}
        <nav className="faqIndice" aria-label="Índice das perguntas frequentes">
          <ul>
            {FAQS.map((faq) => (
              <li key={faq.pergunta}>
                <a href={`#${slugAncora(faq.pergunta)}`}>
                  {ROTULO_CURTO_FAQ[faq.pergunta] ?? faq.pergunta}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="faqItens">
          {FAQS.map((faq) => (
            <BoxAnimation animation="opacity" key={faq.pergunta}>
              <div className="faqItem" id={slugAncora(faq.pergunta)}>
                <h3>{faq.pergunta}</h3>
                <p>{faq.resposta}</p>
                {faq.precoCta && (
                  <div className="faqPrecoCta">
                    <CtaAcc
                      aText="Consultar valores pelo WhatsApp"
                      href={PRECO_WHATSAPP_HREF}
                      img={whatsappGreen}
                    />
                  </div>
                )}
              </div>
            </BoxAnimation>
          ))}
        </div>
      </Container>

      <Container mainClass="ctaLocalizacao">
        <CtaAcc
          aText="Agendar aula experimental pelo WhatsApp"
          href={WHATSAPP_HREF}
          img={whatsappGreen}
        />
      </Container>

      <LocationBlock>
        Rua James Watt, 142, Sala 42 — Brooklin, São Paulo/SP — CEP 04576-050
      </LocationBlock>

      <Container>
        <CtaCard googleBtn={true} url={WHATSAPP_HREF}>
          <p>Agende sua aula experimental de Pilates!</p>
        </CtaCard>
      </Container>
    </>
  );
};

export default Pilates;
