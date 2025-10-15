import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo y lema */}
        <div className="footer-logo">
          <h2>Creo Dental</h2>
          <p>Tu sonrisa, nuestra prioridad.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Navegación</h3>
          <a href="/">Inicio</a>
          <a href="/services">Servicios</a>
          <a href="/contact">Contacto</a>
        </div>

        {/* Información */}
        <div className="footer-info">
          <h3>Contacto</h3>
          <p>Av. Ejemplo 123, Juarez</p>
          <p>+52 000 00 00</p>
          <p>contacto@creodental.com</p>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Creo Dental | Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;