import "./Carta.css";

function Carta(props) {
  let c = props.carta;

  return (
    <div className="carta-container">
      {/* <h2>{c.nome}</h2>
      <p>{c.descricao}</p>
      <p>Peso: {c.peso}g</p>
      <p>Preço: R$ {c.preco.toFixed(2)}</p>
      <p>ID: {c.id}</p> */}
      {/* Verifique se a imagem existe e exiba */}
      {c.imagem && <img src={c.imagem} alt={c.nome} />}
    </div>
  );
}

export default Carta;
