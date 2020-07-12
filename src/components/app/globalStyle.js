import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        min-height: 100%;
        background-color: var(--bodyColor);
    }

    body, h1, h2, h3, h4, h5, ul, ol, li, img, p {
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style: none;
    }
    
    input, button, button:active, button:focus {
        outline: none;
        border: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

    *{
        box-sizing: border-box;
    }

    p{
        color: white;
    }
`;