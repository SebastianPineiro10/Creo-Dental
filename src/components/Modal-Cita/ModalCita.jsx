import { useState } from "react";
import "./modalcita.css";

export default function ModalCita({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxlLtB5KH9THhuYe1JUHsE7ylttu1xon4DMY2_44W9MifRvzLedEsLXQoWGPGySBPBSiA/exec";

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setEnviado(false);

    const data = {
      nombre: e.target.nombre.value,
      telefono: e.target.telefono.value,
      motivo: e.target.motivo.value,
    };

    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setLoading(false);
        setEnviado(true);
        e.target.reset();

        setTimeout(() => {
          setEnviado(false);
          onClose();
        }, 1800);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Agenda tu cita</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label>Nombre completo</label>
          <input type="text" name="nombre" required placeholder="Escribe tu nombre" />

          <label>Teléfono</label>
          <input type="text" name="telefono" required placeholder="Ej. 656 123 4567" />

          <label>Motivo de la consulta</label>
          <textarea name="motivo" required placeholder="Describe brevemente tu solicitud"></textarea>

          <button type="submit" className="btn-gold submit-btn" disabled={loading}>
            {loading ? "Enviando..." : "Enviar solicitud"}
          </button>

          {enviado && <p className="success-msg">✔ Mensaje enviado correctamente</p>}
        </form>

        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
}