import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Carregamento from './Components/Carregamento/Loadpage.jsx'


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  color: #d7fff6;
}
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <Carregamento/>
    </>
  )
}

export default App
