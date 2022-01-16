import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //Fundo da tela
        --background: #f0f2f5;
        --green: #33cc95;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        
        //Títulos
        --text-title: #363f5f;
        //Textos
        --text-body: #969cb9;
        //Shapes: espaçamentos na tela
        --shape: #FFFFFF
    }
    
   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-widt: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialised;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h5,strong {
        font-weight: 500;
    }
    button {
        cursor: pointer;
    }
  
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
