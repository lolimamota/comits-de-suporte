import React from 'react'
import Logo from './Images/logomenor.png'
const FontAwesomeIcon =
function PageLogin() {
  return (
    <>
    <img src={Logo} alt="Logo que remete a um simbolo de coração"/>
    <h2>Login</h2>
    <form>
      <label htmlFor="Email">Email:</label>
      <FontAwesomeIcon icon="fa-regular fa-user" />
      <input type="text" placeholder="Digite seu email"/>
    </form>
    </>
  )
}

export default PageLogin