import { BiSearchAlt2 } from "react-icons/bi";
import { FaRegSun } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import Logo from "../../../assets/logo.png";

import { Nav, ThemeToggle } from "./NavBar.styles";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "../../../core/theme/ThemeContext";
import { useAppContext } from "../../../core/store/AppContext";
import { ChangeEvent, KeyboardEvent, useEffect, useRef } from "react";
import actionTypes from "../../../core/store/actionTypes";

const NavBar = () => {
  const searchNameRef = useRef<HTMLInputElement | null>(null);
  const { tState, tDispatch } = useThemeContext();
  const { state, dispatch } = useAppContext();
  const { filterSort } = state;

  const { pathname } = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "/") {
        e.preventDefault();
        searchNameRef.current?.focus();
      } else if (e.key === "Escape") searchNameRef.current?.blur();
      else if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
        if (e.key === "l" || e.key === "L")
          tDispatch({ type: "TOGGLE_DARK_LIGHT" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleInputChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch({
      type: actionTypes.SET_FILTERS,
      payload: {
        name: target.name,
        value: target.value,
      },
    });
    dispatch({ type: actionTypes.FILTER_SORT_EMPLOYEES });
  };

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
            value={filterSort.name}
            ref={searchNameRef}
            onChange={handleInputChange}
            className="search-employee-input"
            name="name"
            type="text"
            placeholder="Search by Name"
          />
          <BiSearchAlt2 className="search-icon" fontSize={28} />
        </div>
        <ThemeToggle onClick={() => tDispatch({ type: "TOGGLE_DARK_LIGHT" })}>
          {tState.colorMode === "light" ? (
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
