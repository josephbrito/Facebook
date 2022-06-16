import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root {
            --header:#252527;
            --bg:#18191a;
            --bg-primary:#3a3b3c;
            --blue: #2374E1;
            --color:#D6D8DC;
            --color-gray:#B8BBBF;
            --fb-color:#4267B2;
            --story-color:#303031;
        }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    

    body {
        background-color: var(--bg);
        color:var(--color);
        font-family: sans-serif;
        overflow-y: scroll;
        overflow-x: hidden;
    }
`;
