
import Header from "./components/Header";
import Hero from "./components/Hero";
import Producto from "./components/Producto";
import { productos } from "./data/Producto";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="catalogo">
          <h2>Nuestros ramos</h2>
          <p>Encuentra el regalo perfecto para cada ocación.</p>

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

        <section id="contacto">
          <h2>Contáctanos</h2>
          <p>Haz tus pedidos directamente por WhatsApp.</p>
        </section>
      </main>
    </>
  );
}

export default App;
