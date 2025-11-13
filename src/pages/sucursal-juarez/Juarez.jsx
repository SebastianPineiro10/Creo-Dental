import "./Juarez.css";
import {Phone,Clock,MapPin,MessageCircle,} from "lucide-react";

function Juarez() {
  return (
    <section className="juarez-section">
      {/* Encabezado */}
      <header className="juarez-header">
        <h1>Clínica Creo Dental Juárez</h1>
        <p className="juarez-address">
          <MapPin size={18} strokeWidth={1.5} />
          <span>Av. Juárez 315 — Ciudad Juárez, Chihuahua</span>
        </p>
      </header>

      {/* Contenido */}
      <div className="juarez-grid">
        <div className="juarez-info">
          <div className="info-item">
            <Clock size={18} strokeWidth={1.5} />
            <div>
              <h3>Horarios</h3>
              <p>Lunes a Sábado — 9 AM – 6 PM</p>
              <p>Domingo — 10 AM – 4 PM</p>
            </div>
          </div>

          <div className="info-item">
            <Phone size={18} strokeWidth={1.5} />
            <div>
              <h3>Teléfonos</h3>
              <p>+52 656 311 6130</p>
              <p>+1 915 875 2441</p>
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

        <div className="juarez-map">
          <iframe
            title="Mapa Creo Dental Juárez"
            src="https://www.google.com/maps?q=Av.+Ju%C3%A1rez+315,+Ciudad+Ju%C3%A1rez,+Chihuahua&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Juarez;