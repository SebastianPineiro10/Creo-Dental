import "./Americas.css";
import { FaWhatsapp } from "react-icons/fa";

function Americas() {
  return (
    <section className="sucursal-page">
      <div className="sucursal-header">
        <h1>Clínica Creo Dental Américas</h1>
        <p>Ignacio Zaragoza 2873 — Ciudad Juárez, Chihuahua</p>
      </div>

      <div className="sucursal-info">
        <div className="sucursal-details">
          <h3>Horarios</h3>
          <p>Lunes a Sábado: 10AM – 6PM</p>
          <p>(Solo con cita previa)</p>

          <h3>Teléfonos</h3>
          <p>📞 656 418 9051</p>

          <a
            href="https://wa.me/526564189051?text=Hola,%20me%20interesa%20agendar%20una%20cita%20en%20Creo%20Dental%20Américas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp /> Agendar por WhatsApp
          </a>
        </div>

        <div className="sucursal-map">
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