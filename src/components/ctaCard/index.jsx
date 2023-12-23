/* eslint-disable react/prop-types */
import BoxAnimation from "../boxAnimation";
import "./styles.css";
const CtaCard = ({ a, animation }) => {
  return (
    <div className="ctaCard">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
        sapiente adipisci facere. Totam quos voluptates nisi a adipisci vitae.
        Totam dignissimos commodi consequuntur distinctio. Natus eum aliquid
        quia assumenda quos?
      </p>
      <BoxAnimation animation={animation}>
        <a href="#" className="ctaBtn2">
          {a}
        </a>
      </BoxAnimation>
    </div>
  );
};

export default CtaCard;
