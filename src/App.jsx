import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Routes from './Components/Routes/Routes.jsx';


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  color: #d7fff6;
  background-color:#2EA5C2;
}
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <Routes/>
    </>
  )
}

export default App
