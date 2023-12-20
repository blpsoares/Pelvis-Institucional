import "./styles.css";
import Lottie from "lottie-react";
import animationData from "../../lottie/whatsapp.json";

const FixedButton = () => {
  return (
    <a className="whatsBtn" href="#">
      <Lottie animationData={animationData} />
    </a>
  );
};

export default FixedButton;
