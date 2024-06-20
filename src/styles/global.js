import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
:root {
  font-family: "Playfair Display", serif;
  line-height: 1.5;
  font-weight: 400;

  color: black;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  background-color: ${(props) => props.theme.backgroundColor};
  margin: 0;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

input {
  min-width: 264px;
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  outline: none;
}

h1,
h2,
h3,
p {
  margin: 0;
}

button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  font-family: "Playfair Display", serif;
}

`;