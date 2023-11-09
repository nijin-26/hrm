import { BiSearchAlt2 } from "react-icons/bi";
import { FaRegSun } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import Logo from "../../../assets/logo.png";

import { Nav, ThemeToggle } from "./NavBar.styles";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "../../../core/theme/ThemeContext";

const NavBar = () => {
  const { state, dispatch } = useThemeContext();
  const { pathname } = useLocation();

  return (
    <Nav>
      <div className="header-container container flex align-center">
        <Link to="/">
          <img src={Logo} alt="HR Management App Logo" width="40" />
        </Link>
        <div
          className="search-employee-container"
          style={pathname !== "/" ? { visibility: "hidden" } : {}}
        >
          <input
            className="search-employee-input"
            type="text"
            placeholder="Search by Name"
          />
          <BiSearchAlt2 className="search-icon" fontSize={28} />
        </div>
        <ThemeToggle onClick={() => dispatch({ type: "TOGGLE_DARK_LIGHT" })}>
          {state.colorMode === "light" ? (
            <BsMoonStars color="#fff" fontSize={32} />
          ) : (
            <FaRegSun color="#fff" fontSize={32} />
          )}
        </ThemeToggle>
      </div>
    </Nav>
  );
};

export default NavBar;
