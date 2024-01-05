import { BiSearchAlt2 } from "react-icons/bi";
import { FaRegSun } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";

import Logo from "../../../assets/logo.png";
import placeholder from "../../../assets/placeholder-image.png";

import { Nav, ThemeToggle } from "./NavBar.styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useThemeContext } from "../../../core/theme/ThemeContext";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppContextState } from "../../../core/interfaces/AppContextInterface";
import { Dispatch } from "redux";
import actionTypes from "../../../core/store/actionTypes";
import useAuth from "../../../core/hooks/useAuth";
import { getEmployeeByEmail } from "../../../core/api";

type ICurrentEmployee = {
  id: string;
  fullName: string;
  email: string;
  imageURL: string;
};

const NavBar = () => {
  const [currentEmployee, setCurrentEmployee] = useState<ICurrentEmployee>({
    id: "",
    fullName: "",
    email: "",
    imageURL: "",
  });
  const searchNameRef = useRef<HTMLInputElement | null>(null);
  const { tState, tDispatch } = useThemeContext();

  const filterSort = useSelector((state: IAppContextState) => state.filterSort);
  const dispatch = useDispatch<Dispatch>();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

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

  useEffect(() => {
    const fetchCurrentEmployee = async () => {
      try {
        const empDetail = await getEmployeeByEmail(user.email);
        if (empDetail) {
          for (const key in empDetail) {
            const emp = empDetail[key];
            if (emp) {
              setCurrentEmployee(() => ({
                id: emp.id,
                fullName: emp.fullName,
                email: emp.email,
                imageURL: emp.imageURL,
              }));
            }
          }
        }
      } catch (error) {
        // console.log("Error fetching employee by email");
      }
    };
    fetchCurrentEmployee();
  }, [user.email]);

  const handleInputChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    dispatch({
      type: actionTypes.SET_FILTERS,
      payload: {
        name: target.name,
        value: target.value,
      },
    });
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
        <div className="navbar-actions">
          <div
            className="user-card"
            onClick={() => navigate(`/view/${currentEmployee?.id}`)}
          >
            <img
              src={
                currentEmployee.imageURL !== ""
                  ? currentEmployee.imageURL
                  : placeholder
              }
              alt="user-image"
              className="user-card-image"
            />
            <div className="user-card-body">
              <span style={{ fontWeight: 700 }}>
                {currentEmployee.fullName}
              </span>
              <span>{currentEmployee.email}</span>
            </div>

            <TbLogout
              onClick={(e) => {
                e.stopPropagation();
                logout();
              }}
              className="logout-btn"
            />
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <ThemeToggle
              onClick={() => tDispatch({ type: "TOGGLE_DARK_LIGHT" })}
            >
              {tState.colorMode === "light" ? <BsMoonStars /> : <FaRegSun />}
            </ThemeToggle>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
