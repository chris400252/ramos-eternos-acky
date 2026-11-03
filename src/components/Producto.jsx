
import "./Producto.css";
import { Link } from "react-router";

function Producto({ id, nombre, descripcion, precio, imagen }) {
  const precioFormateado = precio.toLocaleString("es-CL");

  const mensaje = encodeURIComponent(
    `¡Hola! Quisiera consultar por el ${nombre}, cuyo precio es $${precioFormateado}.`
  );

  
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
        <h3>
         <Link to={`/catalogo/${id}`} className="producto-nombre-link">
          {nombre}
          </Link>
        </h3>
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
