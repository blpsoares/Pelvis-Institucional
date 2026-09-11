/* eslint-disable react/prop-types */
import { lazy, Suspense } from "react";
import Container from "../container";
import Loader from "../loader";
import "./styles.css";

const Maps = lazy(() => import("../maps"));

const DEFAULT_ADDRESS_HREF =
  "https://www.google.com/maps?ll=-23.613567,-46.69575&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=17403131375481056319";
const DEFAULT_PHONE = "(11) 91311-2992";
const DEFAULT_PHONE_HREF = "tel:+5511913112992";

const LocationBlock = ({
  children,
  addressHref = DEFAULT_ADDRESS_HREF,
  directionsHref,
  directionsLabel = "Como chegar",
  phone = DEFAULT_PHONE,
  phoneHref = DEFAULT_PHONE_HREF,
  label = "Localização acessível",
  title = "Venha nos fazer uma visita!",
}) => {
  return (
    <Container mainClass="googleMaps">
      <span className="spanLabel">{label}</span>
      <h3>{title}</h3>
      <Suspense fallback={<Loader />}>
        <Maps />
      </Suspense>

      <div className="adressMaps">
        <div className="adressText">
          <h3>Endereço</h3>
          <a href={addressHref} target="noreferrer">
            {children}
          </a>
          <a
            href={directionsHref ?? addressHref}
            target="noreferrer"
            className="ctaBtn2"
          >
            {directionsLabel}
          </a>
        </div>
        <div className="phoneMaps">
          <h3>Telefone</h3>
          <a href={phoneHref} target="noreferrer">
            {phone}
          </a>
        </div>
      </div>
    </Container>
  );
};

export default LocationBlock;
