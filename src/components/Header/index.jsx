import "./header.scss";
import { useState } from "react";
import button from "../../assets/nav.svg";
import logo from "../../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <img src={logo} alt="Logo" />

      <div className={`${"menu"} ${open ? "door" : ""}`} onClick={openMenu}>
        <ul>
          <li>
            <a href="">LOOKS</a>
          </li>
          <li>
            <a href="">LANÇAMENTOS</a>
          </li>
          <li>
            <a href="">NOVIDADES</a>
          </li>
        </ul>
      </div>

      <img src={button} className="btn-menu" onClick={openMenu} />
    </header>
  );
}

export default Header;