import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Fira Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    color: ${(p) => p.theme.fontColor};
    background-color: ${(p) => p.theme.bgColor};
  }

  .container {
    margin: 0 auto;
    max-width: 1200px;
  }

  input,
  select {
    width: 100%;
    padding: 12px 20px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.primary};
    background-color: #fff;
    outline: none;
  }


  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .flex {
    display:flex;
  } 
  
  .flex-column {
    flex-direction: column;
  }
  .align-center {
    align-items:center;
  }

`;
