import "./aseguranzas.css";
import { Phone, CheckCircle2 } from "lucide-react";
import { aseguranzasData } from "../aseguranzas/aseguranzasData.js";

function AseguranzasUsa() {
  return (
    <section className="aseguranzas-section">

      {/* ========== HERO ========== */}
      <div className="aseguranzas-hero-wrapper">
        <img
          src="https://res.cloudinary.com/dcerhiol0/image/upload/v1764298877/WhatsApp_Image_2025-11-17_at_21.09.49_hqhaui.jpg"
          alt="Creo Dental Branch"
          className="aseguranzas-hero-img"
        />

        <div className="aseguranzas-hero-content">
          <h2 className="aseguranzas-hero-title">
            Insurance Plans We Accept
          </h2>
          <p className="aseguranzas-hero-sub">
            Dental coverage from Mexico and the United States, verified professionally.
          </p>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="aseguranzas-container">

        <p className="aseguranzas-subtitle">
          We work with a wide selection of insurance plans to provide clarity, 
          confidence, and truly professional care.
        </p>

        {/* ========== INSURANCE GRID ========== */}
        <div className="aseguranzas-grid">
          {aseguranzasData.map((seguro, i) => (
            <div key={i} className="aseguranza-item">
              {seguro.logo ? (
                <img
                  className="aseguradora-logo"
                  src={seguro.logo}
                  alt={seguro.nombre}
                />
              ) : (
                <p className="aseguranzas-mas">{seguro.nombre}</p>
              )}
            </div>
          ))}
        </div>

        {/* ========== INFORMATION BLOCKS ========== */}
        <div className="aseguranzas-double-box">

          <div className="aseguranzas-box">
            <h2>Before Your Appointment</h2>
            <ul>
              <li>
                Call us to confirm whether your insurance plan is covered.
              </li>
              <li>
                Check with your provider for plan benefits and restrictions.
              </li>
            </ul>
          </div>

          <div className="aseguranzas-box">
            <h2>Coverage Verification</h2>
            <p className="aseguranzas-text">
              Our team can help verify your insurance clearly and professionally,
              so you can arrive at your appointment with total peace of mind.
            </p>

            <a href="tel:9158752441" className="aseguranzas-button dark">
              <Phone size={20} />
              Insurance Support
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AseguranzasUsa;
