
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="inicio">
          <h1>Bienvenidos a Flores Eternas</h1>
          <p>Ramos únicos para momentos especiales.</p>
        </section>

        <section id="catalogo">
          <h2>Nuestros ramos</h2>
          <p>Próximamente nuestro catálogo.</p>
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
