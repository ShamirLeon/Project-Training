import IconHamburguer from "../../assets/images/icon-hamburger.svg";
import IconClose from "../../assets/images/icon-close.svg";
import Logo from "../../assets/images/logo.svg";

import ToggleMenu from "./ToggleMenu";
import { useState } from "react";

function NavBar() {
  const [menu, setMenu] = useState();
  return (
    <nav className="NavBar container">
      <div className="NavBar__Div"></div>
      <a href="#">
        <img src={Logo} alt="Logo" className="NavBar__Logo" />
      </a>

      <button
        onClick={() => {
          ToggleMenu();
          setMenu(!menu);
        }}
        className="NavBar__Button"
      >
        {!menu ? <img src={IconHamburguer} /> : <img src={IconClose} />}
      </button>

      <ul className="NavBar__Menu">
        <li>
          <a href="#"> Product</a>
        </li>
        <li> <a href="#">Features</a></li>
        <li> <a href="#">Pricing</a></li>
        <div className="Menu__Spacer"></div>
        <li> <a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
