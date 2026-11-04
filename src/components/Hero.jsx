import { Link } from "react-router";
import "./Hero.css";

function Hero() {
  const telefono = "56934515158";

  const mensaje = encodeURIComponent(
    "¡Hola! Me gustaría encargar un ramo personalizado. " +
    "Quisiera consultar las opciones y su precio."
  );

  const whatsapp = `https://wa.me/${telefono}?text=${mensaje}`;

  return (
    <section className="hero" id="inicio">
      <div className="hero-contenido">
        <h1>Flores que duran para siempre</h1>

        <p>
          Somos Ramos Eternos Acky, una tienda online de ramos de
          flores eternas hechos a mano en Santiago de Chile.
          Encuentra un diseño entre nuestros ramos disponibles o
          encarga uno personalizado para esa ocasión especial.
        </p>

        <p>
          Coordinamos las entregas en estaciones de Metro,
          acordando contigo el lugar y horario que nos acomode
          a ambas partes.
        </p>

        <div className="hero-acciones">
          <Link to="/catalogo" className="hero-boton">
            Explorar catálogo
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-boton hero-boton-secundario"
          >
            Ramo personalizado
          </a>
        </div>
      </div>

      <div className="hero-imagen">
        <img
          src={`${import.meta.env.BASE_URL}images/Girasoles.jpeg`}
          alt="Ramo artesanal de girasoles eternos"
        />
      </div>
    </section>
  );
}

export default Hero;