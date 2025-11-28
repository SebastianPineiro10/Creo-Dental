import "./aseguranzas.css";
import {
  ShieldCheck,
  Phone,
  MessageCircleMore,
  CheckCircle2,
} from "lucide-react";

function Aseguranzas() {
  return (
    <section className="aseguranzas-section">

      {/* ===============================
          HERO PREMIUM SOBRE FONDO DIVIDIDO
      =============================== */}
      <div className="aseguranzas-hero-wrapper">
        <img
          src="https://res.cloudinary.com/dcerhiol0/image/upload/v1764298877/WhatsApp_Image_2025-11-17_at_21.09.49_hqhaui.jpg"
          alt="Sucursal Creo Dental"
          className="aseguranzas-hero-img"
        />

        <div className="aseguranzas-hero-content">
          <h2 className="aseguranzas-hero-title">
            <ShieldCheck size={28} className="aseguranzas-hero-icon" />
            Aseguranzas que Aceptamos
          </h2>

          <p className="aseguranzas-hero-sub">
            Cobertura dental de México y Estados Unidos con atención especializada.
          </p>
        </div>
      </div>

      {/* ===============================
          CONTENIDO CENTRAL
      =============================== */}
      <div className="aseguranzas-container">

        <p className="aseguranzas-subtitle">
          En Creo Dental ofrecemos atención accesible y profesional validando una amplia variedad de aseguranzas dentales.
          <br />
          Trabajamos con aseguradoras de México y Estados Unidos.
        </p>

        {/* GRID */}
        <div className="aseguranzas-grid">
          {[
            "Delta Dental", "Cigna", "Aetna", "MetLife", "Humana",
            "United Health Care", "Anthem", "Blue Cross Blue Shield",
            "Guardian Life", "Ameritas", "DentaQuest", "United Concordia",
            "Renaissance Dental", "GEHA", "Principal Financial Group",
            "Lincoln Dental Connect", "American Dental Solutions",
            "Dental Health Alliance", "Care Credit", "¡Y más!"
          ].map((seguro, i) => (
            <div key={i} className="aseguradora-card">
              <p>{seguro}</p>
            </div>
          ))}
        </div>

        {/* IMPORTANTE */}
        <div className="aseguranzas-benefits">
          <h2>Antes de su cita</h2>
          <ul>
            <li>
              <CheckCircle2 className="benefit-icon" />
              Le recomendamos llamarnos para confirmar si aceptamos su seguro.
            </li>
            <li>
              <CheckCircle2 className="benefit-icon" />
              También puede consultar con su proveedor la cobertura del procedimiento.
            </li>
          </ul>
        </div>

        {/* CTA */}
    <div className="aseguranzas-cta">
    <h3>¿Desea validar su aseguranza?</h3>
    <p>
        Nuestro equipo está listo para apoyarle con claridad, rapidez y profesionalismo.
    </p>

    {/* CONTENEDOR FLEX REAL */}
    <div className="aseguranzas-buttons-row">
        <a href="tel:9158752441" className="aseguranzas-button">
        <Phone size={18} />
        Llamar a Creo Dental
        </a>
    </div>
    </div>

      </div>
    </section>
  );
}

export default Aseguranzas;