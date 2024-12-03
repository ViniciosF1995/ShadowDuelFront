import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="opcoesNavegacao" to="/batalhas">Batalhas</Link>
      <Link className="opcoesNavegacao" to="/decks">Decks</Link>
      <Link className="opcoesNavegacao" to="/perfil">Perfil</Link>
      <Link id="store" className="opcoesNavegacao" to="/loja">Loja</Link>
    </nav>
  )
}

export default Navbar
