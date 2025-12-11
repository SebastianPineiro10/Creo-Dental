import { useState } from "react";
import "./modalcita.css";

export default function ModalCita({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [errors, setErrors] = useState({});

  // URL DE TU APPS SCRIPT
  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxfqRY6UcyRWukVdS3vb4RdF-EnUL6ZFag16aQU5sweYDPHuy1hiXRFaCZTHpljQf1M/exec";

  if (!open) return null;

  // VALIDACIONES BÁSICAS PROFESIONALES
  const validators = {
    nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s.'-]{2,60}$/,
    telefono: /^[0-9\s+\-()]{8,20}$/,
    motivo: /^.{5,300}$/ // mínimo 5 caracteres
  };

  const handleInput = (e) => {
    const { name } = e.target;

    if (errors[name]) {
      const updated = { ...errors };
      delete updated[name];
      setErrors(updated);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      nombre: e.target.nombre.value.trim(),
      telefono: e.target.telefono.value.trim(),
      motivo: e.target.motivo.value.trim(),
    };

    // VALIDACIONES
    let valid = true;
    const newErrors = {};

    Object.keys(data).forEach((key) => {
      if (!data[key] || !validators[key].test(data[key])) {
        valid = false;
        newErrors[key] = true;
      }
    });

    if (!valid) {
      setLoading(false);
      setErrors(newErrors);
      return;
    }

    // SANITIZAR
    const cleanMotivo = data.motivo.replace(/<\/?[^>]+>/g, "");

    const finalData = {
      nombre: data.nombre,
      telefono: data.telefono,
      motivo: cleanMotivo
    };

    // ENVÍO A GOOGLE SHEETS
    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(finalData).toString(),
    })
      .then((res) => res.text())
      .then(() => {
        setLoading(false);
        setEnviado(true);
        e.target.reset();

        setTimeout(() => {
          setEnviado(false);
          onClose();
        }, 1900);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Agenda tu cita</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          {/* NOMBRE */}
          <label>Nombre completo</label>
          <input
            type="text"
            name="nombre"
            required
            placeholder="Escribe tu nombre"
            className={errors.nombre ? "input-error" : ""}
            onChange={handleInput}
          />
          {errors.nombre && (
            <p className="error-msg">Ingresa un nombre válido.</p>
          )}

          {/* TELEFONO */}
          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            required
            placeholder="Ej. 656 123 4567"
            className={errors.telefono ? "input-error" : ""}
            onChange={handleInput}
          />
          {errors.telefono && (
            <p className="error-msg">Ingresa un teléfono válido.</p>
          )}

          {/* MOTIVO */}
          <label>Motivo de la consulta</label>
          <textarea
            name="motivo"
            required
            placeholder="Describe brevemente tu solicitud"
            className={errors.motivo ? "input-error" : ""}
            onChange={handleInput}
          ></textarea>
          {errors.motivo && (
            <p className="error-msg">
              Describe brevemente el motivo (mínimo 5 caracteres).
            </p>
          )}

          {/* BOTÓN */}
          <button
            type="submit"
            className="btn-gold submit-btn"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar solicitud"}
          </button>

          {/* MENSAJE DE ÉXITO */}
          {enviado && (
            <p className="success-msg">✔ Mensaje enviado correctamente</p>
          )}
        </form>

        <button className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}
