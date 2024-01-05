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

  .navbar-actions {
    display: flex;
    gap: 10px;
  }

  .user-card {
    height: 60px;
    width: 200px;
    padding-inline: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 8px;
    color: #fff;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      scale: 1.02;
    }

    & > .user-card-image {
      width: 42px;
      height: 42px;
      border: 1px solid #fff;
      border-radius: 50%;
    }

    .user-card-body {
      display: flex;
      flex-direction: column;
    }
    .logout-btn {
      font-size: 28px;
      cursor: pointer;
      transition: all 0.3 ease-in-out;
    }

    .logout-btn:hover {
      scale: 1.03;
      color: #ccc;
    }
  }
  @media screen and (max-width: 420px) {
    & .search-employee-container .search-icon {
      font-size: 20px;
    }
    & .search-employee-container input {
      font-size: 14px;
    }
  }
`;

export const ThemeToggle = styled.div`
  cursor: pointer;
`;
