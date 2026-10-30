import { HashRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route
            path="/contacto"
            element={
              <section>
                <h1>Contacto</h1>
                <p>Pronto agregaremos nuestros medios de contacto.</p>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;