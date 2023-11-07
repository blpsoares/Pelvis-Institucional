/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

const Router = () => {
  return (
    <>
      <NavLink to="/" end>Página Inicial</NavLink>
      <NavLink to="fisioterapia-pelvica">Fisíoterapia Pélvica</NavLink>
      <NavLink to="acupuntura">Acupuntura</NavLink>
      <NavLink to="pilates">Pilates</NavLink>
    </>
  );
};

export default Router;
