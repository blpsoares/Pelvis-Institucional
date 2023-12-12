// import React from "react";
// import Container from "../../components/container";
// import Slider from "../../components/slider";
import Hero from "../../components/hero";
import bgHero from "../../assets/img/bgHeroTratamento.png";

const Tratamento = () => {
  return (
    <>
      <Hero
        spanText="Tratamento humanizado e personalizado!"
        titleTextBe="acreditamos que o"
        titleSpan="ACOLHIMENTO é tão fundamental"
        titleTextAf="quanto o tratamento em si"
        imgBg={bgHero}
        pText="Aqui na Pelvie, oferecemos um atendimento empático e com escuta ativa, onde nossos pacientes se sintam seguros e em casa, com total atenção às suas necessidades."
      />
    </>
  );
};

export default Tratamento;
