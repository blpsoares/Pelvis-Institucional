/* eslint-disable react/prop-types */
import { Head } from "vite-react-ssg";

// Genérico: recebe a lista de perguntas/respostas já visíveis na página (R17 exige
// que o mainEntity espelhe exatamente o texto exibido, não um texto alternativo).
// Ainda sem consumidor real — pensado para as páginas de serviço (F1.5+).
const FaqPageSchema = ({ faqs }) => {
  if (!faqs?.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ pergunta, resposta }) => ({
      "@type": "Question",
      name: pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: resposta,
      },
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
};

export default FaqPageSchema;
