/* eslint-disable no-unused-vars */
import Container from "../../components/container";
import "./styles.css";
import HeroCarrossel from "../../components/HeroCarrossel";
import EspecialidadesCard from "../../components/EspecialidadesCard";
// import { especialidades } from "./texts.js";
import michelle from "../../assets/img/michelle.png";
// import Slider from "../../components/slider";

const Home = () => {
  return (
    <>
      <HeroCarrossel />
      <Container mainClass="especialidades">
        <EspecialidadesCard
          h3="Fisioterapia Pélvica"
          aText="Saiba Mais"
          img={michelle}
          altImg={"Foto da Dra. Michelle"}
          href={"#"}
          p={
            "Ajudar a restaurar a função normal e fortalecer os músculos do assoalho pélvico.  Eles desempenham um papel fundamental no suporte dos órgãos pélvicos, controle da micção, da defecação e na função sexual."
          }
        />
        <EspecialidadesCard
          h3="Acupuntura"
          aText="Saiba Mais"
          img={michelle}
          altImg={"Foto da Dra. Michelle"}
          href={"#"}
          p={
            "Ajudar a restaurar a função normal e fortalecer os músculos do assoalho pélvico.  Eles desempenham um papel fundamental no suporte dos órgãos pélvicos, controle da micção, da defecação e na função sexual."
          }
        />
        <EspecialidadesCard
          h3="Pilates"
          aText="Saiba Mais"
          img={michelle}
          altImg={"Foto da Dra. Michelle"}
          href={"#"}
          p={
            "Ajudar a restaurar a função normal e fortalecer os músculos do assoalho pélvico.  Eles desempenham um papel fundamental no suporte dos órgãos pélvicos, controle da micção, da defecação e na função sexual."
          }
        />
      </Container>
    </>
  );
};

export default Home;
