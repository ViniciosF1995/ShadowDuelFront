import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Loja.css';
import { useSpring, animated } from 'react-spring';
import Modal from 'react-modal';
import Carta from '../components/Carta';

// Definir o modal root para react-modal
Modal.setAppElement('#root');

function Loja() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartasDoDeck, setCartasDoDeck] = useState([]); // Estado para as cartas do deck selecionado

  // Animação de slide usando react-spring
  const slideIn = useSpring({
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  });

  // Função para abrir e fechar o modal
  const toggleModal = (idDeck) => {
    if (idDeck) {
      // Filtrando as cartas do deck com base no id do deck
      const cartasSelecionadas = cartas.filter((carta) => carta.deckId === idDeck);
      setCartasDoDeck(cartasSelecionadas);
    }
    setIsOpen(!isOpen);
  };

  // Cartas disponíveis, agora com um `deckId` para identificar o deck de cada carta
  const [cartas, setCartas] = useState([
    { id: 1, deckId: 1, imagem: "./src/assets/images/Carta 1.png", nome: "Protetor Solar", descricao: "Protetor solar fator 50", preco: 45, peso: 150 },
    { id: 2, deckId: 1, imagem: "./src/assets/images/Carta 2.png", nome: "Toalha de Praia", descricao: "Toalha grande e macia", preco: 60, peso: 400 },
    { id: 3, deckId: 1, imagem: "./src/assets/images/Carta 3.png", nome: "Óculos de Sol", descricao: "Óculos com proteção UV", preco: 120, peso: 100 },
    { id: 4, deckId: 1, imagem: "./src/assets/images/Carta 4.png", nome: "Chapéu de Sol", descricao: "Chapéu com aba larga", preco: 70, peso: 200 },
    { id: 5, deckId: 1, imagem: "./src/assets/images/Carta 1.png", nome: "Sandália de Praia", descricao: "Sandália confortável e resistente", preco: 85, peso: 250 },
    // Adicionar mais cartas com deckId para diferentes decks
  ]);

  return (
    <div className="containerLoja">
      <Navbar />

      <div className="divMercador">
        <img className="imgMercador" src="./src/assets/images/mercador.png" alt="Imagem Mercador" />
      </div>

      <div className="divDeck">
        <div className="divDecks">
          <img onClick={() => toggleModal(1)} className="imgDecks" src="./src/assets/images/DeckBruxo.png" alt="Carta 1" />
        </div>
        <div className="divDecks">
          <img onClick={() => toggleModal(2)} className="imgDecks" src="./src/assets/images/DeckDemonio.png" alt="Carta 2" />
        </div>
        <div className="divDecks">
          <img onClick={() => toggleModal(3)} className="imgDecks" src="./src/assets/images/DeckMago.png" alt="Carta 3" />
        </div>
        <div className="divDecks">
          <img onClick={() => toggleModal(4)} className="imgDecks" src="./src/assets/images/DeckCavaleiro.png" alt="Carta 4" />
        </div>
      </div>

      {/* Modal de slide */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'transparent',
            backgroundColor: '#D3D6CF',
            padding: 0,
            width: '85%',
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {/* Caixa do modal com animação de slide */}
        <animated.div style={slideIn} className="slide-dialog">
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'D3D6CF'
          }}>
            {/* Título e descrição */}
            <div style={{ padding: '20px', backgroundColor: '#D3D6CF', flexShrink: 0 }}>
              <h2>Cartas do Deck Selecionado</h2>
              <p>Deck {cartasDoDeck.length ? cartasDoDeck[0].deckId : ''} selecionado.</p>
            </div>

            {/* Cartas - Ajuste flexível para ocupar o espaço restante */}
            <div className="cards" style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              overflowY: 'auto',
              padding: '10px',
              backgroundColor: '#D3D6CF',
              flexGrow: 1, // Garante que o espaço restante seja ocupado pelas cartas
              flexShrink: 0, // Impede que a área encolha além do necessário
            }}>
              {cartasDoDeck.map((p) => (
                <Carta carta={p} key={p.id} />
              ))}
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#D3D6CF',
              textAlign: 'center',
              flexShrink: 0,
              display: 'flex',            // Usando flexbox para alinhar os botões na mesma linha
              justifyContent: 'center',   // Centraliza os botões horizontalmente
              gap: '10px',                // Adiciona um espaçamento de 10px entre os botões
            }}>
              <button
                onClick={() => {
                  console.log("Compra realizada!");
                  setIsOpen(false); // Fecha o modal após a ação
                }}
                style={{
                  padding: '25px 35px',
                  backgroundColor: '#4CAF50', // Verde para compra
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Comprar
              </button>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '25px 35px',
                  backgroundColor: '#f44336', // Vermelho para fechar
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Fechar
              </button>
            </div>

          </div>
        </animated.div>
      </Modal>
    </div>
  );
}

export default Loja;



