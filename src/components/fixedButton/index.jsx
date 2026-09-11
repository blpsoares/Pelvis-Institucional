/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import "./styles.css";
import { lazy, Suspense, useEffect, useState } from "react";
const Lottie = lazy(() => import("lottie-react"));
import Loader from "../loader";
import animationData from "../../lottie/whatsapp.json";

const DEFAULT_HREF =
  "https://wa.me/+5511913112992?text=Olá! Gostaria de mais informações. Estou buscando a clínica porque…";

const FixedButton = ({ href = DEFAULT_HREF }) => {
  // lottie-react/lottie-web pesa ~300KB e disputa main thread com o LCP se
  // carregado no mount. requestIdleCallback foi testado e descartado: o
  // navegador considera "ocioso" cedo demais (entre long tasks do GTM) e o
  // fetch/parse do chunk acaba colidindo com o próprio paint do LCP. Esperar
  // o evento `load` da janela garante que o carregamento inicial (LCP
  // incluso) já terminou antes de puxar o chunk pesado (R20).
  const [shouldLoadLottie, setShouldLoadLottie] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setShouldLoadLottie(true);
      return;
    }
    window.addEventListener("load", () => setShouldLoadLottie(true), {
      once: true,
    });
  }, []);

  return (
    <a className="whatsBtn" href={href} target="noreferrer">
      {shouldLoadLottie ? (
        <Suspense fallback={<Loader />}>
          <Lottie animationData={animationData} />
        </Suspense>
      ) : (
        <Loader />
      )}
    </a>
  );
};

export default FixedButton;
