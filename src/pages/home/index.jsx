import React from "react";
import Container from "../../components/container";
import "./styles.css";
import BoxAnimation from "../../components/boxAnimation";
import Hero from "../../components/hero";
import heartIcon from "../../assets/img/svgs/heartIcon.svg";
import starIcon from "../../assets/img/svgs/starIcon.svg";
import peopleIcon from "../../assets/img/svgs/peopleIcon.svg";
import imgteste from "../../assets/img/bghero.png";
import PeopleDescription from "../../components/peopleDescription";
import { michelle, juliana, thays } from "./texts";
import Slider from "../../components/slider";

const Home = () => {
  return (
    <>
      <Hero
        spanText="Tratamento humanizado e personalizado!"
        titleTextBe="SOMOS UMA CLÍNICA ESPECIALIZADA EM"
        titleSpan="FISIOTERAPIA PÉLVICA!"
        imgBg={imgteste}
        pText="Benefícios duradouros através de mudanças positivas no estilo de vida.
        Todas as profissionais com especialização na área de Fisioterapia
        Pélvica!"
      />

      <Container mainClass="hEscolha cardBox">
        <div className="hDescription">
          <h3>Por que escolher a Pelvie?</h3>
          <p>Temos um cuidado completo e inigualável em saúde pélvica</p>
        </div>
        <div className="hCardEscolha">
          <img src={heartIcon} width="50" alt="icone de coração" />
          <h3>Suporte completo</h3>
          <p>
            Temos várias linhas de atuação para entregar a melhor experiência!
          </p>
        </div>
        <div className="hCardEscolha">
          <img src={starIcon} width="50" alt="icone de estrela" />
          <h3>+100 avaliações</h3>
          <p>Todas as nossas avaliações no Google são 5 estrelas!</p>
        </div>
        <div className="hCardEscolha">
          <img src={peopleIcon} width="50" alt="icone de pessoa" />
          <h3>Equipe especializada</h3>
          <p>Temos uma equipe completa para ajudar na sua recuperação!</p>
        </div>
      </Container>

      <Container>
        <div className="steps cardBox">
          <BoxAnimation animation="top">
            <div className="stepsHeader">
              <span>Agendamento</span>
              <h2 className="titleCubeL">As etapas do atendimento</h2>
              <p>
                Acolhimento, empatia e segurança:
                <br /> aqui os pacientes se
                <b> sentem em casa.</b>
              </p>
            </div>
          </BoxAnimation>
          <div className="stepsCards">
            <BoxAnimation animation="left">
              <div className="cardBox">
                <h3>Agende uma avaliação</h3>
                <p>
                  O primeiro passo é <b>agendar sua avaliação</b> para que seu
                  tratamento seja determinado da maneira <b>mais efetiva</b>
                  possível!
                </p>
                <p>
                  O agendamento deverá ser feito através do WhatsApp ou ligação!
                </p>
                <a href="#" target="_blank">
                  Como funciona a avaliação?
                </a>
              </div>
            </BoxAnimation>
            <BoxAnimation animation="right">
              <div className="cardBox">
                <h3>Início das sessões</h3>
                <p>
                  Após <b>passar pela avaliação</b>, você iniciará suas sessões,
                  cuja frequência será determinada <b>em conjunto</b> com a
                  fisioterapeuta.
                </p>
                <p>
                  A frequência pode ser semanal, duas vezes por semana ou até
                  mesmo com intervalos maiores, a depender de cada caso.
                </p>
                <a href="#" target="_blank">
                  Conheça a nossa equipe!
                </a>
              </div>
            </BoxAnimation>
          </div>
          <BoxAnimation animation="top">
            <div className="stepsFooter">
              <h2 className="titleCubeL">Atendimento personalizado</h2>
              <p>
                Dispomos de uma secretária que te auxiliará em todos as etapas,
                desde o <b>agendamento</b> e <b>confirmação das sessões,</b> até
                as formas de pagamento e <b>obtenção do reembolso</b> junto ao
                plano de saúde.
              </p>

              <a href="#" className="cta">
                Reserve seu horário
              </a>
            </div>
          </BoxAnimation>
        </div>
      </Container>

      <Container>
        <PeopleDescription
          foto={michelle.foto}
          alt={michelle.alt}
          hUm={michelle.hUm}
          hDois={michelle.hDois}
          spanHDois={michelle.spanHDois}
          span={michelle.spanHDois}
          isList={false}
          content={michelle.content}
          animationUm="opacity"
          animationD="opacity"
        >
          <div className="objetivo">
            <h3>Objetivo</h3>
            <p>
              Ajudar a restaurar a função normal e fortalecer os músculos do
              assoalho pélvico. Eles desempenham um papel fundamental no suporte
              dos órgãos pélvicos, controle da micção, da defecação e na função
              sexual.
            </p>
          </div>
        </PeopleDescription>
      </Container>

      <Container sectionClass="bgReverse">
        <PeopleDescription
          foto={thays.foto}
          alt={thays.alt}
          hUm={thays.hUm}
          hDois={thays.hDois}
          spanHDois={thays.spanHDois}
          span={thays.spanHDois}
          isList={false}
          content={thays.content}
          reverse={true}
          animationUm="opacity"
          animationD="opacity"
        >
          <div className="objetivo">
            <h3>Objetivo</h3>
            <p>
              Ajudar a restaurar a função normal e fortalecer os músculos do
              assoalho pélvico. Eles desempenham um papel fundamental no suporte
              dos órgãos pélvicos, controle da micção, da defecação e na função
              sexual.
            </p>
          </div>
        </PeopleDescription>
      </Container>

      <Container>
        <PeopleDescription
          foto={juliana.foto}
          alt={juliana.alt}
          hUm={juliana.hUm}
          hDois={juliana.hDois}
          spanHDois={juliana.spanHDois}
          span={juliana.spanHDois}
          isList={false}
          content={juliana.content}
          animationUm="opacity"
          animationD="opacity"
        >
          <div className="objetivo">
            <h3>Objetivo</h3>
            <p>
              Ajudar a restaurar a função normal e fortalecer os músculos do
              assoalho pélvico. Eles desempenham um papel fundamental no suporte
              dos órgãos pélvicos, controle da micção, da defecação e na função
              sexual.
            </p>
          </div>
        </PeopleDescription>
      </Container>

      <Container>
        <h1>Ses. 7</h1>
      </Container>
      <Container>
        <h1>Ses. 8</h1>
      </Container>
      <Container>
        <h1>Ses. 9</h1>
      </Container>
      <Container>
        <h1>Footer</h1>
      </Container>
    </>
  );
};

export default Home;
