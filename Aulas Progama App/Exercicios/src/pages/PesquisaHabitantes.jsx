import React, { useEffect, useState } from 'react'
import './PesquisaHabitantes.css'
import Pesquisa from '../components/Pesquisa'

function PesquisaHabitantes() {
    const [components, setComponents] = useState(false)
    const [dados, setDados] = useState([])
    const [inpGenero, setInpGenero] = useState('')
    const [altura, setAltura] = useState('')
    const [maiorAltura, setMaiorAltura] = useState()
    const [menorAltura, setMenorAltura] = useState()
    const [mediaFem, setMediaFem] = useState(0)
    const [mediaMasc, setMediaMasc] = useState(0)
    const [mediaAltura, setMediaAltura] = useState(0)
    const [perMasc, setPerMasc] = useState(0)
    const [perFem, setPerFem] = useState(0)

    useEffect(() => {
        console.log(dados);
        console.log("Menor: ", menorAltura);
        console.log("Maior: ", maiorAltura);
    }, [dados, menorAltura, maiorAltura])


    function enviarDado() {

        if(altura != null && inpGenero != null){

            let obj = {
                
                altura: Number(altura),
                genero: Number(inpGenero)
                
            }
            
            setDados([...dados, obj])
        }
            setInpGenero('')
            setAltura('')

        // verificarDados()


    }
    function verificarDados() {

        let somatorioMasc = 0
        let somatorioFem = 0
        let contFem = 0
        let contMasc = 0



        for (let i = 0; i < dados.length; i++) {
            let alt = dados[i].altura;
            let gen = dados[i].genero

            if (gen == 0) {

                somatorioMasc += alt

                contMasc++
            }
            if (gen == 1) {

                somatorioFem += alt

                contFem++

            }

            if (alt > maiorAltura || maiorAltura == null) {

                setMaiorAltura(alt)

            }
            if (alt < menorAltura || menorAltura == null) {

                setMenorAltura(alt)

            }

        }

        let mediaMascu = somatorioMasc / contMasc

        let mediaFemea = somatorioFem / contFem

        let mediaGeral = (somatorioMasc + somatorioFem) / (contFem + contMasc)

        let contTotal = contFem + contMasc

        let PercentualM = (contMasc / contTotal) * 100

        let percentualF = (contFem / contTotal) * 100

        setMediaFem(mediaFemea)
        setMediaMasc(mediaMascu)
        setMediaAltura(mediaGeral)
        setPerFem(percentualF)
        setPerMasc(PercentualM)

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
            {components && <Pesquisa MaiorAltura={maiorAltura.toFixed(2)} MenorAltura={menorAltura.toFixed(2)} AlturaMulheres={mediaFem.toFixed(2)} AlturaHomens={mediaMasc.toFixed(2)} MediaAltura={mediaAltura.toFixed(2)} PerHomens={perMasc.toFixed(2)} PerMulheres={perFem.toFixed(2)} />}

            {menorAltura}

        </div>
    )
}

export default PesquisaHabitantes
