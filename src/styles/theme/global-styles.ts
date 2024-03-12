import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text}
  }

  button {
    font-family: 'Roboto', sans-serif;;
  }
`;
