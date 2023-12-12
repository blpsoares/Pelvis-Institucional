/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.css";

// const itemAccordion = [
//   {
//     title: "Pilates Especializado em Gestação e Pós-Parto",
//     paragraph: [
//       "Pilates é um método de exercícios desenvolvido por Joseph Pilates na década de 1920 que visa trabalhar a conexão entre mente e corpo, como uma unidade, de modo a melhorar a consciência corporal. Pode ser feito com equipamentos ou no solo. Sua prática traz diversos benefícios, como melhora da flexibilidade e mobilidade, ganho de força muscular e alívio de dores.",
//       "Aqui na PELVIE oferecemos aulas de pilates com fisioterapeuta especialista, totalmente focadas para gestantes e mulheres no pós parto, contribuindo para a manutenção da qualidade de vida nesse período, aliviando dores e preparando a mulher para lidar com todas as alterações corporais desse período.",
//     ],
//   },
//   {
//     title: "Texto do titulo 2",
//     paragraph: ["texto do paragrafo 2"],
//   },
//   {
//     title: "Texto do titulo 3",
//     paragraph: ["texto do paragrafo 3"],
//   },
// ];

const Accordion = ({ texts }) => {
  const [openAccordions, setOpenAccordions] = useState(
    new Array(texts.length).fill(false)
  );

  const handleAccordionClick = (index) => {
    const updatedAccordions = [...openAccordions];
    updatedAccordions[index] = !updatedAccordions[index];
    setOpenAccordions(updatedAccordions);
  };

  return (
    <>
      {texts.map((item, index) => (
        <div
          key={item.title}
          className={`accordion ${openAccordions[index] ? "open" : "closed"}`}
        >
          <div
            className="accordionHeader"
            onClick={() => handleAccordionClick(index)}
          >
            <h2>{item.title}</h2>
            <button
              className="btnAcc"
              style={{ rotate: openAccordions[index] ? "-90deg" : "90deg" }}
            ></button>
          </div>
          {openAccordions[index] && (
            <div className="accordionText">
              {item.paragraph.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion;
