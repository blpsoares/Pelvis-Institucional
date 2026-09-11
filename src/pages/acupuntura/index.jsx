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

import heroImg from "../../assets/img/webp/bgTratamentosDesktop.webp";
import cibele from "../../assets/img/webp/cibele.webp";
import juliana from "../../assets/img/webp/juliana.webp";
import laura from "../../assets/img/webp/laura.webp";
import leila from "../../assets/img/webp/leila.webp";
import isadora from "../../assets/img/webp/isadora.webp";
import thipphane from "../../assets/img/webp/thipphane.webp";

import whatsappGreen from "../../assets/img/svgs/wppGreen.svg";
import whatsappBranco from "../../assets/img/svgs/whatsappBranco.svg";

const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma sessão de Acupuntura. Estou buscando a clínica porque…";
const WHATSAPP_HREF = `https://wa.me/+5511913112992?text=${WHATSAPP_MESSAGE}`;

// FAQ PROVISÓRIA — as 6 perguntas/respostas ainda não foram entregues pela
// cliente (subtask DEP s-f48de7337a, bloqueada). Os temas abaixo vêm de
// docs/seo-landing-pages/dados-por-pagina.md (seção 2, /acupuntura); o texto
// de pergunta/resposta é um provisório razoável para não travar a publicação
// da página (mesmo padrão adotado em F1.5/fisioterapia-pelvica), e deve ser
// substituído pelo texto real assim que a cliente entregar.
const FAQS = [
  {
    pergunta: "O que a acupuntura trata na saúde da mulher?",
    resposta:
      "Voltada à saúde da mulher, a acupuntura busca o reequilíbrio de desarmonias nas diferentes fases da vida: dores pélvicas e osteoarticulares, cólicas e irregularidades menstruais, TPM, baixa libido, incontinência urinária, alterações da menopausa, além de questões emocionais como ansiedade e síndrome do pânico.",
  },
  {
    pergunta: "Como funciona a acupuntura para fertilidade e o Protocolo de Paulus?",
    resposta:
      "A acupuntura é utilizada como recurso de estímulo à fertilidade, inclusive através do Protocolo de Paulus — um protocolo de aplicação de agulhas antes e depois da transferência embrionária em tratamentos de Fertilização In Vitro (FIV), com o objetivo de favorecer a receptividade uterina.",
  },
  {
    pergunta: "A acupuntura é segura durante a gestação?",
    resposta:
      "Sim, quando realizada por profissional especializada. Na gestação, a acupuntura ajuda a aliviar enjoos, vômitos, constipação, insônia, dores no geral e enxaqueca, além de auxiliar no preparo do corpo para o parto, favorecendo o início do trabalho de parto de forma espontânea.",
  },
  {
    pergunta: "A aplicação das agulhas dói?",
    resposta:
      "As agulhas utilizadas são estéreis, de uso único e de calibre muito fino, variando de acordo com o ponto e a função desejada. A aplicação quase não causa dor, e nenhum tipo de remédio é injetado junto com a agulha.",
  },
  {
    pergunta: "Quantas sessões são necessárias e com que frequência?",
    resposta:
      "Varia de acordo com o objetivo do tratamento e o diagnóstico de cada paciente. A escolha das técnicas e a frequência das sessões são definidas após uma avaliação detalhada, sempre de forma individualizada.",
  },
  {
    pergunta: "Quem realiza as sessões de acupuntura na PELVIE?",
    resposta:
      "As sessões são conduzidas pela Dra. Cibele Ferrari, fisioterapeuta especializada em Acupuntura, Saúde da Mulher e Gestantes (CREFITO-3/111858-F).",
  },
];

const Acupuntura = () => {
  return (
    <>
      <Head>
        <title>Acupuntura para Fertilidade e Gestação | PELVIE SP</title>
        <meta
          name="description"
          content="Acupuntura para fertilidade, gestação, ansiedade, enxaqueca e dores crônicas. Fisioterapeuta acupunturista no Brooklin, São Paulo. Agende sua sessão."
        />
        <link
          rel="canonical"
          href="https://www.pelviefisioterapia.com.br/acupuntura"
        />
      </Head>
      <MedicalBusinessSchema />
      <FaqPageSchema faqs={FAQS} />

      <Hero
        titleTextBe="Acupuntura"
        titleSpan="em São Paulo"
        pText="O que é acupuntura? É uma especialidade da Medicina Tradicional Chinesa que atua no reequilíbrio do organismo através da estimulação de pontos específicos do corpo. Quando voltada à saúde da mulher, busca o reequilíbrio de desarmonias em suas diferentes fases da vida — no período menstrual, na menopausa, na gestação, no pré e pós-parto — sempre de forma individualizada. Na PELVIE, a acupuntura também é utilizada como recurso de estímulo à fertilidade, inclusive através do Protocolo de Paulus, aplicado antes e depois da transferência embrionária em tratamentos de Fertilização In Vitro (FIV), e no preparo do corpo para o parto, favorecendo o início do trabalho de parto de forma espontânea. O tratamento é conduzido por fisioterapeuta especializada em Acupuntura, com avaliação individual antes de qualquer sessão."
        imgBg={heroImg}
      >
        <a href={WHATSAPP_HREF} className="ctaBtnZap heroCta" target="noreferrer">
          Agendar sessão pelo WhatsApp
          <img
            src={whatsappBranco}
            alt="logo do whatsapp"
            width="20"
            height="20"
            loading="lazy"
          />
        </a>
      </Hero>

      <Container mainClass="acupunturaContent">
        <BoxAnimation animation="opacity">
          <h2>Acupuntura na saúde da mulher</h2>
        </BoxAnimation>

        <BoxAnimation animation="opacity">
          <div className="acupunturaBloco">
            <h3>O que a acupuntura trata</h3>
            <p>
              É uma especialidade da Medicina Tradicional Chinesa que tem foco
              no tratamento de problemas relacionados à saúde. Quando voltada
              à saúde da mulher, busca o reequilíbrio de desarmonias em suas
              diferentes fases da vida, como no período menstrual, na
              menopausa, na gestação, no pré e pós-parto, entre outras fases
              que serão sempre cuidadas de forma individualizada. Diversas
              alterações e patologias podem ser tratadas com acupuntura como:
            </p>
            <ul>
              <li>Dores pélvicas e osteoarticulares;</li>
              <li>Cólicas/irregularidades menstruais;</li>
              <li>TPM;</li>
              <li>Baixa libido;</li>
              <li>Estímulo à fertilidade;</li>
              <li>Preparo para gestação;</li>
              <li>
                Questões emocionais, como ansiedade, depressão, síndrome do
                pânico;
              </li>
              <li>Incontinência urinária;</li>
              <li>Alterações da menopausa.</li>
            </ul>
          </div>
        </BoxAnimation>

        <BoxAnimation animation="opacity">
          <div className="acupunturaBloco">
            <h3>Estímulo à fertilidade e Protocolo de Paulus</h3>
            <p>
              A acupuntura é um importante recurso de estímulo à fertilidade,
              atuando no reequilíbrio hormonal e na melhora do fluxo sanguíneo
              da região pélvica. Na PELVIE, realizamos o Protocolo de Paulus —
              aplicado antes e depois da transferência embrionária em
              tratamentos de Fertilização In Vitro (FIV) — com o objetivo de
              favorecer a receptividade uterina e apoiar o processo de
              reprodução assistida.
            </p>
          </div>
        </BoxAnimation>

        <BoxAnimation animation="opacity">
          <div className="acupunturaBloco">
            <h3>Gestação e preparo para o parto</h3>
            <p>
              A acupuntura acompanha a mulher também na gestação, favorecendo
              o início do trabalho de parto de forma espontânea e ajudando a
              aliviar sintomas comuns desse período, como:
            </p>
            <ul>
              <li>Enjoos e vômitos;</li>
              <li>Constipação;</li>
              <li>Insônia;</li>
              <li>Dores no geral;</li>
              <li>Enxaqueca;</li>
              <li>Diabetes gestacional;</li>
              <li>
                &quot;Virar o bebê&quot; (para ficar em apresentação cefálica,
                facilitando o parto normal);
              </li>
              <li>Preparo para o parto;</li>
              <li>Alterações no pós-parto.</li>
            </ul>
          </div>
        </BoxAnimation>

        <BoxAnimation animation="opacity">
          <div className="acupunturaBloco">
            <h3>Técnicas utilizadas na sessão</h3>
            <p>
              Dentro da sessão de acupuntura, pode-se utilizar diferentes
              técnicas e instrumentos da Medicina Tradicional Chinesa e da
              Medicina Complementar:
            </p>
            <ul>
              <li>
                Agulhas: são de diferentes calibres e comprimentos, variando
                de acordo com o ponto, o paciente e a função desejada. As
                agulhas são sempre estéreis e de uso único. A aplicação quase
                não causa dor. Não é colocado nenhum tipo de remédio;
              </li>
              <li>
                Auriculoterapia: conhecida também como auriculopuntura, é uma
                técnica que utiliza pontos na orelha para tratar todo o corpo,
                como uma zona reflexa. Para realizar o estímulo, pode-se
                utilizar sementes, cristais, esferas de prata e ouro e
                agulhas próprias para aurículo. Normalmente a paciente fica
                com os pontos por um período de 5 a 7 dias;
              </li>
              <li>
                Moxabustão: conhecida como moxa, é um método que esquenta os
                pontos de acupuntura ou de uma determinada região com o uso de
                um bastão de Artemísia. O aquecimento remove bloqueios de
                energia que obstruem o seu fluxo através dos meridianos
                (canais de energia), eliminando a umidade e o frio que
                promovem disfunções no organismo;
              </li>
              <li>
                Ventosa: são cúpulas de vidro, silicone ou plástico que
                realizam uma sucção da pele, para ajudar a desfazer tensões
                musculares, promover relaxamento da fáscia muscular e levar
                mais nutrientes para a região de aplicação, através do
                aumento da circulação sanguínea;
              </li>
              <li>
                Estimulação elétrica: é um aparelho que emite uma onda
                elétrica pelas agulhas, otimizando o resultado da acupuntura;
              </li>
              <li>
                Laseracupuntura: o laser é uma terapia à base de luz que
                penetra em profundidade no corpo. A terapia à laser pode ter
                as mesmas funções de um tratamento de acupuntura, com a
                diferença que deve-se fazer um ponto de cada vez. A técnica
                não causa nenhuma dor ou desconforto, sendo um método ideal
                para crianças ou pessoas sensíveis a agulhas. Pode ser feito
                com ou sem o uso das agulhas. Além das funções clássicas, o
                laser permite também funções analgésica, regenerativa e de
                relaxante muscular;
              </li>
              <li>
                Fitoacupuntura: é uma técnica de tratamento que utiliza o
                efeito das plantas nos pontos de acupuntura. As partes das
                plantas são coladas diretamente na pele para atuarem nos
                pontos, meridianos e órgãos, gerando o equilíbrio da energia;
              </li>
              <li>
                Aromaterapia: uso dos óleos essenciais para estimular
                diferentes partes do cérebro para o tratamento de doenças
                físicas e emocionais.
              </li>
            </ul>
            <p>
              A escolha das técnicas a serem utilizadas na sessão é feita
              após avaliação detalhada da paciente.
            </p>
          </div>
        </BoxAnimation>

        <CtaAcc
          aText="Agendar Acupuntura"
          href={WHATSAPP_HREF}
          img={whatsappGreen}
        />
      </Container>

      <Container mainClass="comoFuncionaResumo">
        <BoxAnimation animation="opacity">
          <h2>Como funciona o atendimento</h2>
          <p>
            O atendimento começa com uma avaliação detalhada, feita pela Dra.
            Cibele Ferrari, fisioterapeuta especializada em Acupuntura.
            Nessa consulta inicial, entendemos sua queixa, sua história e
            definimos as técnicas mais adequadas para o seu caso antes de
            propor qualquer conduta. A partir disso, você recebe um plano de
            sessões individual, ajustado conforme sua evolução e seus
            objetivos ao longo do tratamento.
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
          aText="Agendar sessão pelo WhatsApp"
          href={WHATSAPP_HREF}
          img={whatsappGreen}
        />
      </Container>

      <Container sectionClass="bgOurTeam" mainClass="ourTeam" id="equipe">
        <span className="spanLabelLeaked">
          Atendimento empático e escuta ativa
        </span>
        <h2>Conheça nossa equipe</h2>
        <p className="acupunturaEquipeIntro">
          As sessões de acupuntura na PELVIE são conduzidas pela Dra. Cibele
          Ferrari, fisioterapeuta acupunturista especializada em Saúde da
          Mulher e Gestantes. Conheça também o restante da nossa equipe:
        </p>
        <div className="ourTeamCards">
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
        <NavLink to="/QuemSomos" className="ctaBtn2 acupunturaEquipeCta">
          Saiba mais sobre a PELVIE
        </NavLink>
      </Container>

      <Container mainClass="faqSection" id="faq">
        <span className="spanLabel">Tire suas dúvidas</span>
        <h2>Perguntas frequentes sobre acupuntura</h2>
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
          <p>Agende sua sessão de acupuntura!</p>
        </CtaCard>
      </Container>
    </>
  );
};

export default Acupuntura;
