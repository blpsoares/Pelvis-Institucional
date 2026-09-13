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
import thipphane from "../../assets/img/webp/thipphane.webp";
import isadora from "../../assets/img/webp/isadora.webp";
import laura from "../../assets/img/webp/laura.webp";
import leila from "../../assets/img/webp/leila.webp";
import cibele from "../../assets/img/webp/cibele.webp";

import whatsappGreen from "../../assets/img/svgs/wppGreen.svg";
import whatsappBranco from "../../assets/img/svgs/whatsappBranco.svg";

const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma aula experimental de Pilates. Estou buscando a clínica porque…";
const WHATSAPP_HREF = `https://wa.me/+5511913112992?text=${WHATSAPP_MESSAGE}`;

// Texto-base reaproveitado de src/pages/tratamento/index.jsx (bloco "Pilates",
// hoje dentro de um Accordion) + docs/seo-landing-pages/dados-por-pagina.md
// (seção 3) — aqui desacordeonizado, sempre visível, e complementado com
// parágrafos adicionais (benefícios, indicações, primeira aula) para fechar
// as 600 palavras mínimas visíveis (R7) sem enchimento artificial.
const TOPICOS = [
  {
    title: "O que é o Método Pilates",
    paragraphs: [
      "É um método de exercícios desenvolvido por Joseph Pilates na década de 1920 que visa trabalhar a conexão entre mente e corpo, como uma unidade, de modo a melhorar a consciência corporal. Pode ser feito com equipamentos (studio) ou em solo, com o apoio de acessórios como bola de pilates, faixas elásticas e halteres. Sua prática traz diversos benefícios, como melhora da flexibilidade e da mobilidade, ganho de força muscular e alívio de dores.",
    ],
  },
  {
    title: "Pilates especializado em gestação e pós-parto",
    paragraphs: [
      "Aqui na PELVIE oferecemos aulas de Pilates conduzidas por fisioterapeuta especialista. As aulas são individuais e totalmente focadas em gestantes e mulheres no pós-parto, contribuindo para a manutenção da qualidade de vida nesse período, aliviando dores e preparando a mulher para lidar com todas as alterações corporais dessa fase. O acompanhamento também é indicado para quem está com diástase abdominal, auxiliando na reeducação da musculatura abdominal junto com o restante do corpo.",
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

// FAQ PROVISÓRIA — as 6 perguntas/respostas reais ainda não foram entregues
// pela cliente (subtask DEP s-f48de7337a, bloqueada). Os temas abaixo vêm de
// docs/seo-landing-pages/dados-por-pagina.md; o texto de pergunta/resposta é
// um provisório razoável para não travar a publicação da página, e deve ser
// substituído pelo texto real assim que a cliente entregar (mesmo padrão da
// F1.5 em /fisioterapia-pelvica).
const FAQS = [
  {
    pergunta: "O Pilates é seguro durante a gravidez?",
    resposta:
      "Sim. Quando conduzido por fisioterapeuta especialista, o Pilates é seguro em praticamente toda a gestação, com os exercícios adaptados a cada trimestre e às queixas da paciente. A avaliação inicial ajuda a identificar contraindicações específicas antes de começar.",
  },
  {
    pergunta: "Qual a diferença entre o Pilates comum e o Pilates com fisioterapeuta?",
    resposta:
      "No Pilates com fisioterapeuta, os exercícios são prescritos e conduzidos por uma profissional de saúde, que avalia sua condição física, suas queixas e o momento da gestação ou do pós-parto antes de montar o plano de aula — permitindo trabalhar também questões específicas, como diástase abdominal e assoalho pélvico.",
  },
  {
    pergunta: "O Pilates ajuda na diástase abdominal pós-parto?",
    resposta:
      "Sim. O Pilates conduzido por fisioterapeuta trabalha o fortalecimento progressivo da musculatura abdominal e do assoalho pélvico, contribuindo para a recuperação da diástase abdominal no pós-parto, sempre respeitando o tempo de cicatrização e a evolução de cada paciente.",
  },
  {
    pergunta: "Como são as aulas de Pilates na PELVIE?",
    resposta:
      "As aulas são individuais, conduzidas por fisioterapeuta especialista, e podem ser feitas em solo (mat pilates) ou com o apoio de acessórios como bola de pilates, faixas elásticas e halteres, sempre adaptados à fase da gestação ou do pós-parto de cada paciente.",
  },
  {
    pergunta: "Preciso de liberação médica para começar o Pilates?",
    resposta:
      "Recomendamos conversar com seu obstetra antes de iniciar, principalmente em gestações de risco. Na avaliação inicial com a fisioterapeuta, também levantamos seu histórico de saúde para garantir que os exercícios sejam seguros para o seu caso.",
  },
  {
    pergunta: "Quando posso começar o Pilates no pós-parto?",
    resposta:
      "O momento ideal varia conforme o tipo de parto (normal ou cesárea) e a recuperação de cada paciente. Em geral, o retorno é avaliado a partir da liberação médica; a fisioterapeuta ajusta a intensidade dos exercícios conforme sua evolução no pós-parto.",
  },
];

const Pilates = () => {
  return (
    <>
      <Head>
        <title>Pilates para Gestantes e Pós-Parto | PELVIE Brooklin SP</title>
        <meta
          name="description"
          content="Pilates conduzido por fisioterapeuta, em grupos reduzidos. Para gestantes, pós-parto e diástase abdominal. Brooklin, São Paulo. Agende sua aula experimental."
        />
        <link
          rel="canonical"
          href="https://www.pelviefisioterapia.com.br/pilates"
        />
      </Head>
      <MedicalBusinessSchema />
      <FaqPageSchema faqs={FAQS} />

      <Hero
        titleTextBe="Pilates"
        titleSpan="em São Paulo"
        pText="O que é o Pilates na PELVIE? É um método de exercícios desenvolvido por Joseph Pilates na década de 1920, que trabalha a conexão entre mente e corpo como uma unidade, melhorando a consciência corporal, a força e a mobilidade. Aqui, as aulas são conduzidas por fisioterapeuta especialista e pensadas especialmente para gestantes e mulheres no pós-parto — incluindo quem está lidando com diástase abdominal. Cada aula é individual, respeitando o momento, as queixas e os limites do corpo de cada paciente, com exercícios que aliviam dores, preparam para o parto e ajudam na recuperação depois dele."
        imgBg={heroImg}
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
          aText="Agendar aula experimental pelo WhatsApp"
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
        <NavLink to="/QuemSomos" className="ctaBtn2 pilatesEquipeCta">
          Saiba mais sobre a PELVIE
        </NavLink>
      </Container>

      <Container mainClass="faqSection" id="faq">
        <span className="spanLabel">Tire suas dúvidas</span>
        <h2>Perguntas frequentes sobre Pilates</h2>
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
          <p>Agende sua aula experimental de Pilates!</p>
        </CtaCard>
      </Container>
    </>
  );
};

export default Pilates;
