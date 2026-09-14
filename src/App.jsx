import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ClientOnly } from "vite-react-ssg";
import FixedButton from "./components/fixedButton";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scrollToTop";
import ScrollToTarget from "./components/scrollToTarget";
import Loader from "./components/loader";

import LANDING_PAGE_WHATSAPP_HREF from "./utils/whatsappPorRota";

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
