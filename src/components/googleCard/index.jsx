/* eslint-disable react/prop-types */
import stars from "../../assets/img/svgs/stars.svg";
import "./styles.css";

const GoogleCard = ({ h3, p }) => {
  return (
    <div className="googleCard">
      <img src={stars} alt="icone com 5 estrelas" width="110" height="21" />
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
};

export default GoogleCard;
