import "./Americas.css";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";

function Americas() {
  return (
    <section className="americas-section">
      {/* Encabezado */}
      <header className="americas-header">
        <h1>Clínica Creo Dental Américas</h1>
        <p className="americas-address">
          <MapPin size={18} strokeWidth={1.5} />
          <span>Ignacio Zaragoza 2873 — Ciudad Juárez, Chihuahua</span>
        </p>
      </header>

      {/* Contenido */}
      <div className="americas-grid">
        <div className="americas-info">
          <div className="info-item">
            <Clock size={18} strokeWidth={1.5} />
            <div>
              <h3>Horarios</h3>
              <p>Lunes a Sábado — 10 AM – 6 PM</p>
              <p>(Solo con cita previa)</p>
            </div>
          </div>

          <div className="info-item">
            <Phone size={18} strokeWidth={1.5} />
            <div>
              <h3>Teléfonos</h3>
              <p>656 418 9051</p>
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

        <div className="americas-map">
          <iframe
            title="Mapa Creo Dental Américas"
            src="https://www.google.com/maps?q=Ignacio+Zaragoza+2873,+Ciudad+Ju%C3%A1rez,+Chihuahua&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Americas;