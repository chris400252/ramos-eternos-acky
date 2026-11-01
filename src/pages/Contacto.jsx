import "./Contacto.css";

function Contacto() {
  const numero = "56934515158"; 
  const instagram = "ramos.eternos_acky"; 

  const mensaje = encodeURIComponent(
    "Hola, quisiera consultar por sus ramos de flores eternas."
  );

  return (
    <section className="contacto">
      <h1>Conversemos</h1>

      <p className="contacto-descripcion">
        ¿Tienes dudas o quieres encargar un ramo?
        Escríbenos y te ayudaremos a elegir un detalle especial.
      </p>

      <div className="contacto-opciones">
        <article className="contacto-tarjeta">
          <h2>WhatsApp</h2>
          <p>Consulta precios, disponibilidad y opciones de personalización.</p>

          <a
            href={`https://wa.me/${numero}?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-boton"
          >
            Escribir por WhatsApp
          </a>
        </article>

        <article className="contacto-tarjeta">
          <h2>Instagram</h2>
          <p>Descubre nuestros ramos y las novedades del emprendimiento.</p>

          <a
            href={`https://www.instagram.com/${instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-boton"
          >
            Visitar Instagram
          </a>
        </article>
      </div>
    </section>
  );
}

export default Contacto;