import { Head } from "vite-react-ssg";

// NAP oficial — docs/seo-landing-pages/dados-por-pagina.md, seção "Dados fixos (NAP)".
// Mesmos dados em todas as páginas (R22): não receber props, para impedir divergência.
const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "PELVIE - Fisioterapia Pélvica Funcional",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua James Watt, 142, Sala 42 - Brooklin",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "04576-050",
    addressCountry: "BR",
  },
  telephone: "+5511913112992",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
};

const MedicalBusinessSchema = () => (
  <Head>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Head>
);

export default MedicalBusinessSchema;
