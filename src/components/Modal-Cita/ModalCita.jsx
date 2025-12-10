import "./modalcita.css";

export default function ModalCita({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Agenda tu cita</h2>

        <form className="modal-form">
          <label>Nombre completo</label>
          <input type="text" placeholder="Escribe tu nombre" />

          <label>Teléfono</label>
          <input type="text" placeholder="Ej. 656 123 4567" />

          <label>Motivo de la consulta</label>
          <textarea placeholder="Describe brevemente tu solicitud"></textarea>

          <button type="submit" className="btn-gold submit-btn">
            Enviar solicitud
          </button>
        </form>

        <button className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}