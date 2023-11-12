import React, { useEffect, useState } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import logoBranca from "../../assets/img/svgs/logoBranca.png";
import logoColorida from "../../assets/img/svgs/logoColorida.png";
import setaBtn from "../../assets/img/svgs/setaIconMenu.svg";

const Menu = ({ openMenu, setOpenMenu }) => {
  function closeMenu() {
    setOpenMenu(false);
  }
  return (
    <header className={`${openMenu ? "header" : "headerClosed"}`}>
      <div className="headerContent">
        <img
          className="logoColoridaDesktop"
          src={logoColorida}
          alt="logo pelvie"
          width="150"
        />

        {openMenu && (
          <div className="navigationTextMenu">
            <img src={logoBranca} alt="logo pelvie" width="150" />
            <span>Navegação</span>
            <h3>O que você deseja fazer?</h3>
          </div>
        )}
        <nav className="navMenu">
          <NavLink to="/" end onClick={closeMenu}>
            Página Inicial
          </NavLink>
          <NavLink to="tratamento" onClick={closeMenu}>
            Tratamento
          </NavLink>
          <NavLink to="equipe" onClick={closeMenu}>
            Equipe
          </NavLink>
          <NavLink to="quem-somos" onClick={closeMenu}>
            Quem somos
          </NavLink>
        </nav>

        <div className="contato">
          <a href="#">Contato</a>
        </div>
        {openMenu && (
          <div className="footerMenuMobile">
            <div className="buttonsFooterMenu">
              <a href="#">
                Fale Conosco
                <img src={setaBtn} width="20" alt="seta com fundo branco" />
              </a>
              <a href="#">
                Nossa Clínica
                <img src={setaBtn} width="20" alt="seta com fundo branco" />
              </a>
            </div>
            <div className="textFooterMenu">
              <div>
                <h3>Atendimento</h3>
                <p>Seg à Sex - 8h às 18h</p>
              </div>
              <div>
                <h3>Endereço</h3>
                <p>Rua James Watt, 142 - Sala 42 Cidade Monções, São Paulo</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Menu;
