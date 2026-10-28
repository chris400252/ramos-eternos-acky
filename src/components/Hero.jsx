
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-contenido">
        <h1>Flores que duran para siempre</h1>

        <p>
          Descubre nuestros ramos de flores eternas,
          hechos a mano con amor para cada ocasión especial.
        </p>

        <a href="#catalogo" className="hero-boton">
          Explorar catálogo
        </a>
      </div>

      <div className="hero-imagen">
        <img
          src="/images/Girasoles.jpeg"
          alt="Ramo artesanal de flores eternas"
        />
      </div>
    </section>
  );
}

export default Hero;
