/* eslint-disable react/prop-types */
// AnimatedComponent.js
import { useEffect } from "react";
import "./styles.css";

const BoxAnimation = ({ animation, addClass, children }) => {
  useEffect(() => {
    const target = document.querySelectorAll("[data-anime]");

    // F6.4 (revisão): o limiar antigo (`top - innerHeight*0.6 < 120`, ou
    // seja, só revela com o topo do elemento acima de ~74% da tela) foi
    // pensado para revelar a animação um pouco ANTES do elemento chegar
    // vindo de baixo, rolando. Ele parte do pressuposto de que todo
    // elemento começa fora da tela e cruza esse limiar rolando — por
    // isso nunca tratou o caso de um elemento que já nasce visível
    // (entre 74% e 100% da tela) na carga: sem ter cruzado o limiar,
    // ficava opacity:0 para sempre, mesmo depois de rolar (o limiar
    // também governa o `else`, que tira a classe). Verificado nas
    // 8 páginas: acontecia sempre que o H2 seguinte ao hero caía nessa
    // faixa (ex.: /acupuntura, /massagem, /fisioterapia-pelvica — só a
    // /pilates escapava por coincidência, hero mais curto).
    // Corrigido para a definição direta de "está na tela": qualquer parte
    // do elemento dentro do viewport revela; nada com parte visível some
    // (o `else` derruba a classe só quando o elemento sai da tela por
    // completo, pra cima ou pra baixo). Isso cobre os dois casos pedidos:
    // nada fica invisível já visível na carga, e nada fica preso
    // invisível no meio da tela ao rolar em qualquer direção. O efeito de
    // entrada ao rolar continua existindo para quem está abaixo da dobra
    // — só passa a raso, começando quando o elemento cruza a borda de
    // baixo do viewport, em vez de ~26% antes disso.
    const animeScroll = () => {
      const viewportHeight = window.innerHeight;
      target.forEach((e) => {
        const rect = e.getBoundingClientRect();
        const inViewport = rect.bottom > 0 && rect.top < viewportHeight;
        if (inViewport) {
          e.classList.add("animate");
        } else {
          e.classList.remove("animate");
        }
      });
    };

    // Sem chamar aqui, um item que já nasce dentro da dobra (ex.: o H2
    // logo abaixo do hero curto da /pilates) ficava opacity:0 para
    // sempre até o usuário rolar a página — animeScroll só rodava no
    // evento "scroll", nunca na carga. Isso criava um vão em branco (o
    // elemento ocupa espaço no layout, só não aparece) entre o hero e o
    // próximo conteúdo visível.
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
