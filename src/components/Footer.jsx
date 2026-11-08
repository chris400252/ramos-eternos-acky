import { Link } from "react-router";
import "./Footer.css";
import instagramIcon from "../assets/Instagram_logo_2016.svg.webp";
import whatsappIcon from "../assets/Whatsapp.svg.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-columna">
          <h2>Flores Eternas 🌸</h2>
          <p>Ramos hechos a mano con dedicación para momentos especiales e inolvidables.</p>
        </div>

        <nav className="footer-columna" aria-label="Navegación del pie de página">
          <h3>Navegación</h3>
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div className="footer-columna">
          <h3>Entregas y pedidos</h3>
          <ul className="footer-lista-info">
            <li>📍 Santiago de Chile</li>
            <li>🚚 Envíos y entregas a coordinar</li>
            <li>⏱️ Pedidos con anticipación</li>
            <li>💳 Transferencia y efectivo</li>
          </ul>
        </div>

        <div className="footer-columna">
          <h3>Contáctanos</h3>
          <ul className="footer-lista-contacto">
            <li>
              <a
                href="https://wa.me/56934515158"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir por WhatsApp"
                className="footer-contacto-link"
              >
                <img src={whatsappIcon} alt="" className="footer-contacto-icon" />
                <span>+56 9 3451 5158</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/ramos.eternos_acky/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar nuestro Instagram"
                className="footer-contacto-link"
              >
                <img src={instagramIcon} alt="" className="footer-contacto-icon" />
                <span>@ramos.eternos_acky</span>
              </a>
            </li>

            <li className="footer-horario">
              <span>🕐 Lun a Sáb: 10:00 - 20:00 hrs</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer-copyright">
        © {new Date().getFullYear()} Flores Eternas · Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;