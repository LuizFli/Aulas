import { useContext } from "react"
import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"
import './Generica.css'

function Generica() {

  const {produtoMagico,state,produtos} = useContext(GlobalContext)
  

  return (
    <div className="div-generica">
        <Navbar />
      <h1>Genérica</h1>
      <p>Coisas genéricas, nada específicas...</p>
      <div className='div-produtos'>

            {produtos.map((produto) => (
              <div key={produto.id} className="produto">

                <p> Nome do Produto : {produto.nome}</p>
                <p> Preço do Produto : {produto.preco}</p>

              </div>


            ))}

          </div>
      

    </div>
  )
}

export default Generica
