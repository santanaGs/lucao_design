import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    color: ${(props) => props.theme['white']};

    font-family: "Montserrat", sans-serif;
  }
`
