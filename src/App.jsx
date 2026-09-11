import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ClientOnly } from "vite-react-ssg";
import FixedButton from "./components/fixedButton";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scrollToTop";
import ScrollToTarget from "./components/scrollToTarget";
import Loader from "./components/loader";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollToTarget />
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ClientOnly fallback={<Loader />}>{() => <FixedButton />}</ClientOnly>
    </>
  );
};

export default Layout;
