import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    color: ${(props) => props.theme['white']};

    font-family: "Montserrat", sans-serif;


    ::-webkit-scrollbar {
  width: 12px; 
}

::-webkit-scrollbar-track {
  background: ${props => props.theme.white}; 
  border-radius: 10px; 
}

::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
  }
`
