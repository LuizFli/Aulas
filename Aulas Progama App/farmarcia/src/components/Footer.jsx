import './Footer.css'

function Footer(){



    return(
        <div className='Footer-container'>
           <label className='lblContato'>Contate-nos</label>
            <div>

           <img className='imgCartoesFooter' src="./public/image/farmarcia-cartoes.png" alt="" />      

            </div>

            <a href="https://discord.gg/Fccr7Mav" target='_blank'>

                <button className='but-discord'> <img src="./public/image/discord.png" alt=""  className='icon-D'/> Discord Farmarcia</button>
            </a>
            <div className='div-contato'>
           <label className='lblInfoContato'>📍 Endereço: Rua das Flores, 123, Centro, São Paulo, SP, 01000-000

📞 Telefone: (11) 1234-5678

📧 E-mail: contato@farmarcia.com.br

</label>

            </div>


        </div>
    )
}

export default Footer