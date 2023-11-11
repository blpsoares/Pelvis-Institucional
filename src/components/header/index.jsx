import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerContent">
          <h1>LOGO</h1>
          <nav className="navMenu">
            <NavLink to="/" end>
              Página Inicial
            </NavLink>
            <NavLink to="tratamento">Tratamento</NavLink>
            <NavLink to="equipe">Equipe</NavLink>
            <NavLink to="quem-somos">Quem somos</NavLink>
          </nav>
          <div className="faleConosco">
            <a href="#">Fale Conosco</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
