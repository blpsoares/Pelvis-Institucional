/* eslint-disable no-unused-vars */
import Container from "../../components/container";
import "./styles.css";
import HeroCarrossel from "../../components/HeroCarrossel";
import EspecialidadesCard from "../../components/EspecialidadesCard";
import SpecCard from "../../components/specCard";
import michelle from "../../assets/img/michelle.png";
import michele from "../../assets/img/webp/michelle.png";
import BoxAnimation from "../../components/boxAnimation";
import { NavLink } from "react-router-dom";
import React from "react";
import Loader from "../../components/loader";
import CardHome from "../../components/cardHome";
import peopleIcon from "../../assets/img/svgs/peopleIcon.svg";
const Carrossel = React.lazy(() => import("../../components/slider"));

const Home = () => {
  return (
    <>
      <HeroCarrossel />

      <Container mainClass="bgTitleCardsHome">
        <div className="cardsHomeHeader">
          <BoxAnimation animation="top">
            <div className="titleCardsHomeText">
              <h1>
                Somos uma clínica especializada em
                <br />
                <strong>reabilitação pélvica</strong>
              </h1>
              <span>Por que escolher a Clínica Pelvie?</span>
            </div>
          </BoxAnimation>
          <BoxAnimation animation="top">
            <div className="titleCardsHomeCtas">
              <NavLink to="/tratamento">Tratamentos</NavLink>
              <a href="#" target="_blank">
                Agendar sua avaliação
              </a>
            </div>
          </BoxAnimation>
        </div>
        <div className="cardsHome">
          <BoxAnimation animation="left">
            <CardHome
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
          <BoxAnimation animation="left">
            <CardHome
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
          <BoxAnimation animation="left">
            <CardHome
              img={peopleIcon}
              h3="Equipe especializada"
              p="Temos uma equipe
            completa para ajudar na sua recuperação!"
            />
          </BoxAnimation>
        </div>
      </Container>

      <Container mainClass="especialidadesMain">
        <span className="spanLabel">Uma clínica acolhedora e agradável!</span>
        <h3>Conheça nossas especialidades</h3>
        <div className="especialidades">
          <BoxAnimation animation="left">
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
          </BoxAnimation>
          <BoxAnimation animation="top">
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
          </BoxAnimation>
          <BoxAnimation animation="right">
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
          </BoxAnimation>
        </div>
      </Container>

      <Container sectionClass="bgOurTeam" mainClass="ourTeam">
        <span className="spanLabelLeaked">
          Uma clínica acolhedora e agradável!
        </span>
        <h3>Nossa equipe de especialistas</h3>
        <div className="ourTeamCards">
          <BoxAnimation animation="top">
            <SpecCard
              h3="Michelle Villas Bôas"
              img={michele}
              p="Fisioterapeuta especializada em Saúde da Mulher"
              span="CREFITO-3 221316-F"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <SpecCard
              h3="Michelle Villas Bôas"
              img={michele}
              p="Fisioterapeuta especializada em Saúde da Mulher"
              span="CREFITO-3 221316-F"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <SpecCard
              h3="Michelle Villas Bôas"
              img={michele}
              p="Fisioterapeuta especializada em Saúde da Mulher"
              span="CREFITO-3 221316-F"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <SpecCard
              h3="Michelle Villas Bôas"
              img={michele}
              p="Fisioterapeuta especializada em Saúde da Mulher"
              span="CREFITO-3 221316-F"
            />
          </BoxAnimation>
        </div>
      </Container>

      <Container sectionClass="ourSpace">
        <div className="titleCarrossel">
          <div className="titleCarrosselText">
            <span>Uma clínica acolhedora e agradável!</span>
            <h3>Por dentro do nosso espaço</h3>
          </div>
          <div className="titleCarrosselLinks">
            <NavLink to="/equipe" className="ctaBtn1">
              Mais sobre a equipe
            </NavLink>
            <a href="#" className="ctaBtn2">
              Fale com nossa equipe
            </a>
          </div>
        </div>
        <React.Suspense fallback={<Loader />}>
          <Carrossel />
        </React.Suspense>
      </Container>
    </>
  );
};

export default Home;
