import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f5f5f5;
  }

  html, body, #root {
    min-height: 100%;
  }

  a {
    text-decoration: none;
  }
`;
