
import "./Producto.css";
import { Link } from "react-router";

function Producto({ id, nombre, descripcion, precio, imagen }) {
  const precioFormateado = precio.toLocaleString("es-CL");

  return (
    <article className="producto">
      <Link to={`/catalogo/${id}`} className="producto-imagen-link">
        <img
          src={`${import.meta.env.BASE_URL}images/${imagen}`}
          alt={nombre}
          className="producto-imagen"
          loading="lazy"
        />
      </Link>

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
      </div>
    </article>
  );
}

export default Producto;
