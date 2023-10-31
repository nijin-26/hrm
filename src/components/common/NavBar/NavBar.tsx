import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../assets/logo.png";

import { Nav } from "./NavBar.styles";

const NavBar = () => {
  return (
    <Nav>
      <div className="header-container container flex align-center">
        <img src={Logo} alt="HR Management App Logo" width="40" />
        <div className="search-employee-container">
          <BiSearchAlt2 className="search-icon" fontSize={28} />
          <input
            className="search-employee-input"
            type="text"
            placeholder="Search by Name"
          />
        </div>
        <GiHamburgerMenu color="#fff" fontSize={32} />
      </div>
    </Nav>
  );
};

export default NavBar;
