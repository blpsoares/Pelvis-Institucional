import "./styles.css";
import Menu from "../menu";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleClick() {
    setOpenMenu((value) => !value);
  }

  return (
    <>
      <label for="menuMobile" className="labelMenu"></label>
      <input
        type="checkbox"
        checked={openMenu}
        className="btnMenu"
        onClick={handleClick}
        id="menuMobile"
      />

      <div className="hamburguerLine">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Header;
