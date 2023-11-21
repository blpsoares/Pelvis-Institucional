import React from "react";
import Container from "../../components/container";
import "./styles.css";
import BoxAnimation from "../../components/boxAnimation";
import Hero from "../../components/hero";
import heartIcon from "../../assets/img/svgs/heartIcon.svg";
import starIcon from "../../assets/img/svgs/starIcon.svg";
import peopleIcon from "../../assets/img/svgs/peopleIcon.svg";
import imgteste from "../../assets/img/webp/bgHeroTeste.webp";

const Home = () => {
  console.log(imgteste);
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
      <BoxAnimation animation="bottom">
        <Container mainClass="hEscolha">
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
      </BoxAnimation>
    </>
  );
};

export default Home;
