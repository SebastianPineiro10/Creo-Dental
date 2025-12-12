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

        {/* CABECERA */}
        <header className="contact-header">
          <h1>Contáctanos</h1>
          <p>
            Encuentra la clínica más cercana y agenda tu cita. En Creo Dental,
            te esperamos con atención profesional y personalizada.
          </p>
        </header>

        {/* GRID DE CLÍNICAS */}
        <div className="clinics-grid">

      {/* ===========================
          CLÍNICA JUÁREZ
      ============================ */}
      <div className="contact-card">
        <h2>Creo Dental Juárez</h2>

        {/* DIRECCIÓN */}
        <div className="info-row">
          <MapPin size={18} strokeWidth={1.5} />
          <div>
            <h3>Dirección</h3>
            <p>Av. Juárez 315 — Ciudad Juárez, Chihuahua</p>
          </div>
        </div>

        {/* TELÉFONOS */}
        <div className="info-row">
          <Phone size={18} strokeWidth={1.5} />
          <div>
            <h3>Teléfonos</h3>

            <div className="phone-buttons">
              <a href="tel:+526563116130" className="btn-phone">
                <Phone size={16} strokeWidth={1.5} />
                +52 656 311 6130
              </a>

              <a href="tel:+19158752441" className="btn-phone">
                <Phone size={16} strokeWidth={1.5} />
                +1 915 875 2441
              </a>
            </div>
          </div>
        </div>

        {/* HORARIOS */}
        <div className="info-row">
          <Clock size={18} strokeWidth={1.5} />
          <div>
            <h3>Horarios</h3>
            <p>Lunes a Sábado: 9 AM – 6 PM</p>
            <p>Domingo: 10 AM – 4 PM</p>
          </div>
        </div>

        {/* MAPA */}
        <div className="clinic-map">
          <iframe
            title="Mapa Creo Dental Juárez"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.048719077562!2d-106.48793312422715!3d31.741871136164946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e759fbe8d183c5%3A0x61ff40393587918b!2sCREO%20Dental!5e0!3m2!1ses!2smx!4v1765495905542!5m2!1ses!2smx"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* WHATSAPP */}
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


      {/* ===========================
        CLÍNICA AMÉRICAS
    ============================ */}
    <div className="contact-card">
      <h2>Creo Dental Américas</h2>

      {/* DIRECCIÓN */}
      <div className="info-row">
        <MapPin size={18} strokeWidth={1.5} />
        <div>
          <h3>Dirección</h3>
          <p>Ignacio Zaragoza 2873 — Ciudad Juárez, Chihuahua</p>
        </div>
      </div>

      {/* TELÉFONO */}
      <div className="info-row">
        <Phone size={18} strokeWidth={1.5} />
        <div>
          <h3>Teléfono</h3>

          <div className="phone-buttons">
            <a href="tel:+526564189051" className="btn-phone">
              <Phone size={16} strokeWidth={1.5} />
              +52 656 418 9051
            </a>
          </div>
        </div>
      </div>

      {/* HORARIOS */}
      <div className="info-row">
        <Clock size={18} strokeWidth={1.5} />
        <div>
          <h3>Horarios</h3>
          <p>10 AM – 6 PM (Solo con cita previa)</p>
        </div>
      </div>

      {/* MAPA */}
      <div className="clinic-map">
        <iframe
          title="Mapa Creo Dental Américas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.1685128426366!2d-106.4604857242272!3d31.7386010363274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e759b374400755%3A0x3c62669da99a235c!2sCREO%20Dental%20Americas!5e0!3m2!1ses!2smx!4v1765496600449!5m2!1ses!2smx"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* WHATSAPP */}
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