import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div>
          <h2>Flores Eternas 🌸</h2>
          <p>Ramos hechos a mano para momentos especiales.</p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h3>Navegación</h3>
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div>
          <h3>Contacto</h3>
          <p>Encuéntranos en WhatsApp e Instagram.</p>
        </div>
      </div>

      <p className="footer-copyright">
        © {new Date().getFullYear()} Flores Eternas
      </p>
    </footer>
  );
}

export default Footer;