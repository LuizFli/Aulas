import React, { useState } from 'react'
import './Garcon.css'
import ResultadoNegativo from '../components/ResultadoNegativo'
import ResultadoPositivo from '../components/ResultadoPositivo'

function Garcon() {
    const [inpSalario, setInpSalario] = useState()
    const [inpEmprestimo, setInpEmprestimo] = useState()
    const [inpParcela, setInpParcela] = useState()
    const [resultado,setResultado] = useState(null)


    function verifica(){
        let prestacao = inpEmprestimo / inpParcela
        let limitePrestacao = inpSalario * 0.30

        if(inpSalario <= 0 || inpEmprestimo <=0 || inpParcela <=0 || inpEmprestimo == null || inpParcela == null || inpSalario == null || limitePrestacao < prestacao){

            setResultado(false)
        }else{
            setResultado(true)
        }


    }

    return (
        <div className='div-container-garcon'>
            <p>
                Não tem garçom de cara feia: Uma empresa abriu uma linha de crédito para os funcionários. O valor da prestação não pode ultrapassar 30% do salário. Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores informados pode ser zero ou negativo
            </p>
            <div className="div-forms-input">
                <div className="input-container">
                    <label htmlFor="inpS">Digite seu Salario R$</label>
                    <input type="number" id='inpS'
                    value={inpSalario}
                    onChange={(e) => setInpSalario(e.target.value)} />
                </div>

                <div className="input-container">
                    <label htmlFor="inpE">Digite o Valor do Emprestimo R$</label>
                    <input type="number" id='inpE' 
                    value={inpEmprestimo}
                    onChange={(e) => setInpEmprestimo(e.target.value)} />
                </div>

                <div className="input-container">
                    <label htmlFor="inpP">Digite O Numero De Prestações</label>
                    <input type="number" 
                    value={inpParcela}
                    onChange={(e) => setInpParcela(e.target.value)} />
                </div>
            </div>
                <div className='div-but'>
                    <button onClick={verifica}>Verificar</button>

                </div>

                {/* {!resultado && <ResultadoNegativo />}  */}
                {!resultado && <ResultadoPositivo resultado = 'Negativo'/>}

                {resultado && <ResultadoPositivo resultado = 'Positivo' />}


        </div>
    )
}

export default Garcon
