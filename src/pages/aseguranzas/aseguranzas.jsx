import "./aseguranzas.css";
import { Phone, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { aseguranzasData } from "../aseguranzas/aseguranzasData.js";

function Aseguranzas() {

  // Animaciones fade-up (con cleanup profesional)
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // 🔑 performance + clean
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect(); // 🔑 cleanup React
  }, []);

  return (
    <section className="aseguranzas-section">

      {/* ========== HERO ========== */}
      <div className="aseguranzas-hero-wrapper fade-up">
        <img
          src="https://res.cloudinary.com/dcerhiol0/image/upload/v1764298877/WhatsApp_Image_2025-11-17_at_21.09.49_hqhaui.jpg"
          alt="Sucursal Creo Dental"
          className="aseguranzas-hero-img"
          onLoad={(e) => e.target.classList.add("loaded")}
        />

        <div className="aseguranzas-hero-content">
          <h2 className="aseguranzas-hero-title">Aseguranzas que Aceptamos</h2>
          <p className="aseguranzas-hero-sub">
            Cobertura dental de México y Estados Unidos, con verificación profesional.
          </p>
        </div>
      </div>

      {/* ========== CONTENIDO PRINCIPAL ========== */}
      <div className="aseguranzas-container fade-up">

        <p className="aseguranzas-subtitle">
          Trabajamos con una selección amplia de aseguranzas para brindarle claridad,
          respaldo y una atención verdaderamente profesional.
        </p>

        {/* ========== GRID ASEGURANZAS ========== */}
        <div className="aseguranzas-grid fade-up">
          {aseguranzasData.map((seguro, i) => (
            <div key={i} className="aseguranza-item">
              {seguro.logo ? (
                <img
                  className="aseguradora-logo"
                  src={seguro.logo}
                  alt={seguro.nombre}
                  onLoad={(e) => e.target.classList.add("loaded")}
                />
              ) : (
                <p className="aseguranzas-mas">{seguro.nombre}</p>
              )}
            </div>
          ))}
        </div>

        {/* ========== BLOQUES EDITORIALES ========== */}
        <div className="aseguranzas-double-box">
          <div className="aseguranzas-box fade-up">
            <h2>Antes de su cita</h2>
            <ul>
              <li>
                <CheckCircle2 className="benefit-icon" />
                Llámenos para confirmar si su aseguranza está cubierta.
              </li>
              <li>
                <CheckCircle2 className="benefit-icon" />
                Consulte con su proveedor los beneficios y restricciones de su plan.
              </li>
            </ul>
          </div>

          <div className="aseguranzas-box fade-up">
            <h2>Validación de cobertura</h2>
            <p className="aseguranzas-text">
              Nuestro equipo puede ayudarle a verificar su aseguranza con claridad
              y profesionalismo, para que llegue a su cita con total tranquilidad.
            </p>

            <a href="tel:9158752441" className="aseguranzas-button dark">
              <Phone size={20} />
              Aseguranzas
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Aseguranzas;