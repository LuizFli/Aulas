import './Footer.css'

function Footer(){
    return(
        <div className='Footer-container'>

           <img className='imgCartoesFooter' src="/images/farmarciaCartoes.png" alt="" />            
           <label className='lblContato'>Contato:</label>
           <label className='lblInfoContato'>📍 Endereço: Rua das Flores, 123, Centro, São Paulo, SP, 01000-000

📞 Telefone: (11) 1234-5678

📧 E-mail: contato@farmarcia.com.br

🌐 Site: www.farmarcia.com.br</label>

        </div>
    )
}

export default Footer