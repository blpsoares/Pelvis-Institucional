/* eslint-disable react/prop-types */
// import React from 'react'
import "./styles.css";

const CardHome = ({ img, h3, p }) => {
  return (
    <div className="card">
      <img src={img} alt="icone de uma pessoa" width="40" height="40" />
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
};

export default CardHome;
