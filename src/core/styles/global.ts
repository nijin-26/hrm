import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Mulish', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    color: ${(p) => p.theme.fontColor};
    background-color: ${(p) => p.theme.bgColor};
  }

  .container {
    margin: 0 auto;
    padding: 0 16px;
    max-width: 1440px;
    overflow: hidden;
  }

  input,
  select {
    /* width: 100%; */
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.primary};
    background-color: #fff;
    outline: none;
    font-family: 'Mulish', sans-serif;
    font-weight: 600;
    font-size: 15px;
  }

  label {
    font-weight: 700;
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
