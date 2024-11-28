// Importando hook, axios e estilização
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import VerDados from '../components/VerDados'

// Função principal para renderização e funcionamento do front
function App() {

  const [usuarios, setUsuarios] = useState([])
  const [visible, setvisible] = useState(false)
  // Declaração para controle de estados do dado digitado no input
  const [users, setUsers] = useState(
    {

      username: '',
      email: '',
      senha: ''
  
    }
  )
  function mostar(){
    setvisible(!visible)
  }
  function limpa(){
    setUsers({  username: '', email: '', senha: '' })
  }
  
  function teste(){

    console.table(usuarios)

  }
  const getUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/Users');
        setUsuarios( response.data);
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
    }


};

  // Função chamada no clique do botão
  const handleClick = async (e) => {
    

    e.preventDefault()
    try {
      // Utilizando o axios para enviar requisição de post do front para o back
      const response = await axios.post('http://localhost:3000/Users', users)
      if (response.status === 201) {
        setUsers(response.data);
        alert('Usuário cadastrado no banco de dados! :D')
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário! :(', error)
    }
  }

  // Retorno da função App, com os elementos visuais do front
  return (

    <div className='cardRegister'>
      <label className='lblTitle'>User Register</label>

      <label className='lblLabel'>Username</label>
      <input className='inptInput' value={users.username} onChange={(e) => setUsers({ ...users, username: e.target.value })} />

      <label className='lblLabel'>Email</label>
      <input className='inptInput' value={users.email} onChange={(e) => setUsers({ ...users, email: e.target.value })} />

      <label className='lblLabel'>senha</label>
      <input type='password' className='inptInput' value={users.senha} onChange={(e) => setUsers({ ...users, senha: e.target.value })} />
      

      <button className='btnRegister' onClick={handleClick}>REGISTER</button>
      <button onClick={teste} >teste</button>
      <button onClick={getUsers}>Pegar</button>
      <button onClick={mostar}>Mostar</button>
      <button onClick={limpa}>limpa</button>
      <div className='lista'>

      { visible && usuarios.map((u) => (
        <VerDados  key = {u.userid} user={u}  />
      ))
        }

      </div>
    </div>

  )
}

// Exportando a função App
export default App