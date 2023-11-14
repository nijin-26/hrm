import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 101;
  width: 100%;
  background-color: ${(props) => props.theme.primary};

  & > .header-container {
    justify-content: space-between;
    height: 80px;
    gap: 20px;
  }

  & .search-employee-container {
    position: relative;
    flex-basis: 40%;
  }

  & .search-employee-container .search-icon {
    position: absolute;
    right: -25px;
    top: 12px;
    color: ${(props) => props.theme.primary};
  }

  & .search-employee-container input {
    width: 100%;
    font-size: 18px;
  }
`;

export const ThemeToggle = styled.div`
  cursor: pointer;
`;
