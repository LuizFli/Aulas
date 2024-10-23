import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import './CadastroProduto.css'
import Navbar from '../components/Navbar'

function CadastroProduto() {

    const { produtos, setProdutos } = useContext(GlobalContext)

    const [inputNome, setInputNome] = useState('')
    const [inputPreco, setInputPreco] = useState('')

    useEffect(() => {
        console.table(produtos)
        console.log(produtos)
    }, [produtos])

    function cadastrarProduto() {

        let produto = {
            id: Date.now(),
            nome: inputNome,
            preco: inputPreco

        }

        setProdutos([...produtos, produto])

        console.log(produtos)
    }


    return (
        <div className='cadastro-container'>

            <Navbar/>
            <h1>Cadastro de Produtos</h1>

            <div className='input-form'>

                <div className='input-container'>
                    <label htmlFor="">Nome</label>
                    <input type="text"
                        value={inputNome}
                        onChange={(e) => setInputNome(e.target.value)}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="">Preço</label>
                    <input type="number"
                        value={inputPreco}
                        onChange={(e) => setInputPreco(e.target.value)}
                    />
                </div>

            </div>
            <button onClick={cadastrarProduto}>Cadastrar</button>


        </div>
    )
}

export default CadastroProduto
