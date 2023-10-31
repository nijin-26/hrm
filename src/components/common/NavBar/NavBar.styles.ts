import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.primary};

  & > .header-container {
    justify-content: space-between;
    padding: 0 16px;
    height: 80px;
    gap: 20px;
  }

  & .search-employee-container {
    position: relative;
    flex-basis: 40%;
  }

  & .search-employee-container .search-icon {
    position: absolute;
    right: 0px;
    top: 8px;
    color: ${(props) => props.theme.primary};
  }

  & .search-employee-container input {
    width: 100%;
  }
`;
