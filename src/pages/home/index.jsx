import React from "react";
import Container from "../../components/container";
import Loader from "../../components/loader";
import "./styles.css";
import BoxAnimation from "../../components/boxAnimation";

const Home = () => {
  return (
    <>
      <Container sectionClass="bgHero teste">
        <BoxAnimation animation="left">
          <h1>Página Inicial</h1>
        </BoxAnimation>
      </Container>
    </>
  );
};

export default Home;
