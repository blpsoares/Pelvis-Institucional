import "./styles.css";
import Menu from "../menu";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  function handleClick() {
    setHasInteracted(true);
    setOpenMenu((value) => !value);
  }

  return (
    <>
      <label htmlFor="menuMobile" className="labelMenu"></label>
      <input
        type="checkbox"
        checked={openMenu}
        className="btnMenu"
        onChange={handleClick}
        id="menuMobile"
      />

      <div className="hamburguerLine">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <Menu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        hasInteracted={hasInteracted}
      />
    </>
  );
};

export default Header;
