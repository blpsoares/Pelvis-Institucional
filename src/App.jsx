import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ClientOnly } from "vite-react-ssg";
import FixedButton from "./components/fixedButton";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scrollToTop";
import ScrollToTarget from "./components/scrollToTarget";
import Loader from "./components/loader";

import { WHATSAPP_HREF as FISIOTERAPIA_PELVICA_HREF } from "./pages/fisioterapiaPelvica";
import { WHATSAPP_HREF as ACUPUNTURA_HREF } from "./pages/acupuntura";
import { WHATSAPP_HREF as PILATES_HREF } from "./pages/pilates";
import { WHATSAPP_HREF as MASSAGEM_HREF } from "./pages/massagemEDrenagemLinfatica";

// Mensagem do botão fixo do WhatsApp por rota: as landing pages já definem a
// própria mensagem (usada nos CTAs de conteúdo); aqui só reaproveitamos essa
// fonte para o botão fixo, em vez de duplicar o texto. Páginas fora do mapa
// caem no DEFAULT_HREF genérico de FixedButton.
const LANDING_PAGE_WHATSAPP_HREF = {
  "/fisioterapia-pelvica": FISIOTERAPIA_PELVICA_HREF,
  "/acupuntura": ACUPUNTURA_HREF,
  "/pilates": PILATES_HREF,
  "/massagem-e-drenagem-linfatica": MASSAGEM_HREF,
};

const Layout = () => {
  const { pathname } = useLocation();
  const whatsappHref = LANDING_PAGE_WHATSAPP_HREF[pathname];

  return (
    <>
      <ScrollToTop />
      <ScrollToTarget />
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ClientOnly fallback={<Loader />}>
        {() => <FixedButton href={whatsappHref} />}
      </ClientOnly>
    </>
  );
};

export default Layout;
