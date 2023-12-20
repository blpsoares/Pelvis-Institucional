/* eslint-disable react/prop-types */
import "./styles.css";

const EspecialidadesCard = ({ h3, img, altImg, p, href, aText }) => {
  return (
    <div className="especCard">
      <h3>{h3}</h3>
      <div className="boxImg">
        <a href={href}>
          <img src={img} alt={altImg} width={370} />
        </a>
      </div>
      <p>{p}</p>
      <a href={href}>{aText}</a>
    </div>
  );
};

export default EspecialidadesCard;
