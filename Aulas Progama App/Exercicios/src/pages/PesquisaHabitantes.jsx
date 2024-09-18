import React, { useState } from 'react'
import './PesquisaHabitantes.css'
import Pesquisa from '../components/Pesquisa'

function PesquisaHabitantes() {
    const [components, setComponents] = useState(false)
    const [dados, setDados] = useState([])
    const [inpGenero, setInpGenero] = useState()
    const [altura, setAltura] = useState()
    const [resultado, setResultado] = useState()
    const [maiorAltura, setMaiorAltura] = useState(0)
    const [menorAltura, setMenorAltura] = useState(0)
    const [mediaFem, setMediaFem] = useState(0)
    const [mediaMasc, setMediaMasc] = useState(0)
    const [mediaAltura, setMediaAltura] = useState(0)
    const [perMasc, setPerMasc] = useState(0)
    const [perFem, setPerFem] = useState(0)


    function enviarDado() {


        let obj = {
            
            altura: altura,
            genero: inpGenero,

        }

        setDados([...dados , obj])
        

    }
    function verificarDados() {




        // let obj = {
        //     maiorAltura :,




        //     }
        
        // setResultado(obj)
        setComponents(true)
    }

    return (
        <div className='div-pesquisa'>
            <p> Foi feita um a pesquisa entre os habitantes de um a região e
                coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça
                um programa que leia os dados de 10 pessoas e informe:
                 a maior e a menor altura encontrada;
                 a média de altura das mulheres;
                  a média de altura dos homens;
                 a média de altura da população;
                o percentual de mulheres na população
                 o percentual de homens na população.</p>

            <div className="formInput">
                <div className="inputContainer">
                    <label htmlFor="inpGereno">Genero: 0 - Masc , 1 - Fem</label>
                    <input type="text" id='inpGereno'
                        value={inpGenero}
                        onChange={(e) => setInpGenero(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="inpAltura">Digite Sua Aultura</label>
                    <input type="text" id='inpAltura'
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                    />
                </div>
            </div>

            <div className="butao">
                <button onClick={enviarDado}>Enviar Dado</button>
                <button onClick={verificarDados}>Verificar Dados</button>
            </div>
            {components && <Pesquisa MaiorAltura = {maiorAltura} MenorAltura = {menorAltura}  AlturaMulheres = {mediaFem} AlturaHomens = {mediaMasc} MediaAltura = {mediaAltura} PerHomens = {perMasc} PerMulheres = {perFem} />}

        </div>
    )
}

export default PesquisaHabitantes
