
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#inicio" className="header-logo">
          Flores Eternas 🌸
        </a>

        <nav className="header-nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
