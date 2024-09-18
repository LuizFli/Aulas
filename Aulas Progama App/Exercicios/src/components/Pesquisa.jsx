import React from 'react'

function Pesquisa(props) {
    return (
        <div>

            <p>
                DADOS DA PESQUISA
                <p>A maior  altura encontrada : {props.MaiorAltura} </p>
                <p>A menor altura encontrada :  {props.MenorAltura}</p>
                <p>A média de altura das mulheres : {props.AlturaMulheres}</p>
                <p>A média de altura dos Homens :  {props.AlturaHomens} </p>
                <p>A média de altura da população : {props.MediaAltura} </p>
                <p>O percentual de Homens na população : {props.PerHomens} % </p>
                <p>O percentual de Mulheres na população :  {props.PerMulheres} % </p>
            </p>

        </div>
    )
}

export default Pesquisa
