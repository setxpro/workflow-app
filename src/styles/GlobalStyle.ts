import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
    }

    body {
        font-size: calc(60% + .8vmin);
        font-family: 'Montserrat', sans-serif;
        background: ${props => props.theme.colors.background};
    }

`;