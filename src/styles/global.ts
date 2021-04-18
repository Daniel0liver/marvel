import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgb(14 14 16);
  }

  html, body, #root {
    min-height: 100%;
  }

  button:focus, :active {
    outline:none
  }

  a {
    text-decoration: none;
  }
`;
