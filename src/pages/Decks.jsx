import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Decks.css';

function Decks() {
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [cards, setCards] = useState([]);

  const decks = {
    Bruxo: [
      { nome: 'Carta 1', imagem: './src/assets/images/Carta 1.png' },
      { nome: 'Carta 2', imagem: './src/assets/images/Carta 1.png' },
      { nome: 'Carta 3', imagem: './src/assets/images/Carta 1.png' },
      { nome: 'Carta 4', imagem: './src/assets/images/Carta 1.png' },
      { nome: 'Carta 5', imagem: './src/assets/images/Carta 1.png' },
    ],
    Demonio: [
      { nome: 'Carta 1', imagem: './src/assets/images/Carta 2.png' },
      { nome: 'Carta 2', imagem: './src/assets/images/Carta 2.png' },
      { nome: 'Carta 3', imagem: './src/assets/images/Carta 2.png' },
      { nome: 'Carta 4', imagem: './src/assets/images/Carta 2.png' },
      { nome: 'Carta 5', imagem: './src/assets/images/Carta 2.png' },
    ],
    Mago: [
      { nome: 'Carta 1', imagem: './src/assets/images/Carta 3.png' },
      { nome: 'Carta 2', imagem: './src/assets/images/Carta 3.png' },
      { nome: 'Carta 3', imagem: './src/assets/images/Carta 3.png' },
      { nome: 'Carta 4', imagem: './src/assets/images/Carta 3.png' },
      { nome: 'Carta 5', imagem: './src/assets/images/Carta 3.png' },
    ],
    Cavaleiro: [
      { nome: 'Carta 1', imagem: './src/assets/images/Carta 4.png' },
      { nome: 'Carta 2', imagem: './src/assets/images/Carta 4.png' },
      { nome: 'Carta 3', imagem: './src/assets/images/Carta 4.png' },
      { nome: 'Carta 4', imagem: './src/assets/images/Carta 4.png' },
      { nome: 'Carta 5', imagem: './src/assets/images/Carta 4.png' },
    ]
  };

  const handleDeckClick = (deck) => {
    setSelectedDeck(deck);
    setCards(decks[deck] || []);
  };

  return (
    <div className="containerDecks">
      <Navbar />

      <div className="principal">
        {/* Div à esquerda para os decks */}
        <div className="decks">
          <img
            onClick={() => handleDeckClick('Bruxo')}
            className="DeckCartas"
            src="./src/assets/images/DeckBruxo.png"
            alt="Deck Bruxo"
          />
          <img
            onClick={() => handleDeckClick('Demonio')}
            className="DeckCartas"
            src="./src/assets/images/DeckDemonio.png"
            alt="Deck Demonio"
          />
          <img
            onClick={() => handleDeckClick('Mago')}
            className="DeckCartas"
            src="./src/assets/images/DeckMago.png"
            alt="Deck Mago"
          />
          <img
            onClick={() => handleDeckClick('Cavaleiro')}
            className="DeckCartas"
            src="./src/assets/images/DeckCavaleiro.png"
            alt="Deck Cavaleiro"
          />
        </div>

        {/* Div à direita para exibir as cartas do deck selecionado */}
        <div className="aparicaoCartas">
          <h2>{selectedDeck ? `Cartas do Deck: ${selectedDeck}` : 'Selecione um Deck'}</h2>
          <div className="cardsContainer">
            {cards.map((card, index) => (
              <div key={index} className="card">
                <img src={card.imagem} alt={card.nome} className="cardImage" />
                <p>{card.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decks;
