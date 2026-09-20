import { useEffect } from "react";

// Realça, no índice "Ir direto para", o item correspondente à seção mais
// visível na tela — só isso. Nunca mostra/esconde conteúdo (esse padrão foi
// removido do site: ver src/index.css). Roda inteiramente dentro de um
// useEffect (client-only, depois da hidratação) e altera o DOM diretamente
// via classList, sem passar por estado do React — por isso não existe
// nenhum HTML equivalente no lado do servidor e não há risco de divergência
// de hidratação. Sem JavaScript, o efeito simplesmente não roda e nenhum
// item acende; a navegação por âncora continua funcionando normalmente.
export default function useIndiceScrollSpy(sectionSelector, linkSelector) {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(sectionSelector));
    const links = Array.from(document.querySelectorAll(linkSelector));
    if (!sections.length || !links.length) return undefined;

    const linkById = new Map(
      links.map((link) => [link.getAttribute("href")?.slice(1), link])
    );

    const setActive = (id) => {
      links.forEach((link) => link.classList.remove("indiceAtivo"));
      const link = linkById.get(id);
      if (link) link.classList.add("indiceAtivo");
    };

    // Estado inicial: a primeira seção acende antes de qualquer rolagem.
    if (sections[0]?.id) setActive(sections[0].id);

    const visibleRatios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let current = null;
        let currentRatio = 0;
        visibleRatios.forEach((ratio, id) => {
          if (ratio > currentRatio) {
            current = id;
            currentRatio = ratio;
          }
        });

        if (current) setActive(current);
      },
      {
        // Considera "atual" a seção que ocupa a faixa central da tela, não
        // qualquer pixel visível — evita que o item mude assim que o topo
        // do próximo bloco só encosta no rodapé da viewport.
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionSelector, linkSelector]);
}
