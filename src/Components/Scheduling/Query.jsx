import React, {useState} from "react";
import PaginaDeAgendamento from 'caminho da pagina'

export default function DadosBasicos() {
    const [btn , setBtn] = useState('')
    
    const particularChange = () => {
        setBtn(() => (
            <>
                <h2>Consulta particular: R$ 800,00</h2>
            </>
        ));
    };
    const convenioChange = () => {
        setBtn(() => (
            <>
                <h2>Escolha seu convênio</h2>
                <select name="convenios" id="convenios">
                    <option value="A">Bradesco Saúde</option>
                    <option value="B">Bradesco Seguros</option>
                    <option value="C">Unimed Saúde</option>
                    <option value="D">Unimed Sempre</option>
                </select>
                <button onClick={PaginaDeAgendamento}>Validar</button>
            </>
        ));
    };
        
  return (
    <>
    <label htmlFor="radio">Modo de atendimento</label>
    <div onClick={particularChange}>
    <input id="sim" type="radio" value="sim"name="opcao" />
    <label htmlFor="sim">Particular</label>
    </div>
    <div onClick={convenioChange}>
    <input id="nao" type="radio" value="nao"name="opcao"/>
    <label htmlFor="nao">Convênio</label>
    </div>
    <div>
        {btn}
    </div>
    </>
  )
}
