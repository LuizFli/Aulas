import React from 'react'
import './Body.css'

function Body() {
    return (
        <div className='body-container'>
            <div className='body-sobreNos'>

                <label className='body-label-sobreNos'>Sobre Nós</label>

            </div>
            <div className='body-farmarcia'>

                <img className='farmarcia' src="/public/image/farmarcia.png" alt="" />

            </div>
            <div className='div-div-body-label'>

                <div className='div-body-label'>

                    <label>No coração de uma pequena cidade chamada Vila do Sol, havia uma farmácia antiga e charmosa, conhecida como "Farmácia do Tio Mário". A farmácia era famosa não apenas pela sua ampla gama de medicamentos, mas também pela sua atmosfera acolhedora e pelos segredos que parecia esconder.

                        E assim, a "Farmácia do Tio Mário" se transformou na "Farmácia do Futuro", um lugar onde o passado e o presente se encontravam, oferecendo aos clientes não apenas medicamentos, mas também um pedaço da história e da inovação. Rafael e Lucas continuaram a trabalhar juntos, sempre explorando novas maneiras de combinar tradição e tecnologia.

                    </label>

                </div>
            </div>
            <div className='div-body-historia'>
                <div>
                    <label className='labelNHistoria'>Nossa Historia</label>
                </div>
                <div>
                    <img className='imgPlaca' src="/public/image/farmarcia-placa.png" alt="" />
                </div>
                <div className='div-body-NHistoria'>

                    <div className='div-div-body-NHistoria'>

                        <label>
                            No coração de uma pequena cidade chamada Vila do Sol, havia uma farmácia antiga e charmosa, conhecida como "Farmácia do Tio Mário". A farmácia era famosa não apenas pela sua ampla gama de medicamentos, mas também pela sua atmosfera acolhedora e pelos segredos que parecia esconder.

                            E assim, a "Farmácia do Tio Mário" se transformou na "Farmácia do Futuro", um lugar onde o passado e o presente se encontravam, oferecendo aos clientes não apenas medicamentos, mas também um pedaço da história e da inovação. Rafael e Lucas continuaram a trabalhar juntos, sempre explorando novas maneiras de combinar tradição e tecnologia.
                        </label>
                    </div>
                </div>
            </div>
            <div className='div-body-label-venda'>

                <label className='body-label-venda'>Produtos a Venda</label>

            </div>
            <div className='body-camiseta'>

                <img className='camiseta' src="/public/image/farmarcia-camiseta.png" alt="" />
                <img className='camiseta' src="/public/image/farmarcia-camisetas.png" alt="" />
            </div>
            

        </div>
    )
}

export default Body
