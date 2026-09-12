/* eslint-disable react/prop-types */

// Separa a primeira frase do restante do parágrafo para o "lead tipográfico"
// (F5.3). O texto NÃO é alterado: só é envolvido em um <span> para receber
// tratamento de CSS. A separação acontece na renderização (SSG), então o
// parágrafo inteiro sai no HTML servido, sem depender de JavaScript no cliente.
//
// A frase termina no primeiro ponto/interrogação/exclamação seguido de espaço e
// de uma letra maiúscula. Abreviações minúsculas ("etc.", "ex.") não disparam o
// corte porque exigem maiúscula depois; siglas entre parênteses ("(FIV)") não
// têm ponto. Se nada casar, o parágrafo é devolvido inteiro, sem lead.
const splitLead = (texto) => {
  const match = texto.match(/^(.*?[.!?])\s+(\p{Lu}[\s\S]*)$/u);

  if (!match) {
    return [texto, ""];
  }

  return [match[1], match[2]];
};

const LeadParagraph = ({ children }) => {
  const [lead, resto] = splitLead(children);

  return (
    <p>
      <span className="leadSentence">{lead}</span>
      {resto ? ` ${resto}` : null}
    </p>
  );
};

export default LeadParagraph;
