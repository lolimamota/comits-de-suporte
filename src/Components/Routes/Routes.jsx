import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Agendamento from "../Agendamento/Agenda.jsx";
import Cadastro from '../Cadastro/Cadastrar.jsx';
import Calendario from '../Calendario/Calendar.jsx';
import Carregamento from '../Carregamento/Loadpage.jsx';
import Confirmar from '../Confirmado/Confirmar.jsx';
import Erropage from '../Erro/ErroAgenda.jsx';
import FAQ from '../FAQ/Duvidas.jsx';
import Home from '../Home/Homepage.jsx';
import PageLogin from "../Login/PageLogin.jsx";
import Pagamentos from '../Pagamentos/Pagar.jsx';
import Revisar from '../Revisao/RevisarInfo.jsx';

export default function Router(){
    return(
        <BrowserRouter>
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Agendamentos">Agendamentos</Link></li>
            <li><Link to="/FAQ">Dúvidas Frequentes</Link></li>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Agendamento' element={<Agendamento/>}/>
            <Route path='/Cadastro' element={<Cadastro/>}/>
            <Route path='/Calendario' element={<Calendario/>}/>
            <Route path='/Carregamento' element={<Carregamento/>}/>
            <Route path='/Confirmar' element={<Confirmar/>}/>
            <Route path='/Erropage' element={<Erropage/>}/>
            <Route path='/FAQ' element={<FAQ/>}/>
            <Route path='/Pagelogin' element={<PageLogin/>}/>
            <Route path='/Pagamentos' element={<Pagamentos/>}/>
            <Route path='/Revisar' element={<Revisar/>}/>
        </Routes>
        </BrowserRouter>
    )
}