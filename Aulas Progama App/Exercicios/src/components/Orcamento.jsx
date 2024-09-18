import React from 'react'

function Orcamento(props) {
  return (
    <div>
      <p>
        Orçamento  <br /><br /> Valor Inicial: R$  {props.ValorDiarias} <br /> Numero De Diarias: {props.TotalDiarias} <br /> Preço Por Diaria : R$  {props.ValorDaDiaria} <br /> Desconto: {props.Desconto}% <br />Desconto: {props.Desconto2} % <br /> Multa : R$ {props.multa} <br /> Valor Total : R$ {props.ValorTotal}
      </p>
    </div>
  )
}

export default Orcamento
