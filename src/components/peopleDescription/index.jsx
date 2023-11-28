import React from "react";
import "./styles.css";
import Animation from "../boxAnimation";

const PeopleDescription = ({
  foto,
  alt,
  hUm,
  hDois,
  spanHDois,
  span,
  content,
  isList,
  children,
  reverse,
  animationUm,
  animationD,
}) => {
  const renderContent = () => {
    if (isList) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return content.map((item, index) => <p key={index}>{item}</p>);
    }
  };

  return (
    <div className={`peopleDescription ${reverse ? "reverse" : ""}`}>
      <Animation animation={animationUm}>
        <div className="peopleDescriptionImg">
          <img src={foto} width="300" height="367" alt={alt} loading="lazy" />
          {hDois && <h2>{hDois}</h2>}
          {spanHDois && <span>{spanHDois}</span>}
        </div>
      </Animation>
      <Animation animation={animationD}>
        <div className="pDescription">
          <h1>{hUm}</h1>
          <span>{span}</span>
          {renderContent()}
          {children}
        </div>
      </Animation>
    </div>
  );
};

export default PeopleDescription;
