import React, { useState } from 'react'
import './JucaFerias.css'
import Orcamento from '../components/Orcamento'

function JucaFerias() {
const [diarias, setDiarias] = useState()
const [components, setComponents] = useState(false)
const [valorTotal, setValorTotal] = useState()
const [valorDiarias, setValorDiarias] = useState()
const [valorInicial, setValorInicial] = useState()
const [desconto , setDesconto] = useState(10)
const [desconto2, setDesconto2] = useState(15)
const [multa, setMulta] = useState(150.00)



function verificaValor(){
    let valorDiaria = 0
    let valorTotal = 0
    let valorDiariaInicial = 0
    let QntDiarias = Number(diarias) 

    if(QntDiarias <= 5){

        valorDiaria = 100
        
        
    }else if(QntDiarias <= 10){

        valorDiaria = 90
        
    }else if(QntDiarias > 10){

      valorDiaria = 80

    }else{
      setDiarias(0)
    }
       

        
    valorDiariaInicial = QntDiarias*valorDiaria
    valorTotal = (((((valorDiariaInicial) * 90)/100)*85)/100) + 150

    setValorInicial(valorDiariaInicial.toFixed(2))
    setValorDiarias(valorDiaria.toFixed(2))
    setValorTotal(valorTotal.toFixed(2))
    setComponents(true)
}





  return (
    <div className='div-container-juca'>
      <p>
      5.7// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu 
tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem 
destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro 
acabar...
Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua 
única regra e ficar alguns dias por ali. Encontrou um albergue meio bom
e fez check in, mas não conseguiu entender de forma alguma como o hotel 
calculava o valor da conta. Ele é meio burro, vocês sabem...
O albergue utilizas faixas de preço de acordo com o número de diárias
Até 5 diárias, o preço por diária é R$100,00;
De 6 a 10 diárias, R$90,00 por dia;
A partir de 11 dias, sai R$80,00 por dia;
Outros fatos relevantes para determinar o valor da conta:
- Ele acabou ganhando um desconto a mais de 10% do valor total porque 
teve um “envolvimento emocional” com a moça que trabalha no balcão;
- Quando ele abriu a carteira pra pagar, a moça viu que ele tem a 
carteirinha da Associação dos motoristas do Uber de Palhoça, entidade 
com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
de desconto;
- Ele se passou e vai pagar multa de R$150 por danos materiais.
Criar um programa que lê o número de dias que ele vai ficar no albergue 
e apresente o valor final da conta e sua composição (os detalhes, 
pagamentos, descontos...);

      </p>
      <label htmlFor="inpDiarias">Numero De Diarias</label>
      <input type="number" id='inpDiarias' 
      value={diarias}
      onChange={(e) => setDiarias(e.target.value)}
      />
      <button onClick={verificaValor} >Verificar Valor</button>
      {components && <Orcamento ValorDiarias = {valorInicial} TotalDiarias = {diarias} ValorDaDiaria = {valorDiarias} Desconto = {desconto} Desconto2 = {desconto2} multa = {multa} ValorTotal = {valorTotal} />}
      
    </div>
  )
}

export default JucaFerias
