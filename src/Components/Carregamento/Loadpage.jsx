import React from 'react'
import styled from 'styled-components'

//IMPORT DAS IMAGENS
import Logo from './Images/logo_core.png'

const Divisor = styled.div`
height: 100vh;
background-color:#2EA5C2;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
font-size: .6rem;
margin-bottom: 30rem;
`;

function Loadpage() {
  return (
    <Divisor>
        <img src={Logo} alt="Logo que remete a um simbolo de coração" />
        <h1>Sua saúde na palma da sua mão!</h1>
    </Divisor>
  )
}

export default Loadpage