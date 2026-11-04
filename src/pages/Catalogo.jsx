import { useState } from "react";
import Producto from "../components/Producto";
import { productos } from "../data/Producto";
import "./Catalogo.css";

function Catalogo() {
  const [categoria, setCategoria] = useState("todos");
  const [precioMaximo, setPrecioMaximo] = useState("");
  const [orden, setOrden] = useState("original");

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoria === "todos" || producto.categoria === categoria;

    const coincidePrecio =
      precioMaximo === "" || producto.precio <= Number(precioMaximo);

    return coincideCategoria && coincidePrecio;
  });

  if (orden === "menor") {
    productosFiltrados.sort((a, b) => a.precio - b.precio);
  } else if (orden === "mayor") {
    productosFiltrados.sort((a, b) => b.precio - a.precio);
  }

  function limpiarFiltros() {
    setCategoria("todos");
    setPrecioMaximo("");
    setOrden("original");
  }

  return (
    <section className="catalogo">
      <h1>Nuestros ramos</h1>
      <p>Encuentra un detalle especial para cada ocasión.</p>

      <div className="catalogo-filtros">
        <div className="catalogo-campo">
          <label htmlFor="categoria">Categoría</label>

          <select
            id="categoria"
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
          >
            <option value="todos">Todos los ramos</option>
            <option value="rosas">Rosas</option>
            <option value="girasoles">Girasoles</option>
            <option value="mixtos">Mixtos</option>
          </select>
        </div>

        <div className="catalogo-campo">
          <label htmlFor="precio-maximo">Precio máximo del ramo (CLP)</label>

          <input
            id="precio-maximo"
            type="number"
            min="0"
            step="1"
            placeholder="Sin límite"
            value={precioMaximo}
            onChange={(evento) => setPrecioMaximo(evento.target.value)}
          />
        </div>

        <div className="catalogo-campo">
          <label htmlFor="orden">Ordenar por</label>

          <select
            id="orden"
            value={orden}
            onChange={(evento) => setOrden(evento.target.value)}
          >
            <option value="original">Orden original</option>
            <option value="menor">Precio: menor a mayor</option>
            <option value="mayor">Precio: mayor a menor</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        className="catalogo-limpiar"
        onClick={limpiarFiltros}
      >
        Limpiar filtros
      </button>

      <p className="catalogo-resultados" role="status">
        {productosFiltrados.length === 1
          ? "1 ramo encontrado"
          : `${productosFiltrados.length} ramos encontrados`}
      </p>

      {productosFiltrados.length > 0 ? (
        <div className="catalogo-grid">
          {productosFiltrados.map((producto) => (
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
      ) : (
        <p className="catalogo-vacio">
          No encontramos ramos con esos filtros.
          Prueba otra categoría o aumenta el precio máximo.
        </p>
      )}
    </section>
  );
}

export default Catalogo;