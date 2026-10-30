import Producto from "../components/Producto";
import { productos } from "../data/Producto";

function Catalogo() {
  return (
    <section className="catalogo">
      <h1>Nuestros ramos</h1>
      <p>Encuentra un detalle especial para cada ocasión.</p>

      <div className="catalogo-grid">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default Catalogo;