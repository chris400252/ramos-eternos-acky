import Hero from "../components/Hero";
import Producto from "../components/Producto";
import { productos } from "../data/Producto";

function Inicio() {
  return (
    <>
      <Hero />

      <section className="ultimas-ventas">
        <h2>Últimas ventas</h2>
        <p>Busca el ramo ideal para las personas que quieres.</p>

        <div className="catalogo-grid">
          {productos.slice(0, 3).map((producto) => (
            <Producto
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;
