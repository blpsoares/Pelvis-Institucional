import React from "react";
import Container from "../container";
import "./styles.css";

const Hero = ({
  spanText,
  titleTextBe,
  titleTextAf,
  titleSpan,
  pText,
  imgBg,
  children,
}) => {
  return (
    <Container
      mainClass="hero"
      sectionClass="bgHero"
      style={{
        backgroundImage: `url(${imgBg})`,
      }}
    >
      <div>
        <span>{spanText}</span>
        <h1>
          {titleTextBe} <span>{titleSpan}</span> {titleTextAf}
        </h1>
        <p>{pText}</p>
      </div>
      {children}
    </Container>
  );
};

export default Hero;
