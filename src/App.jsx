import { HashRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Footer from "./components/Footer";
import Contacto from "./pages/Contacto";
import DetalleProducto from "./pages/DetalleProducto";
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
            path="/contacto" element={<Contacto />}
          />
          <Route path="/catalogo/:id" element={<DetalleProducto />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;