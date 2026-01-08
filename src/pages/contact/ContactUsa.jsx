import "./contact.css";
import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

function ContactUsa() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`contact-section ${fadeIn ? "fade-in" : ""}`}>
      <div className="contact-container">

        {/* HEADER */}
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Find the nearest clinic and book your appointment. At Creo Dental, we welcome you with professional and personalized care.
          </p>
        </header>

        {/* CLINICS GRID */}
        <div className="clinics-grid">

          {/* ===========================
              JUÁREZ CLINIC
          ============================ */}
          <div className="contact-card">
            <h2>Creo Dental Juárez</h2>

            {/* ADDRESS */}
            <div className="info-row">
              <MapPin size={18} strokeWidth={1.5} />
              <div>
                <h3>Address</h3>
                <p>Av. Juárez 315 — Ciudad Juárez, Chihuahua</p>
              </div>
            </div>

            {/* PHONES */}
            <div className="info-row">
              <Phone size={18} strokeWidth={1.5} />
              <div>
                <h3>Phones</h3>

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

            {/* HOURS */}
            <div className="info-row">
              <Clock size={18} strokeWidth={1.5} />
              <div>
                <h3>Opening Hours</h3>
                <p>Monday to Saturday: 9 AM – 6 PM</p>
                <p>Sunday: 10 AM – 4 PM</p>
              </div>
            </div>

            {/* MAP */}
            <div className="clinic-map">
              <iframe
                title="Map Creo Dental Juárez"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.048719077562!2d-106.48793312422715!3d31.741871136164946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e759fbe8d183c5%3A0x61ff40393587918b!2sCREO%20Dental!5e0!3m2!1ses!2smx!4v1765495905542!5m2!1ses!2smx"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/526563116130?text=Hi,%20I'm%20interested%20in%20booking%20an%20appointment%20at%20Creo%20Dental%20Juárez"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Book via WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUsa;
