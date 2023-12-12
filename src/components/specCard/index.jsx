import "./styles.css";
import michelle from "../../assets/img/webp/michelle.png";
import arrow from "../../assets/img/svgs/whiteArrow.svg";
import { useState } from "react";

const SpecCard = () => {
  const [openCard, setOpenCard] = useState(false);

  function handleClick() {
    setOpenCard((ativo) => !ativo);
  }

  return (
    <>
      <div className="CardMain">
        <div className="specCard">
          <img src={michelle} alt="foto da dra.michelle" />
          <div
            className="descriptionCard"
            style={{ bottom: openCard ? "0px" : "-50%" }}
          >
            <h3>
              <span>Dra.</span>Michelle Villas Bôas
            </h3>
            <p>Fisioterapeuta especializada em Saúde da Mulher </p>
            <span>CREFITO-3 221316-F</span>
          </div>
          <button
            onClick={handleClick}
            style={{ rotate: openCard ? "360deg" : "180deg" }}
          >
            <img src={arrow} alt="" />
          </button>
        </div>
        {!openCard && (
          <div className="doctorName">
            <h3>
              <span>Dra. </span>Michelle Villas Bôas
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default SpecCard;
