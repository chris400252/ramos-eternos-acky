import { Link, useParams } from "react-router";
import { productos } from "../data/Producto";
import ExtrasProducto from "../components/ExtrasProducto";
import "./DetalleProducto.css";

function DetalleProducto() {
  const { id } = useParams();

  const producto = productos.find(
    (producto) => String(producto.id) === id
  );

  if (!producto) {
    return (
      <section className="detalle-producto">
        <h1>Producto no encontrado</h1>
        <p>El ramo que buscas no está en nuestro catálogo.</p>
        <Link to="/catalogo">Volver al catálogo</Link>
      </section>
    );
  }

  const precioFormateado = producto.precio.toLocaleString("es-CL");

  const telefono = "56934515158";

  const mensaje = encodeURIComponent(
    `¡Hola! Quisiera consultar por el ${producto.nombre}, ` +
    `cuyo precio es $${precioFormateado}.\n` +
    `Link del producto: ${window.location.href}`
  );

  const whatsapp = `https://wa.me/${telefono}?text=${mensaje}`;

  return (
    <section className="detalle-producto">
      <Link to="/catalogo" className="detalle-volver">
        ← Volver al catálogo
      </Link>

      <div className="detalle-contenido">
        <img
          src={`${import.meta.env.BASE_URL}images/${producto.imagen}`}
          alt={producto.nombre}
          className="detalle-imagen"
        />

        <div className="detalle-informacion">
  <h1>{producto.nombre}</h1>

  <p>
    {producto.descripcionLarga || producto.descripcion}
  </p>

  <ExtrasProducto
    key={producto.id}
    producto={producto}
  />
</div>
      </div>
    </section>
  );
}

export default DetalleProducto;