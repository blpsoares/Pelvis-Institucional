/* eslint-disable react/prop-types */
/* global Highlight */
import { useCallback, useEffect, useId, useRef, useState } from "react";
import "./styles.css";

// Busca em tempo real dentro do conteúdo de UMA seção da página (as condições
// tratadas, os blocos da acupuntura etc.). Só destaca e navega: nenhum texto é
// escondido, filtrado ou reordenado — o conteúdo continua inteiro na tela, como
// a cliente exige (R6) e como o Google Ads avalia a página.
//
// O destaque usa a CSS Custom Highlight API: o realce é desenhado pelo
// navegador sobre o texto, sem inserir <mark> no DOM. Assim o HTML
// pré-renderizado nunca muda e não há risco de divergência de hidratação.
// Onde a API não existe, o resultado atual é selecionado (seleção nativa).

const ALTURA_HEADER = 140;
const MINIMO = 2;

// Normaliza caractere a caractere, guardando a posição original de cada
// caractere normalizado: assim "diastase" encontra "diástase" e o realce cai
// exatamente sobre o texto original.
function normalizar(texto) {
  let saida = "";
  const origem = [];
  for (let i = 0; i < texto.length; i += 1) {
    const n = texto[i]
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase();
    for (let j = 0; j < n.length; j += 1) {
      saida += n[j];
      origem.push(i);
    }
  }
  return { saida, origem };
}

function buscar(container, termo) {
  const alvo = normalizar(termo.trim()).saida;
  if (alvo.length < MINIMO) return [];
  const resultados = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode: (no) =>
      no.nodeValue.trim() && no.parentElement?.offsetParent !== null
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT,
  });
  let no = walker.nextNode();
  while (no) {
    const { saida, origem } = normalizar(no.nodeValue);
    let pos = saida.indexOf(alvo);
    while (pos !== -1) {
      const inicio = origem[pos];
      const fim = origem[pos + alvo.length - 1] + 1;
      const range = document.createRange();
      range.setStart(no, inicio);
      range.setEnd(no, fim);
      resultados.push(range);
      pos = saida.indexOf(alvo, pos + alvo.length);
    }
    no = walker.nextNode();
  }
  return resultados;
}

const temHighlight = () =>
  typeof CSS !== "undefined" && "highlights" in CSS && typeof Highlight !== "undefined";

const BuscaConteudo = ({ alvo, placeholder = "Buscar neste conteúdo" }) => {
  const id = useId();
  const raiz = useRef(null);
  const [termo, setTermo] = useState("");
  const [resultados, setResultados] = useState([]);
  const [atual, setAtual] = useState(0);
  const [foraDoConteudo, setForaDoConteudo] = useState(false);

  const limparDestaque = () => {
    if (temHighlight()) {
      CSS.highlights.delete("busca-conteudo");
      CSS.highlights.delete("busca-conteudo-atual");
    }
  };

  const irPara = useCallback((lista, indice) => {
    const range = lista[indice];
    if (!range) return;
    if (temHighlight()) {
      CSS.highlights.set("busca-conteudo-atual", new Highlight(range));
    } else {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    const r = range.getBoundingClientRect();
    const topo = r.top + window.scrollY - ALTURA_HEADER - window.innerHeight * 0.15;
    window.scrollTo({ top: Math.max(0, topo), behavior: "smooth" });
  }, []);

  // Recalcula a cada digitação, com um respiro curto para não varrer o texto
  // a cada tecla.
  useEffect(() => {
    const container = document.querySelector(alvo);
    if (!container) return undefined;
    const t = setTimeout(() => {
      const lista = termo.trim().length >= MINIMO ? buscar(container, termo) : [];
      setResultados(lista);
      setAtual(0);
      limparDestaque();
      if (lista.length && temHighlight()) {
        CSS.highlights.set("busca-conteudo", new Highlight(...lista));
      }
      if (lista.length) irPara(lista, 0);
    }, 160);
    return () => clearTimeout(t);
  }, [termo, alvo, irPara]);

  useEffect(() => () => limparDestaque(), []);

  // No celular a busca "sai" do índice e fica presa na parte de baixo da tela
  // enquanto há busca ativa E a pessoa está dentro do conteúdo; ao sair dele,
  // volta para o lugar. No desktop isso já acontece pelo position: sticky do
  // índice, que só acompanha a rolagem dentro do próprio bloco.
  useEffect(() => {
    const container = document.querySelector(alvo);
    if (!container || typeof IntersectionObserver === "undefined") return undefined;
    const obs = new IntersectionObserver(([e]) => setForaDoConteudo(!e.isIntersecting), {
      rootMargin: "-20% 0px -20% 0px",
    });
    obs.observe(container);
    return () => obs.disconnect();
  }, [alvo]);

  const navegar = (passo) => {
    if (!resultados.length) return;
    const proximo = (atual + passo + resultados.length) % resultados.length;
    setAtual(proximo);
    irPara(resultados, proximo);
  };

  const limpar = () => {
    setTermo("");
    raiz.current?.querySelector("input")?.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navegar(e.shiftKey ? -1 : 1);
    } else if (e.key === "Escape") {
      e.preventDefault();
      limpar();
    }
  };

  const ativa = termo.trim().length >= MINIMO;
  const contador = !ativa
    ? ""
    : resultados.length
      ? `${atual + 1} de ${resultados.length}`
      : "0 de 0";

  // O slot guarda a altura da barra: quando ela vira flutuante no celular, o
  // índice não "pula" para cima (sem deslocamento de layout).
  return (
    <div className="buscaSlot">
    <div
      ref={raiz}
      className={`buscaConteudo${ativa ? " buscaAtiva" : ""}${ativa && !foraDoConteudo ? " buscaFlutuante" : ""}`}
      role="search"
    >
      <label htmlFor={id} className="buscaRotuloOculto">
        {placeholder}
      </label>
      <svg className="buscaLupa" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 3a7 7 0 1 0 4.4 12.4l4.6 4.6 1.4-1.4-4.6-4.6A7 7 0 0 0 10 3Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
      </svg>
      <input
        id={id}
        type="search"
        value={termo}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => setTermo(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {ativa && (
        <>
          <span className="buscaContador" aria-live="polite">
            {contador}
          </span>
          <button
            type="button"
            className="buscaSeta"
            aria-label="Resultado anterior"
            onClick={() => navegar(-1)}
            disabled={!resultados.length}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12 8-6 6 1.4 1.4 4.6-4.6 4.6 4.6L18 14z" />
            </svg>
          </button>
          <button
            type="button"
            className="buscaSeta"
            aria-label="Próximo resultado"
            onClick={() => navegar(1)}
            disabled={!resultados.length}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12 16 6-6-1.4-1.4-4.6 4.6-4.6-4.6L6 10z" />
            </svg>
          </button>
          <button
            type="button"
            className="buscaSeta"
            aria-label="Limpar busca"
            onClick={limpar}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z" />
            </svg>
          </button>
        </>
      )}
    </div>
    </div>
  );
};

export default BuscaConteudo;
