import React from 'react'
import styled from 'styled-components'

import PageLogin from '../Login/PageLogin.jsx'

//IMPORT DAS IMAGENS
import Logo from './Images/logo_core.png'
import ChargeIcon from './Images/chargeicon.png'

const Divisor = styled.div`
height: 100vh;
background-color:#2EA5C2;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
font-size: .6rem;
`;

const Button = styled.button`
width: 50px;
height: 50px;
`;

const ImgBtn = styled.button`
`;

function Loadpage() {
  return (
    <Divisor>
        <img src={Logo} alt="Logo que remete a um simbolo de coração" />
        <h1>Sua saúde na palma da sua mão!</h1>

        <Button onClick={PageLogin}><ImgBtn src={ChargeIcon} alt="imagem circular de carregamento" /></Button>
    </Divisor>
  )
}

export default Loadpage