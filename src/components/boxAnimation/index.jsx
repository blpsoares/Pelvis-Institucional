/* eslint-disable react/prop-types */
// AnimatedComponent.js
import { useEffect } from "react";
import "./styles.css";

const BoxAnimation = ({ animation, addClass, children }) => {
  useEffect(() => {
    const target = document.querySelectorAll("[data-anime]");
    const windowTop = window.innerHeight * 0.6;

    const animeScroll = () => {
      target.forEach((e) => {
        if (e.getBoundingClientRect().top - windowTop < 120) {
          e.classList.add("animate");
        } else {
          e.classList.remove("animate");
        }
      });
    };

    // F6.4: sem isso, um item que já nasce dentro da dobra (ex.: o H2 logo
    // abaixo do hero curto da /pilates) ficava opacity:0 para sempre até o
    // usuário rolar a página — animeScroll só rodava no evento "scroll",
    // nunca na carga. Isso criava um vão em branco (o elemento ocupa espaço
    // no layout, só não aparece) entre o hero e o próximo conteúdo visível.
    animeScroll();
    window.addEventListener("scroll", animeScroll);

    // Remova o listener de scroll quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", animeScroll);
    };
  }, []); // O array vazio como segundo argumento garante que o useEffect só é executado uma vez

  return (
    <span className={`boxAnimation ${addClass}`} data-anime={animation}>
      {children}
    </span>
  );
};

export default BoxAnimation;
