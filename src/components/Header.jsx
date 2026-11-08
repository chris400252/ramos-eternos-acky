import { Link } from "react-router";
import "./Header.css";
import logoTienda from "../assets/logo-tienda.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src={logoTienda} alt="" className="header-logo-imagen" />
          <span>Ramos Eternos Acky</span>
        </Link>

        <nav className="header-nav" aria-label="Navegación principal">
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;