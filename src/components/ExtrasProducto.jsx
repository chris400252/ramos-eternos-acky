import { useState } from "react";
import { extras } from "../data/extras";
import "./ExtrasProducto.css";

function ExtrasProducto({ producto }) {
  const [seleccionados, setSeleccionados] = useState([]);

  function cambiarExtra(id) {
    setSeleccionados((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((extraId) => extraId !== id)
        : [...anteriores, id]
    );
  }

  const extrasElegidos = extras.filter((extra) =>
    seleccionados.includes(extra.id)
  );

  const precioExtras = extrasElegidos.reduce(
    (suma, extra) => suma + extra.precio,
    0
  );

  const total = producto.precio + precioExtras;

  function formatoPrecio(valor) {
    return `$${valor.toLocaleString("es-CL")}`;
  }

  const detalleExtras =
    extrasElegidos.length > 0
      ? extrasElegidos
          .map(
            (extra) =>
              `- ${extra.nombre}: ${formatoPrecio(extra.precio)}`
          )
          .join("\n")
      : "Sin extras.";

  const mensaje = [
    `¡Hola! Quisiera consultar por el ${producto.nombre}.`,
    `Precio del ramo: ${formatoPrecio(producto.precio)}`,
    "",
    "Extras seleccionados:",
    detalleExtras,
    "",
    `Total: ${formatoPrecio(total)}`,
    `Link del producto: ${window.location.href}`,
  ].join("\n");

  const telefono = "56934515158";

  const whatsapp =
    `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="extras-producto">
      <fieldset className="extras-lista">
        <legend>Personaliza tu ramo</legend>
        <p>Agrega los complementos que quieras:</p>

        {extras.map((extra) => (
          <label key={extra.id} className="extra-opcion">
            <input
              type="checkbox"
              checked={seleccionados.includes(extra.id)}
              onChange={() => cambiarExtra(extra.id)}
            />

          {extra.imagen && (
  <img
    src={`${import.meta.env.BASE_URL}images/${extra.imagen}`}
    alt=""
    className="extra-imagen"
    width={56}
    height={56}
    loading="lazy"
  />
)}

            <span className="extra-nombre">{extra.nombre}</span>
            <span>+{formatoPrecio(extra.precio)}</span>
          </label>
        ))}
      </fieldset>

      <div className="extras-resumen" aria-live="polite">
        <p>Ramo: {formatoPrecio(producto.precio)}</p>
        <p>Extras: {formatoPrecio(precioExtras)}</p>
        <p className="extras-total">
          Total: {formatoPrecio(total)}
        </p>
      </div>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="detalle-whatsapp"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
}

export default ExtrasProducto;