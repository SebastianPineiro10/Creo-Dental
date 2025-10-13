import "./Juarez.css";
import { FaWhatsapp } from "react-icons/fa";

function Juarez() {
  return (
    <section className="sucursal-page">
      <div className="sucursal-header">
        <h1>Clínica Creo Dental Juárez</h1>
        <p>Av. Juárez 315 — Ciudad Juárez, Chihuahua</p>
      </div>

      <div className="sucursal-info">
        <div className="sucursal-details">
          <h3>Horarios</h3>
          <p>Lunes a Sábado: 9AM – 6PM</p>
          <p>Domingo: 10AM – 4PM</p>

          <h3>Teléfonos</h3>
          <p>📞 656 311 6130</p>
          <p>📞 915 875 2441</p>

          <a
            href="https://wa.me/526563116130?text=Hola,%20me%20interesa%20agendar%20una%20cita%20en%20Creo%20Dental%20Juárez"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp /> Agendar por WhatsApp
          </a>
        </div>

        <div className="sucursal-map">
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