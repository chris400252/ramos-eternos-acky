
import "./Producto.css";

function Producto({ nombre, descripcion, precio, imagen }) {
  const precioFormateado = precio.toLocaleString("es-CL");

  const mensaje = encodeURIComponent(
    `¡Hola! Quisiera consultar por el ${nombre}, cuyo precio es $${precioFormateado}.`
  );

  // Reemplazar por el número real del emprendimiento
  const telefono = "56934515158";

  const whatsapp = `https://wa.me/${telefono}?text=${mensaje}`;

  return (
    <article className="producto">
      <img
        src={`${import.meta.env.BASE_URL}images/${imagen}`}
        alt={nombre}
        className="producto-imagen"
        loading="lazy"
      />

      <div className="producto-informacion">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>

        <span className="producto-precio">
          ${precioFormateado}
        </span>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="producto-boton"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </article>
  );
}

export default Producto;
