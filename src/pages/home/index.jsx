import React from "react";
import Container from "../../components/container";
import "./styles.css";
import BoxAnimation from "../../components/boxAnimation";

const Home = () => {
  return (
    <>
      <Container sectionClass="bgHero teste" mainClass="hero">
        <div>
          <span>Tratamento humanizado e personalizado!</span>
          <h1>
            SOMOS UMA CLÍNICA ESPECIALIZADA EM{" "}
            <span>FISIOTERAPIA PÉLVICA!</span>
          </h1>
          <p>
            Benefícios duradouros através de mudanças positivas no estilo de
            vida. Todas as profissionais com especialização na área de
            Fisioterapia Pélvica!
          </p>
        </div>
      </Container>
      <Container>
        
      </Container>
    </>
  );
};

export default Home;
