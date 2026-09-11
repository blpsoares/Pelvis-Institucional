/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import "./styles.css";
import { lazy, Suspense } from "react";
const Lottie = lazy(() => import("lottie-react"));
import Loader from "../loader";
import animationData from "../../lottie/whatsapp.json";

const DEFAULT_HREF =
  "https://wa.me/+5511913112992?text=Olá! Gostaria de mais informações. Estou buscando a clínica porque…";

const FixedButton = ({ href = DEFAULT_HREF }) => {
  return (
    <a className="whatsBtn" href={href} target="noreferrer">
      <Suspense fallback={<Loader />}>
        <Lottie animationData={animationData} />
      </Suspense>
    </a>
  );
};

export default FixedButton;
