import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Caminho.css'
import TelaBatalha from './TelaBatalha';

function Caminho() {
    
    const navigate = useNavigate();
    
    return (
        <div className='containerCaminho'>


            <div className='fundoTitulo'>
                <h1 className='titulo'>Escolha seu caminho</h1>
            </div>

            <div className='caminhos'>

                <img className='cartas' src="./src/assets/images/caminhoCavaleiro.png" alt="" />
                <img className='cartas' src="./src/assets/images/caminhoBruxo.png" alt="" />
                <img className='cartas' src="./src/assets/images/caminhoMago.png" alt="" />
                <img className='cartas' src="./src/assets/images/caminhoDemonio.png" alt="" />

            </div>

            <div className='divBotao'>
                <button className='botaoComecar' onClick={() => navigate('/batalhas')}>Começar!</button>
            </div>

        </div>
    )
}

export default Caminho
