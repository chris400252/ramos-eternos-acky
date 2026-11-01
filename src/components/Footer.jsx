import { Link } from "react-router";
import "./Footer.css";
import instagramIcon from "../assets/Instagram_logo_2016.svg.webp";
import whatsappIcon from "../assets/Whatsapp.svg.webp";

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
  <h3>Síguenos y contáctanos</h3>

  <div className="footer-redes">
    <a
      href="https://www.instagram.com/ramos.eternos_acky/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visitar nuestro Instagram"
    >
      <img src={instagramIcon} alt="" />
    </a>

    <a
      href="https://wa.me/56934515158"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactarnos por WhatsApp"
    >
      <img src={whatsappIcon} alt="" />
    </a>
  </div>
        </div>
      </div>

      <p className="footer-copyright">
        © {new Date().getFullYear()} Flores Eternas
      </p>
    </footer>
  );
}

export default Footer;