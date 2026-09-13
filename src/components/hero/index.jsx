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
  imgBgMobile,
  bgClass = "",
  children,
}) => {
  return (
    <Container
      mainClass="hero"
      sectionClass={`bgHero ${bgClass}`}
      style={{
        // F6.4: --hero-bg-mobile só existe quando a página passa imgBgMobile;
        // o CSS troca para ela abaixo de 1001px (ver styles.css), com fallback
        // para a mesma imagem do desktop se a página não passar uma versão mobile.
        "--hero-bg": `url(${imgBg})`,
        ...(imgBgMobile ? { "--hero-bg-mobile": `url(${imgBgMobile})` } : {}),
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
