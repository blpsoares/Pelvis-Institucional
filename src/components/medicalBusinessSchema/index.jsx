import { Head } from "vite-react-ssg";
import logo from "../../assets/img/svgs/LogoColorida.svg";
import fotoClinica from "../../assets/img/webp/heroCarrosselDesk1.webp";

const SITE_URL = "https://www.pelviefisioterapia.com.br";

// Ancoras estaveis: o mesmo bloco e emitido nas 8 paginas, entao sem @id fixo o
// Google trataria cada pagina como uma entidade diferente em vez de uma so clinica.
const CLINIC_ID = `${SITE_URL}/#clinica`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// NAP unico do projeto — fonte de verdade: docs/seo-landing-pages/dados-por-pagina.md
const clinic = {
  "@type": "MedicalBusiness",
  "@id": CLINIC_ID,
  name: "PELVIE - Fisioterapia Pélvica Funcional",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}${logo}`,
  image: `${SITE_URL}${fotoClinica}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua James Watt, 142, Sala 42 - Brooklin",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "04576-050",
    addressCountry: "BR",
  },
  // Coordenadas do embed do Google Maps ja usado em src/components/maps.
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.612182,
    longitude: -46.696897,
  },
  hasMap:
    "https://www.google.com/maps/place/PELVIE+-+Fisioterapia+P%C3%A9lvica+Funcional",
  telephone: "+5511913112992",
  email: "secretaria@pelviefisioterapia.com.br",
  sameAs: ["https://www.instagram.com/pelviefisioterapia"],
  areaServed: {
    "@type": "City",
    name: "São Paulo",
  },
  medicalSpecialty: "Physiotherapy",
  // Espelha as 4 landing pages de servico (src/routes.jsx).
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Fisioterapia Pélvica",
      url: `${SITE_URL}/fisioterapia-pelvica`,
    },
    {
      "@type": "MedicalTherapy",
      name: "Acupuntura",
      url: `${SITE_URL}/acupuntura`,
    },
    {
      "@type": "MedicalTherapy",
      name: "Pilates",
      url: `${SITE_URL}/pilates`,
    },
    {
      "@type": "MedicalTherapy",
      name: "Massagem Relaxante e Drenagem Linfática",
      url: `${SITE_URL}/massagem-e-drenagem-linfatica`,
    },
  ],
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

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "PELVIE - Fisioterapia Pélvica Funcional",
  url: `${SITE_URL}/`,
  inLanguage: "pt-BR",
  publisher: { "@id": CLINIC_ID },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [clinic, website],
};

const MedicalBusinessSchema = () => (
  <Head>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Head>
);

export default MedicalBusinessSchema;
