// Âncora derivada do próprio título, para o id do bloco e o href do índice não
// poderem divergir. Roda na renderização (SSG), então os ids já saem no HTML
// servido e o `:target` funciona com JavaScript desligado.
//
// Nasceu embutida em src/pages/fisioterapiaPelvica/index.jsx (F5.3) e saiu de lá
// na F5.4, quando /acupuntura, /pilates e /massagem-e-drenagem-linfatica
// passaram a ter índice também: quatro cópias da mesma normalização é o tipo de
// duplicação que sai de sincronia em silêncio — um slug desencontrado não gera
// erro, só faz a âncora deixar de casar.
//
// Os slugs gerados aqui aparecem escritos à mão em src/index.css (as regras
// `body:has(#slug:target)` que marcam o item ativo do índice). Mudou um título,
// regenere lá também.
const slugAncora = (titulo) =>
  titulo
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default slugAncora;
