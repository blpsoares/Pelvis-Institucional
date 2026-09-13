/* eslint-disable react/prop-types */
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
  bgClass = "",
  children,
}) => {
  return (
    <Container
      mainClass="hero"
      sectionClass={`bgHero ${bgClass}`}
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
