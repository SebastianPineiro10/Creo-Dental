// Contact.jsx
import "./Contact.css";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaFacebookF, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [borderAnimated, setBorderAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBorderAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className={`contact-card ${borderAnimated ? "animate-border" : ""}`}>
          <h2 className="contact-title">Sucursal Ciudad Juárez</h2>
          <p className="contact-subtitle">Estamos para ayudarte. Escríbenos o visítanos.</p>

          <div className="contact-item">
            <span className="label">Dirección:</span>
            <span className="value">Av. Benito Juárez 456, Ciudad Juárez, Chihuahua</span>
          </div>

          <div className="contact-item">
            <span className="label">Teléfono:</span>
            <span className="value">+52 656 123 4567</span>
          </div>

          <div className="contact-item">
            <span className="label">Email:</span>
            <span className="value">contacto@clinicajrz.com</span>
          </div>

          <div className="social-icons">
            <a
              href="https://wa.me/526561234567?text=Hola,%20quisiera%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tooltip="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com/clinicajrz"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tooltip="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="mailto:contacto@clinicajrz.com"
              className="tooltip"
              data-tooltip="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;