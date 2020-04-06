import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body, #root {
  height: 100%;
  width: 100%;
}

html {
  scroll-behavior: smooth;
}
    
body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
  monospace;
}

p,
a,
button {
  font-family: 'Montserrat', sans-serif;
  text-align: justify;
}

a,
a:link,
a:hover,
a:visited,
a:active {
  text-decoration: none;
}

#root{
  display:flex;
  flex-direction:column;
}
`;
