import { useEffect, useRef } from "react";
import "./footer.css";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

function Footer() {
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

        {/* ---------- LOGO Y LEMA ---------- */}
        <div className="footer-logo">
          <h2 className="brand-title">Creo Dental</h2>
          <p className="brand-subtitle">Tu sonrisa, nuestra prioridad.</p>
        </div>

        {/* ---------- NAVEGACIÓN ---------- */}
        <div className="footer-links">
          <h3 className="footer-heading">Navegación</h3>
          <a href="/">Inicio</a>
          <a href="/services">Servicios</a>
          <a href="/contact">Contacto</a>
        </div>

        {/* ---------- INFORMACIÓN Y REDES ---------- */}
        <div className="footer-info">
          <h3 className="footer-heading">Contacto</h3>
          <p>Av. Juárez 315</p>
          <p>Tel: 656 311 6130 / 915 875 2441</p>
          <p>Email: creodental122@gmail.com</p>

          {/* Redes sociales */}
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/creodentalclinica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={22} strokeWidth={1.2} />
            </a>
            <a
              href="https://www.instagram.com/clinicacreodental/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={22} strokeWidth={1.2} />
            </a>
            <a
              href="https://wa.me/526563116130"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} strokeWidth={1.2} />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- DIVISOR ---------- */}
      <div className="divider"></div>

      {/* ---------- COPYRIGHT ---------- */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Creo Dental — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;