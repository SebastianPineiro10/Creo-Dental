import { useEffect, useRef } from "react";
import "./footer.css";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

function FooterUsa() {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer fade-in-footer">
      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          <h2 className="brand-title">Creo Dental</h2>
          <p className="brand-subtitle">
            Dental clinic specialized in aesthetic rehabilitation and personalized care.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-links">
          <h3 className="footer-heading">Navigation</h3>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* CONTACT */}
        <div className="footer-info">
          <h3 className="footer-heading">Contact</h3>
          <p>Av. Juárez 315, Ciudad Juárez</p>
          <p>Phone: 656 311 6130 / 915 875 2441</p>
          <p>Email: creodental122@gmail.com</p>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/creodentalclinica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={22} strokeWidth={1.2} />
            </a>

            <a
              href="https://www.instagram.com/clinicacreodental/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={22} strokeWidth={1.2} />
            </a>

            <a
              href="https://wa.me/526563116130?text=Hello,%20I%20would%20like%20to%20schedule%20an%20appointment%20at%20Creo%20Dental"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={22} strokeWidth={1.2} />
            </a>
          </div>
        </div>

        {/* MAP */}
        <div className="footer-map">
          <h3 className="footer-heading">Location</h3>
          <iframe
            title="Creo Dental Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.048885258822!2d-106.4853582!3d31.741866599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e759fbe8d183c5%3A0x61ff40393587918b!2sCREO%20Dental!5e0!3m2!1ses!2smx!4v1765671580622!5m2!1ses!2smx"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="divider"></div>

      {/* LEGAL */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Creo Dental · All rights reserved</p>
      </div>
    </footer>
  );
}

export default FooterUsa;
