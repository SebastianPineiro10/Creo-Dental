import "./contact.css";
import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

function Contact() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`contact-section ${fadeIn ? "fade-in" : ""}`}>
      <div className="contact-container">
        <header className="contact-header">
          <h1>Contáctanos</h1>
          <p>
            Encuentra la clínica más cercana y agenda tu cita. En Creo Dental, te
            esperamos con atención profesional y personalizada.
          </p>
        </header>

        {/* --- GRID CON DOS CLÍNICAS --- */}
        <div className="clinics-grid">
          {/* -------- CLÍNICA JUÁREZ -------- */}
          <div className="contact-card">
            <h2>Creo Dental Juárez</h2>

            <div className="info-row">
              <MapPin size={18} strokeWidth={1.5} />
              <div>
                <h3>Dirección</h3>
                <p>Av. Juárez 315 — Ciudad Juárez, Chihuahua</p>
              </div>
            </div>

            <div className="info-row">
              <Phone size={18} strokeWidth={1.5} />
              <div>
                <h3>Teléfonos</h3>
                <p>656 311 6130 / 915 875 2441</p>
              </div>
            </div>

            <div className="info-row">
              <Clock size={18} strokeWidth={1.5} />
              <div>
                <h3>Horarios</h3>
                <p>Lunes a Sábado: 9 AM – 6 PM</p>
                <p>Domingo: 10 AM – 4 PM</p>
              </div>
            </div>

            <a
              href="https://wa.me/526563116130?text=Hola,%20me%20interesa%20agendar%20una%20cita%20en%20Creo%20Dental%20Juárez"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Agendar por WhatsApp
            </a>
          </div>

          {/* -------- CLÍNICA AMÉRICAS -------- */}
          <div className="contact-card">
            <h2>Creo Dental Américas</h2>

            <div className="info-row">
              <MapPin size={18} strokeWidth={1.5} />
              <div>
                <h3>Dirección</h3>
                <p>Ignacio Zaragoza 2873 — Ciudad Juárez, Chihuahua</p>
              </div>
            </div>

            <div className="info-row">
              <Phone size={18} strokeWidth={1.5} />
              <div>
                <h3>Teléfono</h3>
                <p>656 418 9051</p>
              </div>
            </div>

            <div className="info-row">
              <Clock size={18} strokeWidth={1.5} />
              <div>
                <h3>Horarios</h3>
                <p>10 AM – 6 PM (Solo con cita previa)</p>
              </div>
            </div>

            <a
              href="https://wa.me/526564189051?text=Hola,%20me%20interesa%20agendar%20una%20cita%20en%20Creo%20Dental%20Américas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;