import "./Juarez.css";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import juarezImages from "./juarez.images.js";

function JuarezUsa() {
  return (
    <section className="juarez-section">

      {/* ==============================
          HEADER
      ============================== */}
      <header className="juarez-header">
        <h1>Creo Dental Clinic — Juárez</h1>
        <p className="juarez-address">
          <MapPin size={18} strokeWidth={1.5} />
          <span>Av. Juárez 315 — Ciudad Juárez, Chihuahua</span>
        </p>
      </header>

      {/* ==============================
          INFO + MAP
      ============================== */}
      <div className="juarez-grid">

        <div className="juarez-info">
          <div className="info-item">
            <Clock size={18} strokeWidth={1.5} />
            <div>
              <h3>Hours</h3>
              <p>Monday to Saturday — 9:00 AM – 6:00 PM</p>
              <p>Sunday — 10:00 AM – 4:00 PM</p>
            </div>
          </div>

          <div className="info-item">
            <Phone size={18} strokeWidth={1.5} />
            <div>
              <h3>Phone Numbers</h3>
              <p>+52 656 311 6130</p>
              <p>+1 915 875 2441</p>
            </div>
          </div>

          <a
            href="https://wa.me/526563116130?text=Hello,%20I%20would%20like%20to%20schedule%20an%20appointment%20at%20Creo%20Dental%20Juárez"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            Schedule via WhatsApp
          </a>
        </div>

        <div className="juarez-map">
          <iframe
            title="Creo Dental Juárez Map"
            src="https://www.google.com/maps?q=Av.+Ju%C3%A1rez+315,+Ciudad+Ju%C3%A1rez,+Chihuahua&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* ==============================
          GALLERY
      ============================== */}
      <h2 className="juarez-gallery-title">
        Our Facilities
      </h2>

      <div className="juarez-gallery">
        {juarezImages.map((image, index) => (
          <div
            key={index}
            className={`gallery-item ${image.large ? "large" : ""}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default JuarezUsa;
