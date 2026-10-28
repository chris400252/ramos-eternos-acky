
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

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
