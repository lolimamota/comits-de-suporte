import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


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

const ImgBtn = styled.img`
width: 50px;
height: 50px;
`;

function Loadpage() {
  let navigate = useNavigate();
  const handleClickLogin = () => navigate("/Loginpage");

  return (
    <Divisor>
        <img src={Logo} alt="Logo que remete a um simbolo de coração" />
        <h1>Sua saúde na palma da sua mão!</h1>

      <ImgBtn src={ChargeIcon} alt="imagem circular de carregamento" onClick={()=>handleClickLogin()}/>
    </Divisor>
  )
}

export default Loadpage